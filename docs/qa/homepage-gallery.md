# Gallery carousel — Fix Lần 1/Lần 2 và recheck 2026-10-28

Novaire, `index/instagram`, type `gallery-carousel`. Đã sửa và xác nhận **4/4 mục được giao**: Tag line-height, Mobile Header–ảnh, kích thước icon Mobile và khoảng icon–Tag Mobile. [Sheet Homepage A106:J113](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A106:J113) hiện **6 Khớp, 1 Chưa khớp (Bỏ qua), 1 Chưa xác minh**.

## Phân công live, thay đổi và xác nhận

- Snapshot live trước sửa: Tag=Lần2; Header–ảnh=Lần1; icon=Lần1; **Overlay đã được người dùng gắn Lần2**, khác snapshot QA trước còn để trống. Hướng xử lý Overlay chỉ rõ scoped button/overlay và phối hợp icon24px. Thực thi phần phối hợp icon trong mục Overlay Lần2; không dùng ngoại lệ icon để tự mở quyền custom của Lần1. Cờ icon Lần1 được giữ làm lịch sử, QA đạt nhờ mục Overlay Lần2 được giao cùng lượt.
- `templates/index.json`: chỉ `sections.instagram.settings.content_gap_mobile`32→36; `customize_mobile_gap=true` đã có. Cập nhật cùng setting trong Add section preset hiện hành `Gallery carousel` ở `sections/gallery-carousel.liquid`. Giữ gapDesktop40 và paddingD80/64,M56/56.
- CSS chỉ trong section Gallery carousel: Tag line-height1.5 trên Desktop/Mobile; Mobile overlay gap8px, button/icon24px. Không sửa shared `blocks/gallery-image.liquid`, global typography/page margins, schema control, JavaScript, media hoặc block tree. Consumer phụ của cùng section type là `templates/index.spinel-sync.json`; không sửa dữ liệu template này. Style ngoài `.gallery-carousel` giữ nguyên.
- Desktop runtime mới viewport1935×1080/client1920: cả5Tag computed24px; Header–ảnh40px; content1824px,5ảnh352px vuông/gap16px, inset48px giữ nguyên. Cả5ảnh tải xong/đúng thứ tự, nền trắng, không arrows/pagination; không overflow ngang. Desktop button48px/icon20px giữ nguyên theo phạm vi nguồn Mobile của hai dòng đó.
- Mobile runtime mới viewport390×812/client375: cả5Tag computed24px, Header–ảnh36px, button/icon CSS24×24px, overlay gap8px; normal composition24+8+24=56px giống Content47284:7409. Overlay ẩn dùng scale1.04 nên bounding box lúc ẩn24.96px; không đọc thành lỗi size. Khi focus giữ transition/translateY sẵn có; không lấy box đang chuyển động làm phép đo nguồn. Bằng chứng chốt là computed CSS và box ổn định của carousel, không tuyên bố toàn bộ hover/focus pixel-perfect.
- Mobile ảnh283,828125px vuông, clip343px, gap12px,1ảnh+preview; Header64,78125px,section496,609375px. Thay đổi section+4px đúng content gap32→36; chênh height với Figma468px do width preview/rounding giữ quy ước QA đã chấp nhận, không ép height/padding.
- Nguồn Figma giữ đúng Desktop47052:11030/Mobile47284:7401 và evidence Properties/metadata từ lượt QA ngay trước: Tag16px×150%=24px; Mobile Container Header64px/Row y100→gap36px; icon24px,Text y32→gap8px. Không thay thiết kế, không suy radius2xl thành số px. Radius vẫn Chưa xác minh; padding Desktop vẫn Bỏ qua/Chưa khớp.

## Snapshot Sheet đã đọc lại

F/G giữ nguyên số đo gốc theo chu kỳ fix; số đo mới được thêm ở Hướng xử lý và hồ sơ. Cờ Lần1/Lần2 giữ nguyên, không đánh lại vòng. Chỉ J107 vàJ110:J112 chuyển Khớp, bỏ highlight F/G của4dòng đạt.

