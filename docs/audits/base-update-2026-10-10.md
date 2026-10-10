# Base update verification — 2026-10-10

- Custom theme code, schemas, presets and dependencies take precedence over base updates.
- 330 retained custom paths match the pre-update snapshot after newline normalization.
- Homepage templates checked: `templates/index.json`, `templates/index.spinel-sync.json`.
- Homepage section/block IDs, order, disabled/static state, content and every existing setting value match the pre-update snapshot. Only new base setting defaults may be added.
- Three non-custom overlay color visibility conditions were reviewed against the new solid/gradient controls.
- Removed upstream options are retained.
- No homepage structural rebuild or data remapping was necessary: custom compositions remain unchanged.
- Shopify Theme Check and Git whitespace checks run before this commit. No new browser/storefront pixel comparison was performed.
