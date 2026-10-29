# Norden — Homepage — Featured collection (New Arrivals)

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng57–76](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A57:J76); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:668 / M10012:1454 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Heading; ảnh/crop4card đầu; gapD24/M20; padding0/80D,0/56M; View All; navigationD48|Khớp các phạm vi này. Next/Previous Desktop và swipe Mobile hoạt động; về trạng thái đầu.|||Khớp|
|Chung (Desktop, Mobile)|Layout|Hàng promo rỗng|Không có hàng rỗng trước/sau carousel|Wrapper promo rỗng vẫn tham gia layout; phát sinh gap Desktop40px / Mobile32px|Ẩn wrapper khi rỗng hoặc không render; giữ padding section đúng.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card|Material / vendor|PORCELAIN, DARK OAK, PORCELAIN, NATURAL OAK|Thiếu cả 4 caption vật liệu|Kiểm tra mapping dữ liệu và bật vendor khi dữ liệu đúng; chưa đủ cơ sở chỉ đổi preset.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card|Nội dung tên|Parasol Bowl; Element Bed-Mounted Headboard; Float Vase|Parasol bowl; Element bed-mounted headboard; Float vase|Đồng bộ tên hiển thị với thiết kế.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card|Line-height tên|16px / 150% =24px|16px / 140% =22.4px|Đối chiếu preset typography H4 relaxed1.5; cần kiểm tra phạm vi ảnh hưởng.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Color swatch|Số lượng hiển thị|Parasol1swatch(D/M); Desktop4card:1/3/1/2|Parasol0swatch(D/M); Desktop4card:0/0/0/1|Swatch đã bật; cần xác minh dữ liệu variant và cách render, không tự tạo màu.||Chưa khớp|
|Chung (Desktop, Mobile)|Price|Font weight|Medium500|Regular400|Cần override typography giá; chưa có setting weight riêng.||Chưa khớp|
|Chung (Desktop, Mobile)|Price|Gap sale → compare|4px|5px|Đặt gap price4px riêng instance/style này; không suy gap của Featured collection khác.||Chưa khớp|
|Chung (Desktop, Mobile)|Price / Compare|Font size|16px|14.4px|Không thu nhỏ compare price so với font-size nguồn.||Chưa khớp|
|Chung (Desktop, Mobile)|Price / Compare|Màu hiển thị|#808080|raw#4D4D4D, opacity.72 trên trắng≈#7F7F7F|Đặt màu compare trực tiếp theo nguồn; bỏ opacity bù màu.||Chưa khớp|
|Chung (Desktop, Mobile)|Badge|Border|0px; khung22px|1px; khung24px|Bỏ border gây tăng khung2px; giữ padding2×10.||Chưa khớp|
|Chung (Desktop, Mobile)|Badge|Inset|12px|7.5px|Cần inset scoped12px.||Chưa khớp|
|Chung (Desktop, Mobile)|Progress bar|Tỷ lệ fill ban đầu|D20%; M≈12.49%|D50%; M20%|Swiper tính theo snapGrid; cần quy tắc pagination khớp thiết kế. Không suy số item nguồn từ tỷ lệ.||Chưa khớp|
|Chung (Desktop, Mobile)|Progress bar|Màu active|#1A1A1A|#4D4D4D|Sửa cascade active fill về heading color.||Chưa khớp|
|Chung (Desktop, Mobile)|Progress bar|Border radius|Track10px / fill4px|0px /0px|Bổ sung radius cho track/fill.||Chưa khớp|
|Chung (Desktop, Mobile)|Price / Regular|Màu chữ|#1A1A1A|#4D4D4D|Đặt regular price dùng heading color, không đổi body-color toàn theme.||Chưa khớp|
|Desktop|Grid/slide|Gap progress → navigation|24px|40px|Gap hardcode trong product-list; cần chỉnh scoped, chưa có setting riêng.||Chưa khớp|
|Desktop|Color swatch|Trạng thái mặc định|Swatch đầu Selected|Hauge Beige chưa checked|Đồng bộ lựa chọn ban đầu và vòng selected; không quy lỗi kích thước16px outer.||Chưa khớp|
|Mobile|Product card / Quick view|Hiển thị Mobile|Ẩn ở frame mặc định|Hiện icon|product_card_quick_view_mobile=false; recheck.|Lần 1|Khớp|
|Mobile|Product card / Quick add|Hiển thị Mobile|Ẩn ở frame mặc định|Hiện icon|product_card_quick_add_mobile=false; recheck.|Lần 1|Khớp|

## Bằng chứng và diễn giải

MCP xác nhận source textCase=TITLE cho tên card, UPPER cho material dù characters giữ chữ thường. Giá Parasol30/60 đúng nội dung; price gap4px cả D/M, khác Featured collection trước đó. Swatch chung chỉ kết luận Parasol1→0(D/M); bảng4card1/3/1/2 chỉ Desktop. Lỗi Hauge Selected chỉ Desktop vì Mobile không có Hauge trong frame. Mobile1full+nextpeek miễn so chính xác width card/peek/section height. Wrapper promo rỗng gây thêm gapD40/M32 là lỗi độc lập. Không báo height section765.98vs750 lần nữa vì các nguyên nhân con đã ghi.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden — Homepage — New Arrivals

