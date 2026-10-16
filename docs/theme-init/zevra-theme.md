# Zevra initialization

Status: local configuration prepared; configured-unverified regions plus explicit blocked/skipped regions below. No preview deployment, commit or push. Homepage was never reset.

- Mode: variant, Mara → Zevra.
- Branch: `theme/zevra-theme`.
- Worktree: `/Users/beae/Documents/GitHub/Layouthub v2/zevra-theme`.
- Source: `theme/mara-theme` at `b99df73e385d9acc37872335f6d58abad3dc1a79`; local/origin equal and source clean at fork on 2026-10-16.
- Initial `git diff <source> HEAD --` empty: inherited code/config/presets exactly.
- Personal base checkpoint: `de84ae60437b6369b61addd025dd75d1434706be` (inherited marker).
- Style Guide: inherited; not re-read or reapplied.
- [Customization record](../theme-customizations/zevra-theme.md); [variant updates](../variant-updates/zevra-theme.md).
- Figma: `bH9A5237I07NWt19Cua9gL`, desktop `47062:13152` (1920 ×12864.825), mobile `47230:15533` (375 ×12231.3).
- Evidence: Figma MCP metadata for both full frames; full desktop screenshot; detailed desktop/mobile hero context/screenshots. Full-frame context is sparse and cannot be used alone for configuration.
- Store: `layouthub-template-v2.myshopify.com`, explicitly confirmed by user; connector verified same store, USD.
- Authorized: local configuration/presets and content/media on confirmed store. No deployment, publish, commit or push requested.
- Scope: homepage `templates/index.json`, header/footer groups and relevant existing Add section presets. Other templates untouched.
- Before edits: back up composition under ignored `output/zevra-init/`; preserve matching instance IDs and configure deltas, never reset template.
- Old Mara-only regions absent in Zevra: `hero_veneta`, `rich_text_story`, `hero_craftsmanship`, `shop_the_look`, `our_stories`, `customer_story`; classify individually before removal/replacement, not a blanket reset.
- Media ledger: to be created after audit/readback; do not reuse source ignored session or CLI state.

## Layout → existing preset/instance map

| Region | Desktop node | Mobile node | Candidate section/block | Decision | Target / remaining evidence |
| --- | --- | --- | --- | --- | --- |
| Announcement | 47062:13153 | 47230:15534 | announcement-bar | reuse | header-group; verify text |
| Header | 47062:13159 | 47230:15535 | header | change | header-group; disable transparent home overlay, Zevra logo |
| Hero pair | 47062:14049 | 47230:15536 | image-cards → image-card ×2 | add | existing image-cards preset; 2 columns → stacked, media pending |
| New arrivals | 47062:13173 | 47230:15549 | featured-collection | reuse/change | new_arrivals; preserve block IDs, verify collection |
| Classic collections | 47062:13183 | 47260:13376 | collection-list | reuse/change | classic_collections; 2 large + 4 small desktop needs schema check |
| Scrolling values | 47093:3157 | 47230:16368 | custom-section → marquee | reuse/change | scrolling_values; move above journeys |
| Crafted for journeys | 47138:5610 | 47230:16385 | collection-list | reuse/change | crafted_journeys; three cards desktop → stack |
| Countdown | 47062:14889 | 47230:16425 | countdown | reuse/change | limited_release; compare responsive button placement |
| Image comparison | 47062:13259 | 47230:16449 | custom-section → image-comparison | reuse/change | choose_colour; same source subject, verify assets |
| Press testimonial | 47062:15032 | 47230:15700 | candidate existing testimonial or custom-section blocks | pending | inspect logo selector + active quote capability |
| Editors pick | 47062:13287 | 47230:15718 | collection-tabs | reuse/change | editors_pick; retain tab dependencies |
| Craft stories ×3 | 47062:14686 | 47230:15732 | candidate image-text-split-layout or existing preset | pending | inspect three 4:3 image/text rows, mobile stack |
| Brand logos | 47062:14259 | 47230:15767 | custom-section → marquee/image | pending | inspect existing logo preset |
| Timeless pieces | 47069:15184 | 47230:15780 | featured-collection | change | timeless_pieces: no banner in Zevra; reuse matching featured preset |
| Timeline | 47230:18953 | 47230:18991 | timeline | pending | inspect vertical year tabs; gap if unsupported |
| Community gallery | 47069:17441 | 47230:15806 | candidate gallery-custom / gallery-image-grid | pending | 3 + 4 desktop, mobile grid; inspect existing controls |
| Footer | 47062:13373 | 47230:15821 | footer | reuse/change | footer-group; Zevra logo and source copy |

