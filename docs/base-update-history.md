<!-- base-sync-state: {"repository":"https://github.com/Chieu2507/shopify-theme-base","branch":"dev","sha":"8169f12ce76e4a0e473ef1c1fbb429735fd51216"} -->

# Base update history

## 2026-10-06 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `6eacf7b70c93c4e8cd1e70ada16c70701aecebf2`
- Updated through team commit: `8169f12ce76e4a0e473ef1c1fbb429735fd51216`
- Team commits included: 34
- Source changes:

```text
assets/accordion-details.js                        |  23 +-
 assets/cart-drawer.js                              |  21 +-
 assets/cart-page.css                               |  15 ++
 assets/cart-page.js                                | 155 +++++++++++
 assets/cart-recommendations.js                     |  67 +++++
 assets/component-collection-card.css               |  88 ++++++
 assets/critical.css                                |   8 +
 assets/gift-card.css                               |  29 ++
 assets/gift-card.js                                |  57 ++++
 blocks/_bundle-product-list.liquid                 |  34 +--
 blocks/_cart-content.liquid                        | 139 ++++++++++
 blocks/_cart-order-summary.liquid                  | 195 ++++++++++++++
 blocks/_cart-summary.liquid                        |  49 ++++
 blocks/_collections-list.liquid                    | 202 ++++++++++++++
 blocks/_collections-page-card.liquid               |  16 ++
 blocks/cart-free-shipping.liquid                   | 169 ++++++++++++
 blocks/cart-items.liquid                           | 170 ++++++++++++
 blocks/cart-order-note.liquid                      | 214 +++++++++++++++
 blocks/cart-shipping-estimator.liquid              | 214 +++++++++++++++
 blocks/collection-card.liquid                      | 254 +-----------------
 blocks/pagination.liquid                           |  21 +-
 blocks/product-list.liquid                         | 171 ++++++++++--
 blocks/product-variant-picker.liquid               |  21 --
 config/settings_schema.json                        |   2 +-
 docs/audits/cart-reference-2026-10-05.md           | 102 +++++++
 .../audits/collection-list-reference-2026-10-05.md |  45 ++++
 docs/audits/gift-card-reference-2026-10-05.md      |  35 +++
 docs/phase-2-theme-settings.md                     |   9 +-
 locales/en.default.json                            |  20 +-
 locales/en.default.schema.json                     |   4 +-
 sections/cart-recommendations.liquid               | 266 ++++++++++++++++++
 sections/cart.liquid                               | 223 +++++++++------
 sections/collections.liquid                        | 298 ++++++++++++++++-----
 snippets/cart-surface-style.liquid                 |   6 +
 snippets/collection-card-render.liquid             | 164 ++++++++++++
 snippets/css-variables.liquid                      |   3 +
 snippets/icon.liquid                               |   6 +-
 snippets/pagination-pages.liquid                   |   3 +
 snippets/product-collection-grid.liquid            |   5 +-
 snippets/swatch.liquid                             |   2 -
 snippets/variant-picker.liquid                     |   3 +-
 templates/cart.json                                | 110 +++++++-
 templates/gift_card.liquid                         | 104 +++----
 templates/index.json                               |   1 -
 templates/index.spinel-sync.json                   |   1 -
 templates/list-collections.json                    |  71 ++++-
 tests/accordion-details.test.cjs                   |  74 +++++
 tests/cart-page.test.cjs                           |  86 ++++++
 tests/cart-recommendations.test.cjs                |  32 +++
 tests/cart-shadow.test.cjs                         |  17 ++
 tests/collections-page.test.cjs                    |  75 ++++++
 tests/gift-card.test.cjs                           |  21 ++
 tests/product-controls.test.cjs                    |  18 +-
 53 files changed, 3572 insertions(+), 566 deletions(-)
```

