# 02. Header — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 2 | Header | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Chiều cao; nền; separator; padding; icon; vị trí logo. Menu: weight/tracking; flag và các gap actions (Desktop). Menu–logo và controls (Mobile). |  |  |  | Khớp |
| 2 | Header | Chung (Desktop, Mobile) | Logo | Chiều rộng | 89px | 88px | Preset logo width đang theo bước 4px: 88px gần nhất. Nếu cần đúng 89px, custom scoped sau khi chốt preset. |  | Chưa khớp |
| 2 | Header | Desktop | Menu / Localization | Font family | Roboto | Roboto Condensed | Preset font Menu và Localization: chọn Body/Roboto; giữ weight 500. |  | Chưa khớp |
| 2 | Header | Desktop | Localization | Letter spacing | −0.2px | 2px | Không có preset tracking riêng; custom scoped −0.2px, bỏ kế thừa tracking Eyebrow 2px. |  | Chưa khớp |


## Lịch sử — header-figma-2026-10-22.md

### QA Header — Homepage Kinetra — 22/10/2026

STT2, sau Announcement bar và trước Hero STT3. Kết luận: Chưa khớp; 11 mục sai lệch, 1 mục chưa xác minh, 1 dòng xác nhận khớp. Không sửa theme/config, không Save Editor hoặc push. Báo cáo hiện hành đồng bộ Sheet hàng9–21.

### Nguồn và cách kiểm

Figma file yTXlAfT0miBGgRuuYM4OMp, đúng Header Desktop/Mobile trong homepage1920px/375px. Desktop Header instance được chọn48622:16469. MCP get_metadata báo thiếu edit access; dùng CUA/Chrome, Properties và layer tree. Không dùng kết quả audit Header Virelle cũ làm bằng chứng cho Kinetra. Logo mới đọc89×20px, không lấy82×20px của tài liệu Virelle.

Preview http://127.0.0.1:9300/: desktop viewport1920, content client1905 (scrollbar15), DPR1. Mobile đã đo viewport375/client360 trước, sau đó viewport390/client375 để đối chiếu vùng nội dung375px. Số đo trong báo cáo lấy mẫu client375; đây là viewport trình duyệt hẹp với scrollbar, không tuyên bố iPhone/device emulation hoặc DPR2. Header dùng các breakpoint768/992; các mẫu đều trong cùng breakpoint Mobile. Đã reset override viewport. Font loaded trước khi đo. Các screenshot/JSON giữ viewport thật; không báo scrollbar15px thành lỗi width.

### Checklist và đối chiếu hiện hành

