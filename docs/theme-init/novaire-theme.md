# Novaire initialization

- Date: 2026-10-26; mode: variant; name: Novaire.
- Branch: `theme/novaire-theme`; worktree: `/Users/beae/Documents/GitHub/Layouthub v2/novaire-theme`.
- Source: `theme/malandra-theme` at `246d7322aa61a6023a4178b2605740f01b9eeb6b`; local and origin identical at fetch. Initial committed diff to source was empty.
- Owner authorized carrying all three local preview changes: `docs/theme-base-preview.md`, `scripts/theme-base-preview.cjs`, `tests/theme-base-preview-target.test.cjs`. Byte equality verified after copying. These remain uncommitted; source unchanged.
- Inherited theme directories (sections, blocks, snippets, assets, templates, config) checked byte-for-byte against source.
- Style Guide: inherited from Malandra at `246d7322aa61a6023a4178b2605740f01b9eeb6b`. Supplied reference `https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=43001-11865` retained; not read/reapplied under variant workflow.
- Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-10793
- Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7124
- Store: `layouthub-template-v2.myshopify.com`, explicitly selected by owner. Content/media work authorized; no deployment/publish/commit/push requested.
- Scope: header group, homepage template, footer group; use inherited implementation and existing settings/presets.
- Variant record: [tracking](../variant-updates/novaire-theme.md).
- QA: [homepage](../qa/homepage-qa.md).
- Figma MCP: Primary connection accepted; session `a4f92714-06ba-47f3-acc4-aadee7b402f2`; get_design_context blocked by View seat quota. Fallback CUA/native Chrome inspected mobile frame and layer names; direct tab access reports Local browser use disabled in Work settings. Owner will enable it; waiting for successful reconnection.
- Browser: existing Chrome beae.com profile, existing tab 2048916175, user-owned Beae Editor V4 group; mobile node 47284:7124 observed, width 375px, height 11266.13px. Chrome profile email `minhle@beae.com` verified in the profile menu. No tabs created or closed.
- Initial observations below are retained as history. Use the current checkpoint for completion, resources and verification status.

## Checkpoint

Editorial correction2026-10-27: the earlier two Image text split layout instances have been replaced by one custom Scrolling cards with two cards. Current mapping and verification limits: [Scrolling cards](novaire-scrolling-cards.md). This supersedes the earlier editorial mapping below.

Updated 2026-10-27. Branch/worktree initialization, supported homepage composition and store media/content configuration are finished. All five original Figma videos are READY, bound in both the Add section preset and homepage instance, and the video carousel is enabled. Earlier entries below are chronological history and are superseded by this checkpoint.

Store resources: 10 Novaire products, 57 image files, 5 videos, 7 manual collections, 1 blog with 3 articles, 2 pages and 4 dedicated menus. The previous nine-product audit verified publication, inventories and galleries; final readback additionally confirms Coastal Caprice ACTIVE/published, all four Coastal images READY, and all five videos READY. Sixteen supplemental catalog images are generated derivatives, documented separately; they are not original Figma photographs. Lucy and Jesse Ivory are sold out; selecting Romilly Size M changes the purchase button to SOLD OUT.

Final local checks: Theme Check 386 files, zero errors and five inherited ExcessiveSettingsCount warnings; schema value validator and git diff --check pass; check-custom covers 173 files. Every changed Liquid file differs from HEAD only inside schema. The inherited local preview script/docs/test changes remain untouched. No Git commit/push or theme publication.

Preview tuple: store layouthub-template-v2.myshopify.com, unpublished theme 192827490603, port 9300, Shopify CLI PID 10096. Final remote readback of settings_data.json, index.json, header-group.json and footer-group.json has no meaningful differences from local (Shopify omits some empty optional values). The gallery-only slide fix was also read back: homepage data and gallery schema match local. Final Theme Check after that fix:386files/0errors/5inherited warnings.

