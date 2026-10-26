# 10. Hotspot gallery — This week’s highlights — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 10 | Hotspot gallery — This week’s highlights | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ Header/ảnh/hotspot/navigation; Heading50/60 (Desktop),30/36 (Mobile); Text16/24 và màu; padding96/48px; navigation48px, gap12px; chuyển ảnh được (Desktop). |  |  |  | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Chung (Desktop, Mobile) | Text | Nội dung | must-have item | must-have items | Sửa nội dung Text trong Header theo Figma; dùng chung hai thiết bị. | Lần 1 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Header | Max width | 384px; thực tế378px | 360px | Fix lần 2: Preset Header: max_width360 →384; kiểm lại chiều rộng cột sau đổi. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Title | Nội dung | SoftMotion Leggings | Soft Motion Leggings | Đối chiếu title sản phẩm mẫu; dùng dữ liệu sản phẩm trước khi custom hiển thị. |  | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Price | Font size | 14px | 12px | Fix lần 2: Không có preset cỡ giá popup riêng; CSS scoped giá popup14px, giữ line-height150%. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Price | Màu | #181818 | #626262 | Fix lần 2: Không có preset màu giá popup riêng; CSS scoped dùng màu Heading của scheme hiện tại. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Nhãn | ADD TO CART | VIEW PRODUCT | Fix lần 2: Có preset product_link_label; cần xác minh action mong muốn trước khi đổi nhãn vì hiện tại mở quick view; custom thêm option cho người dùng chọn add to card hay view product rồi chỉnh prest giống figma. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Font weight | 500 | 400 | Fix lần 2: Không có preset weight CTA popup riêng; CSS scoped font-weight500. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Màu | #1E1E1E | #626262 | Fix lần 2: Không có preset màu CTA popup riêng; dùng token Tertiary button/color đã đối chiếu. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Icon | Mũi tên chéo sau nhãn | Không có | Fix lần 2: Schema popup không có option icon; bổ sung icon scoped sau khi chốt action. | Lần 2 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Layout | Gap · Eyebrow → Heading | 8px | 16px | Preset: gom Eyebrow + Heading vào Group gap8; Header giữ gap12 tới Text. | Lần 1 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Layout | Gap · Heading → Text | 12px | 16px | Preset Header gap_desktop16 →12, kết hợp Group bên trong gap8. | Lần 1 | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Mobile | Layout | Gap · Eyebrow → Heading | 8px | 12px | Preset Group Eyebrow + Heading gap_mobile8; Header giữ gap_mobile12 tới Text. | Lần 1 | Khớp |


## Lịch sử — highlights-flash-2026-10-23.md

### STT10 — Hotspot gallery — This week’s highlights

Instance `kinetra_highlights`, type `hotspot-gallery`. Desktop Figma Hotspot2: nền#FFFFFF, section974.83px, padding96px trên/dưới. Bố cục text trái, carousel phải; navigation nằm ở cuối cột text. Cấu hình theme gọi navigation_position=top nhưng CSS bố cục beside đặt nó ở cuối cột text thực tế; **không báo lỗi từ tên setting**. Hai ảnh đầu và preview ảnh kế, thứ tự hồng trên xe → nâu cạnh tường → đen đã đối chiếu; next thực sự chuyển active sang ảnh thứ2. Không nhầm tên setting với vị trí render.

Desktop Figma Header: max-width384px, fill378px; theme max_width360. Heading Roboto Condensed700,50px/120%=60px, tracking−0.6px,#181818,2 dòng. Eyebrow14/21px,500,tracking2px,icon vuông8px/gap8px. Nguồn Content149px =21+8+120; Heading instance233px =149+12+72. Theme Header245px =21+16+120+16+72. Chỉ báo hai gap độc lập8/16 và12/16, không lặp thêm lỗi chiều cao Header. Header schema cho phép Group; ưu tiên cấu hình Group Eyebrow+Heading gap8, Header ngoài gap12.

