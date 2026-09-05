import fs from "fs-extra";
import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import jsdoc2md from "jsdoc-to-markdown";
import path from "node:path";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import rollupStream from "@rollup/stream";
import { compilePack } from "@foundryvtt/foundryvtt-cli";

import rollupConfig from "./rollup.config.mjs";

/********************/
/*  CONFIGURATION   */
/********************/

const packageId = "condition-lab";
const sourceDirectory = "./src";
const distDirectory = "./dist";
const stylesDirectory = `${sourceDirectory}/styles`;
const stylesExtension = "css";
const sourceFileExtension = "js";
const staticFiles = ["condition-maps", "icons", "lang", "templates", "module.json"];
const packsSourceDirectory = `${sourceDirectory}/packs/_source`;
const packsDirectory = `${distDirectory}/packs`;

/********************/
/*      BUILD       */
/********************/

let cache;

/**
 * Build the distributable JavaScript code
 */
function buildCode() {
	return rollupStream({ ...rollupConfig(), cache })
		.on("bundle", (bundle) => {
			cache = bundle;
		})
		.pipe(source(`${packageId}.js`))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(`${distDirectory}/module`));
}

/**
 * Build style sheets
 */
function buildStyles() {
	return gulp.src(`${stylesDirectory}/${packageId}.${stylesExtension}`).pipe(gulp.dest(`${distDirectory}/styles`));
}

/**
 * Copy static files
 */
async function copyFiles() {
	for (const file of staticFiles) {
		if (fs.existsSync(`${sourceDirectory}/${file}`)) {
			await fs.copy(`${sourceDirectory}/${file}`, `${distDirectory}/${file}`);
		}
	}
}

/**
 * Compile the compendium pack sources into LevelDB packs
 *
 * To edit a pack, load the built module in Foundry, make the changes there, then write them back to the sources with
 * `npx fvtt package unpack <packName> --in dist/packs --out src/packs/_source/<packName> --clean`
 */
async function buildPacks() {
	if (!fs.existsSync(packsSourceDirectory)) return;

	const packs = fs.readdirSync(packsSourceDirectory, { withFileTypes: true }).filter((entry) => entry.isDirectory());

	for (const pack of packs) {
		const source = path.join(packsSourceDirectory, pack.name);
		const destination = path.join(packsDirectory, pack.name);

		// LevelDB keeps entries that are no longer in the source, so start from a clean pack every time
		await fs.remove(destination);
		await compilePack(source, destination, { recursive: true, log: true });
	}
}

/**
 * Watch for changes for each build step
 */
export function watch() {
	gulp.watch(`${sourceDirectory}/**/*.${sourceFileExtension}`, { ignoreInitial: false }, buildCode);
	gulp.watch(`${stylesDirectory}/**/*.${stylesExtension}`, { ignoreInitial: false }, buildStyles);
	gulp.watch(
		staticFiles.map((file) => `${sourceDirectory}/${file}`),
		{ ignoreInitial: false },
		copyFiles,
	);
	gulp.watch(`${packsSourceDirectory}/**/*.json`, { ignoreInitial: false }, buildPacks);
}

export const build = gulp.series(clean, gulp.parallel(buildCode, buildStyles, buildPacks, copyFiles));

export { buildPacks as packs };

/********************/
/*      CLEAN       */
/********************/

/**
 * Remove built files from `dist` folder while ignoring source files
 */
export async function clean() {
	const files = [...staticFiles, "module", "packs"];

	if (fs.existsSync(`${stylesDirectory}/${packageId}.${stylesExtension}`)) {
		files.push("styles");
	}

	console.log(" ", "Files to clean:");
	console.log("   ", files.join("\n    "));

	for (const filePath of files) {
		await fs.remove(`${distDirectory}/${filePath}`);
	}
}

/********************/
/*       LINK       */
/********************/

/**
 * Get the data paths of Foundry VTT based on what is configured in `foundryconfig.json`
 */
function getDataPaths() {
	const config = fs.readJSONSync("foundryconfig.json");
	const dataPath = config?.dataPath;

	if (dataPath) {
		const dataPaths = Array.isArray(dataPath) ? dataPath : [dataPath];

		return dataPaths.map((dataPath) => {
			if (typeof dataPath !== "string") {
				throw new Error(
					`Property dataPath in foundryconfig.json is expected to be a string or an array of strings, but found ${dataPath}`,
				);
			}
			if (!fs.existsSync(path.resolve(dataPath))) {
				throw new Error(`The dataPath ${dataPath} does not exist on the file system`);
			}
			return path.resolve(dataPath);
		});
	} else {
		throw new Error("No dataPath defined in foundryconfig.json");
	}
}

/**
 * Link build to User Data folder
 */
export async function link() {
	let destinationDirectory;
	if (fs.existsSync(path.resolve(sourceDirectory, "module.json"))) {
		destinationDirectory = "modules";
	} else {
		throw new Error("Could not find module.json");
	}

	const linkDirectories = getDataPaths().map((dataPath) =>
		path.resolve(dataPath, "Data", destinationDirectory, packageId),
	);

	const argv = yargs(hideBin(process.argv)).option("clean", {
		alias: "c",
		type: "boolean",
		default: false,
	}).argv;
	const clean = argv.c;

	for (const linkDirectory of linkDirectories) {
		if (clean) {
			console.log(`Removing build in ${linkDirectory}.`);

			await fs.remove(linkDirectory);
		} else if (!fs.existsSync(linkDirectory)) {
			console.log(`Linking dist to ${linkDirectory}.`);
			await fs.ensureDir(path.resolve(linkDirectory, ".."));
			await fs.symlink(path.resolve(distDirectory), linkDirectory);
		} else {
			console.log(`Skipped linking to ${linkDirectory}, as it already exists.`);
		}
	}
}

export function docs() {
	// Return the promise: signalling completion before the render resolves lets gulp finish the
	// task (and the process exit) before API.md is written
	return jsdoc2md
		.render({ files: ["src/module/**/*.?(m)js", "src/module/*.js"], configure: "jsdoc-conf.json" })
		.then((output) => fs.writeFileSync("API.md", output));
}
