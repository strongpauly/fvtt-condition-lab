## Classes

<dl>
<dt><a href="#ConditionLab">ConditionLab</a></dt>
<dd><p>Application for managing mapping of Conditions to Icons and JournalEntries</p>
</dd>
<dt><a href="#EnhancedConditionMacroConfig">EnhancedConditionMacroConfig</a></dt>
<dd><p>Enhanced Condition Macro Config Application</p>
</dd>
<dt><a href="#EnhancedConditionOptionConfig">EnhancedConditionOptionConfig</a></dt>
<dd><p>Enhanced Condition Option Config Application</p>
</dd>
<dt><a href="#EnhancedConditions">EnhancedConditions</a></dt>
<dd><p>Builds a mapping between status icons and journal entries that represent conditions</p>
</dd>
<dt><a href="#EnhancedEffectConfig">EnhancedEffectConfig</a></dt>
<dd><p>Active Effect config sheet for a Condition&#39;s Active Effect, writing changes back to the
Condition Lab&#39;s map instead of to a document</p>
</dd>
<dt><a href="#Sidekick">Sidekick</a></dt>
<dd><p>Provides helper methods for use elsewhere in the module (and has your back in a melee)</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#CHANGE_MODES_TO_TYPES">CHANGE_MODES_TO_TYPES</a></dt>
<dd><p>Maps the legacy numeric ActiveEffect change <code>mode</code> to the Foundry v14 string <code>type</code>
(the lowercased mode name), e.g. 0 → &quot;custom&quot;, 5 → &quot;override&quot;. Derived from core&#39;s
CONST.ACTIVE_EFFECT_MODES so any newly added mode (e.g. &quot;subtract&quot;) is covered too.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#registerSettings">registerSettings()</a></dt>
<dd><p>Registers the module&#39;s settings.</p>
</dd>
</dl>

<a name="ConditionLab"></a>

## ConditionLab
Application for managing mapping of Conditions to Icons and JournalEntries

**Kind**: global class  

