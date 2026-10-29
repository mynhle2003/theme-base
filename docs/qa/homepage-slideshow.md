# Norden — Homepage — Slideshow

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng18–26](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A18:J26); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:586 / M10012:1393 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Cao D800/M670px; padding80px; Heading Instrument Sans700 D64/76.8px,M40/48px,#FFF; Primary Button D48/M44px|Đủ nội dung/ảnh tham chiếu; Heading, màu Button, bo tròn, gap Eyebrow→Heading12px; control căn giữa, inset dưới32px khớp; Next/Previous và pagination đổi index, trả về slide1; geometry arrow24 đúng, stroke lệch ghi riêng.|||Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font size|16px|14px|type_eyebrow_size=16; setting global, recheck Eyebrow khác|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font weight|600 SemiBold|500|type_eyebrow_weight=600; recheck các consumer global|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Letter spacing|0px|0.5px|type_eyebrow_letter_spacing=normal map0em|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Layout|Gap Heading→Button|36px|12px|Slide gap đã36px nhưng .hero__content tải sau thắng cascade; cần scoped CSS||Chưa khớp|
|Chung (Desktop, Mobile)|Navigation/pagination|Inactive background alpha|#FFF50%|#FFF24%|Grouped controls hardcode24%; chưa có setting alpha riêng||Chưa khớp|
|Chung (Desktop, Mobile)|Navigation/pagination|Active bar width|36px|32px|Nguồn D/M36px; public runtime cả hai32px. Rà asset/cascade; không tự push.||Chưa khớp|
|Chung (Desktop, Mobile)|Navigation / Arrow|Stroke width|1.5px|1.8px|Dùng stroke1.5px scoped; frame24 và path6×12 đã khớp.||Chưa khớp|
|Mobile|Button|Padding ngang|28px mỗi bên|24px mỗi bên|button_padding_inline_mobile=28; global, recheck Button khác|Lần 1|Khớp|

## Bằng chứng và diễn giải

MCP chốt arrows24, path6×12, stroke nguồn1.5; runtime1.8. Active bar nguồn36 ở cả Desktop/Mobile, runtime32 ở cả hai: sửa phạm vi lỗi trước đó chỉ ghi Mobile. Next/Previous/pagination đổi index0↔1 và trả về slide tham chiếu. Không đánh giá pixel-perfect nội dung slide2 vì không có frame riêng được giao. Không lấy một click trong600ms transition làm lỗi chức năng.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden Homepage — Slideshow

Kiểm ngày26/10/2026, STT3; instance `aike_slideshow`. QA chỉ đọc theme. Kết quả phần đã xác minh đã ghi/đọc lại tại Sheet22–29 và xác minh style bằng ảnh, không gọi toàn homepage hoàn tất.

## Nguồn và điều kiện đo

