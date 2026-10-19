# Featured collection 2: pagination catalog setup

Skill: `../agents-build-themes/skills/setup-store/store-content-media/SKILL.md`.
Store verified by connector: `layouthub-template-v2.myshopify.com` (USD).
Target: `templates/index.json` → `timeless_pieces` → `product-list`, collection `timeless-pieces-mara` (`gid://shopify/Collection/535348576555`).

## Mutation ledger

Added existing theme products, avoiding duplicate catalog records:
- Peekaboo Soft - Coffee: `gid://shopify/Product/15429385355563`, handle `mara-peekaboo-soft-coffee`.
- Peekaboo Soft - Sage Green: `gid://shopify/Product/15429385388331`, handle `mara-peekaboo-soft-sage-green`.

Connector add-to-collection confirmed 2 added; independent get-collection readback confirmed 6 total, all ACTIVE, original four remain first under MANUAL order. Prices/media/inventory/product records were not changed. Rollback scope is removal of these two memberships only, subject to user direction.

## Local configuration

Changed only this instance's `max_products` from 4 to 6. Desktop remains 4 columns; pagination desktop/mobile enabled, Bottom navigation unchanged. Six rendered products exceed four desktop columns, satisfying normal carousel overflow without changing runtime logic.

## Verification and delivery

JSON parsed and diff whitespace validation passed. Store content mutation is complete. Local template change has not been pushed by this task. Existing localhost:9300 preview was unreachable; direct storefront request could not connect, so Online Store publication and initialized pagination visibility were not independently verified in browser.
