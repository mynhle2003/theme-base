# Kinetra settings rebuild — 2026-10-27

Scope: Novaire Theme Settings and block typography now use the Kinetra contract. Theme identity remains Novaire.

## Preset migration

- Retained compatible Novaire values and content/composition in the current configuration and Spinel preset.
- Migrated button size from `button_font_size` to `button_font_size_px` and price size from `product_card_price_size_desktop` to `product_card_price_size`.
- Remapped stored heading visual roles where necessary for the Kinetra scale. Heading HTML tags remain independent.
- New settings use Kinetra saved preset values, then schema defaults when no saved value exists.
- Removed obsolete controls, saved values and bindings, including tablet heading controls, mobile-only price/title controls, custom product-price controls, individual secondary/tertiary font controls and custom overlay title size.
- Preserved header geometry, section composition, animation controls and tab JavaScript lifecycle.

## Validation

- Global schema matches Kinetra exactly except theme identity.
- Typography schemas match across localization, marquee heading, heading, quantity, product price, variant picker and tab layout.
- Current and named global presets contain valid range/select values.
- Schema locale keys resolve.
- Theme Check: 0 errors, 7 warnings (setting-count recommendations, unused css-token-value snippet, complexity of the reference CSS variable mapping).
- Existing theme-settings tests: 5/5 pass.
- CSS render smoke check passes; all 7 heading sizes preserve semantic h3; fluid sizes render for increasing, equal and reverse scales.
- Existing heading-size-sync suite: 3 pass, 3 fail on legacy aliases. Reproduced the same failures in the pre-change fixture.
- Toolkit validator unavailable: bundled @shopify/theme-check-common dependency missing. Installed Shopify CLI Theme Check used for validation.
- No live browser or Theme Editor verification performed. No store push or publication performed.

## Changed files

- `config/settings_schema.json`
- `snippets/css-variables.liquid`
- `assets/critical.css`
- `blocks/_header-localization.liquid`
- `blocks/_marquee-heading.liquid`
- `blocks/heading.liquid`
- `blocks/product-buy-quantity.liquid`
- `blocks/product-price.liquid`
- `blocks/product-variant-picker.liquid`
- `blocks/tab-layout.liquid`
- `config/settings_data.json`
- `templates/page.about-us.json`
- `templates/cart.json`
- `templates/page.contact.json`
- `templates/page.faqs.json`
- `templates/article.json`
- `templates/product.json`
- `templates/index.spinel-sync.json`
- `templates/index.json`
- `templates/list-collections.json`
- `sections/overlay-group.json`
- `sections/footer-group.json`
- `locales/en.default.schema.json`
- `snippets/typography-token.liquid`
- `snippets/overlay-heading-size.liquid`
- `snippets/fluid-type-size.liquid`
- `snippets/swatch.liquid`
- `sections/cart-drawer.liquid`
- `templates/collection.json`
- `templates/blog.json`
- `sections/featured-product.liquid`
- `assets/product-information.css`
- `snippets/localization-styles.liquid`
- `assets/component-overlay.css`
- `assets/section-collection.css`
