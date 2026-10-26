# 08. Collection tabs — Community favorites — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ Eyebrow/3 tab/Shop all; nền trắng; padding trên/dưới96/48px; 4 card (Desktop), 1 card + preview (Mobile); đổi tab tải đúng collection (Mobile). |  |  |  | Khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card | Thứ tự Best sellers | Mellow → Sports Bra → Bralette → Jacket | Sports Bra → Bralette → Mellow → Jacket | Sắp lại collection virelle-bestsellers theo thứ tự Figma; dùng chung hai thiết bị. |  | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Sports Bra) | Badge | SOLD OUT | NEW | Đối chiếu dữ liệu tồn kho/tag của sản phẩm mẫu và setting badge; không sửa CSS để giả trạng thái tồn kho. |  | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Bralette) | Badge | Không có NEW | NEW | Kiểm tag/điều kiện badge New của sản phẩm mẫu; áp dụng một lần cho hai thiết bị. |  | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Mellow) | Badge | Không có SALE | SALE | Đồng bộ dữ liệu giá khuyến mại của sản phẩm mẫu với Figma. |  | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Mellow) | Giá so sánh | Chỉ $45.00 | $45.00 và giá gạch $55.00 | Kiểm compare-at price của Mellow; dùng dữ liệu sản phẩm trước khi tính hướng custom. |  | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card | Size picker / trạng thái tương ứng | Mellow có thanh XS–XL | Có nút Choose options; chưa đối chiếu cùng trạng thái của Mellow |  |  | Chưa xác minh |
| 8 | Collection tabs — Community favorites | Desktop | Layout | Gap · Eyebrow → Tabs | 16px | 48px | Preset gap dùng chung cả grid; cần custom scoped gap Eyebrow→Tabs16px, giữ gap tới grid48px. |  | Chưa khớp |
| 8 | Collection tabs — Community favorites | Mobile | Layout | Gap · Eyebrow → Tabs | 12px | 32px | Preset gap dùng chung cả grid; cần custom scoped gap Eyebrow→Tabs12px, giữ gap tới grid32px. |  | Chưa khớp |


## Lịch sử — community-empower-2026-10-23.md

### STT8 — Collection tabs — Community favorites

Nguồn Desktop node48205-18039: section1098.5px, padding token24 =96px trên/dưới; Section header97px =21 +16 +60. Nguồn Mobile node48249-15658: section753px, padding token12 =48px; Section header69px =21 +12 +36. Tabs gap Desktop40/Mobile20px; theme Mobile gap20px đo từ cạnh item trước sang item sau. Header→grid dùng khoảng riêng, không nhầm với Eyebrow→Tabs.

Theme Desktop Eyebrow21px, tabs50/60px; Eyebrow y3793.265625, tabs y3862.265625: gap48px. Theme Mobile Eyebrow21px, tabs30/36px ở inner375: gap32px. Vì vậy gap Eyebrow→Tabs chưa khớp16/48 Desktop và12/32 Mobile. Schema Collection tabs chỉ có gap_desktop/gap_mobile dùng chung cho Eyebrow→Tabs, Tabs→grid và grid→Button; tab-layout chỉ có gap giữa các tab, không có padding để bù. Vì vậy giảm trực tiếp setting sẽ làm sai các khoảng đang đúng. Sau kiểm giới hạn preset, đề xuất custom scoped tách gap Eyebrow→Tabs16/12px, giữ gap tới grid48/32px; chưa thực hiện custom.

Figma Best sellers: Mellow, SoftMotion Sports Bra, EasyLift Halter Bralette, SoftMotion Jacket. Theme trả Sports Bra, Bralette, Mellow, Jacket, Leggings; thứ tự bốn item đầu đã khác. Không báo item5 là thừa chỉ vì nằm ngoài viewport. Figma Sports Bra có SOLD OUT; theme NEW. Bralette Figma không có NEW nhưng theme có. Mellow Figma chỉ45USD; theme SALE,45USD và compare-at55USD. Hướng xử lý trước tiên là collection/product-data và badge settings. Đây chỉ là đề xuất QA; chưa cập nhật dữ liệu tồn kho/giá/tag trên store.

Đã bấm New arrivals và Under$40 trên tab preview mới: New arrivals bắt đầu bằng Effortless Seamless Leggings, Under$40 bắt đầu High Neck Sports Bra35USD. Đã trở lại Best sellers; không giữ lỗi tải tab chỉ từ thông báo của tab cũ. Chức năng tải collection đã kiểm Mobile; không suy visual các collection không có frame nguồn đã đọc.

### Bảng đồng bộ Sheet

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma / Đã khớp | Hiện tại | Hướng xử lý | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ Eyebrow/3 tab/Shop all; nền trắng; padding trên/dưới96/48px; 4 card (Desktop), 1 card + preview (Mobile); đổi tab tải đúng collection (Mobile). |  |  | Khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card | Thứ tự Best sellers | Mellow → Sports Bra → Bralette → Jacket | Sports Bra → Bralette → Mellow → Jacket | Sắp lại collection virelle-bestsellers theo thứ tự Figma; dùng chung hai thiết bị. | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Sports Bra) | Badge | SOLD OUT | NEW | Đối chiếu dữ liệu tồn kho/tag của sản phẩm mẫu và setting badge; không sửa CSS để giả trạng thái tồn kho. | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Bralette) | Badge | Không có NEW | NEW | Kiểm tag/điều kiện badge New của sản phẩm mẫu; áp dụng một lần cho hai thiết bị. | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Mellow) | Badge | Không có SALE | SALE | Đồng bộ dữ liệu giá khuyến mại của sản phẩm mẫu với Figma. | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card (Mellow) | Giá so sánh | Chỉ $45.00 | $45.00 và giá gạch $55.00 | Kiểm compare-at price của Mellow; dùng dữ liệu sản phẩm trước khi tính hướng custom. | Chưa khớp |
| 8 | Collection tabs — Community favorites | Chung (Desktop, Mobile) | Product card | Size picker / trạng thái tương ứng | Mellow có thanh XS–XL | Có nút Choose options; chưa đối chiếu cùng trạng thái của Mellow |  | Chưa xác minh |
| 8 | Collection tabs — Community favorites | Desktop | Layout | Gap · Eyebrow → Tabs | 16px | 48px | Preset gap dùng chung cả grid; cần custom scoped gap Eyebrow→Tabs16px, giữ gap tới grid48px. | Chưa khớp |
| 8 | Collection tabs — Community favorites | Mobile | Layout | Gap · Eyebrow → Tabs | 12px | 32px | Preset gap dùng chung cả grid; cần custom scoped gap Eyebrow→Tabs12px, giữ gap tới grid32px. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 8 | Community favorites | `collection_tabs_ihC66t` |
