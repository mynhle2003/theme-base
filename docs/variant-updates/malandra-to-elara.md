# Malandra → Elara: Header, Search và Lighthouse

Ngày: 2026-10-15. Nguồn: `malandra-theme`, branch `theme/malandra-theme`, HEAD `0732ecfe8b7687d345a04c1a4d8617b1fd43ce22` + patch local chưa commit. Đích: `../elara-theme`, branch `theme/elara-theme`, HEAD tham khảo `f17d6b7f1a961364aff9d9fcc424b266a2164105`.

Chỉ ghi kế hoạch để đọc và update sau. **Chưa áp dụng code, upload preview, commit/push hay publish Elara.** Quy tắc: `agents-build-themes/skills/build/new/build-theme/references/variant-updates.md`. Kiểm tra lại HEAD và worktree hai repo khi thực hiện; commit nêu trên không chứa toàn bộ patch local.

| Mã update | Revision | Nội dung | Trạng thái Elara | Dependency |
| --- | --- | --- | --- | --- |
| MALANDRA-ELARA-HEADER-NAV-001 | 1 | Đồng bộ breakpoint, xử lý menu và overflow cắt mega menu | applied — local patch 2026-10-15; xem receipt cuối doc | Header/drawer hiện có của Elara |
| MALANDRA-ELARA-HEADER-ACTIONS-001 | 1 | Icon vuông dùng biến chung; Gap actions thành padding; inspect chỉ ô icon | applied — local patch 2026-10-15; xem receipt cuối doc | NAV-001 nếu dùng chung contract mobile992px |
| MALANDRA-ELARA-HEADER-COLOR-001 | 1 | Icon theo currentColor của scheme | applied — local patch 2026-10-15; xem receipt cuối doc | Kiểm tra SVG thực tế ở Elara |
| MALANDRA-ELARA-ACCOUNT-001 | 1 | Account bottom sheet theo breakpoint header | applied — local patch 2026-10-15; xem receipt cuối doc | NAV-001; component Shopify còn export dialog part |
| MALANDRA-ELARA-SEARCH-001 | 1 | Search input/button theo theme settings | applied — local patch 2026-10-15; xem receipt cuối doc | Form primitive, theme-button, predictive controller của Elara |
| MALANDRA-ELARA-LOGO-001 | 1 | Alternate logo đúng nguồn, đổi layer không nhảy kích thước | applied — local patch 2026-10-15; xem receipt cuối doc | Chỉ áp dụng nếu Elara còn lỗi; giữ artwork riêng |

## Điều kiện trước mọi update

- Tái hiện lỗi/gap ở **Elara** với đúng option, viewport và trạng thái. Không lấy trạng thái pending hoặc QA Malandra làm bằng chứng Elara đang lỗi.
- Nếu Elara đã có fix tương đương, ghi `skipped` với bằng chứng. Chưa kiểm tra được thì giữ `pending`; contract không tương thích thì ghi `conflict`.
- Chỉ chuyển patch nhỏ nhất theo mã được yêu cầu; không copy toàn bộ file, ghi đè custom/working changes, schema hay giá trị merchant.
- Không chuyển header preset Figma, menu `malandra-header`, collection handles, ảnh/banner, logo Malandra, giá trị logo100/92px, bật Transparent header hoặc cấu hình trang chủ. Đây là nội dung riêng nguồn, không phải dependency của fix dùng chung.
- Tách trạng thái code (`pending/applied/verified/skipped/conflict`) khỏi preview upload và publish. Ghi doc không cấp quyền triển khai.

## MALANDRA-ELARA-HEADER-NAV-001

**Nguồn:** `assets/header.js`, phần header first-paint trong `assets/critical.css`, `blocks/_header-top.liquid`, `_header-menu.liquid`, `_header-menu-toggle.liquid`, `_header-logo.liquid`, `_header-search.liquid`, `_header-account.liquid`, `_header-cart.liquid`, `_header-mega-menu.liquid`.

