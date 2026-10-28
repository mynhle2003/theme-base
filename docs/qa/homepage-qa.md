## Gallery carousel — Fix Lần1/Lần2 và recheck 2026-10-28

[Hồ sơ hiện hành](homepage-gallery.md) · [Sheet A106:J113](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A106:J113). Đã sửa/QA đạt4mục được giao: Tag24pxD/M; Mobile Header–ảnh36px, icon/button24px, overlaygap8px. Tổng6Khớp/1Chưa khớp(paddingDesktop giữBỏ qua)/1Chưa xác minh(radius). Giữ F/G gốc, cờI và hướng xử lý gốc; appendQA ởH, đổi4trạng thái và bỏ highlight pass. Đã readbackCSV/XLSX; không đổi dòng/merge hoặc kết quả sectionkhác.

Thay đổi local gồm1setting ởindex/preset vàCSS scopedGallery; không đổi sharedblock/globalsettings/JS/media. Overlay đượcSheetlive giaoLần2, gồm phối hợpicon24px; icon giữcờLần1gốc. ThemeCheck0errors/8warningsngoài phạmvi; JSON/diffđạt. Toolkitvalidator thiếudependency; check-custom còn14pathngoài phạmvi chưa ghi record. QA chi tiết riêngGallery+smokeHomepageMobile, không suy toàntheme/editor đạt; khôngpush/publish/SaveEditor/commit.

---

## Blog posts — chốt crop theo Figma copy, 2026-10-28

Đã copy section nguồn sang Layouthub copy qua UI, export riêng3 khung Image4:3 có crop rồi dùng `$setup-store` thay đúng3 cover article Novaire. Copy/export thực hiện được: đính chính blocker về quyền của lượt trước. Recheck đủ3 card Desktop/Mobile (swipe từng card), URL/natural size mới xác nhận515×386. [Hồ sơ/receipt](homepage-blog.md) · [Sheet A95:J105](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A95:J105): **10Khớp,1Figma làm tròn,0Chưa khớp**; đủ7 lỗi Lần1/Lần2 đã đạt. H96/J96 cập nhật, giữ lịch sử F/G/I và bỏ highlight crop; readback CSV/XLSX đạt. Không thay code hoặc deploy theme thêm; không kết luận QA toàn theme. Lịch sử checkpoint dưới giữ nguyên.

---

## Gallery carousel — recheck 2026-10-28

[Hồ sơ hiện hành](homepage-gallery.md) · [Sheet A106:J113](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A106:J113). Riêng `index/instagram`:2Khớp/5Chưa khớp/1Chưa xác minh, trong đópadding Desktop giữBỏ qua; Tag giữLần2. Chốt parent ảnhMobile256px/gap12px, chấp nhận mẫu1ảnh+preview tương đối theo quy ước một section, rút pending width. Lỗi độc lập mới: Header–ảnhMobile32/36px(Lần1), icon20/24px(Lần1 theo ngoại lệ icon), icon–Tag19/8px(chưa gắn vòng custom). Không sửa theme.

Radius ảnh token2xl chưa resolve do quota MCP và giới hạn copy nguồn, giữ Chưa xác minh. Đã chèn tổng3hàng trước Benefits, Gallery106:113; Benefits114:116, Footer bắt đầu117; các checkpoint range cũ phía sau chỉ là lịch sử. Đã đọc lại CSV/XLSX và kiểmUI merge/highlight/dropdown, giữ chỉnh sửa live Blog của phiên khác. Không suy toànHomepage/theme đạt.

---

## Blog posts — Fix Lần1/Lần2 và recheck 2026-10-28

[Hồ sơ hiện hành](homepage-blog.md) · [Sheet A95:J105](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A95:J105). Đã xác minh sửa đạt6/7 lỗi:5Lần1 bằng config/preset và1Lần2 bằng article summary. Tổng9Khớp,1Figma làm tròn,1Chưa khớp. Crop cover Lần2 đã đổi ảnh4:3 neo trên từ asset store, cải thiện nhưng còn lệch framing nguồn; giữ Chưa khớp, cần đúng crop được phép cung cấp. Giữ F/G gốc, cờI và ghi chú user; bỏ highlight6 hàng đã đạt, đọc lại CSV/XLSX và UI.

Global underline5→2 sau audit Collection tabs/Countdown/Blog; recheck D/M consumer hiện tại22.8≈23px, Countdown đãoverride2 nên giữ nguyên. Runtime đủ16 main sections cộng announcement/header/footer, đúng thứ tự/không overflow. QA chi tiết mới cho Blog và consumer global; chưa recheck mọi thuộc tính Figma toàn19 nhóm, popup/editor lifecycle hay template khác; không kết luận toàn theme đạt. Theme Check0errors/8warnings; JSON/schema parse và semantic diff đạt. Không push/publish/Save Editor/commit. Lịch sử dưới giữ nguyên.

---

## Blog posts recheck — 2026-10-28

