# Norden — Homepage — Content box (Testimonial)

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng92–94](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A92:J94); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:705 / M10012:1476 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Quote700D32/M22,130%,center,#1A1A1A; 5sao16px/gap4; logoD100/M80,gap64; nền#F5F5F5;paddingD80/M56|Khớp nội dung quote đầu, font/màu, sao, kích thước logo, nền và padding. Chọn logo đổi active được.|||Khớp|
|Chung (Desktop, Mobile)|Layout|Gap sao → quote|20px|24px|Đặt khoảng cách content20px; không sửa chiều cao section để bù sai số.||Chưa khớp|
|Mobile|Logos|Căn mép đầu|Logo đầu bắt đầu x16px ở state đầu|Sau chọn logo1: x10.5px; pagination width386px trên content375px|Rà 100vw/scrollbar và fullbleed; giữ khoảng cách logo64px đang đúng.||Chưa khớp|

## Bằng chứng và diễn giải

Source star16×16,gap4; star→quote20, runtime24. Quote typography32/130%D và22/130%M khớp. Source làm tròn linebox mỗi dòng khác tổng CSS; không tạo thêm lỗi height section. Logo1 được chọn để đo state đầu: x10.5 trên content375 thayx16; row100vw386 gồm scrollbar11. Không nhầm logo IMG hover scale1.04 thành kích thước mặc định.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.