- Included team commits:
  - `b5b2c0c336560e1ef9f4b334c7461fe1e254cf1b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `98a30dba55d446a1fd6044ede7a34aa03cffc90d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `84f6a14822165ec58982a1e12bccc2938503e5d4` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `81c2222ebec315c195a32bcee93db42f62f21e94` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `fbd708fa976978aee5b991e760cbf646b3fd7256` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `9d8f1c08d40a4b4e0c1524e13ef81e46cb8760f1` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ad666b191084fb3461333916f2874154d544d8aa` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `d40c4a9d678702b6ba4e23bfa976597523b1f679` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `97677e6c59291dba1d97983cbcef897a7ecf3eed` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `3a78db7f213be3fa4ffa7fd1e79efa3296961ae1` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `839b61b007f630d388b2861851305bfd123e8adc` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `7ffd24ec88b26c6d6f05b4443500ac2fc1b1e677` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `9f85a77f73d9b9fbf8ea45f4f5fa36f6241ddd8b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `65e0e3bd5c9647244fdb40fcecd0b0fba8736d07` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `19ba08b92253b40d6de54af8d5aafd7ca8fbda94` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `a73144dd3c7bc437d07041ccebac259c64d287c2` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `7e3619d85886c7e631db7f8f41e491cead1d0ab2` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `1bbb51e78125dfaa4a8e522ccb6f23b3f1b19a30` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `3760e71aa751140c96d28a5e81309315ab0ae171` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `c937805e779bdb013510e0f61872947f0cabebd7` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `34f182ffeb92be02ba867fc5ef36c2b57e4fed07` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `40abfdd446e8ff7a0fa501de82531900918a86a8` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `f4394625bcdd082592b690933b4d7133544e2d80` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ebb3d7de512e02d1c24d52cb17465a9ba8cb03d6` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `a802b0853b5bb51b01c26f434ebcbd7f5714d61a` — fix(variant-picker): align swatches with theme settings
  - `87d4ea989bfee7d8289ead58af4f71929fb99bff` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `d72889079d6034a8819d67f9fafb7773359d0609` — fix(bundle): align selected swatch border
  - `6882c93c1919881d4c567c100239fec717e26429` — feat(collections): build configurable collection list page
  - `c2c95f99920d8d00a30bc2097c799a892eeaff74` — feat(gift-card): add responsive redemption page and copy controls
  - `7efa20abaaea4eecee70ede3acaa9a96c0ad33b9` — fix(disclosure): settle padded accordion animations correctly
  - `b647e5509758bac81fca616d8705df368c2ed10d` — feat(cart): build editable cart page with shared recommendations
  - `ca6c0663385904551290a9d03ce7d3fbaac4fc4f` — Merge development Shopify updates before outbound base sync
  - `1751c2b43c76e584ebbb35ed302182dfd6f0a7c7` — Merge theme-base dev history for outbound feature sync
  - `8169f12ce76e4a0e473ef1c1fbb429735fd51216` — style(collections): remove trailing blank line from shared renderer


## 2026-10-05 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `22b24b6b92a1026816957ff1373c669e0aaddb1a`
- Updated through team commit: `6eacf7b70c93c4e8cd1e70ada16c70701aecebf2`
- Team commits included: 32
- Source changes:

```text
assets/cart-drawer.css                             |   1 +
 assets/collections-with-tabs.js                    |  16 +
 assets/component-overlay.css                       |   2 +
 assets/component-pagination.css                    | 161 +++++++
 assets/critical.css                                | 260 +++++------
 assets/product-information.css                     |   8 -
 assets/product-media.css                           |  25 ++
 assets/product-media.js                            |   4 +-
 assets/section-collection.css                      | 152 +------
 blocks/_collection-pagination.liquid               |  45 +-
 blocks/_header-menu.liquid                         |   6 +
 blocks/_product-media.liquid                       |  30 +-
 blocks/blog-archive-list.liquid                    |  27 +-
 blocks/blog-list.liquid                            |  13 +-
 blocks/blog-meta.liquid                            | 259 +++++++++--
 blocks/blog-tag-filter.liquid                      | 232 ++++++++++
 blocks/blog-title.liquid                           | 170 +++++++
 blocks/collections-with-tabs-item.liquid           |   8 +-
 blocks/comments.liquid                             | 258 +++++++++--
 blocks/content.liquid                              |  35 +-
 blocks/featured-image.liquid                       | 163 ++++++-
 blocks/featured-post.liquid                        | 488 ++++++++++++++++++---
 blocks/image-card.liquid                           |   2 +-
 blocks/pagination.liquid                           | 162 ++++++-
 blocks/previous-and-next-posts.liquid              | 178 +++++++-
 blocks/product-buy-quantity.liquid                 |   4 +-
 blocks/tags-and-sharing.liquid                     | 106 ++++-
 config/settings_schema.json                        |  17 +-
 docs/audits/article-reference-2026-10-05.md        |  26 ++
 docs/audits/blog-reference-2026-10-05.md           |  69 +++
 .../collections-with-tabs-color-2026-10-05.md      |  33 ++
 locales/en.default.json                            |  24 +-
 locales/en.default.schema.json                     |   4 +-
 sections/announcement-bar.liquid                   |   8 +-
 sections/article.liquid                            | 239 ++++++++--
 sections/blog-posts.liquid                         |  22 +-
 sections/blog.liquid                               | 318 +++++++-------
 sections/bundle-builder.liquid                     |  10 +-
 sections/collection-banner.liquid                  |   8 +-
 sections/collection-list-thumbnails.liquid         |   2 +-
 sections/collection-list.liquid                    |   4 +-
 sections/collection-page-breadcrumb.liquid         |   4 +-
 sections/collection-page-links.liquid              |   4 +-
 sections/collection-tabs.liquid                    |   4 +-
 sections/collection.liquid                         |   4 +-
 sections/collections-with-tabs.liquid              |  11 +-
 sections/contact-form-custom.liquid                |   4 +-
 sections/contact-information.liquid                |   4 +-
 sections/custom-section.liquid                     |   4 +-
 sections/divider.liquid                            |  12 +-
 sections/email-signup-dual-image.liquid            |   4 +-
 sections/email-signup-form.liquid                  |   4 +-
 sections/email-signup-single-image.liquid          |   4 +-
 sections/faq-accordion.liquid                      |   4 +-
 sections/faq-image-accordion.liquid                |   4 +-
 sections/featured-blog-posts.liquid                |   4 +-
 sections/featured-collection-banner.liquid         |   4 +-
 sections/featured-collection.liquid                |  23 +-
 sections/hero.liquid                               |   4 +-
 sections/hotspot-full-width-carousel.liquid        |   4 +-
 sections/icon-text-cards.liquid                    |   4 +-
 sections/icon-text-inline.liquid                   |   4 +-
 sections/image-cards.liquid                        |   4 +-
 sections/image-text-card-grid.liquid               |  18 +-
 sections/image-text-split-layout.liquid            |   4 +-
 sections/location-list.liquid                      |  18 +-
 sections/location-map.liquid                       |  18 +-
 sections/related-posts.liquid                      | 386 ++++++++++++++++
 sections/rich-text.liquid                          |   4 +-
 sections/scrolling-cards.liquid                    |  10 +-
 sections/slideshow.liquid                          |   4 +-
 sections/testimonial-carousel.liquid               |   4 +-
 sections/text-marquee-custom.liquid                |   8 +-
 sections/timeline.liquid                           |   4 +-
 snippets/css-variables.liquid                      |   4 +-
 snippets/heading-size-token.liquid                 |  15 +
 snippets/media-card.liquid                         |   3 +-
 snippets/pagination-pages.liquid                   |  45 ++
 snippets/product-card-swatches.liquid              |  24 +-
 snippets/swatch-option.liquid                      |  31 ++
 snippets/swatch.liquid                             |   6 +-
 snippets/variant-picker.liquid                     | 101 +++--
 templates/article.json                             | 190 +++++++-
 templates/blog.json                                | 141 +++++-
 tests/blog-archive.test.cjs                        |  79 ++++
 tests/blog-heading-schema.test.cjs                 |  33 ++
 tests/collections-with-tabs-color.test.cjs         |  75 ++++
 tests/product-controls.test.cjs                    | 102 +++++
 tests/product-media-pagination.test.cjs            |  79 ++++
 89 files changed, 4120 insertions(+), 1007 deletions(-)
