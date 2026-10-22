# Kinetra initialization

- Mode: variant, Virelle → Kinetra, requested 2026-10-21.
- Source: `theme/virelle-theme` at `8243250cbfed994f89fe36b8ecb6a792bf605fe6`; same SHA as local tracking ref `origin/theme/virelle-theme` when inspected, no fetch/pull/merge.
- Owner clarified source changes were discarded; source tracked tree is clean. Ignored/untracked output is excluded from snapshot.
- Branch: `theme/kinetra-theme`.
- Worktree: `/Users/beae/Documents/GitHub/Layouthub v2/kinetra-theme`.
- Base checkpoint: `de84ae60437b6369b61addd025dd75d1434706be`, inherited marker preserved.
- Style Guide: **inherited** from source SHA, no re-reading or rewriting typography/color tokens.
- [Customization record](../theme-customizations/kinetra-theme.md); [variant update record](../variant-updates/kinetra-theme.md).
- Desktop: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177 — Homepage 2, 1920 × 13976.85px, verified through Inspect.
- Mobile: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513 — Mobile, 375 × 12631.37px, verified through Inspect.
- Figma: MCP design-context limit reached for View seat. Read-only CUA/Chrome fallback, profile `minhle@beae.com` verified via Chrome profile UI. No design writes. Detailed section inspection in progress.
- Store: `layouthub-template-v2.myshopify.com`, confirmed by owner; same destination as Virelle. Shopify connector confirmed the domain and USD currency.
- Scope: homepage `templates/index.json`, header/footer groups and corresponding registered presets through existing controls. Other templates and implementation remain inherited.
- Permissions: local initialization/configuration; no further commit/push/theme deployment/publish or Theme Editor save requested.
- Initial verification: `git diff SOURCE HEAD --` empty before creating these records; no `.shopify` state and no personal base-history file copied. Source checkout untouched. Direct Git worktree used because `new-theme` requires main and has no variant source-ref support.

## Accepted delivery scope — 2026-10-21

Owner explicitly chose **Giữ phạm vi cấu hình hiện có** after reviewing the implementation gaps. Deliver the existing-control configuration as the final local init checkpoint. Do not expand Liquid/CSS/JS, schema controls, allow-lists or layout implementation. The unsupported collection rows and bundle remain skipped by the init contract; they are not pending implementation authorization. Crafted and Timeline remain disabled resource-dependent drafts. Other active regions retain the documented small layout/action differences.

A final supported Figma PNG export attempt registered the download listener before clicking Export Image; no download event occurred within15seconds. The image inspector still verified1820×780,21:9,Crop. Prior original download is reusable; no substitute screenshot or repeated upload was made. Resource requirements to enable the drafts: exact desktop/mobile Crafted crop and focal-point readback; authored second popup copy if that dot is included; original2015/2020/2025 Timeline stories/media.

Configuration validation re-run: no new schema diagnostics,25 total/13 active homepage sections,12 preset-only Liquid changes, logo-only global identity delta,25 unique READY media resources and git diff --check PASS. Last full Theme Check remains applicable:401 files,0 errors,7 inherited warnings; only documentation changed since that run. Storefront/Theme Editor visual QA remains unverified because theme preview upload was not authorized. No deployment, publication, commit or push.

## Current checkpoint

Configuration checkpoint, 2026-10-21: 13 active homepage sections, 25 total including preserved disabled source instances and two blocked drafts. Hero, collage, marquee, collection tabs, three editorial rows, Highlights, countdown, benefits, blog, gallery and locations use existing sections/blocks. Header/footer identity is configured. All active new regions are configured-unverified; no storefront preview or theme deployment was performed. Original assets: 24 AVIF images and one video, all READY. Blog Kinetra has three published reference cards and is bound in both template and preset. See latest validation and gaps below; earlier checkpoints are historical.

## Survey map — candidates pending detailed inspection

