# Featured collection preset — Virelle — 2026-10-19

Requested workflow: build-preset, with figma-design-to-code for reference inspection. Sources: Figma file `yTXlAfT0miBGgRuuYM4OMp`, desktop `48002:2407` (1920px), mobile `48096:20242` (375px). Both high-fidelity design contexts and screenshots inspected.

## Local configuration

Updated only `presets` in `sections/featured-collection.liquid` and the existing `featured_collection_yHCtVP` instance in `templates/index.json`. Original translated preset name/category retained. Reused Featured collection, static Header with Eyebrow and Heading, View all button, Product list and Product card. No implementation, setting definitions, global settings or unrelated instances/order changed.

| Figma | Existing control |
| --- | --- |
| Centered header and bottom action | desktop_alignment / mobile_alignment = center |
| Fresh Styles with square marker, Just Dropped | Existing eyebrow + heading, square icon enabled |
| Header internal gap 8px | header gaps = 8 / 8 |
| Header maximum 768 / 448px | Nearest legal existing ranges: 770 / 440px |
| Section gaps 48 / 32px | gap_desktop / gap_mobile |
| Section padding 96 / 48px | Existing desktop/mobile padding retained |
| 1600px desktop content | page_width, existing max_page_width = 1600 |
| Four desktop cards and next-card reveal | carousel, columns 4 / 1, desktop preview enabled |
| Card gap 12 / 8px | product_gap_desktop / product_gap_mobile |
| Black centered See What’s New button, 56 / 44px | solid on both devices, mobile small height, full_width_mobile false |
| Desktop edge chevrons, no pagination | outside / primary / chevron / always; pagination disabled |

Preserved existing `virelle-new-arrivals` collection reference and max_products = 5. No media selected/downloaded, catalog mutations, explicit theme push/publish or Theme Editor save performed. Existing preview service reused.

## Verification

- Configuration validator passed: declared setting IDs, option values, legal ranges/steps, preset-instance parity, unchanged schema outside presets, unchanged implementation, unchanged unrelated template data/order.
- Shopify CLI Theme Check exit 0: zero errors, seven warnings in the current working tree. No claim that all warnings predate this session.
- git diff --check passed.
- Read-only local preview at http://127.0.0.1:9300/ inspected at its available 1265 × 712 desktop viewport. Centered heading, product-backed carousel and black outside navigation visible; no pagination. This is not a full 1920px visual pass.
- Mobile screenshot and responsive source paths checked; mobile rendered preview and Theme Editor lifecycle not exercised.

## Remaining gaps

1. View-all button is configured but absent from the current preview accessibility tree. Existing section renders it only when its product-list block is found in section.blocks and collection.products_count exceeds max_products. Prior catalog receipt reports ten published New Arrivals products, but current runtime gate is not established. No visibility logic was changed; do not report this CTA as visually passed.
2. Mobile target uses 304px cards with a next-card preview. Product list exposes no mobile-preview control and does not pass the grid renderer's mobile-preview parameter. Existing one-column mobile carousel fills the content width.
3. Existing heading uses global desktop H2 48px versus Figma 50px. Header maximum widths are nearest legal settings (770 / 440 versus 768 / 448). Shared typography retained.
4. Preview eyebrow marker is hollow; Figma marker is filled. Existing square setting has no fill control. Product titles render uppercase rather than Figma title case; existing quick-add presentation and navigation dimensions/disabled previous state also differ. No out-of-scope CSS/markup changes made.
5. Existing collection order shows Leggings, Jacket, Bralette, Sports Bra, Mellow. Figma shows Leggings, Taupe Jacket, Olive Jacket, Bralette, Sports Bra. Collection-based cards represent products rather than two separate color cards for Jacket. Catalog and media were retained; no duplicate products invented.
6. Full responsive visual match, CTA behavior, carousel interactions and editor lifecycle remain unverified. Other custom implementation is unimplemented under the requested preset workflow.

Before-edit snapshots: `/tmp/virelle-featured-collection-before/`. Existing working-tree changes were preserved.

## Authorized CTA fix follow-up

The owner subsequently authorized implementation repair. Static Product list now emits its resolved source contract, and Featured collection reads that captured output instead of section.blocks. This resolves gap 1 above: desktop local preview visibly shows See What’s New beneath the cards with the correct New Arrivals destination. Strict overflow visibility remains intact. See the customization record for files, merge guidance and test evidence. Other visual/mobile gaps above remain open.
