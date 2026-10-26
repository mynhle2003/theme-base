# 07. Hotspot — Crafted with care — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 7 | Hotspot — Crafted with care | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Header/ảnh/2 hotspot; gap8px; padding64/48px; Header→ảnh48/32px; mở/đổi popup được. Popup Text16/24, padding24, gap6; khung384px (Desktop), clamp viewport (Mobile). |  |  |  | Khớp |
| 7 | Hotspot — Crafted with care | Chung (Desktop, Mobile) | Hotspot thứ 2 | Đối chiếu nội dung popup | Frame chỉ có Dot trạng thái Default; không có popup nội dung | STAY-PUT SUPPORT mở được | Không có mẫu nội dung popup thứ2 trong frame để đối chiếu; không gọi nội dung đó đã khớp. |  | Không áp dụng |
| 7 | Hotspot — Crafted with care | Desktop | Hotspot popup (FLEXFIT) | Border ảnh hưởng kích thước | Nội dung336px =384 −2×24; không thêm border chiếm chỗ | Border1px #000/10%; nội dung334px | Không có preset border popup. Đề xuất CSS scoped bỏ border1px của content-card; giữ width384, padding24, gap6 và typography đã đúng. | Lần 1 | Khớp |


## Lịch sử — crafted-2026-10-23.md

### Ghi chú mở đầu

> Crafted mới nhất: [QA sau sửa popup](homepage-hotspot.md). Rút4 lỗi cũ; còn border1px làm hẹp nội dung2px. Popup thứ2 không có mẫu nội dung trongframe: Không áp dụng.

> Kết quả hiện hành: [QA lại STT5–7](homepage-qa.md). Crop shorts và Header gap Crafted đã khớp; popup còn4 lỗi Desktop và1 mục chưa xác minh.

### QA Crafted with care —23/10/2026

STT7, homepage only. Không sửa theme. Bảng hiện hành: sheet-current-homepage.md.

Figma Mobile Hotspot05 node48249:14582: padding top48px, không bottom; container354.25px =Header65 +gap32 +ảnh257.25. Header=Eyebrow21 +gap8 +Heading36. Heading Roboto Condensed70030/36 tracking−0.6; Eyebrow50014/21 tracking2 #181818. Ảnh343×257.25 (4:3),2 dot.

Desktop Hotspot05: section981px=padding64 +Header89 +gap48 +ảnh780. Header89=Eyebrow21 +8 +Heading60; source image1820×780. Theme Header97 do gap16: báo nguyên nhân gap, không lặp lỗi section cao989. Theme main Heading70050/60, Eyebrow50014/21, màu#181818. Media1805×780: chiều rộng chênh do viewport client1905, không gọi lỗi width/crop.

Popup FLEXFIT Figma:384×151, padding24, Content336×103 gồmHeading25 +gap6 +Text72. HeadingRobotoCondensed70018/140%, tracking0; TextRoboto40016/24 tracking0.1 #626262, center. Theme popup320×115.19, padding10/12 vàborder1, gap5, Heading18/25.2, Text14/21; không báo sai chiều cao riêng vì phụ thuộc text/padding. Đề xuất preset trước; nếu không có controls mới custom scoped, không đổi token body-sm toàn theme. Radius token2xl không chốt giá trị mới từ nhãn; không xuất lỗi radius chưa đủ bằng chứng.

Mobile đo thực inner375/client360: Header gap4, Heading30/36, media328×257.25, min-height257.25. Ảnh vẫn đúng chủ thể; không kết luận crop/ratio sai do scrollbar làm giảm width. Rút nghi vấn ảnh rất cao từ lần viewport chưa áp dụng. Padding top48 vàHeader→ảnh32 đạt. Cả FLEXFIT vàSTAY-PUT mở được, khi mở thứ2 thì thứ1 đóng. Popup thứ2 nội dung/visual Figma chưa đọc được vì source ở trạng thái ẩn; giữ1 mục chưa xác minh Chung. Không gọi toàn section pass.

Bằng chứng: output/qa/crafted-figma.json; crafted-desktop-measure.json; crafted-mobile-measure.json; crafted-desktop.png; crafted-mobile.png. Figma source không sửa, không tạo scratch.

### Sau xử lý preset — 23/10/2026

