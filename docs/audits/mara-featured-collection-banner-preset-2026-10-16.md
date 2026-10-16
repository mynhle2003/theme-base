# Featured collection: Banner — 2026-10-16

Workflow: user-requested build-preset skill, configuration only. Fresh Figma context and screenshots: bH9A5237I07NWt19Cua9gL desktop47015:19779, mobile47228:14029.

Fetched origin/main (2593c6f2). Its sections/collection-banner.liquid registers Collection banner; its featured-collection-banner section registers Featured collection: Banner, category t:general.collection. The requested conditional removal therefore does not apply. Keep templates/collection.json and its Collection banner. Update existing homepage timeless_pieces and the single Featured collection: Banner preset together, preserving unrelated working changes.

## Configuration

- Existing header → eyebrow Modern classics + H2 Timeless pieces; explicit left desktop / center mobile alignment; 12px internal gap. Existing H2 tokens already supply32px desktop /24px mobile.
- Section gap8px, header bottom padding32px desktop /24px mobile: combined header-to-content spacing40/32px. Section outer padding96/56px.
- Existing banner, no overlay or child copy; custom ratios796:1014 desktop and686:963 mobile (343×481.5px target), square corners.
- Existing product-list-banner, four products, desktop two columns, mobile one-column swipe, horizontal/vertical gaps8px. Nested static product-card uses existing color_scheme mode, scheme-2 (#F6F6F6).
- Resource selectors remain empty. No media selection, upload, store content writes or deployment were requested/performed.

## Remaining visual gaps

- Shop all is absent. The section allows only header/banner/product-list-banner (max3); it has no section CTA slot or responsive relocation control. Header stacks children, so nesting a button cannot reproduce the desktop header-right and mobile after-products positions. No implementation or schema controls changed.
- No banner image or collection is bound; imagery, products, pricing and swatches remain placeholders. Figma screenshot is reference evidence only, never an implementation asset.
- Mobile product-list-banner does not expose the shared mobile preview setting; one full-width card differs from Figma280px card with next-card preview. Global shared carousel behavior can also affect effective width; no rendered parity claimed.
- Existing ratio setting expresses desktop geometry but cannot independently stretch the banner to the live product-grid height across viewport widths and changing product content.
- Exact typography tracking, product content side/bottom padding and mobile plus-action styling depend on shared implementation; no local controls provide all Figma details.

## Validation

All configured section/block setting IDs, options, ranges and allowed nested block types validated against current schemas. Preset remains uniquely named and retains main's category. Existing banner tests:2 passed. Theme Check:0 errors,7 warnings. git diff --check passes. Localhost9300 has no listener; desktop/mobile storefront rendering remains unverified. No commit, push, publish or Theme Editor save.

## Authorized custom CTA follow-up

User authorized theme-specific implementation on2026-10-16. Reuse blocks/view-all-button.liquid and its existing snippet without changing their implementation. Section now allows four dynamic blocks, including View all button. Preset and homepage add Shop all, explicit shopify://collections/all destination, text variant on both viewports, no icon and no mobile full width. Merchant can edit its label/link/styles or remove it. No collection-size visibility condition: explicit link is available even with an empty product picker.

Section owns CSS placement: header left / CTA right in desktop grid row1, banner/products in row2; mobile reading composition is header/banner/products/CTA. Banner-position after swaps media columns on desktop and their existing order on mobile. Duplicate roles retain flex fallback to avoid overlapping grid cells. No JS lifecycle added. Shared button retains Shopify editor attributes, native anchors and focus behavior.

The earlier missing-CTA-control gap is resolved. Other media/preview/card gaps remain. Desktop/mobile rendered verification and Theme Editor interactions remain pending because local preview is unavailable.

## Authorized media follow-up

User requested Figma image/collection setup. The earlier empty-resource and unavailable-preview notes are superseded by docs/audits/mara-timeless-pieces-media-2026-10-16.md: original banner, four correct product cards, Timeless Pieces Mara collection and CTA bound locally and read back in desktop/mobile preview. Existing stock, swatch order and remaining shared presentation gaps are documented there.