| Thiết bị | Thành phần | Tiêu chí | Figma / xác nhận | Hiện tại | Hướng xử lý | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Xác nhận | Đủ thành phần, đúng hình logo; nền; icon 24px và thứ tự; padding dọc; nội dung/font/size/line-height/case/màu menu và gap menu (Desktop); Account/Localization ẩn, menu mở/đóng được (Mobile). |  |  | Khớp |
| Chung (Desktop, Mobile) | Logo | Chiều rộng | 89px | 88px | Preset Logo width bước 4px không có 89px; custom scoped Logo width 89px cho cả hai, giữ đúng tỷ lệ ảnh. | Chưa khớp |
| Chung (Desktop, Mobile) | Tổng quan layout | Chiều cao | Desktop 72px / Mobile 64px | Desktop 85px / Mobile 69px | Preset padding dọc đã đúng. Custom min-height control Header 44/40px, giữ 14/12px padding; separator vẽ trong khung, không đổi Button toàn theme. | Chưa khớp |
| Chung (Desktop, Mobile) | Layout | Padding ngang (content) | Desktop 50px / Mobile 16px | Desktop 100px / Mobile 32px | Preset Full width đã chọn. Custom bỏ width calc trừ thêm margin ở header__container; dùng width 100%, giữ padding 50/16px. | Chưa khớp |
| Chung (Desktop, Mobile) | Section | Độ dày viền dưới | 0.5px, #CCCCCC | Computed 1px, #CCCCCC (DPR 1) |  | Chưa xác minh |
| Desktop | Menu / Localization | Font weight | 500 | 400 | Không có preset weight riêng; custom scoped 500 cho menu và localization; giữ Roboto, không đổi Body toàn theme. | Chưa khớp |
| Desktop | Menu | Letter spacing | -0.2px | 0px (normal) | Preset Menu → Letter spacing = Tight (-0.2px). | Chưa khớp |
| Desktop | Localization | Letter spacing | -0.2px | 0.1px | Không có preset tracking riêng cho Localization; custom scoped -0.2px. | Chưa khớp |
| Desktop | Layout | Gap (Flag → Country text) | 8px | 2.5px | Không có preset gap con; custom scoped header-localization__country gap 8px. | Chưa khớp |
| Desktop | Layout | Gap (các control icon) | 6px; wrapper 44px | 0px; wrapper 48px | Preset Actions gap hiện đổi padding control, không tạo gap nhóm. Custom nhóm icon gap 6px và padding control 10px. | Chưa khớp |
| Desktop | Layout | Gap (Localization → nhóm icon) | 24px | 0px giữa block | Không có preset tách gap ngoài/trong; custom nhóm actions: gap ngoài 24px, giữ gap icon riêng 6px. | Chưa khớp |
| Mobile | Layout | Gap (Menu icon → Logo) | 16px | 24px | Preset Header top → Gap mobile = 8px để gap thực giữa icon và logo còn 16px; giữ icon 24px. | Chưa khớp |
| Mobile | Layout | Margin control ở mép | 0px | -8px (Menu / Cart) | Không có preset margin control; custom bỏ margin âm của Menu/Cart, phối hợp padding content và gap đã ghi. | Chưa khớp |

### Chi tiết từ trong ra ngoài

Menu: Home, Shop, Collections, Pages đều đã đọc Properties: Roboto Medium500,14px/150%=21px, tracking−0.2px, uppercase,#181818. Theme bốn nhãn cùng Roboto400,14/21px, tracking normal(0), uppercase,#181818. Nội dung/font family/size/leading/case/color khớp; weight/tracking chưa khớp. Không tạo dòng kích thước chữ vì typo còn sai. Localization cũng Roboto500/14/21/−0.2 trong Figma, hiện400/14/21/+0.1; cờ US16×12px đúng, gap cờ/chữ Figma token2=8px, hiện2.5px. Schema Menu có Letter spacing Tight, mapping snippets/css-variables.liquid −0.2px; Localization không có tracking/gap riêng. Weight riêng không có preset, không đề xuất đổi Body toàn theme.

Desktop icon group: Figma Frame58883 rộng144px =3×44 +2×6; mỗi wrapper44×44, padding token2.5=10px, icon24px. Actions outer gap token6=24px; Menu gap token10=40px. Theme icons24px đúng, mỗi control48×56 do padding12 mỗi cạnh và min-height56; cột phải gap0. Setting Actions gap24 đang map thành padding12, không tạo hai tầng gap24/6 theo Figma. Cần xét cả wrapper/nhóm, không sửa preset thành một giá trị để bù mọi khoảng cách. Tên/loại icon đối chiếu hình và khung; chưa tuyên bố byte/path SVG khớp tuyệt đối.

Mobile Figma: container343px =247px Menu +16px gap +80px Actions; nhóm menu/logo145px =padding8×2 +icon24 +gap16 +logo89. Hai action wrapper40×40, padding8, icon24, không gap nội bộ. Theme tại client375: outer container343px có margin16 và padding16 thêm lần nữa, inner row311px bắt đầu x32. Logo88px tại x80; menu icon24 tại x32; search/cart icon24 tại x279/x319. Left gap16 giữa control40 và logo tạo gap glyph24, so với Figma16. Preset Gap mobile8 tạo gap glyph16; phối hợp bỏ margin âm Menu/Cart và bỏ width calc trừ margin để không bù sai giữa các lớp. Mobile Account và Localization ẩn theo thiết kế, menu/logo bên trái và search/cart bên phải đúng thứ tự. Menu Mobile đã mở/đóng được, aria-expanded/dialog thay đổi; không coi đây là chứng minh style drawer khớp Figma.

