# Norden — Homepage — Hero banner (Outdoor Furniture)

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng80–91](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A80:J91); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:697 / M10012:1471 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Video fullwidth D700/M470; heading700D40/M30,120%,trắng; CTA PrimaryD48/M44; Mẩn2card|Khớp khung/bố cục và nội dung chính; video chạy đúng media, không so hai phase khác nhau.|||Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font size|16px|14px|Đặt size16 qua preset hiện có.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font weight|600|500|Đặt weight600 qua preset hiện có.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Letter spacing|0px|0.5px|type_eyebrow_letter_spacing=normal map0em; recheck các consumer.|Lần 1|Khớp|
|Desktop|Product card|Padding Desktop|Trên/trái/phải16px; dưới24px|Không có padding outer; content chỉ8px|Dùng card composition có padding đúng; không tăng chiều cao section để bù.||Chưa khớp|
|Desktop|Product card|Material/vendor Desktop|FABRIC|Thiếu caption|Xác minh dữ liệu material/vendor trước khi bật hiển thị.||Chưa khớp|
|Desktop|Product card|Swatch Desktop|2 swatch mỗi card trong frame nguồn|Không có swatch|Kiểm tra dữ liệu variant và render; swatch đã bật.||Chưa khớp|
|Desktop|Product card|Nội dung tên Desktop|Cancun Lounge Sofa; Cancun Lounge Chair|Cancun lounge sofa; Cancun lounge chair|Đồng bộ chữ hoa/thường với nguồn.||Chưa khớp|
|Desktop|Product card|Line-height tên Desktop|16/150%=24px|16/140%=22.4px|Preset H4 relaxed1.5; kiểm tra ảnh hưởng toàn theme.|Lần 1|Khớp|
|Desktop|Price|Font weight|500 Medium|400 Regular|Cần override typography giá; chưa có setting weight riêng.||Chưa khớp|
|Desktop|Price|Màu chữ|#1A1A1A|#4D4D4D|Đặt regular price dùng heading color; giữ sale color của nơi khác.||Chưa khớp|
|Mobile|Button|Padding ngang Mobile|28px|24px|Đổi side spacing Mobile28, giữ tổng chiều cao44.|Lần 1|Khớp|

## Bằng chứng và diễn giải

Video đang chạy nên không so hai phase khác nhau. Nút play trong ảnh Figma không được coi là component thiếu khi cây chỉ thể hiện video fill. Mẩn product collection đúng nguồn. Source card256 có padding16/16/16/24,image224; runtime không có outer padding, content8. Tên nguồn TITLE và material UPPER xác minh bằng MCP. Giá16/24Medium#1A so runtime400#4D. CTA Mobile28vs24 là padding, không báo line-height label Primary.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|81|`type_eyebrow_size: 14→16`|Applied local; chờ QA Desktop/Mobile|
|82|`type_eyebrow_weight: 500→600`|Applied local; chờ QA Desktop/Mobile|
|83|`type_eyebrow_letter_spacing: 0.5px→normal (0em)`|Applied local; chờ QA Desktop/Mobile|
|88|`type_heading_4_line_height: normal (1.4)→relaxed (1.5)`|Applied local; chờ QA Desktop/Mobile|
|91|`button_padding_inline_mobile: 24→28`|Applied local; chờ QA Desktop/Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|81|Desktop/Mobile size=16px; font Instrument Sans; normal tracking=0em|Khớp|
|82|Desktop/Mobile weight=600; font Instrument Sans; normal tracking=0em|Khớp|
|83|Desktop/Mobile tracking=normal; font Instrument Sans; normal tracking=0em|Khớp|
|88|Product title16px/24px; type_heading_4_line_height=relaxed (1.5); các card consumer đã kiểm|Khớp|
|91|Mobile padding ngang 28px mỗi bên; chiều cao44px; Desktop padding32px/chiều cao48px giữ nguyên|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.
