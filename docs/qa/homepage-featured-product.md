## Sold out mask và opacity — 2026-10-28

Theo yêu cầu, thay gradient đường chéo scoped Featured product bằng CSS mask/-webkit-mask chứa SVG viewBox0 0 100 100,preserveAspectRatio none,path M0 0L100100,vector-effect non-scaling-stroke. Mask100%100% no-repeat bám hai góc khi width/height thay đổi. FigmaMobile47284:7350 là Pills State Sold out, Input style Outline, Properties Opacity60(disable); dùng var(--button-disabled-opacity), runtimeDesktop/Mobile computed0,6. Màu mask dùng input-text-color để không nhân alpha0,6 thêm một lần; nền pill không còn overlay gradient cũ. Fixture dùng chính CSS mới ở66×40,120×40,220×64, screenshot sold-out-mask-widths.png đã xem: đường nối góc đúng ba kích thước. Runtime M Desktop66×44,Mobile60×40,mask100%100%. ThemeCheck0errors/8warnings;gitdiffcheckđạt. Server9843 tạm đã dừng,tabfixture/source/previewđóng. Không sửa inventory, không push/SaveEditor.

## Featured product sticky preset — 2026-10-28

Theo yêu cầu, sticky_content false→true ở Homepage featured_product và sections/featured-product.liquid Add section preset. Dùng checkbox hiện có, không sửa implementation. Preview Desktop client1920 xác nhận data-sticky-enabled hiện trên product-sticky-layout; product-details bỏ class not-sticky, computed position sticky. Theme Check0errors/8warnings; git diff --check đạt. Không push/publish/SaveEditor/commit.

## Đính chính width/ratio thumbnail — 2026-10-28

Theo yêu cầu, bỏ aspect-ratio khỏi swiper-slide/button và bỏ imgheight100% trong custom Featured product. Giữ ratio4:5 ở ảnh theo shared product-media.css. Button border0, vẽ viền chọn bằng pseudo-element inset0 để không thu nhỏ width ảnh; current headingcolor vẫn được giữ. Width setting64 là ảnh/slide64, margin6 là khoảng cách ngoài, không cộng vào width ảnh hoặc ratio. Runtime Mobile ảnh64×80, slide64×80, slideRatioauto/imageRatio4/5, margin6,gap6,maingap8, pseudo border1px#3A3A3A. Clickthumbnail2 main/selected cùng46842318717227. Desktop ảnh/slide80×100, slideRatioauto,gap16. Theme Check0errors/8warnings. Supersedes cách đặt ratio trên border-box button ở ghi chú Fix12 trước. Không sửa preset để bù ratio/margin.

## Fix Lần1 + Lần2 — 2026-10-28 (đã QA)

Người dùng cho phép custom scoped Featured product qua trả lời trực tiếp. Snapshot Sheet72:91 đọc trước sửa. Lần1 templates/index.json/featured_product/product-media và sections/featured-product.liquid preset: thumbnail_width_mobile60→64; gap_mobile12→8, schema range hợp lệ. Lần2 phát hiện CSS scoped ngay trong sections/featured-product.liquid đang ép thumbnailgap10/8!important dù inline16/12. Bỏ override Desktop để kế thừa blockgap16; Mobile thumbnailgap6!important tách biệt maingap8. Active border scoped dùng var(--heading-color). Aspect ratio thumbnail đặt trên button border-box, imgheight100% để64×80 đúng cả viền (trước79,5 cao). Không sửa JS hay block dùng chung.

Runtime mới client1920: main672×784, thumbnail80×100,gap16,border1px#3A3A3A,radius0. Mobile content375: main343×400,thumbnail64×80,gap6, main→thumbnail8,border1px#3A3A3A,radius0. Click thumbnail2 Mobile và3 Desktop chuyển main media sang ID tương ứng sau resize,5 thumbnails còn đủ; Desktop scrollWidth=clientWidth. Title/price/description vẫn hiển thị. Theme Check0errors/8warnings, git diff --check đạt. Không gọi toàn Homepage/theme đạt; giới hạn hồi quy trong Featured product và viewport overflow, không QA lại19section hoặc release/editor.

