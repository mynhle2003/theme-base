# Homepage Kinetra — QA tổng quan

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

## Mục lục theo section

- [01. Announcement bar](homepage-announcement-bar.md)
- [02. Header](homepage-header.md)
- [03. Hero](homepage-hero.md)
- [04. Collection marquee](homepage-collection-marquee.md)
- [05. Image text card grid — Confidence in every move](homepage-image-text-card-grid.md)
- [06. Scrolling text](homepage-scrolling-text.md)
- [07. Hotspot — Crafted with care](homepage-hotspot.md)
- [08. Collection tabs — Community favorites](homepage-collection-tabs.md)
- [09. Scrolling cards — Empower. Inspire. Belong](homepage-scrolling-cards.md)
- [10. Hotspot gallery — This week’s highlights](homepage-hotspot-gallery.md)
- [11. Countdown with marquee — Flash sale](homepage-countdown-with-marquee.md)
- [12. Shop the look — Matching sets](homepage-shop-the-look.md)
- [13. Icon with text](homepage-icon-with-text.md)
- [14. Timeline](homepage-timeline.md)
- [15. Blog posts](homepage-blog-posts.md)
- [16. Instagram gallery](homepage-instagram-gallery.md)
- [17. Store location](homepage-store-location.md)
- [18. Footer](homepage-footer.md)

Các báo cáo dùng chung (điều kiện đo, Sheet, nguồn, hồi quy và validation) nằm ở đây. Bằng chứng trong `output/` vẫn là dữ liệu local, không nằm trong commit tài liệu.

## Nguồn đã gộp

