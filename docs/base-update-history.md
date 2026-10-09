<!-- base-sync-state: {"repository":"https://github.com/Chieu2507/shopify-theme-base","branch":"dev","sha":"0cf058f77772357ca87fc95b705c979e04d44ad1"} -->

# Base update history

## 2026-10-09 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `bedb4bd5745825c137bba98d56736d591fcb0042`
- Updated through team commit: `0cf058f77772357ca87fc95b705c979e04d44ad1`
- Team commits included: 23
- Source changes:

```text
assets/block-animations.js                    | 169 +++++
 assets/cart-drawer.css                        |   1 +
 assets/component-overlay.css                  |   2 -
 assets/critical.css                           |  15 +-
 assets/hero.js                                |   2 +-
 assets/product-list-promos.js                 |  89 +++
 assets/section-collection.css                 |   5 +
 blocks/_collection-sort.liquid                |   7 -
 blocks/_collection-toolbar.liquid             |   1 +
 blocks/_comparison-table-features.liquid      |   9 +-
 blocks/_header-menu.liquid                    |  28 +-
 blocks/_marquee-button.liquid                 | 162 +++++
 blocks/_marquee-countdown-timer.liquid        | 990 ++++++++++++++++++++++++++
 blocks/_marquee-coupon-code.liquid            | 134 ++++
 blocks/_marquee-divider.liquid                | 149 ++++
 blocks/_marquee-group.liquid                  | 307 ++++++++
 blocks/_marquee-heading.liquid                | 231 ++++++
 blocks/_marquee-icon.liquid                   | 477 +++++++++++++
 blocks/_marquee-image.liquid                  | 171 +++++
 blocks/_marquee-text.liquid                   | 140 ++++
 blocks/_search-products.liquid                |   4 +-
 blocks/collection-tab.liquid                  |  19 +-
 blocks/countdown-timer.liquid                 |   3 +-
 blocks/faq_accordion.liquid                   | 788 ++++++++++++++++++--
 blocks/faq_item.liquid                        | 234 +++++-
 blocks/gallery-strip-feature-item.liquid      |   1 +
 blocks/gallery-strip-item.liquid              |  25 +-
 blocks/localization.liquid                    | 252 +------
 blocks/marquee.liquid                         | 653 ++++++++++++-----
 blocks/product-card-compact.liquid            | 538 ++++++++++++++
 blocks/product-list-banner.liquid             |   2 +-
 blocks/product-list.liquid                    |  16 +-
 blocks/promo-card.liquid                      | 455 ++++++++++++
 blocks/slideshow-slide.liquid                 |   5 +-
 blocks/tab-layout.liquid                      | 154 +---
 blocks/tabs-view-all-button.liquid            |  40 +-
 blocks/testimonial-item.liquid                |   7 -
 blocks/view-all-button.liquid                 |  12 +-
 docs/content-creation-workflow.md             | 197 +++++
 docs/elara-blocks-build-plan.md               |  44 ++
 docs/phase-2-theme-settings.md                |   4 +
 docs/product-card-compact-build-plan.md       |  31 +
 docs/promo-card.md                            |  20 +
 layout/theme.liquid                           |  26 +-
 locales/en.default.json                       |   4 +
 locales/en.default.schema.json                |   1 +
 sections/blog-posts.liquid                    |  16 +-
 sections/cart-drawer.liquid                   |   5 +-
 sections/faq-accordion.liquid                 |  10 +-
 sections/faq-image-accordion.liquid           |  10 +-
 sections/featured-blog-posts.liquid           |  20 +-
 sections/featured-collection.liquid           |  18 +-
 sections/hero.liquid                          | 277 +------
 sections/overlay-group.json                   |   2 +-
 sections/scrolling-text-star-separator.liquid | 161 -----
 sections/text-marquee-custom.liquid           | 351 ++++++---
 snippets/comparison-table-column-shell.liquid |   6 +
 snippets/css-variables.liquid                 |  25 +-
 snippets/font-faces.liquid                    |  30 +
 snippets/gallery-strip-item-styles.liquid     |  24 +
 snippets/hero-styles.liquid                   | 276 +++++++
 snippets/icon.liquid                          |   3 +-
 snippets/image-ratio-value.liquid             |  14 +
 snippets/localization-styles.liquid           | 251 +++++++
 snippets/marquee-letter-spacing.liquid        |  23 +
 snippets/product-collection-grid.liquid       |   7 +-
 snippets/product-list-promo-items.liquid      |  24 +
 snippets/product-list-promo-styles.liquid     |   7 +
 snippets/search-filters.liquid                | 101 ---
 snippets/tab-layout-styles.liquid             | 146 ++++
 templates/search.json                         |   9 +
 tests/collection-tab-promo.test.cjs           |  38 +
 tests/product-card-animation.test.cjs         |  92 +++
 tests/product-list-promo.test.cjs             |  83 +++
 tests/section-content.test.cjs                |   4 +-
 tests/view-all-blog.test.cjs                  | 124 +++-
 76 files changed, 7323 insertions(+), 1458 deletions(-)
```

