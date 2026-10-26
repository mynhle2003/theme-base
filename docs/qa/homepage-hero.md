# 03. Hero — QA Homepage Kinetra

Tổng hợp tài liệu đã có đến 26/10/2026. Đây là sắp xếp hồ sơ, không phải lượt QA mới. Các kết quả có ngày cũ được giữ để truy vết; kết quả cùng tiêu chí ở lần kiểm tra mới hơn có ưu tiên.

[Tổng quan, nguồn và giới hạn QA chung](homepage-qa.md).

## Snapshot Sheet — 26/10/2026

| STT | Section | Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại (gốc) | Hướng xử lý | Lần fix | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|
| 3 | Hero | Chung (Desktop, Mobile) | Đã kiểm và khớp | Các phần đã khớp | Ảnh; nền; Eyebrow style/icon; Button style/padding/chiều cao; gap nội dung. Heading, vị trí marquee, marquee icon và căn phải/width/padding (Desktop). Ảnh 375px, padding/căn giữa, ẩn marquee (Mobile). |  |  |  | Khớp |
| 3 | Hero | Chung (Desktop, Mobile) | Eyebrow | Chiều rộng text sau khi typography khớp | 148px | 149.11px | Không cần sửa; typography khớp, suy luận chênh nhẹ do làm tròn/metrics. |  | Figma làm tròn |
| 3 | Hero | Desktop | Marquee | Chiều rộng text đại diện | Active Essentials: 549px | 547.34px | Không cần sửa; typography khớp, suy luận chênh nhẹ do làm tròn/metrics. |  | Figma làm tròn |
| 3 | Hero | Desktop | Marquee | Chiều cao text đại diện | 82px | 81.59px | Không cần sửa: 68 × 120% = 81.6px; Figma hiển thị làm tròn 82px. |  | Figma làm tròn |


## Lịch sử — header-hero-rerun-2026-10-22.md

### Kiểm tra lại Header và Hero — 22/10/2026

Phạm vi chỉ Homepage Kinetra: STT2 Header, STT3 Hero. Mở một preview mới localhost:9300, không sửa theme. Lần kiểm này thay thế kết luận hiện hành hai section; STT0 và Announcement bar kế thừa kết quả trước.

### Hero

Desktop1920×800px, media/content960px mỗi cột. Header outer960px với padding ngang80px tạo inner800px; padding đáy80px, căn phải, heading68/81.6px700tracking−1.2px. ButtonPrimary120.78×56px, padding ngang24px; không kiểm riêng line-height label. Eyebrow text149.11×21px, toàn cụm gồm icon/gap165.11px; text Figma148px vẫn Chưa xác minh do typography đã khớp.

**Marquee đã sửa:** rootHero y103, marquee y151 => top48px đúng Figma. Spacer hiện cao375.81px, không còn khoảng dư120.14px phía trên. Xóa lỗi top168.14px và gợi ý preset34→50% cũ; không áp lại hướng sửa đã hết lỗi. Source config hiện percent100 theo implementation Spacer mới, vì vậy cũng không dùng tên/số preset cũ để suy kết quả mới.

Bốn text marquee có style đồng bộ: Roboto Condensed70068px/81.6px tracking−1.2px. Active Essentials547.34px so với Figma549px vẫn Chưa xác minh về chiều rộng. Chiều cao81.59px được kết luận **Figma làm tròn** theo quy tắc đã chốt:68×120%=81.6px, Figma hiển thị82px, không cần sửa. Icon hiển thị14×14px khớp tổng box12×12px + outer stroke1px mỗi phía của Figma; không tạo lỗi box SVG.

Mobile tại client375px: ảnh375×375px, Hero cao669.31px; content padding48/16px, gap12px Eyebrow→Heading,24px Heading→Button, căn giữa, marquee ẩn. Button116.78×44px/padding22px. Do viewport390px, fluid heading40.5419/48.6503px cao97.3125px. Phần tổng chiều cao vẫn **Chưa xác minh** ở điều kiện viewport/client cùng375px; không gọi đây là lỗi theme hoặc Figma làm tròn. Bằng chứng viewport375/client360 và heading40/48px/hero668px của lần trước giữ là phép kiểm soát lịch sử, không gọi là đo mới lần này.