Sheet74 activeborderLần2,86 DesktopgapLần2,87 MobilethumbnailLần1,89 maingapLần2,90 thumbgapLần2 → Khớp. GiữF/G lịch sử, thêm số đo mớiH, bỏbackgroundhighlight. Connector Google Drive bị gỡ giữa lượt nên dùng CUA/Chrome beae.com Sheet2048917848, copy readback live trước và sau ghi; giữ validation/chip/merge, không thaysharing. Không push/publish/SaveEditor/commit.

## Token resolved qua Figma copy — 2026-10-28

Thực hiện lại đúng bước đã bỏ sót. Không suy từ tên token. Copy nguyên frame nguồn Mobile47284:7124 sang GUJw3Y8gUBn8C5rISC5FPV/page4:3 tạo root10093:1063 (Homepage4,375×11266,13,Devices Mobile), Desktop47052:10793 tạo root10093:1816 (Homepage5,1920). Giữ mode nguồn, không đổi mode/detach/unbind. Mobile Featured product copy10093:1250, Product10093:1252, thumbnailparent10093:1255: UI Design button6 variable value for1,5, padding0/0. Năm thumbnail cùng select đọc width64 variable16,height80, radius0 variablelg (mọi góc0). Desktop thumbnailrail10093:2015 width80,height784: button16 variable value for4. Năm thumbnail Desktop radius0 variablelg. Nguồn đối ứngMobile7318/7319,Desktop14722 và các thumbnailcon. Evidence copy-mobile-radius.png/copy-desktop-gap.png trong visualization chat. Sheet75 radius Khớp;86 Desktopgap16/10 Chưa khớp;90 Mobilegap6/8 Chưa khớp, không còn pendingtoken. Runtime dùng số đo đã lưu lượt QA ngay trước, không gọi là đo mới. Không sửa theme. Cleanup xóa đúng root10093:1816 rồi10093:1063; xác nhận Homepage3 Mobile và Homepage2 có sẵn vẫn còn, không xóa root cũ10017:2513/1613 của workflow khác.

## Cây thành phần và Layout tổng hợp — 2026-10-28

Sheet nhóm72:91; Chung72:85, Desktop86, Mobile87:91. Thêm Tổng quan kiểm đủ thành phần; tách Details - Product title/Product price/Description theo tiêu chí nội dung đã có evidence, không suy rằng style mới đã QA từ các dòng nội dung. Main media, Thumbnails, Pagination có tên con rõ; Variant picker và Size chart giữ lịch sử. Layout Product media Mobile gom sau các mục style. Giữ Buy it now là ngoại lệ ẩn theo yêu cầu; không ghi thiếu. Skill quy định kiểm Tổng quan thành phần → style con → Layout tổng hợp, đo khoảng trống thực với đóng góp gap/padding/margin, tránh cộng margin-collapse hoặc dùng setting khác làm bằng chứng lệch khi hiển thị khớp. Lượt này cập nhật cấu trúc/hướng dẫn, không đo lại toàn bộ spacing wrapper hoặc sửa theme.

## Product media style + nhóm thiết bị — 2026-10-28

Sheet72:88 sắp Chung72:82 → Desktop83 → Mobile84:88, không lặp nhãn. Media chính Desktop node47054:14728 là672×784; Mobile47284:7324 là343×400,17; runtime tương ứng672×784/343×400, chấp nhận rounding. Mobile product47284:7317 cao488,17; thumbnail parent47284:7318 cao80; gap8px suy trực tiếp từ ba kích thước. Thumbnail47284:7319 ratio4:5 cao80→width64, active1px#3A3A3A, radius lg chưa resolvepx. Desktop thumbnailrail47054:14722 width80,height784,gap token4. Runtime Mobile thumbnail60×74,5 border-box, margin-right8; Desktop80×99,5 margin-bottom10. CSS vars gap16/12 không phải số đo margin runtime; giữ các gap token chưa resolve ở Chưa xác minh. Runtime active border1px#6C6C6C cả hai. Width Mobile60→64 preset hợp lệ (40–160step4), cờLần1. Gap main–thumbnail12 so với8 nguồn là mismatch; không báo height hệ quả. Radius chưa đủ nguồn không đoán. Figma source screenshots Desktop/Mobile không dots/fraction/progress; runtime pagination hidden. Desktop arrows hover có DOM: không coi thừa chỉ từ bounding box khi chưa xác minh opacity/hover nguồn. Không tuyên bố crop mọi slide đã QA hoặc toàn media đạt. Skill bổ sung main/thumbnail/pagination style và nhóm thiết bị liền mạch. Không sửa theme.

