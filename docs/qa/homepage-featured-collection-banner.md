# Norden — Homepage — Featured collection (The Everyday Comfort Sofa)

Cập nhật Fix Lần 1 ngày28/10/2026: các dòng Lần1 trong bảng đã đo lại trên [preview local](http://127.0.0.1:9300/) ở nội dung Desktop1920/Mobile375px và **Khớp**. Hai cột Figma/Hiện tại giữ số đo ban đầu để tra lịch sử; số đo sau sửa ở cuối doc. Các checkpoint “chờ QA” phía dưới là lịch sử đã được thay thế.

QA thiết kế lần đầu chốt ngày27/10/2026. Đã đồng bộ và đọc lại [Sheet hàng33–52](https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0&range=A33:J52); merge/wrap/middle và dropdown màu đã kiểm tra. **Hoàn tất lượt QA, không đồng nghĩa mọi thuộc tính đã khớp.**

Nguồn: [Desktop](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47227-7323) / [Mobile](https://www.figma.com/design/9770x6Fo149ZeyWbvWwjk2/?node-id=47557-4382); [preview theme192706117931](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931). Node bản tạm D10012:630 / M10012:1429 thuộc hai root QA. Không sửa theme/config, không Save/push/publish.

|Thiết bị|Thành phần|Tiêu chí|Figma|Hiện tại|Hướng xử lý|Lần fix|Trạng thái|
|---|---|---|---|---|---|---|---|
|Chung (Desktop, Mobile)|Đã kiểm và khớp|Phạm vi đã kiểm|Banner + 4 card đúng thứ tự. D: container1600, banner784×928, grid2×2, gap cột24/hàng32. M: rộng343, banner cao482, 4card1cột,gap32. Padding D80/M56.|Bố cục, ảnh/crop, overlay đen10%, bo12; Heading700 D40/48,M30/36,#FFF; nhãn nút và khung D48/M44 khớp. Ảnh product vuông, gap ảnh→info16, tên→giá4; số tiền, màu Sale#C62E1A/New#149621 và chữ badge#FFF khớp.|||Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font size|16px|14px|type_eyebrow_size=16; global, recheck các Eyebrow khác.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Font weight|600 SemiBold|500 Medium|type_eyebrow_weight=600; recheck consumer global.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Eyebrow|Letter spacing|0px|0.5px|type_eyebrow_letter_spacing=normal (0em).|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Layout (Banner)|Gap Eyebrow→Heading|12px|20px|Group Eyebrow + Heading với gap12; Image card cho phép Group và Group nhận theme blocks.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Layout (Banner)|Gap Heading→Button|24px|20px|Sau khi nhóm text, đặt gap_desktop/gap_mobile của Image card=24.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Product card / Title|Nội dung / viết hoa|Princeton Chair; Indivi 2,5 Seater Sofa; Paddle Pendant; Sideboard With Drop-Down Section|Princeton chair; Indivi 2,5 seater sofa; Paddle pendant; Sideboard with drop-down section|Chưa có title-case control riêng. Cần mapping nhãn hoặc CSS scoped; không đổi dữ liệu sản phẩm trong QA.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Title|Line-height|24px (16×150%)|22.4px (16×140%)|Title dùng --font-heading-md-line-height. type_heading_4_line_height=relaxed map1.5; recheck H4 khác.|Lần 1|Khớp|
|Chung (Desktop, Mobile)|Product card / Price|Font weight (thường, sale, giá gạch)|500 Medium|400 Regular|Price kế thừa body weight; cần override scoped --price-font-weight:500, không đổi body global.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Price|Gap giá sale→giá gạch|Desktop6px; Mobile4px|5px ở cả hai|CSS .price gap0.5rem; chưa có setting riêng, cần gap theo breakpoint.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Regular price|Màu chữ|#1A1A1A|#4D4D4D|Chưa có setting giá thường riêng; scoped price color sang heading-color.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Compare price|Font size|16px|14.4px|CSS .price__compare-at dùng0.9em; cần giữ1em scoped.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Compare price|Màu hiệu dụng|#808080, opacity100%|#4D4D4D × opacity72% trên trắng ≈ #7F7F7F|Chênh màu nhỏ sau compositing; khớp token#808080 ởopacity1 khi chỉnh scoped compare price.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Sale, New badge|Border|Không stroke|1px solid màu nền badge|Border1px tạo khung24px thay vì22px dù font/padding khớp. Scoped border0; không giảm padding để bù.||Chưa khớp|
|Chung (Desktop, Mobile)|Product card / Sale, New badge|Inset trên/trái|12px|7.5px|Badges wrapper Figma padding12; runtime offset0.75rem. Chưa thấy control inset riêng; cần scoped offset12.||Chưa khớp|
|Mobile|Image card / Content area|Padding ngang|28px mỗi bên|24px mỗi bên|padding_left_mobile=28, padding_right_mobile=28; giữ Desktop40.|Lần 1|Khớp|
|Mobile|Image card / Content area|Padding dọc|32px trên/dưới|24px trên/dưới|padding_top_mobile=32, padding_bottom_mobile=32.|Lần 1|Khớp|
|Mobile|Button (Banner)|Padding ngang|28px mỗi bên|24px mỗi bên|button_padding_inline_mobile=28; setting global, recheck Button khác.|Lần 1|Khớp|
|Mobile|Product card / Quick view|Hiển thị mặc định|Không có nút trong frame mặc định|Icon Quick view luôn hiện trên ảnh|product_card_quick_view_mobile=false; recheck các product card Mobile.|Lần 1|Khớp|
|Mobile|Product card / Quick add|Hiển thị mặc định|Không có nút trong frame mặc định|Icon Quick add luôn hiện dưới ảnh|product_card_quick_add_mobile=false; recheck các product card Mobile.|Lần 1|Khớp|

## Bằng chứng và diễn giải

Kiểm typography trước khung. Badge cao24 thay22 là do border1px mỗi phía, không do min-height15. Giá compare raw#4D opacity.72 trên trắng≈#7F7F7F so nguồn#808080. Không bù parent height bằng padding. Chỉ gắn Lần1 cho preset/composition đã xác minh.

Raw evidence: `/private/tmp/norden-homepage-qa-20261026/`. Báo cáo cấu trúc hiện hành: [homepage-qa-data.json](homepage-qa-data.json). Hai root tạm đã được dọn sau lưu bằng chứng; Homepage2/3 được giữ nguyên. Node copy trong doc chỉ lưu provenance, không còn truy cập được; dùng link Figma gốc khi QA lại.

<details>
<summary>Bằng chứng và checkpoint trước khi chốt (lịch sử; số hàng/trạng thái cũ được thay bằng bảng phía trên)</summary>

# Norden — Homepage — Featured collection (The Everyday Comfort Sofa)

QA27/10/2026, chỉ đọc theme. Sheet hàng36–55 đã ghi và đọc lại CellData; đã kiểm tra trực quan trên Google-rendered ở90% sau lượt bị ngắt.
Sheet: https://docs.google.com/spreadsheets/d/1d5Jre27DCais8dFP7OCBPOdp816Eo6rWfOU7DewlSqE/edit?gid=0#gid=0
Preview: https://layouthub-template-v2.myshopify.com/?preview_theme_id=192706117931
Instance `template--28659888619819__aike_new_products`. Figma copy D10012:630 / M10012:1429; nguồn9770x6Fo149ZeyWbvWwjk2 homepage D47227:7323/M47557:4382.

## Khớp đã xác minh

Bố cục banner +4product card: Desktop container1600, banner784×928, product2×2, gap cột24/hàng32, banner↔grid32. Mobile container343, banner343×482, product4hàng1cột, gap32. Padding section Desktop80/Mobile56. Media/crop đúng: banner sofa, Princeton chair, Indivi sofa xanh, Paddle pendant, Sideboard; card ảnh vuông. Banner bo12, overlay đen10%. Heading Instrument Sans700 D40/48/M30/36,tracking0,#FFF. Nhãn Shop Now, font600/16px, màu chữ#1A1A1A/nền#FFF, bo pill, khungD48/M44. Product ảnh→info16, tên→giá4. Số tiền495,995/1295,295,745 đúng. BadgeSale#C62E1A/New#149621 chữ#FFF; fontInstrumentSans500/12/18,tracking0.6,padding2×10 đúng. Các style font chỉ detach trên hai frame tạm được cho phép, Undo ngay và kiểm phục hồi.

## Chưa khớp (mỗi thuộc tính một hàng Sheet)

| Hàng | Thành phần / tiêu chí | Figma | Runtime | Hướng xử lý |
|---|---|---|---|---|
|37|Eyebrow size|16|14|type_eyebrow_size16;Lần1,global|
|38|Eyebrow weight|600|500|type_eyebrow_weight600;Lần1|
|39|Eyebrow tracking|0|0.5|normal0em;Lần1|
|40|Layout gap Eyebrow→Heading|12|20|Group hai block,gap12;Lần1|
|41|Layout gap Heading→Button|24|20|Image card gap24 sau khi cóGroup;Lần1|
|42|Product title viết hoa|Princeton Chair; Indivi 2,5 Seater Sofa; Paddle Pendant; Sideboard With Drop-Down Section|Princeton chair; Indivi 2,5 seater sofa; Paddle pendant; Sideboard with drop-down section|Cần mapping nhãn/CSSscoped;không tự đổi product data|
|43|Product title line-height|24(150%)|22.4(140%)|Title dùng H4md;type_heading_4_line_height relaxed→1.5;Lần1,recheckH4khác|
|44|Price weight,thường/sale/compare|500|400|Price kế thừa body;scopedweight500,không đổi body|
|45|Regular price color|#1A1A1A|#4D4D4D|Scoped heading-color|
|46|Compare price size|16|14.4|CSS0.9em→1em scoped|
|47|Compare price màu hiệu dụng|#808080100%|#4D4D4Dopacity72% trên trắng≈#7F7F7F|Chênh nhỏ,scoped đúngtoken vàopacity1;không nhầm màu raw vớicomposite|
|48|Gap sale→compare|D6/M4|5|CSSpricegap0.5rem;custombp|
|49|Badge border|0|1px|Border tạo24px thay22. Không giảm padding đúng. min-height15px không gây lỗi|
|50|Badge inset trên/trái|12|7.5|Sourcewrapperpadding12D/M;runtime0.75rem;scopedoffset12|
|51|Mobile banner padding ngang|28|24|Imagecardleft/right_mobile28;Lần1|
|52|Mobile banner padding dọc|32|24|Imagecardtop/bottom_mobile32;Lần1|
|53|Mobile button padding ngang|28|24|button_padding_inline_mobile28;Lần1,global|
|54|Mobile Quick view|Không trong frame mặc định|Icon44px luônhiện|product_card_quick_view_mobile=false;Lần1|
|55|Mobile Quick add|Không trong frame mặc định|Icon36px luônhiện|product_card_quick_add_mobile=false;Lần1|

Không báo height section Mobile2366vs2360.171875 thành lỗi độc lập: typography title/card con đang lệch. Không báo lineheight ButtonPrimary riêng. Desktop action hover chưa có source state, không kết luận hover sai.

## Truy nguyên

`blocks/image-card.liquid` cho phép group và các block; `blocks/group.liquid` nhận themeblocks và gapDesktop/Mobile. Config hiện bannerflatEyebrow+Heading+Buttongap20, nên không tạo được hai gap12/24 nếu không nhóm.
`assets/critical.css` product-card title dùng `--font-heading-md-line-height`; typography snippet map từ H4relaxed1.5. Pricefont-weight→bodyweight, compare0.9em/opacity0.72, gap0.5rem. Badge cóshape-border1px, min-height1.5rem=15px; runtimeborder-box24=18line+4padding+2border.

## Bằng chứng

`/private/tmp/norden-homepage-qa-20261026/featured-figma-desktop.json`, `featured-figma-mobile.json`, `featured-runtime-desktop.json` (cw1920), `featured-runtime-mobile.json` (cw375), source canvas đã quan sát cả4card. Các descendantIDs10049/10050 có thể đổi khi mở lại instance; root10012stable.

SheetA36:J55 đọc lại có đúng20hàng, validationI/J, highlightF/G đúng, nềnJtrắng. Favorites cũ chuyển56–57, G3:G4thamchiếu57. Cần recheck Favorites vì preview mới đã có nội dung.

QA section mặc định hoàn tất trong phạm vi trên, còn19mismatch. Không sửa theme, chưaQAhomepageđầyđủ. Tiếp tụcHotspotShoptheLook.

Minh chứng style: `sheet-featured-upper.png`, `sheet-featured-middle.png`, `sheet-featured-lower.png` trong thư mục evidence. Merge, wrap, middle, chip màu và F/G conditional formatting đều hiển thị đúng, không clipping nội dung các hàng vừa ghi.

</details>


## Fix Lần 1 — 28/10/2026

Đã sửa preset/config **local**; chưa upload, chưa có số đo preview sau sửa. Bảng QA phía trên giữ nguyên số đo ban đầu. Trạng thái Sheet chưa đổi thành Khớp.

|Hàng Sheet|Setting/composition trước → sau|Tình trạng|
|---|---|---|
|34|`type_eyebrow_size: 14→16`|Applied local; chờ QA Desktop/Mobile|
|35|`type_eyebrow_weight: 500→600`|Applied local; chờ QA Desktop/Mobile|
|36|`type_eyebrow_letter_spacing: 0.5px→normal (0em)`|Applied local; chờ QA Desktop/Mobile|
|37|`aike_new_products/banner/copy: Group Eyebrow+Heading, gap D/M 12px`|Applied local; chờ QA Desktop/Mobile|
|38|`aike_new_products/banner: gap_desktop/gap_mobile 20→24`|Applied local; chờ QA Desktop/Mobile|
|40|`type_heading_4_line_height: normal (1.4)→relaxed (1.5)`|Applied local; chờ QA Desktop/Mobile|
|48|`aike_new_products/banner: padding_left/right_mobile 24→28`|Applied local; chờ QA Desktop/Mobile|
|49|`aike_new_products/banner: padding_top/bottom_mobile 24→32`|Applied local; chờ QA Desktop/Mobile|
|50|`button_padding_inline_mobile: 24→28`|Applied local; chờ QA Desktop/Mobile|
|51|`product_card_quick_view_mobile=true; product_card_quick_add_mobile=true (giữ nguyên)`|Không áp theo yêu cầu người dùng: luôn hiện Quick view/add trên Mobile|
|52|`product_card_quick_view_mobile=true; product_card_quick_add_mobile=true (giữ nguyên)`|Không áp theo yêu cầu người dùng: luôn hiện Quick view/add trên Mobile|

Kiểm cấu trúc JSON/schema đã đạt. Chưa có phép đo mới; QA hồi quy toàn Homepage 16 section ở Desktop/Mobile còn chờ preview phản ánh cấu hình mới. Quick view/add Mobile luôn hiện theo yêu cầu người dùng mới nhất.

## Xác minh Fix Lần 1 trên preview local — 28/10/2026

|Hàng Sheet|Số đo mới|Kết quả|
|---|---|---|
|34|Desktop/Mobile size=16px; font Instrument Sans; normal tracking=0em|Khớp|
|35|Desktop/Mobile weight=600; font Instrument Sans; normal tracking=0em|Khớp|
|36|Desktop/Mobile tracking=normal; font Instrument Sans; normal tracking=0em|Khớp|
|37|Gap thực Desktop/Mobile 12/12px|Khớp|
|38|Gap thực Desktop/Mobile 24/24px|Khớp|
|40|Product title16px/24px; type_heading_4_line_height=relaxed (1.5); các card consumer đã kiểm|Khớp|
|48|Mobile content padding left/right28px; Desktop40px|Khớp|
|49|Mobile content padding top/bottom32px; Desktop40px|Khớp|
|50|Mobile padding ngang 28px mỗi bên; chiều cao44px; Desktop padding32px/chiều cao48px giữ nguyên|Khớp|
|51|Mobile Quick view/Quick add wrapper display:none, box0×0; không hiện mặc định. Theo yêu cầu mới đã bật lại việc sửa các dòng Lần1; Desktop giữ enabled|Khớp|
|52|Mobile Quick view/Quick add wrapper display:none, box0×0; không hiện mặc định. Theo yêu cầu mới đã bật lại việc sửa các dòng Lần1; Desktop giữ enabled|Khớp|

Đã cập nhật dropdown J=Khớp và xóa nền F/G; đọc lại API xác nhận màu nền hiệu dụng trắng, giữ A:I và validation. Nguồn thiết kế: thông số đã xác minh lượt QA1 tại hai frame gốc; runtime mới lưu `/private/tmp/norden-preset-fix-20261028/qa/desktop.json`, `mobile.json`, `mobile-actions.json` và ảnh viewport tương ứng.

Yêu cầu mới nhất thay thế quyết định giữ nút trước đó: Quick add/Quick view Mobile được sửa vì gắn Lần1; current settings đều false, wrapper display:none/box0×0. Desktop vẫn enabled.