## Lịch sử — hero-height-calibration-2026-10-22.md

### Hero height calibration — 2026-10-22

Target: Kinetra only. Figma file yTXlAfT0miBGgRuuYM4OMp, desktop48622:16442 (1920×800), mobile48249:15448 (375×668, media375×375). Owner clarified Height (mobile) Medium375px controls the media, superseding the earlier total-height668px mapping.

| Option | Previous stack total height | New stack media height |
| --- | --- | --- |
| Extra small | 431px | 242px |
| Small | 517px | 290px |
| Medium | 668px | 375px |
| Large | 819px | 460px |
| Extra large | 970px | 544px |

Scale: original mobile values465/557/720/883/1045 ×375/720, rounded to nearest pixel. Fixed stack media rows have no320px minimum, allowing smaller options. The content row uses auto height. Desktop fixed values467/622/800/1000/1200px remain. Adapt/Full screen and Classic mappings unchanged. Preset and homepage instance remain Medium.

Implementation: snippets/hero-styles.liquid. Mobile fixed row sizing is explicitly requested custom layout behavior; the numeric calibration itself is not a customization.

QA: browser fixture using actual repository CSS passed30 mobile cases (5 heights × Fit/Fill/Custom × content first/last) at375px content viewport. Desktop1440px: both columns720px and total800px for all6 width/order combinations. Real preview9300: Medium image375px; desktop columns952.5px each within1905px content viewport, total800px.

Preview limitation: current9300 HTML does not yet emit the new opt-in padding class/settings although local preset/template and watcher sync show the update. It renders mobile content197px without the requested48px top/bottom padding, total572px. Therefore full Figma668px matching and new padding-control readback remain unverified; do not claim visual completion. Theme Check:0 errors,10 warnings, including Hero43-settings warning from new per-side padding controls.


## Lịch sử — hero-position-marquee-2026-10-22.md

### Kinetra Hero positions and marquee

Owner requirement: Marquee moves with the whole Hero content stack while its track continues scrolling horizontally. Add editable space between Marquee and Header; preserve Header–Button spacing using block bottom padding.

### Implementation

Removed absolute positioning, top:48px and inline inset from the direct-child marquee rule in hero-styles. Normal block flow now follows the existing nine Desktop/Mobile position mappings. Inline-size containment prevents the unbounded cloned track from contributing intrinsic width to fit-content; width/max-width/min-width and stretch keep the viewport bounded. Shared marquee runtime, schema, responsive positioning and visibility rules are unchanged.

Preset and homepage instance: desktop position bottom_right; Header alignment right with explicit independent alignment, mobile center retained. Hero gaps 0/0. Existing block padding options own spacing: Marquee bottom 80px desktop / 56px mobile when shown; Header bottom 40px / 32px; Button bottom 0/0. Outer panel padding remains unchanged. These values preserve the separate gaps without stacking parent gap and child padding.

### Verification

Temporary browser fixture uses actual repository critical.css, Hero CSS and shared marquee CSS/JavaScript, with simplified copy/media markup. 54 cases at each responsive mode = nine positions × fit/fill/custom × sticky off/on. All 108 pass: exact X/Y position mapping, marquee begins at content top, positive bounded width, correct child order, no overlap, ready horizontal runtime. Desktop Header–Button gap 40px; mobile 32px. Mobile fixture intentionally shows marquee to test all position values. This is layout/runtime coverage, not a full Theme Editor interaction test.

Actual storefront at port 9300: Bottom right applied; Header Right; marquee static in normal flow, viewport width 691.39px equals content width, animation marquee-scroll-left, bottom padding 80px. Header padding-bottom 40px; Button 0px. Mobile viewport observed 360px: marquee display:none from marquee--hide-mobile option, Header padding-bottom 32px, Button 0px; document width equals viewport (360px). No Theme Editor Save. Temporary viewport override reset.

Screenshots: /tmp/kinetra-hero-position-qa/desktop.png and mobile.png. Matrix fixture: /tmp/kinetra-hero-position-qa/. Theme Check: 0 errors, 9 warnings in other files. git diff --check passes. Existing preview watcher synced changes; no Git push or publication.