## Đính chính tiêu chí Size guide — 2026-10-28

Người dùng xác nhận Desktop căn giữa viewport, Mobile bottom sheet là đúng. Evidence đã đo: Desktop panel600×688, inset trên/dưới16 trong overlay1265×720; Mobile panel375×730,797, bottom0 trong overlay375×812. Page size-guide mở được. Popup đạt theo quy tắc mới, không cần custom. Sheet row80 cập nhật Khớp, rút hướng custom và cờ Lần1 do tiêu chí cũ không còn áp dụng; giữ lịch sử cũ bên dưới. Không thay đổi theme.

## Yêu cầu Fix Lần 1 — 2026-10-28

Đọc Sheet live72:82 trước xử lý. Không có lỗi đã xác minh sửa được bằng preset hiện có: row73 thumbnail Chưa xác minh, không đổi60→64 theo suy đoán; row80 popup Mobile Chưa khớp, schema blocks/product-variant-picker.liquid size_chart_mobile_layout chỉ bottom_sheet/drawer, snippet cũng normalize về hai giá trị đó. Không có modal/center Mobile. Không sửa Liquid/CSS/JS/schema vì Fix Lần1 chỉ preset/config; quyền custom label variant trước đây không cấp quyền popup. Sheet H80/I80 ghi giới hạn và vòng giao Lần1; giữ F/G/J ban đầu. Không sửa theme nên không chạy lại Theme Check/hồi quy toàn Homepage, không tuyên bố đã fix/QA đạt.

## Recheck tách Product media / Details — 2026-10-28

Sửa lỗi báo cáo A72: STT14 bị ghi thành Variant picker. Sheet nhóm72:82, hai dòng Product media riêng, Details và các thành phần con có prefix rõ. Desktop client1920: media768×784, main672×784, Details768×521, gap64. Mobile content375: media343×486,50, main343×400, Details343×644, gap40. Nội dung Romilly, giá15/30, Colour, options, Quantity, Add to cart vẫn hiển thị. Composition gallery5 ảnh/thumbnails trái Desktop, dưới Mobile khớp nguồn lưu. Chưa khẳng định mọi crop/slide/control khớp từ composition. Thumbnail Mobile cần số đo parent nguồn độc lập; không suy width64 từ height section. Rút lỗi height tổng sang Không áp dụng, giữ lịch sử vì Buy it now đã ẩn theo yêu cầu và spacing phải báo tại vùng sở hữu. Size guide Mobile còn sát đáy. Không sửa theme.

## Size chart — xác minh parent và popup 2026-10-28

Details → Variant picker: nguồn Mobile text47284:7349 → trigger47284:7340 (92×21px, gap token1,5) → parent47284:7338 (343×24px, space-between). Desktop text47191:17252 → trigger92×21px → parent47191:17254 (768×24px, space-between). Runtime hiện đã có ruler18×18, gap6; toàn trigger91,703×21; Mobile parent343×24, cạnh phải trùng nhau. Không dùng width chữ67,703 thay trigger. Vị trí/spacing Khớp; icon đã hiển thị.

Page size-guide đã gắn và mở được. Desktop panel600×688 ở(332,5;16), vùng overlay1265×720: giữa viewport. Mobile panel375×730,797 tại(0;81,203), overlay375×812: sát đáy, chưa giữa dọc. Theo yêu cầu bỏ QA chi tiết bảng/XXL và không cần nguồn popup. Sheet Homepage76:78 cập nhật; chưa sửa implementation.

## Variant picker (Size chart / Size guide) — recheck 2026-10-28