```

- Included team commits:
  - `da9f848ee00271f170d3cbe74b51bd80cb682e9b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `901d6cd917e5622b57061494bb6efd535d83122f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `0f609f8e95bea5b17c2834150e4ee18ec8d20e11` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `528b7b70a54d9c5d6ae7beff74cd2c0152070b26` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `c54acdb1d252392a0eef26f6d7c610d215cc7774` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `4b5ed5707828d382b75afd54b71356004b42d79f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `4968d0e5397c758843fcb6a5bfe03a0cc46d6f50` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b5f8da697829cd58d0026e632acf45662e4ae241` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `aeda2a386a3809ee56a0784be0eb0d2fd749458e` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `adba828b8c04e3803822cb20ed00c3318ef4c530` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `99d63b77dd3eaf25b94e29bb6c198c8cdaf206bb` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `81137c2af310704be7307b894f8d5880ec0a1966` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `75d6207dcf5b4ebea1bddda1fe3a928c9df5fe6d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ebd597c1c7ee3f920cbc96f11dadc84c60ec3033` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `bececf168431b89b5ae0a8654bfeefb01c8626b9` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `50089fe0d126d6f5e2f733ed63dace4741063204` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `64334d2d03b684514dfe060259cb3ed8a39b585f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `77020a2809ed046e6551a28daefe0132d131eb09` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `5896fd2503aafca1d474f1d2fd3c78d4fd548b3a` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `82a4610acce8a13a3acb79e9ea368a5f718985c4` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `2d68d5fe283738d2445bd343ca1132fd17e4432e` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `16d1540eb386ca1c8c9d0b2ad634e9f5f7fce59e` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `f882eec586ac9eb32b3324ae794331fe5ccfbcd5` — feat(blog): complete archive and article with shared schema controls
  - `f2c5768d90786b4e4e8aed64a8977289e3659e8f` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `7c1922d8f8b9b21cc637248b276bfe4ac348f161` — Merge remote-tracking branch 'theme-base/dev' into codex/spinel-chieutt-dev
  - `8b31e4b7e5433bf02a5a3d33a6cc4b4caae0a4a3` — fix(schema): preserve canonical padding labels after base merge
  - `159bf8d238f4cc477954384d67c7d844a1381035` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `32cb243e9e22e385ce98aa1e2a04adb4b4005bd2` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b2c3b68ffae1842a13d54f4a8f9fb62070a1ccb5` — Fix active collection tab color scheme scope
  - `a099bef50f8b4d27ebba64738f58135d49bf9372` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `06446db9cfad7d97818e7a6915ab86394961912e` — fix(theme): unify product swatches and media controls
  - `6eacf7b70c93c4e8cd1e70ada16c70701aecebf2` — fix(sections): order mobile collection actions


## 2026-10-05 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `823f0b095da49be3c2f59d3eedd43453048496dd`
- Updated through team commit: `22b24b6b92a1026816957ff1373c669e0aaddb1a`
- Team commits included: 2
- Source changes:

```text
assets/product-media.js              |   4 +-
 blocks/marquee.liquid                | 254 +++++++++++++++++++++++++----------
 sections/text-marquee-custom.liquid  |  83 +++---------
 tests/product-media-pointer.test.cjs |  85 ++++++++++++
 4 files changed, 296 insertions(+), 130 deletions(-)
