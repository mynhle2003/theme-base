# Collection marquee — 2026-10-22

## Custom section Background control migration

Both Kinetra and Virelle now expose a single Background selector (`background`, None/Image/Video) in Appearance, replacing the former Media selector (`background_media`). Removed the separate Background color picker (`background_color`). Updated every conditional visibility expression and explicitly set the new key in all seven registered presets (four Kinetra, three Virelle). Audited template, section-group and settings-data Custom section instances: no stale old keys remain.

Shared `custom-section-layout` reads the new selector first; the legacy media key and color override remain supported for the other existing consumer, Testimonial carousel. Custom section no longer emits the removed color override and uses its color scheme. Liquid render checks for None/Image/Video, explicit None precedence and unchanged Testimonial behavior pass in both themes.17 marquee regression tests pass; Theme Check reports0 errors in each theme (Kinetra9 warnings, Virelle8), and both whitespace checks pass. No explicit push, publish or Theme Editor Save.

## Section settings organization and responsive alignment

Collection marquee settings are grouped as Layout / Appearance / Gap / Padding. Layout now exposes Alignment and optional Alignment (mobile), reusing Custom section's left/center/right choices and Customize for mobile behavior. These controls supply the inherited Header alignment context; the full-width marquee strips retain their own title geometry. Center defaults are explicitly synchronized in the registered preset and homepage instance. Six Liquid render cases verify desktop context, mobile inheritance and mobile overrides. Existing setting IDs/values, image references and Right / Left / Right directions are preserved.

At the owner's additional request, `sections/custom-section.liquid` in both Kinetra and Virelle merges its former Background and Color settings beneath one Appearance header. Only the two schema headers change: no setting, default, visible-if rule, preset or implementation is removed or replaced. Existing unrelated worktree changes are preserved.

Final checks:17 targeted tests pass; Kinetra Theme Check0 errors/9 warnings, Virelle0 errors/8 warnings; group uniqueness, responsive controls, preset/homepage parity and both whitespace checks pass. Live browser recheck remains unavailable following connection timeouts. No explicit push, publication, Theme Editor Save or commit.

## Mobile autoplay and direction follow-up

Mobile/narrow or touch-pointer layouts now show and automatically animate every row without hover. Normal motion uses the same continuous transform loop on desktop and mobile; native horizontal scrolling is retained for reduced-motion users. Focus/editor selection/document visibility still pause motion. Returning to desktop keeps only the selected row running and synchronously recenters inactive headings. A pending desktop hover is discarded if the layout has switched to mobile. Desktop title-only hover behavior remains intact.

Registered section preset and homepage instance directions are Right / Left / Right (`forward` / `backward` / `forward`). All six verified crop references remain unchanged.16 targeted tests pass, including mobile autoplay for all rows, reduced-motion fallback and mobile-to-desktop restoration; syntax, direction parity and whitespace checks pass. Theme Check0 errors/9 unrelated warnings. The browser connection timed out during the new autoplay preview check, so live mobile motion after this change is not claimed verified; earlier375px crop/layout measurements remain historical evidence.

## Title-only hover target follow-up

Hover selection is now bound to the original source `h2[data-cm-title]`, rather than the full row. Entering images, outlined copies or blank row space cannot select a resting row. The same abort signal removes the title listener on disconnect; the existing80ms debounce, first-row autoplay and persistent selected-row motion remain unchanged.14 tests pass, including actual initialization/listener ownership and desktop-pointer guarding; syntax and whitespace checks pass. Real preview pointer checks confirmed third-row selection survives entering second-row whitespace, then changes to the second row upon entering its original black heading. No schema, media or composition changes.

## Contract

