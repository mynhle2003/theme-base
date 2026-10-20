# Featured collection: Banner preset — 2026-10-19

Sources: Figma `yTXlAfT0miBGgRuuYM4OMp`, desktop `48002:1862`, mobile `48096:26009`. Both design contexts and screenshots inspected with figma-design-to-code. Configuration follows build-preset.

Scope confirmed by the user: homepage only; preserve `templates/collection.json`. `sections/collection-banner.liquid` already matches HEAD, including its original Collection banner preset, so no rollback was necessary. The homepage already used `featured-collection-banner`; update its existing `virelle_motion_365` instance without adding a duplicate or changing order. Keep the single original Add section preset name/category, dynamic header/banner/product-list roles, and nested static `product-card` ID.

## Configuration

| Figma region | Existing controls |
| --- | --- |
| Wide white container | `full_width`, scheme-1; existing global margins retained |
| Padding 96 desktop / 48 mobile | Existing section padding and mobile override |
| Centered Latest collection / The Motion 365 | Header center, internal gap 8, eyebrow square icon, H2 xl |
| Header-to-row gap 48 / 32 | Section gap 12 plus header bottom padding 36 / 20 |
| Equal banner/product columns, gap 12 | Existing section desktop flex layout |
| Banner 600:700 | Custom ratio 6:7 on both devices |
| Bottom-center banner copy | Existing position controls, padding 40px vertical / 32px horizontal, gap 16 |
| Built to Move. Made to Last. | H3 lg, no forced line break |
| Explore This Drop | Tertiary button, existing arrow_up_right at 16px |
| Six desktop products in two columns | max_products 6, horizontal gap 12, row gap 40 |
| Mobile swipe under banner | One column, swipe enabled, gap 8 |

Only the existing preset and homepage configuration changed. No implementation, schema definitions, global Theme Settings, other homepage instances, collection template, or Collection banner source edits. Existing empty image, collection and link selectors remain empty; no content/media setup was requested. No asset downloads, store-content writes, Theme Editor saves, explicit theme push/publication, commits or Git pushes. The already-running preview watcher was reused.

## Verification

- Local recursive checks passed for setting IDs, options, numeric ranges/steps, child allow-lists, static card and preset/instance synchronization. Implementation and schema outside presets unchanged; other homepage instances/order preserved against before-edit snapshots.
- Shopify Theme Check: exit 0, zero errors, six existing warnings outside the changed files. Toolkit validator could not start because its bundled `@shopify/theme-check-common` dependency is missing.
- Scoped `git diff --check` passed. Whole-worktree check also reported an unrelated trailing blank line in `assets/critical.css`; left untouched.
- Existing localhost preview inspected at requested 1920px desktop and 375px mobile viewport overrides. Browser scrollbar consumes 15px of content width: actual content widths were 1905/360px. Desktop columns measured 898.5px each, 12px apart; six cards formed two columns/three rows with 12px horizontal and 40px row gaps. Banner measured 898.5 × 1048.25, exactly 6:7. H2 rendered 48px, section padding 96px.
- Mobile banner measured 328 × 382.656, exactly 6:7, above the product carousel with 12px gap. H2/H3 rendered 30/22px, section padding 48px; no horizontal document overflow. Native drag advanced the active slide from 1/6 to 2/6. Viewport override reset after testing.

## Remaining fidelity gaps

1. Banner image, collection membership, product imagery/copy/prices/swatches/badges and CTA destination remain unselected; preview uses placeholders and the CTA has no destination. Original imagery and crop cannot be visually verified until content is configured.
2. Mobile Figma cards are 244px wide with the next card visible. The existing product-list-banner exposes only integer column count and does not expose the grid renderer's next-slide preview control. Current one-column cards fill the available width. No runtime/schema workaround added.
3. Global desktop margins are 48px versus Figma 50px. H2 desktop uses existing 48px versus Figma 50px. Header max width uses nearest existing 760px step versus Figma 768px. Shared eyebrow font/tracking and hollow square, button casing/typography and arrow geometry, and product-card styling differ from Figma. Global settings and icon implementation were preserved.
4. Existing desktop banner sticky behavior remains. Resource-backed interactions and the full Theme Editor add/duplicate/reorder lifecycle were not exercised. This is a configuration match with documented gaps, not a complete visual-fidelity pass.

Before-edit snapshots: `/tmp/virelle-featured-banner-before/featured-collection-banner.liquid` and `/tmp/virelle-featured-banner-before/index.json`.

## Requested media upload follow-up

The user explicitly requested the setup-store image upload workflow. Shopify store identity verified as `layouthub-template-v2.myshopify.com`; exact-filename audit returned no existing file before upload. Figma read-only inspection confirmed identical original image hash and crop transform on desktop `48002:1867` and mobile `48096:26014`: `[[0.8674371242523193,0,0.04661845788359642],[0,0.8094103336334229,0.03818722814321518]]`. The original source was cropped to that verified image window and encoded to AVIF at 1200 × 1400; the existing section gradient remains separate.

Uploaded `virelle-motion-365-banner.avif`, MediaImage `46714399752491`. Independent readback confirmed READY, MIME `image/avif`, dimensions 1200 × 1400, permanent CDN URL and alt text. Local section preset and homepage banner now both reference `shopify://shop_images/virelle-motion-365-banner.avif` for desktop/mobile. Receipt: `output/featured-collection-banner/media-receipt.json`. The store-setup manifest is updated. This supersedes the banner-image portion of gap 1 above; product resources and the CTA destination remain unselected.

Focal point was not explicitly changed; upload default retained. Browser use was disabled, so the uploaded image's final storefront appearance has not been visually verified. No theme configuration was saved via Admin/API/Theme Editor, and no explicit push/publish was performed; an existing development watcher may synchronize local files.