```

- Included team commits:
  - `393d5187ec4eac6cf791dd3612352aef44e9db92` — fix(scrolling-text): repair marquee copies, scroll motion and padding
  - `22b24b6b92a1026816957ff1373c669e0aaddb1a` — fix(quick-add): preserve image clicks when dragging gallery


## 2026-10-02 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `6d008b1ed65a29f14371861ccaeadeca77d4d4e5`
- Updated through team commit: `823f0b095da49be3c2f59d3eedd43453048496dd`
- Team commits included: 14
- Source changes:

```text
assets/bundle-builder.js            |  69 ++++--
 assets/button-loading.js            |  28 +++
 assets/component-bouncing-dots.css  |   5 +
 assets/critical.css                 |  51 +++-
 assets/editorial-text.js            |  97 ++++++++
 assets/quick-add.js                 |  36 ++-
 assets/quick-view.js                |  28 +--
 assets/section-parallax.css         | 167 +++++++++++++
 assets/section-parallax.js          | 175 ++++++++++++++
 blocks/_bundle-summary.liquid       |   2 +
 blocks/editorial-text.liquid        | 209 +++++++++++------
 blocks/parallax-item.liquid         | 451 ++++++++++++++++++++++++++++++++++++
 docs/parallax-section-build-plan.md |  71 ++++++
 sections/bundle-builder.liquid      |   1 +
 sections/parallax.liquid            | 405 ++++++++++++++++++++++++++++++++
 snippets/swiper-navigation.liquid   |   2 +-
 snippets/theme-button.liquid        |   2 +-
 tests/editorial-text.test.cjs       |  49 ++++
 18 files changed, 1707 insertions(+), 141 deletions(-)
