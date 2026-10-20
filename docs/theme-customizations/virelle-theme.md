<!-- theme-base-sync-state: {"sha":"de84ae60437b6369b61addd025dd75d1434706be"} -->
# Customization record: virelle-theme

Theme branch: `theme/virelle-theme`
Personal base at creation: `de84ae60437b6369b61addd025dd75d1434706be`
Theme update source: this repository's `main` branch
Team base source for personal main: https://github.com/Chieu2507/shopify-theme-base (only `main` or `dev`)

Record only theme-specific section/block implementation changes here: Liquid/HTML outside {% schema %}, plus CSS/JS assets and snippets rendered or loaded by those sections/blocks. Theme presets, schema-only changes, template JSON, and saved settings values are not custom code. During base updates, review overlapping implementation paths and describe the expected behavior before resolving. See [the customization policy](../theme-customization-policy.md).

## Customizations

| File/path | Base behavior | Theme-specific behavior | Reason | Update/merge rule |
| --- | --- | --- | --- | --- |
| `snippets/product-card.liquid`, `snippets/product-badges.liquid`, `snippets/badge.liquid`, `assets/critical.css` | Collection badge rules already match product collections. | Cards use native collection rules; card-scoped CSS styles collection badges, retaining geometry and turquoise badge appearance. Product-page prefixed tags retain their existing path. | Owner requested native Collection badge migration on 2026-10-20. | Preserve card styling; use existing Collection badge settings only. Keep badge membership in existing Theme Settings. |

## Base update decisions

| Base commit | Files reviewed | Decision and reason | Approved by/date |
| --- | --- | --- | --- |

## Native Collection badge migration — 2026-10-20

See [migration plan](../product-card-collection-badge-migration.md). Existing status badges and product-page prefixed-tag behavior are retained. Current labels are mapped to verified collection membership in local settings_data.

Validation: JSON/schema and actual Liquid fixture checks pass; Theme Check has no errors. Live desktop/mobile/Figma QA remains pending. No commit/push/deploy.