Skill đã chỉnh Size chart thành thành phần con Variant picker, không phải section độc lập. Sheet thêm4 tiêu chí75:78, nhóm Featured product hiện72:80; các nhóm sau dịch+4. Trạng thái: label/typography Khớp; thiếu icon thước Chưa khớp; vị trí/gap chính xác và visual/nội dung popup Chưa xác minh phần nguồn.

Nguồn text đã lưu: desktop47191:17252 và mobile47284:7349 trong desktop/mobile-text-styles.json: Poppins400/14px/150%=21px,#6C6C6C,underline,boxtext68×21. Runtime đo cả2 viewport đúng font/size/line/color,trigger67.703×26px (khác boxtext; không suy lỗi khung). Trigger chỉ có span chữ, không SVG/icon; đối chiếu ảnh Figma desktop/mobile có icon thước nên lỗi thiếu icon đã xác minh. Không sửa implementation trong lượt QA này.

Mở Size chart→dialog Size Guide→Close đều chạy. Đo đúng panel qua getByRole dialog name Size Guide (tránh lấy nhầm dialog menu ẩn): Desktop panel600×688 trong viewport1265×720; Mobile panel375×730.797 trong viewport390×812. Bảng4 dòng S/M/L/XL,Chest/Waist cm/in,How to measure,resource size-guide. Chưa có frame popup/bảng số đo chuẩn Romilly trong hồ sơ, không kết luận dữ liệu demo/thiếu XXL là mismatch Figma hoặc tự sửa. Gap/inset icon/text nguồn cần parent số đo riêng; chưa kiểm đầy đủ focus/Escape/scroll. Không tuyên bố toàn Size chart Khớp. UI Sheet giữmerge/Arial10/wrap/middle,highlight chỉ dòng icon,dropdown kế thừa; đọc lại qua API rồi kiểm UI. Không sửa theme/store.

---

## Bổ sung kiểm Size chart / Size guide — 2026-10-28

Theo yêu cầu người dùng, qa-theme checklist.md có mục Size chart/Size guide riêng khi xuất hiện trong Figma. Không còn bỏ qua như thành phần phụ của Variant picker.

Đã thao tác trigger Size chart → dialog Size Guide → nút Close trên Desktop và Mobile. Dialog chứa bảng S/M/L/XL, Chest/Waist theo cm/in và How to measure; resource preset là page size-guide. Nội dung đang là demo, chưa có thiết kế popup/bảng số đo chuẩn từ Figma trong hồ sơ nên chưa kết luận nội dung phù hợp Romilly hoặc visual popup khớp. Product có XXL nhưng bảng demo chỉ tới XL: cần nguồn số đo để xác minh độ đầy đủ, không tự bịa. Chưa kiểm đầy đủ focus trap/Escape/scroll tới cuối; không suy pass từ việc mở/đóng được. Số đo dialog không được chốt vì chưa đo đúng panel sau transition trên cả2 breakpoint. Ảnh mobile lưu trong visualization task. Trigger icon/typo/màu/kích thước/gap vẫn cần đối chiếu Properties nguồn riêng. Không sửa theme/store trong lượt bổ sung này.

---

## Featured product — Fix lần2 / recheck — 2026-10-28

Sheet live A72:J76: giao Lần2 cho màu option chưa chọn và nhãn Colour. Người dùng đã cho phép custom scoped qua trả lời trực tiếp trong chat. assets/product-information.css thêm .section-featured-product .product-variant-picker { --input-text-color: var(--heading-color); }. Không đổi Body/typography hoặc selected style; Desktop client1920/Mobile client375: size M/L/XL/XXL chưa chọn #3A3A3A, S selected trắng. Yellow là swatch có label ẩn, không dùng màu chữ ẩn để đánh giá nút size.

Dùng store-content-media trên layouthub-template-v2.myshopify.com đã xác minh qua shop query. Product15463498907947, option17937336434987 đổi tên Color→Colour bằng productOptionUpdate; userErrors rỗng. Giữ option-value15211010883883/Yellow, linked metafield shopify.color-pattern, metaobject666306478379 và swatch#E4BA65. Không tạo variant mới, không đổi giá/media/tồn kho; storefront cả2 viewport render Colour. Resource đổi tên cũng hiện trên trang Product/các consumer của chính product này.