Build verification: desktop 1920×1080 and mobile viewport 375×812 (desktop-style scrollbar leaves 360px mobile content). No page horizontal overflow: clientWidth equals scrollWidth at both sizes. Mobile menu opens with Novaire menu links; collection tab switches to Midi Dresses and loads Cassia/Lucy/Steele/Jesse; Footer accordion opens; original video 1 plays with readyState4; Romilly Size M renders SOLD OUT. Gallery now uses native horizontal single-child slides so existing gallery-image blocks receive full slide width: five square 271px mobile images and five desktop columns. Footer newsletter/menu typography, Subscribe layout and benefit library icons were visually checked. Evidence is local in /tmp/novaire-qa-evidence; per-section observations are linked from ../qa/homepage-qa.md. This is build verification, not a complete pixel-perfect QA pass.

Remaining capability/design gaps: inherited Malandra typography/palette; hero mobile600 vs Figma550; header mobile68 vs target60; video Compact product below center card instead of floating overlay and inherited missing Play video translation; exact Look header/action geometry; press spacing; second Steele/Lucy color variants without verified galleries; merchant social destinations still #. Some secondary footer links route to Contact. Exact hover/focus and full Theme Editor lifecycle remain unverified. No new implementation was added to close these gaps.

Cleanup pending due browser connection: Chrome per-tab commands time out; native Chrome switches to another task's Aike/Norden window. Keep only task-owned copied Figma roots10017:1613 and10017:2513 tracked for later removal; do not touch other roots or original design. Original downloads retained. The owner manually changed Chrome download preferences; re-enable “Hỏi vị trí lưu từng tệp trước khi tải xuống” manually because settings-page control was blocked. Browser checkpoint: /tmp/novaire-browser-checkpoint.json.

## Validation of inherited snapshot

- Theme Check: 386 files, zero errors, five inherited ExcessiveSettingsCount warnings; exit 0.
- Preview target tests: 8 passed, 0 failed.
- `node theme-base check-custom novaire-theme`: profile covers 173 custom files, exit 0.
- `git diff --check`: pass. No commit/push/deploy. No base history file in target.
- Source/base local changes preserved; committed theme directories still have no diff from Malandra fork.

## Mobile survey (CUA/Chrome, 47284:7124)

Observed frame: Homepage 2 / Mobile, 375 × 11266.13 px. Child layer order below is observed; individual child IDs, desktop correspondence, measurements, block trees and media remain pending. This is an inventory, not an approved build map.

| Order | Figma mobile child | Status |
| --- | --- | --- |
| 1 | Top bar | pending desktop/child inspection |
| 2 | Header | pending desktop/child inspection |
| 3 | Slideshow 3 | pending desktop/child inspection |
| 4 | Featured collection 02 | pending desktop/child inspection |
| 5 | Collection list 19 | pending desktop/child inspection |
| 6 | Content box (Testimonial) 01 | pending desktop/child inspection |
| 7 | Featured collection | pending desktop/child inspection |
| 8 | Collection list 11 | pending desktop/child inspection |
| 9 | Frame 14644 | pending desktop/child inspection |
| 10 | Shop the look 7 | pending desktop/child inspection |
| 11 | Frame 14687 | pending desktop/child inspection |
| 12 | Image with text | pending desktop/child inspection |
| 13 | Testimonials | pending desktop/child inspection |
| 14 | Featured product | pending desktop/child inspection |
| 15 | Logo list | pending desktop/child inspection |
| 16 | Blog post | pending desktop/child inspection |
| 17 | Gallery 06 | pending desktop/child inspection |
| 18 | Icon with text | pending desktop/child inspection |
| 19 | Footer 01 | pending desktop/child inspection |

## Inherited instance inventory


`sections/header-group.json`:

- `announcement-bar` → `announcement-bar`
- `header` → `header`

`templates/index.json`:

- `hero` → `hero`
- `values_marquee` → `text-marquee-custom`
- `collection_tabs` → `collection-tabs`
- `categories` → `collection-list`
- `statement_stacks` → `shop-the-look-section`
- `birthstones_tabs` → `collection-tabs`
- `new_collections` → `image-cards`
- `image_with_text_custom` → `custom-section`
- `spring_sale` → `countdown`
- `opal_edits` → `image-cards`
- `love_always` → `hero`
- `founder_testimonials` → `custom-section`
- `articles` → `blog-posts`
- `instagram` → `gallery-image-grid`
- `benefits` → `icon-text-cards`

`sections/footer-group.json`:

