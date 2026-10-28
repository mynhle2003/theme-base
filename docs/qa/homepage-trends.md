## Fix Lần1/Lần2 — 2026-10-28

Đọc live Sheet:36/37/38 được giao Lần2,37 user cho custom token;39 Bỏ qua;42 Lần1. Tắt show_pagination_on_mobile trong instance và preset Featured collection. CSS scoped section-featured-collection: progress height0.5,radius10,fill radius1, màu Heading/Border qua CSS variables. Scheme riêng clone scheme1 chỉ border#CCCCCC→#E6E6E6 để map Bg Bar; assign section/preset, giữ consumer scheme1 khác. Desktop đo track1122×0.5,radius10,#E6E6E6,fill#3A3A3A/radius1,gap32; Mobile client375 displaynone. Sheet36/37/38/42 Khớp, giữ F/G gốc và cờ user; width39 Bỏ qua/Chưa khớp giữ nguyên. Không push/publish/commit. Theme Check0errors. Evidence featured-fix-after.tsv,featured-fix-check.json.

---

## Featured collection — recheck đầy đủ Pagination / chuẩn hóa Sheet — 2026-10-28

Nguồn Figma MCP vẫn quota View seat; dùng Chrome Properties. Desktop pagination node47064:14923: Style Progess bar, Width Fill1124px, Height0.5px, Radius10px, Bg Bar#E6E6E6, right padding842px. Deep-select bar: Width282px, Height0.5px, Radius1px, Heading#3A3A3A. Parent Frame562659 node47064:14917: Width1124px, Height565px, Gap8=32px theo scale đã xác minh ở docs/theme-init/novaire-theme.md. Không sửa nguồn. Đây là số đo Properties mới thay thế các mục Chưa xác minh style/màu cũ.

Runtime mới: Desktop client1920, section854.734375px, trackx638/w1122/h2/margin32/radius0; fill#6C6C6C/radius0,track Body alpha20%. Next đưa fill từ50%→100%; Previous trả được, kiểm sau transition ổn định. Type/vị trí/phạm vi dưới nhóm sản phẩm và gap32px khớp; chiều cao0.5→2, màu track/fill, radius, width1124→1122 được báo riêng (4 dòng lỗi). Không suy width2px thành Figma làm tròn khi Properties cho số cụ thể.

Mobile client375 sau deferred controller: banner433px tách riêng, section1136.796875px; carousel sản phẩm1+preview/gap12 khớp. Pagination343×2,margin24 vẫn hiện, trong khi nguồn Mobile node47284:7179 không có. Block product-list schema có show_pagination_on_mobile, defaulttrue; instance thiếu giá trị riêng nên đề xuất false và gắn Lần1 cho lỗi hiển thị. Chỉ QA, chưa sửa theme. Không lặp lỗi chiều cao hệ quả khi Grid/spacing đang được xét theo quy ước.

Sheet nhóm7 hiện A33:J42, một merge STT/Section cho10 hàng; Chung33:34, Desktop35:39, Mobile40:42. D35:D39 merge Pagination. Chỉ F/G của5 lỗi đã xác minh có xanh/đỏ, ô thường trắng; dropdown thật giữ nguyên, I42=Lần1. Arial10/wrap/middle. Giữ giá trị F/G và hướng xử lý lịch sử của regular price. Đã đọc lại TSV và kiểm screenshot; các section khác không ghi đè. Chèn4 hàng trước Image cards: nhóm sau dịch+4, sources102:106. Snapshot trước/sau featured-style-before/after.tsv, runtime featured-style-runtime.json, screenshot nguồn featured-figma-pagination-parent.png. Số đo cũ/nhận định placement trước initialization giữ ở lịch sử, không còn là kết luận hiện hành.

---

## Pagination recheck và đính chính deferred render — 2026-10-28

Lượt trước đã đo quá sớm: Swiper initialized nhưng section controller chưa kích hoạt. Khi đưa section vào viewport/click navigation, promo được tách đúng. Đính chính lỗi placement của checkpoint trước: Mobile banner433px tách trên, section1136.796875px; sản phẩm4 slide, gap12,1+preview đúng. Sheet35/36 Khớp, không sửa code. Không dùng DOM trước deferred init để kết luận regression.

Pagination được kiểm riêng: Figma Desktop có progress dưới nhóm sản phẩm, không dưới banner (figma-d-6.png). Runtime ổn định trackx638,width1122,height2px,margin-top32px; fill#6C6C6C,track cùng màu alpha20%; Next tăng fill đến100%,Next disabled cuối. Chưa đọc Properties màu/độ dày nguồn nên dòng37 Chưa xác minh phần style, dù phạm vi/hành vi khớp. Mobile Figma không có progress (figma-m-6.png), runtime343×2px,margin-top24px,fill25% cho4 sản phẩm: dòng38 Chưa khớp, đề xuất tắt Mobile qua control phù hợp; chưa fix. Không lặp lỗi height hệ quả. Thêm2 hàng vào Sheet trước Image cards: mọi nhóm sau Featured collection dịch+2, nguồn96:100→98:102. Evidence featured-pagination-states.json, featured-pagination-sheet-after.tsv.

