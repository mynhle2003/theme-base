## Token Mobile đã xác minh qua Figma copy — 2026-10-28

Copy text riêng10090:1811 nhận default32px nên loại kết quả và xóa. Copy cả section Mobile47284:7218 sang Layouthub-copy root10090:1813; bản paste kế thừa Auto Desktop từ canvas đích, đặt Devices Mobile để phục hồi ngữ cảnh nguồn: width375/height356 và bố cục đúng nguồn. Deep-select text10090:1816; style label vẫn32/140 là metadata style mặc định. Detach style chỉ trên bản tạm cho font-size variable value Typo/h2=26px, Outfit Light, line-height140%,tracking2.56px. Không sửa nguồn. Đã xóa root tạm, DOM xác nhận không còn Frame14688; text tạm đầu cũng đã dọn. Tab nguồn mới2048918094 đã đóng.

Theme26px/36.4px/hai dòng72.78125px khớp typography nguồn. Figma box72px tương ứng làm tròn từng dòng36+36; chấp nhận theo quy ước, không tạo lỗi layout kế thừa. Sheet F50:J50 cập nhật số cụ thể, Không cần sửa, trạng thái Figma làm tròn; API đọc lại xác nhận. Không còn pending token Countdown Mobile.

---

## Quy ước timer minh họa — 2026-10-28

Theo yêu cầu người dùng và qa-theme vừa cập nhật, Figma chỉ có số mẫu không quy định campaign deadline: bỏ tiêu chí Ngày kết thúc/Chưa xác minh, ghi Timer vào Đã kiểm và khớp theo quy ước. Không sửa thời gian timer để khớp số mẫu. Sheet Homepage D49:J49 cập nhật qua Google Sheets API, giữ validation/style và các hàng khác; đọc lại xác nhận Khớp. Browser đang disabled nên không kiểm native render sau ghi. Typography Mobile/token còn Chưa xác minh độc lập; chiều cao Desktop Lần1 Khớp tương đối đã được chấp nhận. Đây là recheck kết luận theo quy ước, không phải phép đo runtime mới.

---

## Chốt Lần1 khớp tương đối theo người dùng — 2026-10-28

Người dùng chấp nhận mức khớp tương đối sau padding64px. Giữ cấu hình đã sửa; runtime253.984375px so với Figma255px, chênh1.015625px được chấp nhận, không gọi là làm tròn Figma hay khớp tuyệt đối. Sheet H48:J48 đã ghi quyết định, I=Lần1/J=Khớp và đọc lại xác nhận. Chỉ chốt tiêu chí chiều cao desktop; không tự đổi các mục typography/deadline còn chưa xác minh.

---

## Padding bù64px theo yêu cầu — 2026-10-28

Đổi padding_top/padding_bottom60→64 trong sections/countdown.liquid presets và templates/index.json spring_sale. Mobile56/56 giữ nguyên. Runtime sau reload localhost9301/client1905: computed64/64, height253.984375px. Còn1.015625px so với fixed255px; không tự gọi Figma làm tròn hoặc Pass tuyệt đối. Sheet H48:J48 ghi thay đổi, phép đo mới, Lần1/Chưa khớp; đọc lại xác nhận, giữ F/G lịch sử. Theme Check0errors. Không sửa implementation hoặc global settings.

---

## Nguyên nhân phần dư9px — xác minh Figma trực tiếp 2026-10-28

Chrome Properties root47054:14590: Height Fixed255px, padding60/60px. Deep-select Heading rồi truy cha bằng Shift+Enter: nhóm text Hug75px/gap2,5; Heading instance Hug75px; nhóm nội dung trái Hug126px/gap7(28px); container chung Fixed width1462px, Height Hug126px. Vì container chung đã đo trực tiếp126px, phần dư root =255−60−126−60=9px. Đây là khoảng dư do root fixed height lớn hơn nội dung+padding; không phải typo cộng dồn, cũng không phải gap/CTA bị thiếu. Runtime hug theo content125.984375+120=245.984375px; chênh9.015625 gồm9px fixed-frame dư và0.015625px làm tròn. Không suy cách phân bổ9px lên hai mép khi chưa đo alignment; không đề xuất đổi padding đúng để bù.

---

## Kiểm tổng sai số typography Desktop — 2026-10-28

