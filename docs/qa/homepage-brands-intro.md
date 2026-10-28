## Rich text custom range — hoàn tất lần 2 — 2026-10-28

User cho phép custom min/max/step cho theme để preset khớp Figma. blocks/heading.liquid và blocks/text.liquid: max_width320–1600/step20 →320–1320/step10 (100 khoảng,101 giá trị). Giữ min320/default640; rà cấu hình hiện có không có max_width vượt1320. Đây là range dùng chung của Heading/Text, giới hạn lựa chọn tương lai ở1320; không thay giá trị các consumer khác. Không thay global page width hoặc thêm Group/control. Rich text không có Group; đạt width bằng setting sẵn có sau chỉnh range.

Instance brands_intro trong templates/index.json và Add section preset sections/rich-text.liquid: Heading/Text max_width840→830. Desktop client1920: cả hai830px, CTA186.453px, section375.1875px, padding80/gap16. Mobile client375: Heading/Text343px, CTA178.453px, section417px, padding56/gap16; giữ layout mobile. Sheet dòng31 giữ F/G gốc830/840, thêm lịch sử custom vào H, Lần2/Khớp và bỏ highlight F/G. Đã đọc lại sau ghi. Không tuyên bố QA toàn theme; shared render/CSS không đổi, chỉ schema range +2 settings instance/preset.

Evidence: /tmp/novaire-qa-20261028/rich-custom-runtime.json, rich-custom-sheet-before/after.tsv, rich-custom-theme-check.json. Theme Check0errors/8warnings. Không commit/push/publish/Save Theme Editor.

---

## Fix lần 2 — kiểm capability và recheck 2026-10-28

Dòng31 Sheet giữ Lần 2 / Chưa khớp. Đã kiểm hướng đưa Heading/Text/Button vào Group: sections/rich-text.liquid không cho block Group, Heading/Text là static slots; không thể chuyển vào Group bằng preset hiện tại. max_width của Heading/Text min320/max1600/step20 nên830 không hợp lệ;840 đang là lựa chọn gần nhất. Không ghi830 trái schema, không đổi page width, không đổi implementation khi chưa có quyền custom cho layout này. Không có thay đổi code/config lượt này.

Runtime mới Desktop client1920: content1600, Text840px, section375.1875px, padding80, gap16. Mobile client375: content/Text343px, section417px, padding56, gap16. Không overflow trang. Sai số375→375.1875 vẫn Figma làm tròn; không sửa padding. Cần mở rộng khả năng composition của Rich text hoặc custom scoped width để đạt830px, ngoài quyền preset hiện tại.

Evidence mới: `/tmp/novaire-qa-20261028/list-rich-recheck.json`, list-rich-before/after.tsv. Giữ F/G gốc trên Sheet và các lịch sử dưới đây.

---

## QA hiện hành — 2026-10-28

STT 6 — **Rich text**. Instance `index/brands_intro`; type `rich-text`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A30:J32. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47056-14774
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7172
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-5.png`, `figma-m-5.png`, `final-desktop-5.png`, `final-mobile-5.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Heading, Text, Button: nội dung, typography và màu; căn giữa; padding 80px / 56px | Heading, Text, Button: nội dung, typography và màu; căn giữa; padding 80px / 56px |  |  | Khớp |
| Desktop | Layout | Chiều rộng cụm nội dung | 830px | 840px | Kiểm range max-width của Group trước khi chốt 830px; không đổi global page width |  | Chưa khớp |
| Desktop | Text | Chiều cao text / section | Section 375px | 375.19px; font và số dòng tương ứng | Không cần sửa phần sai số typography; không bù padding |  | Figma làm tròn |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.