Skill checklist.md bổ sung pagination riêng cho mọi carousel/breakpoint, gồm hiện/thừa/thiếu, track/fill, phạm vi, spacing, trạng thái và thao tác; visual-checks bổ sung chờ deferred init/transition ổn định. Không QA lại toàn Homepage, không sửa theme.

---

## Recheck layout theo skill spacing mới — 2026-10-28

Đo mới localhost9301. Mobile client375: section679.796875px (khác snapshot cũ1136.80), padding56/56; Header90.390625px, gap Heading→Text12px, header→list40px. Tổng56+90.390625+40+437.40625+56=679.796875. Không min-height dư ở section. Carousel card254.90625px, media4:5/318.625px, gap12px; promo vẫn là slide đầu, vùng product-list__mobile-promos ẩn. Recheck sau reload Mobile xác nhận cùng kết quả. Figma nguồn figma-m-6.png: banner343px riêng phía trên carousel sản phẩm, carousel1 product+preview. Đây là lỗi placement/composition, không phải chiều cao độc lập; rút lỗi chiều cao1092/1136.80 cũ và hướng giảm chiều cao. Sheet35 báo placement,36 báo mẫu item; giữ lịch sử cũ bên dưới. Không coi Grid Khớp vì gap đúng khi banner vẫn chiếm slide đầu.

Desktop client1920: section1053.890625px, padding80/80, header81.796875, gap48; promo và sản phẩm cùng carousel, mỗi slide514.65625px/gap28,3 cột theo setting columns_desktop3; phần bố cục cũ không được suy tiếp là đạt. Cần đối chiếu lại geometry banner/product Desktop riêng trước kết luận toàn section. Không có overflow ngang toàn trang ở cả hai viewport. Settings show_on_top_mobile=true, promo_height_mobile433, promo_width_desktop28.125 có trong JSON nhưng runtime promo Mobile vẫn trong track; cần kiểm consumer implementation, không sửa code trong lượt recheck này.

Cập nhật qa-theme visual-checks.md + sheet-report.md: chỉ báo spacing sai đúng owner, không lặp lỗi height hệ quả; chỉ báo height độc lập khi spacing/Grid đã đúng mà còn chênh chưa giải thích. Evidence mới featured-spacing-recheck.json; Figma lịch sử figma-m-6.png. Không tuyên bố fix hoặc QA toàn Homepage.

---

## Custom giá thường toàn theme — recheck 2026-10-28

Người dùng cho phép sửa custom trên toàn theme bằng scoped `var(--heading-color)` và cập nhật các lỗi tương tự ở section khác. `assets/critical.css` thêm `.price > .price__current--regular { color: var(--heading-color); }`. Shared price áp dụng cho product card, product page, cart và bundle subtotal; giữ riêng sale, compare-at, unit price. Compact card đã dùng cùng token, giữ rule hiện có.

Recheck Homepage Desktop client1920 và Mobile client375 trên localhost9301: Collection tabs và Featured collection giá thường #3A3A3A, khớp nguồn Figma và heading tại section. Video compact giá thường #FFFFFF theo heading local; không ép toàn theme thành màu đen. Sale thường #D82727, sale Video #F07B6E, compare-at #808080 giữ nguyên; body #6C6C6C. Trang sản phẩm Cassia Nude giá thường $52.00 / #3A3A3A khớp token Heading; đây là kiểm hồi quy component, không phải QA Figma trang Product. Cart/bundle được kiểm cấu trúc consumer, chưa thao tác dữ liệu để kiểm UI có item.

Sheet Homepage dòng22 và34: Lần 2 / Khớp. Giữ Figma/Hiện tại gốc để truy lịch sử; append xác nhận custom + số đo mới vào Hướng xử lý, bỏ highlight sai lệch đã giải quyết. Đọc lại dữ liệu sau ghi xác nhận đúng. Các lỗi khác vẫn giữ nguyên, không suy cả section đạt.

Validation: Theme Check 0 lỗi / 8 cảnh báo; git diff --check đạt. Evidence tạm trong `/tmp/novaire-qa-20261028/`: regular-price-desktop.json, regular-price-mobile.json, regular-price-product.json, regular-price-theme-check.json và price-sheet-before/after.tsv. Không commit/push/publish hay Save Theme Editor.

---

## QA hiện hành — 2026-10-28

