# 06. Scrolling text — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 6 | Scrolling text | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Nội dung lặp; typography/màu/outline; icon14/10px; padding24/12px; marquee chạy; khoảng Text↔Icon32px khớp (padding20 +gap12 Figma). |  |  |  | Khớp |
| 6 | Scrolling text | Chung (Desktop, Mobile) | Heading | Kích thước sau typography khớp | Active Essentials:549×82px (Desktop);315×48px (Mobile) | 547.34×81.59px;313.58×48px | 68×120%=81.6px. Chấp nhận làm tròn/metrics gần sát; không bù width/height hoặc báo lặp chiều cao section. |  | Figma làm tròn |


## Lịch sử — confidence-scrolling-2026-10-23.md

### STT6 — Scrolling text

Figma Desktop: section130px, padding24/24, container82px, gap12px; chữ Roboto Condensed700,68px/120%, tracking−1.2, outline#181818. Icon12px + stroke ngoài1px mỗi phía =14px. Mobile: section72px, padding12/12, container48px, gap12px; chữ40px/120%, icon8px + stroke ngoài1px=10px. Đọc trực tiếp Rectangle1 Mobile node48249:15477. Chỉ so vùng marquee nhìn thấy; không báo gap của vòng lặp ngoài clip.

Preview: gap32px ở hai marquee riêng Desktop/Mobile. Rút kết luận lỗi chỉ dựa vào gap12/32: cần cộng padding Heading/wrapper của Figma để đối chiếu khoảng hiển thị; nếu tổng bằng32px thì preset hiện tại đạt, không sửa về12px. Chữ/biên icon/padding đạt, chuyển động đã quan sát. Active Essentials Desktop547.34×81.59px so549×82; Mobile313.58×48 so315×48. Typography khớp, sai số gần sát: chấp nhận Figma làm tròn/metrics, không gán Browser render và không lặp lỗi chiều cao cha.

Viewport preview: Desktop inner1920/client1905, Mobile inner375/client360 do scrollbar15px. Không lấy chênh lệch này làm lỗi padding/width. Các kết luận gap, typography và crop không dựa vào việc đổi viewport để bù scrollbar.

Bằng chứng: output/qa/collage-scrolling-recheck-desktop.json; collage-scrolling-recheck-mobile.json; scrolling-text-figma.json; confidence-mobile-gap-recheck.json; confidence-recheck-mobile.png; scrolling-recheck-mobile.png.

##### Scroll/marquee: chấp nhận gap bù padding Heading

Khi Heading không có option padding, đánh giá **khoảng cách hiển thị thực tế** giữa các biên nội dung nhìn thấy trong viewport, không yêu cầu riêng CSS gap và padding trùng Figma. Khoảng đích = padding phía cuối của phần tử trước + gap Figma + padding phía đầu của phần tử sau (chỉ cộng phía thực sự nằm giữa hai nội dung). Có thể đặt toàn bộ khoảng đích vào gap preset của theme. Ví dụ padding10px + gap12px + padding10px =32px: gap theme32px được chấp nhận nếu biên hiển thị khớp. Không tự suy padding hoặc chốt gap12px chỉ từ container; phải đọc padding của các wrapper liên quan, tránh cộng trùng. Kiểm riêng từng breakpoint, các cặp lặp và chỗ nối chu kỳ khi nhìn thấy. Nếu khoảng nhìn thấy khớp, gộp vào Đã kiểm và khớp, rút lỗi gap/padding và không đề xuất custom thêm option chỉ để giống cấu trúc Figma. Chỉ báo phần chênh khoảng thực tế còn lại; MD lưu phép cộng và bằng chứng. Nếu chưa đo đủ, ghi chưa xác minh, không giữ kết luận lỗi dựa riêng vào gap. Quy tắc này áp dụng scroll/marquee, không dùng bù lỗi typography hay constraint độc lập.

### QA lại Scrolling text — kết luận hiện hành

Desktop Text wrapper node48190:2390 rộng589px = text549px + padding trái20px + phải20px. Mobile node48249:15475 rộng355px = text315px +40px padding. Token padding5 tương ứng20px. Container gap12px; mỗi cặp Text–Icon hoặc Icon–Text có đúng một cạnh padding20px nằm giữa, nên khoảng đích32px, không cộng cả hai cạnh thành52px. Preview hai breakpoint padding Heading0px, gap32px: khớp. Mobile cặp nhìn thấy đo text right308.326, icon left340.326, chênh32px. Desktop các cặp tương tự32px. Rút hai mục gap chưa xác minh và đề xuất giảm gap. Gộp vào Đã kiểm và khớp. Không còn lỗi/chưa xác minh Scrolling text trong phạm vi đã QA; giữ Figma làm tròn của text, không sửa theme.

Bằng chứng mới: output/qa/scroll-wrapper-desktop.txt; scroll-wrapper-mobile.txt; scroll-effective-gap.json.

##### Kiểm lại lần nữa — 23/10/2026

Mở preview mới, đo tại1920px và375px. Desktop các biên Text–Icon và Icon–Text chênh32px; Mobile text right309.9817px → icon left341.9817px =32px trong viewport. Font Desktop70068/81.6, Mobile70040/48; tracking−1.2; icon14/10. Figma wrapper Desktop589px, Mobile355px, padding token5 ở mỗi bên (20px) vẫn giữ nguyên. Kết luận khoảng hiển thị đạt; không phát hiện lỗi mới trong phần đã kiểm. Kích thước text giữ trạng thái Figma làm tròn. Bằng chứng đo mới: output/qa/scroll-latest-recheck.json. Sheet summary được cập nhật xác nhận đã đo lại.


## Lịch sử — recheck-latest-three-2026-10-23.md

### STT6 Scrolling text

Gap preset32px cả hai breakpoint; Figma20px padding của cạnh Heading +12px gap =32px. Typography68/81.6 và40/48, icon14/10 đạt. Marquee chuyển động; kiểm vùng hiện trong viewport, không báo khác phase hoặc gap ngoài clip. Giữ Figma làm tròn cho549×82 so547.34×81.59 và315×48 so313.58×48; không thêm lỗi parent height.


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 6 | Scrolling text | `virelle_marquee` |
