## Fix lần 1 — 2026-10-28 — đã recheck

Đọc Sheet live trước sửa: STT 15 hiện ở A92:J94 (đã dịch dòng so với checkpoint cũ). Lần 1 chỉ giao dòng 94, Mobile / Ảnh logo / Kích thước ảnh: Figma 160×80px, runtime cũ 170×85px. Dòng 93 Marquee / Vùng nhìn và opacity là **Bỏ qua / Chưa khớp**; giữ nguyên dòng này.

- Cấu hình `_marquee-image.width_custom_mobile` từ 170 → 160 cho cả sáu logo trong `templates/index.json` / `press_logos` và preset `Text marquee (custom)` trong `sections/custom-section.liquid`. Giữ type `custom-section`, tên preset, nguồn ảnh và `image_ratio: original`. Sáu ảnh nguồn có tỷ lệ 2:1. Không chỉnh implementation hoặc controls.
- Preview local `http://127.0.0.1:9301/`, draft 192827490603, tự nhận cấu hình từ phiên preview đang chạy. Mobile viewport 390×812 / client375: cả sáu ảnh tải xong, mỗi ảnh 160×80px (bounding box có sai số dấu phẩy động nhỏ hơn 0,00002px); scrollWidth375px. Desktop viewport1935×1080 / client1920: cả sáu ảnh185×92,5px; scrollWidth1920px. Marquee Desktop hiện1120px; đây là số đo phụ, không đổi kết luận dòng Bỏ qua.
- Đã xem render ở cả hai viewport. Nguồn đối chiếu là kích thước ảnh160×80px đã chốt trên Sheet live và ảnh Figma Mobile lưu từ QA trước (`/tmp/novaire-qa-20261028/figma-m-14.png`); không đọc lại Figma live trong lượt sửa kích thước này. Không lấy chiều cao tổng section làm tiêu chí thay cho kích thước ảnh.
- Sheet H94:J94 đã ghi hướng xử lý/số đo, Lần 1, **Khớp**, sau đó copy đọc lại đúng nội dung. Giữ F94/G94 làm lịch sử và bỏ highlight về trắng; chip/dropdown giữ nguyên. UI xác nhận **Đã lưu vào Drive**. Bằng chứng Sheet: `/tmp/novaire-press-fix1/sheet-after.jpg`.
- Kiểm tra delta so với snapshot đầu lượt: mỗi file cấu hình chỉ đổi đúng sáu giá trị width; JSON/schema JSON hợp lệ. `shopify theme check --output json`: 0 error, 8 warning ở các file ngoài phần cấu hình vừa sửa. Không kết luận cả section khớp vì dòng Marquee vẫn Chưa khớp/Bỏ qua.

Tab preview riêng đã đóng, viewport override đã reset; tab Sheet có sẵn được giữ lại. Checkpoint `/tmp/novaire-press-fix1/browser-checkpoint.json`. Không chạy push/publish hoặc lưu Theme Editor.

## Lịch sử QA — 2026-10-28

STT 15 — **Custom section — Press logos**. Instance `index/press_logos`; type `custom-section`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A71:J73. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-14801
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7364
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-14.png`, `figma-m-14.png`, `final-desktop-14.png`, `final-mobile-14.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | AS FEATURED IN: nội dung, typography, màu; sáu logo gốc có mặt | AS FEATURED IN: nội dung, typography, màu; sáu logo gốc có mặt |  |  | Khớp |
| Chung (Desktop, Mobile) | Marquee | Vị trí / opacity logo | Desktop sáu logo; Mobile hai logo trong vùng nhìn | Runtime marquee liên tục; chưa so opacity và cùng phase |  |  | Chưa xác minh |
| Mobile | Layout | Chiều cao | 190px | 191.39px; chưa giải thích hết 1.39px |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.
