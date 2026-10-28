## Fix lần 1 — 2026-10-28 — verified

STT 18 — Custom section — Benefits. Các dòng lỗi và giá trị Figma/Hiện tại gốc trên Sheet được giữ nguyên; chỉ cập nhật Trạng thái=Khớp và bỏ highlight F/G sau QA. Lần fix vẫn Lần 1.

| Dòng Sheet | Kết quả đo mới | Trạng thái |
| --- | --- | --- |
| 84 | Câu Easy returns đúng “for any order” Desktop | Khớp |

### Mapping cấu hình local

| File | Instance/preset/block | Setting | Trước | Sau |
| --- | --- | --- | --- | --- |
| templates/index.json | sections/benefits/blocks/carousel-1/blocks/slide-2/blocks/header-2/blocks/text-2 | text | <p>Free return for 30 days on any orders delivered in France quickly</p> | <p>Free return for 30 days for any order delivered in France quickly</p> |
| sections/custom-section.liquid | presets/9/blocks/0/blocks/1/blocks/1/blocks/1 | text | <p>Free return for 30 days on any orders delivered in France quickly</p> | <p>Free return for 30 days for any order delivered in France quickly</p> |

Evidence: `/tmp/novaire-qa-20261028/fix1-desktop.json`, `fix1-mobile.json`, `fix1-desktop-full.png`, `fix1-mobile-full.png`; nguồn Figma Desktop/Mobile và ảnh đã đọc vẫn trong hồ sơ bên dưới. Viewport1935×1080/client1920 và390×812/client375. Không overflow ngang. Sheet sau ghi đã đọc lại đúng98 dòng: `fix1-sheet-after.tsv`. Snapshot trước sửa và mapping đầy đủ: `fix1-before/`, `fix1-mapping.json`. Chỉ sửa instance JSON và presets trong schema; implementation/schema controls giữ nguyên. Không sửa settings global. Các mục ngoài Lần 1 giữ kết luận cũ; không suy cả section đạt.

---

## QA hiện hành — 2026-10-28

STT 18 — **Custom section — Benefits**. Instance `index/benefits`; type `custom-section`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A83:J85. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-14503
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7415
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-17.png`, `figma-m-17.png`, `final-desktop-17.png`, `final-mobile-17.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Bốn benefit trên Desktop; một slide và dot trên Mobile; heading và Text slide đầu đúng typography/màu; section 220.80px / 260.80px | Bốn benefit trên Desktop; một slide và dot trên Mobile; heading và Text slide đầu đúng typography/màu; section 220.80px / 260.80px |  |  | Khớp |
| Desktop | Text (Easy returns) | Nội dung | Free return for 30 days for any order delivered in France quickly | Free return for 30 days on any orders delivered in France quickly | Text của card Easy returns → đúng câu trong Figma | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Icon | Biên hiển thị / stroke | Bốn icon phải khớp hình/stroke nguồn | Ảnh SVG 36px đã có; chưa đo stroke từng hình theo biên nhìn thấy |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — benefits

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/benefits`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-14503
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7415
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Four desktop cards and one mobile plus bullets. Native library paper-airplane/cube/chat-bubble/shield-check,14px headings, small body text. Exact payment icon is a library mismatch.

Local evidence: `/tmp/novaire-qa-evidence/desktop-footer.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.