Sheet73/74 Khớp, giữ Lần2 và F/G gốc, bổ sung H; bỏ highlight F/G. Đối chiếu lại ảnh nguồn figma-m-13.png cho thấy S selected, M gạch chéo; ghi chú cũ nguồn chọn M sai. Sheet76 chuyển Khớp kèm đính chính H, không sửa inventory. M vẫn Sold out theo dữ liệu thật. Dòng75 height chưa được giao sửa: runtime Mobile1226.5px, Desktop904px; nguồn Mobile1289.17 gồm Buy it now trong khi người dùng yêu cầu ẩn. Giữ phần layout cần phân rã spacing/composition, chưa tuyên bố toàn section đạt hoặc đổi height cứng. Các slide ảnh inactive lazy chưa tải không phải ảnh lỗi, chưa audit lại crop từng slide trong vòng này.

Validation Theme Check0errors/8warnings, git diff --check đạt. Evidence tạm /tmp/novaire-qa-20261028/fp-product-before.json,fp-option-updated.json,fp-fix2-runtime.json,fp-fix2-check.json. Đọc lại Sheet qua connector và xem UI sau ghi; style/merge giữ nguyên. Không push/publish/Save Editor/commit.

---

## QA hiện hành — 2026-10-28

STT 14 — **Featured product**. Instance `index/featured_product`; type `featured-product`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A66:J70. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-14719
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7315
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-13.png`, `figma-m-13.png`, `final-desktop-13.png`, `final-mobile-13.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Romilly, giá $15/$30, description và typography; năm media và thumbnails; options S/M/L/XL/XXL | Romilly, giá $15/$30, description và typography; năm media và thumbnails; options S/M/L/XL/XXL |  |  | Khớp |
| Chung (Desktop, Mobile) | Variant picker | Màu label chưa chọn | #3A3A3A | #6C6C6C | Kiểm token option text; tránh sửa màu body toàn scheme |  | Chưa khớp |
| Chung (Desktop, Mobile) | Variant picker | Nhãn Colour | Figma ghi Colour | Runtime ghi Color; cần thống nhất localization mong muốn |  |  | Chưa xác minh |
| Mobile | Layout | Chiều cao section | 1289.17px | 1226.50px | Đối chiếu khoảng cách media/details và buy controls; không kéo height cứng |  | Chưa khớp |
| Mobile | Product buy buttons | Trạng thái ban đầu | Figma chọn M và hiện Add to cart | Runtime chọn S; M Sold out theo dữ liệu thật, không coi inventory là lỗi preset |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

## Latest requested fixes — 2026-10-27

Desktop runtime confirmed columns768px/768px, gap64px; CTA weight400/tracking1.95px. Existing Size Guide page bound and popup shows Size chart table. Secondary gallery navigation configured in local preset+instance and new native style control; preview still renders Primary, pending synchronization/recheck. Earlier corresponding layout/CTA/missing-page findings are superseded by these explicit results. Mobile not rechecked. No remote save/push.

# Featured product — QA hiện hành, 2026-10-27

## Preset fix follow-up — 2026-10-27

Updated homepage instance and Add section preset only: product-description text_size md to sm; product-price font_size md to lg; variant-picker input_font_size xs to sm. Runtime desktop computed styles read back successfully: description14px/21px, price18px/27px, variant inputs14px/21px. This supersedes the three size mismatches below for desktop; mobile configuration is updated but mobile was not measured again in this follow-up. No CSS/global settings/resource changes. Theme Check0errors/8warnings; whitespace check passes.

Remaining: price tracking2px cannot be represented exactly by current local options; Add to cart fixed weight500/tracking1px blocks existing global400/1.95px; desktop container/media proportions; missing Size chart page; product option Colour naming; gallery thumbnail media/order; desktop overlay arrows. Unverified crop of every main slide and precise mobile geometry remain pending. Buy it now remains intentionally hidden.


Instance homepage `featured_product`, Novaire; preview localhost9300/theme192827490603. Nguồn desktop47054:14719 (1920×904), mobile47284:7315 (375×1289.17), Figma vsUDZS8CZ0sa1pruNqu0eb. MCP hết quota View seat; CUA/Chrome đọc lại Properties và screenshot.