Logo: source89×20px cả hai, ảnh theme kinetra-logo-dark.avif đúng hình nhưng88×19.796875px. Config logo_width/logo_width_mobile đều bước4;89 không hợp lệ qua preset nên gợi ý custom scoped width89 giữ tỷ lệ, không ép riêng width/height khác tỷ lệ. Chỉ ghi một lỗi width vì height co theo cùng nguyên nhân.

Container ngang: Figma Desktop Menu833.5 +Logo89 +Actions833.5 +2×gap32 =1820px, inset50 trên frame1920; Mobile343 inset16 trên375. Theme sections/header.liquid đặt header__container width calc(100%−100px)/(100%−32px), còn .container.full-width trong critical.css vẫn padding50/16. Desktop client1905: outer1805 ở x50, inner1705 ở x100. Mobile client375: outer343 ở x16, inner311 ở x32. Đây là khoảng đệm trùng, khác chênh lệch scrollbar. Full width đã chọn; gợi ý scoped width100% thay calc, giữ padding đúng, không đổi page margin toàn theme.

Khung: Figma Desktop72px, container44; Mobile64px, container40 và padding12/12. Theme Desktop85 =56+14+14+1; Mobile69 =44+12+12+1. Computed --button-height56px và --button-height-mobile44px; menu/localization/actions dùng min-height token này. blocks/_header-top.liquid, _header-menu.liquid, _header-localization.liquid và critical.css chứa các consumer. Không giảm padding đúng để bù; custom constraint riêng Header44/40 và xử lý separator bên trong khung, không đổi Button Primary toàn theme. CSSOM của stylesheet ngoại miền không đọc được trong phép kiểm rule; không gán một selector thắng cascade chỉ từ thứ tự file local. Kết luận constraint dựa trên computed min-height/box và token thực.

Viền: Figma stroke bottom0.5px,#CCCCCC, inner; theme computed1px,#CCCCCC tại DPR1. Source có cả rule border1px ở block và0.5px ở section; chưa phân biệt rule runtime thắng với lượng tử hóa border tại DPR1. Vì vậy chỉ Chưa xác minh, không gán Browser render không khớp, không đề xuất sửa thickness trước khi kiểm rule thắng/DPR2. Cùng phép xác minh và dữ liệu hai thiết bị nên chỉ một dòng Chung. Border này còn thấy trên nền trắng, khác quy ước border Announcement bar trùng nền.

### Phạm vi và evidence

Kiểm default Header trên homepage; thao tác menu Mobile chỉ kiểm mở/đóng. Không có thiết kế hover/drawer/search/account/cart overlay trong hai frame homepage để chứng nhận style các overlay; không tạo hàng placeholder hoặc gọi Header release-ready. Cart badge3 do trạng thái cart hiện tại, không quy thiếu/thừa theo thiết kế cart rỗng. Chưa thay đổi giỏ hàng hay truy cập tài khoản.

- output/qa/header-figma-properties.json: Properties đã đọc theo thành phần; desktopAllMenuTexts có Country ở phần tử cuối do cây Pages chưa mở, được bổ sung riêng bằng desktopPages.
- output/qa/header-figma-desktop.png và header-figma-mobile.png: canvas/Properties.
- output/qa/header-preview-desktop.json, header-constraints.json: computed Desktop.
- output/qa/header-preview-mobile-375-content.json: mẫu Mobile client375 dùng đối chiếu; header-preview-mobile.json là mẫu client360 ban đầu.
- output/qa/header-preview-desktop.png, header-preview-mobile.png: render.
- output/qa/header-mobile-menu-open.txt: trạng thái menu mở; đã xác nhận đóng lại.
- output/qa/header-report-rows.json và sheet-style-v3-data.json: dữ liệu xuất hiện hành.

