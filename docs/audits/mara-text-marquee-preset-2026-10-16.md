# Text marquee (custom) — Mara configuration and settings

Figma desktop `bH9A5237I07NWt19Cua9gL / 47015:20745` (1920×272); mobile `47228:13998` (375×160).

The initial build-preset composition is retained in `Custom section`, with one registered `Text marquee (custom)` preset and homepage instance `scrolling_values`. User subsequently authorized image updates and Mara-specific settings customization on 2026-10-16. The old standalone implementation remains available to existing instances, without a duplicate named preset.

## Final settings

- Section width: new opt-in full width without padding. Existing width modes and global Theme Settings are unchanged.
- Section vertical padding: 64px desktop / 48px mobile.
- Text: Urbanist Regular, 44px / 28px, uppercase, line-height 1.2, fixed 2px letter spacing, custom #B3B3B3 at 100% opacity.
- Text horizontal padding: 16px / 8px. Marquee gap: 16px / 12px.
- Image slots: square 144px / 64px. Image width ranges change from min 50 / max 400 / step 5 to min 4 / max 400 / step 4. This gives `(400 - 4) / 4 + 1 = 100` selectable values. Both requested values and desktop default 300 lie on the new step lattice. Mobile default changes from 50 to 52 to remain aligned; the requested preset explicitly sets 64. All other explicit marquee image widths in current presets are 120/80 and remain valid.
- Optional image crop controls retain Figma source scale and offsets: beige 148.29%, -24.14%, -64.23%; brown 129.54%, -14.77%, -51.08%; green 141.05%, -20.52%, -51.08%. These are numeric inputs rather than range sliders, retaining decimal crop precision without creating excessive slider steps. Liquid bounds scale to 1–400% and offsets to ±200%.

Shopify range reference: https://shopify.dev/docs/storefronts/themes/architecture/settings/input-settings#range . Values must lie on the setting's step lattice; out-of-step typed values are rounded by the editor. Padding controls retain 0–100 / step 1 (101 selectable values).

## Media

Verified store: `layouthub-template-v2.myshopify.com`. Existing editorial AVIFs were inspected; they use pre-cropped 1120×800 canvases, while Figma uses original square sources. Uploaded three square-source AVIFs, preserving transparency, and bound verified Shopify image-picker references locally. Admin readback confirms all three MediaImages READY. Browser readback confirms all three load successfully in their configured slots.

Source/CDN hashes, IDs and URLs: `mara-text-marquee-media-2026-10-16.json`. New names are `mara-marquee-timeless.avif`, `mara-marquee-effortless.avif`, `mara-marquee-quiet.avif`. Existing editorial files are unchanged; no products or collections were modified.

## Verification

- PASS: schema JSON, configured setting IDs/options, nested block allow-lists, preset uniqueness, range/default/preset step alignment.
- PASS: Shopify Theme Check: zero errors, six existing warnings elsewhere.
- PASS: git diff --check.
- PASS: actual existing development preview in Chrome at 1920px and 375px. Section measures 1920×272 and 375×160; computed text is 44px/28px, tracking 2px, RGB 179/179/179. Three original images load; crop geometry and visual ordering match Figma. Screenshots: `output/text-marquee/desktop-actual.png`, `output/text-marquee/mobile-actual.png`.
- Shopify AI Toolkit full-theme validator was attempted but unavailable because its bundled `@shopify/theme-check-common` dependency is missing; installed Shopify CLI Theme Check completed successfully instead.
- Existing reduced-motion behavior remains a static wrapping layout. No runtime JavaScript was changed. Full add/remove/duplicate/reorder Theme Editor lifecycle was not exercised.
- The already-running development watcher synchronized changed local files to development theme #192119800107. An initial dependency-order upload error cleared after schema/template synchronization; actual preview returned 200. No separate theme push, publication, commit or Git push was performed, and no Theme Editor configuration was saved.
