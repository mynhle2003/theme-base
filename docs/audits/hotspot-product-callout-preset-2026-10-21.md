# Hotspot: Product callout — Kinetra

Requested build-preset plus Icon + Eyebrow grouped as in Hero. Existing working-tree changes preserved. Sources: Figma yTXlAfT0miBGgRuuYM4OMp desktop 48205:19414 (1920 × 981), mobile 48249:14582 (375 × 402.25). MCP Ecombe returned quota exceeded; Primary repeatedly returned authentication accepted/retry without design context. Reference inspection used the existing Chrome Figma tab and visible Properties/canvas. No high-fidelity MCP code or exported assets were available.

Updated `sections/hotspot.liquid` existing Add section preset and `templates/index.json` → `kinetra_crafted`. Kept original translated name/category, placement/schema controls, existing image reference and template position. Restored the instance's original `disabled: true` after temporarily enabling it locally for preview. The pre-existing dev watcher synced local edits to development theme 192119800107; no explicit push, publish or Theme Editor Save was performed. Editor had an unrelated unsaved session and was only inspected.

Composition: static Header → horizontal Group (Icon, Eyebrow) → Heading; static Product callout → two content Hotspots. Group settings reused from Hero, centered, fit width, 8px gap. Hero's existing 8 × 8 square SVG reused with currentColor instead of white; Eyebrow built-in icon disabled to avoid duplication. Header bottom padding 48px desktop / 32px mobile. Section top padding remains 64px / 48px. Empty callout content padding set to zero, with scheme-1, eliminating the mobile empty color strip.

Visible reference hotspot center percentages (rounded to schema's 1% step): bra 54/40 desktop, 56/34 mobile; waistband 47/82 desktop, 44/72 mobile. Bra copy preserved. Waistband text is matching placeholder copy, not verified original Figma copy. These are reference-frame coordinates, not a claim of verified subject anchoring with the existing media crop.

## Existing height-option calibration

Figma media frames: desktop 1820 × 780; mobile 343 × 257.25. Existing `medium` selected in both preset and template. Fixed scale only is scoped under `.section-hotspot` in the section stylesheet; Adapt / Full screen, labels, defaults, shared runtime and other callout consumers unchanged.

| Option | Old desktop px | New desktop px | Old mobile px | New mobile px |
| --- | ---: | ---: | ---: | ---: |
| Extra small | 420 | 455 | 400 | 166 |
| Small | 560 | 607 | 480 | 199 |
| Medium | 720 | 780 | 620 | 257.25 |
| Large | 900 | 975 | 760 | 315 |
| Extra large | 1080 | 1170 | 900 | 373 |

Scale factors: desktop 780/720; mobile 257.25/620. Preserve this theme calibration during base updates, reviewing upstream mappings before reapplying. This is the build-preset height calibration exception, not a new setting or custom runtime.

## Verification and remaining gaps

- Theme Check: 0 errors, 7 existing warnings; target section/template have no diagnostics. Preset block allow-lists, setting IDs, select options and numeric ranges validated, including `@theme` child allowance. `git diff --check` passed.
- Existing local preview http://127.0.0.1:9300/. Chrome desktop rendered viewport 1920 (content 1905 with scrollbar), image 1805 × 780. In-app browser mobile viewport 375 (content 360 with scrollbar), image 328 × 257.25; no horizontal overflow. Icon is 8 × 8; both hotspot buttons render. Bra click desktop and waistband click mobile opened their respective text. Mobile empty content height verified zero after final setting update. Temporary viewport overrides reset.
- Existing image `shopify://shop_images/kinetra-crafted-with-care.avif`, natural rendered source 1638 × 1092, has different crop/subject scale from the reference. Desktop fixed-height center crop clips the top of the subject; mobile subject is smaller than Figma. Exact media match and anchor compensation remain unverified. No media was selected, uploaded or modified; store focal point was not read back or saved. Media setup/export is a separate follow-up under the skill boundary.
- Existing global Eyebrow typography creates a small header-height difference; globals were not changed from this single section. Existing hotspot visual/active dot geometry differs from Figma; no new CSS or runtime for hotspots was added.
- Full Theme Editor add/remove/duplicate/reload matrix not exercised; the template already has 25 sections. No Add section insertion or live configuration Save was performed.


## Follow-up completed — exact crops and focal point

Owner requested continuing and explicitly authorized authored waistband content based on item 1. Used `store-content-media` alongside build-preset. This checkpoint supersedes the previous crop/media/disabled blockers above.

Figma selected Image layer exports succeeded on disk despite browser download-event timeout. Desktop file `Image (18).png` is 1820 × 780; mobile `Image (20).png` is 343 × 258 (PNG raster rounding from 257.25px Figma height). Both are isolated original image exports, without dots/popups/UI. Inspected each and converted to true AVIF quality 90 without resizing/cropping. The 290 × 124 export-preview thumbnail was rejected. No generated substitute was used.

Shopify destination readback: layouthub-template-v2.myshopify.com. Uploaded new distinct Files rather than replacing the uncropped shared original:

- `kinetra-crafted-desktop-crop.avif`: MediaImage 46744491196715, 1820 × 780, READY, image/avif.
- `kinetra-crafted-mobile-crop.avif`: MediaImage 46744491786539, 343 × 258, READY, image/avif.

Both focal points explicitly set through Files UI and saved. Reloaded each file and inspected its rendered focal marker: `left: 50%; top: 50%;`. No API field or CSS override was fabricated. Preset and local homepage instance bind verified Shopify image-picker references to the desktop/mobile settings. Existing medium-height calibration retained. Authored second popup: STAY-PUT SUPPORT — “The high-rise waistband offers a secure, comfortable fit, helping you move freely through every stretch and workout.”

Existing preview watcher synced files to development theme 192119800107. Desktop viewport 1920: image media 1805 × 780 with scrollbar; runtime dot centers 54/40 and 47/82, object-position 50% 50%. Subject top is now visible and image matches the reference composition. Mobile viewport 375: image media 328 × 257.25 with scrollbar, correct mobile source 343 × 258 loaded, object-position 50% 50%, dot centers 56/34 and 44/72. Both anchors visually checked; popup 1 desktop and popup 2 mobile opened correctly. No horizontal overflow. Original 1% coordinate rounding, 0.75px mobile export-height rounding, theme dot styling and small inherited header typography differences remain accepted preset-only differences. Browser's stable scrollbar gutter removes 15px from available width.

Section is now enabled locally (`kinetra_crafted.disabled: false`) because the resource/copy blockers are resolved. No live-theme publication, explicit push, Theme Editor Save or commit. Shopify Files Save affected only these two new images. Temporary browser viewport reset. Preview screenshots: `/tmp/kinetra-hotspot-desktop-final.png`, `/tmp/kinetra-hotspot-mobile-final.png`.