Đã sửa cấu hình gap Header của Crafted: Desktop16 →8px, Mobile4 →8px, và preset khi thêm section mới. Bảng/số đo phía trên giữ bằng chứng trước sửa; chưa đánh dấu Khớp vì chưa đo lại preview. Xem [kết quả sửa và các mục còn lại](homepage-qa.md).

### Cập nhật code popup — 23/10/2026

Đã sửa Text qua class kế thừa `body-text body-md` (Body hiện hành16/24px), chọn md cho cả hai hotspot trong preset và template. CSS riêng section đặt max width384px có giới hạn viewport, padding24px, gap6px. Header gap8/8 vẫn đồng bộ. Các giá trị trong bảng trước đó là bằng chứng trước sửa; chưa đo lại preview nên chưa đổi trạng thái thành Khớp. Nội dung popup STAY-PUT SUPPORT vẫn chưa xác minh. Xem [báo cáo sửa hiện hành](homepage-qa.md).

### Đính chính hiện hành — đã hoàn tác sửa popup

Theo yêu cầu chỉ dùng option repo có sẵn, đã xoá option Text size tự bổ sung, các giá trị tương ứng trong preset/template và CSS popup riêng. Renderer trở lại `body-text body-sm`. Bốn lỗi Text14/21, width320, padding10/12 và gap5 vẫn chưa xử lý; nội dung STAY-PUT SUPPORT vẫn chưa xác minh. Chỉ giữ Header gap8px Desktop/Mobile trong preset và template. Các ghi nhận sửa popup trước đó là lịch sử đã hoàn tác.

### Trạng thái cuối sau cho phép CSS popup — 23/10/2026

Đã áp dụng lại bốn sửa popup theo xác nhận “Cho phép CSS riêng cho popup”: Body class `body-md` kế thừa16/24px; max width384px có viewport clamp; padding24px; gap6px. Không thêm option vào schema/preset/template. Header gap8/8 tiếp tục giữ ở preset và template. Thay thế ghi nhận hoàn tác popup phía trên; chưa đo lại giao diện, không đổi QA thành Khớp. Popup STAY-PUT SUPPORT vẫn chưa xác minh nội dung Figma.


## Lịch sử — crafted-final-recheck-2026-10-23.md

### Crafted with care — QA hiện hành23/10/2026

Đo mớiDesktop1920/client1905 vàMobile375/client360. Bốn sửa popup đã có hiệu lực: Body16/24, width384px Desktop, padding24px, gap6px; rút4 lỗi cũ trên Sheet. Mobilepopup rộng328px clamp trong viewport, đúng16/24,padding24,gap6. Header gap8/8; padding vàmedia giữ kết quả đạt.

Còn1 lỗi DesktopFLEXFIT: content-card border1px solid rgba(0,0,0,.1), border-box. Khung384 trừ48padding trừ2border =334px, khácFigma336px. FigmaProduct384×151, Content336×103, padding24. Theme cao153.1875 =48padding +2border +25.1875Heading +6gap +72Text. Phần2px do border là lỗi độc lập; phần0.1875 do18×140%=25.2→25 được chấp nhận làm tròn. Chỉ báo border gốc, không báo lặp width nội dung/height popup, không giảmpadding để bù. CSS scoped bỏ border, không thay toàn token. Chưa sửa theme trong lượt QA.

Mục popup thứ2 được chốt Không áp dụng đối chiếu nội dung: FigmaDesktopnode48205:19419 HotspotStateDefault36×36, Enter chỉ cóDot16px. PopupProduct chỉ tồn tại dướiFrame58770 của hotspotActive node48205:19421. TrongframeMobile cả2dotkhôngmởpopup. Không có nội dung popup thứ2 ở frame cung cấp; không tiếp tục treo Chưa xác minh cho mẫu không được thiết kế, cũng không gọi nội dungSTAY-PUT là pass. Theme mở được popup thứ2, đổi hotspot đóng popup trước.

Bằng chứng mới:output/qa/crafted-final-recheck.json; crafted-final-mobile.png. Sheet hiện hành đồng bộ trongsheet-current-homepage.md.


## Lịch sử — preset-fixes-2026-10-23.md

### Lượt đầu — sửa cấu hình gap

| Section / thành phần | Thay đổi | Vị trí |
| --- | --- | --- |
| STT7 Crafted / Header — Desktop | Eyebrow → Heading: 16 → 8px | `templates/index.json`, `kinetra_crafted.blocks.header.settings.gap_desktop` |
| STT7 Crafted / Header — Mobile | Eyebrow → Heading: 4 → 8px | Cùng Header, `gap_mobile` |
| Hotspot khi thêm section mới | Header gap Desktop/Mobile đều 8px; preset Mobile trước đó là 12px | `sections/hotspot.liquid`, schema preset |