- [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323), [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382).
- Bản tạm Desktop Slideshow10012:586; Mobile10012:1393. Frame tạm thuộc hai root10012:544/10012:1371; không sửa bản gốc.
- [Preview public Norden](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Vùng nội dung1920px và375px; innerWidth1931px/386px, scrollbar11px, DPR1, font loaded.
- Source Desktop1920×800px, Mobile375×670px. Ảnh, overlay đen20%, padding dọc80px; container1600px/343px. Preview khớp các khung/padding và media tương ứng.
- Mobile export PNG thành công tại `/Users/beae/Downloads/Slideshow.png` (375×670). Export không chứa frame Homepage3 đang che canvas; không lấy phần bị frame khác che làm lỗi thiết kế.
- Người dùng đã cho phép tách text style chỉ trên hai frame tạm. Đã đọc font và Undo ngay; `headingFont.restored` và `buttonLabelFont.restored` xác nhận style gắn lại. Một lần click nhầm lock của Heading tạm đã được khôi phục về unchecked, không sửa nguồn.

## Đã kiểm và khớp

- Đủ Eyebrow, Heading, Primary Button, ảnh và controls cho slide tham chiếu. Nội dung hiển thị: Effortlessly / Your Home, Reimagined / Shop The Look. Text phụ trong component nguồn đang ẩn; không báo thiếu text này.
- Heading Instrument Sans Bold700, Desktop64px/120%=76.8px, Mobile40px/120%=48px, tracking0, màu#FFF; đúng kiểu xuống2 dòng. Tên style vẫn ghi64/120 ở Mobile nhưng giá trị theo mode là40px; dùng số thực đã inspect.
- Eyebrow đúng nội dung, Instrument Sans, màu#FFF, line-height ratio150%; size/weight/tracking còn lệch bên dưới.
- Gap Eyebrow→Heading12px khớp. Căn trái, cụm nội dung căn giữa theo chiều dọc section.
- Primary Button: Instrument Sans SemiBold60016px, tracking0; nền/outline#FFF, label#1A1A1A; cao48px Desktop/44px Mobile; bo tròn hoàn toàn. Không báo line-height label thành lỗi độc lập. Desktop padding32px đúng; frame177px nguồn so178px runtime được chấp nhận do metrics/border, không ép width bù1px.
- Controls có hai arrows, pagination; frame arrow24px, gap arrow→pagination10px, gap dot12px, inset dưới32px. Dùng ảnh export để kiểm số indicator đang hiển thị; không lấy mọi layer dot trong cây làm số slide vì có layer ẩn.
- Chuyển về slide1 bằng pagination đã xác nhận active index0, không còn reveal-pending và font loaded. Chưa dùng ảnh đang transition để kết luận crop hoặc vị trí.

## Sai lệch đã xác minh

| Thiết bị | Thành phần / thuộc tính | Figma | Hiện tại | Hướng xử lý |
| --- | --- | --- | --- | --- |
| Chung | Eyebrow font-size |16px|14px|Setting global `type_eyebrow_size` có16; cần recheck các Eyebrow khác khi đổi. Cờ Lần1, chưa sửa.|
| Chung | Eyebrow weight |600 SemiBold|500|Setting `type_eyebrow_weight` có600; cờ Lần1.|
| Chung | Eyebrow tracking |0px|0.5px|`type_eyebrow_letter_spacing=normal` map0em; cờ Lần1.|
| Chung | Layout gap Heading→Button |36px|12px|Inline slide gap đã36px, nhưng rule `.hero__content {gap:var(--hero-content-gap,1.2rem)}` tải sau thắng `.slideshow-slide__content-inner` cùng specificity. Cần xử lý cascade scoped; đổi preset36 lần nữa không giải quyết.|
| Chung | Pagination inactive background alpha |#FFF50%|#FFF24%|Runtime `::before` dùng `color(srgb 1 1 1 / .24)`. Rule grouped controls hardcode24%; chưa có setting alpha riêng.|
| Mobile | Pagination active bar width |36px|32px|So bar hiển thị, không nhầm hit area cao24px với visual8px. Local CSS đã có rule36px nhưng public runtime vẫn32px; cần đối chiếu asset đang tải và draft sync, không tự push.|
| Mobile | Button horizontal padding |28px mỗi bên|24px mỗi bên|Setting `button_padding_inline_mobile` cho phép28px; global ảnh hưởng các Button khác, cần recheck. Cờ Lần1.|

Line-height Eyebrow24px/21px là hệ quả size16/14 với cùng ratio1.5; không tạo lỗi line-height độc lập. Cụm Heading nguồn190px Desktop/132px Mobile; Column274px/212px. Runtime khác do size Eyebrow và gap nêu trên; không báo thêm chiều cao cha hay đổi padding80px để bù.

## Evidence và phần cần tiếp tục

- `/private/tmp/norden-homepage-qa-20261026/slideshow-figma-desktop.json`, `slideshow-figma-mobile.json` giữ các giá trị UI và font đã đọc trên bản tạm.
- `/private/tmp/norden-homepage-qa-20261026/slideshow-runtime-mobile.json`, `runtime-all-desktop-latest.json`, `runtime-all-mobile-latest.json` giữ computed style; vị trí của slide inactive/animation không dùng để chốt hình học.
- Cần kiểm chi tiết stroke/bounds arrows và active/progress ở nhiều thời điểm, cùng nội dung slide2 khi có nguồn tương ứng. Chưa kết luận mọi trạng thái Slideshow pixel-perfect.
- Export settings PNG được thêm trên frame tạm10012:1393; dọn cùng đúng hai root QA sau khi hoàn tất. Không xóa Homepage2/3 của công việc khác.

</details>


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|19|`type_eyebrow_size: 14→16`|Applied local; chờ QA Desktop/Mobile|
|20|`type_eyebrow_weight: 500→600`|Applied local; chờ QA Desktop/Mobile|
|21|`type_eyebrow_letter_spacing: 0.5px→normal (0em)`|Applied local; chờ QA Desktop/Mobile|
|26|`button_padding_inline_mobile: 24→28`|Applied local; chờ QA Desktop/Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|19|Desktop/Mobile size=16px; font Instrument Sans; normal tracking=0em|Khớp|
|20|Desktop/Mobile weight=600; font Instrument Sans; normal tracking=0em|Khớp|
|21|Desktop/Mobile tracking=normal; font Instrument Sans; normal tracking=0em|Khớp|
|26|Mobile padding ngang 28px mỗi bên; chiều cao44px; Desktop padding32px/chiều cao48px giữ nguyên|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.
