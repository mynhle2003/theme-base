# Gallery (custom) preset — 2026-10-19

Source: Mara bH9A5237I07NWt19Cua9gL desktop 47069:17441 and mobile 47230:15806. Applied the user-supplied build/preset/build-preset skill.

Composition routed to existing Custom section, with a named Gallery (custom) Add section preset and the existing community_gallery homepage instance. Existing Row, _column, Group, Image card, Heading, Button and Image blocks retained. No implementation or global typography changes. Six existing permanent media references retained; no new media requested or uploaded. The earlier gallery-custom section remains available; unrelated instances are unchanged.

Settings: full width; top padding 96px desktop/56px mobile; section and image gaps 8px; top row columns custom33/custom67; square content card with scheme3, center-center content,16px gap and16px vertical/20px horizontal padding. All groups explicitly use mobile Fill to avoid intrinsic sizing collapse. Heading xl/H2 consumes existing32px desktop/24px mobile typography. Button tertiary Follow Us retains existing unset destination.

Browser verified before final desktop column calibration:375px content viewport (390px browser width with15px scrollbar) renders343px square content card, matching mobile Figma. A375px browser viewport has360px content width and renders328px square. Desktop1920px content viewport renders1824px content area and450px bottom-row images. The initial fill second column forced first card372.81px and adjacent images717.59px; final preset changes the second column to custom67 to remove its intrinsic minimum. Final desktop browser readback timed out twice, so final top-row geometry is unverified. Browser viewport reset was attempted in the timed-out call and cannot be confirmed.

Remaining gaps: Figma top row has exactly equal thirds; integer custom percentage column controls approximate33/67 rather than exact1:2 space distribution after the inter-column gap. Heading tracking is -0.8px in the observed theme versus2px in Figma; no per-heading tracking control exists. Existing media have not been verified as exact source matches; preset-only scope preserves them. Follow Us URL remains unset pending brand destination. No store settings save, manual push or publication.

Validation: preset setting IDs, select options, ranges/steps, nested block allow-lists and unique preset name checked with a scoped schema validator; JSON parsed; git diff --check passed. Theme Check0 errors/7 existing ExcessiveSettingsCount warnings.