### Latest stack sizing correction — 2026-10-22

Supersedes earlier total-mobile-height mapping: Medium controls375px media; content retains natural height. Desktop columns stay50/50 for Fit/Fill/Custom and either content order. See ../audits/hero-height-calibration-2026-10-22.md for measured scale and preview limitation. Normal-flow marquee and nested Header/Button/Space composition remain.

### Percentage Spacer correction

Desktop fixed-height Stack now resolves Spacer percentage against its actual `.hero__content` containing block. At Medium800 with top48 padding: parent752, Spacer34%=255.672px.25 fixed-height/percentage cases passed; direct-child non-shrink protects the Marquee line. Screenshot: /tmp/kinetra-hero-parent-percent-fixed.png. Mobile375 remains669.3125px with both blocks hidden by options. See customization record for auto-height limitations.

### Full option regression — 2026-10-22

Reproduced Classic layout intrinsic-column expansion:4738px Marquee inside1440px Hero after changing layout/spacing. Bounded grid column + container/content min-width0 and all-Hero Marquee inline-size containment fix the expansion.756 desktop combinations,96 mobile samples and36 sequential section reload simulations pass bounded width/positive size checks. Desktop covers all9 positions, all7 Height values, both layouts, three content widths and full/page. First/last content order, sticky and padding variations are interleaved. Mobile samples cover independent padding. Actual Theme Editor save was not used. Live preset confirmed Hero800px and panel/Marquee960px, animation enabled. Screenshot:/tmp/kinetra-hero-options-fixed.png.

### Actual Theme Editor reparse bug — confirmed and corrected

The preceding width matrix did not test line wrapping or DOMParser-based HTML adoption. The user still reproduced the failure in theme192661848363 / section template--28646235308331__slideshow. In the actual editor, changing Content position to First produced multiple marquee rows. Root cause was the shared renderer's `<noscript><style>` fallback: parsing a section response with DOMParser creates an active style child; inserting the parsed subtree makes its global `.marquee__track {width:100%;flex-wrap:wrap}` rule affect running marquees. Direct innerHTML fixtures did not reproduce this because noscript remained text.

Reproduction using current real CSS/runtime and DOMParser adoption: before fix, flex-wrap=wrap, track736.75px versus original item81.59375px, noscript style count1. After removing the embedded style, flex-wrap=nowrap, track/item81.59375px, noscript style count0. The no-JS fallback now uses overflow-x:auto on the viewport while the marquee lacks ready state; no executable noscript style remains. Static speed0 and prefers-reduced-motion behavior retain their intentional wrapping.

Direct Shopify editor QA (no Save): Content position First→Last→First, padding48→64, Stack→Classic→Stack, then original Last/padding48 restored. Horizontal row visibly preserved after section rerender. Desktop position Top left→Bottom right also tested. Original loaded editor Save was disabled; restore final option values and confirm Save disabled. This is the confirmed editor-specific root cause; earlier width-only checks were insufficient. Theme Check0 errors/9 warnings.


## Lịch sử — recheck-three-sections-2026-10-22.md

### 3. Hero

Desktop 1920 × 800px, media/content 960px mỗi cột. Header outer 960px padding ngang 80px tạo inner content 800px; căn phải, padding đáy 80px đã khớp. Heading 68px/81.6px, 700, tracking −1.2px. Gap Eyebrow → Heading 16px; Heading → Button 40px (gap 16 + button-block padding-top 24). Primary Button cao 56px, padding ngang 24px; Mobile cao 44px/padding ngang 22px. Không báo line-height riêng của Primary Button.

Mobile media đã 375px tại client 375px; content padding 48px trên/dưới, 16px ngang, Header gap 12px, Heading → Button 24px (12 + 12), căn giữa và ẩn marquee. Các lỗi ảnh cao 320px/gap 16–32px cũ được bỏ.

