## Chốt nội dung Card3 — 2026-10-28

Người dùng chấp nhận quy ước: nội dung Mobile ngoài frame/clip lấy Desktop của cùng item làm chuẩn nếu không có chỉ dẫn Mobile riêng. Card3 lấy CAVATION OUTFIT; runtime đã xác minh dùng CAVATION OUTFIT nên dòng29 Sheet chuyển Khớp, không gắn vòng fix, không sửa theme. Giữ F/G gốc để truy nguồn; H ghi quyết định chuẩn Desktop. Đã cập nhật qa-theme/references/visual-checks.md, mục Nội dung mobile nằm ngoài vùng nhìn thấy. Kết quả này thay thế trạng thái Chưa xác minh trong lịch sử bên dưới.

---

## Recheck lần 2 theo skill mới — 2026-10-28

Dòng28 Sheet: Khớp theo quy ước, rút hướng sửa/vòng fix chiều cao. Không sửa code/config. Desktop client1920: section773.765625px, card594.65625×693.765625px,3 cột/gap20. Mobile client375: card284.15625×331.515625px, gap10, padding cuối56, section387.515625px. Chênh so nguồn355px là32.515625px do card rộng hơn; tỷ lệ6:7 giữ đúng, không min-height dư. Mẫu1 card đầy đủ + preview đúng. Figma nguồn lịch sử figma-m-4.png zoom259%: card rộng khoảng256px/cao299px, gap10. Template có các tỷ lệ preview khác nhau: figma-m-12.png zoom132% cho Video card giữa rộng khoảng287px, hai bên preview khoảng32px, khác Collection list. Chỉ kết luận trong Homepage, không suy toàn theme. Áp dụng mục Chấp nhận lệch chiều cao mobile do tỷ lệ item lấp ló của visual-checks.md; không gọi số đo khớp tuyệt đối. Dòng29 nguồn title Card3 vẫn Chưa xác minh, không đổi catalog/title.

Evidence mới: `/tmp/novaire-qa-20261028/list-rich-recheck.json`, list-rich-before/after.tsv. Giữ F/G gốc trên Sheet và các lịch sử dưới đây.

---

## QA hiện hành — 2026-10-28

STT 5 — **Collection list**. Instance `index/categories`; type `collection-list`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A27:J29. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-10843
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7151
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-4.png`, `figma-m-4.png`, `final-desktop-4.png`, `final-mobile-4.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Ba ảnh category, heading/button và typography/màu; Desktop ba cột, chiều cao 773.77px so với 773.78px | Ba ảnh category, heading/button và typography/màu; Desktop ba cột, chiều cao 773.77px so với 773.78px |  |  | Khớp |
| Mobile | Grid/slide | Chiều cao vùng ảnh | 299px = section 355px trừ padding cuối 56px | 331.52px; section 387.52px | Kiểm preview width; setting hiện chỉ chọn số cột và bật preview, chưa có width px riêng |  | Chưa khớp |
| Mobile | Heading (Card 3) | Nội dung nguồn | Desktop CAVATION OUTFIT; layer Mobile ngoài vùng clip ghi weekend outfit | Runtime CAVATION OUTFIT; cần chốt khác biệt giữa hai nguồn |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.
