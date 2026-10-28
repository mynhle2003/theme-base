## Fix Header lần 2 và recheck icon — 2026-10-28

Đã xử lý đúng ba dòng được giao Lần 2 (11/13/14), kiểm tiếp dòng15 Chưa xác minh theo yêu cầu người dùng. Bốn dòng hiện Khớp; giữ nguyên Figma/Hiện tại ban đầu trên Sheet để truy lịch sử. Dòng15 phát hiện sai màu action và hình hamburger, đã sửa trong phạm vi Header lần2; vòng xử lý Lần2. Các dòng Lần1 vẫn giữ cờ Lần1.

| Tiêu chí | Mapping trước → sau | Bằng chứng mới |
| --- | --- | --- |
| Tracking Desktop | _header-menu options đồng bộ nguyên catalog type_heading_2_letter_spacing; render qua typography-token; preset/instance normal → mega_loose | --letter-spacing-mega-loose =2px; năm nhãn menu Outfit400/12px/tracking2px |
| Search Mobile | assets/header.js: Search luôn vào rightColumn thay vì leftColumn khi logo center | Mobile375: logo x145.5/w84 căn giữa; Search x279/w40, Cart x319/w40; Menu trái |
| Header Mobile height | _header-top padding_mobile8/7 →10/9 trong preset/instance | 40 action +10+9+1 border=60px; Desktop vẫn76px; không đổi global button-height |
| Action icon color | config/settings_data.json scheme-header.text #6C6C6C →#3A3A3A | Search/Account/Cart computed stroke #3A3A3A; currentColor; consumer scheme-header chỉ Header |
| Hamburger | Header riêng bars-3 → SVG menu gốc Figma qua header-figma-icon; không đổi bars-3 shared | Source vector16×12 tại(4,6), stroke1.5 round; old16.5×10.5 đã thay bằng path M4 12H20M4 6H20M4 18H20 |

Nguồn icon: Figma vsUDZS8CZ0sa1pruNqu0eb/Header Mobile47301:19008 →Menu/menu/Vector, đọc trực tiếp Properties. SVG gốc tải `/Users/beae/Downloads/menu.svg`. Search/account/cart/chevron đối chiếu path từng bản export gốc search.svg/circle-user-round.svg/shopping-cart.svg/chevron-down.svg trong Downloads với snippet: path, viewBox, frame và stroke giống nguồn; chỉ đổi màu literal sang currentColor. Frame action24×24, stroke1.5; chevron20×20, stroke1.25. Biên gồm centered stroke theo path: menu17.5×13.5, search19.5×19.5, account17.5×19.5, cart≈21.54×21.45, chevron11.25×6.25; cùng path và scale1 với nguồn nên biên painted tương đương, không so nhầm viewBox với biên nhìn thấy. Màu tất cả #3A3A3A đã kiểm cả hai viewport (Account/chevron chỉ Desktop).

Recheck: Desktop viewport1935/client1920, Mobile390/client375, no horizontal overflow. Đọc lại font/color/menu tracking và layout; menu Mobile mở và Escape đóng, Search mở dialog/focus input và Escape đóng, dropdown Desktop mở được; chuyển991px vào mobile-center giữ Search/Cart phải. Desktop trở lại có Search/Account/Cart phải. Không kết luận toàn bộ trạng thái hover/focus hay Theme Editor lifecycle đạt từ các mẫu này.

Evidence mới: /tmp/novaire-qa-20261028/header-fix2-desktop.json, header-fix2-mobile.json, header-fix2-menu-source.txt, header-fix2-desktop.png, header-fix2-before/ và snapshot Sheet trước/sau. Theme Check0errors/8warnings; node --check assets/header.js và git diff --check pass. Bộ test Header Node chưa chạy được vì môi trường thiếu module playwright; dùng kiểm hành vi trực tiếp bằng CUA như trên, không ghi là automated-test pass. Không push/publish/Save Theme Editor/commit.

---

## Fix lần 1 — 2026-10-28 — verified

STT 2 — Header. Các dòng lỗi và giá trị Figma/Hiện tại gốc trên Sheet được giữ nguyên; chỉ cập nhật Trạng thái=Khớp và bỏ highlight F/G sau QA. Lần fix vẫn Lần 1.

| Dòng Sheet | Kết quả đo mới | Trạng thái |
| --- | --- | --- |
| 9 | Outfit 400 Desktop | Khớp |
| 10 | 12px Desktop | Khớp |
| 12 | #3A3A3A Desktop | Khớp |

### Mapping cấu hình local

| File | Instance/preset/block | Setting | Trước | Sau |
| --- | --- | --- | --- | --- |
| sections/header-group.json | sections/header/blocks/header-top/blocks/header-menu | font | body | heading |
| sections/header-group.json | sections/header/blocks/header-top/blocks/header-menu | font_size | sm | xs |
| sections/header-group.json | sections/header/blocks/header-top/blocks/header-menu | text_color |  | #3A3A3A |
| sections/header.liquid | presets/0/blocks/0/blocks/0 | font | body | heading |
| sections/header.liquid | presets/0/blocks/0/blocks/0 | font_size | sm | xs |
| sections/header.liquid | presets/0/blocks/0/blocks/0 | text_color |  | #3A3A3A |

