# 11. Countdown with marquee — Flash sale — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 11 | Countdown with marquee — Flash sale | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ CTA/countdown/marquee; bố cục ngang (Desktop), dọc + rail phải (Mobile); nội dung chính, scheme#181818; số68/40px, nhãn14/21; Button56/44px; countdown đang chạy. |  |  |  | Khớp |
| 11 | Countdown with marquee — Flash sale | Chung (Desktop, Mobile) | Countdown timer · Label | Letter spacing | 0.1px | normal (0px) | Fix lần 2: Không có preset tracking nhãn riêng; CSS scoped letter-spacing0.1px cho label, dùng chung hai thiết bị. | Lần 2 | Khớp |
| 11 | Countdown with marquee — Flash sale | Desktop | Countdown timer · Number | Chiều cao dòng | 82px hiển thị | 68 ×120% =81.6px | Không cần sửa; Figma làm tròn. |  | Figma làm tròn |
| 11 | Countdown with marquee — Flash sale | Mobile | Marquee · Separator | Biên hiển thị gồm stroke | 10px + stroke ngoài1px mỗi phía =12px | Pseudo-element10px, border1px nằm trong | Không có preset separator size; CSS scoped tổng khung12px hoặc content-box10px + border1px. |  | Chưa khớp |
| 11 | Countdown with marquee — Flash sale | Mobile | Layout | Gap · Text ↔ Separator nhìn thấy | Padding wrapper20px + gap12px =32px | 12px | Preset marquee-right gap_mobile12 →32 để bù padding wrapper; kiểm hai phía separator và chỗ nối nhìn thấy. | Lần 1 | Khớp |


## Lịch sử — highlights-flash-2026-10-23.md

### STT11 — Countdown with marquee — Flash sale

Instance `virelle_flash_sale`, type `countdown-with-marquee`. Desktop source section365px, Mobile414px. Mobile container nền#181818; text/countdown/button xếp dọc ở trái, rail marquee phải, ẩn rail trái. Main content Mobile padding40px trên/dưới,24px trái; gap giữa CTA/countdown/button24px. Theme đo content414px; không phát sinh lỗi chiều cao tổng. Desktop nội dung ngang: CTA trái, countdown phải, nút nằm dưới CTA.

Đủ Ends Tonight/Flash Sale/description/4 đơn vị countdown/Shop Sale/Flash Sale và40% Off. Countdown hoạt động qua các lần đọc; không báo giờ/phút/giây khác snapshot tĩnh Figma là lỗi nội dung. Desktop Number700 Roboto Condensed68px/120%,tracking−1.2,trắng; Figma box82px, theme81.59375px theo81.6px. Kết luận **Figma làm tròn**, Không cần sửa. Mobile Number40/48px. Label Roboto400,14/21,trắng và đúng Days/Hrs/Mins/Secs; source tracking0.1px, CSS thực normal=0px. Không có preset tracking nhãn riêng; hướng scoped cho label, không đổi global font tracking.

Shop Sale Primary: source14px,500,tracking−0.2,trắng nền/chữ#1C1C1C; theme khớp. Tổng button56px Desktop,44px Mobile; không báo line-height label riêng.

Mobile marquee nguồn Container68px ngang, rotated90°, opacity40%, gap token3=12px. Text wrapper padding trái/phải token5=20px, chiều cao48px. Do đó khoảng biên chữ→separator và separator→chữ là20+12=32px. Theme gap_mobile12px, pseudo-element margin12px; cần preset gap_mobile32px để bù padding wrapper, không yêu cầu cấu trúc CSS giống Figma. Không báo phần gap nằm ngoài viewport hay phase marquee khác thời điểm.

Separator Mobile Figma10×10px, stroke OUTSIDE1px: tổng biên12×12px. Theme ::after width/height10px với border1px và box-sizing:border-box: tổng10×10px, chưa tương đương. Đây là chênh lệch biên hiển thị đã tính stroke, không so nhầm box nội bộ. Chưa đọc separator Desktop trong cùng mức chi tiết nên chỉ ghi lỗi Mobile. CSS hiện có không cung cấp preset size separator; đề xuất tổng12px hoặc content-box10px+border1. Rail source nội dung48+2×10=68; theme canvas64 được căn giữa trong rail68 (padding8+2px căn giữa mỗi phía) cho cùng inset nhìn thấy10px; không xuất lỗi padding8/10 chỉ từ thuộc tính khác nhau.

### Bảng đồng bộ Sheet

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma / Đã khớp | Hiện tại | Hướng xử lý | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | Countdown with marquee — Flash sale | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ CTA/countdown/marquee; bố cục ngang (Desktop), dọc + rail phải (Mobile); nội dung chính, scheme#181818; số68/40px, nhãn14/21; Button56/44px; countdown đang chạy. |  |  | Khớp |
| 11 | Countdown with marquee — Flash sale | Chung (Desktop, Mobile) | Countdown timer · Label | Letter spacing | 0.1px | normal (0px) | Không có preset tracking nhãn riêng; CSS scoped letter-spacing0.1px cho label, dùng chung hai thiết bị. | Chưa khớp |
| 11 | Countdown with marquee — Flash sale | Desktop | Countdown timer · Number | Chiều cao dòng | 82px hiển thị | 68 ×120% =81.6px | Không cần sửa; Figma làm tròn. | Figma làm tròn |
| 11 | Countdown with marquee — Flash sale | Mobile | Marquee · Separator | Biên hiển thị gồm stroke | 10px + stroke ngoài1px mỗi phía =12px | Pseudo-element10px, border1px nằm trong | Không có preset separator size; CSS scoped tổng khung12px hoặc content-box10px + border1px. | Chưa khớp |
| 11 | Countdown with marquee — Flash sale | Mobile | Layout | Gap · Text ↔ Separator nhìn thấy | Padding wrapper20px + gap12px =32px | 12px | Preset marquee-right gap_mobile12 →32 để bù padding wrapper; kiểm hai phía separator và chỗ nối nhìn thấy. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 11 | Flash sale | `virelle_flash_sale` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 57 | Countdown with marquee — Flash sale · Gap · Text ↔ Separator nhìn thấy | Marquee phải Mobile gap32px, tương đương padding20 + gap12 của nguồn. |

### Mapping preset

| Target | Setting / composition | Trước | Sau |
|---|---|---|---|
| virelle_flash_sale/marquee-right | gap_mobile | 12 | 32 |
| sections/countdown-with-marquee.liquid/preset0/marquee-right | gap_mobile | 12 | 32 |


## Lịch sử — fix-qa2-2026-10-26.md

### Kết quả sau sửa

| Hàng Sheet | Section / Tiêu chí | Bằng chứng |
|---|---|---|
| 54 | Countdown with marquee — Flash sale · Letter spacing | Cả4 countdown label computed letter-spacing0.1px Desktop/Mobile. |
