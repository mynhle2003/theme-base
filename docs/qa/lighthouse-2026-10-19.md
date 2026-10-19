# Zevra preview Lighthouse — 2026-10-19

Target: `layouthub-template-v2.myshopify.com`, unpublished theme `192529006891` (Zevra template (Minhle)).

Lighthouse was run in isolated headless Chrome sessions authenticated to the storefront. Preview redirects and Shopify preview-bar overhead remain included. Desktop uses a 1350 × 940 viewport, 40 ms RTT, 10 Mbps throughput, and 1× CPU; mobile uses Lighthouse defaults. These are lab measurements, not field Core Web Vitals.

| Before | Mobile | Desktop |
| --- | --- | --- |
| Performance | 92 | 80 |
| Accessibility | 94 | 94 |
| Best Practices | 73 | 73 |
| SEO | 92 | 92 |
| FCP | 1.8 s | 0.5 s |
| LCP | 2.8 s | 3.0 s |
| TBT | 70 ms | 90 ms |
| CLS | 0 | 0 |
| Speed Index | 4.5 s | 1.9 s |

Reports: `output/lighthouse-2026-10-19/before-mobile.html` and `before-desktop.html`.

## Changes prepared

- `snippets/image.liquid`: mobile source candidates now include width descriptors and matching sizes; comma-separated widths work with or without spaces. Loading and fetch priority are explicit optional inputs.
- `snippets/media-background.liquid`: forwards those loading inputs.
- `blocks/image-card.liquid`: equal horizontal fill cards advertise their share of desktop viewport width rather than each advertising the full viewport. The first template section loads eagerly, with high fetch priority for its first card. Later image-card sections load lazily.
- `snippets/product-card-image.liquid`: explicit lazy loading after the first template section, preserving eager first-section images.
- `snippets/collection-card-render.liquid`: preserves parent loading decisions and defaults later-section media to lazy, including callers without sizes.

Before desktop downloaded both hero images at width 1600 (339,667 and 358,287 transfer bytes) although their frames occupy half the viewport. Before mobile selected width 480 because the mobile candidates lacked width descriptors. Correct descriptors also restore appropriate image sharpness at higher device pixel ratios; this is not claimed as a mobile byte reduction.

## Validation

- Scoped render/regression tests: 14/14 passing.
- Full suite: 276 passing, 23 failing, 3 skipped. Clean HEAD comparison: 272 passing, the same 23 failures, 3 skipped. No additional failing test names.
- Full Shopify Theme Check: 0 errors, 7 existing warnings. No schema changes.
- `git diff --check`: passes.
- Toolkit scoped validator unavailable: bundled `@shopify/theme-check-common` is missing. Installed Shopify Theme Check completed instead.

## Store operation ledger

- Read: theme listing confirms target role `unpublished`, matching name and ID.
- Read: authenticated preview HTML confirms `Shopify.theme.id` = `192529006891`.
- Target draft upload: user selected local-only changes. No target upload executed in this task.
- No after score is claimed until target upload and a fresh Lighthouse run.

Remaining warnings include Shopify preview iframe title/caching, third-party Shopify cookies, missing configured favicon, and marquee text contrast. These are outside the image-loading patch.
