# 18. Footer — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 18 | Footer | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ logo, newsletter,3 menu,5 social icon và6 payment icon; form dùng icon mũi tên; menu xếp dọc Mobile. |  |  |  | Khớp |
| 18 | Footer | Chung (Desktop, Mobile) | Policy menu | Cookies Settings | Có | Thiếu | Ưu tiên thêm mục vào menu/preset policy; kiểm action mở cookie preferences. |  | Chưa khớp |
| 18 | Footer | Chung (Desktop, Mobile) | Social icon · X | Hình dạng | Logo X hai nét giao nhau | Hình hiển thị dạng nét chéo | Fix lần 2: Ưu tiên chọn đúng icon/asset hiện có; custom SVG nếu preset không có. | Lần 2 | Khớp |
| 18 | Footer | Chung (Desktop, Mobile) | Layout | Padding ngang nội dung | Desktop50px; Mobile16px | Desktop100px; Mobile32px | Fix lần 2: section_width đã full_width; CSS footer cộng margin và container padding. Bỏ một lớp inset scoped, giữ50/16px. | Lần 2 | Khớp |
| 18 | Footer | Chung (Desktop, Mobile) | Menu · Company | Nội dung mục thứ3 | Desktop About us; Mobile Contact | Contact trên cả hai | Nguồn Desktop/Mobile không đồng nhất; cần chốt nội dung trước khi đổi menu. |  | Chưa xác minh |


## Lịch sử — remaining-homepage-2026-10-23.md

### 18 — Footer

Đủ logo, newsletter,3 menu,5 social icon và6 payment icon; form dùng icon mũi tên; menu xếp dọc Mobile.


| Thiết bị | Thành phần / Tiêu chí | Figma | Hiện tại | Hướng xử lý | Trạng thái |

| --- | --- | --- | --- | --- | --- |

| Chung (Desktop, Mobile) | Policy menu / Cookies Settings | Có | Thiếu | Ưu tiên thêm mục vào menu/preset policy; kiểm action mở cookie preferences. | Chưa khớp |

| Chung (Desktop, Mobile) | Social icon · X / Hình dạng | Logo X hai nét giao nhau | Hình hiển thị dạng nét chéo | Ưu tiên chọn đúng icon/asset hiện có; custom SVG nếu preset không có. | Chưa khớp |

| Chung (Desktop, Mobile) | Layout / Padding ngang nội dung | Desktop50px; Mobile16px | Desktop100px; Mobile32px | section_width đã full_width; CSS footer cộng margin và container padding. Bỏ một lớp inset scoped, giữ50/16px. | Chưa khớp |

| Chung (Desktop, Mobile) | Menu · Company / Nội dung mục thứ3 | Desktop About us; Mobile Contact | Contact trên cả hai | Nguồn Desktop/Mobile không đồng nhất; cần chốt nội dung trước khi đổi menu. | Chưa xác minh |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 18 | Footer | `footer` trong footer group |


## Lịch sử — fix-qa2-2026-10-26.md

### Kết quả sau sửa

| Hàng Sheet | Section / Tiêu chí | Bằng chứng |
|---|---|---|
| 79 | Footer · Hình dạng | Thay path X thành đủ hai nét giao nhau; giữ viewBox24, kích thước/icon label/link. |
| 80 | Footer · Padding ngang nội dung | Bỏ container padding-inline bị cộng đôi; biên nội dung x50 Desktop, x16 Mobile; container1805/328px tương ứng client1905/360. |
