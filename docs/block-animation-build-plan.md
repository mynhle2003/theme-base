# Block Animation

- Role/placement/context: existing Heading, Text, Button, Eyebrow, Icon and Editorial text content kernels in their current compositions; no new slots or resource context.
- Ownership: each block owns Type and Delay; Theme Settings `motion_block_animations` and reduced motion remain authoritative. Typography, padding, widths and children keep their existing owners.
- Reference: Omnise Elvara Theme Editor theme 139629002837 and https://helix-theme-elvara.myshopify.com/, inspected 2026-10-09. Button/Text/Subheading/Icon/Editorial text expose None, Fade, Scale, Slide from left/right/bottom. Heading also exposes Rotate words. Delay input has min 0, max 2000, step 50, unit ms. Group has no entrance Animation group. Reference runtime uses `reveal-component`, `data-name`, `data-delay`, 500ms duration, scale .5 and 20px translations.
- Schema order: before Padding, following existing appearance/color/border controls; append if no Padding exists. Keep all current settings and saved composition. Default None and 0ms avoids enabling new effects on saved content implicitly.
- Output/runtime: reuse `assets/block-animations.js` with validated `data-block-animation` and `data-animation-delay` on existing block roots and the shared `block-animation` class. Use section-scoped observers and teardown; viewport entrance, active slideshow/tab scope, focus and editor selection must remain readable. Rotate words preserves rich text tags, whitespace and accessible text. No additional block wrapper.
- Responsive/accessibility: same DOM at all widths; no layout sizing changes, no persistent transforms after completion, no animation with global toggle off/reduced motion, readable without JS.
- QA: parse schemas and check placement/ranges, render enabled/disabled/invalid inputs, exercise viewport/hidden scope/replacement/unload/selection/reduced motion and word markup; JS syntax, diff whitespace, Theme Check and customization coverage. No commit/push requested.

## Validation

- 53 schema/render/range assertions passed using the repository Liquid engine (all six consumers, invalid types, Heading-only word rotation, 0/2000 bounds and step normalization).
- 22 offline DOM lifecycle assertions passed: word markup/whitespace, delay, hidden tab/replay, viewport gating, independent section observers, insertion/idempotency, selection, unload/reload and motion preferences. This is simulated DOM evidence, not native browser validation.
- JS syntax and `git diff --check` passed. Theme Check passed at fail-level error with 5 settings-count warnings; Editorial text already exceeded the threshold before adding these controls.
- `node theme-base check-custom elara-theme` passed. Tests/fixtures remained in `/tmp`; no test files staged.
- Browser access to the localhost fixture was declined, so storefront/editor visual QA remains unverified. No theme upload, commit, push or publish performed.

## Reference-based presets (2026-10-09)

Applied the reference entrance vocabulary to 273 block entries in reusable leaf/compound/section presets and the existing homepage (65 configuration files; 35 saved homepage entries). Only `animation_type` and `animation_delay` changed. Schema definitions retain None/0 defaults so existing compositions outside this scope remain opt-in.

| Content role | Type | Delay |
| --- | --- | --- |
| General Heading | Rotate words | 50ms |
| Text / Editorial text | Slide from bottom | 100ms |
| Eyebrow / Icon | Slide from bottom | 50ms |
| General Button | Slide from bottom | 150ms |
| Slideshow Button | Slide from bottom | 500ms |
| Image card Button | Slide from bottom | 100ms |
| Rich text Button | Slide from bottom | 300ms |
| Testimonial quote Heading | Slide from bottom | 100ms |
| Testimonial attribution Text | Slide from bottom | 50ms |

The table is a reference-derived convention for this theme's differing compositions, not a claim that every local section exactly matches a reference section. Slideshow, image-card, testimonial and general header sequences were read from public `reveal-component` attributes on https://helix-theme-elvara.myshopify.com/. Utility/footer/product-detail, press quote, marquee, timeline and FAQ answer compositions retain existing values rather than introducing a second motion owner.

