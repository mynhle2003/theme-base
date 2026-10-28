## Custom giá thường toàn theme — recheck 2026-10-28

Người dùng cho phép sửa custom trên toàn theme bằng scoped `var(--heading-color)` và cập nhật các lỗi tương tự ở section khác. `assets/critical.css` thêm `.price > .price__current--regular { color: var(--heading-color); }`. Shared price áp dụng cho product card, product page, cart và bundle subtotal; giữ riêng sale, compare-at, unit price. Compact card đã dùng cùng token, giữ rule hiện có.

Recheck Homepage Desktop client1920 và Mobile client375 trên localhost9301: Collection tabs và Featured collection giá thường #3A3A3A, khớp nguồn Figma và heading tại section. Video compact giá thường #FFFFFF theo heading local; không ép toàn theme thành màu đen. Sale thường #D82727, sale Video #F07B6E, compare-at #808080 giữ nguyên; body #6C6C6C. Trang sản phẩm Cassia Nude giá thường $52.00 / #3A3A3A khớp token Heading; đây là kiểm hồi quy component, không phải QA Figma trang Product. Cart/bundle được kiểm cấu trúc consumer, chưa thao tác dữ liệu để kiểm UI có item.

Sheet Homepage dòng22 và34: Lần 2 / Khớp. Giữ Figma/Hiện tại gốc để truy lịch sử; append xác nhận custom + số đo mới vào Hướng xử lý, bỏ highlight sai lệch đã giải quyết. Đọc lại dữ liệu sau ghi xác nhận đúng. Các lỗi khác vẫn giữ nguyên, không suy cả section đạt.

Validation: Theme Check 0 lỗi / 8 cảnh báo; git diff --check đạt. Evidence tạm trong `/tmp/novaire-qa-20261028/`: regular-price-desktop.json, regular-price-mobile.json, regular-price-product.json, regular-price-theme-check.json và price-sheet-before/after.tsv. Không commit/push/publish hay Save Theme Editor.

---

## Grid/slide Mobile — áp dụng skill mới 2026-10-28

Phạm vi Homepage, không suy chuẩn tỷ lệ preview chung toàn theme khi chưa có nguồn các trang khác. Figma Mobile node47284:7133, canvas100%: frame375px, card ảnh đầu x826→1082 (256px), card sau bắt đầu1094; gap12px và mẫu1 card đầy đủ + card kế tiếp ló ra. Runtime client375: container chia item343px, card283.828125px, gap12px, card sau bắt đầu311.828125px; Swiper overflow visible. S=1.2 cho W=(343−0.2×12)/1.2≈283.833px, sai số subpixel. Không gọi phần preview là20% chỉ từ setting.

Theo quy tắc Grid/slide mới cho QA page/section: kiểm mẫu preview và gap trong phạm vi, không bắt exact width/tỷ lệ khi chưa có chuẩn chung đã xác minh. Dòng25 đổi tiêu chí thành Số item / gap / preview và Khớp; số đo cũ giữ trong lịch sử này. Dòng26 Height Mobile vẫn Bỏ qua / Chưa khớp theo lựa chọn người dùng; không sửa padding bù card.

---

## Collection tabs — Fix lần 2 / recheck — 2026-10-28

Nguồn phân công: Sheet Homepage A21:J26, snapshot collection-tabs-fix2-before.tsv/ct2-prewrite.tsv. Chỉ dòng22 màu giá và24 Navigation được gắn Lần2. Dòng26 Height Mobile được người dùng đặt Bỏ qua, giữ nguyên; dòng25 width card Chưa xác minh được đo lại nhưng không suy nguồn parent từ text wrapper.