Đọc lại từng text trong evidence Figma Properties desktop-text-styles.json / desktop-text-summary.json và các box runtime đã đo; đây là phép đối chiếu lại số liệu, không phải đo runtime mới. Các size H2/H1 vẫn dựa mapping hiện hành32/44px, token nguồn chưa resolve độc lập.

| Text | Công thức runtime | Box Figma | Box runtime đã đo | Figma trừ runtime |
| --- | --- | --- | --- | --- |
| Eyebrow |12×170%=20.4 |20 |20.390625 |-0.390625 |
| Heading một dòng |32×140%=44.8 |45 |44.796875 |+0.203125 |
| CTA label |13×160%=20.8 |21 |20.796875 |+0.203125 |
| Timer number |44×130%=57.2 |57 |57.1875 |-0.1875 |
| Timer label |16×150%=24 |24 |24 |0 |

Cột trái chi phối chiều cao, gồm Eyebrow +10 +Heading +28 +CTA(label+underline space2). Tổng Figma20+10+45+28+(21+2)=126px; runtime20.390625+10+44.796875+28+22.796875=125.984375px. Tổng sai số chỉ+0.015625px. Cộng padding120px: Figma suy từ con246px, runtime245.984375px. Root Figma fixed255px còn9px ngoài tổng con đã làm tròn. Không cộng các unit timer song song hoặc cộng timer vào cột trái; height hàng ngang lấy max126/89. Dấu colon không lớn hơn unit nên không chi phối. Không cộng paragraph spacing14px của Eyebrow một đoạn thành khoảng thêm.

Kết luận: với số đo đã có, làm tròn từng typo không tích lũy thành9px; các sai số trái dấu gần triệt tiêu. Chênh root fixed255px chưa chứng minh theme có lỗi cần sửa; giữ phân biệt chênh tổng root với lỗi typography/spacing. Cần đối chiếu constraint/căn dọc root nếu muốn quyết định có tái tạo fixed height hay chấp nhận hug. Không sửa theme trong lượt này.

---

## Recheck quy tắc làm tròn — 2026-10-28

Đọc lại Figma text Mobile bằng Chrome: Outfit300, Heading/H2,140%,tracking2.56px; Size vẫn chỉ hiển thị Typo/h2. Chưa resolve trực tiếp giá trị token nên không coi giả thuyết26px là chứng minh số học. Sheet H50 cập nhật rõ không tạo lỗi layout kế thừa làm tròn; giữ Chưa xác minh ở typography/token, không phải layout. Desktop9px là chênh fixed/hug chưa được giải thích bởi làm tròn nên giữ lỗi độc lập. Ngày kết thúc vẫn thiếu deadline campaign. Đọc lại A47:J50 xác nhận; tên nhóm Countdown đã xác nhận nguyên vẹn. Tab nguồn mới2048918073 đã đóng. Không đo runtime mới trong lượt này, không tuyên bố QA toàn section đạt.

---

## Đồng bộ Sheet — 2026-10-28

Đã kết nối lại bằng tab2048917848, đúng tài khoản minhle@beae.com. Đọc live A47:J50 trước ghi và đọc lại toàn nhóm sau ghi. Cập nhật H48: fixed255px so với hug245.98px, content125.98 + padding60×2, phần dư9px chưa được giải thích bằng làm tròn. Cập nhật F50:H50: Figma H2/140%/box72px/token Typo/h2; runtime26px/36.4px/tổng72.78; giả thuyết làm tròn từng dòng36+36=72. Giữ Chưa xác minh vì chưa resolve trực tiếp token Figma; không tự đổi thành Figma làm tròn. Giữ dropdown, merge, các hàng khác và trạng thái hiện hữu. Screenshot UI đã kiểm nội dung sau ghi. Phần chờ đồng bộ bên dưới là lịch sử đã được thay thế; việc xác minh token/viewport và cleanup vẫn còn.

---

## Recheck theo quy tắc typography/layout — 2026-10-28 (chờ đồng bộ Sheet)

Skill qa-theme nguồn đã cập nhật: không lặp layout hệ quả của typo/spacing/Grid đã báo; kiểm làm tròn line-height từng dòng và tổng text. Chưa sửa theme.

