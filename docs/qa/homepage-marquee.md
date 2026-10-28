## QA hiện hành — 2026-10-28

STT 11 — **Custom section — Marquee**. Instance `index/values_marquee`; type `custom-section`. Sheet [Homepage](https://docs.google.com/spreadsheets/d/11TeSQ_LaKMLv3NIu7dWEN0PCjrDmEOwl12QzKfF6wWA/edit?gid=0#gid=0), A51:J56. Kết quả dưới đây thay thế checkpoint QA cũ; lịch sử bên dưới được giữ nguyên.

- Figma Desktop: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-15679
- Figma Mobile: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7253
- Runtime: http://127.0.0.1:9301/ — draft 192827490603, layouthub-template-v2.myshopify.com. Desktop viewport 1935×1080/client 1920; Mobile 390×812/client 375, zoom 100%. Không có overflow ngang toàn trang.
- Nguồn Figma đọc trực tiếp Properties và canvas bằng Chrome; Figma MCP bị giới hạn View-seat quota. Không sửa nguồn thiết kế.
- Evidence tạm: `/tmp/novaire-qa-20261028/figma-d-10.png`, `figma-m-10.png`, `final-desktop-10.png`, `final-mobile-10.png`; computed style/box ở `runtime-final-desktop.json`, `runtime-final-mobile.json`; text nguồn ở `desktop-text-styles.json`, `mobile-text-styles.json`.

| Thiết bị | Thành phần | Tiêu chí | Figma | Hiện tại | Hướng xử lý | Lần fix | Trạng thái |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chung (Desktop, Mobile) | Đã kiểm và khớp | Thành phần | Nội dung ba Heading, font Outfit và màu #C7876B; có ảnh xen giữa | Nội dung ba Heading, font Outfit và màu #C7876B; có ảnh xen giữa |  |  | Khớp |
| Desktop | Heading | Letter spacing | 10px | 1.44px | _marquee-heading chưa có tracking control; cần override scoped, không đổi heading global |  | Chưa khớp |
| Mobile | Heading | Font size | 44px | 68px | Custom size hiện áp cả Desktop; cần control/override Mobile scoped |  | Chưa khớp |
| Mobile | Heading | Letter spacing | 6px | 1.44px | Chưa có tracking control riêng; cần scoped |  | Chưa khớp |
| Mobile | Heading (1 và 3) | Weight | 400; New Season Edit vẫn 300 | Ba heading đều 300 | Chưa có weight control theo item/breakpoint; không đổi font role toàn theme |  | Chưa khớp |
| Mobile | Layout | Gap trong vùng clip | Chỉ so khoảng cách nội dung đang nhìn thấy | Chuyển động khác phase; chưa chốt gap tại cùng nhóm phần tử |  |  | Chưa xác minh |

Khớp chỉ áp dụng các thuộc tính đã ghi rõ, không chứng minh cả section đạt hoàn toàn. Chưa xác minh chưa phải lỗi hoặc đạt. Lần 1 là cờ đề xuất bằng control đã xác minh, chưa thực hiện fix. Không kiểm đầy đủ Theme Editor lifecycle, checkout hoặc release readiness.

---

## Lịch sử trước lượt QA này

# Novaire homepage — marquee

Latest build verification: 2026-10-27. Theme `theme/novaire-theme`; instance `index/values_marquee`. Status: configured with observed results/gaps below; not a full pixel-perfect pass.

- Desktop source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47054-15679
- Mobile source: https://www.figma.com/design/vsUDZS8CZ0sa1pruNqu0eb/Clare?node-id=47284-7253
- Preview: unpublished192827490603; http://127.0.0.1:9300 . Desktop1920×1080, mobile375×812 with360px content.

Fit Group wrappers stop inherited max-width override stretching images. Desktop height180px vs target162; mobile148px vs target123 at360px content width. No implementation changes.

## History

2026-10-27 — Init build/recheck using CUA and original Figma survey. Results are limited to the explicit observations above. Inherited typography/palette retained. No Theme Editor save or theme publication.


## Text marquee (custom) preset rebuild — 2026-10-27

Requested sources: desktop `47054:15679`, mobile `47284:7253` in file `vsUDZS8CZ0sa1pruNqu0eb`. Figma MCP session `4c836b34-854e-4976-a190-cc7661eabd23` hit View-seat call limit. Inspected both source nodes read-only via CUA/Chrome, verified profile `minhle@beae.com`.

Observed Figma: desktop1920×162, mobile375×123; horizontal gap60; image100×75 (4:3) on both viewports; white background; text#C7876B. Desktop Outfit Light300,68px,120% leading,10px tracking; mobile Outfit Regular400,44px,120% leading,6px tracking. Copy order: SHOP NEW ARRIVALS / green dress / NEW SEASON EDIT / yellow dress / NEWEST DESIGNS. Image radius is shown as token `lg`; exact numeric radius unverified.

Configuration: registered exact named preset in `sections/custom-section.liquid`, category `t:general.content` (existing base category). Migrated only homepage `values_marquee` to `custom-section`, with native `marquee`, `_marquee-heading` and `_marquee-image` blocks. Removed the duplicate named Add section entry from legacy `text-marquee-custom`; retained its implementation/schema controls. Added isolated `current.color_schemes.scheme-marquee`, copied from scheme1 with heading#C7876B; existing schemes unchanged. Three native headings use custom68px and opacity100, images100×75, gaps60/60, bottom spacing80/48. Preset and homepage composition are identical.

Media: reused existing green image `shopify://shop_images/novaire-social-green.avif` (existing receipt MediaImage46829145358635). Visually inspected its existing local source. Second Figma image source hash `4b92ee5fbb6c819b4a342477c44b1427c0e757af`, filename `imgi_112_481186163_957620329821518_8678340806087963485_n.png`. Existing brown photograph is visibly different and was removed from this slot. Second image remains unselected: direct UI-provided download URL returned HTML, authenticated browser download timed out; invalid download removed. No media upload or store content mutation performed.

Verification: Theme Check392files,0errors,7warnings in files outside this preset delta. Schema control IDs/options/ranges and allowed block types checked. Liquid implementation and all non-preset schema content unchanged against task-start backup; unrelated local changes retained, including a concurrent `statement_stacks` change by another session. JSON parses and git diff --check passes. Add section registration/category verified locally; actual Add section UI not verified.

Visual status: intermediate render confirmed100×75 images, all three phrases, exact configured text color and initialized marquee movement. Final native-heading/color-scheme render at requested desktop/mobile sizes remains UNVERIFIED: browser viewport operation timed out, then reconnect timed out. Earlier viewport evidence in this document does not validate the rebuilt composition. No final visual pass claimed.

Open gaps: second original photo/resource; mobile font68px vs44px (native custom heading has no mobile size control), mobile weight300 vs400, tracking inherits theme instead of10/6px; radius token `lg` numeric value unverified; full-width Custom section retains its native horizontal container padding. Closing these implementation gaps requires a separately requested implementation workflow. No CSS/JS/Liquid implementation added. No explicit push, publish, Theme Editor save, commit or Git push; an already-running local preview watcher served intermediate local edits.

Browser checkpoint: `/tmp/novaire-text-marquee-browser.json`. Task-created source tab2048917124 and preview tab2048917127 are unmarked/ephemeral; cleanup and viewport reset could not be verified after the connection timeout. No pre-existing tabs closed. No final screenshot artifact saved.


## Media follow-up — 2026-10-27

Second image resolved. Mobile image instance47284:7257 is outside the clipped mobile frame: export produces a transparent100×75 image, explaining the failed result. Desktop second image uses the same source hash4b92ee5fbb6c819b4a342477c44b1427c0e757af and exports visible content correctly. Downloaded its native Figma export at4x to `/Users/beae/Downloads/Image (18).png`,400×300RGBA, visually verified yellow ruched dress, original Figma4:3crop. Converted to real AVIF400×300, uploaded via Shopify plugin to verified layouthub-template-v2.myshopify.com. File MediaImage46848511934763, permanent URL https://cdn.shopify.com/s/files/1/1024/2192/2091/files/novaire-marquee-yellow-figma.avif?v=1793084970 . Uploaded source decoded as real AVIF400×300; CDN response decoded as JPEG400×300 (Shopify format negotiation), so CDN delivery is not claimed to be AVIF. Bound `shopify://shop_images/novaire-marquee-yellow-figma.avif` in both Custom section named preset and homepage values_marquee. Both image slots now populated; first remains the existing exact green source. Preset-instance parity and JSON/diff checks pass. Only image references changed in theme configuration during this follow-up.

Green crop re-export and final desktop/mobile visual verification blocked by explicit `Local browser use is disabled in Work settings`; no alternate browser bypass attempted. Source screenshot/node inspection completed before the setting became disabled. Existing green source photograph verified previously, but exact effective crop remains unverified. Previous typography gaps still apply. No theme push/publish or Theme Editor save. Invalid HTML/transparent downloads from this attempt cleaned; retained valid Figma yellow export. Browser cleanup remains pending due disabled browser use.