| Tiêu chí | Kết quả lượt này | Trạng thái Sheet |
| --- | --- | --- |
| Navigation Desktop | Max products4→5, 5 slide/4 cột ở cả3 tab; Next hoạt động đưa Romilly vào vùng nhìn thấy ở Best sellers, Previous khả dụng sau khi trượt. Hai nav hiện khi hover như user chấp nhận; nav secondary trắng/#3A3A3A, chevron, radius pill,43px. | Khớp; Lần2 |
| Giá thường | Runtime Desktop/Mobile #6C6C6C; nguồn #3A3A3A trùng Heading. Đã kiểm product-card schema/global price, không có control regular-price color riêng. Ghi gap implementation scoped var(--heading-color), không đổi Body scheme hoặc CSS để lách giới hạn ghi chú. | Chưa khớp; Lần2 |
| Width content Desktop | Content1600px, card379px, gap28px; không overflow ngang | Khớp giữ nguyên |
| Width card Mobile | Client375/card283.828125px; chưa có số đo trực tiếp parent card Figma, khoảng256px cũ chỉ từ text/ảnh | Chưa xác minh |
| Height Mobile |749.75px; không giảm padding để bù card width | Chưa khớp; giữ Bỏ qua |

### Mapping local

- templates/index.json →sections.collection_tabs.settings: max_products4→5, navigation_style primary→secondary, color_scheme scheme-1→scheme-collection-tabs; navigation_behavior vẫn show_on_hover theo user chấp nhận.
- sections/collection-tabs.liquid →presets[0].settings đồng bộ cùng3 giá trị. Không đổi controls/schema khác hay implementation.
- config/settings_data.json: scheme-collection-tabs clone scheme-1, chỉ secondary background/border thành#FFFFFF để nav trắng theo nguồn; typography/body/heading/sale/primary giữ nguyên. Scheme chỉ assigned Collection tabs. Kiểm card typography, regular/sale price, View all và ba panel sau đổi; regular price vẫn #6C6C6C như mục gap.

### Store receipt

Dùng store-content-media (nhóm setup-store), đúng store layouthub-template-v2.myshopify.com/USD đã xác minh. Trước mutation: Bestsellers Novaire536228266283=9, New In536228299051=9, Midi Dresses536228331819=5, manual. Thêm product Novaire có sẵn Steele blue Midi (`gid://shopify/Product/15464025915691`, handle novaire-steele-puff-sleeve-midi-dress-blue) vào cuối Midi Dresses. Tool readback xác nhận6 sản phẩm và giữ5 sản phẩm trước; không tạo product/ảnh, không đổi giá/stock/publication hoặc membership theme khác. Bestsellers/New In đã đủ nên không thêm trùng. Collection counts9/9/6 > max5, nên View all vẫn hiện ở cả3 tab, đồng thời5 slide >4 cột. Các sản phẩm đầu nguồn giữ nguyên.

### Recheck và validation

Desktop1935×1080/client1920, Mobile390×812/client375; scrollWidth=clientWidth. Cả3 tab tải đúng thứ tự product và View all href từng collection; Best sellers Next đã click và xác nhận vị trí card đổi từx160→-247, card5 vềx1381. Trở lại Best sellers sau test. Mobile navigation Desktop ẩn như cũ; đo5 slide/card283.83 ở từng tab. Chỉ recheck Collection tabs và consumer của scheme riêng, không tuyên bố QA lại toàn Homepage.

Theme Check0errors/8warnings, git diff --check pass. Evidence tạm: /tmp/novaire-qa-20261028/ct2-desktop.json, ct2-mobile.json/png, ct2-theme-check.json; snapshot trước cấu hình trong ct2-before/. Bị ngắt do browser disabled trước recheck, sau user thử lại đã kết nối Chrome beae.com và hoàn tất phần UI/Sheet. Không push/publish/Save editor/commit. Giữ các ô Figma/Hiện tại gốc để truy lịch sử; hướng xử lý của user được giữ và chỉ thêm ghi chú gap/recheck.

---

## QA hiện hành — 2026-10-28