Đã đọc lại Figma Mobile bằng Chrome: node47284:7221, text Save 10% on bestsellers, box343×72px, Outfit Light300, Heading/H2, size token Typo/h2, line-height140%, tracking2.56px, hai dòng. Token size chưa resolve trực tiếp từ Properties; không coi 26px runtime là bằng chứng độc lập cho giá trị token Figma. Với giả thuyết token26px: mỗi dòng26×1.4=36.4px; làm tròn từng dòng36+36=72px, khác làm tròn tổng72.8→73px. Đây giải thích khả dĩ cho72/72.78px; cần xác nhận token trước khi đổi trạng thái thành Figma làm tròn.

Phép đo runtime mới trong lượt này: Desktop client1880px, section245.984375px; content125.984375 = eyebrow20.390625 + gap10 + heading44.796875 + padding heading18 + gap10 + CTA22.796875; section cộng padding60×2. Timer89.1875px không chi phối chiều cao hàng ngang. Figma Desktop nguồn lưu có fixed height255px: phần dư khoảng9px chưa được giải thích chỉ bằng làm tròn, nên chưa rút lỗi chiều cao độc lập. Không coi phép đo client1880 là kiểm width ở1920.

Mobile thử viewport375/client360: section356.96875px, heading72.78125px, line-height36.4px; content244.96875 = eyebrow20.390625 + gap10 + heading72.78125 + gap20 + timer71 + gap28 + CTA22.796875, cộng padding56×2. Viewport này chưa khớp frame375; đã yêu cầu viewport390 nhưng chưa đọc lại được, không lấy số đo này làm kết quả mới tại client375. Không tạo lỗi section do phần làm tròn kế thừa.

Lượt tiếp tục bị chặn: CUA trả “Local browser use is disabled in Work settings”; không thể kết nối lại tab Sheet2048915829. Sheet chưa được ghi trong lượt này; kết quả live đã đọc trước đó ởA47:J50 (khác range cũA41:J44). Cần tiếp tục đúng Sheet Novaire/Homepage, đọc lại dữ liệu live trước khi ghi; giữ các thay đổi của người dùng. Tab QA đã tạo2048917972(Figma),2048917975(preview) chưa xác minh cleanup; viewport cần reset khi browser được bật lại. Không tuyên bố QA hoặc đồng bộ Sheet hoàn tất.

---

## QA hiện hành — 2026-10-28

STT 9 — **Countdown**. Instance `index/spring_sale`; type `countdown`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A41:J44. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-14590
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7218
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-8.png`, `figma-m-8.png`, `final-desktop-8.png`, `final-mobile-8.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Eyebrow, Heading, Timer và Button; thứ tự Mobile heading → timer → action; nền #F6F0EC | Eyebrow, Heading, Timer và Button; thứ tự Mobile heading → timer → action; nền #F6F0EC |  |  | Khớp |
| Desktop | Tổng quan layout | Chiều cao section | 255px | 245.98px | Kiểm cụm Heading/Timer và constraint trước khi thay section padding |  | Chưa khớp |
| Chung (Desktop, Mobile) | Timer | Ngày kết thúc | Figma chỉ có số mẫu 02 / 12 / 20 / 00, không phải campaign deadline | Timer thực chạy; không coi số đếm khác là lỗi nội dung |  |  | Chưa xác minh |
| Mobile | Heading | Line-height / token | Figma hiển thị 72px cho hai dòng | Runtime 72.78px; cần chốt token gốc, chưa đủ cơ sở gọi làm tròn số học |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — countdown

## Fix theo yêu cầu và kiểm lại — 2026-10-27

**Trạng thái hiện hành: đã sửa đủ5 mục được giao; kiểm local đạt; chưa xác minh hoàn tất visual desktop/mobile.** Giữ nguyên bảng QA trước fix trong lịch sử bên dưới. Browser CUA báo Local browser use is disabled in Work settings; đã thử lại sau khi người dùng báo bật quyền và reset kết nối, inventory vẫn trả browsers trống kèm lỗi disabled. Native Chrome đọc được draft mới với Minutes/Seconds; thao tác responsive bị ngắt khi cửa sổ đổi. Không lấy setting/CSS source làm bằng chứng matched runtime.

