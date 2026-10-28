## Hero padding correction — 2026-10-28 — Lần 2

Đã đọc lại Figma desktop `47052:10820` và mobile `47284:7125`: tổng banner800/550px; token padding tên`20` resolve **80px** mỗi phía ở cả hai node, không phải20px. Cập nhật preset Hero và instance index/hero: padding top/bottom desktop/mobile80px; giữ medium; hiệu chỉnh token Medium desktop640px và mobile390px cùng thang fixed-height. Audit hiện hành: [Hero calibration](../audits/novaire-hero-height-calibration-2026-10-27.md).

Preview đang chạy ở9301 đã phản ánh file local. Đo lại desktop viewport1935×1080/client1920: container640 + padding80×2 = **800px**. Mobile viewport390×812/client375: container390 + padding80×2 = **550px**. ClientWidth=scrollWidth1920/375, không overflow ngang; crop hai ảnh và nội dung căn giữa giữ nguyên. Chỉ xác nhận phạm vi chiều cao/padding, không suy toàn section đạt; Button box vẫn chưa xác minh.

Đã ghi [Homepage H18:J19](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#range=H18:J19) rồi đọc lại A16:J20: H lưu hướng xử lý Lần1 cùng công thức và số đo mới Lần2; I=Lần2, J=Khớp. Giữ F/G lịch sử và các dòng khác, dropdown/merge hiện có. Google Sheets UI xác nhận Đã lưu vào Drive. Không sửa Sheet ngoài hai dòng chiều cao Hero.

Theme Check:0errors/8warnings ngoài file Hero; không chạy push/publish hoặc lưu Theme Editor. CLI preview có sẵn tự phản ánh local edits. Các checkpoint dưới đây là lịch sử trước correction này.

---

## Fix lần 1 — 2026-10-28 — verified

STT 3 — Hero. Các dòng lỗi và giá trị Figma/Hiện tại gốc trên Sheet được giữ nguyên; chỉ cập nhật Trạng thái=Khớp và bỏ highlight F/G sau QA. Lần fix vẫn Lần 1.

| Dòng Sheet | Kết quả đo mới | Trạng thái |
| --- | --- | --- |
| 17 | Parallax none; media theo section800/550px, cover; crop đối chiếu ảnh nguồn Figma desktop/mobile | Khớp |
| 18 | Hero Desktop800px | Khớp |
| 19 | Hero Mobile550px | Khớp |

### Mapping cấu hình local

| File | Instance/preset/block | Setting | Trước | Sau |
| --- | --- | --- | --- | --- |
| templates/index.json | sections/hero | parallax_effect | fixed | none |
| templates/index.json | sections/hero | padding_top | 56 | 0 |
| templates/index.json | sections/hero | padding_bottom | 56 | 0 |
| templates/index.json | sections/hero | padding_top_mobile | 24 | 0 |
| templates/index.json | sections/hero | padding_bottom_mobile | 24 | 0 |
| sections/hero.liquid | presets/0 | parallax_effect | fixed | none |
| sections/hero.liquid | presets/0 | padding_top | 56 | 0 |
| sections/hero.liquid | presets/0 | padding_bottom | 56 | 0 |
| sections/hero.liquid | presets/0 | padding_top_mobile | 24 | 0 |
| sections/hero.liquid | presets/0 | padding_bottom_mobile | 24 | 0 |

Evidence: `/tmp/novaire-qa-20261028/fix1-desktop.json`, `fix1-mobile.json`, `fix1-desktop-full.png`, `fix1-mobile-full.png`; nguồn Figma Desktop/Mobile và ảnh đã đọc vẫn trong hồ sơ bên dưới. Viewport1935×1080/client1920 và390×812/client375. Không overflow ngang. Sheet sau ghi đã đọc lại đúng98 dòng: `fix1-sheet-after.tsv`. Snapshot trước sửa và mapping đầy đủ: `fix1-before/`, `fix1-mapping.json`. Chỉ sửa instance JSON và presets trong schema; implementation/schema controls giữ nguyên. Không sửa settings global. Các mục ngoài Lần 1 giữ kết luận cũ; không suy cả section đạt.

---

## QA hiện hành — 2026-10-28

STT 3 — **Hero**. Instance `index/hero`; type `hero`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A16:J20. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-10820
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7125
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-2.png`, `figma-m-2.png`, `final-desktop-2.png`, `final-mobile-2.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Eyebrow, Heading và Button: nội dung, font/weight/size/tracking/case/màu; cụm căn giữa | Eyebrow, Heading và Button: nội dung, font/weight/size/tracking/case/màu; cụm căn giữa |  |  | Khớp |
| Chung (Desktop, Mobile) | Image | Crop | Ảnh cover theo khung section 800px / 550px | parallax fixed: media inner theo viewport 1080px / 812px, crop khác | parallax_effect → none; đo lại crop sau khi chỉnh chiều cao | Lần 1 | Chưa khớp |
| Desktop | Tổng quan layout | Chiều cao | 800px | 912px: container 800px + padding 56px × 2 | padding_top/padding_bottom → 0; QA lại inset nội dung | Lần 1 | Chưa khớp |
| Mobile | Tổng quan layout | Chiều cao | 550px | 598px: container 550px + padding 24px × 2 | padding_top_mobile/padding_bottom_mobile → 0; QA lại inset | Lần 1 | Chưa khớp |
| Mobile | Button | Khung tổng thể | Cần xác nhận box parent Button; label đã khớp | 135.5 × 40px; không báo line-height label riêng |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — hero

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/hero`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-10820
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7125
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Original desktop/mobile images and Novaire copy render. Desktop800px; mobile600px vs Figma550px, limited by existing Slideshow option. No custom implementation.

Local evidence: `/tmp/novaire-qa-evidence/mobile-hero.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.
