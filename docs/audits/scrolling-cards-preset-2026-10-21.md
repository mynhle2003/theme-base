# Kinetra Scrolling cards — 2026-10-21

## Scope and contract

Owner request: replace the three Image text split layout instances in the homepage with one Scrolling cards, add options similar to Arche, then build its preset against the supplied Figma desktop/mobile frames. Local implementation and composition only; no explicit theme push, publication or Theme Editor save performed by this task. An existing owner preview was used read-only.

Content section in `templates/index.json`; no product context. Section owns container, scheme, card gaps, stack effect and mobile sticky. Card owns surface, internal gap, stretch and mobile order; existing Group/Image/Header/Eyebrow/Heading/Text own content. Keep one section at the original first-row position, three cards in Empower → Inspire → Belong order, and an empty static header. Keep block editor attributes, ordinary flow without JS, reduced motion and oversized content; suspend effects for keyboard focus/editor selection. Reinitialize/clean up on section load/unload and selection changes.

## Evidence and preset mapping

Figma MCP repeatedly returned authentication requested/accepted without design data. Owner explicitly authorized Computer Use fallback. Read both provided nodes through CUA/Chrome in the existing beae.com browser (inventory identifies minhle@beae.com). No Figma edits or asset downloads. Existing original Shopify images are retained.

| Evidence | Mapping |
| --- | --- |
| Desktop node `48190:16766`, screenshot 1920 × 2581.71; Container 1 `48190:16767`, 860.57px tall, padding token24 top/bottom | Three image/text cards; section padding96 top/bottom, inter-card gap192, no card padding |
| Desktop Content `48190:16768`, horizontal, gap token10, height668.57; Wrapper `48190:16771`, width780, height668.57, padding token10 top/bottom and16 left | Gap40; equal columns; 7:6 images; content top/bottom40 and left64; stretch; first group space-between, other groups bottom |
| Existing container adds50px padding each side | Custom outer width1700 yields1600px content at desktop; no global settings changed |
| Mobile node `48249:15570`, 375 × 1631 screenshot; text precedes each image | Reverse order on mobile, gap24, sticky disabled |
| Mobile Container 1 `48249:15571`, 587px, top token12; Content `48249:15572`, 539px, gap token6 | Section top48 and mobile card gap48; inner gap24; remove desktop content padding |
| Mobile Container 2 `48249:15583`, 510px, top token12; Container 3 `48249:15590`, 534px, top/bottom token12 | Section bottom48; third card retains its own copy/image |
| Arche local Scrolling cards | Reuse Fade/Scale options and module initialization pattern; keep Kinetra colors/content/media; guard unreadable oversized cards and focus/editor states |

`kinetra_empower`, `kinetra_inspire`, `kinetra_belong` are replaced by `kinetra_scrolling_cards`. All three image references, alt text and paragraph strings are retained. The heading’s trailing period was removed to match the exact Figma copy. Unrelated section order is identical. Concurrent Hero edits were observed and preserved. Original section implementation/preset is not removed because other compositions may still use it. Scrolling cards keeps its original Add section name and Media category, with one current preset matching the template.

## Validation

- Recursive schema IDs, select values, ranges/steps and allowed nested block types: PASS for template and preset.
- Three original Shopify image references and unrelated order: PASS.
- `node --test tests/scrolling-cards.test.cjs`: 5/5 PASS. Covers Fade/Scale, normal mobile/reduced-motion/oversized flow, focus/editor suspension, resize/breakpoints, listener/observer cleanup, repeat initialization and instance isolation.
- `node --check assets/scrolling-cards.js`, `git diff --check`: PASS.
- Shopify Theme Check: 402 files, 0 errors, 8 warnings in existing unrelated files.
- AI Toolkit scoped validator attempted; unavailable because its bundled `@shopify/theme-check-common` dependency is missing. CLI Theme Check used successfully.
- Shared section-content suite: 7/8 pass; existing Featured collection actions fixture fails in an unchanged section (`tests/section-content.test.cjs:100`). No out-of-scope repair.
- Existing local preview9300: new section and all3 original images render; Fade reaches successive cards; image natural widths1310/1920/960. Initial desktop measurement found container padding and unequal padded columns; corrected with outer width1700 and equal flex bases.

