# Norden — Homepage — Collapsible content (FAQs)

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng97–102](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A97:J102); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:763 / M10012:1533 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Heading D32/M22,700,130%; body16/24; questionD18/M16,700,150%;5item; CTA Secondary48/44; Mstackgap48; paddingbottomD80/M56|Nội dung, font/màu, thứ tự, trạng thái đầu item1 mở và icon20px khớp. Item2 mở/đóng được D/M.|||Khớp|
|Chung (Desktop, Mobile)|Accordion / Answer|Padding phải|0px|20px|Bỏ padding phải20px; hiện Mobile text hẹp323px thay vì343px và tăng thêm1dòng.||Chưa khớp|
|Chung (Desktop, Mobile)|Accordion / Answer|Padding dưới|20px|15px|Đặt padding-bottom20px; không bù bằng chiều cao section.||Chưa khớp|
|Desktop|Layout / Columns|Width Desktop|Section title448px / Accordion768px|Section title450px / Accordion770px|Giới hạn hai column448px/768px; giữ căn lề trong container1600px.||Chưa khớp|
|Mobile|Layout / Section title|Gap description → CTA|36px|32px|Chỉnh gap group Mobile36px; Desktop36px đã khớp.|Lần 1|Khớp|
|Mobile|Button|Padding ngang Mobile|28px|24px|Đặt side spacing Mobile28, giữ height44.|Lần 1|Khớp|

## Bằng chứng và diễn giải

Source title448 và accordion768, runtime450/770. Source answer paddingright0/bottom20, runtime20/15; Mobile widthtext323 thay343 làm thêm1dòng. Gap description→CTA36 đúng Desktop; chỉ Mobile32 cần sửa. Icon20 và typography questionD18/M16,150% khớp. Item2 mở/đóng được, item1 vẫn mở theo chế độ multi-open; không suy lỗi single-open từ frame tĩnh.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|101|`aike_faq/intro: gap_mobile 32→36; Desktop giữ 36`|Applied local; chờ QA Desktop/Mobile|
|102|`button_padding_inline_mobile: 24→28`|Applied local; chờ QA Desktop/Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|101|Mobile/ Desktop gap description→CTA36px; Desktop giữ nguyên|Khớp|
|102|Mobile padding ngang 28px mỗi bên; chiều cao44px; Desktop padding32px/chiều cao48px giữ nguyên|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.
