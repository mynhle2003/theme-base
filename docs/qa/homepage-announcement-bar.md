## QA hiện hành — 2026-10-28

STT 1 — **Announcement bar**. Instance `header-group/announcement-bar`; type `announcement-bar`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A6:J7. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47219-4126
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47301-19030
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-0.png`, `figma-m-0.png`, `final-desktop-0.png`, `final-mobile-0.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Text: nội dung, font/weight/size/line-height/tracking/căn giữa/màu; nền; cao Desktop 45px / Mobile 41px | Text: nội dung, font/weight/size/line-height/tracking/căn giữa/màu; nền; cao Desktop 45px / Mobile 41px |  |  | Khớp |
| Chung (Desktop, Mobile) | Text | Chiều rộng text | 310px | 314.03px; cùng font và một dòng, không đổi căn giữa | Không cần sửa; suy luận làm tròn/metrics |  | Figma làm tròn |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Homepage — Announcement bar

## QA 2026-10-28

Phạm vi Homepage theo xác nhận mới nhất của người dùng. Runtime local http://127.0.0.1:9301/, draft Novaire 192827490603, đúng target từ preview status. Desktop viewport1935×1080/client1920; Mobile390×812/client375, scrollbar15px, zoom100%.

Figma Desktop47219:4126 cao45; Mobile47301:19030 cao41, nền#F6F0EC. Runtime cao45/41, nềnrgb(246,240,236); Text#3A3A3A. Nội dung đúng và căn giữa cả hai.

Mobile Text đọc trực tiếp tại Figma qua CUA: Poppins400,14px,150%,tracking0,center,#3A3A3A; computedPoppins400,14px/21px,normaltracking,#3A3A3A: matched. Desktop Text chưa đọc trực tiếp, giữ unverified typography. Không suy toàn section đạt từ geometry.

Sheet Homepage A6:J8 đã ghi và đọc lại. Styleversion5. Dropdown bằng API có validation; màu chip chưa xác minh.

Evidence: /tmp/novaire-qa-20261028/announcement-mobile-text.txt, figma-d-0.png,figma-m-0.png,runtime-desktop.json,runtime-mobile.json. Không sửa theme.