Lỗi nguồn: handler legacy mobile chạy nhầm trên desktop; trạng thái menu còn tồn tại sau đổi mode; nav mang utility cuộn cũ làm mega menu bị cắt ở1149px dù chưa sang mobile.

- Header nguồn dùng desktop `min-width:992px`, mobile `width < 992px`. Runtime dùng một desktop MediaQueryList và lấy mobile bằng phủ định; không để khoảng hở991.98–992px.
- Tại boundary: đóng drawer/Account, hủy timer đóng submenu, clear trạng thái desktop, trả mega content đã di chuyển về đúng vị trí và tổ chức lại cột.
- Bỏ summary-click handler legacy gán `is-mobile-submenu-active` cho nav desktop; dedicated drawer sở hữu submenu mobile.
- Bỏ `scrollbar--vertical-until-desktop` khỏi nav desktop. Utility dùng `max-width:1149.98px` với overflow hidden/auto đã cắt absolute mega menu. **Không xóa utility toàn theme**; drawer vẫn có scroll surface riêng.
- Giữ breakpoint phụ phục vụ typography, margins, grid/banner và các component khác (768/1150px…) khi chúng không chọn navigation mode. Audit Elara trước khi quyết định mốc navigation; CSS/JS phải cùng contract.

**QA:** click/hover ở767,768,991,992,1024,1149,1150,1280px; desktop→drawer→desktop khi đang mở menu; Escape/focus; backdrop và sticky; di chuyển mega content; editor reload. Không chỉ dùng `isVisible()` — kiểm tra overflow ancestor và hit-test link/card nằm ngoài box nav để phát hiện clipping.

## MALANDRA-ELARA-HEADER-ACTIONS-001

**Nguồn:** `assets/critical.css`, `blocks/_header-top.liquid`, `_header-search.liquid`, `_header-account.liquid`, `_header-cart.liquid`, `_header-menu-toggle.liquid`; SVG sizing trong `snippets/header-figma-icon.liquid` chỉ tham khảo, không mang artwork Malandra sang Elara.

- Một biến icon dùng chung: `--header-action-icon-size` đọc option Icon size (`--header-icon-size`, fallback20px). Width và height của icon/SVG cùng biến; SVG giữ aspect ratio. Loại các kích thước lặp/cứng trong từng action và toggle mobile.
- `--header-action-padding-inline = Gap actions / 2`; mobile lấy option Gap actions mobile khi bật customize. Padding nằm trên block action ngoài, cột và luồng first-paint dùng gap0. Header column gap, menu gap và gap icon–text bên trong block là các trách nhiệm khác, không thay đồng loạt.
- Cart badge phải neo vào ô icon (`position:relative`), không neo action block có padding. Canh góc trên inline-end, hỗ trợ RTL; bỏ negative inset/mobile margin cũ nếu đã không cần. Giữ count dạng text và màu badge theo option. Kiểm tra khoảng cách badge không đổi khi tăng Gap actions.
- Native Shopify Account cần bỏ padding/min-width dư ở `::part(signed-out-avatar)`; signed-in avatar size đọc cùng biến. Kiểm tra component thật, không chỉ fixture HTML, để tránh Account rộng hơn Search/Cart.
- Theo yêu cầu owner: inspect trong Theme Editor **chỉ bao ô icon, không tính padding**. Gắn `block.shopify_attributes` vào icon/inner target, padding giữ trên phần tử tương tác ngoài. Toggle có một target bọc cả hai trạng thái icon. Text-only/Search bar giữ target nội dung phù hợp. Không phát sinh editor attributes trùng cho cùng variant đang hiển thị.

**QA:** Icon size16/20/28px; Gap actions0/8/24px và mobile override; icon boxes vuông; spacing giữa icon khớp option; first-paint/init/resize; native Account signed-out/signed-in; Search các kiểu icon/text/bar; Cart badge. Trong Theme Editor bật inspector, chọn/reorder/reload và xác nhận outline không bao padding. QA inspector trực tiếp này chưa hoàn tất ở nguồn, bắt buộc kiểm tra đích trước verified.