- `footer` → `footer`

Initial survey checkpoint superseded by the full survey and local configuration records below; do not repeat initialization.

## Survey and build map — 2026-10-26

Desktop frame 1920 × 11977.93px; mobile 375 × 11266.13px. Inspected every section on both viewports using CUA/Chrome screenshots and Properties. Spacing token n means 4n px where Figma uses the established spacing scale; explicit px kept as shown. No source design modified. Browser 4 / beae.com, same pre-existing tab 2048916175. Direct tab connection now works.

Composition backup: `/tmp/novaire-composition-backup`. Store connector verified exact target domain and USD. Product search for Cassia/Romilly/Steele/The India Edit/Celeste/Jesse/Greta/Lucy returned no matches; Novaire/Claré/Gloria collections returned no matches. No store mutation yet.

| Region | Desktop / Mobile node | Candidate type | Existing instance | Decision | Delta / dependency | Height D/M px | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Top bar | 47219:4126 / 47301:19030 | announcement-bar | announcement-bar | change | Same text block; center; 12/10px vertical padding; hide social; scheme inherited, exact background pending style boundary | 45/41 | pending detailed controls/media |
| Header | 47052:11672 / 47301:19008 | header | header | change | Same private header tree; remove overlay/symbol; Novaire wordmark; page width; search visible mobile; replace jewelry menu with verified Novaire menu | 76/60 | pending detailed controls/media |
| Slideshow 3 | 47052:10820 / 47284:7125 | hero | hero | change | Reuse single-image hero; New collection / Summer & beyond / Shop now, centered; exact source image; heights 800/550 require existing option verification | 800/550 | pending detailed controls/media |
| Featured collection 02 | 47054:15484 / 47284:7133 | collection-tabs | collection_tabs | change | Reuse header + three collection-tab blocks + card tree; Best sellers / New in / Midi dresses; carousel four columns and one plus preview; View all bottom | 912.75/694 | pending detailed controls/media |
| Collection list 19 | 47052:10843 / 47284:7151 | image-cards or collection-list | categories | change | Three portrait image cards with heading/button overlay; desktop three columns/mobile horizontal swipe; existing carousel control required | 773.78/355 | pending detailed controls/media |
| Over 100 brands | 47056:14774 / 47284:7172 | rich-text | new brands_intro | add | No equivalent instance; rich-text preset supports heading/text/button; centered; padding80/56 | 375/417 | pending detailed controls/media |
| Shop the trends | 47064:14900 / 47284:7179 | featured-collection-banner | birthstones_tabs | change | Replace tabs with existing header/banner/product-list-banner preset; banner left desktop/above mobile; header left; three product columns | 855/1092 | pending detailed controls/media |
| Collection list 11 | 47052:10949 / 47284:7201 | image-cards | new_collections | change | Reuse two-card tree; New accessories/Floral dresses; centered overlay; desktop two columns/mobile vertical; gap28/12 | 798.4/616.8 | pending detailed controls/media |
| Save 10% countdown | 47054:14590 / 47284:7218 | countdown | spring_sale | change | Reuse countdown tree; horizontal desktop/centered mobile; title/timer/button order needs control check; no invented expiry date | 255/356 | pending detailed controls/media |
| Shop the look | 47054:14925 / 47284:7243 | shop-the-look-section | statement_stacks | change | Reuse static header/image/products slots; media left/first; centered product card and View product; source Steele dress requires catalog/media | 1179/1134.17 | pending detailed controls/media |
| Marquee | 47054:15679 / 47284:7253 | text-marquee-custom | values_marquee | change | Reuse marquee block; horizontal text + small images; New arrivals / New season edit; gap60; padding bottom80/48 | 162/123 | pending detailed controls/media |
| Image with text | 47054:15160 / 47284:7259 | image-text-split-layout | image_with_text_custom + new values | change | Reuse compatible group tree when possible; two rows, text left/image right desktop and image first mobile; no stacking interaction evidenced | 1600/1462 | pending detailed controls/media |
| Loved by real people | 47064:15176 / 47284:7284 | video-product-carousel-custom | founder_testimonials | change | Existing video carousel candidate; five video cards with product overlay and center emphasis; exact original videos required | 842.8/697 | pending detailed controls/media |
| Featured product | 47054:14719 / 47284:7315 | featured-product | new featured_product | add | Use native product/media/details preset; Romilly Mini Dress Yellow; desktop thumbnails left/mobile below; correct price/options/media required | 904/1289.17 | pending detailed controls/media |
| Logo list | 47054:14801 / 47284:7364 | press | new press_logos | add | Existing press/logo blocks; six original brand logos desktop/two visible mobile; no redrawn logos | 232/190 | pending detailed controls/media |
| Blog posts | 47052:14436 / 47284:7374 | blog-posts | articles | change | Reuse existing header/list/action; three columns and mobile carousel; use separate Novaire blog, original photos/copy; guard column1 custom not needed | 852/615 | pending detailed controls/media |
| Gallery 06 | 47052:11030 / 47284:7401 | gallery-carousel | instagram | change | Existing carousel needed for five square images and mobile one plus preview; heading/eyebrow/hover tag; grid preset lacks swipe | 620.2/468 | pending detailed controls/media |
| Icon with text | 47052:14503 / 47284:7415 | icon-text-cards | benefits | change | Reuse four benefit cards; four desktop, one mobile plus bullets; exact icons need existing value or gap | 221/261 | pending detailed controls/media |
| Footer | 47078:16485 / 47301:19036 | footer | footer | change | Reuse columns/email signup/footer bottom; newsletter left + three menus; mobile accordion; update copy/menu resources, no footer logo | 474/845 | pending detailed controls/media |