### Nguồn cuối báo cáo

[Figma Desktop Homepage](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48190-2177) · [Figma Mobile Homepage](https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48249-14513) · [Preview](http://127.0.0.1:9300/)


## Lịch sử — header-hero-rerun-2026-10-22.md

### Header

Desktop root1920×72px, padding14px trên/dưới; container padding ngang50px và inner1820px. Controls44px, Search x1726/Account1776/Cart1826 => gap6px; Localization kết thúc x1702 => Search cách24px. Flag/text gap8px. Separator inset0.5px #CCC, không tăng chiều cao.

Mobile root375×64px, padding12px trên/dưới, content343px và padding ngang16px; logo x64. Các control, alignment và khoảng cách đã khớp được giữ trong dòng tổng hợp. Logo cả hai88×19.80px so với Figma89×20px vẫn chưa khớp.

Bốn menu Home/Shop/Collections/Pages đều Roboto Condensed500 14px/21px, tracking−0.2px. Figma Roboto50014px/21px/−0.2px: font family vẫn sai, không báo thêm kích thước chữ do font sai. Localization Desktop cũng Roboto Condensed thay Roboto, tracking+0.1px thay−0.2px. Ba dòng chưa khớp của Header giữ nguyên: Logo width, Menu/Localization family, Localization tracking. Hướng xử lý preset Body/Roboto; tracking riêng Localization không có preset nên custom scoped khi cần. Không sửa global để bù.


## Lịch sử — hero-height-calibration-2026-10-22.md

### Header padding follow-up — verified preview

Preset and homepage now place desktop bottom80px on Header itself (left/right80px, top0); stack container bottom is0 to avoid doubling. Mobile Header padding stays0 while container owns48px vertical/16px horizontal padding. Fresh preview has now received these settings, superseding the earlier stale-preview limitation. At1920px content viewport: equal960px columns, Hero800px, Header computed padding0 80px 80px. At375px: media375px, content294.3125px, total669.3125px (about1.3px taller than Figma668px). Screenshot: /tmp/kinetra-hero-header-padding-desktop.png. This is preset/template configuration only.


## Lịch sử — recheck-three-sections-2026-10-22.md

### 2. Header

Desktop 72px = 44px control + 14px × 2; content 1820px, padding 50px mỗi bên ở khung 1920px. Mobile 64px = 40px + 12px × 2, content 343px và padding ngang 16px tại client 375px. Separator là inset shadow 0.5px #CCC, border CSS 0: không còn lỗi computed border 1px/chưa xác minh cũ.

Khoảng cách thực tế đã được sửa bằng margin/scoping: icon controls Desktop 44px, gap 6px và Localization → Search 24px; không kết luận gap sai chỉ vì computed gap của parent bằng 0. Mobile Menu wrapper x16, glyph x24; Logo x64 nên glyph → Logo 16px, Search wrapper x279, Cart x319. Margin mép không còn âm.

Còn lệch: Logo 88 × 19.80px so với 89 × 20px. Preset logo width bước 4px: 88px là gần nhất; custom 89px chỉ sau khi chốt preset. Menu và Localization Desktop đã đúng weight 500 nhưng đang dùng Roboto Condensed, cần preset Body/Roboto. Menu tracking đã đúng −0.2px. Localization vẫn +0.1px; source `blocks/_header-localization.liquid` có font/font_size nhưng không có tracking preset, vì vậy gợi ý custom scoped −0.2px, không đổi global tracking.


## Lịch sử — header-hero-2026-10-23.md

### Header

Desktop root1920×72, padding14px dọc, content1820 và padding ngang50. Mobile root375×64, content343 và padding ngang16, padding dọc12. Border inset0.5px, không tăng khung. Logo88×19.80 ở Desktop x916 và Mobile x64; Figma89×20, còn lệch width.

Home/Shop/Collections/Pages đồng bộ Roboto Condensed50014px/21px, tracking−0.2px. Figma Roboto; giữ lỗi font family, không báo lỗi text width phụ thuộc font sai. Localization Desktop cùng family sai, nhưng tracking hiện **2px**, thay cho0.1px của lần trước. Source `blocks/_header-localization.liquid` dùng `--font-eyebrow-letter-spacing` (line185); không có tracking preset riêng. Gợi ý font Body/Roboto ở dòng family; tracking cần custom scoped−0.2px, không đổi token Eyebrow toàn theme.

Controls Desktop44px, Search1726/Account1776/Cart1826 =>gap6px; Localization kết thúc1702 nên gap ngoài24px. Mobile controls40px, Menu/Logo và các inset giữ khớp. Những phần khớp chỉ giữ dòng tổng hợp.

**Kết luận Header:3 mục Chưa khớp** (logo width; menu/localization family; localization tracking). Không có lỗi geometry mới.


## Lịch sử — search-overlay-2026-10-23.md

### Change

Both themes replace the unstyled compact submit icon with the existing `theme-button` submit control. The search input uses the shared form primitive; a three-column grid keeps the input, Search button, and close button within the available width. The implementation follows Malandra's search form and preserves each theme's existing search controller, section settings, and predictive-search behavior.

Changed production files:

- `kinetra-theme/sections/search-overlay.liquid`
- `virelle-theme/sections/search-overlay.liquid`

### Validation

- Both themes: 13 existing search history, suggestions, and search page tests passed.
- Both themes: 6 form layout checks passed, covering solid and outline settings at 375, 878, and 1440px.
- Both themes: runtime browser checks passed at 375 and 1440px. Verified input focus on opening, ordered controls without horizontal overflow, mocked predictive suggestions, switching collection/product panels, Escape with focus restoration and query reset, X dismissal, backdrop dismissal, and reopening after Theme Editor section replacement. No page JavaScript errors occurred.
- Both themes: schema JSON parsed successfully; `git diff --check` passed.
- Full Theme Check with `--fail-level error`: zero errors; Kinetra had 9 warnings and Virelle had 8 warnings. None concerned `search-overlay.liquid`. Warning categories were ExcessiveSettingsCount and LiquidComplexity, plus OrphanedSnippet in Kinetra.
- The AI Toolkit validator could not run because its installed package lacked `@shopify/theme-check-common`; Shopify CLI Theme Check supplied validation instead.

### Evidence and limits

Kinetra's running storefront preview was visually checked during the first pass: desktop/mobile opening, real predictive results, and Escape dismissal. Its mobile screenshot is `output/qa/search-overlay-mobile-2026-10-23.png`.

During the follow-up both local preview services were stopped. Additional runtime checks therefore used a local browser fixture with the themes' actual section CSS and JavaScript and shared overlay implementation. Liquid labels, button markup, header context, and predictive data were simulated. This verifies local interaction behavior, not a live Shopify Theme Editor session or Virelle storefront rendering.

The follow-up harness and screenshots are retained in ignored `output/qa/search-overlay/`. No theme was published, and no commit or push was performed.


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 2 | Header | `header` trong header group |

### STT 2 — Header

Đã QA default Header Desktop/Mobile ngày22/10/2026. Còn11 mục sai lệch,1 Chưa xác minh,1 xác nhận khớp. Dùng nhóm Chung cho lỗi sửa chung, điểm đạt và độ dày border cùng câu hỏi xác minh; các phần riêng gắn Desktop/Mobile. Sheet9–21. Chi tiết, giới hạn và bằng chứng: [header-figma-2026-10-22.md](homepage-header.md).

| Thiết bị | Thành phần | Tiêu chí | Figma / xác nhận | Hiện tại | Hướng xử lý | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Xác nhận | Đủ thành phần, đúng hình logo; nền; icon 24px và thứ tự; padding dọc; nội dung/font/size/line-height/case/màu menu và gap menu (Desktop); Account/Localization ẩn, menu mở/đóng được (Mobile). |  |  | Khớp |
| Chung (Desktop, Mobile) | Logo | Chiều rộng | 89px | 88px | Preset Logo width bước 4px không có 89px; custom scoped Logo width 89px cho cả hai, giữ đúng tỷ lệ ảnh. | Chưa khớp |
| Chung (Desktop, Mobile) | Tổng quan layout | Chiều cao | Desktop 72px / Mobile 64px | Desktop 85px / Mobile 69px | Preset padding dọc đã đúng. Custom min-height control Header 44/40px, giữ 14/12px padding; separator vẽ trong khung, không đổi Button toàn theme. | Chưa khớp |
| Chung (Desktop, Mobile) | Layout | Padding ngang (content) | Desktop 50px / Mobile 16px | Desktop 100px / Mobile 32px | Preset Full width đã chọn. Custom bỏ width calc trừ thêm margin ở header__container; dùng width 100%, giữ padding 50/16px. | Chưa khớp |
| Chung (Desktop, Mobile) | Section | Độ dày viền dưới | 0.5px, #CCCCCC | Computed 1px, #CCCCCC (DPR 1) |  | Chưa xác minh |
| Desktop | Menu / Localization | Font weight | 500 | 400 | Không có preset weight riêng; custom scoped 500 cho menu và localization; giữ Roboto, không đổi Body toàn theme. | Chưa khớp |
| Desktop | Menu | Letter spacing | -0.2px | 0px (normal) | Preset Menu → Letter spacing = Tight (-0.2px). | Chưa khớp |
| Desktop | Localization | Letter spacing | -0.2px | 0.1px | Không có preset tracking riêng cho Localization; custom scoped -0.2px. | Chưa khớp |
| Desktop | Layout | Gap (Flag → Country text) | 8px | 2.5px | Không có preset gap con; custom scoped header-localization__country gap 8px. | Chưa khớp |
| Desktop | Layout | Gap (các control icon) | 6px; wrapper 44px | 0px; wrapper 48px | Preset Actions gap hiện đổi padding control, không tạo gap nhóm. Custom nhóm icon gap 6px và padding control 10px. | Chưa khớp |
| Desktop | Layout | Gap (Localization → nhóm icon) | 24px | 0px giữa block | Không có preset tách gap ngoài/trong; custom nhóm actions: gap ngoài 24px, giữ gap icon riêng 6px. | Chưa khớp |
| Mobile | Layout | Gap (Menu icon → Logo) | 16px | 24px | Preset Header top → Gap mobile = 8px để gap thực giữa icon và logo còn 16px; giữ icon 24px. | Chưa khớp |
| Mobile | Layout | Margin control ở mép | 0px | -8px (Menu / Cart) | Không có preset margin control; custom bỏ margin âm của Menu/Cart, phối hợp padding content và gap đã ghi. | Chưa khớp |

### Checkpoint hiện hành sau Header và hướng dẫn mới

Thứ tự báo cáo:0 Tổng quan,1 Announcement bar,2 Header,3 Hero. Header vừa QA; Hero giữ số đo lịch sử, chỉ cập nhật cách trình bày/quy ước. Button SHOP NOW có button_style=primary trong templates/index.json và btn--primary trong bằng chứng DOM: rút lỗi line-height14/21 và hướng custom1.5, đánh giá khung56/44px đã khớp. Không miễn min-height của control icon Header.

Cùng điểm chưa xác minh ở cả hai thiết bị ghi một lần Chung: Header border và Hero Eyebrow width. Không bịa nguyên nhân hoặc hướng sửa. Tổng quan3–5, Announcement bar6–8, Header9–21, Hero22–33, nguồn34–37; dropdown I3:I33. Các vị trí/cách phân nhóm trong mốc cũ phía trên là lịch sử. Bảng chuẩn hiện hành: [sheet-current-homepage.md](homepage-qa.md).