| Mục được giao | Trước fix | Thay đổi | Kiểm lại / trạng thái |
| --- | --- | --- | --- |
| Eyebrow → heading |16px desktop /12px mobile |Preset và instance content gap10/10px. Heading bottom padding18/0px với parent gap10 cho heading → CTA28px desktop; gap mobile giữ nguyên20/28 ở nhóm cha. |Schema giá trị hợp lệ và preset/instance đồng bộ; render gap sau fix **unverified** |
| Bộ đếm |desktop480px; số → nhãn10px |Chỉnh CSS With separators thành475px và8px; mobile width352px/max-width100% giữ nguyên. |Theme Check không lỗi; phép đo runtime sau fix **unverified** |
| Dấu : |Poppins400,16px/16px,normal tracking |Dùng token Heading H4: font Heading, size md, style/weight Heading, line-height/tracking md; current tokens ánh xạ Outfit300,18px/160%,1.44px. Chỉ ảnh hưởng colon; Vertical line giữ nguyên. |Mapping token đã kiểm; computed style sau fix **unverified** |
| Nhãn unit |Min / Sec |Thêm countdown.minutes_full/seconds_full; chỉ With separators dùng Minutes/Seconds trong nội dung, unit-label và aria-live. Nhãn compact các style khác và marquee giữ nguyên. |10 actual Liquid render cases pass cho5styles×2separator; native draft AX xác nhận Minutes/Seconds. Nội dung **verified**; vị trí/crop label mobile cần kiểm visual |
| Nút gạch chân |anchor~25.8px, wrapper~28.8px; underline spacing5px và inline baseline |CSS scoped Countdown tertiary CTA dùng display:flex bỏ inline baseline; override --button-tertiary-underline-space:2px. Không sửa font13px/160%,tracking1.95px, color, visibility root hoặc CTA ở section khác. |Source scoped đúng; kích thước thực tế desktop/mobile sau fix **unverified** |

File sản phẩm: templates/index.json, sections/countdown.liquid (preset và scoped CTA CSS), blocks/countdown-timer.liquid, locales/en.default.json. Hồ sơ custom đã cập nhật. Không đổi global Theme Settings, không giảm padding60/56px để bù chiều cao. Chiều cao262/367px trong bảng trước là số đo trước fix; chưa có phép đo mới, không suy section đã đạt255/356px.

Kiểm local:10 ca render Liquid thực kiểm đầy đủ/compact labels và numbers-only đều qua; setting IDs/options/ranges hợp lệ; Add section preset và instance đồng bộ; Theme Check0errors/8warnings ngoài các file sửa trong lượt này; scoped git diff --check pass. Shopify plugin validator đã biết thiếu dependency theme-check-common từ lượt trước; không tuyên bố plugin validation pass. Không commit/push/publish/Save Theme Editor hoặc khởi động watcher. Draft đã phản ánh nhãn mới qua phiên đồng bộ có sẵn; lượt này không gọi upload/deploy.

Browser checkpoint `/tmp/countdown-preset-browser.json`: tab native QA trong cửa sổ mới đã đóng; tab Figma do tác vụ khác thêm vào cùng cửa sổ được giữ. Tab native QA đầu ở cửa sổ cũ còn pending cleanup vì không có tabID/inventory browser và không chọn mù tab của người dùng. Evidence visual cũ bên dưới chỉ là trước-fix, không chứng minh bản sửa.

---

## Lịch sử QA trước fix5 mục


## Kết quả QA hiện hành — 2026-10-27

**Kết luận: còn mismatch.** Kiểm chỉ đọc instance `index/spring_sale`, draft192827490603. Draft xác minh có class separator-colon và hai button visibility mới. Các ghi chú preview bị chặn ở lịch sử bên dưới đã được thay thế bởi lượt kiểm draft này; không sửa theme/config/store trong lượt QA.

Nguồn: desktop47054:14590 (1920×255), mobile47284:7218 (375×356), filevsUDZS8CZ0sa1pruNqu0eb; nguồn Style Guide/kế thừa giữ theo docs/theme-init/novaire-theme.md. Figma MCP đã chạm View-seat quota trong cùng tác vụ; dùng CUA/Chrome profileminhle@beae.com đã xác minh. Preview: https://layouthub-template-v2.myshopify.com/?preview_theme_id=192827490603 . Preview bar xác nhận novaire-theme local preview Draft.

Điều kiện đo: desktop viewport1935×1080, clientWidth1920 để loại15px scrollbar; đối chiếu thêm viewport1920/client1905 cho cùng chiều cao. Mobile viewport390×812/clientWidth375, content343 sau gutter16px mỗi bên. Font trạng thái loaded; document.fonts.check Outfit300 thành công. CSS mobile thực đo heading26px và số30px, không suy từ viewport. Không có media/grid/navigation trong Countdown. Editor lifecycle/hover không thuộc lượt visual QA này.