Giữ nguyên Header → ảnh 48/32px, padding section 64/48px, nội dung và vị trí hotspot. Không thay Liquid/CSS/JS triển khai. Các thay đổi có sẵn trong working tree được giữ nguyên.

Đây là xác nhận cấu hình đã sửa, chưa phải kết quả QA giao diện sau sửa. Preview `http://127.0.0.1:9300/` không kết nối được ở lượt này. Sheet nguồn giữ nguyên, chưa ghi trạng thái Khớp cho các thay đổi chưa đo lại.

### Trước lượt sửa popup: 9 mục chưa khớp và 1 mục chưa xác minh

| STT / thành phần | Còn lại | Giới hạn đã kiểm tra / bước tiếp theo |
| --- | --- | --- |
| 1 Announcement bar / font | Roboto Condensed → Roboto | `font=body` đổi cả typography role từ `eyebrow-text` sang `body-text`: weight 500 → 400, tracking và line-height cũng đổi. Không áp dụng preset này vì làm sai các thuộc tính đã khớp. Cần điều chỉnh font riêng cho section và giữ các thông số hiện hành. |
| 2 Header / logo width | 88 → 89px | Global logo width bước 4px; 89px không hợp lệ. 88px là giá trị hợp lệ gần nhất. Cần control hoặc CSS riêng nếu yêu cầu đúng 89px. |
| 2 Header / font Menu và Localization | Roboto Condensed → Roboto, giữ weight 500 | `font=body` dùng Roboto nhưng lấy `--font-body-weight` = 400 từ `roboto_n4`. Không có weight riêng trong hai block. Cần tách family và weight; không đổi font Body toàn theme. |
| 2 Header / Localization tracking | 2 → −0.2px | `_header-localization.liquid` lấy `--font-eyebrow-letter-spacing` khi dùng Accent; chưa có tracking control riêng. Đổi Body chỉ cho tracking Body 0.1px và sai weight. Cần sửa scoped. |
| 5 Image text card grid / shorts | Cần ảnh cận hông/quần shorts | Asset `kinetra-collage-shorts.avif` đã được audit là ảnh phần lưng trên. Block Image không có focal-position setting riêng; chưa xác định được asset thay thế đã có. Cần ảnh đúng/crop đúng trước khi đổi image picker; giữ ratio 5:4. |
| 7 Crafted / popup Text | 14/21 → 16/24px | Text popup dùng class `body-sm`; Hotspot và Product callout không có control text size cho popup. Cần sửa scoped, giữ token body-sm toàn theme. |
| 7 Crafted / popup width | 320 → 384px | `product-callout-runtime.liquid` cố định max width `clamp(18rem, 23vw, 32rem)` cho content popup. Chưa có preset riêng. |
| 7 Crafted / popup padding | 10px dọc, 12px ngang → 24px | Content card CSS cố định `1rem 1.2rem`; chưa có preset. |
| 7 Crafted / popup gap Heading → Text | 5 → 6px | Content card CSS cố định `0.5rem`; chưa có preset. |
| 7 Crafted / popup thứ hai | STAY-PUT SUPPORT chưa xác minh | QA chưa đọc được nội dung/trạng thái ẩn trong Figma. Giữ nội dung hiện có, chưa kết luận đúng/sai và không tự thay text. |

Các mục Figma làm tròn, border đã được chấp nhận và các phần đã khớp không cần sửa. Kết quả QA cũ trong các tài liệu nguồn là lịch sử trước thay đổi preset này.

### Lịch sử đã hoàn tác — popup và typography kế thừa

Theo yêu cầu tiếp theo, đã sửa thêm bốn thuộc tính popup của Crafted:

- Text dùng lựa chọn `content_text_size=md` ở cả hai hotspot trong preset `sections/hotspot.liquid` và instance `kinetra_crafted` trong `templates/index.json`.
- Renderer dùng `body-text body-{{ hotspot_content_text_size }}`; với Medium là `body-text body-md`. Kế thừa Body hiện hành16px, line-height1.5 =24px, family/weight/tracking/màu theo foundation. Không hardcode CSS typography.
- Block Hotspot có lựa chọn Text size theo cùng các size/class của Text kernel, chỉ hiện với Use content; mặc định/fallback sm giữ tương thích các instance chưa chọn cỡ khác.
- CSS riêng trong `sections/hotspot.liquid` chỉ nhắm content popup bên trong `.hotspot-section`: max width384px, giữ phép giới hạn theo viewport của runtime; padding24px; gap6px. Không sửa product popup/Gallery/runtime.
- Header gap8px Desktop/Mobile đã đồng bộ trong preset và template; giữ Header→ảnh48/32px.

