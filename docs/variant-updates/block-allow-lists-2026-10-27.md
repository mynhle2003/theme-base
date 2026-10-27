# Block child allow-list update — 2026-10-27

Source: personal main `9a38d07d8ce34ea2de2656a064dc98171b49c97f`.

Owner-approved rule: follow base child allow-lists; retain removed block types when existing theme presets or saved compositions still use them. This schema-only update applies to custom blocks too. Implementation, settings, presets and saved compositions remain unchanged. This is a partial update and does not advance the full base checkpoint.

- `blocks/blog-card.liquid`: retained `group`.
- `blocks/first-card.liquid`: uses base child types.
- `blocks/gallery-header-group.liquid`: uses base child types.
- `blocks/marquee-item.liquid`: uses base child types.

Validation: full Theme Check passed at error level; schema JSON parsed; saved child usages audited; implementation outside schema verified unchanged. Existing unrelated worktree changes are excluded.
