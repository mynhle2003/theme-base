# Norden — Homepage — Collection list (3 cards)

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng77–79](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A77:J79); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:683 / M10012:1463 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|3collection; D3cột512×597.33,gap32; M1card343×400.17; heading700D32/M22,130%,trắng; radius16; paddingD20/96,M0/64|Ảnh/nội dung/căn giữa khớp; link card mở đúng collection. Swipe Mobile đổi card và trở về đầu. Track343×2,fill≈1/3 đúng.|||Khớp|
|Mobile|Progress bar|Màu active|#1A1A1A|#4D4D4D|Sửa cascade progress fill về heading color.||Chưa khớp|
|Mobile|Progress bar|Border radius|Track10px / fill4px|0px /0px|Bổ sung radius track/fill.||Chưa khớp|

## Bằng chứng và diễn giải

Desktop3card512×597.33,gap32; Mobile343×400.17, track1/3. Heading32/41.6→42 và22/28.6→29 là làm tròn; không ép width chữ. Click card mở đúng collection, back vềhomepage, swipe tới Leather Accent Bench rồi trở về. Chỉ hai lỗi progress còn lại.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.
