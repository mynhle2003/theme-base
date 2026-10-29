# Norden — Homepage — Footer

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng109–119](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A109:J119); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:837 / M10012:1607 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Nền#F5F5F5; paddingD64/M56; heading700D18/M16,150%; body/menu16/24; consent14/21; formD48/M44; social4icon24/gap12; payment6logo38×24/gap12|Khớp nội dung/thứ tự newsletter,3menu,social,payment,credits; Dlayout1600; Mstack và menu mặc định đóng. About mở/đóng được. Chưa gửi email đăng ký.|||Khớp|
|Chung (Desktop, Mobile)|Logo|Width|174px|176px|Đặt width174px và đối chiếu asset/ratio; không áp quy tắc font metrics cho bitmap/logo.||Chưa khớp|
|Chung (Desktop, Mobile)|Newsletter / Input|Padding ngang|24px|16px|Chỉnh form input padding24px; giữ chiều cao48/44.||Chưa khớp|
|Chung (Desktop, Mobile)|Newsletter / Input|Màu placeholder|#999999|raw#4D4D4D60% trên#F2F2F2≈#8F8F8F|Đặt màu placeholder trực tiếp#999999, không dùng opacity bù.||Chưa khớp|
|Chung (Desktop, Mobile)|Footer links|Màu chữ|#1A1A1A|#4D4D4D|Đặt policy links dùng heading color.||Chưa khớp|
|Chung (Desktop, Mobile)|Localization|Màu chữ|#1A1A1A|#4D4D4D|Đặt summary country/language dùng heading color.||Chưa khớp|
|Chung (Desktop, Mobile)|Localization|Padding ngang|10px mỗi bên|0px|Bổ sung padding summary10px; không ép tổng width để bù.||Chưa khớp|
|Chung (Desktop, Mobile)|Localization|Gap nội bộ|8px|3.5px|Đặt khoảng giữa flag/label/chevron8px.||Chưa khớp|
|Chung (Desktop, Mobile)|Localization / Flag|Kích thước|20×20px|12.5×12.5px|Tách kích thước cờ khỏi hệ số icon hiện tại, dùng20px.||Chưa khớp|
|Mobile|Newsletter / Button|Padding ngang Mobile|28px|24px|Đặt side spacing Mobile28px; giữ height44.|Lần 1|Khớp|
|Mobile|Menu|Padding dọc Mobile|16px trên/dưới; row56px|24px trên/dưới; row72px|Giảm padding heading/menu Mobile về16px.||Chưa khớp|

## Bằng chứng và diễn giải

Desktopheight513vs511, Mobile845.70vs792 không ghi lỗi parent riêng: giữ nguyên nhân padding/menu/form và icon. Logo nguồn174×46, runtimewidth176. Country/language footer khác Top bar: footer padding0/gap3.5, flag12.5; Top bar có override đúng10/4/18. Payment6logo38×24/gap12 và social24/gap12 khớp. About Mobile mở/đóng được; không gửi newsletter.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|118|`button_padding_inline_mobile: 24→28`|Applied local; chờ QA Desktop/Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|118|Mobile padding ngang 28px mỗi bên; chiều cao44px; Desktop padding32px/chiều cao48px giữ nguyên|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.