## Checkpoint

Current checkpoint: full desktop/mobile survey complete and feasible local composition configured. See the final status table and gaps below. No storefront verification or deployment. Known hero gap: image-card supports fixed aspect ratios, not exact 960×800 /375×500 geometry; choose closest permitted ratio and document, do not add height controls.

## Header / Hero checkpoint

- Header retains inherited IDs/menu and white scheme; transparent overlay disabled and bottom separator enabled. Global logo switches to exact Zevrā artwork, verified from actual nested Figma instance after generated parent asset incorrectly returned Mara. Width nearest existing valid values144/80 versus143.322/79.623. Typography/palette unchanged. Header change applies to all page consumers of global logo; unrelated template composition untouched.
- Hero reuses image-cards preset and image-card/header/heading/text/button controls: two equal desktop columns, stacked mobile; exact copy; white scheme and20% black overlay; padding56/80 desktop and16/40 mobile; content gap32/24 and heading-copy gap16/8. Old hero_veneta instance individually replaced by hero_pair; remaining homepage unchanged pending section comparison.
- Both hero AVIFs and exact Zevrā logo uploaded once and read back READY. Rejected Mara artwork never uploaded. References bound in local instance and Add section preset; source files staged locally only under /tmp.
- Hero gap: ratio5:4 gives768px at960px card width versus800px design; mobile3:4 matches375×500. Current renderer uses centered crop; desktop design is top-aligned. No control/implementation added. CTA destinations await collection audit.
- Header/hero: configured-unverified; no preview deployment authorized. Image-cards consumers collection.json/index.spinel-sync.json retain their instance values.

## Final local checkpoint — 2026-10-16

All region pairs in the map above were inspected through full Figma design context and screenshots, with sparse full-frame responses supplemented by section-level reads. Actual logo instance overrides were checked through read-only Plugin API because parent generated code returned stale Mara assets/dimensions. Desktop footer logo is191.095×48, mobile143.322×36; existing controls choose190/144. Header chooses144/80 for143.322/79.623.