| Thiết bị | Thành phần | Tiêu chí | Figma (gốc) | Hiện tại (gốc) | Hướng xử lý và QA mới | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Tổng quan layout | Đã kiểm và khớp | Eyebrow → Heading → 5 ảnh vuông đúng thứ tự; nền trắng; không arrows/pagination; link demo # hợp lệ | Đủ và đúng thứ tự; Header căn giữa; ảnh đúng; Desktop 5 cột/gap16; Mobile 1 ảnh + preview/gap12; 5 link # |  |  | Khớp |
| Chung (Desktop, Mobile) | Tag (Gallery image) | Line-height | 24px (Poppins 16px × 150%) | 19,2px (Poppins 16px × 120%) | Giữ Lần 2. Gallery image chưa có control line-height; cần sửa scoped .gallery-image__tag, không đổi typography global. QA Lần 2: Tag computed24px trên cả Desktop/Mobile; scoped Gallery carousel, không đổi global. | Lần 2 | Khớp |
| Desktop | Layout | Khoảng cách ngoài hai mép | 20px; Row1880px tại frame1920px | 48px; content1824px; ảnh352px | Giữ quyết định Bỏ qua. Full width đang kế thừa page margin48px; chưa có inset riêng20px, không đổi global để sửa Gallery. | Bỏ qua | Chưa khớp |
| Mobile | Grid/slide | Số item / gap / preview | 1 ảnh + preview ảnh2; gap12px; ảnh cha256×256px | 1 ảnh + preview ảnh2; gap12px; ảnh283,83×283,83px. Chấp nhận preview tương đối theo quy ước QA một section. |  |  | Khớp |
| Mobile | Layout | Khoảng cách Header–ảnh | 36px (Container gap9) | 32px | Dùng $build-preset: section.customize_mobile_gap=true; content_gap_mobile32→36. Giữ padding56px trên/dưới. QA Lần 1: content_gap_mobile32→36 trong preset và index; runtime36px, padding56px giữ nguyên. | Lần 1 | Khớp |
| Mobile | Icon (Gallery image) | Kích thước khung icon | Instagram24×24px | SVG20×20px; chưa tính scale hover | Dùng $build-preset kiểm nhánh Custom icon/asset/snippet; Gallery image hiện thiếu control icon size. Cần hỗ trợ scoped 24px; không dùng font-size Tag để bù. QA: icon Mobile24×24px đạt khi phối hợp button/icon trong mục Overlay Lần 2; giữ cờ Lần 1 gốc. | Lần 1 | Khớp |
| Mobile | Overlay (Gallery image) | Khoảng cách icon–Tag | 8px từ khung icon24px đến Tag | 19px = phần trống14px trong nút48px + gap5px | Thiếu control gap/kích thước nút riêng. Cần scoped button/overlay để khoảng hiển thị8px, phối hợp icon24px; không giảm line-height Tag để bù. QA Lần 2: nút/icon24×24px, overlay gap8px; nhóm24+8+24=56px. Override chỉ Mobile của Gallery carousel. | Lần 2 | Khớp |
| Mobile | Gallery image | Radius ảnh | Token2xl trên Image47284:7405; chưa resolve đúng mode | Khung ảnh vuông; chưa xác minh số px nguồn nên chưa kết luận radius khớp |  |  | Chưa xác minh |

## Validation, hồi quy và giới hạn