STT 7 — **Featured collection**. Instance `index/featured_collection`; type `featured-collection`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A33:J36. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47064-14900
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7179
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-6.png`, `figma-m-6.png`, `final-desktop-6.png`, `final-mobile-6.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Heading/Text, banner Summer sale, ba sản phẩm đầu và kiểu chữ; Desktop banner trái, Mobile banner trước sản phẩm | Heading/Text, banner Summer sale, ba sản phẩm đầu và kiểu chữ; Desktop banner trái, Mobile banner trước sản phẩm |  |  | Khớp |
| Chung (Desktop, Mobile) | Product price | Màu giá thường | #3A3A3A | #6C6C6C | Dùng $build-preset: regular-price kế thừa token Heading var(--heading-color) (#3A3A3A), không kế thừa Body #6C6C6C; kiểm control, thiếu thì ghi gap implementation |  | Chưa khớp |
| Mobile | Layout | Chiều cao section | 1092px | 1136.80px | Đo lại width card và gap sau khi chuẩn hóa preview; không bù bằng padding |  | Chưa khớp |
| Mobile | Grid/slide | Preview width | Card theo thiết kế khoảng 256px | 254.91px; cần chốt parent và gap bằng số đo nguồn |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — trends

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/birthstones_tabs`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47064-14900
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7179
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Native Custom section/Header/Group/Banner/Product list: banner and three cards inline desktop; banner before product carousel mobile. Real collection/product data and original banner verified.

Local evidence: `/tmp/novaire-qa-evidence/mobile-trends.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.


## Featured collection replacement — 2026-10-27

User requested native Featured collection and reuse of main's promotion-card support. Homepage instance is now `index/featured_collection`, directly after `brands_intro` (Rich text); `birthstones_tabs` was removed. Add section preset remains the original `t:general.featured_collection`, category `t:general.collection`.

Reused `promo-card`, its insertion snippets and responsive module; restored Product list's capture/slot/module/host wiring from local Git `main`, preserving this checkout's mobile-preview setting and accessible collection label. Restored main's collection-count condition for View all. No new promotion implementation, CSS or JavaScript was introduced.

Source read: CUA/Chrome, verified profile minhle@beae.com; exact desktop/mobile nodes linked above. Figma MCP returned View-seat quota limit. Desktop frame 1920×855; mobile frame 375×1092. Both use white background, SHOP THE TRENDS/copy, summer-sale banner, then Jesse Blue / Greta Red / Jesse Ivory. Desktop promo at start of row; mobile promo before swipeable products.

Store readback: layouthub-template-v2.myshopify.com, USD; collection gid://shopify/Collection/536228495659 (`trends-novaire`), manual, three ACTIVE products in design order; prices $45/$51/$152. Existing banner `shopify://shop_images/clare-cat-5.png`, existing product catalog AVIFs and sale destination `/collections/sale-novaire` reused. No catalog mutation or new media upload needed.

Read-only preview at 127.0.0.1:9300 (existing watcher for draft 192827490603). Desktop viewport 1920×1080: promo + three products loaded in order, left header, top navigation; four equal native carousel columns. Mobile viewport 375×812, actual content width360: exactly one detached promo, swipe Jesse→Greta→Ivory verified, all four primary images loaded, scrollWidth360 equals clientWidth360. Mobile arrows hidden, next-card preview active. View all absent as designed. Existing running watcher synced local edits; no separate theme push/publish or Theme Editor save was issued.

Remaining verified gaps: Figma desktop promo is wider than product cards, while native Product list uses equal-width slides; progress track spans the entire list rather than products only, and no overflow means desktop navigation is disabled. Mobile promo uses the existing 360px minimum (measured362px image at330px width), shorter/differently cropped than Figma's approximately433px-tall frame at343px width. No independent promo height/width controls exist. Typography and page width retain shared current theme values; screenshot comparison is not a pixel-perfect pass. Full Theme Editor lifecycle not exercised.

Validation: configured settings checked against schema IDs/options/ranges; Shopify accepted preset/template and storefront rendered. Theme Check: zero errors, seven warnings in unrelated files. Existing promo lifecycle tests: six passed. `git diff --check` passed. Concurrent edits to image cards/countdown were preserved.


## Follow-up: đủ item cho carousel — 2026-10-27

User authorized adding suitable products and recording the lesson in skills. Added existing Novaire Cassia Floral Print Midi Dress Nude (`gid://shopify/Product/15460943626539`, handle `novaire-cassia-floral-print-midi-dress-nude`, $52) to the end of `trends-novaire` (collection536228495659). Admin readback confirms4 ACTIVE products in order Jesse Blue → Greta Red → Jesse Ivory → Cassia Nude. No new product, media, price or inventory changes.