| Order | Desktop / mobile region | Existing candidate and inherited consumer | Planned action | Status / next evidence |
| --- | --- | --- | --- | --- |
| 1 | Header / Header (announcement) | announcement-bar / announcement-bar | change delta only | pending: copy, spacing, logo and menu |
| 2 | Header Desktop / Header Mobile | header / header | change delta only | pending: logo resource, both layouts |
| 3 | Hero banner 3 / Hero banner 2 | hero / slideshow; image-text-split-layout alternative | compare/change existing if controls fit | pending: split layout, marquee, media |
| 4 | Collection list 31 / Collection list 31 Mobile | collections-with-background / collections_with_background_VE8aHc | compare existing vs preset | pending: outlined repeated titles and hover imagery |
| 5 | Image with text 1 / Image with text 1 Mobile | image-text-card-grid, image-text-stacked-bands, custom-section existing blocks | add closest existing preset | pending: asymmetric collage structure |
| 6 | Scrolling text / same | custom-section / virelle_marquee | reuse/change | pending: text and spacing |
| 7 | Hotspot 05 / Hotspot 05 Mobile | hotspot, hotspot-gallery, hotspot-full-width-carousel | add existing preset | pending: gallery and product interactions |
| 8 | Featured collection 2 / Featured collection 3 Mobile | featured-collection / featured_collection_yHCtVP | reuse/change | pending: product layout/resource |
| 9 | Image with text 2 / Image with text 4 | image-text-split-layout | add existing preset | pending: image/text, responsive order |
| 10 | Hotspot 2 / Hotspot 04 Mobile | hotspot-full-width-carousel or hotspot-gallery | add separate instance | pending: product hotspot cards |
| 11 | Countdown timer 06 / Countdown timer 06 Mobile | countdown / virelle_flash_sale | reuse/change and move | pending: timer semantics and media |
| 12 | Product bundles 2 / Product bundles 2 Mobile | bundle-builder | inspect existing preset | pending: products, pricing and bundle behavior |
| 13 | Icon with text Desktop / Mobile | custom-section / icon_text_cards_qT6mLV | reuse/change and move | pending: icon availability, row behavior |
| 14 | Timeline / Timeline | timeline | add existing preset | pending: panels and media |
| 15 | Blog post 1 / Blog post 1 Mobile | blog-posts / blog_posts_cLyPkK | reuse/change | pending: article resources and layout |
| 16 | Gallery / Gallery | gallery-full-width-strip, gallery-image-grid, gallery-custom | add closest existing preset | pending: arrangement, media |
| 17 | Map / Map | location-map | add existing preset | pending: location content and supported layout |
| 18 | Footer / Footer | footer / footer | reuse/change delta | pending: newsletter, copy and logo |

Inherited regions not represented above (collection tabs, featured collection banner, activity collection-list, shop-the-look, featured product, video reviews, secondary hero, testimonial, standalone signup) are retained until detailed survey establishes individual remove decisions. No homepage reset. Existing reusable IDs must be preserved. Composition backup will precede mutations. Missing controls are gaps; no new implementation during init.


## Local configuration checkpoint — 2026-10-21

Owner requested continuing from already-read evidence when browser access was unavailable. After the owner said access was re-enabled, the browser tool still returned `Local browser use is disabled in Work settings`, including after runtime reset. No native-app/HTTP workaround is used to bypass that boundary. Figma MCP remains quota-limited.

### Verified survey evidence

Desktop render: `/Users/beae/Downloads/Homepage 2.png` (1920 × 13977), exported via Figma UI. Mobile render: `/Users/beae/Downloads/Mobile.png` (375 × 12632). Both are survey-only, never implementation media. Section geometry was read through Inspect; padding labels such as 24/12 are token steps (96px/48px), following the existing project spacing mapping. Rounded exported page dimensions differ slightly from Inspect's fractional heights.

