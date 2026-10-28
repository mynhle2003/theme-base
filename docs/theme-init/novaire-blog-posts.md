# Novaire — Blog posts preset

Updated 2026-10-27. Scope: existing Blog posts preset and homepage `articles` instance. Configuration complete within existing controls; visual differences below remain unimplemented. No CSS/JS/Liquid implementation or global Theme Settings changes in this task.

Sources: desktop [47052:14436](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-14436), mobile [47284:7374](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7374). Figma MCP session 04e8ffb7-ddbd-45c8-b64e-cbc501d78034 hit View-seat tool quota; read via CUA/Chrome profile minhle@beae.com. Source dimensions 1920×852 and 375×615. Mobile title layer47284:7383: Outfit Light, 160% line height, 1.44px tracking; 58px two-line box. Card47284:7377 width256px. Screenshot geometry shows desktop512×384 images, mobile256×192, 12px mobile card gap.

## Latest follow-up — View all fix and crop upload blocker (2026-10-27)

Owner explicitly authorized fixing the mobile View all CSS and replacing article covers with Figma-cropped exports. Added only Blog posts-scoped mobile CSS in sections/blog-posts.liquid: the wrapper and mobile action use auto width when full_width_mobile is false; the full-width class retains the existing100% rule. No shared CSS or other section was changed. Browser computed styles at375×812/content360: centered120.42px button in328px slot; at1920×1080 desktop remains128.42px. Preset and homepage keep full_width_mobile=false. Evidence: view-all-mobile-fixed.png in the evidence directory below.

Crop replacement remains BLOCKED, no uploads or article mutations executed. Primary Figma MCP download_assets returned View-seat quota. CUA/Chrome inspection of original source47052:14436 shows: “Export disabled — Someone with edit access in this file has disabled exporting, copying, and sharing.” Existing covers retained; export restrictions were not bypassed. Resume after the file owner enables export/copy or supplies authorized exports of the three image layers. Store connection reverified against layouthub-template-v2.myshopify.com.

Bundled Shopify Liquid validator could not run because @shopify/theme-check-common is missing beside validate.mjs; Shopify CLI Theme Check used as the available validation. This follow-up supersedes the earlier mobile View all gap and configuration-only scope for this expressly authorized CSS fix. Other width/crop gaps remain.

## Composition and changes

`sections/blog-posts.liquid`: one preset named Blog posts/category Blog, matching main. `templates/index.json`: only articles instance changed. Existing Header → Heading, View all button, Blog list → Blog card → Title/Description/Button retained. Desktop3 columns/mobile1 with next-slide preview; 4:3 cover images, no metadata/tags. Heading xl and title md now synchronized between preset and instance. Description sm/two lines. Content gap8px; title padding8 plus card padding16 gives24px image-to-title separation; description padding12 plus parent gap8 gives20px before Read more. Carousel mobile gap12px. Unrelated working-tree changes preserved.

## Store content readback

Connected shop verified as layouthub-template-v2.myshopify.com. Reused existing Novaire blog126207164715, handle novaire. No new blog, article, upload or store mutation needed. GraphQL readback confirms all3 articles published, full HTML bodies, summaries, cover/alt and Author name, same blog ID. Rendering latest-first matches Figma order:

| Card | Article ID / handle | Cover |
| --- | --- | --- |
| The Timeless Elegance of Dresses | 633880576299 / novaire-the-timeless-elegance-of-dresses | articles/clare-banner-4.png,840×720 |
| How to Choose the Perfect Dress | 633880543531 / novaire-how-to-choose-the-perfect-dress | articles/novaire-our-story.jpg,1536×1280 |
| Dress Trends You Can’t Miss This Season | 633880510763 / novaire-dress-trends-you-cant-miss-this-season | articles/clare-banner-5.png,840×720 |

Local blog selector uses novaire; View all uses shopify://blogs/novaire. All card/title/Read more hrefs point to the correct article under /blogs/novaire. Public article page navigation itself was not retested.

## Rendered checks and remaining gaps

Preview http://127.0.0.1:9300, existing unpublished development theme192827490603. No push/publish/Theme Editor save issued; existing dev watcher reflected local edits. Desktop1920×1080 (1905px content), mobile375×812 (360px content after scrollbar). Checked all3 covers and slide order, title, excerpt, Read more and View all. Mobile drag reaches cards2/3; document scrollWidth/clientWidth360/360. Source/card identities, 4:3 ratio, heading32/26px, title18px, description14px and background#F6F0EC verified. This is not a pixel-perfect pass.

| Criterion | Figma | Preview / missing control |
| --- | --- | --- |
| Desktop content width | 1600px inside1920px | Existing page-width1600 includes96px padding, leaving1504px; cards482.7px. No section-local numeric content-width control. Global width intentionally preserved. |
| Mobile card | 256px with12px gap | Native fractional preview produces271.3px cards at360px content,12px gap. No fixed card-width control. |
| Cover crop | Full head/hat and looser framing | All3 subjects/order correct; cover center crop is tighter, especially cards1/2 with head near/cut by top edge. Renderer has no independent zoom/focal-position setting for article cover. Exact Figma crop is not verified matched. |
| Mobile View all | Compact centered button | Fills328px despite full_width_mobile=false. Existing shared layout stretches action; no working local width control. |
| Overall height | Desktop852/mobile615 | Desktop857.4/mobile636.3px measured; width/typography/button differences contribute. |

Validation: Theme Check0 errors/8 warnings elsewhere in current working tree; no offense in changed section. Preset setting IDs/options/ranges and unique name/category pass. Diff check pass; section implementation bytes unchanged and homepage JSON semantic comparison confirms only articles instance changed. No commit or Git push.

Evidence directory (outside Git): `/Users/beae/.codex/visualizations/2026/10/27/01a17c66-2920-7350-bd58-f902be8a9537/novaire-blog/`, containing figma-desktop.png, figma-mobile.png, preview-desktop.png, preview-mobile.png. Browser checkpoint `/tmp/novaire-blog-task/browser.json`; task-created Figma2048917349 and preview2048917352 closed, viewport reset, user tabs retained.


## Cover crop Figma — thay resource 2026-10-28

Theo yêu cầu user, copy section47052:14436 sang Layouthub copy và export3 khung Image4:3 có crop (PNG515×386). Upload bằng store-content-media/Shopify connector rồi thay image của article633880576299/633880543531/633880510763; alt giữ đúng title. Không đổi blog handle `novaire` hay template reference. Media Files46883349037355/46883351396651/46883354607915. [Hồ sơ QA hiện hành và URL article cover](../qa/homepage-blog.md) có receipt/readback D/M và đính chính nhận định cũ về quyền copy/export. Không dùng top-crop CDN approximation của lượt trước. Không push/publish theme.