| Region | Local result | Status / next action |
| --- | --- | --- |
| Announcement / Header / Footer | Inherited groups/IDs, copy/menu references and global style retained; white Header with separator and exact Zevrā logo; Footer logo190/144 | configured-unverified; navigation/resource destinations need live preview/readback |
| Hero | Existing image-cards preset → two image-card/header/heading/text/button trees; exact two source assets and copy | configured-unverified; exact800px desktop height/top crop unsupported; CTA destinations not supplied |
| New arrivals | Reuses original instance/nested IDs;32/24 role through xl heading, left desktop/center mobile;6 products from8 available, progress/navigation enabled | configured-unverified; original product card/media/currency retained; mobile card width depends on native preview control |
| Classic collections | Existing instance retained as disabled draft; no fabricated Work Bags collection/count | blocked: source is6 cards in2+4 desktop rows /6 stacked mobile; existing5 collection references and uniform-list implementation differ. Work Bags absent; actual counts crossbody2, mini2, top handle4, evening1 versus3 in Figma. Requires correct resources/membership and approved mixed-grid routing; do not alter Mara shared catalog to force counts |
| Text marquee | Original preset/tree/IDs/media/crop settings retained; moved before journeys | configured-unverified; all3 Files read back READY |
| Crafted for journeys | Original collection-list/grid/card tree retained; top0 and bottom96/56; three source resources read back with4/3/5 products | configured-unverified; source resource titles retain Mara suffix by store naming policy |
| Countdown | Entire original dynamic group/timer/responsive button tree retained, including62h33m recurring duration | configured-unverified; inherited duration retained, no invented calendar expiry |
| Image comparison | Original custom preset/block IDs and both verified assets retained; full-width container, width cap disabled,7:3 desktop /5:3 mobile | configured-unverified |
| Press testimonial | Reviewed Press, testimonial and generic composition candidates; removed the different inherited split testimonial from target page | skipped: native Press puts logo controls below content and lacks source arrow/progress controls; other testimonial sections differ. Needs separate implementation request for source layout/interaction; no fake carousel or repeated unknown quotes |
| Editor’s pick | Original two tabs, shared collections and card dependencies retained; horizontal desktop header/tabs and centered mobile; progress enabled | configured-unverified; source Best Sellers6/New Arrivals8 audited; existing max5 retained |
| Three craft stories | Existing image-text-split-layout preset with group/image + group/eyebrow/heading/text/button, three separate instances; exact Figma copy (including MĀRA mentions), images and4:3 responsive layout | configured-unverified; source scroll stacking annotation has no existing control, so no custom motion added; first Discover the Craft destination absent |
| Logo strip | Existing Custom section + marquee/_marquee-image, ten exact brand originals in source order | configured-unverified; nearest width188 vs186 desktop,96 mobile. Original ratios preserve artwork; exact fixed2:1 logo slots/individual fill transforms unsupported, so section height differs |
| Timeless pieces | Reuses Featured collection tree from New arrivals with Timeless collection; removes Mara-specific banner composition,4 cards, Shop all | configured-unverified; collection has exactly4 products and native overflow-gated Shop all/progress may not appear. Do not fabricate extra product or change runtime condition |
| Timeline | Existing timeline/left tabs/timeline-slide tree; only2018 source-backed text/image stored as disabled draft | blocked: no source content/media for2020/2022/2024; do not clone2018 text into other years. Existing controls can place year tabs left; final mobile geometry unverified |
| Community gallery | Existing gallery-custom → row/_column/group/image-card/image, then horizontal4-image group; source3+4 desktop / feature then2+4 mobile intent, no implementation change | configured-unverified; first column nearest33% versus33⅓%; native group sizing/crop needs preview |

### Preset reuse and preservation

- Matching original instance IDs retained for New arrivals, Classic collections draft, text marquee, crafted journeys, countdown, comparison and Editor’s pick.
- Hero individually replaces hero_veneta; craft stories/brand logos/timeline added through existing section types; gallery and timeless instance IDs retained with appropriate existing-section compositions.
- Removed individually after desktop/mobile comparison: rich_text_story, hero_craftsmanship, shop_the_look, our_stories, customer_story. Their source compositions remain in ignored backup and Git source snapshot; no blanket template reset.
- Add section presets updated only for the selected existing compositions; names/categories preserved. Saved instances in all other templates untouched.
- No Liquid/HTML outside schema, CSS, JS, snippets, SVG implementation, option definitions or block allow-lists changed.

### Media / validation / permissions

-20 new AVIF uploads total: exact Zevrā logo,2 hero images,3 craft images,3 additional gallery images,1 Timeline image and10 brand logos. All read back READY. Original rejected Mara logo and Timeline placeholder were not uploaded.
- Reuses source Files for3 gallery images,3 marquee images and2 comparison layers; reuses shared Mara collections without mutation. IDs/references in [media ledger](zevra-media.json). All selected new assets decoded and visually checked before upload.
- Local backup: ignored output/zevra-init. Temporary source assets and verification scripts under /tmp; no credentials or source preview state copied.
- Configuration schema/range/options/block tree validation: pass, accounting for explicit static content_for slots. Theme Check:385 files,0 errors,6 inherited ExcessiveSettingsCount warnings. Implementation-only diff check and whitespace check required at handoff.
- No deployment/publish/commit/push requested or performed. Desktop/mobile storefront and Theme Editor lifecycle remain unverified; Figma screenshots are design evidence only.
- Next: supply/source missing Classic/Timeline content and request implementation separately for Press/mixed-grid gaps where necessary; authorize a Zevra preview upload to verify existing configurations. Do not deploy over Mara development theme.
