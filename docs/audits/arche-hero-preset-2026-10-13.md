# Arche Hero preset — Figma height calibration

Date: 2026-10-13. Branch: `theme/arche-theme`.

## Figma evidence

- File `v6iKvP4OuW3y0A9bbxel5U`, desktop Hero `46306:2276`: frame 1920 × 700px; background media 1920 × 900px.
- Same file, mobile Hero `46339:2457`: frame 375 × 500px; background media 375 × 500px.
- The Figma MCP View seat had reached its call limit. Read the supplied nodes in the existing Figma Dev Mode browser tab. Inspect showed full-width fixed sizing, centered alignment, a 10% black overlay, and 64px desktop / 56px mobile vertical padding. The mobile frame uses a column layout with space-between distribution.
- Existing Hero preset and homepage `materials_hero` instance already contain the reference heading, description, CTA, centered content, image overlay, and vertical spacer composition. Their media selections were preserved.

## Calibration and configuration

The existing Hero control offers named height options and uses 72rem desktop Medium and 62rem mobile Medium. Following the preset skill, scale each fixed height in its viewport by `target Medium / old Medium`, keeping Medium exact and preserving ascending order. The theme's 1rem = 10px output maps these targets to 70rem desktop and 50rem mobile.

| Viewport option | Previous | Calibrated |
| --- | ---: | ---: |
| Desktop Extra small | 42rem | 40.8rem |
| Desktop Small | 56rem | 54.4rem |
| Desktop Medium | 72rem | 70rem |
| Desktop Large | 90rem | 87.5rem |
| Desktop Extra large | 108rem | 105rem |
| Mobile Extra small | 40rem | 32rem |
| Mobile Small | 48rem | 38.7rem |
| Mobile Medium | 62rem | 50rem |
| Mobile Large | 76rem | 61.3rem |
| Mobile Extra large | 90rem | 72.6rem |

Adapt and Full screen remain unchanged. The Hero section preset and the homepage `materials_hero` instance both select Medium at desktop and mobile. Only the existing height mapping in `snippets/hero-styles.liquid` changed; no section/block implementation, settings, IDs, select options, media references or content were added or removed. Height calibration is theme configuration under the preset skill and is documented here separately from the customization table.

## Review status and limits

- Figma frame dimensions, layout settings and copy were read in Dev Mode. The MCP screenshot/context calls could not run because the Figma View seat limit was reached.
- Theme Check passed with 0 errors and 12 existing warnings in unrelated files. The local preview at `127.0.0.1:9300` was reviewed at desktop width and showed the existing Hero image, overlay, headline, description and CTA. A 375px storefront viewport was not available through the current preview browser surface; the supplied mobile Figma frame was inspected, but mobile storefront rendering is not claimed as verified.
- The existing spacer composition approximates the Figma's vertical `space-between` distribution. It may expand the section past its minimum height when content requires it; the existing Hero controls do not expose independent top/bottom content slots.
- No new image or video was selected or fetched. The current homepage instance's existing image binding was left unchanged.

## Background and content fix — 2026-10-13

Build plan: existing content Hero in the index/page JSON surface; section owns media placement and content columns, blocks retain their typography and editor controls. Keep image/video context supplied by section settings, current blocks/order, schemes, blur 0, parallax runtime and responsive stack modes. Correct sizing in the existing shared stylesheet, then compare media/content geometry in desktop/mobile preview and run Theme Check.

Width follow-up: the owner requested the existing section-width control to offer `full_width_no_padding`, using the shared `t:options.section_width.full_width_no_padding` label. Plan/ownership: section owns this option and its no-inline-padding modifier; keep existing page/full values and full media surface, preserve block padding and section vertical spacing, apply zero horizontal container padding across classic/stack and desktop/mobile. The Hero preset and homepage `materials_hero` both select the new value. Classic full-width padding controls stay hidden for both full modes; stack retains its vertical content padding control. Recorded `sections/hero.liquid` and its shared stylesheet implementation in the customization table.

Before the fix, desktop Hero was 1905px wide but its content grid expanded to 4756px because the marquee's intrinsic width set the automatic column minimum. The CTA centered at x=2327px, outside the viewport. The picture image retained its intrinsic aspect height (893px instead of the 700px surface), rather than filling the background slot.

`snippets/hero-styles.liquid` now gives the default surface a `minmax(0, 1fr)` column and its content container `min-width: 0`. Hero picture images and video elements use absolute inset 0, width/height 100%, and object-fit cover. Existing stack column/row overrides and mobile video visibility remain in place. The implementation fix is recorded in the existing customization table entry separately from height calibration.

Preview measurements after the fix: desktop media, image, container and surface all 1905 × 700px; content width 1809px, white CTA x=902px, inside the Hero. At the 375px mobile viewport (360px document width), media, image, container and surface all measure 360 × 500px; content is 328px wide, white CTA x=129px. The description and CTA remain within the surface, and Group background is transparent with blur 0. Video shares the corrected sizing rules; no selected background video was available to verify playback. Theme Editor lifecycle was not exercised for this CSS fix.