Marquee Desktop hiện top 168.14px so với đầu Hero, Figma top khoảng 48px. Theme content căn đáy, Spacer 34% của vùng 752px = 255.67px, tổng các con thấp hơn vùng chứa nên còn dư 120.14px phía trên. Gợi ý thử preset Spacer khoảng 50% rồi đo lại; đây là gợi ý chưa áp dụng/kiểm chứng, không tự sửa padding 48px hoặc Header 80px đã đúng.

Các bản text marquee có typography đồng bộ. Active Essentials 547.34 × 81.59px so với Figma 549 × 82px: giữ Chưa xác minh, cần kiểm metrics/stroke/làm tròn; không kết luận browser render khi thiếu bằng chứng. Eyebrow text cả hai thiết bị rộng 149.11px so với 148px: một dòng Chung. Icon marquee Figma box12×12px + stroke ngoài1px mỗi phía có tổng14×14px; theme icon14×14px. Người dùng xác nhận kích thước tổng thể khớp: bỏ mục Chưa xác minh và hướng sửa box, đưa “marquee icon (Desktop)” vào dòng đã khớp. Không giảm icon về12px.

Chiều cao Mobile: client 375px/viewport390px cho Hero 669.31px vì fluid heading là 40.5419px/48.6503px. Ở viewport375px, heading đúng 40/48px và Hero cao668px nhưng client360px. Chưa đo được điều kiện viewport và client cùng375px, nên không quy 1.31px chênh thành lỗi theme hay browser render; ghi Chưa xác minh và không sửa padding để bù.


## Lịch sử — spacer-rebuild-2026-10-22.md

### Spacer rebuild — 2026-10-22

Target Kinetra. User requested rebuilding Spacer based on reference theme161667842133 and then setting Hero desktop Spacer100%. Reference editor options were read; reference CSS/class identity remains unverified due debugger/preview/CLI access failures. No reference edits saved.

### Behavior

- Existing Pixel/Percent IDs and responsive settings retained.
- Explicit modifier classes select desktop/mobile units.
- Pixel: fixed flex basis and block size; default100px desktop /52px mobile.
- Percent: flex-grow=size/100, flex-shrink0, flex-basis0px, automatic block size; consumes available free main-axis space.100% is not the full parent height plus siblings.
- Independent mobile classes and Show on mobile preserved. No JavaScript or parent-size measurement.
- Hero content remains definite-height on desktop fixed heights in Classic and Stack; unused --spacer-reference-block-size removed.
- In auto-height containers there is no free height to distribute; Percent can collapse to0. Use Pixel for fixed spacing in those containers.

### Evidence

15 native CSS geometry cases per viewport (1440desktop /375mobile), all pass within0.1px: Pixel0/100/400, Percent0/25/50/100, row/column and two100% spacers sharing space. Parent800 minus two100px siblings leaves600px; singlePercent25/50/100 measures150/300/600; two100% spacers each measure300.

Live Hero1920 viewport: total800px, content752px, Marquee81.59375px at panel offset48px, Header294.59375px including bottom80px, Spacer375.8125px with flex1 0 0px and full960px editor hit area. Marquee remains nowrap. Screenshot:/tmp/kinetra-hero-spacer-100-rebuilt.png.

Live375 viewport: Hero669.3125px, media375px; Spacer hidden through saved option. Preset and homepage parity checked at Percent100. Other persisted Spacer instances use Pixel. No push/publish/Theme Editor Save.

Additional Hero adapter verification: Classic and Stack fixed desktop content both expose available main-axis space.18 cases (2 layouts ×9 desktop positions) with800px parent,82px marquee and200px Header all produce518px Spacer at100%, with no Hero expansion. Combined with30 responsive geometry checks:48 passing cases. Theme Check0 errors/9 existing warnings; whitespace check passes.


## Lịch sử — header-hero-2026-10-23.md

### QA lại Header và Hero — 23/10/2026

Chỉ Homepage Kinetra, STT2 Header và STT3 Hero. Mở preview mới, chờ font loaded, đo mới Desktop/Mobile; không sửa theme. Tổng quan và Announcement bar giữ lần kiểm22/10.

### Hero

