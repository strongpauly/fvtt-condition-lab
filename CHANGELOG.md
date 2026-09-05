# Changelog

## [Known Issues]

1. Overlay Effects added to a token will trigger the matching non-Overlay Condition to output to chat. The reverse is also true.
2. The Default/Inferred Condition Lab Mappings for game systems may not correctly import all data. Importing the map from the CUB Condition Maps folder imports correctly.
3. PF2e is not currently supported by Enhanced Conditions due to the customisation of the effects framework implemented by the system.

## [3.0.6] - 2026-09-05
- Added a "Force Alphabetical Sort" setting, on by default, which lists the status effects in the token HUD alphabetically by name — including any default status effects that haven't been removed, such as the ones dnd5e pins to the top of the HUD.
- With "Force Alphabetical Sort" turned off, the token HUD now lists conditions in the order they are arranged in the Condition Lab instead of always sorting them by name. (#9)
- The Condition Lab now always saves the map in the order it is displayed, so the "Prompt Saving Sort Direction" setting and its confirmation dialog have been removed.

## [3.0.5] - 2026-07-17
- Fixed scenes failing to load with "Texture loading failed" on systems without a bundled condition map (e.g. Fallout). Duplicate status effect ids broke Foundry v14's `CONFIG.statusEffects`, which is now keyed by id. (#6)
- Fixed "Cannot delete property changes" when submitting a condition's Active Effect config on v14, e.g. after clicking Add Change.
- Fixed "Cannot set properties of null" when picking a condition icon from the file picker.

## [3.0.4] - 2026-06-30
- Fixed Active Effect change values still being blanked when a condition was applied on Foundry v14.364: the effect's serialized data re-introduced the legacy `changes` array, so the server re-ran the lossy migration even though the client-side data was correct.

## [3.0.3] - 2026-06-30
- Fixed macro names, hex colours and other non-numeric Active Effect change values being wiped when applying a condition from the token HUD on Foundry v14.364.

## [3.0.2] - 2026-06-30
- Fixed Active Effect change values being blanked when importing or loading legacy (CUB/v12) condition maps on Foundry v14, which moved changes to `system.changes`. Stored maps are migrated once, by the GM, on load. Values already blanked in a saved map cannot be recovered — re-import the original map.
- Fixed several Condition Lab layout issues.
- Fall back to default values when a setting has not been stored.

## [3.0.1] - 2026-06-05
- Converted the Condition Lab and its macro and option config windows to ApplicationV2, and replaced the remaining V1 dialogs with DialogV2.
- Fixed the Condition Lab's scrolling and row layout; rows now respect the colour mode instead of always using the parchment background.
- Moved the release workflow off deprecated Node 20 action runtimes.

## [3.0.0] - 2026-06-04
First release of Condition Lab as a standalone module, forked from Condition Lab & Triggler.
- Removed Triggler, along with the orphaned trigger config, its Condition Lab wiring and the code that threw at runtime reading the unregistered `storedTriggers` setting.
- Added Foundry v14 support: init-only keybinding and libWrapper registration, namespaced Handlebars helpers, ActiveEffectConfig V2, the `renderChatMessageHTML` hook, and the chat message `style` field.
- Set compatibility to Foundry v14 and removed the dnd5e conflict, which would have blocked the module on dnd5e worlds.
- Fixed Condition Lab statuses sorting ahead of every system condition in the token HUD.
- Fixed condition icons not rendering for fresh default maps.
- Removed the Scene Controls shortcut setting.
- Releases are now published to the Foundry package site.

## [1.3.1] - 2023-06-01
- Fixed an issue in the Triggler form where setting the Property 2 or Value erase one or the other.

## [1.3] - 2023-06-01
- Fixed unlinked actors not having conditions applied to them when a trigger is met.
- Fixed Overlay conditions not being applied as overlays.
- Fixed Active Effects not applying their Status Effect.
- Added an Import/Export button to the Triggler form.
- Changing a field in the Triggler form no longer resets some other fields.
- Changed a lot of title html attributes into Foundry Tooltips and removed a lot of redundant titles.
- More localization added.

## [1.2] - 2023-06-01
- Macro Configuration selector's items are now sorted (https://github.com/death-save/combat-utility-belt/issues/743).
- Saving the Macro Configuration now closes the dialog.
- Fixed an issue where the map wouldn't load due to a bad default setting.

## [1.1] - 2023-06-01
- Turned the Butler into a class to allow calling game.i18n.localize.
- Fixed the Clear Cache checkbox not showing when resetting to defaults.
- Fixed an error thrown when saving maps.
- Changed the condition rows to not "stutter" when changing the Mapping Type.

## [1.0] - 2023-05-31
- This update rewrites CUB into CLT and adds compatability for Foundry VTT V11