* [ConditionLab](#ConditionLab)
    * [.DEFAULT_OPTIONS](#ConditionLab+DEFAULT_OPTIONS)
    * [.PARTS](#ConditionLab+PARTS)
    * [.updatedMap](#ConditionLab+updatedMap) ⇒ <code>Array.&lt;object&gt;</code>
    * [._prepareContext(options)](#ConditionLab+_prepareContext) ⇒ <code>object</code>
    * [._buildSubmitData()](#ConditionLab+_buildSubmitData) ⇒ <code>object</code>
    * [._processFormData(formData)](#ConditionLab+_processFormData) ⇒ <code>object</code>
    * [._restoreDefaults(options)](#ConditionLab+_restoreDefaults)
    * [._updateObject(event, formData)](#ConditionLab+_updateObject)
    * [._processFormUpdate(formData)](#ConditionLab+_processFormUpdate)
    * [._saveMapping(newMap, mapType)](#ConditionLab+_saveMapping)
    * [._finaliseSave(preparedMap)](#ConditionLab+_finaliseSave)
    * [._exportToJSON()](#ConditionLab+_exportToJSON)
    * [._importFromJSONDialog()](#ConditionLab+_importFromJSONDialog)
    * [._processImport(form)](#ConditionLab+_processImport) ⇒ <code>\*</code>
    * [._getHeaderControls()](#ConditionLab+_getHeaderControls)
    * [._onRender()](#ConditionLab+_onRender)
    * [._onChangeInputs(event)](#ConditionLab+_onChangeInputs) ⇒ <code>Application.render</code>
    * [._onChangeFilter(event)](#ConditionLab+_onChangeFilter)
    * [._filterMapByName(map, filter)](#ConditionLab+_filterMapByName) ⇒ <code>Array.&lt;object&gt;</code>
    * [._onChangeMapType(event)](#ConditionLab+_onChangeMapType)
    * [._onClickActiveEffectConfig(event)](#ConditionLab+_onClickActiveEffectConfig)
    * [._onChangeReferenceId(event)](#ConditionLab+_onChangeReferenceId)
    * [._onAddRow(event)](#ConditionLab+_onAddRow)
    * [._onRemoveRow(event)](#ConditionLab+_onRemoveRow)
    * [._onChangeSortOrder(event)](#ConditionLab+_onChangeSortOrder)
    * [._onClickSortButton(event)](#ConditionLab+_onClickSortButton) ⇒ <code>Application</code>
    * [._sortMapByName(map, direction)](#ConditionLab+_sortMapByName) ⇒ <code>Array</code>
    * [._onRestoreDefaults(event)](#ConditionLab+_onRestoreDefaults)
    * [._onResetForm(event)](#ConditionLab+_onResetForm)
    * [._onClickMacroConfig(event)](#ConditionLab+_onClickMacroConfig)
    * [._onClickOptionConfig(event)](#ConditionLab+_onClickOptionConfig)
    * [._hasPropertyChanged(propertyName, original, comparison)](#ConditionLab+_hasPropertyChanged) ⇒ <code>boolean</code>

<a name="ConditionLab+DEFAULT_OPTIONS"></a>

### conditionLab.DEFAULT\_OPTIONS
**Kind**: instance property of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+PARTS"></a>

### conditionLab.PARTS
**Kind**: instance property of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+updatedMap"></a>

### conditionLab.updatedMap ⇒ <code>Array.&lt;object&gt;</code>
Get updated map by combining existing in-memory map with current formdata

**Kind**: instance property of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+_prepareContext"></a>

### conditionLab.\_prepareContext(options) ⇒ <code>object</code>
Gets data for the template render

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| options | <code>object</code> | 

<a name="ConditionLab+_buildSubmitData"></a>

### conditionLab.\_buildSubmitData() ⇒ <code>object</code>
Enriches submit data with existing map to ensure continuity

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+_processFormData"></a>

### conditionLab.\_processFormData(formData) ⇒ <code>object</code>
Processes the Form Data and builds a usable Condition Map

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| formData | <code>object</code> | 

<a name="ConditionLab+_restoreDefaults"></a>

### conditionLab.\_restoreDefaults(options)
Restore defaults for a mapping

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| options | <code>object</code> | 
| options.clearCache | <code>boolean</code> | 

<a name="ConditionLab+_updateObject"></a>

### conditionLab.\_updateObject(event, formData)
Take the new map and write it back to settings, overwriting existing

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>object</code> | 
| formData | <code>object</code> | 

<a name="ConditionLab+_processFormUpdate"></a>

### conditionLab.\_processFormUpdate(formData)
Process Condition Lab formdata and then save changes

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| formData | <code>\*</code> | 

<a name="ConditionLab+_saveMapping"></a>

### conditionLab.\_saveMapping(newMap, mapType)
Saves a given map and option map type to storage

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| newMap | <code>\*</code> | 
| mapType | <code>\*</code> | 

<a name="ConditionLab+_finaliseSave"></a>

### conditionLab.\_finaliseSave(preparedMap)
Performs final steps after saving mapping

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| preparedMap | <code>\*</code> | 

<a name="ConditionLab+_exportToJSON"></a>

### conditionLab.\_exportToJSON()
Exports the current map to JSON

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+_importFromJSONDialog"></a>

### conditionLab.\_importFromJSONDialog()
Initiates an import via a dialog
Borrowed from foundry.js Entity class

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+_processImport"></a>

### conditionLab.\_processImport(form) ⇒ <code>\*</code>
Process a Condition Map Import

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| form | <code>HTMLFormElement</code> | 

<a name="ConditionLab+_getHeaderControls"></a>

### conditionLab.\_getHeaderControls()
**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+_onRender"></a>

### conditionLab.\_onRender()
**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
<a name="ConditionLab+_onChangeInputs"></a>

### conditionLab.\_onChangeInputs(event) ⇒ <code>Application.render</code>
Input change handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onChangeFilter"></a>

### conditionLab.\_onChangeFilter(event)
Filter input change handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_filterMapByName"></a>

### conditionLab.\_filterMapByName(map, filter) ⇒ <code>Array.&lt;object&gt;</code>
Filter the given map by the name property using the supplied filter value, marking filtered entries as "hidden"

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
**Returns**: <code>Array.&lt;object&gt;</code> - filteredMap  

| Param | Type |
| --- | --- |
| map | <code>Array</code> | 
| filter | <code>string</code> | 

<a name="ConditionLab+_onChangeMapType"></a>

### conditionLab.\_onChangeMapType(event)
Change Map Type event handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onClickActiveEffectConfig"></a>

### conditionLab.\_onClickActiveEffectConfig(event)
Handle click Active Effect Config button

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onChangeReferenceId"></a>

### conditionLab.\_onChangeReferenceId(event)
Reference Link change handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onAddRow"></a>

### conditionLab.\_onAddRow(event)
Add Row event handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onRemoveRow"></a>

### conditionLab.\_onRemoveRow(event)
Handler for remove row event

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onChangeSortOrder"></a>

### conditionLab.\_onChangeSortOrder(event)
Handle a change sort order click

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onClickSortButton"></a>

### conditionLab.\_onClickSortButton(event) ⇒ <code>Application</code>
Sort button handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  
**Returns**: <code>Application</code> - The rendered Application instance  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_sortMapByName"></a>

### conditionLab.\_sortMapByName(map, direction) ⇒ <code>Array</code>
Sorts the given map by the name property

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| map | <code>Array</code> | 
| direction | <code>\*</code> | 

<a name="ConditionLab+_onRestoreDefaults"></a>

### conditionLab.\_onRestoreDefaults(event)
Opens dialog to reset to default values.

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onResetForm"></a>

### conditionLab.\_onResetForm(event)
Reset form handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onClickMacroConfig"></a>

### conditionLab.\_onClickMacroConfig(event)
Macro Config button click handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_onClickOptionConfig"></a>

### conditionLab.\_onClickOptionConfig(event)
Option Config button click handler

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="ConditionLab+_hasPropertyChanged"></a>

### conditionLab.\_hasPropertyChanged(propertyName, original, comparison) ⇒ <code>boolean</code>
Checks a given propertyName on an original and comparison object to see if it has changed

**Kind**: instance method of [<code>ConditionLab</code>](#ConditionLab)  

| Param | Type |
| --- | --- |
| propertyName | <code>\*</code> | 
| original | <code>\*</code> | 
| comparison | <code>\*</code> | 

<a name="EnhancedConditionMacroConfig"></a>

## EnhancedConditionMacroConfig
Enhanced Condition Macro Config Application

**Kind**: global class  

* [EnhancedConditionMacroConfig](#EnhancedConditionMacroConfig)
    * [.DEFAULT_OPTIONS](#EnhancedConditionMacroConfig+DEFAULT_OPTIONS)
    * [.PARTS](#EnhancedConditionMacroConfig+PARTS)
    * [._prepareContext()](#EnhancedConditionMacroConfig+_prepareContext)

<a name="EnhancedConditionMacroConfig+DEFAULT_OPTIONS"></a>

### enhancedConditionMacroConfig.DEFAULT\_OPTIONS
**Kind**: instance property of [<code>EnhancedConditionMacroConfig</code>](#EnhancedConditionMacroConfig)  
<a name="EnhancedConditionMacroConfig+PARTS"></a>

### enhancedConditionMacroConfig.PARTS
**Kind**: instance property of [<code>EnhancedConditionMacroConfig</code>](#EnhancedConditionMacroConfig)  
<a name="EnhancedConditionMacroConfig+_prepareContext"></a>

### enhancedConditionMacroConfig.\_prepareContext()
**Kind**: instance method of [<code>EnhancedConditionMacroConfig</code>](#EnhancedConditionMacroConfig)  
<a name="EnhancedConditionOptionConfig"></a>

## EnhancedConditionOptionConfig
Enhanced Condition Option Config Application

**Kind**: global class  

* [EnhancedConditionOptionConfig](#EnhancedConditionOptionConfig)
    * _instance_
        * [.DEFAULT_OPTIONS](#EnhancedConditionOptionConfig+DEFAULT_OPTIONS)
        * [.PARTS](#EnhancedConditionOptionConfig+PARTS)
        * [._prepareContext()](#EnhancedConditionOptionConfig+_prepareContext)
        * [._onRender()](#EnhancedConditionOptionConfig+_onRender)
        * [._onCheckboxChange(event)](#EnhancedConditionOptionConfig+_onCheckboxChange) ⇒ <code>\*</code>
        * [.getSpecialStatusEffectByField(field)](#EnhancedConditionOptionConfig+getSpecialStatusEffectByField) ⇒ <code>string</code> \| <code>undefined</code>
        * [.setSpecialStatusEffectMapping(effect, conditionId)](#EnhancedConditionOptionConfig+setSpecialStatusEffectMapping)
    * _static_
        * [._onSpecialStatusEffectToggle(event)](#EnhancedConditionOptionConfig._onSpecialStatusEffectToggle) ⇒ <code>\*</code>

<a name="EnhancedConditionOptionConfig+DEFAULT_OPTIONS"></a>

### enhancedConditionOptionConfig.DEFAULT\_OPTIONS
**Kind**: instance property of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  
<a name="EnhancedConditionOptionConfig+PARTS"></a>

### enhancedConditionOptionConfig.PARTS
**Kind**: instance property of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  
<a name="EnhancedConditionOptionConfig+_prepareContext"></a>

### enhancedConditionOptionConfig.\_prepareContext()
**Kind**: instance method of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  
<a name="EnhancedConditionOptionConfig+_onRender"></a>

### enhancedConditionOptionConfig.\_onRender()
**Kind**: instance method of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  
<a name="EnhancedConditionOptionConfig+_onCheckboxChange"></a>

### enhancedConditionOptionConfig.\_onCheckboxChange(event) ⇒ <code>\*</code>
Checkbox change event handler

**Kind**: instance method of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="EnhancedConditionOptionConfig+getSpecialStatusEffectByField"></a>

### enhancedConditionOptionConfig.getSpecialStatusEffectByField(field) ⇒ <code>string</code> \| <code>undefined</code>
Get the enum for a special status effect based on the field name

**Kind**: instance method of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  
**Returns**: <code>string</code> \| <code>undefined</code> - BLIND, INVISIBLE, or DEFEATED  

| Param | Type |
| --- | --- |
| field | <code>string</code> | 

<a name="EnhancedConditionOptionConfig+setSpecialStatusEffectMapping"></a>

### enhancedConditionOptionConfig.setSpecialStatusEffectMapping(effect, conditionId)
Sets the special status effect to the provided condition Id

**Kind**: instance method of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| effect | <code>string</code> |  | Either BLIND, INVISIBLE, or DEFEATED |
| conditionId | <code>string</code> | <code>null</code> |  |

<a name="EnhancedConditionOptionConfig._onSpecialStatusEffectToggle"></a>

### EnhancedConditionOptionConfig.\_onSpecialStatusEffectToggle(event) ⇒ <code>\*</code>
Special Status Effect toggle handler

**Kind**: static method of [<code>EnhancedConditionOptionConfig</code>](#EnhancedConditionOptionConfig)  

| Param | Type |
| --- | --- |
| event | <code>\*</code> | 

<a name="EnhancedConditions"></a>

## EnhancedConditions
Builds a mapping between status icons and journal entries that represent conditions

**Kind**: global class  

* [EnhancedConditions](#EnhancedConditions)
    * [._processActiveEffectChange(effect, type)](#EnhancedConditions._processActiveEffectChange)
    * [.lookupEntryMapping(effectIds)](#EnhancedConditions.lookupEntryMapping) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
    * [.outputChatMessage(entity, entries, options)](#EnhancedConditions.outputChatMessage)
    * [._toggleDefeated(entities, options)](#EnhancedConditions._toggleDefeated)
    * [._removeOtherConditions(entity, conditionId)](#EnhancedConditions._removeOtherConditions)
    * [._processMacros(macroIds, entity)](#EnhancedConditions._processMacros)
    * [.updateConditionTimestamps()](#EnhancedConditions.updateConditionTimestamps)
    * [._loadDefaultMaps()](#EnhancedConditions._loadDefaultMaps) ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [._prepareMap(conditionMap)](#EnhancedConditions._prepareMap) ⇒ <code>Array.&lt;object&gt;</code>
    * [._createJournalEntry(condition)](#EnhancedConditions._createJournalEntry) ⇒ <code>\*</code>
    * [._lookupConditionByName(conditionName)](#EnhancedConditions._lookupConditionByName) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
    * [._updateStatusEffects(conditionMap)](#EnhancedConditions._updateStatusEffects)
    * [._applyAlphabeticalOrder(statusEffects)](#EnhancedConditions._applyAlphabeticalOrder) ⇒ <code>Array.&lt;object&gt;</code>
    * [._applyMapOrder(statusEffects, [baseOrder])](#EnhancedConditions._applyMapOrder) ⇒ <code>Array.&lt;object&gt;</code>
    * [._dedupeStatusEffects(statusEffects)](#EnhancedConditions._dedupeStatusEffects) ⇒ <code>Array.&lt;object&gt;</code>
    * [._getSystemChanges(activeEffect)](#EnhancedConditions._getSystemChanges) ⇒ <code>Array.&lt;object&gt;</code>
    * [._migrateActiveEffectChanges(activeEffect)](#EnhancedConditions._migrateActiveEffectChanges) ⇒ <code>object</code>
    * [._prepareStatusEffects(conditionMap)](#EnhancedConditions._prepareStatusEffects) ⇒ <code>Array.&lt;object&gt;</code>
    * [._prepareActiveEffects(effects)](#EnhancedConditions._prepareActiveEffects) ⇒ <code>Array.&lt;object&gt;</code>
    * [.getConditionsByIcon(icon)](#EnhancedConditions.getConditionsByIcon) ⇒ <code>Array.&lt;string&gt;</code>
    * [.mapFromJson(json)](#EnhancedConditions.mapFromJson) ⇒ <code>Array.&lt;object&gt;</code>
    * [.getDefaultMap(defaultMaps)](#EnhancedConditions.getDefaultMap) ⇒ <code>object</code>
    * [.buildDefaultMap()](#EnhancedConditions.buildDefaultMap) ⇒ <code>Array.&lt;object&gt;</code>
    * ~~[.applyCondition(...params)](#EnhancedConditions.applyCondition) ⇒ <code>\*</code>~~
    * [.addCondition(conditionName, [entities], options)](#EnhancedConditions.addCondition)
    * [.getCondition(conditionName, map, options)](#EnhancedConditions.getCondition) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
    * [.getConditions(entities, options)](#EnhancedConditions.getConditions) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
    * [.getActiveEffects(conditions)](#EnhancedConditions.getActiveEffects) ⇒ <code>Array</code>
    * [.getConditionEffects(entities, map, warn)](#EnhancedConditions.getConditionEffects) ⇒ <code>Map</code> \| <code>object</code> \| <code>undefined</code>
    * [.hasCondition(conditionName, entities, [options])](#EnhancedConditions.hasCondition) ⇒ <code>boolean</code>
    * [.removeCondition(conditionName, entities, options)](#EnhancedConditions.removeCondition)
    * [.removeAllConditions(entities, options)](#EnhancedConditions.removeAllConditions)

<a name="EnhancedConditions._processActiveEffectChange"></a>

### EnhancedConditions.\_processActiveEffectChange(effect, type)
Process the addition/removal of an Active Effect

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| effect | <code>ActiveEffect</code> |  | the effect |
| type | <code>string</code> | <code>&quot;create&quot;</code> | the type of change to process. "create" or "delete" |

<a name="EnhancedConditions.lookupEntryMapping"></a>

### EnhancedConditions.lookupEntryMapping(effectIds) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
Checks statusEffect icons against map and returns matching condition mappings

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Description |
| --- | --- | --- |
| effectIds | <code>Array.&lt;string&gt;</code> \| <code>string</code> | A list of effectIds, or a single effectId to check |

<a name="EnhancedConditions.outputChatMessage"></a>

### EnhancedConditions.outputChatMessage(entity, entries, options)
Output one or more condition entries to chat

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Todo**

- [ ] refactor to use actor or token


| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Actor</code> \| <code>Token</code> |  |
| entries | <code>Array.&lt;Condition&gt;</code> |  |
| options | <code>object</code> |  |
| options.type | <code>string</code> | "added", "removed", or "active" |

<a name="EnhancedConditions._toggleDefeated"></a>

### EnhancedConditions.\_toggleDefeated(entities, options)
Marks a Combatants for a particular entity as defeated

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Description |
| --- | --- | --- |
| entities | <code>Actor</code> \| <code>Token</code> | the entity to mark defeated |
| options | <code>object</code> |  |
| options.markDefeated | <code>boolean</code> | an optional state flag (default=true) |

<a name="EnhancedConditions._removeOtherConditions"></a>

### EnhancedConditions.\_removeOtherConditions(entity, conditionId)
For a given entity, removes conditions other than the one supplied

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type |
| --- | --- |
| entity | <code>\*</code> | 
| conditionId | <code>\*</code> | 

<a name="EnhancedConditions._processMacros"></a>

### EnhancedConditions.\_processMacros(macroIds, entity)
Process macros based on given Ids

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default |
| --- | --- | --- |
| macroIds | <code>\*</code> |  | 
| entity | <code>\*</code> | <code></code> | 

<a name="EnhancedConditions.updateConditionTimestamps"></a>

### EnhancedConditions.updateConditionTimestamps()
Update condition added/removed timestamps

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
<a name="EnhancedConditions._loadDefaultMaps"></a>

### EnhancedConditions.\_loadDefaultMaps() ⇒ <code>Promise.&lt;Array.&lt;object&gt;&gt;</code>
Returns the default maps supplied with the module

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Todo:**: map to entryId and then rebuild on import  
<a name="EnhancedConditions._prepareMap"></a>

### EnhancedConditions.\_prepareMap(conditionMap) ⇒ <code>Array.&lt;object&gt;</code>
Parse the provided Condition Map and prepare it for storage, validating and correcting bad or missing data where possible

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type |
| --- | --- |
| conditionMap | <code>\*</code> | 

<a name="EnhancedConditions._createJournalEntry"></a>

### EnhancedConditions.\_createJournalEntry(condition) ⇒ <code>\*</code>
Creates journal entries for any conditions that don't have one

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Description |
| --- | --- | --- |
| condition | <code>string</code> | the condition being evaluated |

<a name="EnhancedConditions._lookupConditionByName"></a>

### EnhancedConditions.\_lookupConditionByName(conditionName) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
Gets one or more conditions from the map by their name

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Description |
| --- | --- | --- |
| conditionName | <code>string</code> | the condition to get |

<a name="EnhancedConditions._updateStatusEffects"></a>

### EnhancedConditions.\_updateStatusEffects(conditionMap)
Updates the CONFIG.statusEffect effects with Condition Map ones

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type |
| --- | --- |
| conditionMap | <code>\*</code> | 

<a name="EnhancedConditions._applyAlphabeticalOrder"></a>

### EnhancedConditions.\_applyAlphabeticalOrder(statusEffects) ⇒ <code>Array.&lt;object&gt;</code>
Flattens `order` across the given status effects so the token HUD's
`(a.order - b.order) || title` sort falls through to the title comparison, listing every
effect alphabetically in the client's language.

Works on copies rather than mutating: `game.clt.CoreStatusEffects` is the session's only
record of the order the system configured, and it has to survive intact for when the
setting is turned back off. Each copy is built from the originals' property descriptors so
it keeps the non-enumerable `label`/`icon` back-compat accessors.

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Array.&lt;object&gt;</code> - copies of the status effects, all sharing one `order`  

| Param | Type | Description |
| --- | --- | --- |
| statusEffects | <code>Array.&lt;object&gt;</code> | the status effects to list alphabetically |

<a name="EnhancedConditions._applyMapOrder"></a>

### EnhancedConditions.\_applyMapOrder(statusEffects, [baseOrder]) ⇒ <code>Array.&lt;object&gt;</code>
Numbers status effects with the `order` the token HUD sorts by, following the row order of
the Condition Lab.

Foundry's token HUD sorts status effects by `(a.order - b.order) || title`, so effects
without an `order` (all of ours, since `_prepareStatusEffects` doesn't emit one) end up
listed alphabetically. Giving each condition an incrementing order makes the HUD present
them in the order they're arranged in the Condition Lab — whether that arrangement came
from the row move up/down arrows or from saving the map with the name sort applied.

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Array.&lt;object&gt;</code> - the same statusEffects  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| statusEffects | <code>Array.&lt;object&gt;</code> |  | the condition map's status effects, in map order (mutated) |
| [baseOrder] | <code>number</code> | <code>0</code> | the order to give the first condition |

<a name="EnhancedConditions._dedupeStatusEffects"></a>

### EnhancedConditions.\_dedupeStatusEffects(statusEffects) ⇒ <code>Array.&lt;object&gt;</code>
Dedupes status effects by id, keeping the position of the first occurrence and the data
of the last (so a mapped condition replaces the core effect it shares an id with).

Foundry v14's `CONFIG.statusEffects` is a Proxy whose `ownKeys` trap returns one key per
element's `id`, so duplicate ids make every `Object.keys/values()` over it throw
`'ownKeys' on proxy: trap returned duplicate entries` — breaking, among other things,
scene texture preloading. Inferred condition maps reuse the core effect ids, so the
combined array must be deduped before assignment.

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Array.&lt;object&gt;</code> - the status effects with one entry per id  

| Param | Type | Description |
| --- | --- | --- |
| statusEffects | <code>Array.&lt;object&gt;</code> | the combined status effects |

<a name="EnhancedConditions._getSystemChanges"></a>

### EnhancedConditions.\_getSystemChanges(activeEffect) ⇒ <code>Array.&lt;object&gt;</code>
Returns a condition's ActiveEffect changes in the Foundry v14 `system.changes` schema,
preserving each change's raw value.

Foundry v14 moved ActiveEffect changes from the top-level `changes` array (numeric `mode`)
to `system.changes` (string `type` + `phase`). Passing the legacy shape to `new ActiveEffect`
triggers a core migration that runs every string value through `JSON.parse` and blanks
anything that isn't valid JSON — silently wiping macro names, hex colours, preset names, etc.
Building the v14 shape ourselves keeps those values intact.

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Array.&lt;object&gt;</code> - the changes in `system.changes` form  

| Param | Type | Description |
| --- | --- | --- |
| activeEffect | <code>object</code> | a condition's ActiveEffect data |

<a name="EnhancedConditions._migrateActiveEffectChanges"></a>

### EnhancedConditions.\_migrateActiveEffectChanges(activeEffect) ⇒ <code>object</code>
Migrates a condition's ActiveEffect changes to the v14 `system.changes` schema in place,
dropping the legacy top-level `changes` array. Idempotent.

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>object</code> - the same activeEffect  

| Param | Type | Description |
| --- | --- | --- |
| activeEffect | <code>object</code> | a condition's ActiveEffect data (mutated) |

<a name="EnhancedConditions._prepareStatusEffects"></a>

### EnhancedConditions.\_prepareStatusEffects(conditionMap) ⇒ <code>Array.&lt;object&gt;</code>
Converts the given Condition Map (one or more Conditions) into a Status Effects array or object

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Array.&lt;object&gt;</code> - statusEffects  

| Param | Type |
| --- | --- |
| conditionMap | <code>Array.&lt;object&gt;</code> \| <code>object</code> | 

<a name="EnhancedConditions._prepareActiveEffects"></a>

### EnhancedConditions.\_prepareActiveEffects(effects) ⇒ <code>Array.&lt;object&gt;</code>
Prepares one or more ActiveEffects from Conditions for placement on an actor

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Description |
| --- | --- | --- |
| effects | <code>Array.&lt;object&gt;</code> \| <code>object</code> | a single ActiveEffect data object or an array of ActiveEffect data objects |

<a name="EnhancedConditions.getConditionsByIcon"></a>

### EnhancedConditions.getConditionsByIcon(icon) ⇒ <code>Array.&lt;string&gt;</code>
Retrieves a condition name by its mapped icon

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type |
| --- | --- |
| icon | <code>\*</code> | 

<a name="EnhancedConditions.mapFromJson"></a>

### EnhancedConditions.mapFromJson(json) ⇒ <code>Array.&lt;object&gt;</code>
Parses a condition map JSON and returns a map

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type |
| --- | --- |
| json | <code>\*</code> | 

<a name="EnhancedConditions.getDefaultMap"></a>

### EnhancedConditions.getDefaultMap(defaultMaps) ⇒ <code>object</code>
Returns the default condition map for a given system

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>object</code> - }  

| Param | Type | Default |
| --- | --- | --- |
| defaultMaps | <code>object</code> | <code></code> | 

<a name="EnhancedConditions.buildDefaultMap"></a>

### EnhancedConditions.buildDefaultMap() ⇒ <code>Array.&lt;object&gt;</code>
Builds a default map for a given system

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Todo**

- [ ] #281 update for active effects

<a name="EnhancedConditions.applyCondition"></a>

### ~~EnhancedConditions.applyCondition(...params) ⇒ <code>\*</code>~~
***Deprecated***

Apply the named condition to the provided entities (Actors or Tokens)

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**See**: EnhancedConditions#addCondition  

| Param | Type |
| --- | --- |
| ...params | <code>any</code> | 

<a name="EnhancedConditions.addCondition"></a>

### EnhancedConditions.addCondition(conditionName, [entities], options)
Applies the named condition to the provided entities (Actors or Tokens)

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| conditionName | <code>Array.&lt;string&gt;</code> \| <code>string</code> |  | the name of the condition to add |
| [entities] | <code>Array.&lt;Actor&gt;</code> \| <code>Array.&lt;Token&gt;</code> \| <code>Actor</code> \| <code>Token</code> | <code></code> | one or more Actors or Tokens to apply the Condition to |
| options | <code>object</code> |  |  |
| [options.allowDuplicates] | <code>boolean</code> | <code>false</code> | if one or more of the Conditions specified is already active on the Entity, this will still add the Condition. Use in conjunction with `replaceExisting` to determine how duplicates are handled |
| [options.replaceExisting] | <code>boolean</code> | <code>false</code> | whether or not to replace existing Conditions with any duplicates in the `conditionName` parameter. If `allowDuplicates` is true and `replaceExisting` is false then a duplicate condition is created. Has no effect is `keepDuplicates` is `false` |

**Example**  
```js
// Add the Condition "Blinded" to an Actor named "Bob". Duplicates will not be created.
game.clt.addCondition("Blinded", game.actors.getName("Bob"));
```
**Example**  
```js
// Add the Condition "Charmed" to the currently controlled Token/s. Duplicates will not be created.
game.clt.addCondition("Charmed");
```
**Example**  
```js
// Add the Conditions "Blinded" and "Charmed" to the targeted Token/s and create duplicates, replacing any existing Conditions of the same names.
game.clt.addCondition(["Blinded", "Charmed"], [...game.user.targets], {allowDuplicates: true, replaceExisting: true});
```
<a name="EnhancedConditions.getCondition"></a>

### EnhancedConditions.getCondition(conditionName, map, options) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
Gets a condition by name from the Condition Map

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default |
| --- | --- | --- |
| conditionName | <code>\*</code> |  | 
| map | <code>\*</code> | <code></code> | 
| options | <code>object</code> |  | 
| options.warn | <code>\*</code> |  | 

<a name="EnhancedConditions.getConditions"></a>

### EnhancedConditions.getConditions(entities, options) ⇒ <code>Array.&lt;string&gt;</code> \| <code>string</code> \| <code>undefined</code>
Retrieves all active conditions for one or more given entities (Actors or Tokens)

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entities | <code>Actor</code> \| <code>Token</code> | <code></code> | one or more Actors or Tokens to get Conditions from |
| options | <code>object</code> |  |  |
| options.warn | <code>boolean</code> |  | output notifications |

**Example**  
```js
// Get conditions for an Actor named "Bob"
game.clt.getConditions(game.actors.getName("Bob"));
```
**Example**  
```js
// Get conditions for the currently controlled Token
game.clt.getConditions();
```
<a name="EnhancedConditions.getActiveEffects"></a>

### EnhancedConditions.getActiveEffects(conditions) ⇒ <code>Array</code>
Gets the Active Effect data (if any) for the given conditions

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Array</code> - statusEffects  

| Param | Type |
| --- | --- |
| conditions | <code>Array</code> | 

<a name="EnhancedConditions.getConditionEffects"></a>

### EnhancedConditions.getConditionEffects(entities, map, warn) ⇒ <code>Map</code> \| <code>object</code> \| <code>undefined</code>
Gets any Active Effect instances present on the entities (Actor/s or Token/s) that are mapped Conditions

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>Map</code> \| <code>object</code> \| <code>undefined</code> - A Map containing the Actor Id and the Condition Active Effect instances if any  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entities | <code>string</code> |  | the entities to check |
| map | <code>Array</code> | <code></code> | the Condition map to check (optional) |
| warn | <code>boolean</code> |  | output notifications |

<a name="EnhancedConditions.hasCondition"></a>

### EnhancedConditions.hasCondition(conditionName, entities, [options]) ⇒ <code>boolean</code>
Checks if the provided Entity (Actor or Token) has the given condition

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  
**Returns**: <code>boolean</code> - hasCondition  Returns true if one or more of the provided entities has one or more of the provided conditions  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| conditionName | <code>string</code> \| <code>Array</code> |  | the name/s of the condition or conditions to check for |
| entities | <code>Actor</code> \| <code>Token</code> \| <code>Array</code> | <code></code> | the entity or entities to check (Actor/s or Token/s) |
| [options] | <code>object</code> |  | options object |
| [options.warn] | <code>boolean</code> |  | whether or not to output notifications |

**Example**  
```js
// Check for the "Blinded" condition on Actor "Bob"
game.clt.hasCondition("Blinded", game.actors.getName("Bob"));
```
**Example**  
```js
// Check for the "Charmed" and "Deafened" conditions on the controlled tokens
game.clt.hasCondition(["Charmed", "Deafened"]);
```
<a name="EnhancedConditions.removeCondition"></a>

### EnhancedConditions.removeCondition(conditionName, entities, options)
Removes one or more named conditions from an Entity (Actor/Token)

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| conditionName | <code>string</code> |  | the name of the Condition to remove |
| entities | <code>Actor</code> \| <code>Token</code> | <code></code> | One or more Actors or Tokens |
| options | <code>object</code> |  | options for removal |
| options.warn | <code>boolean</code> |  | whether or not to raise warnings on errors |

**Example**  
```js
// Remove Condition named "Blinded" from an Actor named Bob
game.clt.removeCondition("Blinded", game.actors.getName("Bob"));
```
**Example**  
```js
// Remove Condition named "Charmed" from the currently controlled Token, but don't show any warnings if it fails.
game.clt.removeCondition("Charmed", {warn=false});
```
<a name="EnhancedConditions.removeAllConditions"></a>

### EnhancedConditions.removeAllConditions(entities, options)
Removes all conditions from the provided entities

**Kind**: static method of [<code>EnhancedConditions</code>](#EnhancedConditions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entities | <code>Actors</code> \| <code>Tokens</code> | <code></code> | One or more Actors or Tokens to remove Conditions from |
| options | <code>object</code> |  |  |
| options.warn | <code>boolean</code> |  | output notifications |

**Example**  
```js
// Remove all Conditions on an Actor named Bob
game.clt.removeAllConditions(game.actors.getName("Bob"));
```
**Example**  
```js
// Remove all Conditions on the currently controlled Token
game.clt.removeAllConditions();
```
<a name="EnhancedEffectConfig"></a>

## EnhancedEffectConfig
Active Effect config sheet for a Condition's Active Effect, writing changes back to the
Condition Lab's map instead of to a document

**Kind**: global class  

* [EnhancedEffectConfig](#EnhancedEffectConfig)
    * [.title](#EnhancedEffectConfig+title) ⇒ <code>string</code>
    * [._processSubmitData(_event, form, data)](#EnhancedEffectConfig+_processSubmitData)

<a name="EnhancedEffectConfig+title"></a>

### enhancedEffectConfig.title ⇒ <code>string</code>
The sheet title, naming the condition being edited

**Kind**: instance property of [<code>EnhancedEffectConfig</code>](#EnhancedEffectConfig)  
<a name="EnhancedEffectConfig+_processSubmitData"></a>

### enhancedEffectConfig.\_processSubmitData(_event, form, data)
Override default update object behaviour

**Kind**: instance method of [<code>EnhancedEffectConfig</code>](#EnhancedEffectConfig)  

| Param | Type |
| --- | --- |
| _event | <code>\*</code> | 
| form | <code>\*</code> | 
| data | <code>\*</code> | 

<a name="Sidekick"></a>

## Sidekick
Provides helper methods for use elsewhere in the module (and has your back in a melee)

**Kind**: global class  

* [Sidekick](#Sidekick)
    * [.fetchJsons(source, path)](#Sidekick.fetchJsons) ⇒ <code>Promise.&lt;Array.&lt;JSON&gt;&gt;</code>
    * [.fetchJson(file)](#Sidekick.fetchJson) ⇒ <code>Promise.&lt;JSON&gt;</code> \| <code>null</code>
    * [.coerceType(value, type)](#Sidekick.coerceType) ⇒ <code>number</code> \| <code>string</code> \| <code>boolean</code>
    * [.createId(existingIds, root0)](#Sidekick.createId) ⇒ <code>string</code>
    * [.generateUniqueSlugId(string, idList)](#Sidekick.generateUniqueSlugId) ⇒ <code>string</code>
    * [.getNameFromFilePath(path)](#Sidekick.getNameFromFilePath) ⇒ <code>string</code>
    * [.loadTemplates()](#Sidekick.loadTemplates)
    * [.toCamelCase(string, delimiter)](#Sidekick.toCamelCase) ⇒ <code>string</code>

<a name="Sidekick.fetchJsons"></a>

### Sidekick.fetchJsons(source, path) ⇒ <code>Promise.&lt;Array.&lt;JSON&gt;&gt;</code>
Use FilePicker to browse then Fetch one or more JSONs and return them

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  

| Param | Type |
| --- | --- |
| source | <code>string</code> | 
| path | <code>string</code> | 

<a name="Sidekick.fetchJson"></a>

### Sidekick.fetchJson(file) ⇒ <code>Promise.&lt;JSON&gt;</code> \| <code>null</code>
Fetch a JSON from a given file

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  

| Param | Type |
| --- | --- |
| file | <code>File</code> | 

<a name="Sidekick.coerceType"></a>

### Sidekick.coerceType(value, type) ⇒ <code>number</code> \| <code>string</code> \| <code>boolean</code>
Attempts to coerce a target value into the exemplar's type

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  
**Returns**: <code>number</code> \| <code>string</code> \| <code>boolean</code> - coercedValue  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 
| type | <code>string</code> | 

<a name="Sidekick.createId"></a>

### Sidekick.createId(existingIds, root0) ⇒ <code>string</code>
Get a random unique Id, checking an optional supplied array of ids for a match

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  

| Param | Type |
| --- | --- |
| existingIds | <code>Array.&lt;string&gt;</code> | 
| root0 | <code>object</code> | 
| root0.iterations | <code>number</code> | 
| root0.length | <code>number</code> | 

<a name="Sidekick.generateUniqueSlugId"></a>

### Sidekick.generateUniqueSlugId(string, idList) ⇒ <code>string</code>
For a given string generate a slug, optionally checking a list of existing Ids for uniqueness

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| idList | <code>Array.&lt;string&gt;</code> | 

<a name="Sidekick.getNameFromFilePath"></a>

### Sidekick.getNameFromFilePath(path) ⇒ <code>string</code>
For a given file path, find the filename and then apply title case

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  

| Param | Type |
| --- | --- |
| path | <code>string</code> | 

<a name="Sidekick.loadTemplates"></a>

### Sidekick.loadTemplates()
Loads templates for partials

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  
<a name="Sidekick.toCamelCase"></a>

### Sidekick.toCamelCase(string, delimiter) ⇒ <code>string</code>
Converts the given string to camelCase using the provided delimiter to break up words

**Kind**: static method of [<code>Sidekick</code>](#Sidekick)  
**Returns**: <code>string</code> - the converted string  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| delimiter | <code>string</code> | 

**Example**  
```js
Sidekick.toCamelCase("my-cool-string", "-") // returns "myCoolString"
```
<a name="CHANGE_MODES_TO_TYPES"></a>

## CHANGE\_MODES\_TO\_TYPES
Maps the legacy numeric ActiveEffect change `mode` to the Foundry v14 string `type`
(the lowercased mode name), e.g. 0 → "custom", 5 → "override". Derived from core's
CONST.ACTIVE_EFFECT_MODES so any newly added mode (e.g. "subtract") is covered too.

**Kind**: global constant  
<a name="registerSettings"></a>

## registerSettings()
Registers the module's settings.

**Kind**: global function  
