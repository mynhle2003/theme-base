# Arche animation preset configuration — 2026-10-13

Owner requested existing block animation presets with short, appropriate delays, excluding the site Header, Footer and FAQ compositions (latest owner scope). Used `agents-build-themes/skills/build/preset/build-preset/SKILL.md`; this is local configuration only.

| Existing block | Animation | Delay |
| --- | --- | --- |
| Eyebrow | Fade | 0ms |
| Heading | Slide from bottom | 50ms |
| Icon | Fade | 50ms |
| Text / Editorial text | Fade | 100ms |
| Button | Fade | 150ms |

Updated section and block preset declarations and saved template compositions together. Site Header/Footer groups, announcement content and the FAQ page/sections/blocks use None/0 on blocks with these existing controls. The latest request includes supported leaf controls in scrolling/marquee presets; their component-owned runtime remains unchanged. The reusable `header` content block in an ordinary section is a heading group, so its children follow the content cadence; it is distinct from the site's Header section/group.

Image card and other cards retain main's automatic whole-card entrance and row/tab stagger; no unsupported animation setting was added to their schema. Explicit child animation settings remain useful when those blocks are used elsewhere; the main runtime suppresses nested entrance beneath an animated card. Scroll-owned motion itself is unchanged by this preset-only task.

Changed 81 configuration files: 361 entries receive the content cadence, 72 excluded entries change to None/0. The change list is recorded locally in `/private/tmp/arche-animation-preset-changes.json`. Only animation_type/animation_delay values in presets and saved block settings changed. Non-preset schema, implementation, content/media, IDs/order, typography, spacing and other settings were checked unchanged. Global settings were not edited.

Validation: JSON/schema parsing and semantic comparisons PASS; exclusion and delay checks PASS; git diff --check PASS. Full Theme Check: 0 errors / 5 existing ExcessiveSettingsCount warnings. No storefront/Theme Editor live QA, commit, push, upload or publish in this task.

This owner-directed configuration supersedes the earlier identity-preservation requirement for animation values in MAIN-ARCHE-BLOCK-ANIMATION-001; the pre-migration snapshot remains historical evidence.

Owner clarification: referenced Essen section presets/templates read-only for cadence, then chose Arche effects: Heading Slide from bottom (instead of Essen Rotate words), Eyebrow/Icon/Text/Editorial text/Button Fade. Only animation_type/animation_delay values were adjusted; no Essen content, media, structure or layout was copied. Separate concurrent hotspot content_color_scheme change was preserved and is outside this task.

## Full child-block review — latest owner request

Reviewed section/block preset trees and saved templates, including Image card descendants and supported block instances. Audit finds 493 eligible animation configurations enabled and 59 excluded Header/Footer/FAQ configurations at None/0; all 38 direct Image card children have a non-None effect. Header kernel groups inside normal content sections remain eligible. Controls with only the None option (Contact form) are not broadened.

Six files changed in this follow-up, only animation_type/animation_delay: blocks/marquee-item.liquid, blocks/scrolling-card.liquid, sections/scrolling-cards.liquid, sections/scroll-reading-text.liquid, templates/index.spinel-sync.json and templates/index.json. Snapshot-relative semantic validation confirms all other values, structure, schema and implementation unchanged. Theme Check: 0 errors / 5 existing warnings; git diff --check PASS. No theme upload/publish.

## Scope clarification

The owner request covers every section preset, every block preset and saved template composition containing blocks with supported animation settings. It is not an Image card-specific task. The 38 Image card children were only a subset of the full audit, not the scope. Current full-tree audit confirms 493 eligible configurations have an effect and valid 0–150ms delay; 59 Header/Footer/FAQ configurations remain None/0. The six supported roles follow the cadence table above, including nested instances in other compound blocks and sections. Schema defaults are unchanged; settings exposing only None cannot receive another effect without a separate schema/implementation change.