Desktop1920×800; hai cột960. Marquee y151−Hero y103=48px, đúng vị trí; Header padding ngang/đáy80px và inner800px, căn phải. Heading68px/81.6px700tracking−1.2px; bốn marquee text typography đồng bộ. ButtonPrimary120.78×56, padding ngang24; bỏ kiểm label line-height theo hướng dẫn.

Mobile media375×375, content padding48px/16px, Heading hai dòng, gap Eyebrow→Heading12, Heading→Button24, Button116.78×44/padding22px, marqueeẩn. Font fluid tại viewport390 là40.5419px/48.6503px, làm tổngHero669.31px. Điều kiện viewport/client cùng375 chưa xác minh ở lượt này; giữ1 dòng Chưa xác minh, không sửa padding để bù. Không dùng phép đo viewport375/client360 lịch sử như bằng chứng375chuẩn mới. Tab preview riêng của phiên khác không được chiếm để đo.

Eyebrow text149.11px so với148; marquee Active Essentials547.34px so với549: typography khớp, sai số gần sát không đổi layout => giữ **Figma làm tròn** theo quy ước người dùng, đây là suy luận metrics/làm tròn, không phải chứng minh làm tròn số học hay lỗi browser. Marquee height81.59px so82 =>68×120%=81.6px, Figma hiển thị số làm tròn: **Figma làm tròn**, không cần sửa. SVG14×14 tương đương Figma12×12 + stroke ngoài1 mỗi phía: khớp tổng thể, không báo lỗi.

**Kết luận Hero:3 Figma làm tròn,1 Chưa xác minh** (điều kiện viewport Mobile). Không có lỗi chưa khớp đã xác nhận; chưa tuyên bố section hoàn toàn đạt.


## Lịch sử — check-perfect-homepage.md

### STT 0 — Tổng quan

| Thứ tự trên trang | Vùng hiển thị | Instance trong theme |
| --- | --- | --- |
| 3 | Hero | `slideshow` |

### STT 3 — Hero

Lịch sử QA ngày22/10/2026: lúc đó đi trực tiếp Announcement bar→Hero. Header hiện đã QA ở STT2; Hero đổi STT3. Số hàng/số tiêu chí của mốc kiểm dưới đây là lịch sử trước cập nhật style và quy ước Button. Kết luận **Chưa khớp**; 36 tiêu chí (20 Desktop, 16 Mobile), Sheet hàng 23–58, nối liền Announcement bar. Phạm vi và nguồn chuyển xuống hàng 60–63. Không sửa theme.

##### Nguồn và cách đo

- Instance `slideshow`, type/schema **Hero**, `templates/index.json`; desktop node `48622:16442` (Hero banner 3), mobile `48249:15448` (Hero banner 2), thuộc hai frame homepage đã cung cấp. Nguồn đọc bằng CUA/Chrome; không có Figma MCP khả dụng trong phiên. UI Figma đọc frame/layout, content, typography, fill/stroke và ảnh từng breakpoint.
- Desktop viewport 1920px, clientWidth 1905px, DPR 1; đo vị trí tương đối với Hero để loại ảnh hưởng chiều cao Header/Announcement bar. Figma desktop 1920×800px. Hai cột giữ tỷ lệ 50/50; không báo riêng chênh 7.5px/cột do scrollbar.
- Mobile chính thức: Chrome DevTools **iPhone SE, innerWidth = clientWidth = 375px**, DPR 2. Heading 40/48px, khung 343×96px. Lượt thử viewport override 390/client375 cho Heading 40.54/48.65px là ảnh hưởng `vw` của môi trường đo, đã loại khỏi kết luận; không báo lỗi theme hoặc Browser render từ lượt đó.
- Font status loaded; ảnh complete. Scope là hình ảnh normal, không QA hover/editor/release. Source chỉ có một Hero ảnh tĩnh; không thêm hàng Navigation/pagination vô ích. Marquee là phần con Desktop, ẩn Mobile đúng Figma; clone không phải nội dung thừa.
- Tên block đã kiểm trong schema: Header, Eyebrow, Heading, Button, Marquee chứa Heading và Icon. Figma có layer Text placeholder không hiện trong ảnh; không kết luận theme thiếu Text này.

##### Báo cáo đồng bộ Sheet