| Region | Desktop node / height | Mobile node / height | Decision / delta |
| --- | --- | --- | --- |
| Announcement | 48622:20346 / 31px | 48864:13075 / 31px | reuse scrolling copy, 8px vertical padding, scheme-3 |
| Header | 48622:16469 / 72px | 48864:13076 / 64px | reuse tree, menu/resources and spacing; change overlay true → false and dark logo only |
| Hero | 48622:16442 / 800px | 48249:15448 / 668px | hero supports stack 50/50 desktop and image-first mobile; blocked: original image and inner marquee measurements; preserve inherited instance until ready |
| Collections | 48190:17304 / 617px | 48249:14526 / 321px | pending: repeated outlined title/image row needs candidate block-tree audit; preserve inherited consumer |
| Collage | 48622:21390 / 1044px | 48622:21452 / 1696.53px | pending: desktop tall left image plus two 2-row columns; mobile order is tall image → copy → bottom middle → top right → bottom right; missing source images |
| Marquee | 48190:2388 / 130px | 48249:15473 / 72px | change existing custom preset/instance: scheme-3 → scheme-1, desktop padding96 →24, mobile32 →12; retain exact text and outline blocks |
| Crafted with care | 48205:19414 / 981px | 48249:14582 / 402.25px | pending: 2 visible information hotspots, original image/focal point/coordinates missing |
| Best sellers tabs | 48205:18039 / 1098.5px | 48249:15658 / 753px | reuse collection_tabs_ihC66t; same eyebrow, 3 outlined tabs, 4 desktop cards / 1 + preview mobile, centered Shop all; resource readback and preview pending |
| Empower / Inspire / Belong | 48190:16766 / 2581.71px | 48249:15570 / 1631px | pending: three image/copy pairs, dark background; desktop images left and copy right, mobile copy before each image. Need source imagery and behavior evidence before choosing scrolling-cards vs static rows |
| Highlights | 49274:24623 / 974.83px | 48249:14694 / 749.17px | pending: header left desktop / above image mobile, product-callout gallery; missing exact media and hotspot coordinates |
| Countdown | 48205:19162 / 365px | 48249:14725 / 414px | pending: dark panel, timer filled numbers without separators, vertical outlined edge copy; missing panel tree audit; no invented deadline |
| Matching sets | 48190:17713 / 1078px | 48249:14796 / 1169px | pending: image hotspot left and 3 products right desktop; image → header → swipe products mobile. Existing bundle-builder has no image slot; assess existing block composition before claiming support. No discount mutation |
| Benefits | 48190:2443 / 241px | 48249:14884 / 217px | pending: one benefit at a time with 3 dots both viewports; inherited 3-column composition differs, white embedded SVG fills require exact dark-source icons |
| Timeline | 48190:17078 / 841.33px | 48249:15823 / 653.67px | pending: 2010 / 2015 / 2020 / 2025, scheme-2; missing imagery and later panel content |
| Blog | 48190:17624 / 883.67px | 48249:14908 / 1346px | change existing instance/preset: scheme-1, centered header, 3 stacked landscape cards desktop / 1 column mobile, tag → title → date, no excerpt, bottom solid View more. Keep existing blog reference pending readback |
| Gallery | 48190:16669 / 645.8px | 48249:14940 / 353.5px | pending: dark header, full-bleed image strip; no external Instagram handle invented |
| Locations | 48190:17028 / 1024px | 48249:15888 / 854.25px | pending: dark content with 3 addresses, image right desktop / bottom mobile; missing original mall image |
| Footer | 48864:15453 / 568px | 48864:18490 / 1236px | pending: same newsletter and 3 menu columns; Kinetra white logo not downloaded. Preserve source record and references |

### Changes applied from sufficient evidence

- Header and blog registered default presets mirror their target local instances; original names/categories preserved. Custom `Text marquee (custom)` preset is updated by its existing exact name only; unrelated custom presets remain untouched.
- `current.logo` becomes verified `shopify://shop_images/kinetra-logo-dark.avif`. Header logo widths80 →88px desktop/mobile. Original Figma logo node52983:3292 is89 ×20px;88px is the closest existing 4px-grid option, a known1px width gap. Global typography/color schemes/saved presets are inherited unchanged. Footer white logo remains pending, so inherited `logo_transparent` is intentionally unchanged.
- Dark logo provenance: Figma header Logo node52983:3292, exported4× as `/Users/beae/Downloads/Logo.png` (356 ×80), converted and decoded as AVIF without recoloring/redrawing. Uploaded once as `kinetra-logo-dark.avif`, ID `gid://shopify/MediaImage/46742397223211`, CDN `https://cdn.shopify.com/s/files/1/1024/2192/2091/files/kinetra-logo-dark.avif?v=1792547903`. Readback confirmed fileStatus/status READY, MIME image/avif, alt Kinetra.
- `templates/index.json` retains all original section IDs/order. Out-of-target inherited regions have not been bulk removed while new target regions still lack resources. This is a partial configuration checkpoint, not a finished Kinetra homepage.
- Pre-change composition/config/preset backup: `/tmp/kinetra-init-backup-2026-10-21/` (outside Git).
- Header, marquee and blog: `configured-unverified`; collection tabs: reused, resource/preview verification pending. All other target regions remain `pending` or blocked by browser/media evidence. No deployment, Theme Editor save, publish or commit/push.