Đã QA lại riêng `index/articles` Desktop/Mobile theo qa-theme mới: [hồ sơ](homepage-blog.md), [Sheet A95:J105](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A95:J105). 11 tiêu chí:3 Khớp,1 Figma làm tròn,7 Chưa khớp;5 Lần1,2 Lần2 theo chỉnh sửa live. Chốt card cha Mobile256px, chấp nhận mẫu1+preview theo quy ước một section; rút pending width và height hệ quả. Các lỗi độc lập: crop/nội dung article, spacing trong card, underline Button, gap Desktop/Mobile. Không fix theme/store. Chèn7 hàng trước Gallery: các section/nguồn phía sau dịch+7; không coi các checkpoint số hàng cũ là range hiện hành. Đã readback CSV/XLSX và kiểm UI merge, highlight, dropdown. Giữ thay đổi live người dùng trong Hướng xử lý/Lần fix.

## Variant picker (Size chart / Size guide) — recheck 2026-10-28

Skill đã chỉnh Size chart thành thành phần con Variant picker, không phải section độc lập. Sheet thêm4 tiêu chí75:78, nhóm Featured product hiện72:80; các nhóm sau dịch+4. Trạng thái: label/typography Khớp; thiếu icon thước Chưa khớp; vị trí/gap chính xác và visual/nội dung popup Chưa xác minh phần nguồn.

Nguồn text đã lưu: desktop47191:17252 và mobile47284:7349 trong desktop/mobile-text-styles.json: Poppins400/14px/150%=21px,#6C6C6C,underline,boxtext68×21. Runtime đo cả2 viewport đúng font/size/line/color,trigger67.703×26px (khác boxtext; không suy lỗi khung). Trigger chỉ có span chữ, không SVG/icon; đối chiếu ảnh Figma desktop/mobile có icon thước nên lỗi thiếu icon đã xác minh. Không sửa implementation trong lượt QA này.

Mở Size chart→dialog Size Guide→Close đều chạy. Đo đúng panel qua getByRole dialog name Size Guide (tránh lấy nhầm dialog menu ẩn): Desktop panel600×688 trong viewport1265×720; Mobile panel375×730.797 trong viewport390×812. Bảng4 dòng S/M/L/XL,Chest/Waist cm/in,How to measure,resource size-guide. Chưa có frame popup/bảng số đo chuẩn Romilly trong hồ sơ, không kết luận dữ liệu demo/thiếu XXL là mismatch Figma hoặc tự sửa. Gap/inset icon/text nguồn cần parent số đo riêng; chưa kiểm đầy đủ focus/Escape/scroll. Không tuyên bố toàn Size chart Khớp. UI Sheet giữmerge/Arial10/wrap/middle,highlight chỉ dòng icon,dropdown kế thừa; đọc lại qua API rồi kiểm UI. Không sửa theme/store.

---

## Featured product — Fix lần2 / recheck — 2026-10-28

Sheet live A72:J76: giao Lần2 cho màu option chưa chọn và nhãn Colour. Người dùng đã cho phép custom scoped qua trả lời trực tiếp trong chat. assets/product-information.css thêm .section-featured-product .product-variant-picker { --input-text-color: var(--heading-color); }. Không đổi Body/typography hoặc selected style; Desktop client1920/Mobile client375: size M/L/XL/XXL chưa chọn #3A3A3A, S selected trắng. Yellow là swatch có label ẩn, không dùng màu chữ ẩn để đánh giá nút size.

Dùng store-content-media trên layouthub-template-v2.myshopify.com đã xác minh qua shop query. Product15463498907947, option17937336434987 đổi tên Color→Colour bằng productOptionUpdate; userErrors rỗng. Giữ option-value15211010883883/Yellow, linked metafield shopify.color-pattern, metaobject666306478379 và swatch#E4BA65. Không tạo variant mới, không đổi giá/media/tồn kho; storefront cả2 viewport render Colour. Resource đổi tên cũng hiện trên trang Product/các consumer của chính product này.

Sheet73/74 Khớp, giữ Lần2 và F/G gốc, bổ sung H; bỏ highlight F/G. Đối chiếu lại ảnh nguồn figma-m-13.png cho thấy S selected, M gạch chéo; ghi chú cũ nguồn chọn M sai. Sheet76 chuyển Khớp kèm đính chính H, không sửa inventory. M vẫn Sold out theo dữ liệu thật. Dòng75 height chưa được giao sửa: runtime Mobile1226.5px, Desktop904px; nguồn Mobile1289.17 gồm Buy it now trong khi người dùng yêu cầu ẩn. Giữ phần layout cần phân rã spacing/composition, chưa tuyên bố toàn section đạt hoặc đổi height cứng. Các slide ảnh inactive lazy chưa tải không phải ảnh lỗi, chưa audit lại crop từng slide trong vòng này.

Validation Theme Check0errors/8warnings, git diff --check đạt. Evidence tạm /tmp/novaire-qa-20261028/fp-product-before.json,fp-option-updated.json,fp-fix2-runtime.json,fp-fix2-check.json. Đọc lại Sheet qua connector và xem UI sau ghi; style/merge giữ nguyên. Không push/publish/Save Editor/commit.

---

## Fix Lần1/Lần2 — 2026-10-28