| Thiết bị | Thành phần | Tiêu chí | Nội dung đối chiếu | Trạng thái | Hướng xử lý |
| --- | --- | --- | --- | --- | --- |
| Desktop | Tổng quan layout | Thành phần và bố cục | Đủ ảnh, Header, Button, marquee; 2 cột 50/50, cao 800px.<br>Chưa khớp:<br>- Căn nội dung: Theme trái; Figma phải.<br>- Padding content: Theme 64px; Figma 80px.<br>- Header: Theme Fit 691.39px; Figma Fill 800px. | Chưa khớp | - Căn nội dung: preset Desktop position = Bottom right; Header alignment = Right.<br>- Padding content: preset Padding = 80px.<br>- Header: giữ cột 50/50; Fill làm đổi tỷ lệ 40/60, chỉ custom width content sau khi kiểm giới hạn preset. |
| Desktop | Section | Màu nền | #181818 | Khớp |  |
| Desktop | Ảnh | Nội dung / crop | Đúng ảnh người mẫu đồ xanh; ảnh trái 50%, cover, cao 800px. | Khớp |  |
| Desktop | Header | Khoảng cách | Eyebrow → Heading 16px; Header → Button 40px. | Khớp |  |
| Desktop | Eyebrow | Nội dung | NO ROLL. NO SHOW. | Khớp |  |
| Desktop | Eyebrow | Typo | Roboto Condensed 500; 14/21px; tracking 2px; chữ hoa. | Khớp |  |
| Desktop | Eyebrow | Icon / màu / gap | Icon vuông 8×8px; chữ/icon #FFFFFF; gap 8px. | Khớp |  |
| Desktop | Eyebrow | Kích thước Text | Cao 21px; rộng Theme 149.11px / Figma 148px. Chưa xác minh nguyên nhân render/metric. | Chưa xác minh |  |
| Desktop | Heading | Nội dung | MOVE FREELY. LIVE FULLY. | Khớp |  |
| Desktop | Heading | Typo | Roboto Condensed 700; H1 68/81.6px; tracking -1.2px; chữ hoa. | Khớp |  |
| Desktop | Heading | Màu | #FFFFFF | Khớp |  |
| Desktop | Button | Nội dung | SHOP NOW; không có icon. | Khớp |  |
| Desktop | Button | Typo | Roboto500;14px;tracking−0.2px;chữ hoa. Primary: không kiểm line-height riêng theo quy ước mới. | Khớp | |
| Desktop | Button | Màu | Nền/viền #FFFFFF; chữ #1C1C1C. | Khớp |  |
| Desktop | Button | Khung / padding | Cao 56px; padding ngang 24px; viền 1px; góc vuông. | Khớp |  |
| Desktop | Heading (Marquee) | Nội dung | ACTIVE ESSENTIALS / COMFORT FIT / CHIC ATHLEISURE / DYNAMIC STYLE. | Khớp |  |
| Desktop | Heading (Marquee) | Typo / stroke | Roboto Condensed 700; 68/81.6px; tracking -1.2px; outline #FFFFFF 1px; opacity nhóm 40%. | Khớp |  |
| Desktop | Heading (Marquee) | Kích thước Text | Mẫu Active Essentials: Theme 547.34px / Figma 549px; cao 81.59px / 82px. Chưa xác minh render/metric. | Chưa xác minh |  |
| Desktop | Icon (Marquee) | Hình / kích thước | Vuông rỗng, trắng.<br>Chưa khớp:<br>- Box: Theme 14×14px; Figma 12×12px (stroke ngoài 1px). | Chưa khớp | - Box: preset Icon width = 12px; kiểm lại SVG stroke 1px và khoảng cách, custom SVG nếu preset không giữ stroke ngoài. |
| Desktop | Grid/slide | Lặp ngang / gap | Marquee lặp 4 chữ xen 4 icon; gap 12px; cách mép trên 48px; cắt ở mép khung. | Khớp |  |
| Mobile | Tổng quan layout | Thành phần và bố cục | Ảnh trên, content giữa; marquee ẩn. Padding content 48px trên/dưới, 16px ngang khớp.<br>Chưa khớp:<br>- Tổng cao: Theme 625px; Figma 668px (ảnh và gap). | Chưa khớp | - Tổng cao: xử lý chiều cao ảnh và gap Header/Button ở các dòng tương ứng; giữ padding 48/16px, không ép height section. |
| Mobile | Section | Màu nền | #181818 | Khớp |  |
| Mobile | Ảnh | Nội dung | Đúng ảnh người mẫu đồ xanh; đúng nguồn ảnh Mobile. | Khớp |  |
| Mobile | Ảnh | Kích thước / crop | Rộng 375px.<br>Chưa khớp:<br>- Cao ảnh: Theme 320px; Figma 375px, crop theo khung bị lệch. | Chưa khớp | - Cao ảnh: preset Mobile height = Adapt đã chọn nhưng CSS grid giữ min 320px; custom hàng media theo tỷ lệ ảnh 1:1, không đổi padding. |
| Mobile | Header | Khoảng cách | Chưa khớp:<br>- Eyebrow → Heading: Theme 16px; Figma 12px.<br>- Header → Button: Theme 32px; Figma 24px. | Chưa khớp | - Eyebrow → Heading: preset Header gap Mobile = 12px.<br>- Header → Button: preset Hero gap Mobile = 24px. |
| Mobile | Eyebrow | Nội dung | NO ROLL. NO SHOW. | Khớp |  |
| Mobile | Eyebrow | Typo | Roboto Condensed 500; 14/21px; tracking 2px; chữ hoa; căn giữa. | Khớp |  |
| Mobile | Eyebrow | Icon / màu / gap | Icon vuông 8×8px; chữ/icon #FFFFFF; gap 8px. | Khớp |  |
| Mobile | Eyebrow | Kích thước Text | Cao 21px; rộng Theme 149.11px / Figma 148px. Chưa xác minh nguyên nhân render/metric. | Chưa xác minh |  |
| Mobile | Heading | Nội dung | MOVE FREELY. LIVE FULLY.; hai dòng, căn giữa. | Khớp |  |
| Mobile | Heading | Typo | Roboto Condensed 700; H1 40/48px; tracking -1.2px; chữ hoa. | Khớp |  |
| Mobile | Heading | Màu / khung | #FFFFFF; khung 343×96px. | Khớp |  |
| Mobile | Button | Nội dung | SHOP NOW; không có icon. | Khớp |  |
| Mobile | Button | Typo | Roboto500;14px;tracking−0.2px;chữ hoa. Primary: không kiểm line-height riêng theo quy ước mới. | Khớp | |
| Mobile | Button | Màu | Nền/viền #FFFFFF; chữ #1C1C1C. | Khớp |  |
| Mobile | Button | Khung / padding | Cao 44px; padding ngang 22px; viền 1px; góc vuông. | Khớp |  |