- Included team commits:
  - `ff37c0a27a43c73cb2b1a2f24d777e623f96c99f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `1f7a3119f1f54c6413e666ce97570fc712993496` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `88b6ab6e0e74153b6ff77e0e4b325799b702c454` — Merge theme-base/dev announcement and performance updates
  - `f8421fb50ceb54294bba69868219e7508b7d9180` — fix: align typography labels and add custom collection title size
  - `157895a4aef42eace5ae52857de4e2e8c56319e4` — fix: normalize collection heading size options and saved values
  - `5b27d71dcd9e71d0eea54de236ce9a800199fb1a` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into HEAD
  - `439c891316512858313b135a938d2a80083f1292` — docs: add content creation workflow and product lifestyle guidance
  - `4bec722122e0508eb7f89040691432700b73b503` — docs: require a dedicated blog for each template
  - `196d8156bc9fc26de10b28802b674ec7e6d0e45e` — docs: require four product images with lifestyle and alternate views
  - `25f7d5e686c30428fbecaed5df21970b96863824` — Fix mobile navigation drawer responsive dimensions
  - `cd01144b124a83399665f51657d5f41c6c531c8b` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `252788b0f5d8177eec704fccd56ee513516aa70c` — Fix responsive drawer padding and corner behavior
  - `f409d8bab385c5140d5e455353c33ada705b75b8` — Show resource View all actions only when items exceed display limits
  - `04d2af5cb9f0d7b0df332f316b4b155a8dd0aa39` — Merge theme-base/dev while preserving resource action visibility
  - `8e0d35175be0ad15d8f844e97772bbfab96c6489` — Add Promo cards with shared product entrance animation
  - `b0b1b65b35f18f4061a098f6bb2549f525ecc93b` — Add mobile visibility controls to View all blocks
  - `46050ad818ed85498bc66890905b29f7dbe5c4ac` — feat(theme): rebuild marquee and accordion blocks from Elara
  - `d38b834a178aa66fdca5484526c53d1dc016649c` — chore(theme): remove local block regression tests from tracking
  - `560fec046f0f9d6ce67339d2a16312f360c66d5b` — fix(accordion): use Text blocks for preset answers and remove legacy controls
  - `3a2f0336c993c12ddb838968c5f181b5aee6e842` — fix(theme): optimize assets and correct editor group order
  - `e21ea484770e7c91e9b8fd8dc3fa648070ee8ee0` — feat(product-card): add optimized compact product block
  - `74f3095fe0fe0515e8266b0f9c371a70fb59da8d` — Revert "feat(product-card): add optimized compact product block"
  - `0cf058f77772357ca87fc95b705c979e04d44ad1` — feat(product-card): add compact block and document its contract


## 2026-10-07 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `8169f12ce76e4a0e473ef1c1fbb429735fd51216`
- Updated through team commit: `bedb4bd5745825c137bba98d56736d591fcb0042`
- Team commits included: 112
- Source changes:

```text
assets/carousel-block.js                           |    9 +-
 assets/cart-drawer.js                              |  155 ++-
 assets/component-overlay.css                       |   80 +-
 assets/component-search-suggestions.css            |   35 +
 assets/critical.css                                |  233 ++++-
 assets/header.js                                   |   11 +-
 assets/password-page.js                            |   27 +
 assets/product-buy-buttons.js                      |   29 +
 assets/product-card-variants.js                    |    8 +
 assets/product-media.js                            |   10 +-
 assets/quick-add.js                                |    8 +-
 assets/quick-view.js                               |    8 +-
 assets/recently-viewed.js                          |   54 +
 assets/search-page.js                              |   56 ++
 assets/search-suggestions.js                       |   96 ++
 assets/variant-picker.js                           |   18 +-
 blocks/_collection-count.liquid                    |    4 +-
 blocks/_collection-filter.liquid                   |   36 +-
 blocks/_collection-sort.liquid                     |   28 +-
 blocks/_collection-toolbar.liquid                  |    9 +-
 blocks/_search-input.liquid                        |  220 +++++
 blocks/_search-products.liquid                     |  148 +++
 blocks/_search-results.liquid                      |  155 +++
 blocks/banner.liquid                               |    2 +-
 blocks/blog-grid.liquid                            |   51 +-
 blocks/blog-list.liquid                            |    6 +-
 blocks/carousel.liquid                             |   20 +-
 blocks/collection-list-items.liquid                |    8 +-
 blocks/collection-thumbnail.liquid                 |   12 +-
 blocks/collections-with-tabs-item.liquid           |    4 +-
 blocks/comparison-table.liquid                     |    2 +-
 blocks/contact-field.liquid                        |    7 +-
 blocks/contact-form.liquid                         |   30 +-
 blocks/eyebrow.liquid                              |    3 +
 blocks/faq_category.liquid                         |    6 +-
 blocks/faq_item.liquid                             |   30 +-
 blocks/gallery-strip-overlay-group.liquid          |    2 +-
 blocks/header.liquid                               |    8 +-
 blocks/heading.liquid                              |   29 +-
 blocks/image-card.liquid                           |    2 +-
 blocks/location-item.liquid                        |    2 +-
 blocks/marquee-item.liquid                         |    2 +-
 blocks/marquee.liquid                              |   10 +-
 blocks/press-item.liquid                           |    2 +-
 blocks/previous-and-next-posts.liquid              |    2 +-
 blocks/product-buy-buttons.liquid                  |    3 +
 blocks/product-list.liquid                         |    6 +-
 blocks/scrolling-card.liquid                       |    2 +-
 blocks/slide.liquid                                |    2 +-
 blocks/slideshow-slide.liquid                      |   33 +-
 blocks/tab-layout.liquid                           |    2 +-
 blocks/testimonial-item.liquid                     |    2 +-
 blocks/text.liquid                                 |    5 +-
 blocks/timeline-list.liquid                        |   10 +-
 blocks/timeline-slide.liquid                       |    2 +-
 config/settings_schema.json                        |   54 +-
 docs/audits/404-reference-2026-10-06.md            |   48 +
 docs/audits/about-us-reference-2026-10-06.md       |   50 +
 docs/audits/contact-reference-2026-10-06.md        |   48 +
 docs/audits/faq-reference-2026-10-06.md            |   73 ++
 docs/audits/marquee-parallax-2026-10-06.md         |   13 +
 docs/audits/outbound-base-sync-2026-10-06.md       |    8 +
 docs/audits/pages-outbound-base-sync-2026-10-06.md |   36 +
 docs/audits/quick-add-media-zoom-2026-10-06.md     |   42 +
 .../audits/search-outbound-base-sync-2026-10-06.md |   25 +
 docs/audits/search-reference-2026-10-06.md         |  105 ++
 docs/qa/performance-regressions-2026-10-06.md      |   17 +
 layout/password.liquid                             |    8 +-
 layout/theme.liquid                                |   23 +-
 locales/en.default.json                            |   18 +-
 locales/en.default.schema.json                     |   24 +-
 sections/404.liquid                                |  231 ++++-
 sections/announcement-bar.liquid                   |   33 +-
 sections/blog-posts.liquid                         |  201 +---
 sections/bundle-builder.liquid                     |    2 +-
 sections/cart-drawer.liquid                        |   13 +-
 sections/collection-list-thumbnails.liquid         |    2 +-
 sections/collection-list.liquid                    |  176 +---
 sections/collection-tabs.liquid                    |   20 +-
 sections/collections-with-tabs.liquid              |    9 +-
 sections/collections.liquid                        |    4 +-
 sections/comparison-table-custom.liquid            |    2 +-
 sections/contact-form-custom.liquid                |    2 +-
 sections/contact-information.liquid                |    8 +-
 sections/countdown.liquid                          |    2 +-
 sections/divider.liquid                            |    2 +-
 sections/email-signup-dual-image.liquid            |    2 +-
 sections/email-signup-form.liquid                  |    4 +-
 sections/email-signup-single-image.liquid          |    2 +-
 sections/faq-accordion.liquid                      |    2 +-
 sections/faq-image-accordion.liquid                |    2 +-
 sections/featured-blog-posts.liquid                |  138 +--
 sections/featured-collection-banner.liquid         |    4 +-
 sections/featured-collection.liquid                |  249 +----
 sections/footer.liquid                             |    2 +-
 sections/gallery-full-width-strip.liquid           |    2 +-
 sections/header.liquid                             |   18 +-
 sections/hero.liquid                               |    2 +-
 sections/hotspot-full-width-carousel.liquid        |    6 +-
 sections/hotspot-gallery.liquid                    |   14 +-
 sections/hotspot.liquid                            |    9 +-
 sections/icon-text-cards.liquid                    |   10 +-
 sections/icon-text-inline.liquid                   |   12 +-
 sections/image-cards.liquid                        |    4 +-
 sections/image-comparison-custom.liquid            |    2 +-
 sections/image-comparison-split-custom.liquid      |    6 +-
 sections/image-text-card-grid.liquid               |    2 +-
 sections/image-text-split-layout.liquid            |    2 +-
 sections/location-list.liquid                      |    8 +-
 sections/location-map.liquid                       |    8 +-
 sections/parallax.liquid                           |    2 +-
 sections/password.liquid                           |  145 ++-
 sections/press.liquid                              |    8 +-
 sections/quick-add.liquid                          |   11 +-
 sections/quick-view.liquid                         |   11 +-
 sections/recently-viewed-card.liquid               |   38 +
 sections/related-posts.liquid                      |    8 +-
 sections/rich-text.liquid                          |    6 +-
 sections/scrolling-cards.liquid                    |   20 +-
 sections/scrolling-text-star-separator.liquid      |   40 +-
 sections/search-overlay.liquid                     |   44 +-
 sections/search.liquid                             |  573 ++---------
 sections/shop-the-look-section.liquid              |    4 +-
 sections/testimonial-carousel.liquid               |    8 +-
 sections/testimonials-background-custom.liquid     |    6 +-
 sections/testimonials-horizontal-custom.liquid     |    8 +-
 sections/text-marquee-custom.liquid                |  276 +++---
 sections/timeline.liquid                           |   24 +-
 snippets/css-variables.liquid                      |   25 +-
 snippets/deferred-stylesheet.liquid                |   11 +
 snippets/form-field.liquid                         |    2 +-
 snippets/heading-size-token.liquid                 |   18 +-
 snippets/product-card-quick-add.liquid             |   12 +-
 snippets/product-card-swatches.liquid              |    3 +
 snippets/product-card.liquid                       |    3 +
 snippets/search-filters.liquid                     |  101 ++
 snippets/search-query-fields.liquid                |    8 +
 snippets/section-content-slot.liquid               |   13 +
 snippets/slideshow-image.liquid                    |  121 +++
 snippets/variant-picker.liquid                     |   12 +
 templates/404.json                                 |   49 +-
 templates/page.about-us.json                       |  888 +++++++++++++++++
 templates/page.contact.json                        | 1045 ++++++++------------
 templates/page.faqs.json                           |  633 ++++++++++++
 templates/password.json                            |   55 ++
 templates/search.json                              |   72 +-
 tests/cart-drawer-add.test.cjs                     |   53 +-
 tests/faq-item.test.cjs                            |   35 +
 tests/heading-size-sync.test.cjs                   |   42 +
 tests/overlay-product-modules.test.cjs             |   26 +
 tests/product-media-pointer.test.cjs               |   44 +
 tests/recently-viewed.test.cjs                     |   56 ++
 tests/search-history.test.cjs                      |   35 +
 tests/search-page.test.cjs                         |   84 ++
 tests/search-suggestions.test.cjs                  |   52 +
 tests/section-content.test.cjs                     |  111 +++
 tests/slideshow-image.test.cjs                     |   66 ++
 157 files changed, 6010 insertions(+), 2450 deletions(-)