## MALANDRA-ELARA-HEADER-COLOR-001

**Nguồn:** `snippets/header-figma-icon.liquid` và các header action blocks. Audit snippet icon hiện hữu của Elara trước.

Thay fill/stroke màu đơn sắc cứng bằng `currentColor`, giữ `none`, path/viewBox và hình học; không áp dụng máy móc cho artwork nhiều màu. Icon nhận màu control/scheme ở normal, transparent và khi mở mega menu/scroll/sticky. Không đặt icon trắng/đen cố định để chữa từng trạng thái.

**QA:** ít nhất hai scheme khác màu; transparent→normal khi mở menu, Search, Account hoặc scroll; mobile toggle/cart. Kiểm tra computed fill/stroke khớp computed color.

## MALANDRA-ELARA-ACCOUNT-001

**Nguồn:** Account CSS cuối `assets/critical.css`, close Account ở boundary trong `assets/header.js`.

Component `shopify-account` đã quan sát ở nguồn tự dùng751px desktop/750px sheet, lệch992px của header. Mở rộng bottom sheet qua `.header-top shopify-account::part(dialog)` dưới breakpoint navigation; áp dụng cả Account trên header và `.header__mobile-drawer-account`. Giữ auth content, sự kiện, focus và form của Shopify; không chèn/chỉnh shadow DOM hoặc dựng lại đăng nhập.

CSS dùng theme bottom-sheet radius/backdrop và native opening/closing animation tokens. Part `dialog` và tên animation tokens được quan sát từ component hiện tại, có thể thay đổi khi Shopify cập nhật: **xác minh lại ở Elara**, không coi là API đã bảo đảm ổn định. Từ desktop boundary giữ native popover. Tái dùng close helper khi đổi mode.

**QA:**715,750,751,878,991,992px; sheet bám đáy và slide-up dưới header boundary; desktop popover; Escape/backdrop/close, focus restore và resize. Không cần submit auth để QA giao diện. Nguồn giữ nội dung đăng nhập gốc.

## MALANDRA-ELARA-SEARCH-001

**Nguồn:** `sections/search-overlay.liquid`; một fix background ở `blocks/_search-input.liquid`.

Nguồn tham khảo composition sẵn có của Arche/Essen/Elara: suggestions, tabs và cards. Submit cũ thiếu styling làm box16×6px; input ghi đè font/placeholder khiến option không có tác dụng.

- Dùng `theme-button` cho submit, giữ primitive primary nhận Button settings. Giữ option riêng View all style, không dùng nó thay option submit.
- Form grid input co giãn + submit + close, thay close absolute và input padding phục vụ icon thừa. Input nhận shared solid/outline, height desktop/mobile, border/radius/colors/focus và `--form-input-font-size`; không hardcode kích thước/form typography.
- Bỏ backdrop transparent override để dùng shared overlay treatment. Giữ appearance/scheme, placeholder/source toggles, predictive/Enter/Escape và endpoint hiện có.
- Full Search input khi mở smart results dùng `--input-background-color` thay `#fff`; giữ option height/padding của block, không copy preset.

**QA:** solid/outline; thay height/font/radius/border/button tokens;375/878/1440px không chồng/tràn; query `ring`, tabs, View all/Enter, empty/loading/error, placeholder và editor lifecycle. Không thay global settings để mô phỏng nguồn.

## MALANDRA-ELARA-LOGO-001

**Nguồn:** `blocks/_header-logo.liquid` và first-paint layer rules trong `assets/critical.css`. Không lấy SVG/AVIF logo nguồn.

Nếu theme có block logo override, không lấy nhầm transparent artwork global không tương ứng. Nguồn bổ sung optional block transparent-wordmark/symbol pickers và layer switching cùng geometry; width/mobile width cùng option cho hai trạng thái. Fallback transparent: **chỉ chữ trắng; biểu tượng phía trên giữ màu gốc** trừ khi merchant chọn alternate symbol. Chỉ chuyển contract này nếu phù hợp logo/schema Elara; nếu Elara dùng global logo đúng sẵn, không thêm block schema vô ích. Bảo toàn artwork, thiết lập và tỉ lệ riêng đích.

