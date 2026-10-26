# 15. Blog posts — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 15 | Blog posts | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ3 ảnh/bài, đúng thứ tự; grid3 cột Desktop/1 cột Mobile; Heading, CTA, màu tag/date; padding96/48px. |  |  |  | Khớp |
| 15 | Blog posts | Chung (Desktop, Mobile) | Blog card · Tag | Font family | Roboto | Roboto Condensed | Fix lần 2: Preset font=body. | Lần 2 | Khớp |
| 15 | Blog posts | Chung (Desktop, Mobile) | Blog card · Tag | Font size | 12px | 14px | Preset font_size=xs; kiểm lại computed12px. | Lần 1 | Khớp |
| 15 | Blog posts | Chung (Desktop, Mobile) | Blog card · Tag | Letter spacing | 2px | 0.1px | Preset relaxed đã bật nhưng computed chưa đúng; kiểm CSS ghi đè trước custom. |  | Chưa khớp |
| 15 | Blog posts | Chung (Desktop, Mobile) | Blog card · Date | Định dạng | 08 Aug 2025 | Aug 08, 2025 | Fix lần 2: Các preset hiện có không hỗ trợ ngày trước; custom format %d %b %Y. | Lần 2 | Khớp |


## Lịch sử — remaining-homepage-2026-10-23.md

### 15 — Blog posts

Đủ3 ảnh/bài, đúng thứ tự; grid3 cột Desktop/1 cột Mobile; Heading, CTA, màu tag/date; padding96/48px.


| Thiết bị | Thành phần / Tiêu chí | Figma | Hiện tại | Hướng xử lý | Trạng thái |

| --- | --- | --- | --- | --- | --- |

| Chung (Desktop, Mobile) | Blog card · Tag / Font family | Roboto | Roboto Condensed | Preset font=body. | Chưa khớp |

| Chung (Desktop, Mobile) | Blog card · Tag / Font size | 12px | 14px | Preset font_size=xs; kiểm lại computed12px. | Chưa khớp |

| Chung (Desktop, Mobile) | Blog card · Tag / Letter spacing | 2px | 0.1px | Preset relaxed đã bật nhưng computed chưa đúng; kiểm CSS ghi đè trước custom. | Chưa khớp |

| Chung (Desktop, Mobile) | Blog card · Date / Định dạng | 08 Aug 2025 | Aug 08, 2025 | Các preset hiện có không hỗ trợ ngày trước; custom format %d %b %Y. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 15 | Blog | `blog_posts_cLyPkK` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 70 | Blog posts · Font size | Blog tag font_size xs, rendered12px Desktop/Mobile; không thay font family. |

### Mapping preset

| Target | Setting / composition | Trước | Sau |
|---|---|---|---|
| blog_posts_cLyPkK/tag | font_size | sm | xs |
| sections/blog-posts.liquid/preset0/tag | font_size | sm | xs |


## Lịch sử — fix-qa2-2026-10-26.md

### Kết quả sau sửa

| Hàng Sheet | Section / Tiêu chí | Bằng chứng |
|---|---|---|
| 69 | Blog posts · Font family | Preset blog tag font=body; computedRoboto,12px,weight500 giữ nguyên ở hai thiết bị. Tracking0.1px là lỗi cũ chưa được giao lần2, không coi đã sửa. |
| 72 | Blog posts · Định dạng | Thêm date_format=day_first, render%d %b %Y; cả3bài “08 Aug 2025”. |