| Thiết bị / thuộc tính | Figma | Hiện tại | Độ lệch / trạng thái | Hướng xử lý |
| --- | --- | --- | --- | --- |
| Desktop / Tổng quan layout | Eyebrow, heading, nút bên trái; timer bên phải | Đủ thành phần, đúng vị trí nút; geometry chưa khớp bên dưới | mismatch | Giữ composition hiện tại, xử lý spacing/khung |
| Desktop / Chiều cao section |255px |261.98px |+6.98px, mismatch | Sửa nguyên nhân content/CTA trước; không giảm padding60px đã đúng để bù |
| Desktop / Container nhìn thấy |1462px, inset229px ở1920 |1462px, inset229px |matched | |
| Desktop / Eyebrow → Heading | Frame4061 cao75px, gap token2,5 =10px; text20+45px |gap16px; eyebrow20.39px, heading line44.8px |gap+6px, mismatch | Preset content.gap_desktop10; cờ Lần1, chưa sửa |
| Desktop / Heading → Button | Frame14629 heading group75px, action23px, gap28px | gap cấu hình32px (16 parent +16 heading padding); CTA anchor có thêm3px baseline offset | mismatch | Preset gap nền10 + heading bottom padding18 cho28px; xử lý baseline riêng; cờ Lần1 cho cấu hình |
| Desktop / Timer width |475px (node47054:14596) |480px |+5px, mismatch | Width hiện cố định trong CSS, thiếu setting theo thiết kế |
| Desktop / Số → Nhãn |8px (node47054:14597) |10px |+2px, mismatch | Gap nội bộ timer đang hardcode, cần custom/control |
| Desktop / Timer height |89px |91.19px |+2.19px, mismatch | Khác biệt gap8/10 là nguyên nhân chính; line box57/57.2 có làm tròn nguồn |
| Desktop / Button khung |117×23px; label13px/160%, tracking1.95px |anchor118.05×25.80px; wrapper cao28.80px; typography13px/20.8px/1.95px |khung mismatch; width~1px cần xét font shaping | Global tertiary underline padding5px tạo anchor cao hơn; baseline inline-flex thêm~3px trong wrapper. Có setting global underline offset nhưng ảnh hưởng mọi CTA; xử lý wrapper cần custom scoped |
| Mobile / Tổng quan layout | Căn giữa, heading2 dòng, timer, nút |Đúng thứ tự/căn giữa và hai dòng |matched về composition; spacing mismatch bên dưới | |
| Mobile / Chiều cao section |356px |366.97px |+10.97px, mismatch | Truy nguyên các dòng gap/CTA bên dưới; không bù bằng giảm padding56px đã đúng |
| Mobile / Container |375px; content343px, gutter16px |375px; content343px, gutter16px |matched | |
| Mobile / Eyebrow → Heading |Frame4061 cao102px, gap token2,5 =10px |gap12px; nhóm105.17px |gap+2px, mismatch |Preset content.gap_mobile10; cờ Lần1, chưa sửa |
| Mobile / Heading → Timer |20px |20px |matched | |
| Mobile / Số → Nhãn |8px (cùng component); timer content71px từ39+8+24 |10px; timer content73px |+2px, mismatch | Cần thay hardcoded gap hoặc thêm control |
| Mobile / Timer → Button |28px |28px tới wrapper; anchor bắt đầu thêm3px do baseline |gap wrapper matched; vị trí visible CTA mismatch | Không đổi padding bù8px; xử lý baseline wrapper |
| Mobile / Button khung |117×23px |118.05×25.80px anchor,28.80px wrapper |mismatch |Như desktop; không sửa font13px đã đúng để bù chiều cao |
| Chung / Nội dung unit labels |Days / Hours / Minutes / Seconds |Days / Hours / Min / Sec |mismatch | locales/en.default.json countdown.minutes/seconds đang rút gọn; sửa locale sẽ ảnh hưởng các timer khác, không có override local |
| Chung / Separator typography |Outfit300, H4,18px/160% (~28.8px), tracking1.44px |Poppins400,16px/16px, tracking normal |mismatch |CSS pseudo-element hiện dùng body tokens; cần map heading H4 cho colon, không thay default line |
| Chung / Separator loại & casing |Dấu :, nhãn Title case |Dấu :, không còn ép uppercase |matched | |
| Chung / Eyebrow typography/màu |Poppins400,12px/170%, tracking2px,#3A3A3A |Poppins400,12px/20.4px,2px,#3A3A3A |matched | |
| Chung / Heading typography/màu |Outfit300,H2,140%,tracking2.56px,#3A3A3A |Outfit300,32/26px,140%,2.56px,#3A3A3A; một/hai dòng đúng |matched các thuộc tính đã đọc; variable size suy đối chiếu từ line box45/72px | |
| Chung / Timer number typography/màu |Outfit300,H1,130%,3.6px,#3A3A3A; line box57/39px |Outfit300,44/30px,130%,3.6px,#3A3A3A; line57.2/39px |matched typography; glyph width02 nguồn57/40px vs59.70/43px cần kiểm font feature |Không tự đổi typography; kiểm tabular-nums/font shaping nếu cần QA glyph chính xác |
| Chung / Nhãn typography/màu |Poppins400,16px/150%,0px,#6C6C6C |Poppins400,16px/24px,normal,#6C6C6C |matched typography/màu; nội dung rút gọn vẫn mismatch riêng | |
| Chung / CTA typography/màu |Poppins400,13px/160%,1.95px,uppercase,#3A3A3A |Các thuộc tính trên khớp |matched | |
| Chung / Nền và padding |#F6F0EC; desktop60px, mobile56px |#F6F0EC;60/56px |matched | |
| Chung / Grid, media, pagination |Không có |Không có |not-applicable | |
| Chung / Hover, Theme Editor lifecycle |Không giao QA |Chưa kiểm |not-applicable cho lượt visual |Không suy release-ready |