Evidence: `/tmp/novaire-qa-20261028/fix1-desktop.json`, `fix1-mobile.json`, `fix1-desktop-full.png`, `fix1-mobile-full.png`; nguồn Figma Desktop/Mobile và ảnh đã đọc vẫn trong hồ sơ bên dưới. Viewport1935×1080/client1920 và390×812/client375. Không overflow ngang. Sheet sau ghi đã đọc lại đúng98 dòng: `fix1-sheet-after.tsv`. Snapshot trước sửa và mapping đầy đủ: `fix1-before/`, `fix1-mapping.json`. Chỉ sửa instance JSON và presets trong schema; implementation/schema controls giữ nguyên. Không sửa settings global. Các mục ngoài Lần 1 giữ kết luận cũ; không suy cả section đạt.

---

## QA hiện hành — 2026-10-28

STT 2 — **Header**. Instance `header-group/header`; type `header`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A8:J15. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-11672
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47301-19008
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-1.png`, `figma-m-1.png`, `final-desktop-1.png`, `final-mobile-1.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Wordmark và nhãn menu; nền trắng; bố cục Desktop; cao Desktop 76px | Wordmark và nhãn menu; nền trắng; bố cục Desktop; cao Desktop 76px |  |  | Khớp |
| Desktop | Menu | Font | Outfit 400 | Poppins 400 | _header-menu.font → heading | Lần 1 | Chưa khớp |
| Desktop | Menu | Font size | 12px | 14px | _header-menu.font_size → xs | Lần 1 | Chưa khớp |
| Desktop | Menu | Letter spacing | 2px | 0px | Kiểm mapping letter_spacing sau khi chọn heading; relaxed chưa chứng minh cho đúng 2px |  | Chưa khớp |
| Desktop | Menu | Màu chữ | #3A3A3A | #6C6C6C | _header-menu.text_color → #3A3A3A | Lần 1 | Chưa khớp |
| Mobile | Tổng quan layout | Vị trí Search | Menu trái; Search và Cart phải logo | Menu và Search trái; Cart phải | Chưa có control position Mobile của _header-search; cần layout scoped |  | Chưa khớp |
| Mobile | Layout | Chiều cao | 60px | 56px: action 40px + padding 8px/7px + border 1px | Đối chiếu min-height action và padding; không đổi global button height chỉ để bù Header |  | Chưa khớp |
| Chung (Desktop, Mobile) | Icon | Biên hiển thị SVG / stroke | SVG nguồn Figma | Đã dùng SVG gốc; chưa chốt biên stroke từng icon bằng số đo |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — header

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `header-group/header`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47052-11672
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47301-19008
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Desktop wordmark/navigation rendered. Mobile menu opens and shows NEW, DRESSES, ACCESSORIES, OCCATION and SALE. Mobile header68px vs Figma60px; store name remains the actual store name inside drawer.

Local evidence: `/tmp/novaire-qa-evidence/mobile-menu.png` (temporary, excluded from commits).

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.

## Header preset refinement — 2026-10-27

Current request sources re-read using CUA/Chrome after Figma MCP View-seat quota blocked get_design_context. Desktop node 47052:11672 is 1920×76; mobile node 47301:19008 is 375×60. Both show white background and a 1px bottom border (#E6E6E6). Desktop: navigation left, centered Novaire wordmark, search/account/cart right. Mobile: menu left, centered wordmark, search/cart right.

Updated existing Header preset and header-group instance together: bottom_separator none→line; mobile top/bottom padding 12/12→8/7. Desktop padding remains16/16. Existing action-row minimums from current Theme Settings are43px desktop and44px mobile, giving expected heights43+16+16+1=76 and44+8+7+1=60. The1px mobile padding asymmetry accounts for the outside border; no shared button-height change. These are calculated heights, not a new rendered measurement. Existing menu, logo resource112/84px, responsive block order and action settings are retained. No new media selected/uploaded.

Validation: Header preset/instance control IDs, enum values, range grids, original name/category and synchronized top settings pass. Theme Check: zero errors, seven warnings across the existing working tree. git diff --check passes. Only preset schema and group configuration changed; existing implementation/global settings and unrelated changes preserved.

Render status after this refinement: UNVERIFIED on both viewports. Local preview supervisor is stopped and port9300 closed; no preview restart/upload authorized by this preset request. Existing preview tabs are owned by another active browser session. Earlier mobile68px observation above describes the configuration before this refinement. Icon geometry, menu typography/tracking and exact border color remain unverified against Figma; no SVG implementation changes made. No Theme Editor save, push, publish or Git commit.

### Icon/border follow-up — 2026-10-27

Three original Figma SVGs now replace Search/Account/Cart; existing icon_size is24 in both Header preset and instance. Dedicated scheme-header preserves scheme-1 except border#E6E6E6 and is assigned to both. This supersedes the previous inherited-cart and border-color gaps. Original geometry verified locally; actual rendered desktop/mobile parity remains UNVERIFIED while preview is stopped. See docs/theme-customizations/novaire-theme.md for source/export and base-update rules.