STT 4 — **Collection tabs**. Instance `index/collection_tabs`; type `collection-tabs`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A21:J26. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-15484
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7133
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-3.png`, `figma-m-3.png`, `final-desktop-3.png`, `final-mobile-3.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Eyebrow, ba tab, tên/giá bốn sản phẩm; typography title; các tab tải đúng danh sách | Eyebrow, ba tab, tên/giá bốn sản phẩm; typography title; các tab tải đúng danh sách |  |  | Khớp |
| Chung (Desktop, Mobile) | Product price | Màu giá thường | #3A3A3A | #6C6C6C | Dùng $build-preset: giá nguồn #3A3A3A trùng Heading, khác Body #6C6C6C; hướng kế thừa var(--heading-color) cho regular-price. Kiểm control hiện có; nếu thiếu thì ghi gap implementation, không đổi toàn scheme |  | Chưa khớp |
| Desktop | Tổng quan layout | Chiều rộng nội dung | 1600px; inset 160px | 1600px; container border-box 1696px = 1600 + 48 × 2; inset nội dung 160px |  |  | Khớp |
| Desktop | Navigation | Trạng thái đầu | Hai mũi tên hiện | show_on_hover; Swiper khóa vì có 4 sản phẩm / 4 cột | always chỉ đổi hover; cần chốt cách hiển thị control khi không có overflow, chưa gắn vòng fix |  | Chưa khớp |
| Mobile | Grid/slide | Chiều rộng card | Text/card khoảng 256px; chưa đọc parent card trực tiếp | 283.83px; preview tiếp theo hẹp hơn ảnh thiết kế |  |  | Chưa xác minh |
| Mobile | Layout | Chiều cao section | 694px | 749.75px | Chốt width card/preview trước; không giảm padding để bù ảnh cao |  | Chưa khớp |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — collection-tabs

## Best sellers store content update — 2026-10-27

Store `layouthub-template-v2.myshopify.com`, collection536228266283. Reused the four existing Novaire products. Created six dedicated `shopify--color-pattern` metaobjects and linked their product options; no shared color definitions changed. Exact Figma colors read through CUA/Chrome: Cassia47054:15490 #F8DEC3; Tara47054:15491 #261F72/#FFFFFF; Celeste47054:15492 #293954; Lucy47054:15493 #59AE4F/#DF2D25. Names now Nude, Blue/White, Navy, Green/Red. New metaobject IDs667305607467/667305673003/667305705771/667305771307/667305804075/667305869611.

Added9Lucy Red variants for existing sizes8–24 (even numbers), IDs67904647856427 through67904648118571, $45, tracked inventory0, DENY. Existing green variants untouched; Lucy remains SOLD OUT. First attempt returned validation error and created nothing; corrected request returned9variants/no errors. Collection order remains Cassia/Tara/Celeste/Lucy. Prices and existing main media retained.

Storefront readback verified all six swatches have exact RGB values and20×20 geometry. Four card prices match Figma and Tara remains SALE. Local preview was blocked by an unrelated `collection-list` preset error (undefined collection-card setting `position`); verified via existing Novaire unpublished draft192827490603 instead, no push/save/publication.

Remaining limitations: Lucy Red has no verified red catalog/gallery, so those variants have no media assigned. Existing Tara White gallery is inherited and was not newly verified against a selected white Figma state. Existing sold-out swatch styling differs from static Figma, and draft card overflow clips the lower parts of some swatches; these are implementation/render gaps, not product-color data errors. Do not claim exact visual parity or complete per-color galleries. No generated replacement images or new product records in this update.

