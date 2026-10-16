# Mara image ratios aligned with Essen — 2026-10-16

User requested the same ratio value set, option names and logic as the corresponding Essen controls; Custom exposes W/H and, where the owner already has a mobile ratio, W (mobile)/H (mobile). This explicitly authorizes implementation beyond the earlier preset-only boundary.

## Contract and scope

Existing global, section and block ratio owners remain unchanged. No new section, slot, media resource or runtime was introduced. Existing responsive gates remain authoritative. Source: sibling essen-theme checked read-only; only ratio contracts were carried across, preserving Mara-specific markup, overlays, presets and unrelated working-tree changes.

25 block/section ratio selectors match their corresponding Essen option values, labels and ordering. The global Product card ratio selector also adds Essen's 5:4 choice. This includes fixed image ratios offered by Image card height controls; their pixel-height modes remain unchanged. Banner, compact product cards, marquee and collection tabs retain their existing ratio lists where already identical to Essen.

5:4 maps to 1.25 throughout direct block mappers, shared image/overlay/collection renderers, Image card CSS and global Product card tokens. Collection thumbnails retain their existing Portrait 2:3 / Landscape 3:2 meanings and add the explicit Essen 4:5 / 5:4 options. Existing aliases in the shared image resolver remain available for saved marquee values.

## Custom inputs

- Existing ratio numerator/denominator settings retain their IDs and validation, and use W/H labels, or W (mobile)/H (mobile).
- Collection card and its collection-page adapter replace the scalar `ratio_custom` editor control with numeric `ratio_custom_width` and `ratio_custom_height`.
- Video replaces each scalar custom ratio editor control with a width/height pair. Desktop and mobile pairs are independent.
- New W/H runtime bindings divide floating point width by positive height. Missing, zero or negative new inputs fall back to the validated legacy scalar ratio (or 1). Older scalar settings remain runtime-compatible but are no longer shown as editor controls.
- Stored scalar JSON values are converted to equivalent integer fractions. The requested homepage `crafted_journeys` card uses W=6, H=7, matching Figma's 600:700 exactly. Other saved ratios retain their proportions.
- The section's current default preset was changed separately by other work to the Classic collections composition; this task preserves that current preset rather than replacing it with the Crafted for journeys instance.

## Validation

- Added focused Liquid rendering regressions for every direct 5:4 mapper, both responsive branches, exact 6:7, separate Video mobile geometry, zero/negative denominator protection and legacy custom fallback.
- 28 targeted tests passed, including existing collection, image sizing, blog typography, slideshow image and media pagination regressions.
- Ratio option parity checked against Essen for all 25 matching block/section selectors. Changed schemas parse and have unique top-level setting IDs.
- Shopify Theme Check: zero errors, six existing warnings. Whitespace check passed.
- Implementation paths recorded in docs/theme-customizations/mara-theme.md; schema-only and preset/config changes are not counted as custom implementation.
- No browser rendering or Theme Editor interaction was verified in this task; local preview was unavailable. No theme push, store configuration save or media upload performed.
