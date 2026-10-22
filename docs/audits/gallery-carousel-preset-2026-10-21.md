# Gallery carousel — native marquee preset, 2026-10-21

## Scope and contract

Owner requested build-preset for Gallery Carousel using marquee instead of carousel. Reuse existing `gallery-carousel`, `gallery-header-group`, `group`, `header`, `eyebrow`, `heading`, `button`, `marquee` and `_marquee-image`. Placement: existing homepage `kinetra_gallery` instance plus the single registered Gallery carousel preset, category Storytelling. No resource context added. Section owns spacing/alignment, Group owns responsive header flow, native Marquee owns motion and image children own square crops and widths. No Liquid implementation, stylesheet, JavaScript, global settings or media resources were changed. The explicit marquee request is fulfilled by adding the existing marquee type to this section’s allow-list; existing carousel support remains available for other saved instances.

## Figma evidence

Source: CUA/Chrome, existing beae.com browser (inventory includes minhle@beae.com account UI title); Figma MCP tools were unavailable. Desktop file yTXlAfT0miBGgRuuYM4OMp node 48190:16669, mobile 48249:14940. Observed selected frame desktop 1920 × 645.8, mobile 375 × 353.5. Both use #181818 / scheme 3. Desktop has left-aligned heading/eyebrow, Instagram link aligned on the right, and edge-to-edge square photo strip. Mobile centers heading, places Instagram below, and shows a continuously clipped strip. Parent padding tokens read 24 top/bottom desktop and 12 top mobile (96/48px under project token mapping). Mobile Container child 48249:14941 reads height 305.5 and gap token 8 (32px). Screenshots were inspected in tool output, but no screenshot files were saved.

## Configuration

- Preserve original preset name Gallery carousel and category Storytelling.
- Replace its carousel tree with native marquee, speed 0.6, direction left, parallax disabled, gap 4px on both viewports, no dividers/blur. No navigation/pagination in this composition.
- Seven existing media references and their order retained, each mapped directly to `_marquee-image`, square ratio, square corners, 320px desktop / 170px mobile. No uploads or new media selection.
- Desktop: section 96px top/bottom, header/media gap 48px, header group centered with 83% width and bottom-aligned desktop link. Mobile: section 48px top / 0 bottom, gap 32px, existing vertical-on-mobile Group option, centered header and link with 24px gap and 16px side insets.
- Sync the entire composition to the existing `kinetra_gallery` instance in templates/index.json. Unrelated sections retained.

## Validation and limits

PASS: Theme Check CLI exits 0, zero errors and eight existing warnings in unrelated files. PASS: nested allowed block types, IDs, select values and range min/max/step. PASS: registered preset and instance parity, seven media references/order retained. PASS: git diff --check. Existing section settings/guards and non-schema implementation retained.

The Shopify AI Toolkit docs search failed with fetch failed; its full-theme validator could not load @shopify/theme-check-common. Used the installed Theme Check CLI and local composition checks instead.

Existing preview watcher at 127.0.0.1:9300 automatically synchronized sections/gallery-carousel.liquid. Initial template upload raced the new allow-list and failed. Retriggered templates/index.json after section sync; watcher reports successful template synchronization at 16:10:51 local time. No explicit theme push, Theme Editor Save, publication or Git operation.

Browser recovery succeeded after the initial timeouts. Reloaded the real development storefront and verified native `marquee--ready`, CSS animation `marquee-scroll-left`, and all seven original images loading. The original carousel is absent from the new Gallery composition. Desktop original cards measure 320×320px, 4px gaps; source images load at 320px. Changing measurements and screenshots show the moving strip. Desktop content width is 1905px with the 1920px browser viewport and scrollbar; section height 657px. Desktop screenshot inspected shows heading left, link right, and all seven matching image subjects over the animation phases. No screenshot files were saved.

Mobile browser viewport 375×812, actual content width 360px because of scrollbar: all seven originals loaded at 170×170px, native left animation active, centered heading and Instagram link stacked above the photo strip. Section measures 367px, header 117px. Screenshot confirmed composition but screenshot capture was scaled down, limiting precise subject/crop assessment. Viewport override successfully reset at the end.

Known gaps: desktop Figma header inset is approximately 160px at 1920px; existing percentage width control gives 163.2px with width 83% (3.2px difference before scrollbar). Source card widths were not read from child properties; 320/170px are supported approximations. Rendered section heights differ from source: desktop 657 vs 645.8px, mobile 367 vs 353.5px, with actual content width affected by scrollbar and shared text metrics. Native marquee uses a moving phase, so visible leading image at a given time differs from the static Figma screenshot. Full per-image crop/subject matching, exact typography comparison and Theme Editor add/remove/duplicate/reorder/select lifecycle remain unverified. Existing image resources are retained without claiming their source exports have been reverified. No unsupported CSS/JS or new settings added to close these gaps.


## Preset refinement — 2026-10-22 (supersedes earlier approximations)

Re-read Figma via CUA/Chrome. Desktop Container 48190:16670 has 48px gap; Frame 48190:16671 is 1600×89px; Heading Content has spacing token 2 = 8px. H2 layer is 60px tall, Roboto Condensed 700, 120% line-height; shared typography already matches height. Row 48190:16673 is 316.8px tall with gap token 1 = 4px. Mobile Frame 48249:15885 is 343×104px, gap token 4 = 16px. Row 48249:14944 is 169.5px tall. Button 48249:15870 is 110×23px and its icon instance is 16×16px.

Configured preset and existing homepage instance: header gap 8px desktop/mobile (was 16/12), heading/link gap 24px desktop / 16px mobile (was 40/24), native Button custom icon width 16px. Group width 85% with 16px horizontal padding produces exact 160px content inset / 1600px content width at 1920px. No global typography, CSS, JS, Liquid runtime or media changes.

Owner then explicitly requested desktop maximum 400 and Gallery preset value 316. Desktop `_marquee-image` range now 0–400px, step 4 (101 values), default remains 300; mobile range unchanged. This permits 316 while respecting Shopify slider capacity. All seven Gallery images use desktop 316 / mobile 170, both in Add section preset and homepage instance. Schema-only control change, no customization implementation record required.

Runtime verification before final 315→316 request: exact content width 1920px (browser 1935 including scrollbar), header 89px, H2 height60 and left160, section644px with 315px cards. Mobile exact content width375px (browser390 including scrollbar): section355.46875px, header105.46875px, all seven images170px loaded, icon16px, marquee-scroll-left active. Remaining mobile delta ~1.97px vs353.5 comes from native header/link metrics and nearest supported image170 vs169.5; native Button wrapper24 vs Figma23. Desktop316 predicts645px vs645.8, but final316 runtime measurement was blocked by Chrome timeout and is not claimed as verified. Screenshots saved for the pre316 render: /tmp/gallery-preset-refine/desktop.png and mobile.png.

Final local validation: preset-instance parity, nested allow-lists, setting IDs/options/range steps PASS. Theme Check0 errors /8 existing warnings. Preview watcher initially raced child-block schema upload; after child schema synchronized, retriggered section then template, which synchronized successfully. No explicit push/publication or Theme Editor Save. Concurrent unrelated theme work was present and was not reverted. Final viewport cleanup was attempted but browser timed out; reset could not be confirmed in that last recovery attempt.
