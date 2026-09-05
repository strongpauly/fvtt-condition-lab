![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/strongpauly/fvtt-condition-lab)
![GitHub release (latest by SemVer and asset)](https://img.shields.io/github/downloads/strongpauly/fvtt-condition-lab/latest/module.zip)

# Condition Lab

---

**[🐛Issues/Bugs](https://github.com/strongpauly/fvtt-condition-lab/issues)**
**[📜Changelog](https://github.com/strongpauly/fvtt-condition-lab/blob/master/CHANGELOG.md)**
**[🛠 Features](#features)**
**[👏Thanks](#thanks)**
**[❗Attribution](#attribution)**

---

> Take control of your game's conditions. Build your own status effects, link them to their rules text, back them with Active Effects, run a macro when they are applied or removed, and announce them in chat.

# Features

Condition Lab replaces Foundry's fixed list of token status effects with a **condition map** you control. Each row in the map is one condition: an icon, a name, a link to its rules text, an Active Effect, and a set of behaviours that fire when it is applied or removed. Whatever you save is what your players see in the token HUD.

Open it from **Game Settings → Configure Settings → Condition Lab**, or bind a key to "Open Condition Lab".

## Building the map

- Add, rename, re-icon, reorder and delete conditions. The order you save them in is the order the token HUD shows them in (unless Force Alphabetical Sort is on).
- Start from your system's own conditions — the map is inferred from them when the module doesn't bundle one — or from a bundled map. Maps ship for D&D 5e, Pathfinder 1e, 13th Age, Cyberpunk Red and Ironclaw 2e. **Restore Defaults** takes you back to the system map at any point.
- Link a condition to a Journal Entry, Item or compendium entry by dropping it onto the row, so anyone can click through to the rules from the chat card.
- Import and export the whole map as JSON to share it or carry it between worlds.
- Filter the list by name and sort it alphabetically while you work.

## Making conditions do something

- Attach an **Active Effect** to a condition so applying it actually changes the actor — its own changes, duration and description, edited in Foundry's normal effect editor.
- Run a **macro** when the condition is applied, and another when it is removed.
- Per-condition options:
  - **Overlay** — apply the icon over the whole token instead of as a small status icon.
  - **Remove others** — applying this condition clears every other condition from the actor.
  - **Mark defeated** — marks the actor's combatant as defeated while the condition is active.
  - **Output to chat** — announce this particular condition when it is applied or removed.
  - **Special status effects** — hand a condition one of Foundry's built-in roles (defeated, blinded, invisible, burrowing, flying, hovering) so core behaviour follows your condition rather than the system's.

## Chat output

- Conditions applied to or removed from a token are announced in chat, with the condition's icon, name and reference link. Further changes to the same token are appended to the last card rather than posting a new one each time.
- GMs get buttons on the card to remove a condition, or to undo one that was just removed.
- Optionally announce the current combatant's conditions at the start of each of their rounds, and optionally include the system's default conditions as well as your own.

## Token HUD

- **Force Alphabetical Sort** (on by default) lists every status effect in the HUD by name, including the ones a system pins to the top. Turn it off to use your Condition Lab order instead.
- **Remove Default Status Effects** hides the system's own status effects so the HUD shows only your conditions.
- Set the token status icon size — 5x5 through 2x2 — unless another module is already managing it.

## For macro and module authors

`game.clt` exposes the condition API — `addCondition`, `removeCondition`, `hasCondition`, `getConditions` and friends. See [API.md](API.md).

---

# Thanks

Thanks to everyone that supports this project.

Thanks to everyone that supported the original project. You can see who on [CUB's contributors](https://github.com/death-save/combat-utility-belt#contributors-).

Thanks to everyone that supported the forked project. You can see who on [CLT's contributors](https://github.com/mclemente/fvtt-condition-lab-triggler/graphs/contributors).

The original project acknowledged that many of the functions found in the Combat Utility Belt are inspired by [Roll20 API scripts](https://github.com/RobinKuiper/Roll20APIScripts) written by @RobinKuiper.

# Attribution

This project is a fork of [Condition Lab and Triggler, by mclemente](https://github.com/mclemente/fvtt-condition-lab).

Concentration icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [Flat Icon](www.flaticon.com)