Existing `opal_edits` and `love_always` have no corresponding extra region in Novaire; decision remove these two instances once target regions are configured. Preserve all other IDs where compatible. No bulk reset. Shared implementation remains inherited.

Next: complete Header (controls, original wordmark, dedicated menu), then hero, then each region sequentially. Detailed child measurements and media exports remain required; full survey does not prove those details.

## Local configuration checkpoint — 2026-10-26

Desktop and mobile copied into authorized Layouthub-copy page 4:3: task-created roots `10017:1613` (desktop) and `10017:2513` (mobile). Existing roots Mobile/Desktop are unrelated and must remain. Temporary tab 2048916209; cleanup pending while work continues. Browser checkpoint: `/tmp/novaire-browser-checkpoint.json`. Browser direct access became disabled again during asset extraction; no downloaded assets or uploads confirmed. Do not recreate these copies.

Configured supported local controls and synchronized corresponding existing Add section presets:
- Announcement text, centering and 12px desktop/10px mobile vertical padding; no social icons. Header page width, non-overlay layout, 16/12px vertical padding, mobile search and action gaps. Wordmark, menu content and exact rendered height remain pending; original icons/settings retained.
- Added rich-text instance `brands_intro` after categories with original Over 100 brands copy, centered heading/text/button, 80/56px padding and section-local background #F6F0EC. Static eyebrow/heading/text slots preserved. Button destination not provided; unset. Typography and spacing beyond measured parent padding remain unverified.
- Countdown content updated; original instance/static tree retained, horizontal desktop/centered mobile alignment configured. Retained inherited duration (64h23m), because sample Figma digits do not specify campaign semantics or expiry. Eyebrow and Sale action labels mapped. Exact mobile timer/button reading order and runtime size still need preview/control verification.
- Benefits copy updated for all four cards; 4 desktop / 1 mobile and bullets configured. Existing icon SVGs retained pending exact source export, so icons are not claimed matching.
- Footer newsletter text, subscribe label, mobile stacked form and 64/48px parent padding configured. Removed only inherited footer logo absent from target frames. Existing menus retained pending dedicated Novaire menus, not claimed matching.

Statuses: rich-text configured-unverified; Header, countdown, benefits and Footer in-progress. Remaining regions pending; no catalog/media/commit/push/deploy changes. Full page still includes inherited Malandra regions; do not report Novaire homepage complete. Next: reconnect browser, export exact logo/hero from temporary copied nodes, finish Header then hero before advancing media-dependent regions.

## Latest validation and blocker

