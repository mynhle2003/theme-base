<!-- base-sync-state: {"repository":"https://github.com/Chieu2507/shopify-theme-base","branch":"dev","sha":"823f0b095da49be3c2f59d3eedd43453048496dd"} -->

# Base update history

## 2026-10-02 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `6d008b1ed65a29f14371861ccaeadeca77d4d4e5`
- Updated through team commit: `823f0b095da49be3c2f59d3eedd43453048496dd`
- Team commits included: 14
- Source changes:

```text
assets/bundle-builder.js            |  69 ++++--
 assets/button-loading.js            |  28 +++
 assets/component-bouncing-dots.css  |   5 +
 assets/critical.css                 |  51 +++-
 assets/editorial-text.js            |  97 ++++++++
 assets/quick-add.js                 |  36 ++-
 assets/quick-view.js                |  28 +--
 assets/section-parallax.css         | 167 +++++++++++++
 assets/section-parallax.js          | 175 ++++++++++++++
 blocks/_bundle-summary.liquid       |   2 +
 blocks/editorial-text.liquid        | 209 +++++++++++------
 blocks/parallax-item.liquid         | 451 ++++++++++++++++++++++++++++++++++++
 docs/parallax-section-build-plan.md |  71 ++++++
 sections/bundle-builder.liquid      |   1 +
 sections/parallax.liquid            | 405 ++++++++++++++++++++++++++++++++
 snippets/swiper-navigation.liquid   |   2 +-
 snippets/theme-button.liquid        |   2 +-
 tests/editorial-text.test.cjs       |  49 ++++
 18 files changed, 1707 insertions(+), 141 deletions(-)
```

- Included team commits:
  - `8b1a39821a6eaef092620549f533642ef57b3712` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `b94488dd7e8443d1acf7b54ff0d8713706c660fa` — Restore placeholder image overlay layers
  - `70200cafcf95465402494280bb99330b31bf1875` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `41ed5aa52ee3598de035deb49be44c0811bdbd6d` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `1e8b729af3b36a8ec4fc14f372bb48c741aa68e1` — fix: use tertiary colors for outline carousel navigation
  - `786bc243bfb2ff7a0d7d4d6a5bc8c86f4110a5c4` — Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev
  - `c175256c2f0afde479d5dd170d1f29e9dd0e65a7` — fix: inherit slideshow navigation text colors
  - `85665105f00dd94632fa4acf22aab20f95ffc25d` — Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev
  - `b2aeea388081f1c2e243a1d6d45f208f830b1d41` — Revert accidental Spinel sync to theme-base/dev
  - `d4415a1fe0f042a4d3f550cb241416fee0abb9ee` — Revert "fix: inherit slideshow navigation text colors"
  - `1e15831c4fb3e1db502906704556f487a67d4ced` — fix(bundle-builder): restore add clicks and loading state
  - `dcb1f65ce3d755f85162671ba9e4880c52823164` — feat(parallax): add composable section and inline editorial images
  - `ad8304346c4d4f59c883a96e305123557bc78609` — fix: release motion layer for nested backdrop blur
  - `823f0b095da49be3c2f59d3eedd43453048496dd` — Merge remote-tracking branch 'theme-base/dev' into codex/spinel-chieutt-dev


## 2026-10-02 — Update from upstream/dev

- Repository: https://github.com/Chieu2507/shopify-theme-base
- Branch: `upstream/dev`
- Previous team commit: `117a9d5a859bc588807376d13f15d478587af181`
- Updated through team commit: `6d008b1ed65a29f14371861ccaeadeca77d4d4e5`
- Team commits included: 42
- Original published update commit: `86c33283` — `chore(base): update base with 42 upstream commits through 6d008b1e` (this SHA preceded the current workflow and log changes).
- Source changes: 31 files changed, 1,848 insertions, 509 deletions.
- Update commit message: `chore(base): update base with 42 upstream commits through 6d008b1e`

### Content summary

- Updated bundle builder variant snapshots and collection pagination/facet request handling.
- Reworked comparison tables to support dynamic rows and isolated instances; added row/value snippets, migrations, and regression tests.
- Updated blog section context, cards, lists, and view-all behavior with migration and tests.
- Made featured collection banner roles dynamic and added migration coverage.
- Fixed the comparison-table migration to find static feature blocks outside `block_order`, with regression coverage.
- Fixed header homepage overlay behavior and finalized schema, blog template, and validation updates.
- Removed the temporary QA template snapshot.

