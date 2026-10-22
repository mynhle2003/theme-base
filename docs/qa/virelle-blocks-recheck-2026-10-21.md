# Virelle — kiểm tra lại preview và các block thường gặp

Ngày kiểm tra: 21/10/2026. Checkout: `virelle-theme`, nhánh `theme/virelle-theme`.

## Đúng nguồn trước khi QA

- Cổng `9300` hiển thị composition khác với `templates/index.json` của Virelle; loại khỏi lượt QA này. Không lấy số đo của cổng đó để cập nhật Sheet.
- Đã chạy `node theme-base preview start` tại checkout Virelle. Preview đúng: <http://127.0.0.1:9301/>. Đã xác nhận 16 section của homepage khớp thứ tự/type trong repo, gồm `virelle_motion_365`, `featured_product_YkjKMT`, `virelle_testimonial` và `virelle_newsletter`.
- Preview bị dừng một lần; đã khởi động lại, tải lại trang và kiểm tra ảnh. Ảnh Shop the look từng lỗi tải trong lúc mất kết nối không được kết luận là asset bị thiếu.
- Figma file `yTXlAfT0miBGgRuuYM4OMp`; homepage Desktop `48002:1686`, Mobile `48096:20109`. MCP báo hết hạn mức, nên đọc canvas/Properties bằng CUA trên Chrome theo contract của skill.
- Đã đọc lại Properties của 38 node section: 16 section nội dung cùng Announcement bar, Header và Footer trên hai thiết bị. Có dữ liệu computed style mới và ảnh theo section. Việc đọc root không chứng minh đã xác minh mọi thuộc tính của tất cả block con.

## Kết quả đã xác nhận lại

| Section / thành phần | Kết quả |
| --- | --- |
| Hero / cấu trúc | Có ảnh nền, Header chứa Group (Icon + Eyebrow) và Heading, Button nằm bên dưới; nội dung ở dưới bên trái. Chiều cao 800px Desktop / 720px ở vùng nội dung Mobile 375px khớp root thiết kế. Media crop, overlay và toàn bộ typo vẫn cần đối chiếu chi tiết. |
| Collection tabs / tổng quan | Có Group (Icon + Eyebrow), tabs, Product cards và Shop all; cụm tiêu đề căn giữa. Desktop hiển thị 4 card; Mobile có 1 item đầy đủ và phần item kế tiếp. |
| Collection tabs / Product card | Badge Bra là NEW, Figma là SOLD OUT; Halter và Long Sleeve có thêm NEW/SALE. Jacket thứ tư dùng ảnh màu ô liu thay cho nâu xám. Khác biệt này gồm dữ liệu sản phẩm/biến thể, chưa kết luận do code. |
| Collection list / nội dung | Tên collection trong theme có hậu tố VIRELLE; thiết kế dùng RUNNING, TENNIS, YOGA, FITNESS. |
| Featured product / mua hàng | Có media, title, price, variant picker, Quantity, Add to cart và View details. Không render BUY IT NOW; thiết kế có nút đó bên dưới Add to cart. DOM kiểm tra không có accelerated-checkout/payment-button ở instance này. |
| Testimonial: split / Heading (Header) | Mobile dùng cỡ H1 và tracking −1.2px; Figma chọn Heading/H2, Roboto Condensed 700, line-height 120%, tracking −0.6px. Màu chữ #181818 và căn giữa khớp. |
| Testimonial: split / Text (Slide) | Theme thêm dấu ngoặc kép vào lời đánh giá; Figma không có. Ở vùng nội dung 375px, text theme xuống 3 dòng trong khi thiết kế là 2 dòng. Cần tách kiểm nội dung khỏi kiểm viewport trước khi chốt nguyên nhân wrap. |
| Blog posts / CTA | Theme có Header và hai Blog cards; thiếu VIEW MORE. Thiết kế có CTA ở bên phải Header trên Desktop và dưới Heading trên Mobile. |

Sheet hiện tại đã được cập nhật 19 dòng, giữ STT/Section/thiết bị/thành phần gộp ô, dropdown trạng thái và 7 cột. Những tiêu chí khác giữ nguồn kiểm tra trước; không đổi thành “Khớp” chỉ vì root đã được đọc lại.

## Phân tích các block thường gặp

Số lượng dưới đây là **block cấu hình trong cây `templates/index.json`**, không phải tổng số card render từ collection/blog. Các thành phần được tạo động phải kiểm thêm trong Liquid và DOM.

