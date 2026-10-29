# Norden — Homepage — Icon with text (Benefits)

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng108–108](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A108:J108); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:805 / M10012:1575 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|4benefit; D4cột/gap32; M4hàng/gap32; icon28,gap16; Heading700D18/M16,150%; body16/24; gaptext8; paddingbottomD64/M48|Khớp nội dung/thứ tự, hình icon, bố cục, font/màu và khoảng cách. Dsection123/M368px. Đọc sau animation, không dùng vị trí text đang transition.|||Khớp|

## Bằng chứng và diễn giải

4card Desktop ngang/gap32; Mobile dọc/gap32; icon28,gap16; textgap8. Runtime Dheight123/M368 khớp. Vị trí text trong reveal transition từng chồng nhau tạm thời không dùng làm lỗi sau khi đã ổn định.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.