Validation: all 273 configured entries use declared types and valid delays; snapshot comparisons preserve implementation and every unrelated definition/content/order/value. The 53 Liquid/schema checks and 9 existing editorial/heading tests passed. Theme Check passed with the same 5 settings-count warnings; diff whitespace passed. Desktop/mobile visual preview remains unverified following the earlier declined browser access. No upload, commit or push.

## Complete preset coverage (2026-10-09 follow-up)

The owner explicitly requested filling every remaining missing/None Animation preset using already configured equivalents. This supersedes the earlier exclusions for utility/footer/product-detail, press quote, marquee, timeline and FAQ answer configuration. Filled 290 missing/None entries across 32 preset/template/group files, preserving all configured non-None animation values. Quote headings use Slide from bottom/100ms, general headings Rotate words/50ms; the remaining role/context mappings above apply.

Audit confirms every eligible Heading/Text/Button/Eyebrow/Icon/Editorial text entry in leaf/compound/section presets and all saved template/group compositions has an explicit non-None Type and Delay. All slideshow Headings in these compositions use Rotate words/50ms. Global animation is enabled in current saved settings. Only animation configuration changed in this follow-up; existing runtime motion exclusions and schema definitions were not modified. Snapshot checks preserve all unrelated values and implementation. Visual/store verification remains unperformed; no upload, commit or push.

## Type-only correction

Owner clarified that the follow-up targets None in Animation Type only. Restored every Delay value/presence changed during complete-coverage filling to its pre-follow-up state, retaining Type changes and previously configured reference delays. Snapshot comparison confirms only Animation Type differs from that checkpoint.

## Motion parity audit and Delay clarification

Owner clarified that Delay remains part of the requested setup, so reference-based contextual delays were reapplied. Audited the public reference reveal runtime and theme CSS: Fade/Scale/Slide variants use 500ms and cubic-bezier(.25,.46,.45,.94), scale .5 and 20px translation. Rotate words differs: 1000ms, translateY(110%) rotate(10deg), simultaneous words after the configured delay, with separate clipped outer word and inner text spans. Update the shared runtime/CSS to these measured semantics while retaining section lifecycle, global/reduced-motion support, rich text and no-JS readability. Preserve component transforms for opacity-only Fade.

Validation after parity correction: 26 offline runtime/lifecycle assertions, 53 schema/render/range assertions, 330 configured entries across 32 follow-up files, and 9 existing editorial/heading tests passed. Delay is applied through Web Animations options for all supported effects, including simultaneous rotated words; None produces no animation hooks. Native visual preview remains unverified.

## Heading Type editor regression (2026-10-09)

Keep the existing kernel placement, settings and runtime ownership. The shared editor selection handler previously cancelled animations and called immediate reveal, marking Heading as played before the chosen Type could preview. Reproduced with an offline DOM regression before changing code. Block/section selection now replays active effects with configured Delay; inactive slides/tabs remain pending until activated. Focus and reduced-motion still expose content immediately. Validate all six Heading effects on settings mutation and selection, word-wrapper idempotence, hidden activation, section lifecycle and Liquid rendering.

Validation: the new selection regression failed before the fix and passes after it. All 38 offline runtime assertions and 53 schema/render assertions pass; Theme Check has no errors and the same five settings-count warnings. Customization coverage and diff whitespace checks pass. Live editor visual verification remains outstanding.

## Animation Type refresh in Theme Editor

Owner requests replay on every Type change, as in the reference editor. Keep the same six kernels/settings, placement and per-section JS owner. Reference refreshAnimation cancels the old effect and defers restart by 20ms; the inspected Heading originally uses Rotate words/50ms and was restored after testing Scale without saving. Add a cancellable 20ms editor refresh to initial/rerender configuration and selection paths, preserving storefront timing, active slide/tab gating, None, global/reduced-motion, focus visibility and teardown. Test rapid Type/Delay changes without selection, stale refresh cancellation, fresh rendered nodes, repeated selections and unload.