| Block trong repo | Số cấu hình / số section | Cách kiểm cần áp dụng |
| --- | --- | --- |
| Group | 31 / 14 | Kiểm con trong group, hướng xếp, width fit/fill, căn lề, gap và thứ tự. Ví dụ Icon + Eyebrow cần kiểm riêng SVG, nội dung, màu, typo và gap của cặp. |
| Icon | 19 / 14 | Phân biệt custom SVG hình vuông với icon chức năng. Đối chiếu hình, fill/stroke, kích thước và baseline; có Icon trong config chưa chứng minh render đúng. |
| Heading | 18 / 12 | Kiểm nội dung, role/style H1/H2/H3, font/weight/line-height/tracking, màu, căn lề và wrap. Heading của Header và Heading (Slide) là hai instance khác nhau. |
| Eyebrow | 13 / 13 | Kiểm nội dung, case, font, tracking, màu và quan hệ với Icon. Không suy tất cả Eyebrow cùng một màu vì có section nền sáng/tối. |
| Header | 12 / 12 | Kiểm đủ các con, thứ tự, width, căn cả cụm và căn text. Header căn giữa không tự chứng minh đúng typo/gap. Không bắt các section không có cụm tiêu đề phải thêm Header. |
| Text | 9 / 5 | Gom font/size/weight/line-height/tracking vào Typo; các dòng Nội dung, Màu và Kích thước/Wrap riêng. Không bỏ qua dấu câu: ngoặc kép ở Testimonial có thể ảnh hưởng wrap. |
| Product card / Product card single | 5 / 3 và 3 / 1 | Kiểm ảnh/biến thể, title, giá thường/giá sale, badge, swatch và quick add/quick view. Kiểm card lặp theo trạng thái khác nhau; không lấy card đầu đại diện Sale hoặc Sold out. |
| Button / View all button | 4 / 4 và 3 / 3 | Kiểm label/icon, typo, nền/chữ/viền, padding/radius/box và vị trí ở từng thiết bị. Nút Buy it now thuộc composition mua hàng, không đồng nhất với Button thường. |
| Image | 4 / 2 | Đây chỉ là block Image tường minh; Hero và card còn sinh ảnh qua setting/dữ liệu. Kiểm đúng asset, desktop/mobile source, crop, focal point và overlay áp dụng. |

Blog card còn có các block riêng trong repo như `blog-card-title`, `blog-card-meta`, `blog-card-tag`, `blog-card-description`, `blog-card-button`. Tên báo cáo phải giải từ schema/locale đúng block; không lấy tiêu đề bài viết làm tên block. Với component sinh động, không đếm số lần xuất hiện trong JSON thành số item thực tế.

## Giới hạn số đo và phần chưa kết luận

- Desktop đã đo ở viewport CSS 1935px, vùng nội dung 1920px để khớp chiều rộng frame; lưu riêng hai số.
- Lượt Mobile trên Chrome dùng viewport CSS 390px, vùng nội dung 375px. Do typography có nội suy theo `vw`, H1 ra 40.5419px thay vì 40px. Một lượt viewport CSS 375px cho font 40px nhưng vùng nội dung còn 360px vì scrollbar. Chưa có device emulation loại scrollbar trong lượt này; không quy chênh lệch nhỏ đó thành lỗi theme. Các dòng Hero bị ảnh hưởng đã trả về “Chưa xác minh”.
- Một số block có entrance animation: box lấy trong lúc transform chưa ổn định không dùng để kết luận sai vị trí/gap. Computed style, text, screenshot và trạng thái tải được giữ riêng để kiểm tiếp.
- Các giá trị Figma dùng variable như `Typo/h2`, `Button&Form/Height`, hoặc spacing token phải được resolve theo mode; không đọc số token 12/24 thành px khi chưa xác minh.
- Chưa xác minh hết typo, màu, kích thước, media crop và trạng thái control của mọi block con. Các template ngoài homepage chưa có đủ cặp nguồn thiết kế/preview; chưa kết luận pixel-perfect toàn theme.
- Không sửa code/config/theme, không commit/push/publish và không submit form mua hàng/newsletter trong lượt này. Thao tác preview có đồng bộ development theme theo quyền người dùng đã cấp.

Bằng chứng: `output/theme-pixel-qa-recheck-2026-10-21/` gồm `figma-fresh.json`, `render-desktop.json`, `render-mobile.json`, `block-inventory.json`, ảnh từng section và trace cập nhật Sheet. Nguồn cũ được giữ ở thư mục QA trước để phân biệt thời điểm kiểm tra.