**QA:** không hiện hai layer/chồng/mất logo; normal↔transparent↔menu-open không nhảy kích thước; mobile/desktop; thiếu alternate; first-paint. Không tự bật transparent hoặc thay logo đích.

## Bằng chứng nguồn và receipt khi áp dụng

- Tests nguồn: `tests/header-navigation-breakpoints.test.cjs` (18), `tests/header-action-spacing.test.cjs` (4), `tests/header-transparent-branding.test.cjs` (2); Search settings/history/page/suggestions (19). Đây là QA nguồn, không xác nhận đích.
- Theme Check nguồn: zero errors,5 warnings ExcessiveSettingsCount có sẵn. Inspector outline trực tiếp và signed-in Account còn cần QA đích. Các file nguồn còn uncommitted; đọc diff mới nhất trước khi chuyển.
- Tham khảo: `docs/audits/malandra-header-breakpoints-2026-10-15.md`, `docs/theme-customizations/malandra-theme.md`.
- Khi áp dụng từng mã, ghi ngày/revision, source snapshot, target before/after commit hoặc patch local, bằng chứng tái hiện trước sửa, patch thực tế, QA sau sửa, phần chưa kiểm tra, trạng thái code/preview/publish riêng. Ghi cùng mã và link doc nguồn vào customization record Elara.

Lịch sử:2026-10-15 — tạo doc theo yêu cầu owner; cả6mã pending, chưa cập nhật Elara.

## Lighthouse — bổ sung 2026-10-15

Owner yêu cầu tối ưu Lighthouse tại Malandra và thêm vào doc update variant. Nguồn mới: `theme/malandra-theme`, HEAD `908780fb02b9ed61d9df0880f82284bdf853ae9f` + patch Lighthouse chưa commit. Preview nguồn đúng là **192330498347**, không phải Arche 192282820907 trong URL đầu tiên. [Báo cáo và ledger nguồn](../qa/malandra-lighthouse-2026-10-15.md), [manifest/hashes](../audits/malandra-lighthouse-2026-10-15.json).

| Mã update | Revision | Nội dung | Trạng thái Elara | Dependency |
| --- | --- | --- | --- | --- |
| MALANDRA-ELARA-LIGHTHOUSE-HERO-001 | 1 | Ưu tiên hero đầu trang; preload art-directed khớp picture; source-size caps | applied — local patch 2026-10-15; xem receipt cuối doc | Cơ chế head `theme-lcp-preloads` và Hero đích |
| MALANDRA-ELARA-LIGHTHOUSE-CSS-002 | 1 | Tám CSS owner tải theo component, giữ nguyên rules đích | applied — local patch 2026-10-15; xem receipt cuối doc | Owner/asset contract đích; độc lập Hero |
| MALANDRA-ELARA-LIGHTHOUSE-CONTRAST-003 | 1 | Tab inactive đủ tương phản theo scheme | applied — local patch 2026-10-15; xem receipt cuối doc | Shared Tab Layout và schemes đích; độc lập hai mã trên |
| MALANDRA-ELARA-LIGHTHOUSE-MARQUEE-004 | 1 | Idempotent cleanup, hết observer feedback và clone churn | applied — local patch 2026-10-15; xem receipt cuối doc | Animation scan + marquee observer đích |
| MALANDRA-ELARA-LIGHTHOUSE-ANIMATION-005 | 1 | Khởi tạo animation section dưới fold khi gần viewport | applied — local patch 2026-10-15; xem receipt cuối doc | Giữ fix 004 nếu đích còn feedback; section lifecycle/IntersectionObserver |

### MALANDRA-ELARA-LIGHTHOUSE-HERO-001

