# Collections background preset — Virelle — 2026-10-19

Update: the subsequent user-authorized Virelle custom adds mobile Background tabs and exact/generated desert media, resolving the mobile/media/spacing gaps listed in this earlier preset pass. See the Collections background entry in [customizations](../theme-customizations/virelle-theme.md) and [media receipt](collections-background-media-2026-10-19.json).

Sources: Figma `yTXlAfT0miBGgRuuYM4OMp`, desktop `48007:10455` (1920 × 600), mobile `48096:25934` (375 × 600). Both design contexts and screenshots inspected. Followed build-preset and figma-design-to-code; configuration scope plus the existing height-option calibration exception.

## Composition

Reuse `collections-with-background` and three `collection-background-item` blocks. Keep the original preset name/category `Collections background` / `Collections`, original collection handles and title order. Synchronize the Add section preset with homepage instance `collections_with_background_VE8aHc` in `templates/index.json`. Preserve unrelated sections, template order, schema controls, global settings and previous worktree changes. Do not change `index.spinel-sync.json`, which is outside the requested homepage/preset configuration.

| Control | Before | After | Evidence |
| --- | --- | --- | --- |
| title_max_width | 1100 | 1600 | Desktop container width |
| gap | 60 | 56 | Desktop row gap; shared row/column control limitation below |
| heading_size_mobile | lg | display | Existing H1 token gives 40px, desktop remains 68px |
| text_opacity | 60 | 40 | Inactive desktop labels |
| mobile_width | page | full | Full-bleed mobile media |
| gap_mobile | 24 | 40 | Closest existing mobile vertical spacing control |
| block overlay_color | #0000001a | #00000033 | Black 20% overlay |
| block overlay_style | unset (solid default) | solid | Explicit solid overlay |

Keep product counts off, title horizontal/wrapping on desktop, centered positions, sticky off, mobile vertical, height medium, no outline. Copy remains T-SHIRTS & TOPS / JOGGER & BOTTOMS / JACKETS & HOODIES. Existing collection image fallback remains selected; no media/content work was requested in this turn. No static Figma asset was added to implementation and no temporary asset URL is stored.

## Existing height-option calibration

Desktop medium maps 440px → 600px, factor 600/440 (15/11). Existing fixed scale, using the theme's 10px rem: extra_small 28 → 38.1818rem; small 36 → 49.0909rem; medium 44 → 60rem; large 52 → 70.9091rem; extra_large 62 → 84.5455rem. Ordering preserved. Adapt, full_screen, labels, defaults, values, breakpoints and mobile aspect-ratio mappings unchanged. On base update, review upstream height mappings and preserve this theme's calibrated scale. This is configuration calibration under the skill, not a customization record.

Mobile Figma 600px is the entire shared background, not each card. Existing mobile options control individual card aspect ratios, so calibrating every card to 600px would not reproduce the reference. Retain mobile medium and report this layout gap.

## Verification

- Shopify CLI Theme Check: exit 0, zero errors, seven warnings in other files (five ExcessiveSettingsCount and two LiquidComplexity).
- Configuration checks: section schema outside presets unchanged; settings IDs, select values and range constraints valid; preset name/category unique and retained; preset and homepage settings/block settings identical; unrelated homepage sections and order unchanged.
- `git diff --check`: passed.
- Existing localhost preview reused. Desktop viewport override 1920 × 900 gives 1905px layout width because of its scrollbar. Rendered frame height exactly 600px; title font 68px, two titles on first row and third centered below, inactive opacity .4. All three resource-backed images loaded. Keyboard ArrowRight selects the second panel and deselects the first. Hover listener inspected in existing runtime; pointer hover and editor lifecycle not exercised.
- Mobile viewport override 375 × 700 gives 360px layout width because of scrollbar. Preview screenshot inspected: 40px centered headings on separate full-width image cards, 40px gap, each card 480px high, total section 1520px. No horizontal page overflow. Viewport override reset after verification.
- Existing preview watcher may synchronize local file edits as part of its established dev session. No explicit theme push/publish, Theme Editor save, store content mutation, commit or Git push was performed.

## Remaining gaps — unimplemented

1. Mobile: Figma has one 600px backdrop with all three labels (40px vertical gap), first active and others 40% opaque. Existing vertical mobile mode renders three separate image cards, all titles fully opaque; horizontal mode is a card carousel. Neither existing setting retains the shared desktop tablist on mobile. Requires separate implementation work outside build-preset.
2. Media: current collection covers show outdoor walking outfits. Figma shows a model in a sage set against desert dunes. Exact photograph/crop is not selected; no new asset download/upload or store media change was authorized. Keep existing resources rather than clearing them.
3. Desktop spacing: Figma has separate 56px row gap and 80px column gap plus 32px horizontal padding per title column (144px visible text-to-text spacing). Existing section has a single gap without per-title padding. The preset prioritizes the 56px row gap; horizontal text spacing remains 56px. No CSS patch added.
4. Text color/tracking: existing scheme-3 trigger consumes body text #dfdfdf rather than heading white; Figma uses white. Existing H1 tracking is -1.28px versus -1.2px. No local control separates trigger color/tracking, and shared scheme/tokens were not changed based on this section.

Before-edit snapshots: `/tmp/virelle-collections-background-before/`. No complete Figma fidelity claim is made.