Đọc live Sheet:36/37/38 được giao Lần2,37 user cho custom token;39 Bỏ qua;42 Lần1. Tắt show_pagination_on_mobile trong instance và preset Featured collection. CSS scoped section-featured-collection: progress height0.5,radius10,fill radius1, màu Heading/Border qua CSS variables. Scheme riêng clone scheme1 chỉ border#CCCCCC→#E6E6E6 để map Bg Bar; assign section/preset, giữ consumer scheme1 khác. Desktop đo track1122×0.5,radius10,#E6E6E6,fill#3A3A3A/radius1,gap32; Mobile client375 displaynone. Sheet36/37/38/42 Khớp, giữ F/G gốc và cờ user; width39 Bỏ qua/Chưa khớp giữ nguyên. Không push/publish/commit. Theme Check0errors. Evidence featured-fix-after.tsv,featured-fix-check.json.

---

## Featured collection — recheck đầy đủ Pagination / chuẩn hóa Sheet — 2026-10-28

Nguồn Figma MCP vẫn quota View seat; dùng Chrome Properties. Desktop pagination node47064:14923: Style Progess bar, Width Fill1124px, Height0.5px, Radius10px, Bg Bar#E6E6E6, right padding842px. Deep-select bar: Width282px, Height0.5px, Radius1px, Heading#3A3A3A. Parent Frame562659 node47064:14917: Width1124px, Height565px, Gap8=32px theo scale đã xác minh ở docs/theme-init/novaire-theme.md. Không sửa nguồn. Đây là số đo Properties mới thay thế các mục Chưa xác minh style/màu cũ.

Runtime mới: Desktop client1920, section854.734375px, trackx638/w1122/h2/margin32/radius0; fill#6C6C6C/radius0,track Body alpha20%. Next đưa fill từ50%→100%; Previous trả được, kiểm sau transition ổn định. Type/vị trí/phạm vi dưới nhóm sản phẩm và gap32px khớp; chiều cao0.5→2, màu track/fill, radius, width1124→1122 được báo riêng (4 dòng lỗi). Không suy width2px thành Figma làm tròn khi Properties cho số cụ thể.

Mobile client375 sau deferred controller: banner433px tách riêng, section1136.796875px; carousel sản phẩm1+preview/gap12 khớp. Pagination343×2,margin24 vẫn hiện, trong khi nguồn Mobile node47284:7179 không có. Block product-list schema có show_pagination_on_mobile, defaulttrue; instance thiếu giá trị riêng nên đề xuất false và gắn Lần1 cho lỗi hiển thị. Chỉ QA, chưa sửa theme. Không lặp lỗi chiều cao hệ quả khi Grid/spacing đang được xét theo quy ước.

Sheet nhóm7 hiện A33:J42, một merge STT/Section cho10 hàng; Chung33:34, Desktop35:39, Mobile40:42. D35:D39 merge Pagination. Chỉ F/G của5 lỗi đã xác minh có xanh/đỏ, ô thường trắng; dropdown thật giữ nguyên, I42=Lần1. Arial10/wrap/middle. Giữ giá trị F/G và hướng xử lý lịch sử của regular price. Đã đọc lại TSV và kiểm screenshot; các section khác không ghi đè. Chèn4 hàng trước Image cards: nhóm sau dịch+4, sources102:106. Snapshot trước/sau featured-style-before/after.tsv, runtime featured-style-runtime.json, screenshot nguồn featured-figma-pagination-parent.png. Số đo cũ/nhận định placement trước initialization giữ ở lịch sử, không còn là kết luận hiện hành.

---

## Pagination recheck và đính chính deferred render — 2026-10-28

Lượt trước đã đo quá sớm: Swiper initialized nhưng section controller chưa kích hoạt. Khi đưa section vào viewport/click navigation, promo được tách đúng. Đính chính lỗi placement của checkpoint trước: Mobile banner433px tách trên, section1136.796875px; sản phẩm4 slide, gap12,1+preview đúng. Sheet35/36 Khớp, không sửa code. Không dùng DOM trước deferred init để kết luận regression.

Pagination được kiểm riêng: Figma Desktop có progress dưới nhóm sản phẩm, không dưới banner (figma-d-6.png). Runtime ổn định trackx638,width1122,height2px,margin-top32px; fill#6C6C6C,track cùng màu alpha20%; Next tăng fill đến100%,Next disabled cuối. Chưa đọc Properties màu/độ dày nguồn nên dòng37 Chưa xác minh phần style, dù phạm vi/hành vi khớp. Mobile Figma không có progress (figma-m-6.png), runtime343×2px,margin-top24px,fill25% cho4 sản phẩm: dòng38 Chưa khớp, đề xuất tắt Mobile qua control phù hợp; chưa fix. Không lặp lỗi height hệ quả. Thêm2 hàng vào Sheet trước Image cards: mọi nhóm sau Featured collection dịch+2, nguồn96:100→98:102. Evidence featured-pagination-states.json, featured-pagination-sheet-after.tsv.

Skill checklist.md bổ sung pagination riêng cho mọi carousel/breakpoint, gồm hiện/thừa/thiếu, track/fill, phạm vi, spacing, trạng thái và thao tác; visual-checks bổ sung chờ deferred init/transition ổn định. Không QA lại toàn Homepage, không sửa theme.

---

## Recheck layout theo skill spacing mới — 2026-10-28

