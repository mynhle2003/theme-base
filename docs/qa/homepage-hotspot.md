# Norden — Homepage — Hotspot (Shop the Look)

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng53–56](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A53:J56); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:645 / M10012:1441 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|D: Heading32/130%, gap40, ảnh1024×576, padding20/48. M: Heading22/130%, gap32, ảnh375×267.86, padding0/48. 3ảnh,3pin/ảnh; pin44px trắng30%.|Ảnh/crop, bố cục, Heading700/#1A1A1A, pin và vòng trắng khớp. Control136×24, arrow24, 3dot8px/gap16, màu active#1A1A1A/inactive#E6E6E6. Mở pin, chuyển đủ3ảnh và loop hoạt động.|||Khớp|
|Chung (Desktop, Mobile)|Hotspot pin|Vị trí / độ chính xác|Ví dụ pin sofa: D(666,297.67); M(242,134.33)px, tính từ góc ảnh.|D(664.08,294.80); M(240.5,133.34)px. Các pin khác cũng lệch do tọa độ% nguyên.|Schema position bước1%; vị trí hiện tại gần nhất nhưng chưa đúng nguồn. Muốn khớp cần hỗ trợ% lẻ/scoped position; không tự làm tròn thành lỗi font.||Chưa khớp|
|Desktop|Grid/slide|Gap giữa ảnh|32px|24px|carousel-runtime.js hardcode spaceBetween24 khi centered preview; chưa có setting riêng, cần sửa scoped.||Chưa khớp|
|Mobile|Image|Border radius|0px|12px|Product callout chỉ có corner_radius chung D/M. Cần override Mobile0px, giữ Desktop12px.||Chưa khớp|

## Bằng chứng và diễn giải

Không báo gap control24 từ hit area: pagination margin-inline-8px làm visual gap16 đúng. 3ảnh thực,9DOMslide gồm clone; không báo9ảnh thiết kế. Tọa độ pin được so góc ảnh, không coi chênh do step1% là font metrics.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden — Homepage — Hotspot (Shop the Look)

QA27/10/2026. Sheet hàng56–59 đã ghi, wrap/middle/merge và chip màu đã xác minh qua Google-rendered; CSV đọc lại đúng4hàng, không HTML thô.
Sheet: https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0
Preview: https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931
Instance `template--28659888619819__aike_hotspots`; Figma copy D10012:645 / M10012:1441, nguồn9770x6Fo149ZeyWbvWwjk2 homepage D47227:7323 / M47557:4382.

## Khớp

- 3ảnh: Living Room giữa, Bedroom phía trước và Dining tiếp theo; 3pin mỗiảnh. Loop3ảnh thực, không đếm9DOMslides clone thành9ảnh thiết kế.
- Heading Instrument Sans700 D32/130%,M22/130%,tracking0,#1A1A1A,căn giữa. Fontactual đã đọc bằng detachstyle tạm và Undo. Gap Heading→ảnh D40/M32. PaddingsectionD20trên/48dưới;M0trên/48dưới.
- Khung ảnhD1024×576,bo12; M375×267.86, fullwidth,khôngnextpeek. Ảnh/crop đúng. RuntimeIMGbleed1px ra mỗi phía để tránh khe media; so khung wrapper1024/375, không báo ảnh1026/377 thành lỗi.
- Pinouter44×44,trắng30%,pill;innertrắng28,padding6 và icon16,headingcolor. Vị trí pin còn lệch riêng bên dưới.
- Navigation136×24,arrow24,dots8,giữa3dotgap16,active#1A1A1A/inactive#E6E6E6. Hitarea dot24 là hợp lệ: paginationmargin-inline-8px bù hai mép, khoảng arrow→visualdot vẫn16. Không báo width152 hoặc gap24 từ hitbox riêng. Active::before24% được phủ::after#1A1A1A nên màu active đúng.
- Mobile mở pin sofa hiện card Indivi đúng nhãn/số tiền hiện tại, bấm đóng được; Next lần lượtDining→Bedroom→Living, active dot1→2→3→1. Không đánh giá popupfont/style với Figma vì không có popupstate nguồn. Một clickNext trongtransition bị bỏ qua; sau ổn định tiếp tục hoạt động, không tạo lỗi chức năng từ click quá nhanh.
- D789.59375 vsFigma790; M432.4375 vs432.86 được giải thích bởi lineboxHeading41.6/28.6 làm tròn42/29, không báo parentheight thêm.

## Chưa khớp

|Thuộc tính|Figma|Runtime|Hướng xử lý|
|---|---|---|---|
|Vị trí pin|VDsofa D(666,297.67),M(242,134.33)|D(664.078,294.797),M(240.5,133.344)|Cácposition% chỉ bước1; hiện tại gần nhất chưachínhxác. Cần cho%lẻ/scopedposition; không mặc định lỗi browser/font làm tròn.|
|GapảnhDesktop|32|24|`assets/carousel-runtime.js` centered preview hardcodespaceBetween24; cần sửa scoped/chưa cósetting.|
|RadiusảnhMobile|0|12|Product-callout chỉcorner_radiuschungD/M; cầnmobileoverride0,giữD12.|

Không gắnLần1 cho3mục cầncustom. Không sửa theme.

## Vị trí nguồn Desktop (top-left pin so với ảnh1024×576)

|Ảnh/pin|Figma x,y(px)|
|---|---|
|Living Room pin1|('666', '297.67')|
|Living Room pin2|('318', '132.67')|
|Living Room pin3|('97', '389.67')|
|Dining pin1|('490', '90.67')|
|Dining pin2|('485', '380.67')|
|Dining pin3|('306', '312.67')|
|Bedroom pin1|('265', '329.67')|
|Bedroom pin2|('525', '472.67')|
|Bedroom pin3|('561', '243.67')|

Mobile Living Room nguồn: sofa(242,134.33),đèn(91,57.33),tủ(22,163.33). Runtime(240.5,133.344),(90.5,58.344),(23,162.797); cácpin44px. Bảng runtime Desktop đủ9pin lưu riêng `hotspot-pin-coords-desktop.json`; mãnodeinstance con có thể thay khi Figma rematerialize.

## Bằng chứng

`/private/tmp/norden-homepage-qa-20261026/hotspot-figma-desktop.json`, `hotspot-figma-mobile.json`, `hotspot-runtime-desktop.json`, `hotspot-runtime-mobile.json`, `hotspot-pin-coords-desktop.json`, `sheet-hotspot-styled.png`.

Đã ghi và style xong trước section tiếp theo. Favorites lịch sử chuyển60–61; đã recheck27/10 và vẫn4card0px. QAhomepagechưađầyđủ,cleanuphairootFigma vẫnchờ.

</details>