Runtime desktop1920×817, client1905; mobile375×812, client360 do scrollbar15px. Không coi phần thiếu15px mobile là lỗi theme. Evidence mới lưu local tại `/tmp/novaire-featured-product-qa/`; không commit. Đây là lượt chỉ đọc, không sửa theme.

| Thành phần / thuộc tính | Figma | Thực tế | Trạng thái / hướng xử lý |
| --- | --- | --- | --- |
| Desktop — layout/details width | Column768px | Details596.81px; media827.19px; layout1504px, gap80px | mismatch: details hẹp171.19px. Rà container và media share. Control hiện chỉ45/55/65%, thiếu50%; global page width ảnh hưởng toàn theme. |
| Desktop/Mobile — Description size | Poppins400,14px/21px,#6C6C6C | Poppins400,16px/24px,#6C6C6C | mismatch: size+2px, line+3px. Preset text_size md→sm; Lần1. Không thêm lỗi box text phụ thuộc. |
| Desktop/Mobile — Price size |18px/27px|16px/24px|mismatch: size−2px. Preset font_size md→lg; Lần1.|
| Desktop/Mobile — Price tracking |2px|normal (0px)|mismatch. Các option tracking hiện chưa biểu đạt2px chính xác tại18px; kiểm contract token trước đề xuất, không hardcode CSS giá.|
| Desktop/Mobile — Variant input size |Poppins400,14px/21px|Poppins400,12px/18px|mismatch: size−2px. Preset input_font_size xs→sm; Lần1.|
| Desktop/Mobile — Variant copy |Colour|Color|mismatch: tên product option khác. Cần thao tác resource/content; không fake text bằng CSS.|
| Desktop/Mobile — Size chart |Có trigger và icon|Không có trigger; size_chart_page unset|mismatch: thiếu thành phần. Dùng page setting sẵn có với page phù hợp, không tạo/chọn resource trong lượt QA.|
| Desktop — Add to cart weight |400|500|mismatch. Global button_font_weight đã400 nhưng CSS Featured product ép500; cần khôi phục token hiện hữu.|
| Desktop — Add to cart tracking |1.95px|1px|mismatch: −0.95px. Global spacious đã map1.95px nhưng cùng rule ép1px; không đổi global để bù.|
| Desktop/Mobile — Gallery thumbnails |Thumb2 nghiêng,3tư thế tay trước,4/5toàn thân theo source|Thumb2tư thế tay trước,3quay lưng,4toàn thân,5nghiêng|mismatch: ảnh/thứ tự khác. Audit product media/source trước khi sắp resource; preset không chọn được thứ tự media.|
| Desktop — Gallery arrows |Không có overlay arrow trong frame|Có nút Next tròn trên ảnh|mismatch ở trạng thái đã chụp. Block hiện không có desktop-arrow toggle; cần custom nếu muốn ẩn.|
| Desktop/Mobile — Title typography/color |Outfit300; desktop28/42; mobile22/33; tracking2.24;#3A3A3A|Đúng các giá trị tương ứng, uppercase|matched về typography/color; không suy toàn bộ box/wrap.|
| Desktop/Mobile — Variant label typography |Poppins400,16/24,0tracking,#3A3A3A|Đúng các giá trị; selected caption visually-hidden|matched về style nhãn; copy lệch báo riêng.|
| Desktop/Mobile — Buy it now |Có trong nguồn|Đã ẩn|not-applicable: user yêu cầu ẩn, không tính lỗi.|
| Desktop/Mobile — Main crop/từng slide |Cần kiểm từng slot|Đã xem ảnh chính và5thumbnail, chưa đo main crop của mọi slide|unverified; kiểm source/currentSrc/focal point từng slide sau khi chỉnh order.|
| Mobile — khung/gap, swatch decoration, CTA typography |Nguồn375px|Preview client360px; mới đo computed và xem ảnh|unverified cho hình học chính xác; cần content375px và đọc từng property nguồn.|

Kết luận: chưa khớp hoàn toàn. Có thể sửa bằng preset ngay: description size, price size, variant input size. Size chart cần page hợp lệ. Phát hiện CSS Add to cart chặn weight/tracking dù global config đúng. Không sửa code/config/media hoặc Save/push trong QA.