### Verification at handoff

- `shopify theme check --path /Users/beae/Documents/GitHub/Layouthub v2/kinetra-theme --fail-level error --no-color`: PASS, 398 files, 0 errors / 7 inherited warnings. Warning files are untouched: `_bundle-summary`, `_comparison-table-features`, `comparison-table-column`, `countdown-timer`, `editorial-text`, `group`, `css-variables`.
- JSON parsing/order/duplicate-ID checks and recursive block type, placement, option/range validation passed with no new diagnostics compared with inherited source. Header group has 0 diagnostics. Homepage has 13 existing schema-value diagnostics, preserved outside this delta.
- Section implementation and schema definitions outside `presets` are identical to the source snapshot. Global current changes are exactly logo, logo_width, logo_width_mobile; saved presets, typography and palette are unchanged.
- `git diff --check`: PASS.
- Shopify Toolkit `validate.mjs`: unavailable; bundled installation lacks `@shopify/theme-check-common`. The independent installed Shopify Theme Check above succeeded. No dependency installation or plugin modification attempted.
- No storefront/Theme Editor QA or deployment. Browser access still reports disabled after the owner said it was enabled and after session reinitialization. Do not repeat uploads or create a new worktree when resuming.
- Next checkpoint: restore browser access, inspect/export original white logo and hero Image node48622:16443, audit/reuse media on confirmed store, then finish Header/Hero and continue in map order. Existing uploaded dark logo is READY and must be reused.


## Resource readback follow-up — 2026-10-21

- Browser discovery still returns no browsers and `Local browser use is disabled in Work settings`; native Chrome control is not used to bypass the browser restriction. No further Figma reads/downloads or storefront verification possible in this session.
- Same-store collection handles verified live: `virelle-bestsellers` (6 products), `virelle-new-arrivals` (10), `virelle-under-40` (6). All satisfy existing `products_count > max_products` at limit5. Online Store availability and initialized CTA rendering remain unverified; do not label the entire tabs QA complete from Admin counts alone.
- Blog `virelle` / `gid://shopify/Blog/126027432235` has exactly2 published articles (pagination exhausted): Halle Berry releases spring collection (Collection), Athleta is pushing the inclusivity needle forward (Fashion tips). Both match the first2 Figma cards. Third Figma card **The journey from fitness to fashion** (Story) is absent. Its original cover and article content are not obtained, so no article was fabricated or existing shared blog mutated. Blog status is now `blocked-resource` for the third card, in addition to unverified storefront rendering.
- Existing Virelle hero source was compared with saved survey evidence and is a different photograph/crop from Kinetra; do not reuse it for Kinetra's hero. Downloaded generic Image PNG files predate this initialization and have no verified Kinetra provenance; they were excluded.
- Receipt: [resource readback](kinetra-resource-readback-2026-10-21.json). This follow-up only adds evidence; configuration is unchanged, prior Theme Check result remains applicable. No new worktree, repeated upload, commit, push or deploy.


## Browser-restored follow-up — 2026-10-21

Computer Use successfully reconnected to the previously verified Chrome profile. Hero image node48622:16443 was selected and its original image downloaded through the Inspect link (2248×2984 JPG). Converted to AVIF and decoder verified; uploaded once as kinetra-hero.avif; readback READY/statusREADY, MIME image/avif. File ID46742711927083. Hero Content node48622:16444 is vertical, 960×800, space-between, #181818. Target desktop Hero height800 is supported by existing medium; existing stack layout supports50/50 and image-first mobile.

Hero instance slideshow is changed in place from slideshow to existing hero; source ID and position retained. Exact image, eyebrow, H1 and Shop now are configured; no implementation changes. Current hero cannot independently put an edge-to-edge marquee at the top of its content panel while anchoring the text at the bottom, or hide only that marquee on mobile. The decorative Hero marquee is omitted and recorded as a gap. Mobile stack image has min-height320 instead of target375; no existing mobile value expresses375 exactly. Native adapt is retained rather than calibrating implementation during variant init. Header logo and global Style Guide are retained.

