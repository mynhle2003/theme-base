# Icon with text (custom) — Section Build Plan

- Role/placement: content section in JSON templates; homepage immediately after featured_product. No resource context or app slot required.
- Ownership: section owns surface, width and outer padding; existing grid owns columns/gap; groups own card/content flow and padding; heading/text own content and typography. Global tokens remain authoritative.
- Slots: one editable grid, three preset groups, each with a custom icon and a content group (heading + text). Nested composition is needed to preserve separate 20px and 10px gaps. Grid/group/icon/heading/text reuse existing blocks. Existing icon block uses source: custom and exact Figma SVG markup in custom_icon; no new icon, library entry or asset.
- Defaults: 3/3/1 desktop/tablet/mobile columns; grid gap 40px; cards 32px horizontal padding desktop, 0 mobile; icon 28px; 20px icon/content gap, 10px heading/body gap. Section padding 64px desktop and 56px mobile; background #f8f8f8. Page width inherits 1600px and mobile margins 16px.
- Output: section-spacing > container > content_for blocks. H3 card headings use sm/H5 visual scale; descriptions use body sm. Icons decorative with empty alt. All editable blocks keep Shopify attributes. Empty grid is safe; removing/reordering cards follows editor order.
- Runtime: Liquid/CSS only; no JS or external asset dependencies. One responsive DOM tree uses existing 768px/1150px breakpoints; no interactive controls.
- QA: validate preset/template tree, defaults and settings constraints; Theme Check, diff check, customization policy; verify exact icon/node mapping and 28px geometry. Live storefront/editor verification depends on an available preview.

## Validation

PASS WITH FOLLOW-UPS: Theme Check inspected 303 files: no errors, 35 warnings in existing files. Preset/template block types, setting constraints, custom SVGs and homepage order pass; git diff --check and check-custom assen-theme pass. Source assets map to desktop nodes 46154:389 (materials), 46154:3392 (production), 46154:3439 (care). SVG markup is preserved in existing custom icon settings; no new assets or icon-library entries. Live desktop/mobile and Theme Editor add/duplicate/reorder/save/reload checks remain unavailable because the local preview is stopped.