Content section `collection-marquee`, all JSON templates, no section groups, app blocks or resource context. Scope: Kinetra, confirmed by owner. Fixed static Header (`header`) followed by merchant-managed `_collection-marquee` blocks. Add-block display/preset name: Marquee. Each new marquee accepts only the existing Basic `_marquee-image` block. The section owns the surface, container, spacing and row gaps; the block owns its editable heading/link, typography and motion. Theme Settings retain typography/color ownership. Preset creates Explore collections and three rows (T-shirts & Tops, Jogger & Bottoms, Jackets & Hoodies), two image slots per row. Empty image pickers use the existing Image placeholder. Without JavaScript, readable linked headings remain visible.

Placement: `templates/index.json`, immediately after Hero (`slideshow`). Preserved disabled inherited collection-background instance and unrelated local changes. `index.spinel-sync.json` has a different inherited composition and was not changed by this task.

## Design evidence

Figma desktop `yTXlAfT0miBGgRuuYM4OMp / 48190:17304`, mobile `48249:14526`. MCP design context and screenshot denied missing edit access. Read exact frames, screenshots and Properties in the authenticated Chrome/beae.com tab. This is a manual read-only fallback; no successful MCP-generated design context is available.

Desktop: 1920 × 617, white scheme-1; top/bottom token24 = 96px; Container 425px, gap token10 = 40px; List 364px, gap token8 = 32px; each row 100px. Active row `48205:19437`: outlined title, 1006px central image/title/image group, outlined title. Central group `48215:4517`: gap token6 = 24px. Heading `48218:14557`: 558×82, Roboto Condensed Bold700, H1 style, 120% line-height, tracking -1.2px, uppercase. Image `48205:19464`: 200×100, 2:1, Crop. Mobile frame: 375×321, top48/bottom12; three 60px rows and20px gaps. Header/list gap20 completes the321px composition with the inherited21px Eyebrow. Images120×60; image/title gap20. Typography uses existing Display68/40px tokens.

Desktop resting rows show a centered filled heading. Hover exposes the repeating outlined-title/image/filled-title/image strip and runs horizontal motion. Keyboard focus shows a stable strip and pauses motion. Mobile uses native horizontal swipe, starts centered on the filled title, and does not autoplay. Reduced motion prevents animation. These interaction details follow the owner's hover request; mobile swipe is the implementation choice for a touch surface.

## Runtime and validation

`assets/collection-marquee.js` owns one custom-element instance per row, measured looping copies, responsive/font measurement, focus/hover state and editor selection. Disconnect cancels frames, aborts listeners, disconnects ResizeObserver and removes copies. Copies remove IDs, remain aria-hidden, and are inert outside the Theme Editor. Existing Basic Image rendering and attributes are preserved. Additional images retain merchant order.

Five targeted tests pass: slot restrictions/static header/placement, phase wrap and speed clamp, focus/reduced-motion/mobile/editor motion guards, measurable pre-enhancement layout, and eased hover entry/exit with rapid re-entry. Node syntax and diff whitespace checks pass.

Full Shopify Theme Check: zero errors, nine warnings in unrelated existing files (settings counts, orphaned snippet and complexity). Toolkit scoped validator could not start because its bundled `@shopify/theme-check-common` dependency is missing; CLI Theme Check used instead. Toolkit documentation search also failed its network fetch.

Existing authorized development watcher automatically synced the new block/section/script/template to development theme192661848363 on layouthub-template-v2.myshopify.com. Initial dependency-order upload errors were cleared after the block existed and template resynced. No new watcher, explicit push, publication, Theme Editor Save or commit. Browser preview verified section height617px, each row100px, initialized repeat tracks, hover motion, keyboard-focus pause and mobile no document overflow. The mobile check initially showed325px; header gap corrected24→20 to match321px. Final mobile capture/readback follows this correction when browser connectivity permits.

## Remaining limitation

Six original Figma images are not available. The inspector exposed the first Jogger image hash `acd4dd391122713a887e930bf1af55b2e2546912`; browser downloadMedia timed out and the normal download control yielded no local file. Page asset inventory exposed no image files. No image was fabricated or replaced with unrelated store imagery. All six preset slots remain placeholders: layout and interaction are implemented, but visual asset parity is not complete. Exact source files or working Figma image download are needed to finish image assignment and crop verification.

