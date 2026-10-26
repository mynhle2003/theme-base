# 12. Shop the look — Matching sets — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 12 | Matching sets | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ ảnh, Header, 3 sản phẩm, dropdown và CTA; thứ tự ngang Desktop/dọc Mobile; media vuông, padding96/48px. |  |  |  | Khớp |
| 12 | Matching sets | Chung (Desktop, Mobile) | Product card | Căn lề Title / Price | Giữa | Trái | Ưu tiên preset product_card_alignment=center; kiểm tác động các section dùng chung. |  | Chưa khớp |
| 12 | Matching sets | Chung (Desktop, Mobile) | Product card · Badge | Hiển thị | Không có NEW | Có NEW trên SoftMotion | Kiểm tag/badge sản phẩm mẫu; ưu tiên dữ liệu/preset, tránh tắt badge toàn trang. |  | Chưa khớp |
| 12 | Matching sets | Chung (Desktop, Mobile) | Product card · Price | Màu | #181818 | #626262 | Fix lần 2: Preset màu giá riêng chưa có; chỉ custom scoped sau khi kiểm ảnh hưởng scheme. | Lần 2 | Khớp |
| 12 | Matching sets | Chung (Desktop, Mobile) | Variant picker | Size mặc định SoftMotion | M | XS | Kiểm variant khả dụng và lựa chọn mặc định; không đổi thứ tự variant chỉ để bù giao diện. |  | Chưa khớp |
| 12 | Matching sets | Desktop | Layout | Gap · Hai cột | 48px | 50px | Preset gap_desktop50→48. | Lần 1 | Khớp |


## Lịch sử — remaining-homepage-2026-10-23.md

### 12 — Matching sets

Đủ ảnh, Header, 3 sản phẩm, dropdown và CTA; thứ tự ngang Desktop/dọc Mobile; media vuông, padding96/48px.


| Thiết bị | Thành phần / Tiêu chí | Figma | Hiện tại | Hướng xử lý | Trạng thái |

| --- | --- | --- | --- | --- | --- |

| Chung (Desktop, Mobile) | Product card / Căn lề Title / Price | Giữa | Trái | Ưu tiên preset product_card_alignment=center; kiểm tác động các section dùng chung. | Chưa khớp |

| Chung (Desktop, Mobile) | Product card · Badge / Hiển thị | Không có NEW | Có NEW trên SoftMotion | Kiểm tag/badge sản phẩm mẫu; ưu tiên dữ liệu/preset, tránh tắt badge toàn trang. | Chưa khớp |

| Chung (Desktop, Mobile) | Product card · Price / Màu | #181818 | #626262 | Preset màu giá riêng chưa có; chỉ custom scoped sau khi kiểm ảnh hưởng scheme. | Chưa khớp |

| Chung (Desktop, Mobile) | Variant picker / Size mặc định SoftMotion | M | XS | Kiểm variant khả dụng và lựa chọn mặc định; không đổi thứ tự variant chỉ để bù giao diện. | Chưa khớp |

| Desktop | Layout / Gap · Hai cột | 48px | 50px | Preset gap_desktop50→48. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 12 | Matching sets | `shop_the_look_section_mhb9aq` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 63 | Matching sets · Gap · Hai cột | Desktop: ảnh x50 + width878.5; nội dung x976.5: gap48px. |

### Mapping preset

| Target | Setting / composition | Trước | Sau |
|---|---|---|---|
| shop_the_look_section_mhb9aq | gap_desktop | 50 | 48 |
| sections/shop-the-look-section.liquid/preset0 | gap_desktop | 50 | 48 |


## Lịch sử — fix-qa2-2026-10-26.md

### Kết quả sau sửa

| Hàng Sheet | Section / Tiêu chí | Bằng chứng |
|---|---|---|
| 61 | Matching sets · Màu | Giá regular trong product card Matching sets dùng --heading-color, computed#181818. Giữ sale/compare-at và Community. |