- Theme Check: **0errors/8warnings**, không warning trong hai file thay đổi của lượt này. Warnings nằm ở các file ngoài phạm vi đã có trong working tree. JSON/schema parse và kiểm semantic delta đạt; index chỉ đổi1setting, schema chỉ đổi1preset value ngoài4dòng CSS mới; `git diff --check` đạt.
- Shopify AI Toolkit search tài liệu chính thức về stylesheet/subsetting chạy thành công sau quyền mạng. Validator riêng không chạy được vì bộ cài thiếu`@shopify/theme-check-common`; không coi là pass. Theme Check CLI độc lập đã chạy đạt.
- `node theme-base check-custom novaire-theme` còn báo14đường dẫn ngoài phạm vi chưa được ghi trong customization record. Section Gallery carousel đã có record; không sửa các record/implementation không thuộc lượt. Chưa release/commit/push nên không gọi toàn bộ repo release-ready.
- Hồi quy trong Gallery: kiểm Desktop/Mobile, Header/text/media/5slides/gap/preview/overflow/controls, so consumer scoped. Homepage Mobile smoke vẫn16mainsections, không overflow; không làm lại pixelQA toàn19nhóm hoặc toàn theme/templates. Chưa kiểm đủ lifecycle Theme Editor và chuỗi swipe thực đầu/giữa/cuối. Không phát sinh thay đổi global; không tuyên bố các kết quả chưa kiểm này là đạt.
- Sheet readback CSV/XLSX xác nhận chỉ8ôH/J của4dòng được giao đổi; F/G/I, mụcBỏ qua/radius và mọi hàng ngoài Gallery giữ nguyên. Merge A106:A113/B106:B113/C106:C107/C109:C113 và validation giữ nguyên; pass F/G nềntrắng, mismatch padding Desktop giữ highlight.
- Bằng chứng mới local `/tmp/novaire-gallery-fix/desktop.json`, `mobile.json`, `desktop.png`, `mobile.png`, `sheet-verified.png`; không thuộc commit. Snapshot trước sửa trong cùng thư mục phục vụ audit delta. Giữ lịch sử đầy đủ phía dưới. Preview hiện có phản ánh file local; không khởi động uploader mới, không Save Theme Editor, commit/push/publish.

---

## QA trước Fix Lần 1/Lần 2 — lịch sử

# Gallery carousel — recheck hiện hành 2026-10-28

STT **17**; Novaire; template `index`; instance `instagram`; type `gallery-carousel`.
Đã đồng bộ [Novaire / Homepage — A106:J113](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0&range=A106:J113): **2 Khớp, 5 Chưa khớp, 1 Chưa xác minh**. Một mục Chưa khớp được người dùng gắn **Bỏ qua**; giữ quyết định này. Đây là QA, chưa sửa theme.

## Nguồn và điều kiện kiểm

- Desktop: [47052:11030](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-11030), frame1920×620,2px.
- Mobile: [47284:7401](https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7401), frame375×468px.
- Preview local: `http://127.0.0.1:9301/#shopify-section-template--28697873875243__instagram`; [draft public192827490603](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192827490603), store layouthub-template-v2.myshopify.com.
- Runtime đo trong lượt này: Desktop viewport1935×1080/client1920; Mobile390×812/client375, DPR1; fonts loaded, không overflow ngang. Đưa Gallery vào viewport, Swiper initialized rồi mới chốt width/gap. Runtime mới đọc bằng browser in-app sau khi Chrome mất debugger; Figma và Sheet dùng Chrome minhle@beae.com.
- Đọc mới Properties/canvas Desktop và Mobile qua CUA; Figma MCP mới kết nối ở lượt tiếp tục, `get_metadata` xác nhận cây Mobile và kích thước con. `get_design_context` bị View-seat quota; không suy quyền copy/export, không chỉnh nguồn. Các font-size nguồn đã xác minh từ QA trước được giữ làm evidence kế thừa, không gọi đó là lần đọc mới toàn bộ Style Guide.
- Style Guide kế thừa Malandra theo doc init. QA chỉ instance này; không kiểm toàn homepage, Theme Editor lifecycle hoặc release readiness.