```

- Included team commits:
  - `8b1a39821a6eaef092620549f533642ef57b3712` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b94488dd7e8443d1acf7b54ff0d8713706c660fa` — Restore placeholder image overlay layers
  - `70200cafcf95465402494280bb99330b31bf1875` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `41ed5aa52ee3598de035deb49be44c0811bdbd6d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `1e8b729af3b36a8ec4fc14f372bb48c741aa68e1` — fix: use tertiary colors for outline carousel navigation
  - `786bc243bfb2ff7a0d7d4d6a5bc8c86f4110a5c4` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `c175256c2f0afde479d5dd170d1f29e9dd0e65a7` — fix: inherit slideshow navigation text colors
  - `85665105f00dd94632fa4acf22aab20f95ffc25d` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `b2aeea388081f1c2e243a1d6d45f208f830b1d41` — Revert accidental Spinel sync to theme-base/dev
  - `d4415a1fe0f042a4d3f550cb241416fee0abb9ee` — Revert "fix: inherit slideshow navigation text colors"
  - `1e15831c4fb3e1db502906704556f487a67d4ced` — fix(bundle-builder): restore add clicks and loading state
  - `dcb1f65ce3d755f85162671ba9e4880c52823164` — feat(parallax): add composable section and inline editorial images
  - `ad8304346c4d4f59c883a96e305123557bc78609` — fix: release motion layer for nested backdrop blur
  - `823f0b095da49be3c2f59d3eedd43453048496dd` — Merge remote-tracking branch 'theme-base/dev' into codex/spinel-chieutt-dev


## 2026-10-02 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `117a9d5a859bc588807376d13f15d478587af181`
- Updated through team commit: `6d008b1ed65a29f14371861ccaeadeca77d4d4e5`
- Team commits included: 42
- Original published update commit: `86c33283` — `chore(base): update base with 42 upstream commits through 6d008b1e` (this SHA preceded the current workflow and log changes).
- Source changes: 31 files changed, 1,848 insertions, 509 deletions.
- Update commit message: `chore(base): update base with 42 upstream commits through 6d008b1e`

### Content summary

- Updated bundle builder variant snapshots and collection pagination/facet request handling.
- Reworked comparison tables to support dynamic rows and isolated instances; added row/value snippets, migrations, and regression tests.
- Updated blog section context, cards, lists, and view-all behavior with migration and tests.
- Made featured collection banner roles dynamic and added migration coverage.
- Fixed the comparison-table migration to find static feature blocks outside `block_order`, with regression coverage.
- Fixed header homepage overlay behavior and finalized schema, blog template, and validation updates.
- Removed the temporary QA template snapshot.

### Included team commits

| SHA | Commit subject |
| --- | --- |
| `533e8452d4e36268d4583213b0ef03378845ea41` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `b23837bf05d65fabf3c49916444f8f4d06abd450` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `46b246561f42d38a40d1d729355345b6e0e54758` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `4ce6590f63b6f2d1cf4dbd88b2e1d26c269cf880` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `5acc9045b2b80d307a815ea4571b9bbebf39958a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `e7ec773cf15a75b882cb4e4156335ff264f83dec` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `9865ea2e295fbfe0c04f9092aa912d7247d8e3ad` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `7e1b1fc0141bc7aa2ce2c0f8de513e96147fe26a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `be00ab0b74afe0d533ac4164f8cc68dc499b9d9d` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `89b770c676bfeb6cba4b2f387c13760863f82a1e` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `268f9c77996af11c2f12b0dc0ee29a6529c55146` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `0488d39b3bbf0128e8ff5215137399bb7762a09c` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `86f3f0be4db092a7b600ea40d3243bf5ebf4a600` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `456dccb37f3aee5295b77d2ae86f67f8c90aa5ab` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `b45a30cf186ac165f4898edb1b774510761db99d` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `48acc623e0f0f8d126c96b462f579caeca8b62eb` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `58c4146837f336b551781c2e99d1c6951c12516a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `4bf05d2e3b13d3c23737d876b9b76e8399ca3b0a` | fix(bundle-builder): preserve added variant snapshots |
| `4b1469dd21eba18e58b5eaa569767f512451dff9` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `b659646962848a607d093fa1f704efe9575aa181` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `74ad2f4de6e40b7fce1cf39f11e2a3498f92ecf2` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `492298d3059dfbdf4b1bcafe35b6ad5691c6c333` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `e43b7db9481633064bfd41d21cda9d09ca7b1e00` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `0263c4417b3e3c54d3546e0431d5f22ff29b4bb5` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `71fcabc975933857c0d131f10d423fc5a86fdb3a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `8a1142b2093a9730cf2b8fda6db88604e1251978` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `fda82db044d0f08de080a445410077016f00af19` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `556c5740f48f8877b755dece47fafbb83bec840d` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `4afcdd33080a283e663b66035a9b8256e1944d58` | fix(header): allow homepage overlay without sticky behavior |
| `297348329e38206675a785256fd17cf1d48d4a8b` | fix(collection): reject stale pagination and facet responses |
| `c713646d8ade7dff094c73fb098583d0f1cc6f36` | fix(blog): share section blog context with cards and view all |
| `5e7cae80ec98cafb20f0e66ed65108ad9a4fb3cf` | refactor(comparison): support dynamic rows and isolated table instances |
| `9eed125dfa6d8e8abb10483e52f1ae0a54154af0` | refactor(banner): make featured collection roles dynamic |
| `551d2c0fa4e8f54cac747564e88ed98333d93e56` | Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev |
| `497ba41570c345382e0daef7e9b2e9f547b4da31` | chore(theme): remove temporary QA template snapshot |
| `d45ed111e30395a6d96f73d5f9ed1d25fcb54298` | Merge remote-tracking branch 'theme-base/dev' into codex/spinel-chieutt-dev |
| `9b8084516221fe949b2bfd505a4ffc5fa5172d9b` | fix(theme): validate merged schema docs and blog template settings |
| `37b3f05ec15bba6e77fb7aece1f0d7d5cdd591fe` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `22e4ddf92ac8e02021ca37d037e2bff9c16e7f66` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `6c8bc2ca3ca66dadf286365c4f7ef9e44bfd3e2f` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `ceeb5207898c9015821ad1d66d1dce741a42bf09` | Fix comparison table migration for static feature blocks |
| `6d008b1ed65a29f14371861ccaeadeca77d4d4e5` | Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev |
