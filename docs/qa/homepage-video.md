## Recheck theo quy tắc video mới — 2026-10-28

Skill qa-theme chỉ yêu cầu thumbnail khớp Figma và đã gán video, không bắt phát/dừng từng clip. Rà evidence thumbnail đã kiểm và runtime hiện tại:5 poster riêng/5 nguồn MP4 riêng (DOM có bản lặp cùng5video). Sheet D71:J71 thay Play/pause Chưa xác minh bằng Đã kiểm và khớp/Thumbnail-video đã gán; đọc lại xác nhận.

LOVED BY REAL PEOPLE runtime Desktop client1905: Outfit300 normal32px/44.8px,tracking2.56px,uppercase,#3A3A3A,box height44.796875. Mobile viewport390/client375: Outfit300 26px/36.4px,tracking2.56px,uppercase,#3A3A3A,center,width343,height72.78125px. Nguồn Properties lưu desktop-text-summary/mobile-text-summary: Outfit300,H2,140%,2.56px,uppercase,#3A3A3A; Desktop height45,Mobile width343/height36. Mapping H2 size32/26 đã xác minh trong lượt Countdown cùng hệ token; không copy page mới trong lượt này. CSS typo các giá trị trên khớp dữ liệu nguồn, nhưng wrap Mobile chưa khớp: hai dòng so với một dòng. Không miễn wrap bằng quy tắc làm tròn; Sheet H70 giữ Chưa khớp và ghi kết quả mới. Chưa kiểm riêng shaping/feature/font file để chứng minh nguyên nhân wrap. Không sửa theme. Viewport đã reset và tab tạm2048918102 đã đóng.

---

## Fix lần 1 — 2026-10-28 — verified

STT 13 — Video with products. Các dòng lỗi và giá trị Figma/Hiện tại gốc trên Sheet được giữ nguyên; chỉ cập nhật Trạng thái=Khớp và bỏ highlight F/G sau QA. Lần fix vẫn Lần 1.

| Dòng Sheet | Kết quả đo mới | Trạng thái |
| --- | --- | --- |
| 62 | Video Text14px cả hai breakpoint | Khớp |
| 63 | Video Text line-height21px cả hai breakpoint | Khớp |

### Mapping cấu hình local

| File | Instance/preset/block | Setting | Trước | Sau |
| --- | --- | --- | --- | --- |
| templates/index.json | sections/founder_testimonials/blocks/header/blocks/real-people-copy | text_size | md | sm |
| sections/video-with-products.liquid | presets/0/blocks/0/blocks/1 | text_size | md | sm |

Evidence: `/tmp/novaire-qa-20261028/fix1-desktop.json`, `fix1-mobile.json`, `fix1-desktop-full.png`, `fix1-mobile-full.png`; nguồn Figma Desktop/Mobile và ảnh đã đọc vẫn trong hồ sơ bên dưới. Viewport1935×1080/client1920 và390×812/client375. Không overflow ngang. Sheet sau ghi đã đọc lại đúng98 dòng: `fix1-sheet-after.tsv`. Snapshot trước sửa và mapping đầy đủ: `fix1-before/`, `fix1-mapping.json`. Chỉ sửa instance JSON và presets trong schema; implementation/schema controls giữ nguyên. Không sửa settings global. Các mục ngoài Lần 1 giữ kết luận cũ; không suy cả section đạt.

---

## QA hiện hành — 2026-10-28

STT 13 — **Video with products**. Instance `index/founder_testimonials`; type `video-with-products`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A61:J65. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47064-15176
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7284
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-12.png`, `figma-m-12.png`, `final-desktop-12.png`, `final-mobile-12.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Năm video gốc, Heading và product overlay giữa; giá $35; có pagination | Năm video gốc, Heading và product overlay giữa; giá $35; có pagination |  |  | Khớp |
| Chung (Desktop, Mobile) | Text | Font size | 14px | 16px | Text.text_size → sm trong Header | Lần 1 | Chưa khớp |
| Chung (Desktop, Mobile) | Text | Line-height | 21px | 24px | Text.text_size → sm | Lần 1 | Chưa khớp |
| Mobile | Heading | Xuống dòng | LOVED BY REAL PEOPLE một dòng trong thiết kế | Hai dòng ở vùng 343px | Đối chiếu typography metric và width trước khi thêm br hoặc đổi font |  | Chưa khớp |
| Chung (Desktop, Mobile) | Video | Play / pause từng clip | Năm clip phải phát đúng nội dung | Đã thấy poster/frame đúng; chưa kiểm phát/dừng cả năm trong lượt visual này |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — video

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/founder_testimonials`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47064-15176
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7284
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Five original videos READY and bound. Desktop allfive readyState4, center autoplay observed. Mobile original video1 plays readyState4 after Play. Five cards/one plus preview; native Compact Coastal$35 below center instead of floating overlay. Inherited aria-label Translation missing: en.Play video remains.

Local evidence: `/tmp/novaire-qa-evidence/mobile-video.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.