Nguồn Figma chi tiết mới: số desktop47054:14599, timer47054:14596, unit47054:14597, eyebrow47054:14593, button label47070:15726; mobile root47284:7218, heading/frame4061 thuộc47284:7221. Separator đọc trực tiếp cả desktop/mobile: Outfit300/H4/160%/1.44px. Các lỗi visibility/thứ tự nút/uppercase trước đây đã được sửa và không còn là lỗi hiện hành.

Evidence cục bộ ngoài Git: `/tmp/novaire-countdown-visual-qa/desktop-preview.png`, `mobile-preview.png`, `desktop-figma.png`, `mobile-figma.png`, `desktop-metrics.json`. Screenshot preview lấy đúng draft mới, không dùng fixture component của lượt implementation. Glyph feature/font shaping và phép đo mobile device emulation không scrollbar còn unverified; không coi đây là lý do bỏ qua mismatch spacing đã đo bằng box/computed style. Các số countdown động không phải lỗi nội dung so với số minh họa Figma.

Kiểm file: báo cáo không có lỗi whitespace. `git diff --check` toàn worktree thấy blank line EOF tại sections/featured-collection.liquid:479 ngoài phạm vi; không sửa. Cleanup: tab QA mới đã đóng, viewport reset; hai tab lượt trước2048917083/2048917086 còn chờ cleanup do debugger detached (checkpoint/tmp/countdown-preset-browser.json).

---

## Lịch sử trước lượt visual QA hiện hành


Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/spring_sale`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-14590
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7218
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Removed duplicate nested64px padding through existing controls; desktop height190px vs target255. Mobile329px vs target356 at360px content width. Recurring64h23m retained; Figma digits are not an expiry specification.

Local evidence: `/tmp/novaire-qa-evidence/mobile-countdown.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.

## Countdown preset refresh — 2026-10-27

Requested sources re-read through CUA/Chrome, profile `minhle@beae.com`, after Figma MCP returned View-seat quota limit. Desktop node47054:14590:1920×255, horizontal, space-between,60px top/bottom, background#F6F0EC. Mobile node47284:7218:375×356, centered eyebrow, two-line heading, timer, then underlined action. Mobile heading inspected as Outfit Light, Heading/H2,140% line height,2.56px tracking.

Configuration mapping: existing `countdown` → `group` → eyebrow/heading, `countdown-timer`, action group/button. Preset name normalized to `t:general.countdown` (Countdown); original Content category retained. Both Add section preset and `index/spring_sale` now use heading `xl` (global H2:32/26px), timer `display` (global H1:44/30px), and button `tertiary`. Existing copy, resource link, recurring64h23m, padding and unrelated local edits retained; no media selected or uploaded.