After this configuration pass: Theme Check inspected 386 files, exit 0, zero errors and the same five inherited ExcessiveSettingsCount warnings. JSON/order integrity and unique preset names passed; all six modified Liquid files were checked against HEAD and differ only inside schema. `git diff --check` passed. `check-custom novaire-theme` still covers all 173 implementation files. No new implementation or global Theme Settings change. No commit, push, theme upload, catalog mutation or media upload.

Latest browser read on temporary copy tab again reports `Local browser use is disabled in Work settings`. Asset exports and UI cleanup cannot continue through that connection. Keep temporary roots10017:1613 and10017:2513 tracked for resumption; remove only these when done, preserving existing Mobile/Desktop. Do not retry source image downloads or create more copies before checking the existing checkpoint. Metadata/links and source dimensions above remain valid; no assets were confirmed downloaded. The owner must re-enable the browser connection before dependent work resumes.

## Preview run and requested code undo — 2026-10-26

Owner requested `node theme-base preview start`. Created dedicated unpublished draft `novaire-theme local preview`, ID `192827490603`, on `layouthub-template-v2.myshopify.com`; supervisor served port9300. Initial upload rejected dynamic preset blocks with IDs lacking static:true. Corrected that serializer output in six section presets, uploaded schemas successfully, then templates/groups. Remote homepage/header/footer JSON readback matched local. No publish or Git push.

Owner then requested undo of the latest code edit. Stopped preview supervisor (Ctrl+C), restored only the dynamic preset ID changes in announcement-bar/countdown/footer/header/icon-text-cards/rich-text, and preserved all earlier local Novaire configuration and user changes. This restores the local state before this preview turn, including the previous upload limitation. The accepted remote draft is retained; no theme deletion or remote rollback requested. Future preview upload requires resolving the preset issue with owner direction. Backup of the reversed correction: `/tmp/novaire-preview-fix-before-undo`.

## Header/hero continuation — 2026-10-26

Wordmark exported as original SVG112×20 from authorized copy Header, uploaded READY as `novaire-wordmark.svg`. Mobile source width83.86 is represented by existing range84px; desktop112px. Header menu remains pending exact catalog/navigation resources.

Hero routing refined after tracing runtime: inherited Hero medium is720px desktop/620px mobile and Adapt does not size its absolutely positioned media. Existing Slideshow medium is800px desktop/600px mobile, supports one slide, centered text, separate mobile artwork, and no navigation. Reuse existing hero content IDs inside one slideshow-slide; use800/600 without changing implementation. Mobile target550px is a known50px capability gap. Both source background exports preserve Figma crop and20% radial fill, remove only foreground Container from temporary duplicates inside task-owned copied roots. No source document modified. Export desktop1920×800 and mobile375×550, true AVIF decoded before upload.

## Continuation validation and browser checkpoint — 2026-10-26

Original wordmark and two hero backgrounds uploaded and read back READY with dimensions112×20,1920×800 and375×550. Local logo/hero schema values, enum/range grids and preset trees checked. All seven modified Liquid section files differ from HEAD only inside schema. Theme Check:386 files,0 errors,5 inherited ExcessiveSettingsCount warnings. `git diff --check` passes. No new custom implementation, global Theme Settings edit, commit or Git push.

While resuming initialization, corrected the invalid dynamic block IDs emitted by the earlier init preset serializer; static IDs remain. This is local preset schema validity, not a change to the preview CLI. The inherited preview script/docs/test were preserved. Do not rerun the previous undo script because it would reintroduce invalid presets. This supersedes the last sentence of the historical preview-undo record above.

Direct Chrome tab access recovered via profile beae.com, browser4. Task copy tab2048916236; original user source tab2048916175. Native foreground Chrome repeatedly switched to QA/Kinetra, Norden and other user windows after the owner reported stopping other sessions. Direct tab inspection works, but download/Save dialogs still cannot be reliably targeted by native Computer Use. Do not operate on unrelated foreground pages. Last source selection: Collection list19 / image parent for the CAVATION OUTFIT banner. Pending asset links are not downloaded media. Do not use screenshots as replacement assets.

Temporary Figma copies remain intentionally for continuation; cleanup ownership is in the media ledger. Only logo/hero media are ready. Most inherited Malandra regions remain unchanged until their Novaire replacements have verified resources; this is not a complete Novaire homepage. Existing unpublished draft192827490603 is historical and is not proof that this latest local configuration is deployed.

