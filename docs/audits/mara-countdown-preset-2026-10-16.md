# Countdown preset — 2026-10-16

Workflow: project `agents-build-themes/skills/build/preset/build-preset/SKILL.md` for composition; explicit user authorization for Button implementation customization. Local branch: `theme/mara-theme`. No push or store configuration save.

Design evidence: fresh Figma design context and screenshots for file `bH9A5237I07NWt19Cua9gL`, desktop `47015:19948`, mobile `47228:13963`. No image assets are present in these frames.

## Mapping

- Existing `countdown` section: page-width, scheme-3 (#181818 / white), 80px vertical desktop padding and 56px mobile padding; responsive horizontal-to-vertical flow, mobile centered, 32px mobile gap.
- Content group: nested title header (eyebrow → heading, 12px gap), description (16px after title header), desktop Button (32px after content). Heading uses `xl`, the existing H2 scale 32px desktop / 24px mobile. Copy matches Figma.
- Timer: existing `countdown-timer`, labels enabled, no background, display/H1 number size (44px / 28px), small labels (14px). Recurring duration 62h 33m retained; seconds are live, not a frozen Figma value.
- Desktop Button sits inside content and hides below 768px; mobile Button sits after timer and hides at 768px and above. Both use existing primary button tokens (48px / 44px height). Links remain unselected as before.
- Preset name is `t:general.countdown` (Countdown), category remains base `t:general.content`; one preset. Homepage `limited_release` uses matching composition and values. Existing countdown implementation retained.

## Button custom contract

`blocks/button.liquid` adds a Visible header and checkbox settings `hide_on_desktop` / `hide_on_mobile`, default false. Independent flags append wrapper classes; complementary media queries set display:none. Hidden wrappers consume no flex gap and their buttons are excluded from keyboard navigation. Both false preserves normal visibility; both true hides at every width. `block.shopify_attributes` remains on the wrapper. No JavaScript or editor listeners added. Customization recorded in `docs/theme-customizations/mara-theme.md`.

The two responsive Buttons are independent merchant-editable blocks; keep label/link changes synchronized when using this preset.

## Validation and remaining gaps

- Recursive checks pass for preset and homepage setting IDs, select/range/checkbox values, permitted child types, block order and preset/instance parity.
- Shopify Theme Check: 0 errors, 6 existing warnings (settings count in bundle summary, comparison features/column, editorial text, group; Liquid complexity in css-variables).
- `git diff --check` passes.
- Live viewport comparison and Theme Editor add/remove/duplicate/reorder/save checks remain unverified: preview supervisor stopped and localhost:9300 closed. No preview upload started.
- Timer has no existing control for exact Figma unit widths (96px desktop / 64px mobile), gaps (16px / 12px), zero internal padding, or title-case white labels. Existing timer uses padded units, 8px / 4px gaps and uppercase muted labels. Kept unchanged within preset scope.
- Existing global heading tracking differs from Figma's 2px; no local tracking control exists. Global settings remain unchanged.
- Existing global max-page-width is 1700px with 48px desktop margins; exact Figma 1600px container is not guaranteed at its desktop viewport. No global width changes made for this section alone.
