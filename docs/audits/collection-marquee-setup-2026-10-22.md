# Collection marquee setup — 2026-10-22

## Completed crop follow-up (supersedes the missing-media and preview gaps below)

All six slots now use verified800×400 AVIF crops from the exact Figma image layers. Both Jogger images were exported directly at4× from their desktop200×100 instances. The four mobile image exports retained their full120×60 image/background rectangles and original embedded raster plus crop matrices inside SVG, although the exported SVG viewport was clipped by the375px section. Restored only each image rectangle's full viewport for conversion; image/background geometry, source pixels and Figma crop transforms were retained. No canvas screenshot, redrawn asset or guessed crop was used. Conversion artifacts and a six-image contact sheet are under `output/collection-marquee/crops/`.

Shopify readback: all six files READY/statusREADY, MIME image/avif,800×400. Both Add section preset and homepage bind the same six verified file references. The earlier transparent Jogger original is superseded and no longer referenced by either composition; it was not deleted from Files.

Actual desktop content1920px: section617px, each row100px, every image200×100 and loaded from its corresponding new crop URL. Activated each desktop row to inspect both images. Actual mobile content375px (390px browser override including15px scrollbar): section321px, each row60px, six loaded images120×60, heading40px, document scrollWidth375px. Images retain the crop because both render sizes are2:1. Mobile appearance matches the supplied frame, including images partially visible at the row edges. The viewport override was reset after QA.

Evidence: `crops/desktop-1920.png`, `crops/mobile-375.png`, and `crops/contact-sheet.png` below `output/collection-marquee/`. Earlier desktop row captures are also retained.13 tests pass, Theme Check0 errors/9 unrelated warnings, preset/homepage parity and whitespace checks pass. Figma MCP now reports the View-seat call limit; source exports used the authorized read-only Chrome workflow. No runtime/markup/control changes, explicit theme push, publication, Theme Editor Save or Git commit.

Scope: requested setup-store/store-content-media and build-preset skills, Kinetra homepage Collection marquee only. Configuration and media only; no runtime, markup, controls, global typography or other sections changed in this follow-up.

Figma desktop `48190:17304` and mobile `48249:14526`, file `yTXlAfT0miBGgRuuYM4OMp`, inspected through authenticated Chrome. MCP kept returning an authentication retry request. Desktop source is1920×617; mobile375×321. Source screenshots and Properties confirm three rows, white background, headings and layout described in the previous QA record.

Preset and homepage now explicitly share section padding96/96 desktop and48/12 mobile, header gaps40/20, row gaps32/20, full width and scheme-1. Every row explicitly uses Heading font, Display size and image/heading gaps24/20. Existing collection handles were read back from the target store and reused with the requested heading overrides. Registered preset name/category and placement immediately after Hero are preserved.

Recovered the exact original Jogger white image from Downloads,736×1104, matched to Figma image hash and node48205:19464. Converted to real AVIF, uploaded once, then read back READY/statusREADY/image/avif and correct dimensions. Bound `shopify://shop_images/kinetra-collection-jogger-white.avif` to marquee-2/image-1 in both registered preset and homepage. Resource and missing-slot manifest: `collection-marquee-setup-2026-10-22.json`.

Desktop preview at1905px content width (1920px browser with scrollbar): section617px, rows100px, loaded image200×100, cover/50%50%. Image renders correctly from the verified source, but the Figma crop/gray backdrop differs from this transparent original with center crop. No unsupported CSS or image control was added. Five other images remain placeholders. Download/export UI did not produce files; direct source navigation returned ERR_BLOCKED_BY_CLIENT. No thumbnail or canvas screenshot was substituted for an image asset. Exact exported image layers are needed for full crop parity, including the recovered Jogger slot.

Mobile Theme Editor preview wrapper measures375px; its current storefront iframe is blank, so the latest mobile image rendering and321px section height are unverified. Saved Figma mobile evidence: `output/collection-marquee/setup-figma-mobile.png`; desktop output: `output/collection-marquee/setup-desktop.png`.

Validation: preset/homepage settings and static image-slot parity pass; configured block select/range controls pass;13 targeted tests pass; Theme Check0 errors/9 unrelated warnings; diff whitespace check passes. Existing development watcher reflected local changes. No explicit theme push, publication, Theme Editor Save, Git commit or push.

Motion clarification for the earlier QA record: the current implementation keeps the selected row moving during the80ms debounce. Only the confirmed final selection hides the old strip and activates the new one synchronously. Rapid return to the selected row preserves its phase and velocity.
