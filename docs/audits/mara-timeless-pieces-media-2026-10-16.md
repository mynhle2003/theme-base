# Timeless Pieces Mara — media — 2026-10-16

Used user-invoked store-content-media. Target verified: layouthub-template-v2.myshopify.com, USD. Figma file bH9A5237I07NWt19Cua9gL, desktop47015:19779, mobile47228:14029. No matching Timeless collection existed before creation.

Created manual collection Timeless Pieces Mara (535348576555), handle timeless-pieces-mara, published to Online Store. Final membership/readback verifies Figma order:

| Product | ID | USD | Images |
| --- | --- | --- | --- |
| Peekaboo Mini - Coffee (reused) |15428875026731|4100|6|
| Peekaboo Soft - Wine |15429092540715|3700|8|
| Spy Small - buttermilk |15429092573483|3700|11|
| Roma Leather Melon - Black |15429092606251|3700|9|

The three new products reuse the corresponding Mara variant/category contracts and linked Shopify color-pattern swatches. Each new variant has20 stock at verified Shop location117337850155. Product duplication initially copied memberships; all copied memberships were removed from the new products, whose final membership is only Timeless Pieces Mara. Existing titles/images/prices/stock preserved; previously empty media alt fields were filled. Wine retains New tag; other new products have no tags.

Uploaded13 genuinely encoded/decoded AVIFs: four original Figma sources (banner/Wine/Buttermilk/Black), nine generated supplements. Coffee reuses original Figma catalog media. Generated agent used gpt-6-luna/max and built-in ImageGen per skill. Main catalog images remain original. Wine gallery includes original dark catalog, adult carrying lifestyle and two close angles, plus Peach/Mint catalog and carrying-lifestyle pairs. Buttermilk reuses its yellow lifestyle and adds two close angles. Black reuses matching-color lifestyle and two close angles. Variant catalog media and custom.secondary_image references verified. Media READY, prices, stock and Online Store publication read back through Admin API.

Shopify converted collection image to collections/mara-timeless-banner.jpg. Original AVIF stays in Files and is bound directly to the section image picker.

Local bindings in Featured collection: Banner preset and templates/index.json timeless_pieces: shopify://shop_images/mara-timeless-banner.avif, collection timeless-pieces-mara, CTA shopify://collections/timeless-pieces-mara. No Theme Editor composition save, theme API file write, manual push or publish. An independently running local preview watcher picked up edits.

Preview desktop1920px/mobile375px confirms banner and four correct main catalog images load; CTA destination and responsive placement work. Browser scrollbar leaves360px mobile layout/328px content. Screenshots and complete receipt are in output/timeless-pieces/.

Remaining differences:

- Existing Peekaboo Mini inventory0 is preserved; Sold out differs from Figma.
- Native card uses selected_or_first_available_variant. Desired color moved first on new products so correct catalog image displays; swatch order differs from Figma. Dark Wine retains existing Coffee metaobject label/color.
- Correct New tag is present on Wine, but shared badge renderer does not display it in preview; needs separate theme setting/implementation review.
- Mobile uses a full-width slider card rather than Figma280px/next-card preview. Shared typography/card padding differences remain. Resource verification is not a pixel-parity claim.

Validation: Theme Check0 errors/7 warnings; two banner tests pass; git diff --check passes. Receipt contains IDs/permanent CDN URLs, no credentials or signed source URLs.

Focal point: all13 uploaded AVIFs saved at canvas center50%/50% in Shopify Files editor. Each Save completion verified before navigation; focal-receipts.json records file IDs. Native preview uses the centered banner crop.