Readback:
- Cassia Floral Print Midi Dress Nude (`novaire-cassia-floral-print-midi-dress-nude`): 4 media; 5 variants; colors `[('Nude', {'color': '#F8DEC3'})]`; prices `['52.00']`; compare `['None']`; stocks `[20]`.
- The India Edit Tara Drop Waist Maxi Dress (`novaire-the-india-edit-tara-drop-waist-maxi-dress`): 6 media; 2 variants; colors `[('Blue', {'color': '#261F72'}), ('White', {'color': '#FFFFFF'})]`; prices `['45.00']`; compare `['90.00']`; stocks `[20]`.
- Celeste Floral Ruffle Maxi Dress Blue (`novaire-celeste-floral-ruffle-maxi-dress-blue`): 4 media; 9 variants; colors `[('Navy', {'color': '#293954'})]`; prices `['91.00']`; compare `['None']`; stocks `[20]`.
- Lucy Broderie Dress Green (`novaire-lucy-broderie-dress-green`): 4 media; 18 variants; colors `[('Green', {'color': '#59AE4F'}), ('Red', {'color': '#DF2D25'})]`; prices `['45.00']`; compare `['None']`; stocks `[0]`.

## Current result — Collection tabs preset completion, 2026-10-27

This checkpoint supersedes the blocked visual status below. Read Figma through CUA/Chrome on the beae.com profile; desktop `47054:15484`, mobile `47284:7133`. Original source remained read-only. No implementation code added.

### Configuration and content delivered

- Updated `sections/collection-tabs.liquid` single original preset and `templates/index.json` / `collection_tabs`: Page width, existing Eyebrow NEW ARRIVALS, Heading/H3 tabs (Outfit Light, 28px desktop / 22px mobile), BEST SELLERS label, 36px tab gaps, mobile product gap12px, section gap40px desktop /36px mobile, tertiary underlined View all with no redundant top padding. Existing static Header/Tab layout/View all slots remain synchronized with Add section.
- Mobile alignment configured left; View all uses its existing mobile Fill width to keep its text centered. The runtime still centers the first tab, as documented below.
- Shared product-card Theme Settings: `product_card_quick_add_mobile` true → false; `product_card_swatch_width_mobile`16 →20. These affect every product card using the shared settings, including Trends and Look; other sections were not visually audited in this request. No global page width, margin, font or palette changes.
- Store mutation: moved existing Cassia product15460943626539 to index0 of Bestsellers Novaire collection536228266283. Readback verified Cassia → Tara → Celeste → Lucy followed by the unchanged remaining products. No catalog duplication, new products, price or stock changes. New In and Midi Dresses order retained because no selected-state source was supplied for those tabs.

### Render verification

- Figma desktop frame1920×912.75; mobile375×694. Source first image desktop379×473.75, mobile256×320, both read from Image properties. NEW ARRIVALS: Poppins400/12px/170%/2px tracking. Mobile first tab: Outfit300, line height150%, tracking2.24px. Product title: Outfit400/12px/170%/0.96px tracking.
- Preview `http://127.0.0.1:9300/`, existing unpublished theme192827490603. Desktop viewport1920×1080/content1905px; mobile375×812/content360px because native scrollbar consumes15px. Both supplied reference widths checked. No explicit theme push, publish or Theme Editor save performed; the already-running development preview reflected local edits.
- All three tabs verified on BOTH viewports after their asynchronous load: correct active products and a visible View all link to their respective collection handles. Best sellers order matches the source. Sale and sold-out states remain present. Mobile document clientWidth/scrollWidth both360px.
- Inspected all four primary image slots: correct Cassia peach-dress pose, Tara front blue dress, Celeste back navy dress and Lucy front green dress. Existing4:5 source images retained; currentSrc resolves to their Novaire catalog AVIFs. Centered cover crop retained. Absolute rendered geometry differs below; exact pixel fidelity is not claimed. Secondary image hover and full Theme Editor lifecycle were not verified.

Final validation:81 configured values passed schema checks; Theme Check0errors/7warnings outside this preset; git diff --check passed.

### Remaining verified gaps