## Kết quả đã ghi Sheet

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Tổng quan layout | Đã kiểm và khớp | Eyebrow → Heading → 5 ảnh vuông đúng thứ tự; nền trắng; không arrows/pagination; link demo # hợp lệ | Đủ và đúng thứ tự; Header căn giữa; ảnh đúng; Desktop 5 cột/gap16; Mobile 1 ảnh + preview/gap12; 5 link # |  |  | Khớp |
| Chung (Desktop, Mobile) | Tag (Gallery image) | Line-height | 24px (Poppins 16px × 150%) | 19,2px (Poppins 16px × 120%) | Giữ Lần 2. Gallery image chưa có control line-height; cần sửa scoped .gallery-image__tag, không đổi typography global. | Lần 2 | Chưa khớp |
| Desktop | Layout | Khoảng cách ngoài hai mép | 20px; Row1880px tại frame1920px | 48px; content1824px; ảnh352px | Giữ quyết định Bỏ qua. Full width đang kế thừa page margin48px; chưa có inset riêng20px, không đổi global để sửa Gallery. | Bỏ qua | Chưa khớp |
| Mobile | Grid/slide | Số item / gap / preview | 1 ảnh + preview ảnh2; gap12px; ảnh cha256×256px | 1 ảnh + preview ảnh2; gap12px; ảnh283,83×283,83px. Chấp nhận preview tương đối theo quy ước QA một section. |  |  | Khớp |
| Mobile | Layout | Khoảng cách Header–ảnh | 36px (Container gap9) | 32px | Dùng $build-preset: section.customize_mobile_gap=true; content_gap_mobile32→36. Giữ padding56px trên/dưới. | Lần 1 | Chưa khớp |
| Mobile | Icon (Gallery image) | Kích thước khung icon | Instagram24×24px | SVG20×20px; chưa tính scale hover | Dùng $build-preset kiểm nhánh Custom icon/asset/snippet; Gallery image hiện thiếu control icon size. Cần hỗ trợ scoped 24px; không dùng font-size Tag để bù. | Lần 1 | Chưa khớp |
| Mobile | Overlay (Gallery image) | Khoảng cách icon–Tag | 8px từ khung icon24px đến Tag | 19px = phần trống14px trong nút48px + gap5px | Thiếu control gap/kích thước nút riêng. Cần scoped button/overlay để khoảng hiển thị8px, phối hợp icon24px; không giảm line-height Tag để bù. |  | Chưa khớp |
| Mobile | Gallery image | Radius ảnh | Token2xl trên Image47284:7405; chưa resolve đúng mode | Khung ảnh vuông; chưa xác minh số px nguồn nên chưa kết luận radius khớp |  |  | Chưa xác minh |

## Số đo, công thức và truy nguyên

Desktop Figma: section padding80px trên/64px dưới,20px hai bên; Container height476,2px/gap10=40px, Header73px/gap2=8px; Row47052:11033 width1880px, height363,2px, gap4=16px. Có5ảnh vuông đúng thứ tự, eyebrow/heading căn giữa, nền#FFFFFF; không control arrows/pagination. Runtime full-width outer1920px gồm48px padding mỗi bên, content1824px,5cột/gap16px: `(1824−4×16)/5=352px`. Header73,1875px, content gap40px, section609,1875px. Nguồn620,2−runtime609,1875=11,0125px: chủ yếu do ảnh363,2→352 từ inset; không lặp lỗi chiều cao. Giữ Bỏ qua của người dùng, không đổi page margin global. Schema có full width/no padding nhưng không có inset riêng20px để khớp chính xác.

Mobile Figma MCP: Container47284:7402 x16/y56,width343,height356; Heading47284:7403 height64; Row47284:7404 y100,height256,width343. Vì vậy Header–Row=`100−64=36px`, đúng Properties gap9. Ảnh cha47284:7405 **256×256px**; card2 x268; gap=`268−256=12px`; card3/4/5 x536/804/1072. Nguồn không còn pending parent ảnh.

