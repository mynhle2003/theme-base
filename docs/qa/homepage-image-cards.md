## QA hiện hành — 2026-10-28

STT 8 — **Image cards**. Instance `index/new_collections`; type `image-cards`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A37:J40. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-10949
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7201
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-7.png`, `figma-m-7.png`, `final-desktop-7.png`, `final-mobile-7.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Hai ảnh và overlay; Eyebrow/Heading/Button: nội dung, typography, màu; Desktop hai cột / Mobile xếp dọc; tỷ lệ ảnh 5:4 | Hai ảnh và overlay; Eyebrow/Heading/Button: nội dung, typography, màu; Desktop hai cột / Mobile xếp dọc; tỷ lệ ảnh 5:4 |  |  | Khớp |
| Desktop | Layout | Chiều cao | 798.4px | 798.39px | Không cần sửa |  | Figma làm tròn |
| Mobile | Layout | Chiều cao | 616.8px | 616.78px | Không cần sửa |  | Figma làm tròn |
| Desktop | Layout | Inset cụm overlay | Text wrapper 834px | Text wrapper 866px; cần đo parent và ownership padding, không dùng width text để suy gap |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.
