# Timeline — Bottom of content navigation

User authorized a new theme-specific Navigation → Position value matching the Figma story-column buttons, then required long-copy safety when slide Direction changes.

Contract: existing content section and JSON homepage instance; no resource context changes. Timeline list owns navigation placement; Timeline slide/Group retain composition and Direction. Reuse one pair of shared Swiper buttons and existing runtime bindings, ARIA, keyboard and disabled behavior. Keep the progress rail below the slide, mobile arrows hidden, Inside/Outside available. No new global settings or base changes.

Implemented `navigation_position: content_bottom`, translated as **Bottom of content**. The existing Timeline preset and homepage instance select this value and Primary style. The list wraps its carousel and shared arrows in one local media container. Runtime aligns arrows to the active story's Heading edge (fallback Eyebrow/Text/story); subtraction of slide coordinates cancels transition transforms. CSS reserves the actual measured button-row height plus existing desktop control spacing, preserving existing bottom padding. Slides use intrinsic min-height and do not stretch to an old Swiper wrapper height. Observed layout changes update Swiper auto-height, including Direction and viewport changes. Observations are reconciled on editor refresh and disconnected on unload.

Validation through existing localhost9300 preview and CUA/IAB:

- Horizontal, 1440px, temporary copy12× original: text864px, slide1081px, buttons56px below the final paragraph. This test caught and fixed the inherited stretched-slide height issue.
- Vertical, 1440px, temporary copy12× original: text576px, button clearance55.67px, horizontal alignment within1px. Next switched from vertical2010 to horizontal2015 successfully.
- Restored the exact original2010 Direction and copy after both temporary fixtures; unrelated homepage edits retained.
- Mobile375px: arrows hidden, reserved content padding0px, no horizontal page overflow. Temporary viewport override reset.
- Three focused tests pass for transform cancellation, selected-slide inset and unchanged existing modes.
- Installed Theme Check:413 files,0 errors,8 pre-existing warnings. Bundled Shopify Toolkit validator could not run because its package lacks `@shopify/theme-check-common`; installed Theme Check used independently.
- Final screenshot: `output/timeline/qa-content-bottom.png`.

Changed configuration: Timeline preset, homepage Timeline settings and one schema locale label. Custom implementation paths are registered in `docs/theme-customizations/kinetra-theme.md`. No commit, Git push, publication or Theme Editor Save.