##### Số đo chính và hướng xử lý

| Mục | Figma | Theme | Cơ sở / hướng xử lý |
| --- | --- | --- | --- |
| Desktop Hero | 1920×800; ảnh trái, nội dung phải | 1905×800; hai cột 952.5px | Tỷ lệ/chiều cao khớp; khác 15px viewport do scrollbar, không phải lỗi section |
| Desktop content | Padding token 20 = 80px, căn phải, Header Fill 800px | Padding 64px, căn trái, content Fit 691.39px | Preset Padding 80, Desktop position Bottom right, Header Right. Content Fill của Hero làm grid đổi 40/60 nên không đề xuất bật mù; nếu không có preset giữ 50/50 đồng thời fill vùng nội dung thì custom width scoped |
| Desktop header gaps | 16px và 40px tới Button | 16px và 40px | Khớp |
| Mobile media | 375×375px | 375×320px | Đã chọn Mobile height Adapt; `snippets/hero-styles.liquid` dùng grid row `minmax(32rem, var(--hero-min-height,50svh))`, Adapt đặt auto nhưng không ôm tỷ lệ ảnh. Không có preset 375px/1:1 tương ứng; đề xuất custom hàng ảnh theo aspect ratio trong stack/adapt, kiểm nguồn ảnh và crop, không giảm/tăng padding để bù |
| Mobile content | 375×293; padding dọc48, ngang16 | 375×305; padding dọc48, ngang16 | Padding khớp; content dư12 do Header gap +4 và gap Button +8 |
| Mobile header gaps | Eyebrow→Heading12, Header→Button24 | 16 và32 | Preset Header mobile gap12; Hero mobile gap24 |
| Mobile tổng cao | 668px =375+293 | 625px =320+305 | Sửa ảnh +55 và gaps −12 theo nguyên nhân; không ép height section |
| Eyebrow hai thiết bị | Roboto Condensed500,14/21px,2px,white; icon8,gap8 | Các thuộc tính đó khớp | Residual text width149.11 vs148px chưa xác minh. Không gọi Browser render khi chưa chứng minh nguyên nhân/font metric |
| Heading | H1 Roboto Condensed700; desktop68/81.6, mobile40/48;-1.2px,white | Khớp; mobile343×96 | Figma UI hiện token Typo/h1 và khung82/96; giá trị68/40 đối chiếu thêm hồ sơ Style Guide trong theme-init và tài liệu cấu hình. Desktop khung Heading bị ảnh hưởng content Fit, xử lý ở layout; không đếm hai lần |
| Button label | Roboto500,14/21px,-0.2px,uppercase | 14/14px | Config không có control line-height riêng; đề xuất scoped line-height1.5, giữ min-height56/44. Label width70.78 vs72px và button width120.78/116.78 vs120/116 được lưu như residual; chưa tạo lỗi kích thước độc lập trước khi typo khớp |
| Button box/màu | Cao56/44, side padding24/22; radius vuông, viền1 trắng, nền trắng, chữ#1C1C1C | Khớp các thuộc tính này | Token button đối chiếu thêm tài liệu Style Guide đã lưu. Chưa tuyên bố mọi metric text đã khớp |
| Marquee Desktop | 4 Heading xen4Icon; gap12, inset top48; opacity40%; outline1 trắng | Khớp bố cục/gap/opacity và chữ | Đã đọc cả4 nội dung qua layer. Mẫu Active Essentials width549/height82 vs547.34/81.59px; typography/cấu hình đã khớp, residual chưa chứng minh browser rounding |
| Icon marquee | Box12×12, outer stroke1px | Box14×14, SVG path stroke1px trong canvas14 | Phân biệt box layout với kích thước vẽ gồm stroke ngoài. Thử preset Icon width12; đo lại stroke/gap, nếu SVG preset không giữ outer stroke thì mới custom SVG. Không chỉ kết luận từ hình vuông nhìn tương tự |

