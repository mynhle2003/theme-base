## Fix lần 1 — 2026-10-28 — verified

STT 10 — Shop the look carousel banners. Các dòng lỗi và giá trị Figma/Hiện tại gốc trên Sheet được giữ nguyên; chỉ cập nhật Trạng thái=Khớp và bỏ highlight F/G sau QA. Lần fix vẫn Lần 1.

| Dòng Sheet | Kết quả đo mới | Trạng thái |
| --- | --- | --- |
| 46 | 32px/44.8px Desktop | Khớp |
| 47 | 26px/36.4px Mobile | Khớp |
| 48 | Tracking2.56px cả hai breakpoint | Khớp |

### Mapping cấu hình local

| File | Instance/preset/block | Setting | Trước | Sau |
| --- | --- | --- | --- | --- |
| templates/index.json | sections/statement_stacks/blocks/header/blocks/heading-2 | heading_size | custom | xl |
| sections/shop-the-look-carousel-banners.liquid | presets/0/blocks/0/blocks/1 | heading_size | custom | xl |

Evidence: `/tmp/novaire-qa-20261028/fix1-desktop.json`, `fix1-mobile.json`, `fix1-desktop-full.png`, `fix1-mobile-full.png`; nguồn Figma Desktop/Mobile và ảnh đã đọc vẫn trong hồ sơ bên dưới. Viewport1935×1080/client1920 và390×812/client375. Không overflow ngang. Sheet sau ghi đã đọc lại đúng98 dòng: `fix1-sheet-after.tsv`. Snapshot trước sửa và mapping đầy đủ: `fix1-before/`, `fix1-mapping.json`. Chỉ sửa instance JSON và presets trong schema; implementation/schema controls giữ nguyên. Không sửa settings global. Các mục ngoài Lần 1 giữ kết luận cũ; không suy cả section đạt.

---

## QA hiện hành — 2026-10-28

STT 10 — **Shop the look carousel banners**. Instance `index/statement_stacks`; type `shop-the-look-carousel-banners`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A45:J50. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-14925
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7243
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-9.png`, `figma-m-9.png`, `final-desktop-9.png`, `final-mobile-9.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Ảnh Steele, tên/giá và typography product card; nút View product; hai dot | Ảnh Steele, tên/giá và typography product card; nút View product; hai dot |  |  | Khớp |
| Desktop | Heading | Font size | 32px: token h2, line-height 44.8px | 30px | heading_size → xl thay custom | Lần 1 | Chưa khớp |
| Mobile | Heading | Font size | 26px: token h2, hai breakpoint riêng | 30px | heading_size → xl dùng token 32px / 26px | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Heading | Letter spacing | 2.56px | 1.44px | heading_size → xl dùng token h2 | Lần 1 | Chưa khớp |
| Desktop | Layout | Chiều rộng nội dung | 1600px | 1600px; container border-box 1696px = 1600 + 48 × 2; inset nội dung 160px |  |  | Khớp |
| Chung (Desktop, Mobile) | Product card | Gallery biến thể xanh | Có thiết kế lượt look khác | Đã có sản phẩm Steele xanh; chưa đối chiếu đầy đủ gallery của lượt thứ hai |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — Look

Latest build verification:2026-10-27; index/statement_stacks, theme/novaire-theme. Desktop Figma47054:14925; mobile47284:7243 in original vsUDZS8CZ0sa1pruNqu0eb. Preview unpublished192827490603 at http://127.0.0.1:9300 .

Original Steele image precedes heading and real Steele product on mobile. Desktop native image/product composition rendered. Header placement/action geometry differ from Figma because inherited Shop the look slots are preserved. No implementation changes. Mobile measured1060px at360px content width vs source1134.17px at375px. Evidence `/tmp/novaire-qa-evidence/mobile-look.png` is temporary/local. Status: configured with capability gaps; not a pixel-perfect pass.

## History

2026-10-27 — Original source survey, supported preset configuration, desktop and mobile build observations. Inherited typography/palette retained.