## Banner and press configuration — 2026-10-26

Reuse `new_collections` image-cards IDs, update two backgrounds to verified Figma image exports, center content, 5:4 images, 28px desktop/12px mobile gap, bottom80/56. Source desktop47052:10949/mobile47284:7201. Add existing Press section after the pending featured product position, six audited Claré logos in Figma order (GRAZIA, InStyle, marie claire, VOGUE, COSMOPOLITAN, ELLE); empty quote content, logos remain selectable by existing Press runtime. No implementation edits. Press mobile scrolling/opacity behavior remains a capability gap pending preview.

## Editorial/gallery routing — 2026-10-26

Replace inherited `image_with_text_custom` with existing `image-text-split-layout` and add `our_value`; two rows use direct image blocks so existing `show_image_first_mobile` can reorder safely. Source47054:15160/47284:7259, original image exports1536×1280, uploaded through Shopify Files UI and read back after connector became unavailable. Replace `instagram` gallery-image-grid with existing gallery-carousel, five square images, desktop5/mobile1 with next preview; four Figma exports743×743 plus visually matching existing `clare-social-2.png`. Source47052:11030/47284:7401. Keep instance IDs; no implementation changes.

## Blog setup — 2026-10-27

Created blog Novaire (`novaire`,126207164715) and three Figma-titled articles with complete text, summaries, source images, Author name and current publication. Reused exact Claré banner4/5 images, editorial Our Story image for middle card. Preserved article instance/static IDs, changed horizontal cards to stacked3-column desktop/mobile carousel, hid meta/tag blocks and linked View all. Article IDs633880510763/633880543531/633880576299; creation order reversed so latest-first matches design.

## Catalog composition — 2026-10-27

Configured New Arrivals with three dedicated Novaire collections, 4-card desktop/mobile preview and View all. Category cards now use three verified collection images with overlay titles/buttons. Trends retains collection-tabs, using its existing detached promo on desktop/mobile, one hidden tab and three products; this expresses the Figma banner+3-card row more closely than 50/50 Featured collection Banner. Reused Look IDs with Steele, new marquee content, and added native Romilly featured product with5photos, left thumbnails and Size M unavailable. Removed only the two source regions explicitly mapped for removal (opal_edits/love_always); reordered the mapped homepage. Video carousel is prepared and disabled while the five source MP4s remain unavailable; no substitute clip or fake Play control. No implementation or global Style Guide changes. Known gaps: Look header placement/pagination with one product; exact second Steele color; mobile hero height; video source; inherited scheme2 remains#F4EFE9 rather than target#F6F0EC in components without local background control.

### Trends routing refinement from preview

The inherited detached promo module did not detach its card in this preview, and disabling its static tab-layout did not suppress its trigger. Re-routed this region to the existing Custom section → Header + horizontal Group →28% banner Group/72% Product list Group, mobile vertical. Native Banner and Product list preserve three true products, correct image/text and mobile banner-first order without implementation changes. This supersedes the previous collection-tabs routing for Trends only.

### Existing layout settings — 2026-10-27

Applied only two catalog layout deltas in current Theme Settings: product_card_swatch_position inline→bottom (Figma card swatches below price) and variant_picker_style dropdown→button (Figma Romilly S/M/L/XL/XXL buttons). Settings exist in schema; consumers snippets/product-card.liquid and snippets/variant-picker.liquid verified. Typography, palette, button tokens and saved Theme Settings presets remain inherited from Malandra. Scope affects catalog cards and variant pickers throughout this new theme. Category action fills its content width to center the label.

### Rendered refinement — 2026-10-27

Gallery Carousel slides now use existing gallery-image blocks with hover overlay instead of gallery-item fixed caption/avatar bars, preserving5squareimages/mobilecarousel. Footer newsletter and menu headings use existing custom size controls16/14px, horizontal primary subscribe action without inherited send icon. Benefits use existing paper-airplane/cube/chat-bubble/shield-check library icons instead of inherited jewelry SVGs and14px heading controls; exact source payment icon remains a minor library gap. No implementation changes.