Ảnh Desktop/Mobile cùng người mẫu đồ xanh, đúng asset và nguồn riêng. Desktop cover vùng trái, Mobile khung320px làm crop khác thiết kế375px; lỗi crop được gộp vào chiều cao media để tránh lặp hướng sửa. Thông số ảnh gốc và object-position trong JSON bằng chứng.

Các mục Chưa xác minh là residual kích thước Text khi typo đã khớp, không phải lỗi mới cần ép width/height; chưa gán Browser render không khớp. Cần so font file/metric và renderer trước khi phân loại. Cột Hướng xử lý để trống cho các mục này, giữ truy nguyên ở đây.

##### Bằng chứng

- [Figma Desktop](../../output/qa/hero-figma-desktop.png), [Figma Mobile](../../output/qa/hero-figma-mobile.png), [Properties theo thành phần](../../output/qa/hero-figma-evidence.json).
- [Preview Desktop](../../output/qa/hero-preview-desktop.png), [số đo Desktop](../../output/qa/hero-preview-desktop.json).
- [Preview Mobile iPhone SE](../../output/qa/hero-preview-mobile.png), [số đo Mobile 375px](../../output/qa/hero-preview-mobile.json).
- [Sheet Hero Desktop](../../output/qa/hero-sheet-desktop.png), [Sheet Hero Mobile và nguồn cuối](../../output/qa/hero-sheet-mobile.png).
- Dữ liệu báo cáo `output/qa/hero-report-rows.json`; khóa nhận diện instance `slideshow` + thiết bị + thành phần/tiêu chí. Không dùng số hàng làm khóa.