Đo mới localhost9301. Mobile client375: section679.796875px (khác snapshot cũ1136.80), padding56/56; Header90.390625px, gap Heading→Text12px, header→list40px. Tổng56+90.390625+40+437.40625+56=679.796875. Không min-height dư ở section. Carousel card254.90625px, media4:5/318.625px, gap12px; promo vẫn là slide đầu, vùng product-list__mobile-promos ẩn. Recheck sau reload Mobile xác nhận cùng kết quả. Figma nguồn figma-m-6.png: banner343px riêng phía trên carousel sản phẩm, carousel1 product+preview. Đây là lỗi placement/composition, không phải chiều cao độc lập; rút lỗi chiều cao1092/1136.80 cũ và hướng giảm chiều cao. Sheet35 báo placement,36 báo mẫu item; giữ lịch sử cũ bên dưới. Không coi Grid Khớp vì gap đúng khi banner vẫn chiếm slide đầu.

Desktop client1920: section1053.890625px, padding80/80, header81.796875, gap48; promo và sản phẩm cùng carousel, mỗi slide514.65625px/gap28,3 cột theo setting columns_desktop3; phần bố cục cũ không được suy tiếp là đạt. Cần đối chiếu lại geometry banner/product Desktop riêng trước kết luận toàn section. Không có overflow ngang toàn trang ở cả hai viewport. Settings show_on_top_mobile=true, promo_height_mobile433, promo_width_desktop28.125 có trong JSON nhưng runtime promo Mobile vẫn trong track; cần kiểm consumer implementation, không sửa code trong lượt recheck này.

Cập nhật qa-theme visual-checks.md + sheet-report.md: chỉ báo spacing sai đúng owner, không lặp lỗi height hệ quả; chỉ báo height độc lập khi spacing/Grid đã đúng mà còn chênh chưa giải thích. Evidence mới featured-spacing-recheck.json; Figma lịch sử figma-m-6.png. Không tuyên bố fix hoặc QA toàn Homepage.

---

## Chốt nội dung Card3 — 2026-10-28

Người dùng chấp nhận quy ước: nội dung Mobile ngoài frame/clip lấy Desktop của cùng item làm chuẩn nếu không có chỉ dẫn Mobile riêng. Card3 lấy CAVATION OUTFIT; runtime đã xác minh dùng CAVATION OUTFIT nên dòng29 Sheet chuyển Khớp, không gắn vòng fix, không sửa theme. Giữ F/G gốc để truy nguồn; H ghi quyết định chuẩn Desktop. Đã cập nhật qa-theme/references/visual-checks.md, mục Nội dung mobile nằm ngoài vùng nhìn thấy. Kết quả này thay thế trạng thái Chưa xác minh trong lịch sử bên dưới.

---

## Rich text custom range — hoàn tất lần 2 — 2026-10-28

User cho phép custom min/max/step cho theme để preset khớp Figma. blocks/heading.liquid và blocks/text.liquid: max_width320–1600/step20 →320–1320/step10 (100 khoảng,101 giá trị). Giữ min320/default640; rà cấu hình hiện có không có max_width vượt1320. Đây là range dùng chung của Heading/Text, giới hạn lựa chọn tương lai ở1320; không thay giá trị các consumer khác. Không thay global page width hoặc thêm Group/control. Rich text không có Group; đạt width bằng setting sẵn có sau chỉnh range.

Instance brands_intro trong templates/index.json và Add section preset sections/rich-text.liquid: Heading/Text max_width840→830. Desktop client1920: cả hai830px, CTA186.453px, section375.1875px, padding80/gap16. Mobile client375: Heading/Text343px, CTA178.453px, section417px, padding56/gap16; giữ layout mobile. Sheet dòng31 giữ F/G gốc830/840, thêm lịch sử custom vào H, Lần2/Khớp và bỏ highlight F/G. Đã đọc lại sau ghi. Không tuyên bố QA toàn theme; shared render/CSS không đổi, chỉ schema range +2 settings instance/preset.

Evidence: /tmp/novaire-qa-20261028/rich-custom-runtime.json, rich-custom-sheet-before/after.tsv, rich-custom-theme-check.json. Theme Check0errors/8warnings. Không commit/push/publish/Save Theme Editor.

---

## Checkpoint Collection list / Rich text lần 2 — 2026-10-28

Recheck mới desktop1920/mobile375. Collection list dòng28 Khớp theo quy ước chiều cao preview mới, không sửa code. Rich text dòng31 còn Chưa khớp do không có Group và max_width bước20 không nhận830; chưa custom. Nguồn Card3 dòng29 còn Chưa xác minh. Đã cập nhật và đọc lại Sheet. Không kiểm lại toàn Homepage; không có thay đổi shared setting cần hồi quy rộng.

---

## Checkpoint mới — giá thường / Grid mobile — 2026-10-28

Đã custom shared regular price dùng scoped var(--heading-color), recheck Desktop/Mobile và cập nhật Sheet dòng22 Collection tabs +34 Featured collection thành Lần 2 / Khớp. Các section dùng chung component tự kế thừa heading của scheme local; Video giữ giá trắng. Grid Collection tabs Mobile dòng25 Khớp theo mẫu1 card đầy đủ + preview và gap12px, áp dụng skill mới cho phạm vi Homepage. Dòng26 giữ Bỏ qua. Chi tiết và giới hạn kiểm ở homepage-collection-tabs.md, homepage-trends.md; không suy toàn Homepage/toàn theme đạt.

