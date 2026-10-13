# Arche — Image text stacked bands preset and media

Date: 2026-10-13. Branch: `theme/arche-theme`.

Applied user-supplied `build-preset` and `store-content-media` skills, then implemented the custom layout after the user's follow-up request. Unrelated working-tree changes and homepage sections are preserved.

## Composition

- Replaced `editorial_1`, `editorial_2`, `editorial_3` in `templates/index.json` with one `image_text_stacked_bands` instance, at the same position after Press and before Item of the week.
- Three `image-text-stacked-band` blocks retain the reference headings and Shop our collection CTA, linked to all collections. Empty tag/body fields avoid the original generic sample copy.
- Updated the existing Image text stacked bands preset without renaming it. Preset resource selectors remain unset; the requested homepage instance binds the three uploaded images.
- Scheme 3; white copy; square images; heading Large (40px desktop, 32px mobile); gap 32/24px; vertical padding 96/56px; mobile autoplay disabled.

## Figma and media

Desktop node `46306:2135` (1920 × 2688), mobile `46339:2323` (375 × 1953), file `v6iKvP4OuW3y0A9bbxel5U`.

Figma MCP returned a View-seat call-limit error. Read the exact nodes through Figma Dev Mode in Chrome, including screenshots, CSS inspection and asset panels. No high-fidelity MCP code response was available; this is a preset/media mapping, not a verified pixel-perfect implementation.

Used the Figma source exports already present in Downloads: `source_r1.jpg` (cream polo), `source_466820207_18474185779058667_2979286789057142640_n.jpg` (blueberry shirt), and `Image (2).png` (square sunglasses export). Inspected all three against the Figma canvas. Prepared square AVIF files with Sharp (center-cover for the portrait shirt, matching Figma's square cover setting); decoded all outputs before uploading. Exact export geometry of the shirt crop was not independently obtained through MCP.

Uploaded once to confirmed store `layouthub-template-v2.myshopify.com`:

| Band | File | Shopify MediaImage ID |
| --- | --- | --- |
| 1 | arche-stacked-neutral-polo.avif | 46594976383275 |
| 2 | arche-stacked-blueberry-shirt.avif | 46594977136939 |
| 3 | arche-stacked-minimal-sunglasses.avif | 46594977431851 |

Local media, immutable source copies, hashes, CDN URLs and receipt: `.shopify/media/arche-stacked-bands/` (Git ignored).

## Initial preset verification

- Theme Check: 0 errors, 12 warnings across the current working tree.
- Setting IDs, select values, range bounds/steps and checkbox types: pass.
- Unrelated homepage section objects, non-preset schema, Liquid/CSS/JS implementation preservation: pass.
- `git diff --check`: pass.
- Preview desktop 1920 × 1080: all three images loaded, 575 × 575px; heading 40px, centered; this was before the custom layout follow-up.
- Preview mobile 375 × 1000: all three images loaded, 275 × 275px; heading 32px; this was before the custom layout follow-up.
- Theme Editor confirmed unpublished `Arche template (Minhle)` ID `192282820907`, one stacked bands section, three bands, square ratios, Large headings, configured padding and disabled Save. Existing preview watcher synchronized local configuration. No new watcher, explicit theme push, publication, Git commit or Git push.
- Proof images: `.shopify/media/arche-stacked-bands/desktop-proof.png`, `mobile-proof.png`.

## Custom layout follow-up — 2026-10-13

Owner asked to match the mobile sticky composition, keep each image and its copy moving together, remove controls that do not apply, and prefer functioning options in the preset. Replaced the old carousel/fade behavior with three real band wrappers. Each wrapper is sticky as a unit; JS measures sticky offsets from the full content height and sticky header, tracks viewport/content resize, and cleans up across Theme Editor lifecycle events. Selection in Theme Editor returns bands to normal flow for inspection.

Desktop uses a two-column grid, 1600px maximum content width, 768px square image, 640px text measure, left aligned. Mobile uses text then 343px square image, 48px media gap, 32px heading, and 56px section padding. Existing settings remain live for section width, image ratio and max width on both breakpoints, text size/color, heading size/tag/color, button style/icon/tab behavior, scheme and section padding; block gap options drive spacing within the text. CSS hardcodes only the missing composition behavior (column order, media gap and sticky band stacking). Removed unused mobile autoplay settings; dots were part of the old runtime and are no longer rendered.

Updated files: `sections/image-text-stacked-bands.liquid`, `blocks/image-text-stacked-band.liquid`, `assets/image-text-stacked-bands.js`, and the three-block `templates/index.json` instance. Uploaded media and template image bindings remain as listed above.

Follow-up preview at the current local mobile viewport confirms three text/image blocks, square images at 343px, heading at 32px, and the entire wrapper (copy and image) in sticky positioning while scrolling. Theme Check: 0 errors, 12 warnings in unrelated existing files. `node theme-base check-custom arche-theme` passes (135 files); `git diff --check` passes. No theme push, publication, Git commit or Git push.

## Remaining Figma gaps

The source was read from Figma Dev Mode in Chrome because the Figma MCP View-seat limit was reached. Browser preview was used for visual and scroll verification; no claim of pixel-perfect matching is made. Theme Editor save/reload after this custom layout update was not performed.

## Arche-specific Card stack refactor — 2026-10-13

Owner revised the implementation to remove the custom **Scrolling cards stack** section and customize only the reusable Card block. The homepage now uses the existing `scrolling-cards` section with three `scrolling-card` blocks. Their nested Group, Heading, Button and Image blocks retain the Figma order (content first, image second; vertical on mobile). Card color handling follows the repository's inherit-or-explicit-scheme pattern, and all three cards inherit the section colors.

`blocks/scrolling-card.liquid` owns the new `Stack transition` option (`Scale` or `Fade`) and defaults to `Scale`. The homepage preset selects `Fade` on all three cards. `assets/scrolling-cards.js` reads that card setting while preserving Scale as the fallback for all existing cards. The custom section file was removed. The prior Image text section, block and runtime remain removed. `templates/index.json` retains the three uploaded AVIFs and Figma copy under the existing section type; mobile sticky remains enabled.
