# Essen block animation build plan

Role/placement/context: existing Heading, Text, Button, Eyebrow, Icon and Editorial text in current compositions.
Ownership: block Type/Delay; global motion and reduced motion control runtime. Existing typography/layout/padding retain ownership.
Slots: unchanged; no wrappers or new children.
Output: validated attributes on block roots, shared animation class.
Runtime: personal main e84d0689249b5ae26d3c5c066c90348e4aae06f4, with automatic card/list entrances, editor lifecycle and body motion switch. Retain compatible leaf Type/Delay controls and validated hooks.
Responsive/accessibility: preserve DOM/order/layout, readable without JS or with motion disabled; main owns pending visibility, focus and reduced-motion behavior.
QA: schemas, JS syntax, Theme Check, customization coverage and existing kernel regressions. Native editor/store visual QA remains outstanding.
Defaults: None/0 for existing content; merchant can opt in. Preserve all preset and saved settings.

Historical validation of the superseded Elara runtime: Theme Check passed with zero errors and five existing settings-count warnings (down from eleven warnings). Twelve existing kernel tests passed; 176 token/hook/schema preservation assertions passed before the final form-token extraction. JS syntax, diff whitespace and customization coverage passed. Native storefront and Theme Editor animation preview remain unverified. No commit/push/upload.

## Section/template preset synchronization — 2026-10-09

Owner requested automatic contextual animations in section presets and saved templates, synchronized so adding a section uses the same animation convention. Individual block presets (including their nested children) retain explicit None/0. Header, Footer and their section-group compositions use None/0. Marquee content remains None because its runtime owns continuous motion.

One shared section/context mapping configures both preset and saved instance trees: general Heading Rotate words/50ms; testimonial/press Heading Slide from bottom/100ms; Text/Editorial text Slide from bottom/100ms; Eyebrow/Icon Slide from bottom/50ms; Button Slide from bottom/150ms, with Image card 100ms. Slideshow and Rich text CTAs use the same 150ms timing as other content groups. Existing content, media, block IDs/order, layout, schema definitions and implementation are unchanged.

Configured 240 section-preset, 209 template, 4 group and 77 block-preset entries across 85 files. Snapshot checks confirmed all non-animation configuration unchanged.

## Preset delay review — 2026-10-09

Reviewed all 530 animation entries in section/block presets, saved templates and section groups. Kept the short content cadence: heading/eyebrow/icon 50ms, text 100ms, CTA 150ms; testimonial/press headings and image-card CTAs retain their contextual 100ms timing. Changed nine slideshow CTA delays from 500ms to 150ms across the section preset and both home templates, plus the FAQ support CTA from 300ms to 150ms. Individual block presets and disabled animations remain None/0. Only delay values changed; animation types, content, media, composition, schema controls and runtime are preserved.

## Main migration — 2026-10-14

ARCHE-ESSEN-BLOCK-ANIMATION-001 replaces the former custom runtime and boot guard with pinned personal main. The schema contract did not change: identity mapping preserves all 424 actual Type/Delay entries (including None and zero), block IDs, order, content and media. No preset was reset to main or Arche defaults. Current saved delays are 0/50/100/150ms. The old boot guard and Rotate words CSS runtime are removed; compatible leaf hooks and the pending-state CSS remain recorded as differences against main. Earlier preset receipts remain historical. See [update receipt](audits/arche-to-essen-2026-10-14.md) for target QA and outstanding live checks.