Kiểm tra: schema/JSON/locale labels hợp lệ; cả hai popup trong preset và template chọn md; Body16/24 đã đối chiếu token; Theme Check0 errors/9 warnings ở file khác; `git diff --check` đạt. Chưa đo lại storefront/Theme Editor vì preview9300 không kết nối được. Không ghi Khớp thay cho một phép đo chưa thực hiện.

Các bảng và kiểm tra phía trên ghi lịch sử trước lượt này. Hiện đã xử lý cấu hình/code cho6 thuộc tính: hai gap Header và bốn thuộc tính popup. Còn5 lỗi ở section khác (font Announcement, logo, font Menu/Localization, tracking Localization, ảnh shorts) và1 mục Crafted chưa xác minh (nội dung popup STAY-PUT SUPPORT theo Figma). Không đổi nội dung popup thứ hai.

### Xác nhận cuối — CSS popup được cho phép

Sau khi được hỏi rõ về ba thông số layout, người dùng chọn “Cho phép CSS riêng cho popup”. Đã áp dụng `.hotspot-section .product-callout__popover--content` với max width384px; giữ viewport clamp từ runtime. Content card trong section này có padding24px, gap6px. Text dùng Body class có sẵn, không CSS font-size/line-height riêng và không thêm option.

Schema/preset/template hợp lệ; không còn setting tự bổ sung gây lỗi upload. Theme Check0 errors/9 warnings ở file khác; `git diff --check` đạt. Chưa xác nhận upload thực tế hoặc đo lại storefront.

### Bổ sung custom border popup — 23/10/2026

Theo yêu cầu, thêm `border: 0` scoped tại `.hotspot-section .product-callout__content-card` để bỏ border1px kế thừa. Giữ max width384px, padding24px, gap6px và typography Body16/24. Không thêm option; không đổi preset/template hoặc product/Gallery popup. Chưa đo lại storefront.


## Lịch sử — recheck-latest-three-2026-10-23.md

### STT7 Crafted with care

Header gap đã8/8, loại lỗi16/4 trước sửa và gộp pass. Header→ảnh48/32 vẫnđạt, mainHeading50/60 và30/36. Ảnh Desktop1805×780, Mobile328×257.25; lưu scrollbar15px, không báo width/crop do sai điều kiện. PopupFLEXFIT Desktop vẫn320px,Text14/21,padding10/12,gap5; Figma384px,Text16/24,padding24,gap6. Giữ4 lỗi Desktop. Mobilepopup200px,Text14/21,padding10/12,gap5; source Mobile không có popup mở nên không suy4 lỗi Desktop sang Mobile. Popup thứ2 nội dung Figma vẫnchưa xác minh, không gộp vào pass.

Không có option text-size/width/padding/gap popup trong blocks/hotspot.liquid hiện hành. Các sửa custom từng được thử đã hoàn tác theo docs; hướng xử lý lần này ghi rõ chưa có preset phù hợp, không tự thêm option/CSS, không đổi body-sm toàn theme.

Bằng chứng mới:output/qa/three-latest-recheck.json và ảnh Sheet cuối. Các báo cáo cũ là lịch sử khi khác kết luận mới này.


## Lịch sử — check-perfect-homepage.md

### QA STT7 hiện hành

[Crafted with care —23/10/2026](homepage-hotspot.md). Kết quả đã đồng bộ Sheet; popup thứ2 còn chưa xác minh.

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 7 | Crafted with care | `kinetra_crafted` |


## Lịch sử — fix-qa1-2026-10-26.md

### Các dòng đã xác minh đạt

| Hàng Sheet | Section / Tiêu chí | Bằng chứng sau sửa |
|---|---|---|
| 25 | Hotspot — Crafted with care · Border ảnh hưởng kích thước | Popup Desktop: border 0px/none; width384; padding24; gap6. Đã được sửa trong code có sẵn trước lượt này, chỉ xác minh lại. |