Checkpoint 27/10/2026. **QA đang tiếp tục, chưa hoàn tất section.** Sáu lỗi đã xác minh được ghi và style vào Sheet hàng60–65; CSV đọc lại đúng nội dung, screenshot xác nhận merge, Arial10, wrap/middle, highlight F/G và dropdown màu. Our Favorites chuyển sang66–67.

- Sheet: https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A60:J65
- Preview: https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931
- Nguồn Figma D47227:7323 / M47557:4382 trong file9770x6Fo149ZeyWbvWwjk2. Copy section D10012:668 / M10012:1454.
- Instance runtime kết thúc `__aike_best_sellers`.

## Đã ghi Sheet

|Hàng|Thuộc tính|Figma|Runtime|
|---|---|---|---|
|60|Wrapper promo rỗng|Không có hàng rỗng|Thêm khoảng gap D40/M32 do wrapper rỗng vẫn tham gia layout|
|61|Material/vendor|PORCELAIN; DARK OAK; PORCELAIN; NATURAL OAK|Thiếu4caption|
|62|Tên3sản phẩm đầu|Parasol Bowl; Element Bed-Mounted Headboard; Float Vase|Parasol bowl; Element bed-mounted headboard; Float vase|
|63|Line-height tên|16/150%=24|16/140%=22.4|
|64|Swatch4card đầu|1/3/1/2|0/0/0/1|
|65|Gap progress→navigation D|24|40|

Line-height có preset H4 relaxed1.5, gắn Lần1 để xử lý; chưa sửa theme. Swatch đã bật trong config, không tự kết luận chỉ bật setting là đủ; dữ liệu catalog không tạo màu giả. Vendor cần kiểm tra mapping vật liệu trước khi đề xuất bật.

## Bằng chứng và phần còn phải hoàn tất

Desktop source: container1600, 4card382px, gap24, ảnh square; section1920×750 padding0/80. Mobile375, container343, gap32 và carousel1full+peeknext: miễn đối chiếu chính xác chiều rộng card/peek/chiều cao section theo quy ước QA. HeadingMobile22/130%,700,tracking0,#1A1A1A đã đọc bằng detachstyle tạm và Undo. Product name16/150%,600.

Còn kiểm/ghi: typography và màu giá, badge, progress fill/radius/width, trạng thái chọn swatch, button underline và navigation functional; sau đó thêm summary khớp. Không coi toàn bộ section đạt từ sáu hàng này. Desktop source JSON: `/private/tmp/norden-homepage-qa-20261026/new-arrivals-figma-desktop.json`. Mobile chi tiết lượt trước chưa xuất JSON, cần đọc lại nguồn thay vì tự dựng dữ liệu.

Evidence Sheet: `/private/tmp/norden-homepage-qa-20261026/sheet-new-arrivals-partial.png`.

## Khôi phục kết nối lượt này

Tab cũ báo Debugger unattached; native click bị từ chối do cửa sổ thay đổi. Tạo tab Sheet mới đã phục hồi Browser Use, xác minh tài khoản minhle@beae.com; không còn coi đây là blocker. File từng bị đổi tên nhầm khi chọn textbox đầu, đã khôi phục Norden ngay trước ghi dữ liệu; CSV và screenshot xác nhận đúng file.

Cleanup Figma chỉ sau khi hoàn thành QA và lưu đủ bằng chứng: xóa đúng roots10012:544/10012:1371, giữ nội dung khác. Chưa cleanup.

</details>


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|61|`type_heading_4_line_height: normal (1.4)→relaxed (1.5)`|Applied local; chờ QA Desktop/Mobile|
|75|`product_card_quick_view_mobile=true; product_card_quick_add_mobile=true (giữ nguyên)`|Không áp theo yêu cầu người dùng: luôn hiện Quick view/add trên Mobile|
|76|`product_card_quick_view_mobile=true; product_card_quick_add_mobile=true (giữ nguyên)`|Không áp theo yêu cầu người dùng: luôn hiện Quick view/add trên Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|61|Product title16px/24px; type_heading_4_line_height=relaxed (1.5); các card consumer đã kiểm|Khớp|
|75|Mobile Quick view/Quick add wrapper display:none, box0×0; không hiện mặc định. Theo yêu cầu mới đã bật lại việc sửa các dòng Lần1; Desktop giữ enabled|Khớp|
|76|Mobile Quick view/Quick add wrapper display:none, box0×0; không hiện mặc định. Theo yêu cầu mới đã bật lại việc sửa các dòng Lần1; Desktop giữ enabled|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.

Yêu cầu mới nhất thay thế quyết định giữ nút trước đó: Quick add/Quick view Mobile được sửa vì gắn Lần1; current settings đều false, wrapper display:none/box0×0. Desktop vẫn enabled.
