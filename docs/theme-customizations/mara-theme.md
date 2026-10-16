<!-- theme-base-sync-state: {"sha":"2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf"} -->
# Customization record: mara-theme

Theme branch: `theme/mara-theme`
Personal base at creation: `c07753a29c860f64e60567a2fc0d58deb3429c3b`
Theme update source: this repository's `main` branch
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record only theme-specific section/block implementation changes here: Liquid/HTML outside {% schema %}, plus CSS/JS assets and snippets rendered or loaded by those sections/blocks. Theme presets, schema-only changes, template JSON, and saved settings values are not custom code. During base updates, review overlapping implementation paths and describe the expected behavior before resolving. See [the customization policy](../theme-customization-policy.md).

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| _No customizations recorded yet_ | | | | |

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |

## Base sync history

### 2026-10-16 — Update from personal main

- Previous main commit: `c07753a29c860f64e60567a2fc0d58deb3429c3b`
- Updated through main commit: `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf`
- Main commits included: 1
- Included main commits:
  - `2cf6e5ab70eaffa97d43ce8f6f9fb658034713bf` — chore(base): update base with 1 upstream commits through 2a9a0caf
- Change summary:

```text
blocks/_bundle-product-list.liquid             | 189 +++++++-
 blocks/_bundle-summary.liquid                  | 509 +++++++++++++++++++---
 blocks/_collection-breadcrumb.liquid           |  45 +-
 blocks/_collection-columns.liquid              | 108 ++++-
 blocks/_collection-count.liquid                |  10 +-
 blocks/_collection-pagination.liquid           |  35 +-
 blocks/_collection-products.liquid             |  15 +-
 blocks/_collection-sort.liquid                 |  15 +-
 blocks/_collection-toolbar.liquid              | 106 ++++-
 blocks/_collections-page-card.liquid           | 297 ++++++++++++-
 blocks/_column.liquid                          |  98 ++++-
 blocks/_header-account.liquid                  |  70 ++-
 blocks/_header-cart.liquid                     |  30 +-
 blocks/_header-divider.liquid                  |  10 +-
 blocks/_header-localization.liquid             |  25 +-
 blocks/_header-logo.liquid                     |  10 +-
 blocks/_header-menu-toggle.liquid              |  15 +-
 blocks/_header-menu.liquid                     | 136 ++++--
 blocks/_header-search.liquid                   |  75 +++-
 blocks/_header-top.liquid                      |  47 +-
 blocks/_mega-menu-banners.liquid               | 226 +++++++++-
 blocks/_overlay-product-media.liquid           | 150 +++++--
 blocks/_product-collection-grid.liquid         |   4 +-
 blocks/_product-details.liquid                 | 149 +++++--
 blocks/_product-media.liquid                   | 105 ++++-
 blocks/_search-input.liquid                    |  70 ++-
 blocks/announcement-countdown-timer.liquid     | 276 ++++++++++--
 blocks/announcement-text.liquid                |  63 ++-
 blocks/blog-archive-list.liquid                |  32 +-
 blocks/blog-card-button.liquid                 |  25 +-
 blocks/blog-card-description.liquid            |  50 ++-
 blocks/blog-card-meta.liquid                   | 175 ++++++--
 blocks/blog-card-tag.liquid                    |  85 +++-
 blocks/blog-card-title.liquid                  |  90 +++-
 blocks/blog-card.liquid                        | 142 ++++--
 blocks/blog-grid.liquid                        |  53 ++-
 blocks/blog-list.liquid                        | 135 ++++--
 blocks/button-view-details.liquid              |  10 +-
 blocks/button.liquid                           |  45 +-
 blocks/buttons.liquid                          | 150 +++++--
 blocks/collection-card-button.liquid           |  45 +-
 blocks/collection-card-description.liquid      |  60 ++-
 blocks/collection-card-title.liquid            | 110 ++++-
 blocks/collection-card.liquid                  | 380 +++++++++++++++-
 blocks/collection-list-items.liquid            | 125 ++++--
 blocks/collection-tab.liquid                   |   4 +-
 blocks/collection-thumbnail.liquid             |  61 ++-
 blocks/collections-with-tabs-item.liquid       |  68 ++-
 blocks/comparison-table-column.liquid          |  62 ++-
 blocks/contact-field.liquid                    |  30 +-
 blocks/contact-form.liquid                     | 451 ++++++++++++++-----
 blocks/countdown-timer.liquid                  | 190 ++++++--
 blocks/discount-code.liquid                    | 161 ++++++-
 blocks/divider.liquid                          |  60 ++-
 blocks/editorial-text.liquid                   | 581 ++++++++++++++++++++++---
 blocks/email-signup.liquid                     |  90 +++-
 blocks/eyebrow.liquid                          |  40 +-
 blocks/faq_answer_text.liquid                  |   6 +-
 blocks/faq_category.liquid                     | 195 +++++++--
 blocks/first-card.liquid                       | 134 ++++--
 blocks/gallery-grid.liquid                     | 216 ++++++++-
 blocks/gallery-header-group.liquid             | 323 +++++++++++---
 blocks/gallery-item.liquid                     | 113 ++++-
 blocks/gallery-strip-item.liquid               |  38 +-
 blocks/gallery-strip-overlay-group.liquid      | 101 ++++-
 blocks/header.liquid                           | 124 ++++--
 blocks/heading.liquid                          | 100 ++++-
 blocks/icon.liquid                             | 175 ++++++--
 blocks/image-comparison.liquid                 | 190 ++++++--
 blocks/image-text-card-grid-item.liquid        |  32 +-
 blocks/image-text-stacked-band.liquid          |  84 +++-
 blocks/localization.liquid                     |  40 +-
 blocks/location-item.liquid                    | 145 +++++-
 blocks/location-list.liquid                    |  61 ++-
 blocks/logo.liquid                             |  20 +-
 blocks/menu.liquid                             | 110 ++++-
 blocks/policy-links.liquid                     |  30 +-
 blocks/popup.liquid                            |  16 +-
 blocks/press-item.liquid                       |  56 ++-
 blocks/press-quotes.liquid                     |   6 +-
 blocks/product-accordion.liquid                | 105 ++++-
 blocks/product-buy-accelerated-checkout.liquid |  21 +-
 blocks/product-buy-add-to-cart.liquid          |  32 +-
 blocks/product-buy-quantity.liquid             |  91 +++-
 blocks/product-callout-gallery.liquid          | 135 ++++--
 blocks/product-card.liquid                     |  10 +-
 blocks/product-description.liquid              |  50 ++-
 blocks/product-list-banner.liquid              |  14 +-
 blocks/product-pickup-availability.liquid      | 202 +++++++--
 blocks/product-price.liquid                    |  70 ++-
 blocks/product-recommendations.liquid          |  30 +-
 blocks/product-sticky-add-to-cart.liquid       |  56 ++-
 blocks/product-title.liquid                    |  85 +++-
 blocks/product-variant-picker.liquid           |  20 +-
 blocks/row.liquid                              |  36 +-
 blocks/scroll-to.liquid                        |  25 +-
 blocks/shop-the-look-products.liquid           | 106 ++++-
 blocks/social-links.liquid                     |  30 +-
 blocks/spacer.liquid                           |  20 +-
 blocks/tab-layout.liquid                       |  70 ++-
 blocks/tabs-view-all-button.liquid             |  52 ++-
 blocks/text.liquid                             |  80 +++-
 blocks/timeline-list.liquid                    |  20 +-
 blocks/view-all-button.liquid                  | 123 +++++-
 sections/blog-posts.liquid                     |  63 ++-
 sections/breadcrumbs.liquid                    |  61 ++-
 sections/bundle-builder.liquid                 | 199 +++++++--
 sections/cart-drawer.liquid                    |  34 +-
 sections/collection-list-thumbnails.liquid     | 567 +++++++++++++++++++++++-
 sections/collection-list.liquid                | 109 ++++-
 sections/collection-page-breadcrumb.liquid     | 202 ++++++++-
 sections/collection-tabs.liquid                | 170 ++++++--
 sections/collections-with-background.liquid    | 562 +++++++++++++++++++++++-
 sections/collections-with-tabs.liquid          | 446 ++++++++++++++++++-
 sections/contact-information.liquid            | 182 +++++++-
 sections/countdown.liquid                      | 177 ++++++--
 sections/custom-section.liquid                 |  98 ++++-
 sections/divider.liquid                        |  66 ++-
 sections/email-signup-dual-image.liquid        | 374 +++++++++++++---
 sections/email-signup-form.liquid              |  54 ++-
 sections/email-signup-single-image.liquid      |  74 +++-
 sections/faq-accordion.liquid                  | 385 ++++++++++++++--
 sections/faq-image-accordion.liquid            | 413 ++++++++++++++++--
 sections/featured-blog-posts.liquid            |  63 ++-
 sections/featured-collection-banner.liquid     |  43 +-
 sections/featured-collection.liquid            |  58 ++-
 sections/featured-product.liquid               |  39 +-
 sections/footer.liquid                         |  36 +-
 sections/gallery-carousel.liquid               | 359 +++++++++++++--
 sections/gallery-custom.liquid                 | 184 ++++++--
 sections/gallery-full-width-strip.liquid       | 234 ++++++++--
 sections/gallery-image-grid.liquid             | 284 ++++++++++--
 sections/header.liquid                         |  62 ++-
 sections/hotspot-full-width-carousel.liquid    | 204 +++++++--
 sections/hotspot.liquid                        |  44 +-
 sections/icon-text-cards.liquid                | 413 ++++++++++++++++--
 sections/icon-text-inline.liquid               | 124 +++++-
 sections/image-comparison-custom.liquid        | 104 ++++-
 sections/image-comparison-split-custom.liquid  | 192 ++++++--
 sections/image-text-card-grid.liquid           | 259 +++++++++--
 sections/image-text-split-layout.liquid        | 167 +++++--
 sections/image-text-stacked-bands.liquid       | 545 +++++++++++++++++++----
 sections/location-list.liquid                  | 266 +++++++++--
 sections/location-map.liquid                   | 286 ++++++++++--
 sections/page.liquid                           |   6 +-
 sections/password.liquid                       | 127 +++++-
 sections/press.liquid                          |  40 +-
 sections/product-information.liquid            |  44 +-
 sections/product.liquid                        |   6 +-
 sections/quick-add.liquid                      |  44 +-
 sections/quick-view.liquid                     |  44 +-
 sections/recently-viewed-card.liquid           |   6 +-
 sections/rich-text.liquid                      |  42 +-
 sections/scrolling-cards.liquid                | 149 ++++++-
 sections/search-overlay.liquid                 |  37 +-
 sections/shop-the-look-section.liquid          |  47 +-
 sections/slideshow.liquid                      | 500 +++++++++++++++++++--
 sections/testimonials-horizontal-custom.liquid |  59 ++-
 158 files changed, 16791 insertions(+), 2758 deletions(-)
```
