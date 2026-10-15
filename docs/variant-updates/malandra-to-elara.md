# Malandra → Elara: Header và Search

Ngày: 2026-10-15. Nguồn: `malandra-theme`, branch `theme/malandra-theme`, HEAD `0732ecfe8b7687d345a04c1a4d8617b1fd43ce22` + patch local chưa commit. Đích: `../elara-theme`, branch `theme/elara-theme`, HEAD tham khảo `f17d6b7f1a961364aff9d9fcc424b266a2164105`.

Chỉ ghi kế hoạch để đọc và update sau. **Chưa áp dụng code, upload preview, commit/push hay publish Elara.** Quy tắc: `agents-build-themes/skills/build/new/build-theme/references/variant-updates.md`. Kiểm tra lại HEAD và worktree hai repo khi thực hiện; commit nêu trên không chứa toàn bộ patch local.

| Mã update | Revision | Nội dung | Trạng thái Elara | Dependency |
| --- | --- | --- | --- | --- |
| MALANDRA-ELARA-HEADER-NAV-001 | 1 | Đồng bộ breakpoint, xử lý menu và overflow cắt mega menu | pending | Header/drawer hiện có của Elara |
| MALANDRA-ELARA-HEADER-ACTIONS-001 | 1 | Icon vuông dùng biến chung; Gap actions thành padding; inspect chỉ ô icon | pending | NAV-001 nếu dùng chung contract mobile992px |
| MALANDRA-ELARA-HEADER-COLOR-001 | 1 | Icon theo currentColor của scheme | pending | Kiểm tra SVG thực tế ở Elara |
| MALANDRA-ELARA-ACCOUNT-001 | 1 | Account bottom sheet theo breakpoint header | pending | NAV-001; component Shopify còn export dialog part |
| MALANDRA-ELARA-SEARCH-001 | 1 | Search input/button theo theme settings | pending | Form primitive, theme-button, predictive controller của Elara |
| MALANDRA-ELARA-LOGO-001 | 1 | Alternate logo đúng nguồn, đổi layer không nhảy kích thước | pending | Chỉ áp dụng nếu Elara còn lỗi; giữ artwork riêng |

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