Countdown: reuse virelle_flash_sale, remove the source-specific image column and its outline timer layout, configure a native horizontal header/timer panel, filled numbers and labels without colons. Reuse inherited recurring12hours18minutes behavior; the design's displayed06seconds is a snapshot, not an authored deadline. No discount or sale scheduling mutation. Vertical rotated edge marquee and mobile button placement below the timer are missing controls and remain gaps.

Collage layer48622:21394 is a true VIDEO, not a still image: Inspect names vid-info.mp4 (520×852 placement). Original18,272,567byte video downloaded through the supported button. No poster/screenshot substituted. Further source extraction stopped when Figma reported WebGL unavailable and redirected every design tab to file browser; retry through recent-file UI did not restore the design. Computer Use itself remains enabled. No Chrome settings changed or other task tabs modified. Owner notified while local work continues.


### Collage draft and composition decisions

Original collage video is READY on Shopify Files as kinetra-collage-confidence.mp4 (gid://shopify/Video/46742772842795); source probe H.264/AAC,1536×1790,5.833s; Shopify duration5870ms. First/middle/last decoded frames match the tan activewear model in the supplied collage. Reused source audio; autoplay uses existing muted runtime. File search exhausted media_type:VIDEO pagination before upload; no matching existing clip. Stored in the shared media ledger; never upload it twice.

Use Image text card grid with existing Group→3 Groups; left Video, middle Copy→Image, right Image→Image. Native horizontal Group stacks on mobile in the required column order. Copy is transcribed from source render. Three image nodes48622:21400,48622:21402,48622:21403 still lack original sources after the WebGL failure. The template instance kinetra_collage is therefore disabled; no screenshot/thumbnail substituted. Registered default preset is synchronized and remains editable. Known option gap: video aspect-ratio0.6 is closest existing0.1step to520/852 (0.6103), not an exact crop.

Per-region source decisions from the completed survey (settings preserved for recovery): source motion365 featured collection banner, activity collection list, separate featured collection, shop-the-look, featured product, video reviews, secondary video hero, testimonial and standalone newsletter have no corresponding Kinetra target region; disable these instances individually. Collection background is also disabled: its native whole-background hover differs fundamentally from the three outlined looping title/image rows and is not an adequate match. Original icon columns are disabled until exact dark icons and carousel composition can be obtained. No instances deleted. Target order among configured regions: Hero→collection region(disabled source)→collage(disabled draft)→marquee→best-seller tabs→Countdown→benefits(disabled source)→blog. Missing intervening target regions stay explicitly blocked in the survey, not represented by unrelated source content.


### Collage media completed after Chrome recovery

Owner restored canvas. Downloaded exact images through Inspect: shorts node48622:21400/hash9858e347b04676b52278a4308669134e16617135; back48622:21402/hashaa40b00239737379086feea1ee67767589397eb3; together48622:21403/hash4bc1d111592e893df7dddd8ef9beb953fa351c72. Each original1365×1706; decoded and compared with source collage. Converted AVIF, uploaded once per image and read back READY/MIMEimage/avif. Template and registered default preset references synchronized. kinetra_collage is enabled and configured-unverified; prior resource blocker resolved. No storefront upload/preview claimed. Browser's original-download click can complete on disk even if downloadMedia's subsequent event times out; avoid duplicate requests, check exact observed hash filename first.


## Remaining region configuration — 2026-10-21

Chrome canvas restored by owner; later read-only media downloads succeeded. New images converted with AVIF decoder validation and uploaded once; batch readback returned READY/statusREADY/image/avif for every image before binding. White footer Logo node52995:6585 exported4×(712×160), untouched artwork and alpha; current.logo_transparent now uses Kinetra white. Header/Footers remain inherited except this identity setting; Footer preset/group composition remain unchanged.

- Crafted with care: original image2048×1365 from node48205:19418; source desktop1820×780(21:9), mobile343×257.25(4:3) at48249:14586. Only the visible bra popup has authored content: FLEXFIT TECHNOLOGY and removable-padding paragraph. Desktop point54/40, mobile56/34 measured on Figma screenshots; waist point47/82 desktop,44/72 mobile has no authored popup copy. Existing product-callout has no arbitrary ratio control; original image adapt is3:2, and isolated image export did not yield a crop file. Save a DISABLED accurate-content draft with the bra popup only, until exact crop/focal point can be verified. Do not display misanchored hotspots or invent waist content. Image focal point cannot be updated through the inspected Image/FileUpdateInput Admin schema; Shopify Files UI save/readback and storefront verification remain pending.
- Empower/Inspire/Belong: use3 existing Image text split layout instances, static rows (no annotation proving stacking). Exact original photos and text; first row owns Together/Empower. Inspire. Belong heading. Desktop image left/content right, 7:6 image. Mobile native order remains image then copy; Figma copy before image is a known missing reorder control. No CSS/implementation added to force it. Default Add section preset contains first-row composition; other2 instances preserve distinct content/media.
- Highlights: existing Hotspot gallery, header beside desktop/above mobile,3 exact media sources,6:7 ratio,2 desktop columns/1 mobile, preview and arrows. Reuse existing verified product Soft Motion Leggings handle virelle-soft-motion-leggings,45USD,pink product media matches Figma. Minor source title-spacing difference retained rather than changing shared catalog. Only first slide has a confirmed product; remaining2 slides retain images without fabricated product mapping. Native product link remains View product: Figma's Add to cart is not promised by a relabeled navigation link. Product popup appearance, focal point and mobile crop not storefront-verified.
- Benefits: existing custom preset Icon width text (custom), Carousel→3 Slides reusing inherited benefit copy. First existing Icon setting uses exact dark leaf SVG exported from node48190:2449; no SVG implementation/renderer/path redrawn. Other2 icons lack dark source, so remove only their icon instances, retaining text. One slide per viewport,3dots, no navigation arrows. First slide matches supplied visible content; later slide copy is inherited, not newly authored Figma evidence.
- Timeline: existing Timeline with1 authored2010 slide, exact photo/eyebrow/story. Save DISABLED draft;2015/2020/2025 dates are visible, but their stories/media are absent from the provided static frames. No duplicate story or fabricated brand history used to fill tabs.
- Gallery: existing Gallery carousel,7 exact original photos,6 desktop columns/2 mobile, square ratio and4pxgap. Reuse highlight-pink image for gallery slot3 without re-upload. Header Our Instagram/Be active. Be social. and @ATHLEISURE label. Unverified brand social URL remains# locally. Native carousel does not support the reference's initially half-clipped leading image; gap recorded.
- Locations: existing Location map with exact mall image and Sydney/Ho Chi Minh/London address copy read from Figma, header above address list, media right desktop/below mobile. Source sample addresses are demo copy, no claim of real Kinetra store ownership. Direction links omitted because no target URLs were supplied. Native5:7 column split is wider on the image than Figma, no new ratio control added.
- Bundle: SKIPPED; Bundle builder's native product-list/summary has no image/hotspot slot, and shared catalog lacks exact AirMove Jacket/Unified Double Layer Shorts names. No new implementation, discount mutation, or unrelated substitute products.
- Collections rows: SKIPPED; no existing candidate supports independent outlined looping category rows with2 inline hover images. Disabled source Collections background preserved for recovery, not presented as a match.

Only preset entries, target template/current identity settings and initialization records are modified. No new implementation, global Style Guide changes, source Virelle edits, deployment, commit/push or publish. Every active new region is configured-unverified, not visually approved on storefront.


## Blog completion — 2026-10-21

Created a separate Kinetra blog (handle kinetra) with all 3 reference titles, tags, dates and exact source covers. Full demo bodies/summaries and default author were supplied according to the content initialization contract. Readback verifies 3 published articles and exhausted pagination. Homepage section and nested blog-list now point to kinetra; the original default Add section preset is synchronized. Original shared Virelle blog is unchanged. Prior blog blocker is resolved; prior claim that the first two Virelle covers matched was incorrect: new exact covers are used for all three Kinetra articles. The Files originals are AVIF; Shopify generated JPG article renditions. Receipt: kinetra-content.json. Storefront rendering remains unverified.


## Latest local validation and handoff — 2026-10-21

- Theme Check: PASS, 401 files, 0 errors, 7 inherited warnings in untouched implementation files.
- Recursive template/preset schema checks: no introduced block-placement, unknown-setting, select or range diagnostics; 13 inherited homepage diagnostics remain. Header group has none. All original instance IDs are retained. Homepage is at 25-section limit, 13 active.
- All 12 changed Liquid sections differ only in registered presets. Preset names/categories are preserved. Implementation and schema controls are unchanged from fork. Global current differs only in logo, logo_transparent, logo_width and logo_width_mobile; saved presets, typography and palette are unchanged.
- git diff --check: PASS. Receipts: kinetra-local-audit-2026-10-21.json, kinetra-content.json, kinetra-media.json.
- Blog resource blocker resolved. Three exact source covers, titles, tags and dates read back; AVIF originals retained in Files and Shopify-generated JPG covers retained on articles.
- A fresh Chrome tab restored Figma reading after existing tab debugger attachment failed. Exact Crafted image node again verifies 1820×780,21:9,Crop. A final SVG export through Figma UI also produced no downloadable file, just as prior PNG exports. Original uncropped image remains verified, but exact desktop/mobile crop and Shopify focal point are unresolved. No frame screenshot substituted.

### Open items

| Region | Status | Missing capability or evidence |
| --- | --- | --- |
| Crafted with care | blocked, disabled draft | Exact desktop/mobile crop, focal point save/readback and second popup content |
| Timeline | blocked, disabled draft | Original stories and images for2015/2020/2025 |
| Outlined collection rows | skipped | Existing section lacks independent looping outlined rows with inline hover media |
| Product bundle | skipped | Existing builder lacks reference image/hotspot composition; exact two products unavailable |
| Hero / countdown | configured-unverified, gaps | Decorative marquee positioning; exact mobile hero height and countdown CTA ordering |
| Editorial rows | configured-unverified, gap | Native mobile image-before-copy differs from reference copy-before-image |
| Highlights | configured-unverified, gaps | Exact hotspot crop/focal point, remaining product associations, native action is navigation rather than Add to cart |
| Benefits | configured-unverified, gap | Later two dark icon sources absent; text retained |
| Gallery / locations | configured-unverified, gaps | Leading clipped gallery image; exact column ratio and real social/direction URLs |
| All active regions | configured-unverified | Desktop/mobile storefront and Theme Editor verification requires an authorized preview upload |

No deploy, publish, Theme Editor save, commit or Git push. Init contract says “Nếu cần logic mới, ghi gap để xử lý bằng yêu cầu implementation riêng.” Unsupported layouts above remain recorded rather than adding new implementation during initialization.


## Crafted preset follow-up — 2026-10-21

Owner requested build-preset and continuation, with authored waistband content based on the first hotspot. Exact desktop/mobile isolated Image exports are now uploaded as verified AVIF Files and bound to the registered Hotspot preset and kinetra_crafted instance. Both focal points saved and reloaded at 50% 50% in Shopify Files. Group Icon + Eyebrow follows Hero. Two information hotspots, corrected header spacing, medium media-height calibration, and zero empty-content padding are configured. Desktop/mobile image-source, anchor and popup previews passed; section enabled locally. Previous Crafted resource/second-copy blockers in this historical initialization record are superseded. See `docs/audits/hotspot-product-callout-preset-2026-10-21.md` and the two crop entries in the media manifest. No publish, explicit push or Theme Editor Save.


## Scrolling cards replacement — 2026-10-21

Owner requested replacing the three editorial Image text split layout instances with a single Scrolling cards and Arche-style controls. `kinetra_scrolling_cards` now contains Empower/Inspire/Belong, retains their original copy/images, and matches the registered Scrolling cards preset. Desktop uses Fade, equal image/copy columns, gap40, content padding40/64 and section96; mobile uses text-before-image, gap24, card gap48 and normal flow. No global theme settings changed by this task.

This supersedes the previous three-static-row configuration and known mobile-order gap. See [Scrolling cards audit](../audits/scrolling-cards-preset-2026-10-21.md) for Figma CUA evidence, implementation ownership, validation and the remaining final viewport/editor checks. Existing preview received the changes; no explicit push, publish, Theme Editor save or Git commit was performed by this task.


Scrolling cards visual follow-up: fresh browser tabs restored storefront QA. Desktop content1600, equal780px columns and section2581.69px match the Figma geometry. Mobile ordering/normal flow/no-overflow verified at CSS375 and390; exact one-line heading remains limited by desktop scrollbar emulation plus the existing fluid typography. Corrected the extra heading period and mobile header gap4. Theme Editor’s separate tab remains at95%/blank, so manual lifecycle UI QA is still unverified. See the audit follow-up for measured values and screenshots.