| Detail | Figma | Current result / missing control |
| --- | --- | --- |
| Desktop content width |1600px; image379×473.75|Page setting yields1504px inner content and355×443.75 images. Global max page width1600 includes48px padding each side. No section-specific max-width override; changing global width would affect unrelated layouts.|
| Mobile card width |256×320|At360px content, native1.2-slide preview yields271.33×339.16. No per-section fractional slide-width control.|
| Heading → tabs gap |Desktop Section header Gap6=24px; mobile visual arrangement also24px|Theme reuses section gap40px desktop /36px mobile for this interval and for the product list. No independent header/navigation gap control.|
| Mobile tabs alignment |First tab starts at16px; more of New In is visible|First tab starts around94.5px despite `mobile_alignment:left`. Runtime scroll-start calculation reads desktop center alignment; preset cannot correct it without changing desktop layout/implementation.|
| Desktop arrows |Previous/next circular controls visible at image edges|With4 rendered products and4 columns the carousel locks and hides navigation. Raising max_products to5 would make View all unavailable for Midi Dresses, which has5 products. No additional verified appropriate product source to bring that collection above5; no products invented to force overflow.|
| Color swatches |Tara dark navy/white; Lucy green/red|Current visible Tara swatch is light blue; Lucy lacks a verified red variant/gallery and shows sold-out styling. Existing product options retained; no invented color/gallery data.|
| Minor type metrics |Mobile tab tracking2.24px; eyebrow2px; View all12px|Shared responsive tokens yield tab1.76px, eyebrow1.92px and button13px. No section-specific controls for these metrics.|

The closest supported preset is delivered. These gaps remain unimplemented under build-preset's configuration boundary: “do not edit Liquid/HTML outside `{% schema %}`, CSS, JavaScript, snippets or custom CSS fields to chase visual fidelity.” Source skill: `/Users/beae/Documents/GitHub/Layouthub v2/agents-build-themes/skills/build/preset/build-preset/SKILL.md`.

Temporary Figma/preview screenshots were captured for comparison; measurements and conclusions above are retained, screenshots cleaned after verification. Task-owned Figma and preview tabs are closed; existing user tabs retained.

## Preset follow-up — 2026-10-27

Request: build-preset + setup-store against desktop `47054:15484` and mobile `47284:7133`.

- Fixed Add section preset parity: copied the existing homepage's static Header (NEW ARRIVALS), Tab layout and View all settings into the single original Collection tabs preset. Previously only the three dynamic collection tabs were declared. No implementation or homepage instance edits in this follow-up.
- Live Shopify connector readback confirmed the target store `layouthub-template-v2.myshopify.com`, the three selected collection handles and active products. Bestsellers/New In each contain 9 products; Midi Dresses contains 5. All exceed local `max_products: 4`; Online Store availability and actual initialized View all visibility were not reverified in this follow-up. Existing content reused; no store mutations.
- Validation: preset settings equal homepage settings; all three static slot settings match; configured block setting IDs, select values and range values pass. Theme Check: 0 errors, 7 warnings outside the changed preset. `git diff --check` passes.
- Visual status: UNVERIFIED in this follow-up. Figma MCP returned the View-seat call limit. The matching Chrome tab was held by another Codex session; native Chrome interaction timed out. A subsequent tab creation resolved to the in-app browser instead of the requested Chrome surface and was immediately closed without using it as design evidence. No task-created tabs retained. Historical observations below are not a fresh visual comparison.
- Remaining work: obtain accessible Figma desktop/mobile evidence, verify each product crop and typography/spacing, preview the configured section at both reference widths and test each tab/View all after initialization. No new visual mismatch claims, push, publication or Theme Editor save in this follow-up.

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/collection_tabs`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-15484
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7133
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Desktop first tab has Tara/Cassia/Celeste/Lucy, real prices/swatches and Sold out. Mobile Midi Dresses tab activates and loads Cassia/Lucy/Steele/Jesse. Carousel shows one card plus preview; View all routes to selected collection.

Local evidence: `/tmp/novaire-qa-evidence/mobile-collection-tabs.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.