Evidence: `desktop-measurements.json`, `mobile-measurements.json`, `preview-desktop.png`, `preview-mobile-top.png`, `preview-mobile-details.png`, `figma-desktop.png`, `figma-mobile.png`, các snapshot `figma-*.txt` trong thư mục tạm trên. Màu compare-at, Quantity geometry, token gap/padding chính xác và main crop mọi slide còn chưa đủ xác minh. Editor/lifecycle ngoài phạm vi, không tuyên bố release-ready. Tab QA2048917335/2048917344 đã đóng và viewport QA đã reset; tab người dùng giữ nguyên.

## Lịch sử trước lượt QA này

# Novaire homepage — featured-product

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/featured_product`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-14719
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7315
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Romilly five genuine images/thumbnails, Yellow, S/M/L/XL/XXL buttons, $15/$30. Mobile selecting M shows crossed-out option and SOLD OUT purchase button; no cart/order mutation.

Local evidence: `/tmp/novaire-qa-evidence/mobile-size-m.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.

## Featured product preset refresh — 2026-10-27

Requested nodes re-read using CUA/Chrome profile minhle@beae.com (Figma MCP tools unavailable in this session): desktop 47054:14719, 1920×904; mobile 47284:7315, 375×1289.17. Desktop shows left thumbnails, image and product details; mobile shows main image, five thumbnails then product details. Both show title/price, divider, description, colour, size, Quantity, Add to cart and Buy it now. Screenshots were inspected in tool output only; no image evidence file was saved.

Local configuration refresh: existing Featured product section and _product-media/_product-details reused. Added existing divider inside the title/price Group with zero divider spacing, enabled existing quantity show_label, synchronized Add section preset from the existing homepage instance including heading-lg and explicit existing price/variant/quantity settings. Kept original preset translation name/category. Existing product/media references preserved; no media selection, upload, store save or push performed by this task.

Validation: all 119 configured section/block setting values checked against current schema IDs, select options and range bounds/steps. Theme Check:401 files,0errors,8warnings outside these configuration edits. git diff --check passes.

Visual verification status: Figma desktop/mobile inspected; existing desktop preview inspected before edits. Final desktop/mobile render unverified: viewport/reload and subsequent tab reconnection timed out. No final visual pass is claimed. Existing preview showed larger media share than Figma, native overlay gallery arrows and inherited typography; exact crop/order of all five images remains unverified. Current section offers45/55/65 percent media shares rather than the approximately half-width Figma layout; no new control was added. Size chart needs an existing page reference, currently unset; resource creation is outside this preset request. Variant option labels/borders and button typography remain controlled by shared theme settings and have not been changed from this section-only evidence.

Browser cleanup pending: task-created Figma tab2048917265 could not be explicitly closed after browser connection timeout (it may be closed by session cleanup). User preview tab2048917226 retained. Temporary viewport override may require reset if set completed before timeout. Checkpoint: /tmp/novaire-featured-product-browser.json.

## Requested removal — 2026-10-27

Disabled the existing static product-buy-accelerated-checkout block in index/featured_product using disabled:true. Schema presets reject disabled on this static block (ValidSchema); the preset remains unchanged. No existing parent visibility control exists, so hiding the default Add section action requires implementation follow-up. Quantity and Add to cart retained. No Liquid/CSS/JS implementation changes or push. Final browser rendering remains unverified.

### Secondary navigation verified after schema-first synchronization

Final localhost HTML reports data-navigation-style="secondary" after reserializing the existing homepage media settings following block schema upload. Initial Primary result was stale template data from upload order; this supersedes the pending navigation statements above. Balanced desktop container now derives content cap from global --page-width (not fixed1600), preserving the page-width control. Runtime desktop columns768/768 with64gap and CTA400/1.95px were verified earlier; Size Guide popup table was opened successfully. Latest Theme Check0errors/8warnings, git diff --check passes. No explicit push/publish or Theme Editor save; existing preview watcher synchronized local edits. Browser became unattached during final continuation, so final Secondary visual/hover and mobile recheck remain unverified; HTML class/style binding confirmed.