Mobile runtime: padding56px trên/dưới,16px hai bên; clip343px; Header64,78125px, gap32px; ảnh283,828125px vuông. Runtime carousel chia1,2 item với gap12px: `W=(343−0,2×12)/1,2=283,833px`; phần ló trong clip343px `P=343−(W+12)=47,167px`, `R≈16,62%`. Nguồn ảnh256px: P75px/R≈29,30% trong cùng clip343px. Cả hai đúng1ảnh đầy đủ + preview ảnh2 và gap12px. Chấp nhận preview tương đối theo ngoại lệ QA một section của skill, không suy chuẩn carousel toàn theme hoặc khẳng định width/% khớp tuyệt đối. Rút Chưa xác minh của width. Phần chênh height do width ảnh được chấp nhận; giữ lỗi gap32→36 độc lập. Section492,609375 so468: `27,828125 ảnh−4 gap+0,78125 Header=24,609375`. Không tạo thêm lỗi chiều cao tổng.

Typography runtime: Eyebrow Poppins400/12px/20,4px/tracking2px/#3A3A3A; Heading Outfit300/32px Desktop,26px Mobile,140%/tracking2,56px/#3A3A3A. Header Desktop `20,390625+8+44,796875=73,1875`, Mobile `20,390625+8+36,390625=64,78125`; nguồn Header73/64 phù hợp làm tròn từng dòng20+45+8 và20+36+8; không thêm lỗi height hệ quả. Nội dung #GLORIADRESS / LET’S GET SOCIAL đúng. Pass của summary giới hạn đúng các thuộc tính đã nêu, không đại diện toàn bộ style.

Tag nguồn Desktop47052:11040/Mobile47284:7411: Poppins400/16px/150%=24px, tracking0,#FFFFFF,@pam_sam. Runtime16px/120%=19,2px; `.gallery-image__tag` hardcode line-height1.2. Schema có font-size riêng/mobile, không có line-height. Giữ Lần2 từ Sheet live; cần thay scoped khi được giao implementation, không chỉnh global trong lượt QA.

Mobile overlay source: Frame47284:7406 Fixed256×256; Wrapper47284:7408 y84,height88; Content47284:7409 x20/y16,width216,height56; Instagram47284:7410 **24×24px** ở y0, Tag47284:7411 y32/height24. Khoảng khung icon→Tag8px. Runtime `.gallery-image__icon`20×20px, `.gallery-image__button`48×48px, `.gallery-image__overlay` gap0,5rem=5px; phần trống dưới icon=(48−20)/2=14px, khoảng tới Tag=19px. Box trước hover đang scale1,04 cho icon20,8px, không gọi20,8px là kích thước CSS nguồn; đối chiếu khung CSS20px với frame24px. Kích thước icon và spacing khác nhau, báo riêng; chưa chứng minh stroke/path pixel-perfect, không gộp vào Khớp. Schema Gallery image không có size icon, button size hoặc overlay gap; lỗi icon gắn Lần1 theo ngoại lệ icon của qa-theme, lỗi gap custom chưa tự gắn vòng. Ưu tiên nhánh Custom icon/asset/snippet của $build-preset nếu được giao fix; hiện ghi capability gap, không sửa implementation.

Năm ảnh khớp thứ tự/crop tổng thể như canvas: brown/yellow/green/white floral/yellow-green portrait; ảnh vuông/object-fit cover. Overlay màu đen20%, chữ/icon trắng theo nguồn; không suy hover behavior khớp từ static Figma. Năm liên kết href=# đạt quy ước demo và đã gộp vào summary, không còn hàng link riêng. Thử Tab sang link kế tiếp trên Mobile đưa slide2 vào vùng nhìn thấy; không có arrows/dots/progress trong DOM và nguồn, không tự yêu cầu thêm control. Chưa kiểm đầy đủ chuỗi swipe đầu/giữa/cuối.

## Đồng bộ và giới hạn