Theme Editor add/remove/duplicate/reorder/save/reload and reduced-motion device checks have code/test coverage, but full manual editor lifecycle QA remains pending. Browser runtime screenshots are under `output/collection-marquee/`.

## Smooth hover follow-up

Owner requested the resting heading to lift naturally into scrolling as one continuous element. Resting and moving titles share the same typography and centered starting geometry. Entry lifts text4px and crossfades320ms while velocity follows a400ms smoothstep ramp. Exit fades320ms with matching deceleration; phase resets to the center only after the moving strip is invisible. Rapid re-entry queues until that reset, preventing visible phase jumps. Only text lifts: image slots retain their geometry. Keyboard focus pauses immediately; reduced motion disables transitions and scrolling animation. Five focused tests pass.

The latest browser screenshot (`output/collection-marquee/desktop.png`) records an unrelated development-upload error: Shop the look preset references undefined `show_variant_picker` in `shop-the-look-products`. This concurrent, out-of-scope change prevented final visual confirmation of the new easing and final321px mobile readback. Earlier desktop617px, row100px, hover run/focus pause and mobile no-overflow checks succeeded before that blocker. Viewport override was reset.

## Final controls and motion contract (supersedes earlier interaction notes)

- One real `h2` is used for the resting and moving filled title. No opacity handoff between duplicate headings and no switch between `scrollLeft` and `transform` on desktop. Geometry uses fractional DOMRects. Resize/font callbacks with an unchanged geometry signature do not restart motion.
- The first row starts automatically. Hover selection is debounced80ms per section; pending selections are cancelled by the next row. The previously selected strip is hidden and centered synchronously, so rapid hover cannot leave multiple strips visible. Leaving the row does not stop the selected row. Re-entering the selected row preserves its phase. Focus/reduced-motion/editor selection remain motion guards. Mobile retains native horizontal swipe.
- Exactly two static `_collection-marquee-image` slots (`image-1`, `image-2`), no dynamic children. Presets and homepage instance migrated while retaining image settings. Each private Image omits independent link/new-tab controls. Shared Basic Image implementation is now `snippets/marquee-image-render.liquid`; ordinary `_marquee-image` retains its existing link behavior.
- One Collection picker controls the entire row destination through a single viewport anchor; headings and images have no nested links. If Heading is empty/whitespace, use the selected collection title; if both are empty, translate `collection_marquee.placeholder_title` to "Collection title". Preset/homepage collection handles migrated from the earlier heading URLs.
- Typography order is Font → Heading size → Text color. Font choices Heading/Body/Accent apply at every size. Heading size options/labels and alpha Text color are copied from the Heading kernel. No empty Color header. Gap labels are Desktop gap and Mobile gap.

Final automated coverage:11 tests pass, including64 fractional geometry combinations (four title widths, four image counts, four viewport widths),24 direction/speed/cycle combinations over180 animation frames, pending-hover cancellation using one shared runtime/timer queue, single-strip selection, static image slots, Collection/title fallbacks, link ownership and schema controls. Node syntax and whitespace checks pass. Full Theme Check:0 errors,9 unrelated existing warnings. Toolkit scoped validator remains unavailable because its packaged `@shopify/theme-check-common` dependency is missing.

Browser stress fixture `output/collection-marquee/motion-matrix.html` inspected12 text/size/image cases plus an independent section: title widths9.34375px through22652.34375px,1–120 characters including Vietnamese and emoji,10–200px font sizes,0/1/2/5 images. All13 rows initialized, resting title center error0px and no document horizontal overflow at desktop. The selected row kept moving after clicking Outside the rows, switching selected a single row, and the independent section kept its own selection. Real development preview confirmed one heading per row, first-row automatic selection and unchanged617px section height. Subsequent desktop control changes passed Liquid rendering/schema tests and development uploads. The browser viewport capability timed out before mobile readback, so the latest375px visual matrix is not claimed verified. No public theme publication, explicit push, Theme Editor Save or commit.