Nguồn: `sections/hero.liquid`, snippet mới `snippets/hero-image.liquid`; dependency layout hiện có đọc marker `theme-lcp-preloads`. Chỉ Hero ảnh ở template position 1 nhận eager/high và media-qualified preloads; Hero sau nhận lazy/auto. Preload phải dùng **cùng srcset/sizes** với picture tại mỗi breakpoint, không tải cả hai artwork; cap candidate ở kích thước ảnh gốc. Giữ focal point, crop/geometry, decorative alt và video branch. Không copy ảnh, text, scheme, dimensions hay homepage preset Malandra.

Trước apply: kiểm tra Hero và head của Elara còn thiếu ưu tiên/preload, kiểm tra section.index và capture/render order trong storefront/Theme Editor. Nếu đích đã tương đương thì skipped; nếu dependency head không tương thích thì conflict, không copy cả layout. QA: first/later Hero, mobile absent/small sources, video, 375/768/1280px, no-JS và editor reload/reorder; network xác nhận đúng artwork và không request trùng preload/picture.

### MALANDRA-ELARA-LIGHTHOUSE-CSS-002

Danh sách tám owner/asset và source hashes nằm trong báo cáo nguồn. Elara phải audit bundle và owner trước: chỉ trích phần CSS vẫn còn nằm trong bundle chung. **Trích CSS đang có của Elara**, không copy CSS Malandra hoặc thay phiên bản stylesheet/custom layout của Elara. Nếu đã có dependency asset tương đương thì skipped. File owner và asset phải chuyển cùng nhau; link tải đồng bộ trước markup, giữ layout reservation/no-JS và stylesheet khi editor/resource render. Không tồn tại đồng thời rule trong `{% stylesheet %}` và asset mới.

QA: so sánh CSS trước/sau byte-identical, schema/preset/runtime không đổi; kiểm tra cascade với shared styles, template dùng từng owner và Theme Editor add/reload. Đo bundle/transfer và Lighthouse độc lập ở Elara; không lấy 63,803 source bytes hoặc score nguồn làm bằng chứng đích. Giữ scope owner hiện hữu, không tách CSS global foundation chỉ để giảm điểm.

### MALANDRA-ELARA-LIGHTHOUSE-CONTRAST-003

Nguồn `snippets/tab-layout-styles.liquid`: 48% body/transparent và 44% heading/background làm tab nhỏ thiếu tương phản trên nền trắng; nguồn đổi inactive mix thành 95% text token với scheme background. Giữ selected/hover/underline, font, dimensions, controls và merchant settings. Elara chỉ áp dụng khi tái hiện contrast failure; đo cả schemes sáng/tối thực dùng trước khi chọn tỷ lệ phù hợp, không copy hardcoded màu Malandra. QA normal/hover/selected/focus, mobile/desktop và Lighthouse color-contrast. Nếu text token gốc đã thiếu contrast với nền, giải quyết đúng scheme đích thay vì coi mix 95% là bảo đảm cho mọi palette.

### Bằng chứng và receipt Lighthouse

Nguồn HTTPS Lighthouse 13.5.0: mobile Performance 66→86, LCP 4.03→2.95s, TBT 351→52ms; desktop 84→97. Accessibility 93→96; color-contrast pass. Đây là single lab runs, có một lần trung gian LCP mô phỏng bất thường và lỗi ImageElements khiến Best Practices null; đọc toàn báo cáo trước khi viện dẫn. Chưa hoàn tất editor lifecycle của mọi optional owner. Source draft đã upload/readback 19 file; chưa publish/Git commit/push. **Cả ba mã ở Elara vẫn pending; không có target mutation hoặc QA.**

Khi được yêu cầu áp dụng, ghi source revision/patch hash mới nhất, target before/after, lỗi tái hiện đích, patch/QA, trạng thái code/preview/publish riêng theo quy tắc đầu doc. Header/footer vẫn `animation_type: none`; giữ delay và component interactions. Lịch sử ngày 15/10/2026: bổ sung ba mã Lighthouse, không thay trạng thái sáu mã Header/Search.

## MALANDRA-ELARA-LIGHTHOUSE-MARQUEE-004 — Best Practices, 2026-10-15

