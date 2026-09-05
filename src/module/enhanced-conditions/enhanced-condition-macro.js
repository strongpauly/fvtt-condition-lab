const { ApplicationV2, HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * Enhanced Condition Macro Config Application
 */
export default class EnhancedConditionMacroConfig extends HandlebarsApplicationMixin(ApplicationV2) {
	constructor(object, options = {}) {
		super(options);

		this.object = object ?? {};
		this.object.macros = this.object.macros ?? [];

		this.initialObject = foundry.utils.duplicate(this.object);
	}

	/** @override */
	static DEFAULT_OPTIONS = {
		id: "cub-enhanced-condition-macro-config",
		classes: ["sheet"],
		tag: "form",
		position: {
			width: 400
		},
		window: {
			title: "CLT.ENHANCED_CONDITIONS.MacroConfig.Title"
		},
		form: {
			handler: EnhancedConditionMacroConfig.#onSubmitForm,
			submitOnChange: false,
			closeOnSubmit: false
		}
	};

	/** @override */
	static PARTS = {
		form: {
			template: "modules/condition-lab/templates/enhanced-condition-macro-config.hbs"
		}
	};

	/** @override */
	async _prepareContext(options) {
		const context = await super._prepareContext(options);
		const conditionMacros = this.object.macros;
		const applyMacroId = conditionMacros.find((m) => m.type === "apply")?.id;
		const removeMacroId = conditionMacros.find((m) => m.type === "remove")?.id;

		const macroChoices = game.macros?.contents
			?.map((m) => {
				return { id: m.id, name: m.name };
			})
			.sort((a, b) => a.name.localeCompare(b.name));

		return Object.assign(context, {
			condition: this.object,
			applyMacroId,
			removeMacroId,
			macroChoices
		});
	}

	/**
	 * Form submission handler
	 * @private
	 * @this {EnhancedConditionMacroConfig}
	 * @param {SubmitEvent} event
	 * @param {HTMLFormElement} form
	 * @param {FormDataExtended} formData
	 */
	static #onSubmitForm(event, form, formData) {
		return this._updateObject(event, formData.object);
	}

	async _updateObject(event, formData) {
		this.object.macros = [];

		for (const field in formData) {
			const type = field.split("-").slice(-1)
				.pop() ?? "";
			const tempMacro = { id: formData[field], type: type };
			this.object.macros.push(tempMacro);
		}

		const map = game.clt.conditions;
		const newMap = foundry.utils.duplicate(map);

		let conditionIndex = newMap.findIndex((c) => c.id === this.object.id);
		newMap[conditionIndex] = this.object;
		await game.settings.set("condition-lab", "activeConditionMap", newMap);
		this.close();
	}
}