```

- Included team commits:
  - `aa4772a95883f6052725c490fd225f1c4e5bea6a` — fix(cart): show inventory limit instead of cart error
  - `1f5a1ae006ab98f30a38ce9fe518de5a0c260026` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `f7fbab725f55e080f409ae1943f468d37169779b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b03bcdbd566f751e5d8e3bc06bd93f1991744872` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `59f9720c08e07847becb01a3f4fe105c9f1c88cd` — Fix Quick add gallery click tolerance for lightbox
  - `3be8e195ca8fa733bd9314e40ac3a507fc1767e0` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `c4d61938e687e5b328a285d0a86b759a9cf05504` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `8c7ca53d99f9c3c66bcde3c499b0f878665292eb` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `a6ffc340de5ce2380f70266fc6b3db02b17f636f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `27058b6f3e0e744981e78c20ca343d53b86a62ef` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `d6a7abb93a94b73aabf0632c0012974f28960769` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `fd2872fcb28171fed941c0adbf3dff655ee8dab1` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `7683a0da376d360cc84519c21d89e5db37eeca8d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `582c3a771a95b2375d11b364c90714ed62b2627c` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `6658e8b28bc6af0c15e05bb11a5c70d814c402d8` — Load versioned gallery modules in product overlays
  - `edf1aac44b2e50ba7e87d8bcc0462bdd5e804cc5` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `108e7a0996140fd4c731fd62b68959095372edfc` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `08f00d5205e3458ea20897d2755ff03a50aed9b8` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `8e193a8fe253b30574211c9f49d9c6afb0dedd39` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `4b2a2f93795fd3c3653d57c0662911913872d6a7` — Adjust About Us section colors and label
  - `89641d31c798c17b91647637dfc5313d39e14c20` — feat(faq): add editable FAQ page and fix answers
  - `efaf9ce6d5d4f0952199630cc60620e571ca0a50` — feat(faq): add editable FAQ page and fix answers
  - `5540b5261b84acacc7762361cd9e2ad23ea84444` — Merge FAQ commit 89641d31 from Spinel development
  - `49bea02441b3fcd30f17ad7baaa95fd11b9f6f6c` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `8110ab1f589784372cdd80f9c0e6a1db2c0e4bc3` — Merge About Us instance adjustments into theme-base dev
  - `98d2372bd3ee032a987d289bb633fe6f2ccfd675` — Merge remote-tracking branch 'origin/dev' into dev
  - `6ef1d86b9b5eca0cf35683fb0b57e67e4163e795` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `e9b5997e166bda9faa4fb499a5750f185065c587` — fix: show faq on storefront empty
  - `99155ced2b945a99c0a101d96538750be98178c9` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `c3e4554f94faffd87d5a1a7a59dcda2b4287f0c9` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `d4ccd385c67c8df606e5de92ac126de6ab600784` — Merge branch 'dev' of https://github.com/Chieu2507/shopify-theme-base into dev
  - `cc385545e9011a6d107db110033cb7a3588ae484` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `6e81ba5fc69346ad3527bf1f458f537745abc87f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ef390c11cb8f64a7d6136cb2a8a5c7ae7a80f6dc` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `cdd98f3e97a5ea5a94fbed9c07ccb05793da3bc2` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `d4b18692fe7bcc95f80d46a76a9e1989ded4de9b` — Restore Quick add lightbox fixes after base merge
  - `d0401951c96fbc3aad2af720b88e17d3e2def94d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `6872e8f59ff77eac45f71f6d01127b10b438d84b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `07f738d27e9ba46cc6a895d58f984769c79c6083` — Refine Contact layout and shared marquee and form behavior
  - `3cb47282538257d5d60171db1fd9fa00c75e0ba9` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into HEAD
  - `93b6634621c774d29d3af829762ed31017e45bdd` — Merge remote-tracking branch 'theme-base/dev' into HEAD
  - `4021fd9d2da1371b8bcd494e34c4f737465e1e81` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `dbb5fed99e3e0cf7746f13408be47b5c297cc6d9` — Preserve base layout until recently viewed section is committed
  - `0850b3af2dac78a6134627d11ac5e09a78d4ad39` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `f10553562eca035eeda88bb78cad6f02bede68ac` — Implement editable password landing page and password drawer
  - `36a189dab182ca19f7aad05073eb85a625ddf01a` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `bd8c96ca462c32980f706b4b9abf6586daa9c479` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `30b2d0d7c39696c0b57b2819fb84a2f33fd1d619` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `e5679314f8952c4cdb33e56db1d1b8d513cec6c9` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `8976ea49743fa1bd459fa7a2dee0b5941abc2ea1` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `9d7eba1f568f55be8e53fa203f1b8bf5aad7411b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `58d475cd7614d2605e0dc70e5fc864860967fd4f` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `2bb600a2dee44054d01217ac381bd8ae1405d04d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `511982e2f2349c6205ee56e1d2cb8d88e32e9881` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `885cc104329b0a191242e54ab46d9057c75d36bd` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `89279ece52f583f06ee19ea8a0e72497bd965065` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `41a0a96cd187d9078ed895abaca29a3ab8d1fd05` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `3849e8742ec888e29c53b038b961662aea8fa9e9` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `258610068b7227347782d1ecffaf8db74673eb7e` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b876201e95747cc75c57b5e20e8beb445df84f20` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `d779f62cbe2ea5576c5e31c4dce74f01005242f4` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `4e6f1200722bf974467ccf7332fcccf21598ee1c` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `0cdc484d9474170155863af6c4b5b24e2ee95e58` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `5f8a457b629717fecae35845df7d8951718f460d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `da160bdfb4dd5c1948eacdc156dd214128784fa2` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `e0510c6723ec0b2240938c1093f36597926a1351` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `626c8b84b8a89175d3fd3d0d8810a85b7d6b457e` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `092d6fe92cb480020be7c8c80479eee603edd666` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ad0a0e7bef57dfb828c39692bc9c97c5267553c3` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `4b264cc746235e3b01cd948b253f205dae2cd0e1` — fix: carousel style
  - `4e0f02a30534e0c6c04e33e449d6af4d07a68c46` — Merge branch 'dev' of https://github.com/Chieu2507/shopify-theme-base into dev
  - `549566e4797b6b7037f3badf42f0d28fd8b372b7` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `eee875d859a419e7bd803f4857f21a069c7dfd34` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `aa31ff91711dcde781937aeba9153a55b97a8ac4` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `126e85369aedbdb2ba6bcca371c5aba46583c4a3` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b805daed8f77bc7d1a0e4d972302df9007af05e7` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `40f90b47ba37af443e6d520380f27514876e9601` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `fb1a03da015c630b5c528b8f57045bcec595a4ce` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `97f3b854c5f20a9fe4e6e350a64e46e40662675b` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `83b531289f0b391f3f8f8659bbd7a2eba2f2ecb8` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `a5663d36ac26b06ce25e4aa0f31379f1e1abe9cf` — Build editable 404 page with responsive appearance controls
  - `b48ae2de23ea1974597c24c67e08e9199b0bf9d3` — Add editable Default Page title and appearance settings
  - `a349d4ce3a8e9966256d1425cc00036c152f6971` — Keep article pagination outer container square
  - `0a8add9ba0d13a284eebbbf82421d2a2de018b1a` — Add persistent Recently Viewed product cards and lifecycle tests
  - `f3b9306db5865b0c5bbf51c8cfb69f60eae92815` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ad5a7fbc9f3689da427f79473598d8b6a1a6bbae` — Merge latest development theme history before scoped feature push
  - `ae83560ded6069f17f7fa03b1ea52fc82d0bb210` — Merge latest Theme Editor Search settings without staging local Search work
  - `9692361be82586cd3a8dee58b0aea88416015b77` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `6c1fac90b19c3c937e460671ad5f6b7f1c759e1e` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `ae2cc621d67e6d37aae9ce7ca28974558de3ee99` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `07861e8a97ca0d59f2403a1cc2959ad6e4fa04a9` — Sync nine requested page implementations to theme-base dev
  - `e14a3461c8acf1316a1eae21457bd7374edf9dae` — Preserve latest development history without expanding page sync scope
  - `34b3536fa23d9601d814df342e7e44e41f8cdefc` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `20a91d5631a9ec2dbd1b0a268125a83ffe191ab3` — Finalize Search heading, empty states, defaults and validation
  - `0e956b59cc73adec3fc7ba0a632aef1de325467d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `9c4fbae5fd4ce787aaa8a1084fac7099086ccc7f` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `a56c338ee2e88b5f9ce470553cdb8af47141e523` — Merge completed Search and shared dependencies into base dev
  - `04b299c510a35926a7a6af75dcd36e06f24ea2fa` — Fix canonical padding labels and cart overlay test fixtures
  - `b888541dc68cb968dcb66c63ffb4673b280bd66b` — Merge baseline validation fixes into base dev
  - `d31881ede5b85827e422d77b7e0d95d1b3ef4423` — perf: prioritize responsive slideshow LCP and defer overlay styles
  - `655508074edc245b00e07a8915661141c6fa9aee` — Merge theme-base/dev performance updates into Spinel development
  - `c74a839c82d21d954f25335bb690285c5077595f` — fix: preserve overlay readiness and responsive slideshow artwork
  - `58edd486229ec95bb9d0f6f3d87533e588dc9898` — perf: defer quick overlay styles and right-size mobile hero images
  - `87b329a5a4a726cdc40bbb966afd30b31566e17d` — fix: stabilize home overlay header before first paint
  - `b4635c98132abd5e75afc2bc1eb73747c0ba1c97` — Merge origin/dev with local performance and CLS fixes
  - `2f42a2d21b79731e57a65cd882510007cac96c3c` — fix: stabilize announcement layout before section styles load
  - `8fc32b1ae8bcca5e01310d83aa6c5cdd50f6bab2` — fix: normalize collection heading size options and saved values
  - `3019ba2522a26941ac77ea9498f15993d375eb2f` — fix: align typography labels and thumbnail custom size
  - `d5886b9670c9231bc4291570ccaa80d78e236a95` — feat: add global button colors and weight, map heading Display to tag typography
  - `853a6a9ced1fd3609c15ca678a02150ea37a5482` — Merge branch 'dev' of https://github.com/Chieu2507/shopify-theme-base into dev
  - `2dad3d3d2634434c88affa3df1d4997cde4f374a` — fix(sections): collapse empty content and reuse list layout
  - `bedb4bd5745825c137bba98d56736d591fcb0042` — fix(sections): isolate scrolling text layout styles


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