---

## Collection tabs Fix lần2 — 2026-10-28

Navigation đã sửa và recheck đạt, Sheet dòng24 Khớp. Màu regular-price vẫn Chưa khớp do thiếu control và ghi chú user yêu cầu báo gap implementation khi thiếu; không sửa CSS. Card width Mobile chưa chốt parent nguồn nên Chưa xác minh; chiều cao749.75px giữ Bỏ qua do user đặt. Store đã thêm1 sản phẩm Novaire có sẵn vào Midi Dresses, count6; preset/instance render5 và scheme nav riêng. [Chi tiết/receipt](homepage-collection-tabs.md). Tổng Sheet: 51 Khớp, 4 Figma làm tròn, 18 Chưa xác minh, 20 Chưa khớp.

---

## Header Fix lần 2 — 2026-10-28

Đã sửa/recheck Header Desktop/Mobile theo ghi chú Sheet mới nhất: tracking2px, Search/Cart phải, height60px Mobile; mục icon trước chưa xác minh đã đối chiếu nguồn, sửa hamburger/màu và QA đạt. Header8/8 tiêu chí trên Sheet Khớp; giữ số đo cũ để truy lịch sử, bằng chứng mới tại [hồ sơ Header](homepage-header.md). Tổng hiện tại: 50 Khớp, 4 Figma làm tròn, 18 Chưa xác minh, 21 Chưa khớp. Lượt này chỉ recheck Header và consumer scheme-header, không lặp lại audit toàn Homepage.

---

## Fix lần 1 — 2026-10-28 — hoàn tất cấu hình và recheck

18/18 tiêu chí được giao Lần 1 đã QA đạt Desktop/Mobile theo breakpoint của từng dòng. Tổng Sheet hiện tại: 46 Khớp, 4 Figma làm tròn, 24 Chưa khớp, 19 Chưa xác minh. Giữ nguyên các ô Figma/Hiện tại ban đầu để truy lịch sử; chỉ đổi trạng thái và bỏ highlight ở lỗi đã đạt.

- Đã sửa templates/index.json, sections/header-group.json, sections/footer-group.json và preset tương ứng trong Hero/Header/Shop the look/Scrolling cards/Video with products/Benefits Custom section/Footer. Không sửa Liquid implementation, CSS/JS, schema control, global settings, catalog hoặc SVG.
- Validation: mọi setting thay đổi có trong schema; enums/ranges hợp lệ. So snapshot trước mutation xác nhận chỉ presets thay đổi trong schema Liquid. Theme Check 0 errors/8 warnings (ExcessiveSettingsCount×5, OrphanedSnippet, LiquidComplexity, ValidScopedCSSClass); các cảnh báo nằm ngoài phần cấu hình vòng này. git diff --check pass.
- Preview local9301 phản ánh cấu hình mới, Hero800/550px và các typography/copy đã đo đạt. Đo và quét hồi quy đủ19 vùng Homepage ở client1920/375, thứ tự không đổi, scrollWidth=clientWidth; ảnh đầy trang và số đo đã lưu sau khi đi qua các section để load ảnh. Các consumer thay đổi chỉ trong7 vùng đã nêu, không đổi global.
- Không kết luận pixel-perfect toàn Homepage: 24 Chưa khớp và19 Chưa xác minh còn nguyên ngoài vòng được giao; hover/focus toàn bộ, SVG stroke và từng clip video chưa đầy đủ như checkpoint QA trước. Các trang ngoài Homepage không thuộc phạm vi phiên này.
- Evidence/snapshot tạm: /tmp/novaire-qa-20261028/fix1-*.json, fix1-*.png, fix1-sheet-before.tsv, fix1-sheet-prewrite.tsv; mapping chứa file/instance/setting/trước/sau. Chưa Save Theme Editor, push, publish hay commit.

### Section đã xử lý

- [Header](homepage-header.md)
- [Hero](homepage-hero.md)
- [Shop the look carousel banners](homepage-look.md)
- [Scrolling cards](homepage-scrolling-cards.md)
- [Video with products](homepage-video.md)
- [Custom section — Benefits](homepage-benefits.md)
- [Footer](homepage-footer.md)

---

## Lịch sử trước Fix lần 1

## Checkpoint QA hiện hành — 2026-10-28

Phạm vi người dùng chốt: **chỉ Homepage Desktop/Mobile**. Skill `$qa-theme`. Đã đối chiếu 19 vùng hiển thị (Announcement bar, Header, 16 section nội dung, Footer), đúng thứ tự. Hai hàng editorial hiện thuộc một instance Scrolling cards; supersede mô tả 20 vùng trong build checkpoint cũ.

Báo cáo đích: [Novaire — Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), gid 0. 93 tiêu chí A3:J95, nguồn/phạm vi A96:J100. 28 Khớp, 4 Figma làm tròn, 42 Chưa khớp, 19 Chưa xác minh. Đây là số dòng tiêu chí, không phải số section.

