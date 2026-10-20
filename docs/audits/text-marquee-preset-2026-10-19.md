# Text marquee (custom) — Virelle

References: [desktop 48003:7913](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48003-7913), [mobile 48096:25951](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-25951). Both high-fidelity design contexts included screenshots. Followed the requested `build/preset/build-preset` skill and Figma design-to-code prerequisite.

## Configuration

Registered the exact name `Text marquee (custom)` in `sections/custom-section.liquid`, category `t:general.layout`, retaining its original preset and placement guard. Migrated only the existing `virelle_marquee` homepage instance in `templates/index.json` to this composition, retaining its position. The older `sections/text-marquee-custom.liquid` file and its existing changes were preserved.

| Figma region | Existing control |
| --- | --- |
| Dark surface | Custom section, scheme-3 (#181818 background / white headings) |
| Section spacing | 96px top/bottom desktop, mobile override 32px |
| Horizontal animation | Marquee, backward (right to left), speed 0.6, parallax off, blurred edges and dividers off |
| Four phrases | Direct `_marquee-heading` blocks: Active Essentials / Comfort Fit / Chic Athleisure / Dynamic Style |
| Outline typography | Display size, outline on, heading role, opacity 100; existing global Roboto Condensed Bold and responsive 68px / 40px scale |
| Separators | Four existing `_marquee-icon` square library values, 18px wrappers desktop / 12px mobile; their inset 16/24 geometry gives nominal 12px / 8px squares |
| Text-to-icon spacing | 32px track gap, closest composition without per-heading padding |

Private marquee headings cannot be nested inside `_marquee-group` via its `@theme` allowance. The final composition uses the Marquee's explicitly allowed direct private children; no invalid nested groups remain.

## Rendered checks and remaining gaps

Checked the existing running preview at `http://127.0.0.1:9300/`, at 1920 × 900 and 375 × 812 browser viewports. Temporary viewport override was reset. Both render all four source phrases, outlined text, square separators, and `marquee-scroll-left` with runtime `marquee--ready`. Desktop section height is 273.59375px (68px × 1.2 + 192px), mobile is 112px (40px × 1.2 + 64px). Background is rgb(24,24,24). The browser reserves 15px for its scrollbar, leaving 1905px / 360px layout widths.

Remaining preset-only gaps:

- Figma clips the animation at the viewport edges, with 20px padding on each text wrapper and 12px gaps. Existing Custom section only offers full width with global horizontal margins: measured 50px desktop / 16px mobile insets. It has no edge-to-edge option. The direct heading has no padding control; a 32px gap approximates 20px wrapper padding plus 12px gap. Icon viewBox whitespace adds approximately 3px per side desktop / 2px mobile. These affect clip position and spacing.
- Heading tracking is the shared -1.28px token, compared with Figma -1.2px. Shared global settings were preserved.
- The existing square icon inherits body color #dfdfdf, compared with white in Figma, and uses the library's inset geometry, rounded joins and scaled shared stroke. It approximates the 12px / 8px square but does not reproduce Figma's exact 1px border. No supplied SVG asset was substituted or redrawn; the Figma separator is a geometric rectangle.
- Full interactive Theme Editor add/duplicate/reorder/save/reload behavior was not tested. Add section registration, schema compatibility and placement were checked locally, and the live preview successfully accepted and rendered the final composition.

These gaps remain unimplemented under the requested preset-only scope. No implementation, global settings, custom CSS, media/content upload or resource picker changes were made. This design requires no photo/video media, so setup-store media work was unnecessary.

## Validation

- Shopify CLI Theme Check: **0 errors, 6 existing warnings** (five ExcessiveSettingsCount, one LiquidComplexity).
- Explicit checks passed for setting IDs/options/ranges/steps, private/public block allow-lists, nesting depth, unique preset names, original preset preservation, unchanged schema outside presets, unchanged implementation, and unchanged unrelated homepage sections/order.
- Scoped `git diff --check -- sections/custom-section.liquid templates/index.json` passed.
- Shopify plugin validator could not run because its bundled `@shopify/theme-check-common` package is missing. CLI Theme Check and explicit configuration checks were used.
- Before-edit snapshots: `/tmp/virelle-marquee-before`. Render captures: `/tmp/virelle-marquee-desktop.png`, `/tmp/virelle-marquee-mobile.png`. Theme Check result: `/tmp/virelle-marquee-theme-check-final.json`.
- Existing dev preview automatically synced local files. No explicit theme push, publication, Theme Editor save, store mutation, commit or Git push was performed.