Text Figma viết “must-have item”, theme “must-have items”; giữ nguyên câu nguồn khi QA, không tự sửa ngữ pháp thiết kế. Cả hai dùng Roboto400,16/24px,tracking0.1,#626262. Mobile nguồn frame375, content343: Header149px =21+8+36+12+72, section749.17px,padding48px. Theme Mobile Header gap12px đều, nên Eyebrow→Heading cần8px; Heading→Text12px đã đúng. Theme Text tại client360/content328 có4 dòng; không tạo lỗi chiều cao Text/section từ khác scrollbar.

Popup Desktop nguồn: title “SoftMotion Leggings”; giá45USD; CTA “Add to cart” và mũi tên chéo. Theme title có thêm khoảng trắng “Soft Motion Leggings”, giá45USD khớp giá trị, CTA “View product” mở quick view. Figma static không chứng minh action thêm giỏ; trước khi đổi nhãn cần chốt action phù hợp, không đổi tên quick view thành Add to cart rồi gọi hành vi đã đúng.

Khung popup source344×124px, padding12, ảnh80×100,gap12, vùng chữ228×100; theme đo cùng geometry. Title500 Roboto Condensed18/27,#181818. Giá Figma400 Roboto14/21,#181818; theme12/18,#626262. Action Figma500 Roboto14px,tracking−0.2,#1E1E1E; theme400,14/21,tracking−0.2,#626262 và không có icon. Chỉ tách thuộc tính sai; không báo thêm width chữ khi font size giá còn sai. Radius source còn thể hiện token2xl trong lần đọc, không dùng token này để tự suy px hoặc xác nhận toàn bộ style popup. Phần geometry đã khớp không đại diện mọi thuộc tính radius/shadow.

Mobile nguồn chỉ thể hiện hotspot Dot mặc định, không có popup nội dung trong frame đang kiểm; không suy các lỗi popup Desktop thành bằng chứng Mobile và không tạo lỗi thiếu popup. Navigation Mobile nằm giữa Header và ảnh,48px/gap12; một ảnh hiển thị đầy đủ. Nguồn padding48px khớp theme. Các gap tới gallery/control giữ theo vùng nhìn thấy, không lấy item ngoài viewport để báo.

### Bảng đồng bộ Sheet

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma / Đã khớp | Hiện tại | Hướng xử lý | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | Hotspot gallery — This week’s highlights | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Đủ Header/ảnh/hotspot/navigation; Heading50/60 (Desktop),30/36 (Mobile); Text16/24 và màu; padding96/48px; navigation48px, gap12px; chuyển ảnh được (Desktop). |  |  | Khớp |
| 10 | Hotspot gallery — This week’s highlights | Chung (Desktop, Mobile) | Text | Nội dung | must-have item | must-have items | Sửa nội dung Text trong Header theo Figma; dùng chung hai thiết bị. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Header | Max width | 384px; thực tế378px | 360px | Preset Header: max_width360 →384; kiểm lại chiều rộng cột sau đổi. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Title | Nội dung | SoftMotion Leggings | Soft Motion Leggings | Đối chiếu title sản phẩm mẫu; dùng dữ liệu sản phẩm trước khi custom hiển thị. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Price | Font size | 14px | 12px | Không có preset cỡ giá popup riêng; CSS scoped giá popup14px, giữ line-height150%. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Price | Màu | #181818 | #626262 | Không có preset màu giá popup riêng; CSS scoped dùng màu Heading của scheme hiện tại. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Nhãn | ADD TO CART | VIEW PRODUCT | Có preset product_link_label; cần xác minh action mong muốn trước khi đổi nhãn vì hiện tại mở quick view. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Font weight | 500 | 400 | Không có preset weight CTA popup riêng; CSS scoped font-weight500. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Màu | #1E1E1E | #626262 | Không có preset màu CTA popup riêng; dùng token Tertiary button/color đã đối chiếu. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Product popup · Action | Icon | Mũi tên chéo sau nhãn | Không có | Schema popup không có option icon; bổ sung icon scoped sau khi chốt action. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Layout | Gap · Eyebrow → Heading | 8px | 16px | Preset: gom Eyebrow + Heading vào Group gap8; Header giữ gap12 tới Text. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Desktop | Layout | Gap · Heading → Text | 12px | 16px | Preset Header gap_desktop16 →12, kết hợp Group bên trong gap8. | Chưa khớp |
| 10 | Hotspot gallery — This week’s highlights | Mobile | Layout | Gap · Eyebrow → Heading | 8px | 12px | Preset Group Eyebrow + Heading gap_mobile8; Header giữ gap_mobile12 tới Text. | Chưa khớp |


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 10 | This week’s highlights | `kinetra_highlights` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 41 | Hotspot gallery — This week’s highlights · Nội dung | Text hiện “must-have item” theo nguồn QA. |
| 50 | Hotspot gallery — This week’s highlights · Gap · Eyebrow → Heading | Desktop: Eyebrow đáy181 → Heading đầu189: gap8px. |
| 51 | Hotspot gallery — This week’s highlights · Gap · Heading → Text | Desktop: Heading đáy309 → Text đầu321: gap12px. |
| 52 | Hotspot gallery — This week’s highlights · Gap · Eyebrow → Heading | Mobile: Eyebrow đáy424.171875 → Heading đầu432.171875: gap8px; Heading → Text12px. |