- Đã ghi và đọc lại đủ 98 dòng body bằng clipboard UI, không có raw HTML; giữ dữ liệu cũ do task sở hữu, không ghi vào tab khác. Dropdown single-select I3:I95 (Lần 1–Lần 5/Bỏ qua), J3:J95 (trạng thái), chip trạng thái có màu; merge nhóm, wrap/middle đã kiểm giao diện.
- Style version 5: Arial 10, header Arial 11 trắng/#1F4E78, header 2 tầng, F1:G1 gộp Nội dung, cột cha gộp dọc. Chỉ F/G của Chưa khớp highlight #D9EAD3/#F4CCCC; các ô thường nền trắng. Chi tiết tại [tracker](sheet-style-tracker.md).
- Preview draft 192827490603 đã xác minh đúng Novaire; local hiện tại http://127.0.0.1:9301/. Port 9300 đã thuộc theme khác, không dùng trong lượt này.
- Viewport Desktop 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. scrollWidth=clientWidth. Figma frames 47052:10793 (1920) và 47284:7124 (375).
- Evidence nằm `/tmp/novaire-qa-20261028/`: report.json/tsv/html, sheet-readback.tsv, figma-desktop/mobile.json, desktop/mobile-text-styles.json, runtime-final-desktop/mobile.json và ảnh nguồn/runtime theo index. Evidence tạm được giữ cho resume, không đưa vào commit.
- Đã thử Collection tabs Desktop/Mobile và xác minh sản phẩm theo panel sau khi tải; trở về BESTSELLERS. Không coi số countdown động hoặc tồn kho M Sold out là lỗi preset.
- Giới hạn: 19 dòng Chưa xác minh ghi cụ thể trong hồ sơ; chưa kiểm đầy đủ hover/focus, từng clip video, SVG stroke hoặc Theme Editor lifecycle. Không kết luận pixel-perfect hoặc release-ready. Không sửa code/config/media; không Save editor, commit/push/publish.

### Manifest và hồ sơ section

| STT | Section | Instance / type | Desktop node | Mobile node | Sheet |
| --- | --- | --- | --- | --- | --- |
| 1 | [Announcement bar](homepage-announcement-bar.md) | `header-group/announcement-bar` / `announcement-bar` | 47219:4126 | 47301:19030 | A6:J7 |
| 2 | [Header](homepage-header.md) | `header-group/header` / `header` | 47052:11672 | 47301:19008 | A8:J15 |
| 3 | [Hero](homepage-hero.md) | `index/hero` / `hero` | 47052:10820 | 47284:7125 | A16:J20 |
| 4 | [Collection tabs](homepage-collection-tabs.md) | `index/collection_tabs` / `collection-tabs` | 47054:15484 | 47284:7133 | A21:J26 |
| 5 | [Collection list](homepage-categories.md) | `index/categories` / `collection-list` | 47052:10843 | 47284:7151 | A27:J29 |
| 6 | [Rich text](homepage-brands-intro.md) | `index/brands_intro` / `rich-text` | 47056:14774 | 47284:7172 | A30:J32 |
| 7 | [Featured collection](homepage-trends.md) | `index/featured_collection` / `featured-collection` | 47064:14900 | 47284:7179 | A33:J36 |
| 8 | [Image cards](homepage-image-cards.md) | `index/new_collections` / `image-cards` | 47052:10949 | 47284:7201 | A37:J40 |
| 9 | [Countdown](homepage-countdown.md) | `index/spring_sale` / `countdown` | 47054:14590 | 47284:7218 | A41:J44 |
| 10 | [Shop the look carousel banners](homepage-look.md) | `index/statement_stacks` / `shop-the-look-carousel-banners` | 47054:14925 | 47284:7243 | A45:J50 |
| 11 | [Custom section — Marquee](homepage-marquee.md) | `index/values_marquee` / `custom-section` | 47054:15679 | 47284:7253 | A51:J56 |
| 12 | [Scrolling cards](homepage-scrolling-cards.md) | `index/scrolling_cards` / `scrolling-cards` | 47054:15160 | 47284:7259 | A57:J60 |
| 13 | [Video with products](homepage-video.md) | `index/founder_testimonials` / `video-with-products` | 47064:15176 | 47284:7284 | A61:J65 |
| 14 | [Featured product](homepage-featured-product.md) | `index/featured_product` / `featured-product` | 47054:14719 | 47284:7315 | A66:J70 |
| 15 | [Custom section — Press logos](homepage-press.md) | `index/press_logos` / `custom-section` | 47054:14801 | 47284:7364 | A71:J73 |
| 16 | [Blog posts](homepage-blog.md) | `index/articles` / `blog-posts` | 47052:14436 | 47284:7374 | A74:J77 |
| 17 | [Gallery carousel](homepage-gallery.md) | `index/instagram` / `gallery-carousel` | 47052:11030 | 47284:7401 | A78:J82 |
| 18 | [Custom section — Benefits](homepage-benefits.md) | `index/benefits` / `custom-section` | 47052:14503 | 47284:7415 | A83:J85 |
| 19 | [Footer](homepage-footer.md) | `footer-group/footer` / `footer` | 47078:16485 | 47301:19036 | A86:J95 |

### Recheck Desktop Width / Padding sau cập nhật code — 2026-10-28

