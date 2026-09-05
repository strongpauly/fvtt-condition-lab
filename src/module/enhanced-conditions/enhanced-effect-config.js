/**
 * Active Effect config sheet for a Condition's Active Effect, writing changes back to the
 * Condition Lab's map instead of to a document
 */
export default class EnhancedEffectConfig extends foundry.applications.sheets.ActiveEffectConfig {
	/**
	 * The sheet title, naming the condition being edited
	 * @returns {string}
	 */
	get title() {
		const reference = this.document.name ? ` ${game.i18n.localize(this.document.name)}` : "";
		return `${game.i18n.localize(this.document.constructor.metadata.label)}${reference}`;
	}

	/**
	 * Override default update object behaviour
	 * @param {*} _event
	 * @param {*} form
	 * @param {*} data
	 * @override
	 */
	async _processSubmitData(_event, form, data) {
		const conditionIdFlag = this.document.getFlag(
			"condition-lab", "conditionId"
		);
		if (!conditionIdFlag) return;

		// find the matching condition row
		const map = ui.clt?.conditionLab?.map;

		if (!map && !map.length) return;

		const conditionId = conditionIdFlag.replace("condition-lab.", "");
		const condition = map.find((c) => c.id === conditionId);

		if (!condition) return;

		// update the effect data

		condition.activeEffect = condition.activeEffect
			? foundry.utils.mergeObject(condition.activeEffect, data)
			: data;

		this.document.updateSource(data);
		if (this.rendered) await this.render();
		if (ui.clt.conditionLab) {
			ui.clt.conditionLab.map = ui.clt.conditionLab.updatedMap;
			// ui.clt.conditionLab.unsaved = true;
			ui.clt.conditionLab.render();
		}
	}
}