Revision 1. Nguồn `daf292dc` + patch local `assets/block-animations.js`; Elara **pending**, chưa audit/apply/upload. Độc lập ba mã Lighthouse phía trên; dependency là animation scan và marquee MutationObserver thực tế của đích, không phụ thuộc preset/media Malandra.

Bug nguồn: animation scan ghi lại class/data trạng thái không đổi trên excluded marquee children; marquee rebuild clones vì mutation, rồi childList kích hoạt animation scan tiếp. Node ảnh trong clone liên tục bị tháo làm Lighthouse ImageElements thất bại. Sửa tối thiểu bằng guard `classList.contains('reveal-pending')` trước remove và so sánh `dataset.animationInitialized !== 'true'` trước ghi ở nhánh excluded. Không copy cả runtime; giữ Type/Delay, exclusions, focus, reduced motion, editor lifecycle, header/footer None và interactions của Elara.

Đích phải tái hiện clone churn khi nội dung đã ổn định trước apply. Đã idempotent/tương đương thì skipped; chưa xác minh thì pending; runtime không tương thích thì conflict. QA clone identity ổn định, merchant text update, resize, editor unload/reload và reduced motion; Lighthouse không còn gatherer errors. Không chữa lỗi bằng nới SVG sanitizer, bỏ audit, tắt cookie/pixels/account hoặc user-agent detection.