- Đọc CSV live trước ghi: Gallery106:110, Tag=Lần2, padding Desktop=Bỏ qua. Chèn tổng3hàng trước Benefits111, Gallery thành106:113; Benefits chuyển114:116, Footer bắt đầu117. Giữ cờ, dropdown và chỉnh sửa live khác; ghi8tiêu chí đúng phạm vi Gallery.
- Merge A106:A113/B106:B113; C106:C107 vàC109:C113. Arial10, wrap/middle; F/G sai lệch highlight#D9EAD3/#F4CCCC, mụcKhớp trắng. Validation I3:I126 Lần1–5/Bỏ qua và J3:J126 giữ nguyên; UI xác minh chip, merge và nội dung ở zoom90%, tài liệu Đã lưu vào Drive.
- Readback CSV/XLSX sau ghi xác nhận8trạng thái và dữ liệu. Trong khi làm có thay đổi live ở Blog95:105 từ phiên khác; không ghi đè hoặc phục hồi các thay đổi đó. Số hàng hiện hành phải map bằng key instance/thiết bị/thành phần/tiêu chí, không dùng checkpoint cũ78:82.
- Evidence mới là Properties/canvas/computed box trong tool transcript; ảnh xác nhận Sheet `/tmp/novaire-gallery-recheck/sheet-verified.png` giữ để bàn giao. Evidence lịch sử `/tmp/novaire-qa-20261028/` bên dưới không bị xóa hoặc gọi là đo mới. Không tạo test/code/theme/config/media, không Save Editor, commit/push/publish.
- Radius Image47284:7405 hiện token2xl trong Properties; `get_variable_defs` bị cùng quota View-seat. Quyền nguồn Novaire hạn chế copy/export đã được ghi trong doc init, không copy/detach nguồn để vượt giới hạn. Giữ Chưa xác minh đúng thuộc tính trên Sheet, không suy số px từ nhãn token.
- Cleanup: Sheet8449 giữ làm kết quả. Hai tab tạm8357/8360 còn ở inventory nhưng đóng bị Debugger unattached; cần dọn sau khi kết nối hồi phục. Không tạo bản copy Figma mới.
- Section vẫn chưa đạt hoàn toàn; chưa chứng minh radius token/source vector stroke và toàn bộ tương tác/editor. Không dùng summary hoặc preview được chấp nhận để suy release-ready.

---

## Snapshot trước recheck — giữ lịch sử

## QA hiện hành — 2026-10-28

STT 17 — **Gallery carousel**. Instance `index/instagram`; type `gallery-carousel`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A78:J82. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-11030
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7401
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-16.png`, `figma-m-16.png`, `final-desktop-16.png`, `final-mobile-16.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Eyebrow, Heading: nội dung/typography/màu; năm ảnh đúng thứ tự; ảnh vuông | Eyebrow, Heading: nội dung/typography/màu; năm ảnh đúng thứ tự; ảnh vuông |  |  | Khớp |
| Chung (Desktop, Mobile) | Tag | Line-height | 24px (16px × 150%) | 19.2px | Tag không phải Button Primary/Secondary; cần scoped line-height của gallery-image__tag |  | Chưa khớp |
| Desktop | Layout | Khoảng cách ngoài hai mép | 20px theo Padding 5 của section | 48px | Kiểm section full-width và page margin; không đổi global để sửa gallery |  | Chưa khớp |
| Mobile | Grid/slide | Kích thước ảnh vuông | Ảnh khoảng 256px; chưa chốt parent ảnh trực tiếp | 283.83 × 283.83px; cần chốt parent và preview fraction |  |  | Chưa xác minh |
| Chung (Desktop, Mobile) | Tag | Đích liên kết | Link không trống; chấp nhận # theo quy ước demo | Năm tag href=#; đạt tiêu chí link, không yêu cầu URL merchant |  |  | Khớp |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — gallery

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/instagram`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-11030
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7401
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Five original/reused square images and gallery-image hover overlay. Replaced vertical slides with native horizontal single-child flex settings to prevent0width. Verified five271×271px images mobile and five visible desktop images. Social destination # remains a placeholder.

Local evidence: `/tmp/novaire-qa-evidence/mobile-gallery.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.