### Included team commits

| SHA | Commit subject |
| --- | --- |
| `533e8452d4e36268d4583213b0ef03378845ea41` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `b23837bf05d65fabf3c49916444f8f4d06abd450` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `46b246561f42d38a40d1d729355345b6e0e54758` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `4ce6590f63b6f2d1cf4dbd88b2e1d26c269cf880` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `5acc9045b2b80d307a815ea4571b9bbebf39958a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `e7ec773cf15a75b882cb4e4156335ff264f83dec` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `9865ea2e295fbfe0c04f9092aa912d7247d8e3ad` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `7e1b1fc0141bc7aa2ce2c0f8de513e96147fe26a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `be00ab0b74afe0d533ac4164f8cc68dc499b9d9d` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `89b770c676bfeb6cba4b2f387c13760863f82a1e` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `268f9c77996af11c2f12b0dc0ee29a6529c55146` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `0488d39b3bbf0128e8ff5215137399bb7762a09c` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `86f3f0be4db092a7b600ea40d3243bf5ebf4a600` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `456dccb37f3aee5295b77d2ae86f67f8c90aa5ab` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `b45a30cf186ac165f4898edb1b774510761db99d` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `48acc623e0f0f8d126c96b462f579caeca8b62eb` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `58c4146837f336b551781c2e99d1c6951c12516a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `4bf05d2e3b13d3c23737d876b9b76e8399ca3b0a` | fix(bundle-builder): preserve added variant snapshots |
| `4b1469dd21eba18e58b5eaa569767f512451dff9` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `b659646962848a607d093fa1f704efe9575aa181` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `74ad2f4de6e40b7fce1cf39f11e2a3498f92ecf2` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `492298d3059dfbdf4b1bcafe35b6ad5691c6c333` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `e43b7db9481633064bfd41d21cda9d09ca7b1e00` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `0263c4417b3e3c54d3546e0431d5f22ff29b4bb5` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `71fcabc975933857c0d131f10d423fc5a86fdb3a` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `8a1142b2093a9730cf2b8fda6db88604e1251978` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `fda82db044d0f08de080a445410077016f00af19` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `556c5740f48f8877b755dece47fafbb83bec840d` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `4afcdd33080a283e663b66035a9b8256e1944d58` | fix(header): allow homepage overlay without sticky behavior |
| `297348329e38206675a785256fd17cf1d48d4a8b` | fix(collection): reject stale pagination and facet responses |
| `c713646d8ade7dff094c73fb098583d0f1cc6f36` | fix(blog): share section blog context with cards and view all |
| `5e7cae80ec98cafb20f0e66ed65108ad9a4fb3cf` | refactor(comparison): support dynamic rows and isolated table instances |
| `9eed125dfa6d8e8abb10483e52f1ae0a54154af0` | refactor(banner): make featured collection roles dynamic |
| `551d2c0fa4e8f54cac747564e88ed98333d93e56` | Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev |
| `497ba41570c345382e0daef7e9b2e9f547b4da31` | chore(theme): remove temporary QA template snapshot |
| `d45ed111e30395a6d96f73d5f9ed1d25fcb54298` | Merge remote-tracking branch 'theme-base/dev' into codex/spinel-chieutt-dev |
| `9b8084516221fe949b2bfd505a4ffc5fa5172d9b` | fix(theme): validate merged schema docs and blog template settings |
| `37b3f05ec15bba6e77fb7aece1f0d7d5cdd591fe` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `22e4ddf92ac8e02021ca37d037e2bff9c16e7f66` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `6c8bc2ca3ca66dadf286365c4f7ef9e44bfd3e2f` | Update from Shopify for theme spinel-theme/codex/spinel-chieutt-dev |
| `ceeb5207898c9015821ad1d66d1dce741a42bf09` | Fix comparison table migration for static feature blocks |
| `6d008b1ed65a29f14371861ccaeadeca77d4d4e5` | Merge remote-tracking branch 'origin/codex/spinel-chieutt-dev' into codex/spinel-chieutt-dev |
