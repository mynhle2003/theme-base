# Icon width text (custom) — Virelle

Built with the user-specified `build-preset` and `store-content-media` skills. Branch: `theme/virelle-theme`.

References: [desktop 48002:2592](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48002-2592), [mobile 48096:20346](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-20346). Both high-fidelity contexts and screenshots were inspected.

## Configuration

- Registered exactly `Icon width text (custom)` in `sections/custom-section.liquid`, category `t:general.content`, preserving the other presets and placement guards.
- Removed the old `Icon text cards` Add section preset from `sections/icon-text-cards.liquid`. Its implementation and remaining schema are unchanged; saved uses can still render.
- Migrated homepage instance `icon_text_cards_qT6mLV` to `custom-section`, keeping its section ID and position. Unrelated sections and template order are unchanged.
- Composition: Columns → three `_columns-column` blocks → Group (Icon + Heading) + Text. Original copy retained.
- Columns: three desktop / one mobile, swipe disabled, horizontal desktop gap 56px, vertical mobile gap 32px. Column internal gap 8px; icon-to-heading gap 12px.
- Section: page width, centered, scheme-3 (#181818 / white / #dfdfdf), vertical padding 96px desktop / 48px mobile.
- Heading: semantic H4, existing custom-size option 18px, both viewports. This avoids changing the shared desktop H4 token of 24px. Body: existing md (16px / 24px).
- Icons: original 48×48 Figma SVGs for leaf, daylight and sweat-wicking, downloaded into `/tmp/virelle-icon-text-assets`. Original SVG markup is stored in the existing Icon `custom_icon` HTML setting, with `source: custom`; the existing shared renderer converts it into an isolated SVG image. Root dimensions, viewBox, geometry and white fills are preserved. No temporary URL is used at runtime, and no icon assets or snippets were added.
- Setup-store boundary: this design needs no catalog or uploaded content media. No Shopify Files upload or content mutation was needed.

## Rendered verification

Reused the existing development preview at port 9300, theme 192119800107, store `layouthub-template-v2.myshopify.com`. The existing preview watcher picked up the local edits. Desktop 1920×900 and mobile 375×812 browser viewport overrides were reset after QA.

- Desktop: three equal columns, 56px gap, centered content. All three SVG images loaded at 48×48px. Heading resolved to Roboto Condensed 700, 18px / 25.2px; body to Roboto 400, 16px / 24px.
- Mobile: single-column normal flow, 32px card gap, 8px internal gap, 12px icon-heading gap. Section height 583.56px; all icons loaded; no section horizontal overflow.
- Screenshots: `/tmp/virelle-icon-text-desktop.png`, `/tmp/virelle-icon-text-mobile.png`.
- Native custom SVG renderer accepted all three files; downloaded originals are non-empty and each source matches its intended card.

Remaining differences: shared page-width includes its existing side padding, giving desktop content width 1500px instead of Figma's 1600px. Desktop-browser scrollbar reserves 15px at the 375px viewport, giving 328px mobile content instead of 343px. Heading tracking inherits -0.48px instead of Figma 0; body tracking inherits normal instead of 0.1px. No section-local controls expose tracking; shared Theme Settings and rendering code were preserved. Interactive Theme Editor Add section/duplicate/reorder/save/reload was not exercised; registration and nested contracts were validated from local schema.

## Validation

- Theme Check: zero errors, seven warnings in unrelated existing files (five ExcessiveSettingsCount, two LiquidComplexity).
- Recursive configuration validation passed: block allow-lists, setting IDs, select options, range bounds/steps, checkbox types, unique preset names.
- Before/after assertions passed for unchanged implementation and all schema fields outside presets, unchanged other homepage sections and unchanged section order.
- Scoped `git diff --check` passed for the three edited configuration files.
- Before-edit snapshots: `/tmp/virelle-icon-text-before`.
- No explicit theme push/publish, Theme Editor save, store-content mutation, commit or Git push was performed.
