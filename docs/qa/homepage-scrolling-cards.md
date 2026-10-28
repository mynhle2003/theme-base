## Padding đã xác minh lại từ Figma — 2026-10-28

Đọc trực tiếp Chrome Properties: Desktop wrapper47054:15161 có Top/Bottom token20 (80px theo scale4px đã xác minh); Mobile wrapper47284:7260 có Top/Bottom token14 (56px). Root Image with text không liệt kê padding; phải inspect wrapper con. Không lấy chiều cao root làm spacing.

Runtime Desktop đã đo80/80px; Mobile đo mới viewport390/client375 cho computed56/56px, hai article flex-direction column. Canvas Figma Mobile xác nhận ảnh trước text ở cả hai card. Phần padding chưa xác minh được chốt Khớp. Sheet D66:J66 đã ghi Figma80/80 và56/56, runtime tương ứng; H/I trống, J=Khớp; đọc lại xác nhận. Giữ các dòng fix typo và các nhóm khác. Không kiểm padding ngang, gap giữa card hoặc chiều cao section theo phạm vi đã giao. Đã reset viewport và đóng hai tab QA mới2048918061/2048918064. Không sửa theme.

---

## Recheck phạm vi Scrolling cards — 2026-10-28

Đã cập nhật qa-theme: chỉ layout bên trong card và padding trên/dưới section; bỏ padding hai bên, gap giữa card, chiều cao section. Các kiểm nội dung/typo/màu vẫn áp dụng.

Runtime đọc lại localhost9301/client1880: hai article flex row, mỗi card một ảnh và nội dung Our Story/Our Value; section padding computed80px/80px. Mobile56/56px chỉ xác nhận từ cấu hình DOM, chưa đo runtime mới. Nguồn Properties đã lưu của root Desktop47054:15160/Mobile47284:7259 không hiển thị số padding; chưa đủ bằng chứng chốt padding khớp. Không lấy chiều cao1600/1462px suy thành gap hoặc padding.

Sheet live nhóm Scrolling cards A63:J66: đã thay dòng Layout/Spacing hai hàng ngoài phạm vi bằng Padding trên/dưới, trạng thái Chưa xác minh đúng dữ liệu thiếu; đọc lại D66:J66 xác nhận. Giữ hai dòng lịch sử fix typo Khớp/Lần1. Một thao tác chọn nhầm dòng70 đã được undo ngay; đọc lại xác nhận dòng Video Heading/Xuống dòng được khôi phục nguyên trạng. Chưa hoàn tất recheck visual card Desktop1920/Mobile375 và padding nguồn; không tuyên bố toàn section Pass. Không sửa theme.

---

## Fix lần 1 — 2026-10-28 — verified

STT 12 — Scrolling cards. Các dòng lỗi và giá trị Figma/Hiện tại gốc trên Sheet được giữ nguyên; chỉ cập nhật Trạng thái=Khớp và bỏ highlight F/G sau QA. Lần fix vẫn Lần 1.

| Dòng Sheet | Kết quả đo mới | Trạng thái |
| --- | --- | --- |
| 58 | Our Value14px cả hai breakpoint | Khớp |
| 59 | Our Value line-height21px cả hai breakpoint | Khớp |

### Mapping cấu hình local

| File | Instance/preset/block | Setting | Trước | Sau |
| --- | --- | --- | --- | --- |
| templates/index.json | sections/scrolling_cards/blocks/our_value/blocks/editorial-content/blocks/content/blocks/description | text_size | md | sm |
| sections/scrolling-cards.liquid | presets/0/blocks/2/blocks/0/blocks/0/blocks/2 | text_size | md | sm |

Evidence: `/tmp/novaire-qa-20261028/fix1-desktop.json`, `fix1-mobile.json`, `fix1-desktop-full.png`, `fix1-mobile-full.png`; nguồn Figma Desktop/Mobile và ảnh đã đọc vẫn trong hồ sơ bên dưới. Viewport1935×1080/client1920 và390×812/client375. Không overflow ngang. Sheet sau ghi đã đọc lại đúng98 dòng: `fix1-sheet-after.tsv`. Snapshot trước sửa và mapping đầy đủ: `fix1-before/`, `fix1-mapping.json`. Chỉ sửa instance JSON và presets trong schema; implementation/schema controls giữ nguyên. Không sửa settings global. Các mục ngoài Lần 1 giữ kết luận cũ; không suy cả section đạt.

---

## QA hiện hành — 2026-10-28

STT 12 — **Scrolling cards**. Instance `index/scrolling_cards`; type `scrolling-cards`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A57:J60. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-15160
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7259
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-11.png`, `figma-m-11.png`, `final-desktop-11.png`, `final-mobile-11.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Hai hàng Our Story / Our Value; đúng ảnh; Heading/Eyebrow/Button và Text Our Story: nội dung, font/màu; ảnh trước text trên Mobile | Hai hàng Our Story / Our Value; đúng ảnh; Heading/Eyebrow/Button và Text Our Story: nội dung, font/màu; ảnh trước text trên Mobile |  |  | Khớp |
| Chung (Desktop, Mobile) | Text (Our Value) | Font size | 14px | 16px | Text.text_size → sm cho block Our Value | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Text (Our Value) | Line-height | 21px | 24px | Text.text_size → sm dùng body 14px / 150% | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Layout | Spacing hai hàng | Desktop 1600px; Mobile 1462px | 1586.66px / 1534px; cần remeasure gap sau sửa typo Our Value |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.
