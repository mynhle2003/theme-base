# Essen performance optimization — 2026-10-11

Branch: `theme/essen-theme`, separate checkout at `.shopify/essen-performance`.
The primary Elara checkout and its running preview remain unchanged.

## Changes

- Slideshow progress uses CSS animations instead of inherited custom-property
  writes each frame. The slide timer runs at 10 Hz and starts after page load.
  Preserve Essen's hover, keyboard `:focus-visible`, touch, hidden-tab, offscreen
  and unload behavior. All three pagination styles support reduced motion.
- Batch block-animation visibility reads before splitting words or writing
  classes, reducing repeated layout work at startup.
- Move the existing overlay pagination geometry unchanged from deferred Swiper
  CSS into critical CSS, preserving its initial position at both breakpoints.
- Preserve the button role of product gallery thumbnails when Swiper initializes.
- Update slideshow image tests to Essen's existing height contract
  457/629/800/971/1171 px, including source-resolution limits, and make the gallery
  VM fixture import stripping accept Windows CRLF.

No settings, product checkout visibility, image choices, template composition or
saved theme geometry are changed. Existing Essen runtime deferral stays intact.

## Validation

28 scoped tests pass: timer/pause/unload/load behavior, browser CSS progress and
reduced motion, block animation startup, responsive slideshow image/crop/preload
parity, product controls, gallery pagination and overlay module loading.
Slideshow schema JSON parses and `git diff --check` passes.

The branch-wide `check-custom essen-theme` check reports historical section/block
ledger omissions outside this change. All implementation files changed here are
listed in the performance follow-up of the Essen customization record.

Historical preview `192119800107` on `layouthub-template-v2.myshopify.com` was
checked read-only: assets use theme t/24, Essen hero and Essence product content
are present, and Elara hero content is absent. Shopify CLI currently requires
renewed authentication. Upload, Theme Check and storefront verification of the
new code remain pending; no after score is claimed before those steps.

Baseline HTTPS mobile Lighthouse 12.8.2: Performance 52, Accessibility 93,
Best Practices 75, SEO 85. The report is stored locally in ignored
`.shopify/essen-before-mobile.report.html`; the only run warning is the preview
URL redirect. This measures the existing remote theme before these changes.

Per the owner's delivery request, test files remain local and are excluded from
the optimization commit. Their validation results above refer to the local
checkout. No live theme was published.
