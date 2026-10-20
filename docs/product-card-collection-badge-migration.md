# Collection badge migration — 2026-10-20

- Role: global commerce badges; placement: existing product-card overlay.
- Context: product.collections; owner: existing Badges → Collection badge Theme Settings.
- Slots: existing three label/collection-list rules; no new settings or data logic.
- Output: existing manual badge class with former card-tag appearance transferred to card-scoped CSS.
- Runtime: existing collection matching, status precedence, product-page badge-prefixed tags and escaping.
- Responsive: retain current badge geometry, wrapping and mobile/desktop behavior.
- QA: JSON/schema values, full Theme Check, actual Liquid fixtures for membership/status/escaping/product-page behavior, catalog before/after coverage. Browser/Figma comparison remains pending.

No collection badge rule is enabled for this theme.

Applied locally. JSON/schema and Liquid fixture checks pass; Theme Check has no errors. Live storefront/Figma comparison pending. No commit, push or store theme save.

## Final applied validation

Actual local worktrees/configuration were checked with store membership readback: 63 theme/catalog card comparisons passed across all five affected themes; collection gating, status precedence, escaping, product-page legacy badges and the product-card entry point passed. Full Theme Check: 0 errors, 4 warnings for this theme. git diff --check passed. No commit, push or theme deployment. Live desktop/mobile/Figma visual comparison remains pending. Existing CSS appearance values were transferred to native collection badges.
