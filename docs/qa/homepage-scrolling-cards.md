# 09. Scrolling cards — Empower. Inspire. Belong — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 9 | Scrolling cards — Empower. Inspire. Belong | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ Together/Heading/3 Text/3 ảnh; đúng thứ tự ảnh; ảnh trái–text phải (Desktop), text trước ảnh (Mobile); Text16/24, tracking0.1, màu#DFDFDF (Mobile); Heading50/60 (Desktop). |  |  |  | Khớp |
| 9 | Scrolling cards — Empower. Inspire. Belong | Desktop | Layout | Gap · Eyebrow → Heading | 8px | 16px | Header trong card empower: gap_desktop16 →8; giữ padding content40/40/64px. | Lần 1 | Khớp |
| 9 | Scrolling cards — Empower. Inspire. Belong | Mobile | Heading | Xuống dòng / điều kiện viewport | Frame375px; content343px; 1 dòng | Viewport375 có scrollbar15px; bản bù390px đổi cả cỡ chữ fluid |  |  | Chưa xác minh |
| 9 | Scrolling cards — Empower. Inspire. Belong | Mobile | Layout | Gap · Eyebrow → Heading | 8px | 4px | Header trong card empower: gap_mobile4 →8. | Lần 1 | Khớp |
| 9 | Scrolling cards — Empower. Inspire. Belong | Mobile | Layout | Gap · Heading → Text | 12px | 16px | Group content card empower: gap_mobile16 →12; giữ gap Text → Image24px. | Lần 1 | Khớp |


## Lịch sử — community-empower-2026-10-23.md

### STT9 — Scrolling cards — Empower. Inspire. Belong

Nguồn Desktop node48190-16766: section2581.71px; ảnh780×668.57px; Wrapper780px với padding trên/dưới40px, trái64px; text-width716px. Section Title gap token2 =8px. Heading700 Roboto Condensed, line-height120%, tracking−0.6px, uppercase, trắng, box716×60px. Theme Header Desktop gap16px: lệch8px; giữ padding đã khớp.

Nguồn Mobile node48249-15570: section1631px; Heading343×36px; Eyebrow14/21px,500,tracking2px,trắng; Section Title gap token2 =8px. Content Heading→Text gap token3 =12px. Text đầu343×144px,Roboto400,16px/150%=24px,tracking0.1px,#DFDFDF, nội dung khớp theme. Theme Header gap4px, Group content gap16px; Text→Image24px. Chỉ xuất hai chỗ lệch8/4 và12/16; không đổi gap Text→Image đã đúng để bù chiều cao chữ.

Ba ảnh theo đúng thứ tự: áo đen ngồi trên cát → bộ hồng trên bãi biển → áo đen ngồi dưới nước. Desktop ảnh trái/text phải; Mobile text trước ảnh. Thứ tự và nội dung đủ. Chưa kết luận Heading Mobile đúng xuống dòng vì điều kiện scrollbar và font fluid nêu trên; cần so trong cùng vùng nội dung và cùng font-size trước khi truy font-file/metrics. Không đề xuất ép width hoặc giảm tracking chỉ để che wrap.

### Bảng đồng bộ Sheet

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma / Đã khớp | Hiện tại | Hướng xử lý | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | Scrolling cards — Empower. Inspire. Belong | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ Together/Heading/3 Text/3 ảnh; đúng thứ tự ảnh; ảnh trái–text phải (Desktop), text trước ảnh (Mobile); Text16/24, tracking0.1, màu#DFDFDF (Mobile); Heading50/60 (Desktop). |  |  | Khớp |
| 9 | Scrolling cards — Empower. Inspire. Belong | Desktop | Layout | Gap · Eyebrow → Heading | 8px | 16px | Header trong card empower: gap_desktop16 →8; giữ padding content40/40/64px. | Chưa khớp |
| 9 | Scrolling cards — Empower. Inspire. Belong | Mobile | Heading | Xuống dòng / điều kiện viewport | Frame375px; content343px; 1 dòng | Viewport375 có scrollbar15px; bản bù390px đổi cả cỡ chữ fluid |  | Chưa xác minh |
| 9 | Scrolling cards — Empower. Inspire. Belong | Mobile | Layout | Gap · Eyebrow → Heading | 8px | 4px | Header trong card empower: gap_mobile4 →8. | Chưa khớp |
| 9 | Scrolling cards — Empower. Inspire. Belong | Mobile | Layout | Gap · Heading → Text | 12px | 16px | Group content card empower: gap_mobile16 →12; giữ gap Text → Image24px. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 9 | Empower. Inspire. Belong | `kinetra_scrolling_cards` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 36 | Scrolling cards — Empower. Inspire. Belong · Gap · Eyebrow → Heading | Empower Header Desktop gap8px. |
| 38 | Scrolling cards — Empower. Inspire. Belong · Gap · Eyebrow → Heading | Mobile: Eyebrow đáy405.75 → Heading đầu413.75: gap8px. |
| 39 | Scrolling cards — Empower. Inspire. Belong · Gap · Heading → Text | Mobile: Heading đáy485.75 → Text đầu497.75: gap12px. |

### Mapping preset

| Target | Setting / composition | Trước | Sau |
|---|---|---|---|
| kinetra_scrolling_cards/header | gap_desktop | 16 | 8 |
| kinetra_scrolling_cards/header | gap_mobile | 4 | 8 |
| kinetra_scrolling_cards/content | gap_mobile | 16 | 12 |
| sections/scrolling-cards.liquid/preset0/header | gap_desktop | 16 | 8 |
| sections/scrolling-cards.liquid/preset0/header | gap_mobile | 4 | 8 |
| sections/scrolling-cards.liquid/preset0/content | gap_mobile | 16 | 12 |
