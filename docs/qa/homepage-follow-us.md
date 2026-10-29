# Norden — Homepage — Collection list (Follow Us)

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng103–107](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A103:J107); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:793 / M10012:1563 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Dcontainer1600;2cột788,gap24;3ảnh6:7,radius8; Mstackgap20; heading700D32/M22,130%,trắng; textleft;padding32;button@Aike_store|Khớp số lượng/thứ tự4ảnh, nội dung chữ, Heading và ảnh phải; paddingbottomD64/M56. Ảnhbleed1px không báo lỗi khung.|||Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font size|16px|14px|Đặt size16 qua preset hiện có.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font weight|600|500|Đặt weight600 qua preset hiện có.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Letter spacing|0px|0.5px|type_eyebrow_letter_spacing=normal map0em; recheck các consumer.|Lần 1|Khớp|
|Mobile|Image (content card)|Height Mobile|259.78px tại width343px|343px, tỷ lệ1:1|Đặt chiều cao/tỷ lệ Mobile đúng nguồn; không sửa chiều cao section riêng để bù.||Chưa khớp|

## Bằng chứng và diễn giải

Source content image Mobile343×259.78, runtime wrapper343×343. IMGbleed1px mỗi phía không báo thành lỗi width.3ảnh phụ6:7/radius8, gapMobile20/Desktop24 và padding khớp. Eyebrow nguồn16/600/tracking0, runtime14/500/.5.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|104|`type_eyebrow_size: 14→16`|Applied local; chờ QA Desktop/Mobile|
|105|`type_eyebrow_weight: 500→600`|Applied local; chờ QA Desktop/Mobile|
|106|`type_eyebrow_letter_spacing: 0.5px→normal (0em)`|Applied local; chờ QA Desktop/Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|104|Desktop/Mobile size=16px; font Instrument Sans; normal tracking=0em|Khớp|
|105|Desktop/Mobile weight=600; font Instrument Sans; normal tracking=0em|Khớp|
|106|Desktop/Mobile tracking=normal; font Instrument Sans; normal tracking=0em|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.