Đo live client1920/scroll1920, --page-width1600px. assets/critical.css container.page-width dùng max-width calc(var(--page-width) + var(--page-margin-current) * 2), border-box:1696 =1600+48×2. Collection tabs/Shop the look/Blog/Footer có content1600, inset160; Blog card514.65625px so với Figma514.67px. Chuyển dòng5,23,49,75,91 sang Khớp; dòng5 chỉ kết luận page width/box model. Gallery full-width vẫn inset48px so với20px nguồn, không gộp lỗi này vào page width chung. Rich text Group riêng chưa được kết luận đạt; các lỗi Mobile giữ kết quả trước, chưa recheck trong lượt này. Không sửa theme. Evidence mới: /tmp/novaire-qa-20261028/desktop-width-recheck.json; Sheet đã đọc lại đủ98 dòng. Giữ các cờ fix live của người dùng.

Quy tắc link # Pass, policy hướng $setup-store, token giá và icon Lần1 từ lượt trước vẫn áp dụng; I93=Bỏ qua được giữ.

### Tiếp tục sau QA

Chỉ sửa khi được giao tác vụ fix riêng. Dùng các hướng xử lý đã ghi; các mục chưa xác minh cần chốt nguồn/constraint trước khi gắn vòng fix. Mọi recheck cập nhật cùng hồ sơ section và Sheet, giữ lịch sử.

---

## Lịch sử trước lượt QA hiện hành

# Check perfect — Homepage Novaire

Ngày khởi tạo: 2026-10-26. Phạm vi: homepage. Trạng thái QA: đã kiểm chứng build một phần desktop/mobile; chưa hoàn tất pixel QA. Skill tiếp tục: `$qa-theme-pixel-perfect`.

## Định dạng báo cáo Google Sheet

STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái

Header hai tầng: Nội dung gộp ngang trên Figma và Hiện tại; các header còn lại gộp dọc.

Source: `agents-build-themes/skills/qa/qa-theme-pixel-perfect/assets/sheet-style.json`, version 5, working-default. Columns/width px: STT=56, Section=141, Thiết bị=151, Thành phần=191, Tiêu chí=221, Figma=300, Hiện tại=300, Hướng xử lý=301, Lần fix=100, Trạng thái=140. Arial 10; header Arial 11 bold, #FFFFFF/#1F4E78; two header rows, F1:G1 merged, remaining header columns vertically merged. Wrap/middle, header centered. Lần fix and Trạng thái use single-selection colored dropdown chips; cell backgrounds remain white. Mismatch Figma #D9EAD3/current #F4CCCC. Sources at bottom. No Sheet supplied or modified. API workflow: `references/sheet-api-workflow.md` in same skill; apply current style only when an authorized Sheet is supplied.

Các section nối liền nhau sau STT 0 — Tổng quan. Chung (Desktop, Mobile) trước Desktop rồi Mobile. Gộp STT/Section theo instance, Thiết bị theo breakpoint, Thành phần theo tiêu chí; không gộp nội dung/trạng thái/hướng xử lý. Wrap, mọi ô middle, header center/middle. Trạng thái và Lần fix là dropdown chip có màu; nền ô thường trắng. Mỗi thuộc tính một hàng so sánh, không list nhiều mục trong một ô. Thuộc tính khác đã xác minh: Figma highlight xanh, Hiện tại đỏ; trùng nhau không highlight. Hướng xử lý sát sau Nội dung, tương ứng thuộc tính cùng hàng; kế tiếp Lần fix rồi Trạng thái. Lần fix dùng Lần 1–Lần 5/Bỏ qua; QA đầu đã có hướng xử lý preset hoặc config/settings_data.json được xác minh thì tự gắn Lần 1, vẫn Chưa khớp đến khi fix + QA đạt. Ưu tiên preset/settings, chỉ custom khi đã xác minh preset không đáp ứng. Nguồn và phạm vi nằm cuối bảng. Markdown giữ chi tiết và đồng bộ với Sheet sau mỗi bước.

Ưu tiên API Google Sheets cho đọc/ghi/định dạng/merge/dropdown; Computer Use dùng kiểm tra giao diện hoặc phần API không hỗ trợ khi đã được phép. Áp mẫu style hiện hành ngay bước0 trên tab mới/trống đã được giao; giữ dữ liệu live của tab hiện có. Mẫu và workflow lấy từ qa-theme-pixel-perfect/assets/sheet-style.json và references/sheet-api-workflow.md; ghi version trong snapshot trên.

## Hồ sơ QA theo section

Tổng quan này giữ nguồn, manifest/order, điều kiện đo, style Sheet và checkpoint chung. Khi bắt đầu kiểm mỗi section, tạo hoặc cập nhật `docs/qa/homepage-<section>.md`, thêm link vào mục lục ở đây. Mỗi section một file ổn định; kết quả mới nhất ở đầu, mọi lượt QA/recheck/Fix lần N có ngày và bằng chứng nằm trong lịch sử cùng file. Không tạo file báo cáo mới theo ngày/vòng. Theo contract `qa-section/references/qa-report-files.md`; chưa kiểm thì không tạo kết quả giả.

## Current build verification — 2026-10-27

