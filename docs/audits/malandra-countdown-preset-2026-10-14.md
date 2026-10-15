# Countdown preset — 2026-10-14

## 2026-10-15 — editable composition rebuild

Supersedes the static composition described below. User explicitly authorized unlocking Countdown and accepting all Custom section block types before rebuilding its preset with build-preset. Countdown now renders only dynamic blocks and recommends the same 23 block types as Custom section, with @theme retained. The preset and homepage spring_sale instance contain no static blocks. The homepage's existing content, timer settings, and button settings were preserved in the migrated tree.

Re-read desktop 52325:1403 and mobile 52393:9164 through Figma design context with screenshots. New composition: top Divider (solid, thin, scheme, full width, zero spacing), then a full-width responsive Group containing content Group, countdown-timer, and a right-aligned action Group capped at 500px. Outer section is vertical with zero gap and padding; the responsive Group supplies 64px desktop vertical padding and 48px/56px mobile padding. Heading/body retain 16px desktop and 12px mobile gap. Mobile centers content and action.

Validation: every Custom section block type is explicitly available; no static render calls remain; preset/homepage setting IDs, select/range values, unlocked descendants and homepage block orders passed. Theme Check: 380 files, zero errors, five pre-existing warnings. git diff --check passed. Local preview at 127.0.0.1:9301 is unavailable, so storefront rendering and interactive Theme Editor add/remove/reorder are not visually verified.

Remaining preset-only gaps: timer unit widths, vertical separators and number/label gaps remain controlled by the existing timer implementation. The generic responsive Group uses one mobile gap (36px), whereas Figma uses 24px before the timer and 36px before the button. The Divider follows the section's page-width container rather than drawing an outer viewport-wide border. No temporary Figma SVG URLs or new media assets were introduced. No store configuration or deployment was performed.

Configured the existing Countdown section preset and homepage spring_sale instance from Figma desktop 52325:1403 and mobile 52393:9164, file 7BbUHDzKGaMGMkyRpu0YZ8. Configuration only: no implementation, schema controls, global settings, store writes or deploy changes. Preserved other existing working-tree changes.

Composition: existing static content Group, countdown-timer and Button. Page width, scheme-1, horizontal space-between desktop, centered vertical mobile. Section padding 64px desktop and 48px/56px mobile; section gap 36px. Content max-width 500px, heading/body gap 16px desktop and 12px mobile. Spring Sale uses lg (H2 token: 34px desktop, 30px mobile); body md (16px); countdown numbers lg and labels xs (12px), transparent units. Primary Shop now button; destination remains unset.

Duration: recurring, 64 hours + 23 minutes = 231780 seconds = 02 days 16 hours 23 minutes 00 seconds. Existing runtime preserves the visitor's cycle through localStorage and restarts it when complete. No seconds input exists, so Figma's 16 seconds cannot be preset exactly; the value remains live rather than frozen.

Validation: recursive setting IDs, select options and range values passed. Theme Check inspected 369 files: zero errors, six existing ExcessiveSettingsCount warnings. git diff --check passed. Figma screenshots reviewed at desktop and mobile; rendered storefront verification unavailable because http://127.0.0.1:9301 did not connect.

Remaining design gaps: no native controls for Figma's vertical unit separators or section top border; unit widths 96px desktop/64px mobile, 16px inter-unit gaps and 10px number/label gaps cannot be configured. Existing timer uses automatic unit widths, 8px desktop unit gaps, unit padding and 2px label margin. Mobile section gives equal 36px spacing between direct children rather than Figma's 24px content/timer and 36px timer/button spacing. Desktop Button has intrinsic width rather than Figma's 500px right-side wrapper. These custom implementation follow-ups remain unimplemented under build-preset scope. Figma line SVGs are not introduced because their slots require implementation changes; no image/video media is part of this preset.

Follow-up: enabled Group limit_width with width fill and max_width 500px; mobile width fill with limit_width_mobile false. Verified the Liquid mapping emits the desktop 500px cap and mobile 100% max-width fallback. Earlier max_width alone did not activate the cap.
