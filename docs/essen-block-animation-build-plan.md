# Essen block animation build plan

Role/placement/context: existing Heading, Text, Button, Eyebrow, Icon and Editorial text in current compositions.
Ownership: block Type/Delay; global motion and reduced motion control runtime. Existing typography/layout/padding retain ownership.
Slots: unchanged; no wrappers or new children.
Output: validated attributes on block roots, shared animation class.
Runtime: Elara section-scoped controller with editor replay, teardown, hidden-scope gating and boot fallback.
Responsive/accessibility: preserve DOM/order/layout, readable without JS or with motion disabled; focus exposes content.
QA: schemas, JS syntax, Theme Check, customization coverage and existing kernel regressions. Native editor/store visual QA remains outstanding.
Defaults: None/0 for existing content; merchant can opt in. Preserve all preset and saved settings.

Validation: Theme Check passed with zero errors and five existing settings-count warnings (down from eleven warnings). Twelve existing kernel tests passed; 176 token/hook/schema preservation assertions passed before the final form-token extraction. JS syntax, diff whitespace and customization coverage passed. Native storefront and Theme Editor animation preview remain unverified. No commit/push/upload.

## Section/template preset synchronization — 2026-10-09

Owner requested automatic contextual animations in section presets and saved templates, synchronized so adding a section uses the same animation convention. Individual block presets (including their nested children) retain explicit None/0. Header, Footer and their section-group compositions use None/0. Marquee content remains None because its runtime owns continuous motion.

One shared section/context mapping configures both preset and saved instance trees: general Heading Rotate words/50ms; testimonial/press Heading Slide from bottom/100ms; Text/Editorial text Slide from bottom/100ms; Eyebrow/Icon Slide from bottom/50ms; Button Slide from bottom/150ms, with Image card 100ms. Slideshow and Rich text CTAs use the same 150ms timing as other content groups. Existing content, media, block IDs/order, layout, schema definitions and implementation are unchanged.

Configured 240 section-preset, 209 template, 4 group and 77 block-preset entries across 85 files. Snapshot checks confirmed all non-animation configuration unchanged.

## Preset delay review — 2026-10-09

Reviewed all 530 animation entries in section/block presets, saved templates and section groups. Kept the short content cadence: heading/eyebrow/icon 50ms, text 100ms, CTA 150ms; testimonial/press headings and image-card CTAs retain their contextual 100ms timing. Changed nine slideshow CTA delays from 500ms to 150ms across the section preset and both home templates, plus the FAQ support CTA from 300ms to 150ms. Individual block presets and disabled animations remain None/0. Only delay values changed; animation types, content, media, composition, schema controls and runtime are preserved.