Changed `max_products`3→4 in homepage instance and Featured collection Add section preset. Desktop1920×1080: five slides (promo+4 products); Next enabled initially, click reveals loaded Cassia, then Next disabled and Previous enabled at the end. Mobile375×812/content360: promo remains detached, four product slides; swiped Jesse→Greta→Ivory→Cassia with image loaded. scrollWidth360/clientWidth360. Thus the earlier desktop navigation/data gap is resolved; previously documented promo dimensions/progress geometry gaps remain.

Lesson: visible Figma cards are the initial viewport, not an exact collection membership count unless explicitly annotated. Carousel sufficiency must use rendered product limit plus inline promos and be checked per breakpoint; adding membership without raising the render limit does nothing. View all uses a separate product-count condition. Added guidance to agents-build-themes build-preset and store-content-media skills, with the detailed source in store-content-media/references/collections.md. Preserve design-first order and append suitable existing products.

Validation: preset/instance both max_products4; skill frontmatter and local links pass; diff whitespace checks pass in both repos. Shopify Theme Check zero errors, seven existing unrelated warnings. Existing preview watcher synced local changes; no separate theme push/publish, Theme Editor save, commit or Git push.


## Follow-up: desktop promo outside slides — 2026-10-27

Reference implementation found in Malandra Collection tabs. Existing desktop checkbox now applies to Product list: promo moves into a separate left host, stripped of slide classes/width/ARIA; products remain in the right carousel. Current Featured collection preset + instance: desktop checkbox true, columns3/max_products4; mobile checkbox true. Desktop now has four product slides and one external promo, maintaining overflow after detachment.

Seven regression tests pass, including desktop on/off for Product list, independent mobile flags, responsive return to original slot and lifecycle cleanup. Storefront visual comparison for this latest change remains unverified: local preview is showing an unrelated sections/countdown.liquid invalid preset button visibility upload error. Earlier successful screenshots apply only to the prior inline-promo implementation. No additional catalog changes.


## Read-only Figma recheck — 2026-10-27

Local proxy still reports unrelated Countdown invalid preset button visibility. Direct draft preview192827490603 is readable and shows latest Product list layout variables, desktop flag true, detached host after module initialization, and4 product slides. Figma CUA reread exact desktop47064:14900 and mobile47284:7179. No theme/content fixes in this review.

Observed remaining differences:
- Desktop viewport1920/content1905: effective row width1504px (container1600 minus internal96), left edge about200px; design row approximately1600px/left160px. Promo355px vs design approximately450px; product images355×443.75px are close to design approximately356×445px. Thus promo width/internal page gutter is the primary desktop geometry mismatch.
- Mobile matched page content375px (viewport390 reserves15px scrollbar): promo343×360px vs design343×approximately433px, changing crop and placement of the model. Current mobile product image283.83×354.78px vs design approximately256×320px, leaving less next-card preview.
- Description computed Poppins16px/24px versus directly inspected Figma Body/14, Poppins400,14px/21px,#6C6C6C,tracking0. Current copy color matches but size/lineheight differ.
- Desktop navigation uses dark Primary controls; design shows pale gray controls. Exact source button color needs property inspection before changing shared tokens.

Desktop heading is consistent: Outfit,32px/44.8px,tracking2.56px; Figma Heading/H2 Outfit Light300,line140%,tracking2.56px and45px text frame. Mobile current heading26px/36.4px; exact resolved source mobile heading size was not inspected in this pass. Mobile root1105.95px vs design1092px; similar total height does not prove its internal geometry matches. Promo detachment and product-only carousel are now observed on draft, superseding the previous latest-change visual blocker for desktop. No pixel-perfect completion claim. Tool screenshots observed; no persistent screenshot evidence saved.


## Figma difference fixes — 2026-10-27

Supersedes the five geometry/description/navigation differences listed in the read-only recheck. Homepage instance and Add section preset both use detached desktop promo width28.125%, mobile promo minimum height433px, mobile preview33%, description sm and Secondary navigation. Product list now exposes these three missing size controls with defaults preserving previous instances. Featured collection page-width content cap excludes its existing side gutters; global settings remain unchanged.

Readback: desktop content1920, promo450px atx160, section854.73px (Figma855), copy14px, navigation background#E6E6E6; Next works with promo fixed and4 product slides. Mobile content375, promo343×433, product254.91×318.63 versus source approximately256×320, copy14/21, no overflow. The remaining approximately1px card-size difference is fractional carousel rounding/configuration; exact mobile heading size and full editor lifecycle not revalidated. Other sections' concurrent changes were retained.

Theme Check zero errors/seven existing warnings;10focused tests pass. Source/runtime/preset/schema linked values verified, no Git commit/push, publication or Theme Editor save. Direct draft preview was used while local proxy had unrelated upload errors; dependency schemas then synced successfully through the already-running watcher.