Verified: preset/instance composition synchronized; existing schema IDs/options/ranges valid; section implementation unchanged. Theme Check:0 errors,7 warnings.

Visual status: source desktop/mobile inspected; output after these edits **unverified** because existing loopback preview port9300 is closed. No preview startup, upload, push or Theme Editor save performed. Prior height measurements above are historical and do not verify this revision.

Remaining configuration capability gap: desktop Figma places action beneath heading on the left and timer on the right; mobile places action after timer. Current block controls have no responsive order or per-breakpoint visibility. The closest composition retains mobile order and therefore has a separate right-hand action on desktop. Exact output height, spacing, wrapping and timer geometry require rendered comparison when preview is available; no CSS/markup/control added to compensate.

## Preset capability recheck — 2026-10-27

Re-inspected original desktop/mobile via CUA/Chrome. Additional source evidence: mobile inner container47284:7219 height244; heading/timer group47284:7220 height193, gap token5; heading component47284:7221 height102. Outer content-to-button gap token7 resolves to28px from244−193−23; heading-to-timer gap token5 resolves to20px (193−102−71). These are design-derived settings; actual output still needs preview verification. Labels inspected directly on mobile47284:7226 and desktop47054:14600: Poppins400,16px,150%,0px tracking,#6C6C6C. Desktop container47054:14591:1462px wide.

Applied to preset and instance: mobile parent gap20px plus timer bottom padding8px gives configured20/28px spacing; labels `md` maps to16px (previous `xs`12px); desktop layout inline padding21px per side maps existing1504px page content to1462px at1920px. Mobile inline padding remains0 within existing16px page gutters, preserving343px content at375px. No global settings or implementation changed.

Additional confirmed implementation gaps: `with_separators` draws1px vertical rules instead of Figma colon text; it forces label text uppercase instead of Days/Hours/Minutes/Seconds. Other timer styles do not preserve the same stacked numeric/label layout with colons. The timer's unit widths/gaps and number-to-label10px spacing are implementation-owned; no local preset controls exist for these. Responsive action placement remains unresolved as described above. Height255/356, live spacing/wrapping, exact timer geometry and overflow after configuration remain **unverified**, not confirmed mismatches, because port9300 remains unavailable; no upload/startup performed.

## Authorized implementation controls — 2026-10-27

Owner explicitly requested separator selection, removal of forced uppercase unit labels and button visibility controls. Inspected Essen/Arche local button/group implementations: neither currently exposes equivalent visibility controls. Added button Visibility → Show on: All devices (default), Desktop only, Mobile only. Invalid/missing values fall back to All devices. Hidden roots use display:none at the existing768px breakpoint, removing layout space and keyboard/accessibility exposure. No JS/editor listeners introduced; block attributes retained.

Timer With separators now exposes Separator: Vertical line (legacy default) or Colon (:), shown only for that style. Invalid/missing separator falls back to line. Colon decoration is centered using logical positioning; labels retain translated casing rather than forced uppercase. Homepage/preset selects colon, places desktop-only action inside heading group and mobile-only action directly after timer, removing the old empty action wrapper. Heading bottom padding16/0 with content gap16/12 gives configured heading-to-action32px desktop without adding mobile padding. Other existing button/timer instances retain their defaults.

Validation:9 actual Liquid render cases passed (visibility defaults/all/desktop/mobile/invalid; separator default/line/colon/invalid). Local component fixture browser inspection at1920,375,767,768 verified visibility switches and hidden links absent from accessibility tree; computed label transform none and colon/line border distinction verified. This fixture is not a full Shopify section preview. Preset/instance equivalence, schema values/allow-lists and locale references pass. Theme Check0errors/7warnings; git diff --check passes. Shopify AI Toolkit validator unavailable due missing @shopify/theme-check-common. check-custom reports unrelated sections/rich-text.liquid lacking a customization record; that implementation was not changed by this task.

These changes resolve the three implementation gaps recorded above. Full Shopify storefront/editor lifecycle, exact255/356px section heights, wrapping and spacing remain unverified until a working full-theme preview is available. No Shopify upload, Theme Editor save, commit or push. Temporary component fixtures/tab/server cleaned after QA.