Validation: 26 dedicated editor settings-refresh checks pass, including all six effects without selection, latest-only rapid changes, None, focus, fresh markup, unload/reload and reduced motion. The existing 38 runtime lifecycle checks and 53 schema/render assertions also pass. Reference editor Type was restored to Rotate words and Save is disabled; no settings were saved. Native visual verification of the local implementation remains outstanding.

## Rotate words CSS lifecycle correction

Owner reports Rotate words still differs. Preserve Heading placement/schema/content and per-section runtime ownership. Replace the two Web Animations per word with the reference CSS mechanism: hidden clipped wrapper, inner translateY(100%) prepared state, animated wrapper opacity after Delay, 1000ms translateY(110%)/rotate(10deg) to none with forwards fill. Replay removes the class and flushes layout before adding it. None/type switch, focus, reduced motion and teardown remove prepared/animated state. Heading explicitly grants rotation to its snippet rather than requiring the runtime block.type identifier. QA targets actual CSS lifecycle, rich markup, repeat switches, delays and editor rapid refresh.

Owner expanded the audit to all Types. Confirmed all six kernel schema values map to validated runtime hooks. Fade is opacity-only; Scale ends at scale(1); left/right/bottom slide ends use the reference translateX/Y(0), all at 500ms/easing. Rotate uses scoped CSS clipped wrappers, prepared/animated classes, delayed opacity and one-second forwards keyframes. Word splitting now skips existing wrappers individually, allowing newly edited words to initialize without double wrapping. CSS word layout/clipping is scoped to Rotate words so switching away releases its appearance.

Validation: 37 offline lifecycle, 27 editor refresh and 54 schema/render checks pass, including Heading rotation with no block.type identifier. Reference keyframes, easing, timing, clipping and all six kernel mappings audited. Native local visual comparison remains unverified.

## First paint entrance correction (2026-10-09)

Owner reports visible text before entrance setup on a fresh load. Keep existing kernel roots, slots, typography, schemas, preset/content and section lifecycle. Reference CSS initializes reveal-component at opacity 0. The layout owns a synchronous, capability/motion-gated head marker before body parsing; critical CSS owns hiding valid, uninitialized leaf effects, excluding existing Announcement/Marquee/multi-image motion owners. The section runtime marks nodes initialized only after preparing their pending state and hands off to existing CSS/WAAPI effects. Preserve no-JS/global-off/reduced-motion readability, focus, active tab/slide gating and editor replay. A bounded boot fallback releases hidden content after asset failure/delay; a late runtime must not hide and replay already exposed initial nodes. QA: delayed-runtime first paint, all effects/delays, offscreen content, exclusions, no-JS, reduced/global-off, failed/late asset and editor lifecycle; JS syntax, Theme Check, whitespace and customization coverage. No commit/push requested.


## First paint animation correction — 2026-10-09

Reproduced the reported flash using the actual previous runtime/CSS in Chrome with a one-second runtime delay: content is visible first, then hidden by entrance setup. Public Elvara CSS instead initializes reveal-component at opacity 0. The theme head now prepares a supported-JS/motion marker before body parsing; critical CSS hides valid uninitialized leaf effects, and the section controller prepares pending state before releasing the initial guard. Announcement/Marquee/multi-image owners and None remain readable. Focused content is exposed, and the asset-error/eight-second timeout fallback releases initial/prepared states; late runtime initialization skips entrances for the page already exposed. No settings, presets or animation timings changed.

Validation: Chrome fixtures pass initial paint for all six effects, delayed-runtime handoff, final rotated-word visibility, focus, below-fold gating, disabled global motion, simulated reduced-motion preference, error/late-runtime recovery, simulated editor boot and a real script-disabled sandbox frame. Browser reproduction uses a local fixture, not live Shopify save/reload. The 37 lifecycle, 27 editor-refresh, 54 schema/render and 11 bootstrap capability/timeout/error checks pass (129 assertions); JavaScript syntax, diff whitespace and customization coverage pass. Theme Check: zero errors, five existing settings-count warnings. Fixtures remain in /tmp. No commit, push or publication.