Nguồn: clone removals 108→0/600ms; full Lighthouse mobile/desktop Best Practices **77/77**, ba image audits pass, zero gatherer errors; Performance 87/98. Hai warning cookie còn lại thuộc Shopify Shop/Shop Pay/Web Pixels. [Báo cáo follow-up](../qa/malandra-lighthouse-2026-10-15.md#best-practices-follow-up--2026-10-15), [evidence/hash](../audits/malandra-best-practices-2026-10-15.json). Source draft 192330498347 đã upload/readback riêng JS; chưa Git commit/push follow-up hoặc publish. Elara vẫn pending và cần bằng chứng riêng; không dùng score nguồn để verified đích.

Receipt Git mới nhất cho 004: runtime nguồn đã có tại `17a3623c`; docs/evidence tại `4c1d4e62`. Các ghi chú chưa commit phía trên là lịch sử trước release. Trạng thái Elara vẫn pending.

## MALANDRA-ELARA-LIGHTHOUSE-ANIMATION-005 — Mobile Performance, 2026-10-15

Revision 1. Nguồn `theme/malandra-theme`, checkpoint `12cb57fec308a4ef00800f1327e6b887b000c8d3` + patch local `assets/block-animations.js`; hash/readback trong [evidence JSON](../audits/malandra-mobile-performance-2026-10-15.json). Đích Elara **pending**, chưa audit/apply/upload/publish. Không chuyển preset/content/media hoặc toàn bộ runtime Malandra.

**Lý do:** khởi tạo mọi section ngay lúc mở trang đo row geometry, scan cards và split heading text cả ở phần rất xa viewport. Hai baseline mobile hoàn tất trên cùng CSS/runtime đạt 82 và 90 điểm; TBT 355.5/95.5ms và animation long task 160/115ms. Lần baseline 89 điểm có load timeout được lưu nhưng loại khỏi so sánh đầy đủ. Một score 87 trước đó không phải mức bảo đảm cho mọi lần chạy/máy; không dùng lần cao nhất làm baseline.

**Patch cần chuyển khi đích còn gap:** trên storefront có IntersectionObserver, root section nằm xa hơn viewport +300px được observe, chỉ tạo controller khi approach. Root gần viewport, đang chứa focus hoặc có height 0 (có thể sở hữu fixed overlay) vẫn init ngay. Theme Editor và trình duyệt không có IntersectionObserver init ngay như cũ. Khi init phải unobserve để không tạo controller trùng; section unload unobserve cả root chưa init; section load/reload init trực tiếp. Giữ từng effect, delay/stagger, first-paint boot timeout, no-JS, focus visibility, reduced motion và fix idempotence 004; header/footer vẫn None. Không delay native account/cart hoặc tắt tracking để nâng score.

**Audit đích trước apply:** xác nhận Elara còn scan mọi root dưới fold tại startup và có cost thực tế; kiểm tra contract root/zero-height overlays/editor/animation của đích. Đã lazy/equivalent thì skipped; chưa xác minh thì pending; contract khác không thể chuyển patch tối thiểu thì conflict. Không mặc định root nào có geometry zero cũng là section không dùng.

**Acceptance:** first viewport init ngay; root xa chưa split/scan cho đến approach rồi vẫn reveal đúng; editor chọn/reload section không phải cuộn mới hoạt động; missing observer/reduced motion/focus/no-JS đọc được; unload root pending không init về sau, reload hoạt động; giữ marquee clone ổn định khi nội dung không đổi. Đo chuỗi mobile cùng config, giữ tất cả report/warnings, loại load timeout khỏi thống kê hoàn tất và ghi median/range. Không coi giảm CPU fixture hay score nguồn là verified đích.

**QA nguồn:** Chrome pass storefront near/far, editor immediate, missing observer, reduced motion, pending unload/reload; marquee regression tiếp tục 0 clone removals sau settle, merchant text update/resize/editor reload pass. Theme Check 0 errors/5 warnings cũ; JS syntax/diff check pass. Ba mobile report sau upload đạt **89/87/89**, median **89**, LCP median **3.09s**, TBT median **34ms**; không animation task >50ms trong cả ba trace; Best Practices 77, zero gatherer errors. Không tuyên bố score tăng cố định vì baseline và Shopify scripts có dao động.

Accessibility các lần mới là 93: phát hiện metadata bài blog màu #999 trên trắng thiếu contrast; patch không thay màu này. Không dùng tối ưu animation để che audit; ghi gap riêng trong QA report. Source chỉ upload riêng animation asset lên draft 192330498347 lúc 13:34:57 giờ Việt Nam, readback khớp. Chưa Git commit/push patch 005, chưa đo lại desktop và chưa QA toàn bộ theme live; Elara vẫn pending. Các thay đổi layout/section khác đang được thực hiện riêng không thuộc upload này.

Git release 005: owner yêu cầu commit/push; runtime đã được Shopify đồng bộ tại `52d8b37c`. Commit tài liệu/evidence tiếp theo giữ nguyên runtime này, không bao gồm file test. Các ghi chú chưa commit phía trên là trạng thái tại thời điểm đo; Elara vẫn pending.

## Receipt Elara đã update — 2026-10-15

Source: `../malandra-theme/docs/variant-updates/malandra-to-elara.md`, revision 1, source branch `theme/malandra-theme`, clean HEAD `a3aef5c8044e9e14443920da80e83b8358baf971`. Target: `theme/elara-theme`, before HEAD `bebd784bf4f236297b0a36c12c5ba6bbca9568a9`; after: local patch, not committed. User explicitly authorized the complete Malandra header preset with only the two Elara logo image links retained; this supersedes the source doc's earlier preset exclusion for this application.

| Update ID | Code status | Target evidence and patch |
| --- | --- | --- |
| MALANDRA-ELARA-HEADER-NAV-001 | applied | Target had legacy desktop click handler, 991.98px boundary gap and desktop nav scroll-clipping utility. Removed handler/utility; complementary 992px CSS/JS boundary and resize cleanup. Browser click/hover/resize tests pass at 767/768/991/992/1024/1149/1150/1280px. |
| MALANDRA-ELARA-HEADER-ACTIONS-001 | applied | Target repeated icon sizing and column gap; introduced icon variable, action padding, icon-relative cart badge and inspector inner targets. Browser square-icon/action-gap and LTR/RTL badge tests pass. Native signed-in Account and actual Editor inspector still require QA. |
| MALANDRA-ELARA-HEADER-COLOR-001 | applied | Header icon snippet uses currentColor; imported requested header geometry. Browser normal/transparent scheme fixture checks recorded separately from native storefront QA. |
| MALANDRA-ELARA-ACCOUNT-001 | applied | Native dialog part CSS extends mobile sheet to <992px; boundary close helper retained. Actual exported Shopify component parts, signed-in state and focus restoration need target storefront QA. |
| MALANDRA-ELARA-SEARCH-001 | applied | Target unstyled compact submit and input font/placeholder overrides remained. Uses theme-button, shared form settings and grid close placement; smart input background uses shared token. Search settings/history/page/suggestions regression suite run. |
| MALANDRA-ELARA-LOGO-001 | applied | Original target used global normal/transparent artwork. New requested header composition uses explicit block logo and transparent logo with those exact original links, no Malandra symbol; retains Malandra width/position/preset settings. |
| MALANDRA-ELARA-LIGHTHOUSE-HERO-001 | applied | Target image Hero lacked explicit first-section priority and art-directed preload despite compatible head extraction markers. Imported implementation/helper only; retained complete Elara Hero schema, preset, media and video path. Liquid validator passes with two explicit-preload advisories. Network/editor QA remains. |
| MALANDRA-ELARA-LIGHTHOUSE-CSS-002 | applied | All eight target owners still bundled CSS. Extracted the target's own CSS byte-for-byte (63,803 bytes), with synchronous asset dependencies. Hash ledger: docs/audits/elara-variant-update-2026-10-15.json. Existing horizontal collection work preserved: removing new asset link and reinserting its CSS reproduces the pre-update working file exactly. |
| MALANDRA-ELARA-LIGHTHOUSE-CONTRAST-003 | applied | Target inactive tab mixed #636363 at 48% onto #fff (approximately #b4b4b4, below 4.5:1). Changed only that mix to 95% against scheme background. No separator/layout additions from source. Palette contrast evidence recorded in audit. |
| MALANDRA-ELARA-LIGHTHOUSE-MARQUEE-004 | applied | Target actual runtime + marquee browser fixture reproduced 108 clone removals/600ms; after guarded class/data writes: 0, retaining 3 clones and one animation. Content update, resize, unload/reload and reduced motion pass. |
| MALANDRA-ELARA-LIGHTHOUSE-ANIMATION-005 | applied | Target before fixture initialized distant section immediately (new acceptance assertion failed). After patch: near/zero-height roots immediate, distant root deferred, editor/no-observer immediate, pending unload/reload and reduced motion pass. |

Header preset: `sections/header.liquid` and only the header entry of `sections/header-group.json` now match Malandra composition, except logo normal/transparent URLs and removal of Malandra symbol. Announcement and global settings are unchanged. The menu is intentionally `malandra-header`, with the source banner/collection resources; resource availability has not been checked against a deployed target. Header/footer block entrance animations remain None.

Validation: Theme Check 0 errors / 5 existing ExcessiveSettingsCount warnings; JavaScript syntax and diff whitespace checks pass. Scoped Liquid validator: header, logo, header-top, Search overlay, Hero pass; hero-image has two preload advisories. Mega banner validator rejects the existing conditional HTML tag pattern (`<{% if ... %}a...`), also present before this update; Theme Check accepts it. Browser fixtures do not establish actual Theme Editor inspector/native Shopify Account integration, resource availability, first-paint network parity or Lighthouse scores. Code status remains applied until that target QA is complete.

Preview: no explicit upload performed by this task; external watcher synchronization not verified. Publish: not performed. Git commit/push: not performed. No source scores claimed for Elara.

QA receipt bổ sung: 54 scoped Header/Search/Slideshow checks và 2 Hero render parity/cap checks pass sau điều chỉnh đường dẫn fixture và CSS owner đã tách. Hai logo fixtures dùng SVG hình học nguồn chỉ để kiểm tra layer/size; artwork Elara thực tế còn cần storefront QA. Contrast ratios từng scheme lưu trong audit JSON. Source preset equality (ngoại trừ các logo fields) và config/settings_data.json byte-identical được assert.