- `docs/audits/hero-height-calibration-2026-10-22.md` → [homepage-hero](homepage-hero.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/audits/timeline-color-schemes-2026-10-22.md` → [homepage-timeline](homepage-timeline.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/check-perfect-homepage.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/collection-marquee-2026-10-23.md` → [homepage-collection-marquee](homepage-collection-marquee.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/community-empower-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/confidence-2026-10-23.md` → [homepage-image-text-card-grid](homepage-image-text-card-grid.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/confidence-scrolling-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/crafted-2026-10-23.md` → [homepage-hotspot](homepage-hotspot.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/crafted-final-recheck-2026-10-23.md` → [homepage-hotspot](homepage-hotspot.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/fix-qa1-2026-10-26.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/fix-qa2-2026-10-26.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/header-figma-2026-10-22.md` → [homepage-header](homepage-header.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/header-hero-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/header-hero-rerun-2026-10-22.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/hero-position-marquee-2026-10-22.md` → [homepage-hero](homepage-hero.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/highlights-flash-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/preset-fixes-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/recheck-latest-three-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/recheck-three-sections-2026-10-22.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/remaining-homepage-2026-10-23.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/search-overlay-2026-10-23.md` → [homepage-header](homepage-header.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/sheet-current-homepage.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/sheet-fix-round-style-2026-10-26.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/sheet-style-tracker.md` → [homepage-qa](homepage-qa.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.
- `docs/qa/spacer-rebuild-2026-10-22.md` → [homepage-hero](homepage-hero.md); báo cáo nhiều section được phân bổ vào các file trong mục lục.

## Lịch sử — header-hero-rerun-2026-10-22.md

### Bằng chứng

- Đo mới: `output/qa/header-hero-rerun-desktop.json`, `output/qa/header-hero-rerun-mobile.json`.
- Desktop viewport1935/content1920px, DPR1; Mobile viewport390/content375px, DPR1. Font đã loaded.
- Figma qua Chrome theo fallback quota đã ghi trong lượt trước: đọc lại Tagline (148×21px, Roboto Condensed500,14px/150%, tracking2px), Header Desktop72px/border0.5px và Hero Desktop800px; quan sát Hero Desktop/marquee. Thuộc tính đọc mới: `output/qa/header-hero-rerun-figma.json`. Các token chi tiết khác kế thừa bằng chứng Figma UI trước, không tuyên bố tất cả đã trích xuất mới.

### Kết quả Sheet

Header còn3 mục Chưa khớp. Hero không còn lỗi đã xác nhận; còn3 mục Chưa xác minh (Eyebrow width, marquee text width, tổng thể Mobile đúngviewport) và1 mục Figma làm tròn. Chưa kết luận Hero đạt hoàn toàn.

Dữ liệu toàn bảng A3:I16; dropdown6 lựa chọn giữ nguyên, nguồn/phạm vi cuối hàng17–20. Đã xuất readback: mọi giá trị đúng canonical, tab Virelle giữ nguyên giá trị/style. Screenshot: `output/qa/header-hero-rerun-sheet.png`.

### Nguồn

- [Sheet](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190)
- [Figma Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177)
- [Figma Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513)
- [Preview](http://127.0.0.1:9300/)

##### Kinh nghiệm bổ sung: chiều rộng text gần sát

Theo hướng dẫn người dùng: khi typography đã khớp và chiều rộng gần sát, có thể suy luận Figma làm tròn/khác font metrics. Eyebrow148px/149.11px (Chung) và marquee Active Essentials549px/547.34px (Desktop) chuyển từ Chưa xác minh sang **Figma làm tròn**; không cần custom bù. Đây là suy luận theo quy ước QA, không phải khẳng định149.11 làm tròn số học thành148, cũng không chứng minh browser render lỗi. Dữ liệu typography của lần QA gần nhất được kế thừa, không phải đo mới lượt này. Nếu sai số ảnh hưởng wrap/layout hoặc thiếu chắc chắn về font, tiếp tục kiểm. Kết luận này thay thế hai pending chiều rộng ở phần trước; Hero còn1 Chưa xác minh về viewport Mobile và3 Figma làm tròn.


## Lịch sử — recheck-three-sections-2026-10-22.md

### QA lại ba section — Homepage Kinetra

Ngày 22/10/2026. Chỉ kiểm Announcement bar, Header, Hero; không sửa theme. Báo cáo hiện hành: `homepage-qa.md`, dữ liệu dựng Sheet: `output/qa/sheet-style-v3-data.json`. Các kết quả cũ trong hồ sơ là lịch sử, được thay thế bởi lần kiểm này cho ba section.

### Điều kiện đối chiếu

Preview được mở mới tại localhost:9300. Desktop: viewport 1935px, client/content 1920px, DPR 1. Mobile: viewport 390px, client 375px, DPR 1. Kiểm soát bổ sung tại viewport 375px cho client 360px do scrollbar 15px. Không đánh đồng client với viewport khi theme dùng đơn vị vw.

Figma MCP báo hết quota view-seat. Dùng Chrome UI theo quy trình fallback: đọc mới Header Desktop 72px/border 0.5px, Menu Home Roboto 500/14px/150%/−0.2px, Hero Desktop 800px, Hero Mobile Hug 668px; quan sát bố cục. Các token con chi tiết đối chiếu thêm bằng chứng UI đã lưu ở `output/qa/header-figma-properties.json` và `output/qa/hero-figma-evidence.json`, không coi toàn bộ token lịch sử là đã đọc mới. Bằng chứng đọc mới: `output/qa/recheck-three-figma-ui.json`.

### Đồng bộ Sheet

15 dòng dữ liệu, A3:I17; nguồn/phạm vi ở cuối hàng18–21. Giữ Tổng quan 3 dòng; mỗi section một dòng đã khớp, chỉ phần còn lệch/tồn tại được tách riêng. 5 mục Chưa khớp, 3 mục Chưa xác minh, 1 mục Figma làm tròn và 6 dòng Khớp (gồm Tổng quan). Font Arial10, header11; Figma xanh/Hiện tại đỏ chỉ khi mismatch đã xác nhận. Trạng thái dropdown6 lựa chọn ở I3:I17. Export readback xác nhận toàn bộ giá trị đúng và tab Virelle không đổi.

### Nguồn

- [Sheet Homepage](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190)
- [Figma Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177)
- [Figma Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513)
- [Preview](http://127.0.0.1:9300/)

##### Cập nhật kinh nghiệm: Figma làm tròn

Chiều cao marquee: font68px × line-height120% =81.6px, DOM81.59px; Figma hiển thị82px. Kết luận **Figma làm tròn**, thay thế phần Chưa xác minh chiều cao trước đó. Không cần sửa, không quy browser render. Chiều rộng text vẫn Chưa xác minh riêng. Đã bổ sung trạng thái vào dropdown Sheet và mẫu skill.


## Lịch sử — community-empower-2026-10-23.md

### QA Community favorites và Empower. Inspire. Belong — 23/10/2026

Chỉ Homepage Kinetra. Kiểm giao diện và đọc schema/config; không sửa theme. Bảng đối chiếu bên dưới đồng bộ Sheet A26:I39; nguồn giữ ở cuối. Hai section chưa được kết luận đạt hoàn toàn.

### Điều kiện và giới hạn phép đo

Desktop preview innerWidth1920/clientWidth1905. Mobile đã đo innerWidth375/clientWidth360; kiểm bổ sung innerWidth390/clientWidth375 để loại trừ scrollbar15px khi so khung nội dung343px. **Bản bù390px không tương đương hoàn toàn với viewport375px**: font Heading fluid chuyển30px thành30.3871px. Vì vậy không kết luận lỗi wrap của Empower, không coi đây là Figma làm tròn hay browser render. Sheet giữ đúng điểm này là Chưa xác minh, không đưa hệ quả chiều cao section thành lỗi Layout.

Chờ carousel khởi tạo trước khi đọc geometry: kết quả ban đầu có slide width328/gap0 là trạng thái chưa khởi tạo, không dùng làm lỗi. Bản ổn định ở client375: slide284.5px, cạnh slide kế cách8px; 1 card đầy đủ + preview item sau tương ứng Figma Mobile. Theo quy ước không bắt lỗi tỷ lệ phần ló/card/section-height trong trường hợp này.

Các nhận xét hình ảnh ở đây không xác nhận mọi trạng thái hover/variant. Riêng thanh sizeXS–XL của Mellow còn cần đối chiếu đúng trạng thái với nút Choose options; ghi pending riêng thay vì kết luận thiếu từ hai state khác nhau.

### Bằng chứng và nguồn

- Số đo Desktop/Mobile và AX Figma: `output/qa/community-empower-followup-evidence.json`.
- Bằng chứng nguồn tổng thể lượt đầu: `output/qa/community-empower-evidence.json`; trường mobile của file lượt đầu thực tế còn1920px, không sử dụng làm bằng chứng Mobile.
- Đọc lại Sheet: `output/qa/community-empower-sheet-readback.tsv` (bản cuối đã xác nhận Heading Mobile là Chưa xác minh). Ảnh: `output/qa/community-empower-sheet-final.png`. Dropdown I37 đã mở và xác nhận đủ sáu lựa chọn.
- [Sheet Kinetra — Homepage](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190).
- [Figma Community Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48205-18039), [Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-15658).
- [Figma Empower Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-16766), [Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-15570).
- [Preview](http://127.0.0.1:9300/).


## Lịch sử — confidence-scrolling-2026-10-23.md

### Ghi chú mở đầu

> Kết quả hiện hành: [QA lại STT5–7](homepage-qa.md). Crop shorts và Header gap Crafted đã khớp; popup còn4 lỗi Desktop và1 mục chưa xác minh.

### QA Confidence và Scrolling text — 23/10/2026

Kết quả hiện hành thay thế các mục cũ của STT5. Chỉ Homepage, không sửa theme.


## Lịch sử — header-hero-2026-10-23.md

### Bằng chứng

- `output/qa/header-hero-2026-10-23-desktop.json`: viewport1935/client1920, DPR1.
- `output/qa/header-hero-2026-10-23-mobile.json`: viewport390/client375, DPR1.
- `output/qa/header-hero-2026-10-23-figma.json`: đọc Chrome UI mới: Header Desktop72px, Mobile64px, border0.5px #CCC, Hero Mobile668px. Các token chi tiết khác kế thừa bằng chứng Figma đã lưu và hướng dẫn chấp nhận của người dùng; không mô tả là đã trích xuất mới toàn bộ thiết kế. Giữ cách đọc Chrome fallback đã được cho phép trong phiên.

### Sheet

Chỉnh đúng ô G11/H11 (tracking2px và hướng xử lý) và dòng phạm vi cuối A17 bằng Google Sheets API; giữ font, merge, validation và các tab khác. Dropdown6 trạng thái hiện có được đọc trước ghi. Readback xác nhận giá trị mới và các kết luận Hero giữ nguyên. Bảng vẫnA3:I16, nguồn/phạm vi17–20. Screenshot: `output/qa/header-hero-2026-10-23-sheet.png`.

### Nguồn

- [Sheet](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190)
- [Figma Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177)
- [Figma Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513)
- [Preview](http://127.0.0.1:9300/)

##### Đối chiếu tab inspect người dùng

Đọc trực tiếp tab localhost đang mở: innerWidth375px/clientWidth360px/visualViewport360px/DPR1; Hero360×668px, ảnh360×375px, content293px, heading40px/48px cao96px. Số668px người dùng inspect là đúng tại điều kiện này. Phép đo QA trước inner390/client375 làm fluid heading40.5419/48.6503px cao97.3125px nên Hero669.3125px. Chênh1.3125px đến từ khác viewport và typography fluid, không phải bằng chứng theme sai chiều cao. Không dùng375 ở innerWidth và375 ở clientWidth thay thế nhau. Bằng chứng: output/qa/mobile-user-inspect-2026-10-23.json.

##### Kinh nghiệm: làm tròn phần tử con và Layout cha

Trước khi kết luận kích thước box cha, tính từ Text/Button/ảnh cùng gap/padding/border. Ảnh đúng trục và tỷ lệ có thể cho trục còn lại số lẻ, Figma hiển thị nguyên; Text đúng thuộc tính chiều cao và số dòng có thể cho tổng lẻ, Figma hiển thị nguyên. Ghi Figma làm tròn tại phần tử con, không liệt kê thêm chênh lệch kế thừa của box cha. Chỉ báo phần dư còn nguyên nhân độc lập. Không sửa padding/gap đã đúng.

Dòng Hero Mobile cũ “Kích thước tại viewport Mobile chuẩn” được rút khỏi Sheet vì669.31px/668px trước đó là hai điều kiện viewport khác nhau; không phải lỗi Layout đã chứng minh, cũng không gán nguyên nhân Figma làm tròn khi thiếu bằng chứng. Tab inspect ở inner375/client360 đo Hero668px, Heading40/48px cao96px; khác phép đo inner390/client375. Chi tiết này giữ ở hồ sơ phép đo, không tạo lỗi theme hay tuyên bố toàn khung375×668 đã xác minh. Hero hiện chỉ còn3 dòng Figma làm tròn ở phần tử; không còn dòng Layout/chưa xác minh viewport trên bảng chính. Bảng dữ liệu A3:I15, nguồn16–19.


## Lịch sử — highlights-flash-2026-10-23.md

### QA Highlights và Flash sale — Homepage Kinetra — 23/10/2026

Chỉ đọc Figma/preview/schema. Không sửa code, preset, sản phẩm hoặc Save Theme Editor. Kết quả hiện hành đồng bộ Sheet A40:I57; footer A58:I61. STT0–9 giữ nguyên. Các điểm khớp bên dưới chỉ xác nhận phạm vi thuộc tính đã đối chiếu, không coi cả hai section đạt hoàn toàn.

### Điều kiện kiểm

Preview Desktop inner1920/client1905; Mobile inner375/client360, DPR1. Giữ riêng scrollbar15px; không báo chênh width/height do điều kiện này là lỗi theme. Chờ carousel/font/animation ổn định; không lấy geometry của animation đang vào làm gap. Công cụ Figma MCP có lại trong phiên nhưng hai lần trả yêu cầu xác thực lặp; tiếp tục CUA Chrome đã có quyền xem. Các tab cũ bị mất kết nối điều khiển được thử trước khi tạo tab thay thế. Không copy/tạo layer trong Figma trong lượt này.

### Bằng chứng và nguồn

- Preview: `output/qa/highlights-flash-desktop-evidence.json`, `highlights-popup-desktop-evidence.json`, `highlights-flash-mobile-evidence.json`.
- AX Figma Mobile: `highlights-mobile-source.txt`, `highlights-mobile-header.txt`, `flash-mobile-source.txt`, `flash-mobile-button.txt`, `flash-mobile-layout-label.txt`, `flash-mobile-marquee-source.txt`, trong `output/qa/`.
- Sheet đọc lại: `output/qa/highlights-flash-sheet-readback.tsv`; ảnh xác nhận: `output/qa/highlights-flash-sheet-final.png`.
- [Sheet Kinetra — Homepage](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190).
- [Figma Desktop Homepage](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177).
- [Figma Highlights Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14694), [Flash sale Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14725).
- [Preview](http://127.0.0.1:9300/).


## Lịch sử — preset-fixes-2026-10-23.md

### Kinetra — xử lý lỗi bằng preset, 23/10/2026

> **Trạng thái hiện hành sau xác nhận cuối:** Người dùng đã cho phép CSS riêng cho popup. Đã sửa Text bằng class kế thừa `body-text body-md` (Body hiện hành16/24px), max width384px có giới hạn viewport, padding24px, gap6px. Không thêm option schema; không có setting `content_text_size` trong preset/template. `content_text_size` chỉ là tham số render nội bộ của snippet, mặc định sm cho caller khác. Header gap8/8 vẫn ở cả preset và template. Các lần hoàn tác phía dưới là lịch sử. Còn5 lỗi ở section khác và1 mục nội dung popup STAY-PUT SUPPORT chưa xác minh.

Phạm vi: các mục chưa khớp/chưa xác minh trong tab **Kinetra - Homepage**, gid `954515190`, đọc trực tiếp A1:I100 ngày 23/10/2026. Tên section trong yêu cầu để trống nên đối chiếu toàn bộ phần đã QA đến STT7. Nguồn: [Sheet QA](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190), `homepage-qa.md`, `homepage-hotspot.md`, `homepage-qa.md`, `audits/image-text-card-grid-preset-2026-10-21.md`.

### Kiểm tra sau sửa

- JSON instance và schema parse thành công; range/step của Header cho phép8px.
- So sánh với snapshot trước lượt sửa: chỉ hai giá trị gap trong instance và hai giá trị gap trong schema preset thay đổi. Liquid ngoài schema giữ nguyên.
- `shopify theme check --path . --output json`:0 errors,9 warnings ở các file khác; không có offense tại Hotspot hoặc template.
- `git diff --check`:đạt.
- Validator kèm Shopify AI Toolkit không chạy được do thiếu package `@shopify/theme-check-common`; đã dùng Shopify CLI Theme Check ở trên. Search của Toolkit lỗi kết nối.
- Chưa kiểm giao diện hoặc Theme Editor sau sửa vì localhost9300 không kết nối được.


## Lịch sử — recheck-latest-three-2026-10-23.md

### QA lại STT5–7 —23/10/2026

Đo mới preview tại Desktop inner1920/client1905 và Mobile inner375/client360. Dùng source Figma đã inspect; đọc lại popup Content336×103/gap6 và Product384×151/padding24. Phạm viHomepage, chỉ QA không sửa theme.


## Lịch sử — remaining-homepage-2026-10-23.md

### QA Homepage Kinetra — STT12–18

Đo ngày23/10/2026; đồng bộ Google Sheet ngày26/10/2026. Chỉ Homepage. Không sửa theme.

Desktop innerWidth1920/clientWidth1905; Mobile375/360. Không suy lỗi layout từ scrollbar. Bằng chứng DOM và ảnh được lưu tại output/qa/remaining-*.

### Cơ sở và giới hạn

Icon with text: dot8px được căn trong vùng nhấn24px. Padding40px +8px vùng trống dưới dot =48px nhìn thấy Mobile; Desktop88+8=96px. Không báo lỗi padding theo CSS riêng lẻ. Heading18×140%=25.2px, nguồn hiển thị25px: Figma làm tròn.

Store location: Content source Desktop48249:14374 gap12px, Mobile48249:15955 gap8px; parent giữ gap Button16/12px. Theme đang dùng gap đều16/12px nên cần Group bên trong. Row Desktop48190:17030 gap56px đã khớp.

Matching sets: Desktop48218:12853 Title Roboto Condensed500/18px/LH150%, căn giữa; giá48218:12854 Roboto400/14px/#181818. Mobile đã inspect giá cùng #181818. Main row source gap token12=48px, theme50px.

Blog tag Desktop48190:17632 Roboto500/12px/LH150%/tracking2px; DOM actual Roboto Condensed500/14px/21px/0.1px, cả label và anchor. Date nguồn08 Aug2025, actualAug08,2025; schema chỉ có long/medium/numeric/iso.

Footer: .footer__container có width trừ margin50/16px, vẫn giữ padding container50/16px làm inset nội dung100/32px. Preset đã full_width. Company nguồn Desktop lặp About us nhưng Mobile Contact nên giữ Chưa xác minh.

Timeline chỉ đối chiếu nội dung mốc2010 và thử chuyển2015 trên Mobile; frame không cung cấp nội dung mẫu riêng các mốc còn lại. Summary chỉ xác nhận phạm vi đã ghi; không kết luận toàn section hay toàn Homepage đạt pixel-perfect.


## Lịch sử — check-perfect-homepage.md

### Ghi chú mở đầu

> Crafted mới nhất: [QA sau sửa popup](homepage-hotspot.md). Rút4 lỗi cũ; còn border1px làm hẹp nội dung2px. Popup thứ2 không có mẫu nội dung trongframe: Không áp dụng.

> Kết quả hiện hành: [QA lại STT5–7](homepage-qa.md). Crop shorts và Header gap Crafted đã khớp; popup còn4 lỗi Desktop và1 mục chưa xác minh.

### Kết quả hiện hành STT5–6

[QA lại Confidence và thêm Scrolling text — 23/10/2026](homepage-qa.md). [Bảng đồng bộ Sheet](homepage-qa.md). Các mục STT5 trước đây được thay thế theo bản này.

### Check perfect — Homepage Kinetra

> Kết quả mới nhất: [QA Header/Hero 23/10/2026](homepage-qa.md). Các kết luận trước đó là lịch sử khi có khác biệt.

> Lần kiểm Header/Hero mới nhất: [Header–Hero kiểm lại](homepage-qa.md). Marquee top48px đã khớp, thay thế lỗi top168.14px trong lịch sử.

> QA lại ba section ngày 22/10/2026: [kết quả hiện hành và chi tiết phép đo](homepage-qa.md), [bảng đồng bộ Sheet](homepage-qa.md). Phần dưới giữ lịch sử; lỗi đã sửa của Announcement bar/Header/Hero được thay thế theo bản QA lại.

Ngày cập nhật: 22/10/2026. Phạm vi: homepage. Điểm dừng hiện tại: Header STT2 đã QA Desktop/Mobile; Hero đổi STT3, giữ bằng chứng kiểm trước. Dừng chờ hướng dẫn.

### Style Sheet hiện hành — đã áp dụng

Đã áp dụng theo yêu cầu người dùng ngày 22/10/2026; đây là bản đang huấn luyện, tiếp tục điều chỉnh khi có hướng dẫn. Bảng 9 cột, header hai tầng Nội dung → Figma / Hiện tại, tiếp đến Hướng xử lý và Trạng thái dropdown. Font Arial 10pt đồng đều cho Tổng quan và section; header 11pt đậm. Cột rộng 56 / 141 / 151 / 191 / 221 / 300 / 300 / 301 / 140px. Wrap, căn đầu ô, tự giãn hàng.

Tổng quan giữ ba dòng bình thường ở hàng 3–5. Announcement bar hàng6–8, Header9–21, Hero22–33; nguồn34–37. Trong mỗi section/breakpoint, thành phần đạt hoàn toàn như Heading vào dòng **Đã kiểm và khớp**; thành phần có lỗi như Button chỉ liệt kê thuộc tính lệch/chưa xác minh. Mỗi thuộc tính lệch/chưa xác minh một hàng, không list lỗi trong ô. Figma xanh và Hiện tại đỏ chỉ ở sai lệch đã xác minh; phần khớp không highlight so sánh. Dropdown I3:I33 đủ năm lựa chọn.

Scroll/marquee nhóm các text/icon/ảnh cùng style thành một mục đại diện; vẫn kiểm các mẫu cần thiết. Nếu Figma đồng bộ nhưng theme không đồng bộ giữa các item, ghi **Chưa đồng bộ style**, trạng thái **Chưa khớp** và chỉ rõ thuộc tính/vị trí lệch. Không áp kết luận này nếu chưa có bằng chứng. Announcement bar gộp lỗi font Shipping/Returns thành một dòng mỗi thiết bị vì cùng style/cùng lỗi; Hero giữ một nhóm Heading (Marquee), một nhóm Icon (Marquee). Các mục kích thước chưa xác minh hiện có chỉ là bằng chứng mẫu đã lưu, không suy thành lỗi không đồng bộ giữa các item.

Bản đối chiếu chính xác các hàng hiện hành: [sheet-current-homepage.md](homepage-qa.md). Các bảng chi tiết bên dưới giữ bằng chứng đầy đủ; số hàng/số lượng 18/36 hoặc mô tả 8 cột trong các mốc trước là **lịch sử trước khi đổi style**, không phải vị trí hiện hành. Kết quả QA không đổi; lượt này đổi cách trình bày, không chạy lại preview/Figma.

Đã đọc lại toàn bộ giá trị xuất, xác minh merge và màu so sánh, dropdown mở được, không còn nội dung báo cáo cũ sau hàng 37. Tab Virelle giữ nguyên giá trị và style so với bản sao trước thao tác. Bằng chứng: `output/qa/sheet-style-v3-top.png`, `output/qa/sheet-style-v3-hero.png`, payload `output/qa/sheet-style-v3-data.json`. Bản sao trước thao tác giữ tại `output/qa/sheet-before-style-v2.xlsx`.

### STT 0 — Tổng quan

Thiết bị: Desktop, Mobile. Các dòng dưới đây tương ứng hàng 3–5 trong sheet hiện hành. Hướng xử lý để trống vì cả ba tiêu chí hiện được đánh dấu Khớp.

| Thành phần | Nội dung đối chiếu trên sheet | Trạng thái | Hướng xử lý |
| --- | --- | --- | --- |
| Số lượng section | Đủ 18 vùng: 15 section nội dung + Announcement bar, Header, Footer. | Khớp | |
| Thứ tự section | Thứ tự khớp Figma Desktop/Mobile. | Khớp | |
| Width / Padding | Width / Padding khớp theo quy ước: lấy width theo section lớn nhất trong Figma. | Khớp | |

##### Số lượng và thứ tự

Đối chiếu cây layer của cả hai frame Figma với thứ tự section trong template và DOM preview. Không phát hiện vùng thiếu/thừa hoặc đảo thứ tự trong bước tổng quan.

Thứ tự trên trang dùng để kiểm danh sách, không thay STT nhóm QA: toàn bộ phần này vẫn thuộc STT 0.

##### Width / Padding: cơ sở kết luận

Người dùng hướng dẫn tạm lấy width của section lớn nhất trong Figma làm chuẩn và xác nhận cả tiêu chí Width / Padding của Tổng quan là **Khớp**. Đây là kết luận đã thống nhất cho bước tổng quan homepage Desktop/Mobile.

Số đo đã quan sát ở Confidence in every move desktop:

| Thuộc tính | Figma | Theme preview |
| --- | --- | --- |
| Container nội dung | 1600px, đọc từ kích thước vùng được chọn | 1805px |
| Khung đo desktop | Frame 1920px | Viewport 1920px; vùng nội dung 1905px sau scrollbar |
| Lề container theme | — | 50px mỗi bên: 1905 − 50 − 50 = 1805px |
| Padding trên/dưới section | Token 24/24 | 96px/96px |

Chênh lệch container 205px đã được người dùng chấp nhận theo quy ước, không còn là lỗi cần sửa. Giữ số đo để truy nguyên, không đưa lại vào danh sách Chưa khớp. Trạng thái Khớp của mục tổng quan không được diễn giải thành đã đo đầy đủ mọi thuộc tính của từng section trên hai thiết bị; các bước chi tiết sẽ bổ sung sau hướng dẫn tiếp theo.

### Quy tắc đồng bộ sheet và tài liệu

- Sheet là bản ngắn: kết luận và số liệu cần thiết. Tài liệu này giữ số đo, nguồn, cơ sở chấp nhận, bằng chứng và phân tích chi tiết tương ứng.
- Mỗi mục có cùng STT, Section, Thiết bị, Thành phần, Tiêu chí và Trạng thái ở hai nơi. Với section tiếp theo, dùng cùng instance/thuộc tính để nhận diện; số hàng Sheet chỉ là vị trí hiện tại.
- Khi chưa khớp, Nội dung đối chiếu có nhãn `Chưa khớp:` và mỗi lỗi một dòng. Cột Hướng xử lý có cùng số mục, cùng thứ tự và nhãn thuộc tính, mỗi mục một dòng. Giữ chi tiết nguyên nhân và bằng chứng tại mục tương ứng trong tài liệu.
- Không tạo lỗi hoặc hướng sửa cho mục đã được chấp nhận. Khi kết luận hoặc hướng xử lý thay đổi, cập nhật cả Sheet và mục chi tiết tương ứng ngay trong cùng bước.
- Trạng thái trên Sheet dùng dropdown màu. Mục Khớp để trống Hướng xử lý. Ghi báo cáo không đồng nghĩa đã thực hiện sửa theme.
- Trong phiên huấn luyện, ghi kết quả bước hiện tại vào cả hai nơi rồi dừng trao đổi trước khi chuyển bước/section.

### Bằng chứng báo cáo

![Sheet sau khi bổ sung hướng xử lý min-height](../../output/qa/announcement-minheight-sheet.png)

### Quy tắc Layout bổ sung

Tạo Thành phần Layout riêng cho Gap/Padding, chỉ liệt kê chỗ chưa khớp. Kiểm từ trong ra ngoài: gap con → gap cụm → padding group/section; phần khớp nằm trong dòng xác nhận. Trên Sheet hiện hành: Hero Desktop Padding (content) hàng16; Hero Mobile Gap (Eyebrow → Heading) hàng26 và Gap (Header → Button) hàng27. Padding Mobile đã khớp không tạo hàng lỗi. Đây là sắp xếp bằng chứng hiện có, không ghi là lần đo mới.

### Cập nhật quy ước border — 22/10/2026

Đã bỏ lỗi Viền dưới Announcement bar Desktop/Mobile và hướng xử lý bật separator theo xác nhận của người dùng. Điều kiện: trùng màu nền, không làm tăng kích thước hoặc đổi layout, tổng thể không nhìn thấy. Đây là chấp nhận theo quy ước, không phải lần đo Figma/preview mới. Không ảnh hưởng kết luận lỗi font family và min-height.

Vị trí hiện hành sau bỏ hai hàng: Tổng quan3–5, Announcement bar6–11 (Desktop6–8, Mobile9–11), Hero12–27, nguồn28–31; dropdown I3:I33. Layout Hero Desktop Padding(content) hàng14; Mobile Gap(Eyebrow→Heading)24, Gap(Header→Button)25. Các số hàng trước cập nhật này trong mốc lịch sử không còn là vị trí hiện hành. Ảnh xác nhận: `output/qa/announcement-border-accepted.png`.

### Nhóm Chung và điểm đã khớp — cập nhật hiện hành 22/10/2026

Mọi mục đã xác minh sửa một chỗ giải quyết cả Desktop/Mobile ghi một lần trong Chung, không giới hạn font family. Đã gom font family và min-height Announcement bar, line-height Button Hero; cùng setting/selector ở cả hai, giữ các min-height Button riêng56/44px. Không gom mục chưa rõ nguyên nhân hoặc cần chỉnh riêng breakpoint.

Điểm đã khớp cũng dùng một dòng chung mỗi section. Mục đạt cả hai ghi một lần; mục riêng thêm hậu tố (Mobile)/(Desktop) ngay sau tên. Tổng quan STT0 giữ nguyên. Bằng chứng/checklist hai thiết bị vẫn giữ chi tiết, không suy cả thành phần đạt khi còn thuộc tính lỗi. Đây là cập nhật cách trình bày, không phải lần đo preview/Figma mới.

Vị trí hiện hành thay các mốc cũ: Tổng quan3–5; Announcement bar6–8 (xác nhận6, font7, chiều cao8), toàn bộ Chung; Hero9–22 (Chung9–10, Desktop11–17, Mobile18–22); nguồn23–26. Dropdown I3:I33 đủ5 lựa chọn. Layout Hero Desktop Padding(content)12; Mobile Gap(Eyebrow→Heading)20, Gap(Header→Button)21. Đã đối chiếu toàn bộ giá trị với payload, giữ nguyên giá trị/style tab Virelle, không còn dữ liệu cũ sau hàng26. Ảnh xác nhận: output/qa/sheet-common-desktop-mobile.png. Bảng hiện hành: docs/qa/sheet-current-homepage.md.

### STT8–9 — QA và đồng bộ Sheet (23/10/2026)

[Chi tiết và bảng kết quả hiện hành](homepage-qa.md). STT8 Collection tabs — Community favorites: khác thứ tự/badge/compare-at price của sản phẩm mẫu, gap Eyebrow→Tabs Desktop16/48px và Mobile12/32px; thanh size Mellow còn Chưa xác minh cùng trạng thái. STT9 Scrolling cards — Empower. Inspire. Belong: gap Eyebrow→Heading Desktop8/16px, Mobile8/4px; Heading→Text Mobile12/16px. Không chốt lỗi wrap Heading Mobile khi viewport375 có scrollbar và bản bù390 làm đổi font fluid; giữ Chưa xác minh. Không lặp lỗi chiều cao phụ thuộc.

Sheet A26:I39 là kết quả mới; footer A40:I43. Các nhóm STT0–7 giữ nguyên. Dropdown sáu trạng thái, đối chiếu Figma xanh/Hiện tại đỏ chỉ cho điểm lệch đã xác minh. Bảng chuẩn hiện hành: [sheet-current-homepage.md](homepage-qa.md). Chưa sửa theme; chưa kết luận hai section đạt hoàn toàn.

### STT10–11 — QA và đồng bộ Sheet (23/10/2026)

[Chi tiết](homepage-qa.md). STT10 Hotspot gallery — This week’s highlights: Text khác item/items; Header max-width Desktop và gap trong Header chưa khớp; popup Desktop khác title, cỡ/màu giá, nhãn/weight/màu/icon Action. Không suy popup Mobile từ trạng thái Dot đóng. Ưu tiên Group/gap/max-width/content presets; custom chỉ khi schema không có control tương ứng.

STT11 Countdown with marquee — Flash sale: Label tracking0.1px/normal dùng chung; Number Desktop82/81.6 là Figma làm tròn. Marquee Mobile cần khoảng nhìn thấy32px thay12px để bù padding wrapper; separator tính cả stroke12px so với10px. Không báo riêng padding rail khi inset hiển thị đã tương đương.

Sheet A40:I57, footer A58:I61; STT0–9 giữ nguyên. Đã ghi và đọc lại nội dung; trạng thái dùng dropdown hiện hành. Chưa sửa theme; các xác nhận khớp có phạm vi theo từng thuộc tính, không kết luận toàn bộ section đạt pixel-perfect.

### Fix lần 1 — 26/10/2026

Đã QA hồi quy Homepage Desktop/Mobile tại9301 và đồng bộ Sheet:13 dòng Đã fix (QA 1), giữ lịch sử lỗi. Không phát hiện lỗi mới đã xác minh trong phạm vi đã kiểm; lỗi cũ chưa xử lý giữ nguyên. [Mapping preset, số đo mới và giới hạn](homepage-qa.md). Chỉ Homepage có nguồn; các trang khác chưa kiểm.

### QA STT12–18 ngày23/10/2026

[Chi tiết](homepage-qa.md). Đã kiểm đến Footer; Company chưa chốt do nguồn khác nhau giữa thiết bị.

Đồng bộ26/10/2026: STT12–18 tại A58:I81; nguồn A82:I85. Kết quả đo23/10, không coi là lượt đo mới26/10. Dropdown đủ6 trạng thái; đã đọc lại sau ghi.

### Style cập nhật26/10/2026

Toàn bảng căn giữa chiều dọc; header center/middle. Ô Trạng thái không tô nền, chỉ chip dropdown có màu. Đã áp dụng trực tiếp Sheet, giữ nội dung và merge.

Style26/10: ô thông thường không nền; bỏ nền nhóm và nguồn, giữ header/chip và highlight đối chiếu lỗi. Áp dụng trực tiếp Sheet.

### Fix lần2 — 26/10/2026

Đã xử lý14tiêu chí được đánh dấu Fix lần2 trong Hướng xử lý, QA Desktop/Mobile và cập nhật Sheet2/Khớp.13dòng lần1 migrate1/Khớp. Lần fix dùng dropdown1–5, Trạng thái bổ sung Bỏ qua; dòng Khớp bỏ highlight Figma/Hiện tại. [Chi tiết implementation, số đo và giới hạn](homepage-qa.md). Còn18lỗi cũ chưa khớp và3mục chưa xác minh ngoài phạm vi được giao; chưa có lỗi mới đã xác minh. Chỉ Homepage có nguồn QA.

### Nguồn đối chiếu

- [Sheet QA — Kinetra - Homepage](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190).
- [Figma desktop — Homepage 2, 1920px](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177).
- [Figma mobile — Mobile, 375px](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513).
- [Preview hiện tại sau Fix lần 1](http://127.0.0.1:9301/). Danh sách section nội dung: `templates/index.json`; announcement bar/header/footer được render từ section group.


## Lịch sử — fix-qa1-2026-10-26.md

### Fix lần 1 — Homepage Kinetra — 26/10/2026

Đã sửa bằng preset/config hiện có và QA hồi quy Homepage trên Desktop1920px, Mobile375px tại preview9301. Đủ18 vùng giữ đúng thứ tự. Chỉ có nguồn Homepage: các page/template khác chưa xác minh, không kết luận QA toàn theme đạt.

### Các dòng đã xác minh đạt

Giữ nguyên Figma/Hiện tại và hướng xử lý QA 1 trên Sheet để truy vết; chỉ đổi dropdown. 12 tiêu chí được xử lý trong lượt preset này; border popup Crafted là thay đổi đã có trước lượt, được xác minh lại.

### Mapping preset

Các thay đổi nằm trong templates/index.json và preset của6 section: scrolling-cards, hotspot-gallery, countdown-with-marquee, shop-the-look-section, custom-section, blog-posts. Schema ngoài presets và phần Liquid/CSS/JS của6 file giữ nguyên so với snapshot trước lượt. Không sửa các implementation đang có thay đổi của người dùng.

### QA hồi quy và giới hạn

- Đã rà18 vùng Desktop/Mobile: cấu trúc/thứ tự, typography, gap/padding, media, vùng marquee nhìn thấy; không phát hiện lỗi mới đã xác minh trong phạm vi đã kiểm. Không thêm dòng QA 2 nếu chưa có bằng chứng lỗi mới.
- Đã thử popup Crafted, tab Community Best sellers/New arrivals trên Mobile, Timeline2010/2015 trên Mobile. Nội dung Figma chỉ có mẫu2010; không coi nội dung2015 là đã khớp.
- Chiều rộng nội dung đo thực tế Desktop1905/Mobile360 do scrollbar15px; không nhầm đây là viewport mới hay tự thêm lỗi do scrollbar. Sai khác đang chờ xác minh viewport/constraint vẫn giữ trạng thái cũ.
- Announcement/Menu/Blog tag: chọn Body đồng thời làm weight500→400 và thay thuộc tính khác; chưa có control font độc lập phù hợp. Giữ lỗi cũ, không làm sai phần đã khớp.
- Header logo89px ngoài bước4px; tracking Localization không có preset riêng. Highlights max-width384 ngoài range min320/step10; không ghi giá trị schema không hợp lệ.
- Community: thứ tự/badge/compare-at phụ thuộc catalog; không thay dữ liệu store trong lần fix preset. Gap Eyebrow–Tabs đang dùng chung gap tới grid đúng, chưa có control riêng.
- Matching sets: global product_card_alignment=center sẽ làm sai Community đang căn trái theo Figma. Không có override riêng; giữ pending alignment. NEW badge/size mặc định/price color không được xử lý bằng cách thay catalog hoặc CSS.
- Highlights popup: title/data, price typography/color và action chưa có preset độc lập phù hợp. Không đổi nhãn Add to cart cho action hiện thực mở quick view.
- Timeline inactive dot, Blog tracking/date format, Footer X/policy action/double inset cần bước custom hoặc dữ liệu/đích hành động được chốt. Company khác nguồn giữa Desktop/Mobile vẫn Chưa xác minh.

### Validation và đồng bộ

- Theme Check: 0 errors, 77 warnings trong working tree hiện tại. Không tuyên bố mọi warning là có sẵn khi chưa so sánh baseline.
- JSON/schema preset đã kiểm hợp lệ; chỉ dùng block hiện có, giá trị range hợp lệ.
- Sheet A1:I85 đã đọc lại: chỉ13 ô trạng thái, phạm vi A82 và preview C85 thay đổi so với snapshot trước sửa. Không đổi thứ tự, không xóa dòng lịch sử.
- Dropdown đã kiểm trực tiếp đủ8 lựa chọn, gồm Đã fix (QA 1), Chưa khớp (QA 2). Giữ normal cells không nền; status chỉ màu chip; highlight lịch sử Figma xanh/Hiện tại đỏ.

### Bằng chứng và nguồn

- [Snapshot Sheet sau ghi](../../output/qa/fix-qa1-2026-10-26/sheet-after.tsv)
- [Ảnh Sheet đã xác minh](../../output/qa/fix-qa1-2026-10-26/sheet-verified.png)
- [Số đo Desktop](../../output/qa/fix-qa1-2026-10-26/after-desktop.json) · [Số đo Mobile](../../output/qa/fix-qa1-2026-10-26/after-mobile.json)
- [Thư mục ảnh từng section](../../output/qa/fix-qa1-2026-10-26)
- [Sheet Homepage](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190)
- [Figma Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177) · [Figma Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513)
- [Preview](http://127.0.0.1:9301/)


## Lịch sử — fix-qa2-2026-10-26.md

### Fix lần2 — Homepage Kinetra — 26/10/2026

Đọc mới Sheet và chỉ xử lý14 dòng người dùng ghi “Fix lần 2” trong Hướng xử lý. Đã thực hiện custom được ghi rõ ở những dòng này; không tự mở rộng sang các lỗi khác. Snapshot trước sửa và bản copy các file trước sửa lưu tại output/qa/fix-qa2-2026-10-26/.

### Đồng bộ Sheet / skill

- Thêm I: Lần fix, J: Trạng thái; chỉ insert một cột, giữ nguyên thứ tự79dòng và ghi chú Hướng xử lý. Nguồn vẫn hàng82–85.
- Lần fix dropdown1–5, một lựa chọn, tối đa5vòng; để trống khi chưa từng fix.13dòng vòng1 migrate thành1/Khớp,14dòng vòng2 là2/Khớp.
- Trạng thái thêm Bỏ qua; chưa gán cho dòng nào vì người dùng chưa chỉ định lỗi cần bỏ qua. Các lựa chọn cũ giữ để không làm mất native chip/màu.
-48dòng Khớp không còn nền Figma/Hiện tại; giá trị đối chiếu gốc giữ lại. Lỗi chưa khớp đã xác minh còn highlight xanh/đỏ; normal/status cells không nền, header center/middle.
-Đã cập nhật fix-qa-preset, QA report reference, sheet-style.json và style tracker. Đã đọc lại từ API: đủ14dòng vòng2/Khớp,13dòng vòng1/Khớp; đúng dropdown1–5 và Bỏ qua; không còn fill trên F/G của48dòng Khớp. Không thay đổi A:H của79dòng.

### QA hồi quy và giới hạn

Rà lại15section nội dung + Announcement/Header/Footer trên Desktop1920 và Mobile375. Lưu DOM/computed style snapshot toàn trang và số đo các tiêu chí sửa. So với snapshot lần1:347node Desktop và371node Mobile có cùng key đối chiếu; khác biệt node trùng/ẩn trong header, video và direction inheritance không được suy thành lỗi regression. Kiểm các vùng thay đổi, popup Highlights, Timeline đổi2010/2015; không phát hiện lỗi mới đã xác minh trong các thuộc tính đã kiểm. Các trang ngoài Homepage không có đủ nguồn và chưa QA. Không suy kết luận toàn theme đạt.

Action mới đã kiểm cấu trúc form/variant/quantity, nhãn/icon và fallback subscription/sold out qua implementation; chưa submit giỏ thật, chưa kiểm end-to-end Ajax cart hoặc Theme Editor add/remove/save. Mẫu Figma không cho popup Mobile mở nên Mobile chỉ kiểm responsive, không kết luận nội dung popup đã khớp nguồn trạng thái mở. Sale price giữ token sale, không đổi catalog để khớp ảnh mẫu.

Còn18dòng Chưa khớp và3dòng Chưa xác minh ngoài các tiêu chí được giao. Ví dụ: font Announcement/Menu, tracking Localization, dữ liệu/order/badge sản phẩm, gap Community, Blog tracking, cookie action, nguồn Company chưa thống nhất. Không tự chuyển các lỗi này sang Bỏ qua.

### Validation

Theme Check trên mã theme hiện tại:0errors,9warnings ở các đường dẫn triển khai; tổng raw174warnings gồm165warnings từ các bản snapshot .liquid trong output/qa/**/before. File báo cáo đã lọc phần snapshot riêng, không sửa cấu hình checker chỉ để giảm cảnh báo. git diff --check sạch. Shopify toolkit validator không chạy được vì thiếu dependency @shopify/theme-check-common; dùng Shopify CLI Theme Check thay thế, không cài thêm package.

### Bằng chứng / nguồn

- [Số đo Desktop](../../output/qa/fix-qa2-2026-10-26/desktop.json) · [Mobile](../../output/qa/fix-qa2-2026-10-26/mobile.json)
- [Snapshot style toàn trang Desktop](../../output/qa/fix-qa2-2026-10-26/regression-desktop.json) · [Mobile](../../output/qa/fix-qa2-2026-10-26/regression-mobile.json)
- [Sheet snapshot sau ghi](../../output/qa/fix-qa2-2026-10-26/sheet-after.tsv) · [Ảnh Sheet](../../output/qa/fix-qa2-2026-10-26/sheet-fix2.png)
- [Sheet QA](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190)
- [Figma Desktop](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177) · [Mobile](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513)
- [Preview](http://127.0.0.1:9301/)
- [Shopify product/variant contract](https://shopify.dev/docs/api/liquid/objects/product)


## Lịch sử — sheet-current-homepage.md

### Snapshot Sheet QA Homepage — Fix lần2 — 26/10/2026

Đã đọc lại A1:J85; Hướng xử lý người dùng giữ nguyên. Lần fix dropdownLần 1–Lần 5, Bỏ qua; Trạng thái có Bỏ qua. Figma/Hiện tại là giá trị gốc để truy vết; dòng Khớp đã bỏ highlight. [Bằng chứng sau sửa](homepage-qa.md).

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 0 | Tổng quan | Desktop, Mobile | Số lượng section | Đủ section theo Figma | Đủ 18 vùng: 15 section nội dung + Announcement bar, Header, Footer. |  |  |  | Khớp |
| 0 | Tổng quan | Desktop, Mobile | Thứ tự section | Đúng thứ tự theo Figma | Thứ tự khớp Figma Desktop/Mobile. |  |  |  | Khớp |
| 0 | Tổng quan | Desktop, Mobile | Width / Padding | Width / Padding theo quy ước QA đã thống nhất | Width / Padding khớp theo quy ước: lấy width theo section lớn nhất trong Figma. |  |  |  | Khớp |

Nguồn: Homepage Desktop/Mobile trong [check-perfect](homepage-qa.md); preview http://127.0.0.1:9301/.

Cập nhật giao diện qua Computer Use26/10/2026:27ô số được đổi thành nhãn Lần tương ứng, dropdown6giá trị dùng chip màu và cột100px. [Bằng chứng](homepage-qa.md). Các nội dung khác giữ snapshot QA trước.


## Lịch sử — sheet-fix-round-style-2026-10-26.md

### Giao diện Lần fix —26/10/2026

Đã áp dụng bằng Computer Use trực tiếp trên tab Kinetra - Homepage, phạm vi I3:I81.

- Dropdown một lựa chọn: Lần 1, Lần 2, Lần 3, Lần 4, Lần 5, Bỏ qua.
- Chip màu lần lượt xanh dương, tím, cam, vàng, xanh lá, xám. Chỉ chip có màu; nền ô giữ trắng, cột100px.
- Find/Replace giới hạn I3:I81: ^([1-5])$ → Lần $1; UI xác nhận27ô đã đổi. Đọc lại I25=Lần 1 và I42=Lần 2, mở danh sách thấy đủ6chip màu. Không thay cột Trạng thái, Hướng xử lý, giá trị đối chiếu hoặc thứ tự.
- Đây là cập nhật giao diện và nhãn, không phải lượt sửa theme/QA mới.
- Quy tắc đã học: QA đầu có hướng sửa đã map/kiểm được bằng preset hoặc config/settings_data.json local thì tự gắn Lần 1; chưa chuyển Khớp trước khi thực hiện và QA đạt. Không tự gán Bỏ qua cho lỗi chưa sửa được.

![Dropdown đã xác minh](../../output/qa/fix-round-dropdown-colors-2026-10-26.png)

[Sheet QA](https://docs.google.com/spreadsheets/d/1ykmveE7Ucv3dSXGoQstrFTDNizKkXPkqG6F7NfaCiT4/edit?gid=954515190#gid=954515190)


## Lịch sử — sheet-style-tracker.md

### Theo dõi style Sheet QA — Kinetra

Ngày cập nhật: 22/10/2026. Trạng thái: **NHÁP — đang huấn luyện, chưa chốt style cuối**.

File này theo dõi giao diện báo cáo Google Sheet, không phải Style Guide storefront từ Figma. Khi người dùng chốt, đọc lại toàn bộ file để render giao diện chuẩn cho cả page. Trong lúc huấn luyện, cập nhật nội dung và style. Người dùng đã yêu cầu áp dụng ngay bản style hiện hành; việc áp dụng không đồng nghĩa chốt style cuối.

### Yêu cầu đã được hướng dẫn

| Hạng mục | Quy tắc |
| --- | --- |
| Cột | STT, Section, Thiết bị, Thành phần, Tiêu chí, Figma, Hiện tại, Hướng xử lý, Trạng thái (9 cột vật lý). |
| Header hai tầng | Nội dung gộp ngang trên Figma và Hiện tại; các header khác gộp dọc qua hai hàng. |
| Liền mạch | Tổng quan → Announcement bar → các section tiếp theo; không chèn nguồn/ghi chú giữa nhóm. |
| Nguồn | Phạm vi, Figma desktop/mobile và preview ở cuối bảng; thêm section trước cụm này. |
| STT 0 | Tổng quan; Desktop, Mobile; Số lượng section, Thứ tự section, Width / Padding. |
| Nội dung | Section gom thành phần đạt hoàn toàn vào Đã kiểm và khớp; chỉ tách thuộc tính lệch/chưa xác minh. Tổng quan giữ ba dòng hiện tại. Không list lỗi trong ô; chi tiết lưu Markdown. |
| Highlight | Chỉ thuộc tính khác đã xác minh: Figma xanh, Hiện tại đỏ. Giá trị trùng không highlight; không tô toàn group. |
| Hướng xử lý | Đứng ngay sau Nội dung; ứng với đúng thuộc tính cùng hàng. Preset trước, custom sau khi xác minh giới hạn. Khớp để trống. |
| Trạng thái | Dropdown gồm Khớp xanh, Chưa khớp đỏ, Chưa xác minh vàng, Không áp dụng xám và Browser render không khớp (màu xanh lam đang nháp). |
| Nhóm ô | STT/Section gộp theo instance; Desktop/Mobile thành nhóm riêng; tên Thành phần gộp theo các tiêu chí. Không gộp kết quả/trạng thái/hướng xử lý của các tiêu chí khác nhau. |
| Kích thước Text | Chỉ thêm tiêu chí khi typography đã khớp nhưng box còn lệch. Không lặp lỗi width/height phụ thuộc font; browser render/làm tròn phải có bằng chứng trước khi dùng trạng thái riêng. |
| Font | Font dữ liệu phải đồng đều giữa Tổng quan và các section; không giữ chênh 11pt/10pt hiện tại. |
| Hiển thị | Wrap, căn giữa chiều dọc, chiều cao hàng đủ nội dung; không giảm font để ép vừa. |
| Đồng bộ | Sheet ngắn, Markdown chi tiết có cùng STT/thành phần/kết quả/hướng xử lý. |

### Lịch sử: style phiên bản 2 chờ render (đã được thay thế)

22/10/2026: đã lưu bố cục mới vào skill nguồn, JSON mẫu phiên bản 2 và template init QA. Đây là quy tắc thay thế bố cục 8 cột/list trong ô. Sheet thực tế vẫn giữ bản đã xuất, chờ người dùng chốt style rồi render toàn bảng. Các mốc/số hàng dưới đây là lịch sử của bản cũ.

Trạng thái vẫn là dropdown ở cột cuối vì chưa có yêu cầu bỏ. Nhóm Typo có thể gồm các hàng Font, Weight, Size, Line-height, Tracking và gộp nhãn Tiêu chí qua nhóm; không gộp Figma/Hiện tại/Hướng xử lý/Trạng thái qua các thuộc tính. Màu nền nháp: Figma #D9EAD3, Hiện tại #F4CCCC khi khác đã xác minh. Phần chưa đủ bằng chứng hoặc chênh lệch đã được chấp nhận không tự tô như lỗi.

Ví dụ: hàng Weight có Figma 500 và Hiện tại 500 thì không highlight; hàng Line-height có Figma 21px và Hiện tại 14px thì Figma xanh, Hiện tại đỏ, hướng sửa trên cùng hàng.

### Đồng bộ lần kiểm lại (lịch sử)

22/10/2026: Announcement bar đã ghi lại đủ 18 tiêu chí ở hàng 5–22; bỏ đủ bốn dòng Kích thước Text phụ thuộc typography. Dropdown `G5:G22` có năm lựa chọn, thêm Browser render không khớp với nền #CFE2F3, chữ #0B5394 theo mẫu nháp; không gán trạng thái này cho lỗi chưa chứng minh. Tổng quan vẫn giữ bốn lựa chọn hiện có. Đã kiểm 54 ô kết quả/hướng xử lý khớp JSON và giữ nguồn cuối hàng 24–27. Chưa render lại style toàn bảng; tiếp tục chờ người dùng chốt.

### Quan sát bản nháp và điểm chờ chốt

| Hạng mục | Hiện trạng quan sát | Hướng xử lý khi chốt |
| --- | --- | --- |
| Font Tổng quan | Arial 11pt | Thống nhất font/cỡ với toàn bộ dữ liệu; cỡ cuối chờ người dùng chốt. |
| Font Announcement bar | Arial 10pt | Cùng cỡ với Tổng quan; không mặc định 10pt là cỡ đã duyệt. |
| Header | Arial 11pt, đậm, nền #1F4E78, chữ trắng | Mẫu hiện tại để tham chiếu; chờ chốt nếu đổi. |
| Cột Trạng thái | Rộng khoảng 101px, chip có thể xuống dòng | Cân lại độ rộng sau khi chốt font để nhãn đọc rõ. |
| Cột Hướng xử lý | Khoảng 301px | Cân lại width/row height theo nội dung thật; tránh cắt chữ. |
| Chiều rộng 8 cột | 56 / 141 / 151 / 191 / 221 / 601 / 101 / 301px | Giá trị nháp đã quan sát, không phải chuẩn cố định cho mọi màn hình. |

### Trình tự render sau khi chốt

1. Đọc hướng dẫn mới nhất và tracker; xác nhận các giá trị font/style cuối còn thiếu, không coi im lặng là chốt.
2. Cập nhật mẫu style được duyệt; giữ dữ liệu QA và các quy ước chấp nhận hiện hành.
3. Áp dụng đồng nhất lên toàn vùng báo cáo, gồm Tổng quan và tất cả section. Giữ dropdown hoạt động, merge theo nhóm và nguồn cuối bảng.
4. Kiểm ở zoom đọc được: font đồng đều, nhãn không cắt, wrap/chiều cao hàng đủ, trạng thái màu đúng, mỗi lỗi có hướng xử lý tương ứng.
5. Lưu ảnh xác nhận và cập nhật trạng thái tracker. Không tự sửa theme từ báo cáo QA.

### Bổ sung Hero

22/10/2026: STT2 Hero nối hàng23–58 ngay sau Announcement bar, 20 Desktop và16 Mobile; 8cột hiện có, Arial10 dữ liệu, wrap/căn đầu ô, nhóm gộp theo thiết bị/thành phần. Nguồn cuối hàng60–63, Header chưa QA chi tiết. Tiếp tục giữ style nháp; không chốt/render toàn bảng.

### Hướng dẫn bổ sung đang áp dụng

Section: một dòng Đã kiểm và khớp cho các thành phần đạt; thành phần có lỗi chỉ hiện thuộc tính lỗi/chưa xác minh. Tổng quan vẫn giữ ba dòng bình thường. Scroll/marquee nhóm text/icon/ảnh cùng style thành một mục; nếu Figma đồng bộ mà theme lệch giữa các item thì ghi Chưa đồng bộ style, dropdown Chưa khớp. Không suy kết luận này khi chưa có bằng chứng. Người dùng đã yêu cầu áp dụng style hiện hành ngay, không chờ chốt cuối.

### Đã áp dụng style phiên bản 3

Theo yêu cầu áp dụng ngay của người dùng: header 2 tầng, 9 cột, Arial 10pt thống nhất dữ liệu; header 11pt, wrap/căn đầu, fit-content. Width 56/141/151/191/221/300/300/301/140px. Tổng quan hàng 3–5; Announcement bar 6–13; Hero 14–29; nguồn 30–33. Dropdown I3:I29 đủ 5 lựa chọn, mở được; chỉ thuộc tính sai đã xác minh tô Figma xanh/Hiện tại đỏ. Đã kiểm toàn bộ giá trị, merge, font, màu và tab Virelle không đổi giá trị/style. Đây là bản đang huấn luyện đã áp dụng, chưa gọi là style chốt cuối. Các số hàng và mô tả chờ render ở phần lịch sử không còn là trạng thái hiện hành.

Payload: `output/qa/sheet-style-v3-data.json`; bảng Markdown hiện hành: `docs/qa/sheet-current-homepage.md`; ảnh xác nhận: `output/qa/sheet-style-v3-top.png`, `output/qa/sheet-style-v3-hero.png`.

### Quy tắc Layout bổ sung

Tạo Thành phần Layout riêng cho Gap/Padding, chỉ liệt kê chỗ chưa khớp. Kiểm từ trong ra ngoài: gap con → gap cụm → padding group/section; phần khớp nằm trong dòng xác nhận. Trên Sheet hiện hành: Hero Desktop Padding (content) hàng16; Hero Mobile Gap (Eyebrow → Heading) hàng26 và Gap (Header → Button) hàng27. Padding Mobile đã khớp không tạo hàng lỗi. Đây là sắp xếp bằng chứng hiện có, không ghi là lần đo mới.

### Cập nhật border và vị trí hiện hành

22/10/2026: border Figma trùng nền, không đổi kích thước/layout, không nhìn thấy tổng thể coi như không có border. Đã bỏ hai dòng lỗi Viền dưới Announcement bar và đề xuất bật separator. Tổng quan3–5; Announcement bar6–11; Hero12–27; nguồn28–31; dropdown I3:I22. Quy tắc không thay style đang huấn luyện, không bỏ lỗi font/min-height độc lập. Các mốc số hàng ở trên là lịch sử.

### Nhóm Chung và điểm đã khớp — cập nhật hiện hành 22/10/2026

Mọi mục đã xác minh sửa một chỗ giải quyết cả Desktop/Mobile ghi một lần trong Chung, không giới hạn font family. Đã gom font family và min-height Announcement bar, line-height Button Hero; cùng setting/selector ở cả hai, giữ các min-height Button riêng56/44px. Không gom mục chưa rõ nguyên nhân hoặc cần chỉnh riêng breakpoint.

Điểm đã khớp cũng dùng một dòng chung mỗi section. Mục đạt cả hai ghi một lần; mục riêng thêm hậu tố (Mobile)/(Desktop) ngay sau tên. Tổng quan STT0 giữ nguyên. Bằng chứng/checklist hai thiết bị vẫn giữ chi tiết, không suy cả thành phần đạt khi còn thuộc tính lỗi. Đây là cập nhật cách trình bày, không phải lần đo preview/Figma mới.

Vị trí hiện hành thay các mốc cũ: Tổng quan3–5; Announcement bar6–8 (xác nhận6, font7, chiều cao8), toàn bộ Chung; Hero9–22 (Chung9–10, Desktop11–17, Mobile18–22); nguồn23–26. Dropdown I3:I22 đủ5 lựa chọn. Layout Hero Desktop Padding(content)12; Mobile Gap(Eyebrow→Heading)20, Gap(Header→Button)21. Đã đối chiếu toàn bộ giá trị với payload, giữ nguyên giá trị/style tab Virelle, không còn dữ liệu cũ sau hàng26. Ảnh xác nhận: output/qa/sheet-common-desktop-mobile.png. Bảng hiện hành: docs/qa/sheet-current-homepage.md.

### Hiện hành: Header và gộp Chưa xác minh

Header STT2 đã được chèn trước Hero STT3. Chung áp dụng cả điểm đạt, lỗi sửa chung và cùng câu hỏi Chưa xác minh có bằng chứng hai thiết bị; không lặp border Header hoặc Eyebrow Hero. Bỏ lỗi line-height của Button Primary/Secondary theo hướng dẫn. Vị trí mới: Tổng quan3–5, Announcement bar6–8, Header9–21, Hero22–33, nguồn34–37; dropdown I3:I33. Font10pt/9cột/highlight/dropdown giữ nguyên, style tiếp tục huấn luyện. Xem header-figma-2026-10-22.md và sheet-current-homepage.md.

Đã xuất và đọc lại toàn bộ giá trị cuối: khớp payload; dropdown I3:I33 đủ5 lựa chọn; không còn dữ liệu cũ sau hàng37; tab Virelle giữ nguyên giá trị/style. Ảnh xác nhận mới: output/qa/header-sheet-top.png.

##### QA lại ba section — 22/10/2026

Giữ style hiện hành; cập nhật dữ liệu A3:I18, nguồn/phạm vi hàng19–22; dropdown chỉ I3:I18. Phần khớp gộp theo section, Tổng quan giữ ba dòng. Không tô đỏ các sai số chưa xác minh. Đã xuất readback kiểm giá trị và giữ nguyên tab Virelle.

SVG marquee được xác nhận Khớp theo tổng kích thước gồm stroke: bỏ dòng riêng, gộp vào đã khớp Desktop. Hiện15 dòng dữ liệu A3:I17, nguồn hàng18–21, dropdown I3:I17.

Bổ sung trạng thái dropdown “Figma làm tròn” cho chênh lệch được giải thích bởi công thức typography và làm tròn; giữ ô đối chiếu trung tính, không coi là lỗi cần sửa.

QA lại Header/Hero: bỏ lỗi marquee top đã sửa, gộp vị trí marquee vào đã khớp Desktop. Hiện A3:I16, nguồn17–20, dropdown6 lựa chọn giữ nguyên. Chi tiết tại header-hero-rerun-2026-10-22.md.

Text width gần sát sau khi typography khớp: Eyebrow/Marquee width dùng Figma làm tròn (suy luận metrics/làm tròn), giữ số đo và ô so sánh trung tính. Không có ngưỡng px cố định.

23/10: làm tròn ghi tại phần tử gốc, không lặp ở box Layout cha. Rút dòng điều kiện đo Hero Mobile khỏi bảng lỗi; dữ liệu A3:I15, nguồn16–19.


##### 23/10/2026 — Chốt radius từ bản copy Figma

Số radius px hiển thị sau khi copy đúng layer sang Layouthub-copy là số chốt. Nhãn token/tag/breakpoint có thể gắn sai; không giữ trạng thái chưa xác minh chỉ vì nhãn khác. Chỉ cập nhật số vào Sheet sau khi đã đọc thực tế, không đoán. Node tham chiếu 9994-292 do người dùng cung cấp là nội dung có sẵn, không được xóa khi cleanup lượt QA.


23/10/2026 — Marquee Mobile chỉ xét gap nhìn thấy trong viewport. Bỏ lỗi outer gap ngoài clip; không đề xuất custom từ phần ẩn. Radius0px và6ảnh/crop đã khớp, gộp vào summarySTT4.

##26/10/2026 — áp dụng ngay

Ô dữ liệu Trạng thái nền trắng/không màu, chỉ chip dropdown có màu. Toàn bảng căn giữa chiều dọc; hai hàng header center/middle. Giữ Arial, wrap, merge, kích thước cột và highlight Figma/Hiện tại. Thay các quy tắc căn đầu ô cũ.

26/10/2026: bỏ nền tất cả ô thông thường/nhóm thiết bị/nguồn; chỉ giữ nền header, chip dropdown và highlight Figma/Hiện tại chưa khớp.

### Cập nhật Fix lần2 — 26/10/2026

Thêm Lần fix tạiI, Trạng thái chuyểnJ. Ghi số vòng1/2 vào Lần fix; sau QA đạt chỉ dùng Khớp.13 dòng Đã fix (QA 1) chuyển thành1 / Khớp, không sửa giá trị đối chiếu lịch sử. Giữ ghi chú Hướng xử lý của người dùng, chip màu, nền trắng, middle và header center/middle.

Bổ sung cùng lượt: Lần fix dùng dropdown1–5 (tối đa5 vòng), ô chưa sửa để trống. Trạng thái thêm Bỏ qua. Sau QA khớp, bỏ nền màu Figma/Hiện tại của dòng đó, giữ giá trị lịch sử; chỉ lỗi chưa khớp đã xác minh giữ xanh/đỏ.

### Quy ước mới nhất — nhãn và cờ Lần fix

Dropdown đúng nhãn Lần 1, Lần 2, Lần 3, Lần 4, Lần 5, Bỏ qua; không dùng số trần. Lần fix là vòng xử lý được giao, không chỉ ghi sau sửa. QA lần đầu: đã có hướng xử lý cụ thể và xác minh fix được bằng preset hoặc config/settings_data.json local → tự gắn Lần 1, vẫn Chưa khớp. Chỉ sau fix + QA đạt mới đổi Khớp và bỏ highlight Figma/Hiện tại. Không tự gắn Bỏ qua cho lỗi khó sửa; giữ các cờ do người dùng giao.

**Chưa áp dụng lên Sheet ở cập nhật này:** Google Drive connector không còn khả dụng và browser bị tắt trong Work settings. Mẫu skill đã cập nhật; snapshot Sheet đã đọc trước đó vẫn giữ nguyên như bằng chứng lịch sử. Kế hoạch migration ở output/qa/fix-round-labels-pending.json; phải đọc live Sheet trước khi áp dụng.

### Đã áp dụng qua Computer Use —26/10/2026

Thay thế ghi chú đang chờ truy cập ở trên: đã dùng native Chrome, mở đúng Sheet Kinetra - Homepage và chỉnh I3:I81. Dropdown đủ Lần 1–Lần 5/Bỏ qua, một lựa chọn, hiển thị chip màu. Find/Replace regex chỉ trong I3:I81 đổi27giá trị số sang nhãn Lần; đọc lại I25=Lần 1, I42=Lần 2. CộtI100px. Màu: Lần 1#BFE1F6, Lần 2#E6CFF2, Lần 3#FFC8AA, Lần 4#FFE5A0, Lần 5#D4EDBC, Bỏ qua#E7E6E6. Giữ nền ô trắng và các trạng thái/nội dung khác. [Bằng chứng](homepage-qa.md).

### Mẫu khởi tạo QA và API —26/10/2026

Style hiện hành đã lưu làm working-default trong skill QA, áp dụng từ bước0 của tab QA mới/trống đã được giao. Init-theme lưu style path/version, link Figma/preview/Sheet vào hồ sơ page; check tái sử dụng. API Google Sheets là đường mặc định cho đọc/ghi dữ liệu và định dạng; Computer Use kiểm kết quả hoặc xử lý phần chip API không hỗ trợ khi đã được phép. Không reset bảng đã có hoặc ghi đè ghi chú từ snapshot cũ. Nguồn quy trình: agents-build-themes/skills/qa/qa-theme-pixel-perfect/references/sheet-api-workflow.md.
