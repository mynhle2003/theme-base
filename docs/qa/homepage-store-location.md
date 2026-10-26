# 17. Store location — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 17 | Store location | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ3 địa điểm, địa chỉ và nút; đúng ảnh; ngang Desktop/dọc Mobile; gap nội dung→ảnh56/40px; padding dưới96/48px. |  |  |  | Khớp |
| 17 | Store location | Desktop | Layout | Gap · Heading → Địa chỉ | 12px | 16px | Preset: gom Heading+Address thành Group gap12; giữ gap16 tới Button. | Lần 1 | Khớp |
| 17 | Store location | Mobile | Layout | Gap · Heading → Địa chỉ | 8px | 12px | Preset: Group Heading+Address gap8; giữ gap12 tới Button. | Lần 1 | Khớp |


## Lịch sử — remaining-homepage-2026-10-23.md

### 17 — Store location

Đủ3 địa điểm, địa chỉ và nút; đúng ảnh; ngang Desktop/dọc Mobile; gap nội dung→ảnh56/40px; padding dưới96/48px.


| Thiết bị | Thành phần / Tiêu chí | Figma | Hiện tại | Hướng xử lý | Trạng thái |

| --- | --- | --- | --- | --- | --- |

| Desktop | Layout / Gap · Heading → Địa chỉ | 12px | 16px | Preset: gom Heading+Address thành Group gap12; giữ gap16 tới Button. | Chưa khớp |

| Mobile | Layout / Gap · Heading → Địa chỉ | 8px | 12px | Preset: Group Heading+Address gap8; giữ gap12 tới Button. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 17 | Store location | `kinetra_locations` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 75 | Store location · Gap · Heading → Địa chỉ | Cả3 địa điểm: Group Heading/Address gap12px Desktop; gap đến Button16px giữ nguyên. |
| 76 | Store location · Gap · Heading → Địa chỉ | Cả3 địa điểm: Group Heading/Address gap8px Mobile; gap đến Button12px giữ nguyên. |

### Mapping preset

| Target | Setting / composition | Trước | Sau |
|---|---|---|---|
| kinetra_locations/0 | Composition | — | Heading + Address group gap12/8; preserve parent Button gap16/12 |
| kinetra_locations/1 | Composition | — | Heading + Address group gap12/8; preserve parent Button gap16/12 |
| kinetra_locations/2 | Composition | — | Heading + Address group gap12/8; preserve parent Button gap16/12 |
| sections/custom-section.liquid/preset0/0 | Composition | — | Heading + Address group gap12/8; preserve parent Button gap16/12 |
| sections/custom-section.liquid/preset0/1 | Composition | — | Heading + Address group gap12/8; preserve parent Button gap16/12 |
| sections/custom-section.liquid/preset0/2 | Composition | — | Heading + Address group gap12/8; preserve parent Button gap16/12 |
