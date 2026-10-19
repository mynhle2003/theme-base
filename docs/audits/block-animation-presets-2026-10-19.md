# Zevra block animation presets — 2026-10-19

Reference: sibling `../mara-theme` block schemas, animation attributes, runtime, and CSS (read only).

Applied the existing Mara composition to eligible nested and static blocks in Zevra block/section presets and configured JSON templates:

| Block | Entrance | Delay |
| --- | --- | --- |
| Eyebrow, Icon | Fade | 0 ms |
| Heading | Slide from bottom | 50 ms |
| Text | Fade | 100 ms |
| Button | Fade | 150 ms |
| Editorial text | None | 0 ms |

Existing kernel presets already matched. Schema defaults remain neutral. Contact form exposes only None and stays unchanged. Header, footer, announcement/navigation groups and FAQ presets remain excluded. Existing runtime exclusion and editorial scroll-reveal precedence remain in place. Hero media settings are outside this change.

Preserved pre-existing working changes. Edits retain source formatting and unrelated settings. The runtime delay cap now accepts the full 0–2000 ms editor range; a regression test covers the maximum, overflow and negative values.

Validation:
- All block/section schema and template JSON parsed successfully.
- Eligible block instances across block presets, section presets and templates match the composition. Follow-up corrected the traversal to include reusable content Header children, including Heading/Text in both Image card presets and the configured homepage. Site navigation Header remains excluded.
- 21 animation lifecycle/card tests pass.
- `git diff --check` passes.
- `shopify theme info` confirmed development theme #192119800107 on layouthub-template-v2.myshopify.com before Theme Check.
- `shopify theme check --fail-level error`: passed, 391 files inspected, 7 ExcessiveSettingsCount warnings. No new schema settings were introduced.
- Desktop/mobile storefront and Theme Editor visual interaction were not checked in this pass.

No commit, push or deployment performed.
