# Collection tabs preset — Virelle — 2026-10-19

Completed Shop all follow-up, 2026-10-20: Under $40 now has six published products after two user-authorized $35 demo additions. Generic Theme Block lookup was repaired. Shop all visibility and correct links passed all three tabs on desktop/mobile; see [current audit](virelle-shop-all-2026-10-20.md). Earlier missing-button/data notes below are historical.

Later implementation update: [Virelle Outline tabs](virelle-outline-tabs-2026-10-19.md) adds the user-requested Style option and applies it to this preset/instance, addressing inactive text outlines, style-specific tab gaps and the mobile scrolling row. Earlier gap statements below describe the previous state.

Later styling update: user authorized global settings and theme-specific product-card price CSS. See [card price and settings audit](virelle-card-price-style-2026-10-19.md); the earlier mobile title/margin/button-height/swatch/price gaps below are partly resolved by those local changes. Rendered verification is still pending.

Later catalog update: the user authorized setup-store work. All 10 homepage products and seven collections are now published; resource selectors in the local template/presets are populated. See [homepage catalog audit](virelle-homepage-catalog-2026-10-19.md) for current readback and remaining limits. The placeholder/catalog observations below describe the earlier preset-only pass.

Configured locally using build-preset and figma-design-to-code. Sources: Figma file `yTXlAfT0miBGgRuuYM4OMp`, desktop `48002:1687` (1920px wide), mobile `48096:20121` (375px wide). Both high-fidelity design contexts and screenshots inspected.

## Composition and ownership

Reuse `collection-tabs` with static `header` (one `eyebrow`), `tab-layout`, `tabs-view-all-button`, and three merchant-managed `collection-tab` blocks, each retaining its static `product-card`. Preserve preset name `t:general.collection_tabs` and category `t:general.collection`. Update the existing homepage instance `collection_tabs_ihC66t` without changing its placement or other sections. Section owns carousel layout and spacing, blocks own content, existing Theme Settings own shared typography and card appearance. No implementation changes or global settings changes.

| Design | Existing configuration |
| --- | --- |
| White background, wide container | scheme-1, full_width (retains global margins) |
| 96px desktop / 48px mobile vertical padding | Existing padding settings retained |
| Community Favorites above tabs | Centered header, eyebrow with square icon |
| Best Sellers / New Arrivals / Under $40 | Three existing tabs, heading font, xl size |
| Four desktop cards / one mobile card | Carousel, columns 4 / 1 |
| Product gap 12 / 8px | product_gap_desktop / product_gap_mobile |
| Content and bottom action gap 48 / 32px | gap_desktop / gap_mobile |
| No carousel arrows or pagination | Existing visibility settings disabled; pagination padding retained 48 / 24 |
| Shop all, filled black button | Existing tabs-view-all-button, primary, no icon; mobile visibility enabled |

Preset and homepage settings are synchronized. Existing empty resource selectors remain empty. No asset downloads, store content mutations, Theme Editor saves, explicit theme push/publish, commits or Git pushes performed. Existing preview watcher was reused, not started or reconfigured.

## Verification

- Native IAB preview at `http://127.0.0.1:9300/` inspected visually at its available desktop viewport (approximately 1265 × 712). Confirmed centered eyebrow, three large tabs, four placeholder cards and no pagination/arrows. This is a partial desktop layout check, not a full Figma-sized visual pass.
- Mobile Figma and runtime/CSS paths inspected; mobile rendered preview remains unverified because the available browser capabilities do not expose viewport resizing.
- Theme Check: exit 0, zero errors, six existing warnings (five ExcessiveSettingsCount; css-variables LiquidComplexity).
- Custom configuration validation passed: valid section/template JSON, existing setting IDs, select choices, range/step constraints, nested block settings, unique original preset name/category, synchronized settings, unchanged schema outside presets, unchanged implementation and unchanged unrelated homepage sections/order.
- `git diff --check`: passed.
- Shopify toolkit validator could not start: bundled `@shopify/theme-check-common` missing. Shopify CLI Theme Check completed successfully instead.

## Remaining gaps — unimplemented

1. Catalog/media: exact product imagery, titles, prices, variants and sold-out states are unset; placeholder cards render. Setup-store content work was not requested. Shop all requires the active selected collection to have `products_count > max_products` (5); prepare at least six Online Store products per tab when content work is authorized, then verify visibility on initialization and tab changes. No visibility condition was changed.
2. Tabs: Figma inactive labels are outlined; existing underline style uses filled muted labels and an active underline. There is no text-outline style setting. Existing navigation wraps on mobile instead of the Figma single scrolling row.
3. Tab spacing: requested gap controls are set to 40 / 20px but the runtime navigation uses global grid-gap multipliers instead of these controls. No CSS patch made.
4. Header spacing: Figma eyebrow-to-tabs gap is 16 / 12px, separate from 48 / 32px tabs-to-products. Existing centered section uses one flex gap for all siblings, so eyebrow-to-tabs also renders 48 / 32px. Header internal gap settings cannot change spacing to its sibling tab-layout.
5. Mobile card width: Figma shows a 304px card plus next-card preview. Collection tabs does not pass the mobile-preview parameter to its existing grid renderer and has no mobile-preview setting; one-column mobile cards fill available content width instead.
6. Shared styling: existing H2 is 48 / 30px versus Figma 50 / 30px; global desktop margin is 48px versus Figma 50px. Eyebrow uses the current accent font/tracking and a hollow square versus Figma Roboto Condensed Medium, 2px tracking and solid square. Existing global card swatches, card gaps, title size/weight and quick-add style differ from Figma. Mobile button height is 45px versus 44px. These globals were retained to avoid changing other sections based on this preset alone.
7. Product interactions, keyboard tab switching, Theme Editor lifecycle and resource-backed Shop all behavior were not exercised in this pass. No full visual-fidelity claim is made.

Before-edit snapshots: `/tmp/virelle-collection-tabs-before/collection-tabs.liquid` and `/tmp/virelle-collection-tabs-before/index.json`. All pre-existing worktree changes retained.