Latest source of truth: [init checkpoint](../theme-init/novaire-theme.md#checkpoint). Desktop1920×1080; mobile375×812 with360px content after scrollbar. Both have scrollWidth=clientWidth. Store resources and local schema checks passed; allfour remote composition/settings files read back equal apart from empty optional values. No full pixel QA, Theme Editor lifecycle or cloud Sheet pass is claimed. Historical checkpoints below remain for traceability and are superseded by this entry.

Overview:20 rendered regions (announcement + header +17 homepage instances + footer); the original19-region survey grouped the two editorial rows together. Saved order agrees with the configured map. Desktop client/scroll width1905/1905; mobile360/360. Geometry includes hero600, gallery477, benefits260, press169, Footer759px mobile; these are build observations, not pixel-match claims. Final gallery schema/homepage readback matches local; final Theme Check0errors/5inherited warnings. Viewport override reset before handoff.

Stable section reports:

- [header](homepage-header.md)
- [hero](homepage-hero.md)
- [collection-tabs](homepage-collection-tabs.md)
- [trends](homepage-trends.md)
- [Look](homepage-look.md)
- [our-story](homepage-our-story.md)
- [our-value](homepage-our-value.md)
- [marquee](homepage-marquee.md)
- [countdown](homepage-countdown.md)
- [video](homepage-video.md)
- [featured-product](homepage-featured-product.md)
- [gallery](homepage-gallery.md)
- [benefits](homepage-benefits.md)
- [footer](homepage-footer.md)

## Kết quả QA

Đã có kiểm chứng build trên storefront. Chưa chạy đầy đủ bảng pixel QA; không đánh dấu toàn homepage Khớp. Các mục đã quan sát nằm trong file section bên dưới.

## Checkpoint

Fork 246d7322aa61a6023a4178b2605740f01b9eeb6b; snapshot verified; local preview changes carried. Full 19-region desktop/mobile survey recorded in init plan; detailed child geometry/media and storefront comparison pending. Theme Check zero errors/five inherited warnings; preview tests 8/8; check-custom covers 173 files. No storefront preview or pixel QA completed.

### Rút gọn kết quả đã khớp trong section

Chỉ áp dụng cho section chi tiết, không áp dụng STT 0 Tổng quan page/theme: Tổng quan vẫn giữ từng dòng Số lượng section, Thứ tự section, Width / Padding như hiện tại. Trong mỗi section/breakpoint, gom các thành phần đã khớp hoàn toàn vào một dòng **Đã kiểm và khớp**, chỉ nêu tên, không lặp thông số. Ví dụ Heading đạt toàn bộ thì ghi Heading trong dòng này, không tạo các dòng Content/Typo/Màu riêng. Với thành phần có sai lệch, ví dụ Button chỉ sai màu, chỉ tách hàng Button · Màu với Figma/Hiện tại và hướng xử lý tương ứng; không liệt kê lại các thuộc tính Button đã khớp. Các thuộc tính còn lại đã kiểm có thể được xác nhận gọn trong dòng tổng hợp, không làm mất mục chưa xác minh. Mỗi sai lệch hoặc mục chưa xác minh là một hàng riêng; checklist và số đo đầy đủ giữ trong Markdown. Dòng xác nhận khớp có thể gộp ngang Figma/Hiện tại, không highlight so sánh.

## Phạm vi và nguồn

- Theme/worktree: `theme/novaire-theme` — `/Users/beae/Documents/GitHub/Layouthub v2/novaire-theme`
- Phạm vi: chỉ homepage.
- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-10793
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7124
- Style Guide: inherited from Malandra at 246d7322aa61a6023a4178b2605740f01b9eeb6b
- Preview: https://layouthub-template-v2.myshopify.com?preview_theme_id=192827490603 ; local http://127.0.0.1:9300 ; unpublished draft.
- Sheet QA/tab/gid: Chưa được cung cấp.

## Local build checkpoint

Header/announcement, brands intro, countdown content, benefits copy and Footer newsletter configured locally. This is build work, not completed pixel QA. Theme Check zero errors/five inherited warnings; all modified Liquid files are schema-only. Preview not deployed. Media export blocked by browser connection disabled again. Temporary Figma copy roots and cleanup ownership are recorded in `../theme-init/novaire-theme.md`.

## Latest init checkpoint — 2026-10-26

Header logo and single-slide hero configured locally; original SVG and two AVIF backgrounds read back READY. Local JSON/schema/range and preset-only scope passed; Theme Check386 files/0 errors/5 inherited warnings; diff check passed. No visual QA pass claimed. Header menu/action/catalog pending; hero mobile height600px vs Figma550px remains50px gap. Latest local configuration has not been verified deployed to draft192827490603. Detailed resources and invalid-download warning: [media ledger](../theme-init/novaire-media.md). Temporary copy roots10017:1613/10017:2513 retained for unfinished extraction.
## Press logos — Fix lần 1 — 2026-10-28

Đã sửa sáu logo Mobile170×85→160×80px trong instance `press_logos` và preset `Text marquee (custom)` của Custom section. Recheck client375: cả6 ảnh160×80px; Desktop client1920 giữ185×92,5px; không overflow ngang. Sheet live STT15 hiệnA92:J94: H94:J94 đã đọc lại Lần1/Khớp, F/G giữ lịch sử và bỏ highlight. Dòng93 Marquee Bỏ qua/Chưa khớp giữ nguyên. Theme Check0 error/8 warning; chi tiết tại [Press logos](homepage-press.md).