## Remaining visual/editor checks

CUA viewport changes timed out in both Chrome and the in-app browser, then Chrome native control also timed out. Final 1920/375 viewport comparison after the column correction and manual Add section/duplicate/reorder/save/reload could not be completed. Desktop/mobile references were inspected successfully; do not claim pixel-perfect validation or full Theme Editor QA from the local/runtime checks. No store resources were changed, and no screenshot or Figma asset was substituted for implementation media.


## Follow-up visual QA — 2026-10-21

Owner asked to continue. Fresh Chrome tabs restored browser access; the earlier viewport timeout is no longer a blocker for storefront checks.

- Desktop at CSS viewport1920 ×1080: content1600px, image/copy columns780px each, card668.56px, section2581.6875px (Figma2581.71px). Sticky active and Fade progression observed across the three cards. First-card screenshot: `/tmp/kinetra-scrolling-desktop.png`.
- Mobile at CSS375 (360px layout after the desktop scrollbar): all3 cards use column-reverse, relative position, opacity1, and no horizontal overflow. Images328 ×281.14. Also checked CSS390 (375px layout, 343px inner content): images343 ×294, image/text gaps24, card gaps48, text heights144/120 in the supporting cards. Screenshot: `/tmp/kinetra-scrolling-mobile.png`.
- Figma heading node48249:15579: Roboto Condensed700, line-height120%, tracking−0.6px, 343 ×36px, text “Empower. Inspire. Belong”. Text node48249:15580: Roboto400,16px,150%, tracking0.1px,343 ×144px. Removed the extra final period and set the mobile eyebrow/heading gap to4 in both template and Add section preset.
- Remaining comparison limit: desktop emulation reserves15px for a scrollbar. At CSS390/content375 the existing fluid heading becomes30.387px, making its full text about346px and causing two lines in343px. The Figma mobile target uses30px with343px available. No global typography or shared heading implementation was changed to compensate for desktop scrollbar emulation. A real mobile viewport with overlay scrollbars remains unverified; do not claim exact mobile line wrapping.
- A separate read-only Theme Editor tab for theme192119800107 repeatedly remains at95% loading with an about:blank embedded surface, including after one reload. Setting UI/add/duplicate/reorder/save/reload manual QA remains unavailable. No Save or composition mutations were performed in that tab.
- Runtime regression tests remain5/5 PASS and template/preset settings are synchronized. Browser viewport overrides reset during cleanup.


## Hero SVG eyebrow follow-up — 2026-10-21

Owner requested using SVG icons like Hero. The Together eyebrow now uses the existing Hero composition: horizontal fit-width/fit-height Group, centered cross-axis, gap8 desktop/mobile, Icon source Custom with the exact Hero8×8 white-filled square SVG and zero padding, followed by the original Eyebrow with show_icon=false. Updated only the Scrolling cards homepage subtree and its registered preset; Hero itself and shared renderers are unchanged.

Live preview readback:0 built-in eyebrow icon elements;1 custom SVG image, complete=true, naturalWidth8, rendered8×8; source data URL decodes to the exact Hero SVG. Theme Check:0 errors,8 pre-existing warnings; git diff --check PASS.


## Source SVG correction requested — 2026-10-21

Owner clarified that Custom icon must contain SVG copied from the actual Together icon in Figma, not a substitute copied from Hero. Existing Icon source is already `custom`; its current SVG still has Hero provenance and is not yet confirmed as the target node’s exported markup. Do not describe this requirement as complete.

CUA selected the exact white Rectangle1 node48249:15576 beside Together; Properties reports width8 and height token2. Copy as SVG shows the success toast but the tool clipboard is empty. Direct export as SVG did not return a download. Existing Downloads/Rectangle1.svg is an older14×14 hollow Hero marquee asset, so it was not used. Export Preview exposes only a PNG and was not substituted. A local paste capture also could not receive the empty virtual clipboard. Requested the exact SVG markup from the owner; no substitute geometry or file was fabricated. No implementation/configuration files changed during this clarification attempt.