### Mapping preset

| Target | Setting / composition | Trước | Sau |
|---|---|---|---|
| kinetra_highlights/text | text | <p>Uncover the must-have items that are capturing the hearts of our shoppers this week, ensuring you stay comfortable during your workouts</p> | <p>Uncover the must-have item that are capturing the hearts of our shoppers this week, ensuring you stay comfortable during your workouts</p> |
| kinetra_highlights/header | gap_desktop | 16 | 12 |
| kinetra_highlights/header | gap_mobile | 12 | 12 |
| kinetra_highlights/header | Composition | — | Eyebrow + Heading in group gap8/8; parent gap12/12 |
| sections/hotspot-gallery.liquid/preset0/text | text | <p>Uncover the must-have items that are capturing the hearts of our shoppers this week, ensuring you stay comfortable during your workouts</p> | <p>Uncover the must-have item that are capturing the hearts of our shoppers this week, ensuring you stay comfortable during your workouts</p> |
| sections/hotspot-gallery.liquid/preset0/header | gap_desktop | 16 | 12 |
| sections/hotspot-gallery.liquid/preset0/header | gap_mobile | 12 | 12 |
| sections/hotspot-gallery.liquid/preset0/header | Composition | — | Eyebrow + Heading in group gap8/8; parent gap12/12 |


## Lịch sử — fix-qa2-2026-10-26.md

### Kết quả sau sửa

| Hàng Sheet | Section / Tiêu chí | Bằng chứng |
|---|---|---|
| 42 | Hotspot gallery — This week’s highlights · Max width | Thêm setting Header maximum width (desktop) của riêng Hotspot Gallery; preset384px, computed384px Desktop; Mobile giữ width328px ở viewport375/client360. |
| 44 | Hotspot gallery — This week’s highlights · Font size | Popup price14px, line-height21px (150%). |
| 45 | Hotspot gallery — This week’s highlights · Màu | Popup price dùng --heading-color, computed#181818. |
| 46 | Hotspot gallery — This week’s highlights · Nhãn | Thêm select Product action: View product/Add to cart. Preset Add to cart; form POST routes.cart_add_url có variant ID và quantity tối thiểu; Add to cart dịch qua locale. View product giữ nhãn riêng, không mắc nhãn Add to cart khi đổi mode. |
| 47 | Hotspot gallery — This week’s highlights · Font weight | Action computed font-weight500. |
| 48 | Hotspot gallery — This week’s highlights · Màu | Action dùng --button-tertiary-text, computed#1E1E1E. |
| 49 | Hotspot gallery — This week’s highlights · Icon | Icon arrow_up_right sau nhãn, computed12×12px. |
