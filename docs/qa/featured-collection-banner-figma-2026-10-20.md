# Featured collection: Banner — Figma QA — 2026-10-20

Kết luận: **desktop khớp bố cục chính, chưa giống Figma hoàn toàn; mobile chưa đủ bằng chứng render mới**. Chỉ QA, không sửa theme/config/catalog hay Save Editor/deploy.

## Đối tượng và evidence

- Checkout Virelle, branch `theme/virelle-theme`; homepage `templates/index.json`, instance `virelle_motion_365`, type `featured-collection-banner`. Kết quả dành cho instance đang chạy, không phải một instance mới thêm từ Add section.
- Desktop Figma: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48002-1862 — 1920 × 2381.5px. Properties hiện tại xác nhận Desktop và height 2381.5px; screenshot canvas mới được lưu.
- Mobile Figma: https://www.figma.com/design/yTXlAfT0miBGgRuuYM4OMp/?node-id=48096-26009 — mục tiêu lịch sử 375 × 1010.17px; card244px. Chưa đọc lại hoàn chỉnh Properties/screenshot mobile trong lượt này.
- Preview: http://127.0.0.1:9300/#shopify-section-template--28476595634475__virelle_motion_365 ; development theme đã biết `192119800107`, store `layouthub-template-v2.myshopify.com`.
- Figma MCP trả lỗi hết tool-call quota. Theo `qa-section` và `figma-access.md`, chuyển sang Chrome UI trên profile đã đọc được email `minhle@beae.com`. Mở tab QA riêng vì tab đang có thuộc phiên khác. Không sửa Figma.
- Desktop preview đo bằng Browser/CUA: viewport1935 ×1250, scrollbar15px, client1920px, scale1, font loaded. Đo tương đối với section; không dùng vị trí toàn trang để suy padding.
- `output/featured-banner-qa-2026-10-20/`: `figma-desktop.jpg`, `preview-desktop.jpg`, `measurements.json`, `rendered-section.html`. HTML chỉ lưu section đích. Screenshot preview gồm một phần section trước; số đo đã loại vị trí toàn trang.
- Trước khi đo mobile, Browser bị tắt trong Work settings. Native Chrome còn đọc được nhưng foreground đã chuyển sang một tác vụ khác có dialog; không can thiệp. Không có screenshot hoặc computed mobile mới. Viewport override chưa reset được sau khi Browser bị tắt; giá trị cuối của tab QA là1935 ×1250.
- Exact target typography/child dimensions bên dưới dùng thêm design context desktop/mobile đã đọc ở lượt19/10 trong cùng chat. Đây là nguồn thiết kế lịch sử, không phải lần gọi MCP mới. Root/screenshot desktop và số đo preview là evidence mới20/10. Chưa audit lại toàn bộ Style Guide/modes.

## Đối chiếu

| Thuộc tính | Figma | Thực tế mới | Độ lệch | Trạng thái | Evidence |
| --- | --- | --- | --- | --- | --- |
| Desktop section | 1920 ×2381.5 | 1920 ×2381.5 | 0 | matched | Root Properties + desktop.root |
| Content/inset | 1820px, inset50px | Header/content1820px, inset50px | 0 | matched | Canvas/context + desktop.header/scope |
| Padding desktop | 96px trên/dưới | 96px | 0 | matched | Target context + computed spacing |
| Heading → row | 48px | H2 bottom185; row top233 | 0 | matched | desktop.h2/banner |
| Banner/lưới | Banner904 ×1054.667; cột904; gap12 | Banner904 ×1054.656; lưới904; gap12 | −0.011px do làm tròn | matched | Target context + bounding boxes |
| Cards desktop | 2 cột ×3 hàng, mỗi card446 ×657.5, gap12/40 | Cùng số cột/hàng/kích thước/gap | 0 | matched | desktop.cards/grid |
| Eyebrow | Roboto Condensed500,14/21px, tracking2px,#181818 | Cùng font/weight/size/leading/tracking/color | 0 | matched | Context lịch sử + computed mới |
| H2 | Roboto Condensed700,50/60px, tracking−0.6px,#181818 | Cùng thông số | 0 | matched | Context + desktop.h2 |
| H2 max width | 768px | 760px | −8px; chưa đổi wrap | mismatch | Preset heading.max_width + desktop.h2 |
| Banner heading | Roboto Condensed700,28/36.4px, trắng | 28/36.4px,#FFFFFF,tracking normal | Không thấy lệch style chính | matched | Context + desktop.h3 |
| Banner media | Ảnh ngồi trên đá, crop6:7 | Đúng source đã upload, tỷ lệ6:7; img complete; cover,50%50% | Đúng ảnh/tỷ lệ; pixel crop/overlay chưa đối chiếu đầy đủ | unverified | Screenshot + desktop.image; upload audit lịch sử |
| Jacket đầu tiên | Mẫu olive với người mẫu tóc vàng | Mẫu taupe/người mẫu tóc nâu | Sai ảnh/variant | mismatch | Figma/preview screenshot; HTML `virelle-jacket-taupe-figma.png` |
| Thứ tự/tên sản phẩm | Jacket,Halter,Leggings,Bra,Long Sleeve,Shorts | Cùng thứ tự/tên | 0 | matched | Canvas + DOM/HTML section |
| Giá | $45; Long Sleeve sale45/55 | Cùng giá/compare-at | 0 | matched | Target context + desktop.content |
| Badge desktop | Halter New,Long Sleeve Sale; Leggings/Bra không badge | Halter/Leggings/Bra New,Long Sleeve Sale | Thêm New ở2 card | mismatch | Figma screenshot + DOM/HTML |
| Swatch | Halter1 đỏ; Long Sleeve1 xanh; Jacket nâu/xanh với xanh selected | Halter Burgundy/Taupe; Long Sleeve Charcoal; Jacket Taupe/Olive chưa checked | Khác số lượng/màu/selection | mismatch | Target context + screenshot/DOM; không sửa catalog |
| CTA typography | Target label14/21px, uppercase, tracking−0.2px; label/icon gap2px | Roboto500,14/14px,uppercase,tracking−0.2px; button gap5px | Leading−7px,gap+3px | mismatch | Context lịch sử + desktop.links[0]; source CSS |
| CTA destination | Thiết kế không chỉ rõ URL | Render là button, không href; setting link rỗng | Thiếu destination; chưa kết luận URL thiết kế | unverified | desktop.links + local instance |
| Mobile next-card preview | Card244px, gap8 | Local peek=true; runtime dùng slidesPerView1.2 | Ước tính284.5px tại content343, lớn hơn40.5px; chưa đo mobile mới | unverified | JS formula + config; không phải kết quả render |
| Mobile toàn section | Banner trước carousel; padding48; gap12 | Cấu hình có các giá trị đó | Chưa đo width/height/overflow/wrap/CTA/ảnh thực tế | unverified | Local config only |

## Nguyên nhân và hướng xử lý

1. **P2 — Media/catalog.** Lưới lấy product theo collection `the-motion-365-virelle`. HTML server hiện lấy ảnh đầu `virelle-jacket-taupe-figma.png`, còn thiết kế dùng olive. Đây là lựa chọn ảnh mặc định/variant, không phải lỗi kích thước grid. Halter có thêm Taupe, Long Sleeve là Charcoal thay xanh; badge New ở Leggings/Bra cũng xuất phát từ dữ liệu hoặc rule badge đang render. Cần điều chỉnh nguồn catalog/ảnh được chọn theo đúng frame, kiểm tra các section dùng chung trước khi sửa. Không đổi dữ liệu trong QA.
2. **P2 — Mobile card width, nghi vấn cần đo.** `blocks/product-list-banner.liquid` hiện đã có `show_next_slide_preview_on_mobile` và truyền vào renderer; không tiếp tục báo control này bị thiếu như audit19/10. Instance đã bật. Tuy nhiên `assets/product-collection-carousel.js` trả1.2 cho one-column peek: tại343px/gap8, `(343 −0.2×8)/1.2 =284.5px`, trong khi target244px. Cần đo mobile mới rồi quyết định control peek/card phù hợp; không sửa global JS chỉ dựa phép tính.
3. **P2 — CTA leading/gap.** Button nền/foreground lấy scheme-3, computed text trắng. `assets/critical.css` nền tảng `.btn` dùng line-height1; computed output button14px thay target21px. Computed gap5px thay2px. Cần kiểm tra label wrapper/underline và selector/token consumer trước khi sửa; nguồn Figma exact cần đọc lại nếu thiết kế đã cập nhật. Không đổi typography toàn theme từ kết quả QA này.
4. **P3 — Heading constraint/workaround.** `max_width=760` gần768 nhất trong control hiện tại; chưa gây đổi dòng. Khoảng cách header→row48px hiện đạt nhờ section gap12 cộng header padding-bottom36; mobile dùng12+20 để nhắm32. Đây là padding của header đang giả lập phần spacing composition, không phải control gap riêng48/32. Đừng coi header box125px là sai so với Figma heading89px vì36px còn lại là workaround spacing.

## Giới hạn và thay đổi so với audit cũ

- Các gap lịch sử về margin48px, H2 desktop48px, eyebrow sai font/tracking/hollow square và thiếu media/catalog đã được xử lý trong checkout hiện tại. Không tiếp tục báo chúng là lỗi mới. Desktop hiện margin50,H2 50px,eyebrow Roboto Condensed500/2px và có square8px riêng.
- Banner asset đã tải thành công; viewport screenshot chỉ chụp phần trên của ảnh. Chưa xác minh toàn crop/gradient pixel, chân CTA, các ảnh sản phẩm phía dưới và trạng thái swatch sau tương tác. Không kết luận blur từ screenshot capture.
- Mobile render mới chưa kiểm tra do Browser bị tắt. Các giá trị `vw`, wrap, quick-add và viewport375px không scrollbar cần recheck bằng thiết bị/emulation phù hợp.
- Chưa kiểm tra hover/focus, swipe mới, keyboard/a11y đầy đủ, lifecycle Theme Editor hay Add section preset. Không tuyên bố release-ready. Không chạy Theme Check vì không sửa code/config; kết quả lịch sử không thay cho visual QA.

**Bàn giao:** desktop đạt geometry/hierarchy/typography chính, còn mismatch catalog/variant/badge/swatch và CTA leading/gap. Chưa đủ bằng chứng để kết luận mobile giống Figma.

## Follow-up: Jacket Olive và kiểm tra mobile bằng native CUA

Người dùng yêu cầu sửa riêng ảnh Jacket và kiểm tra tiếp mobile. Áp dụng `setup-store/store-content-media`; không sửa code/config/theme hay các badge, giá và stock.

- Đọc live đúng store và product `gid://shopify/Product/15435304010027`. Olive đã có ảnh gốc Figma và ảnh lifestyle; không upload trùng. Nguyên nhân: `snippets/product-card.liquid` lấy `selected_or_first_available_variant.featured_image`, trong khi Taupe đứng đầu. Chỉ reorder gallery sẽ không chữa được output này.
- Đã dùng `productVariantsBulkReorder` đưa Olive (`67802204766507`) lên vị trí1, Taupe (`67802204733739`) vị trí2. Readback độc lập xác nhận thứ tự mới, cả hai vẫn $45/inventory20. Media associations và gallery không đổi. Default variant của sản phẩm đổi ở các consumer dùng chung, không chỉ section này; swatch order cũng có thể đổi.
- HTML homepage sau mutation xác nhận card đầu dùng `/cdn/shop/files/virelle-jacket-olive-figma.png`. Native Chrome mobile screenshot xác nhận đúng người mẫu tóc vàng/màu olive giống Figma. Lỗi ảnh Jacket ở bảng trên đã xử lý. Receipt: `output/featured-banner-qa-2026-10-20/jacket-olive-fix.json`.
- Browser automation vẫn bị tắt nhưng native CUA hoạt động. Mở tab preview riêng, dùng DevTools Responsive **375px,100%**, chiều cao tự động791px. Quan sát mới: banner đứng trước carousel, CTA nằm ở đáy banner, text chia2 dòng, first card đúng Olive và có quick-add nền đen/icon trắng; card kế tiếp hé ra. Không chạy JavaScript trong DevTools/không đo computed style mới.
- Figma mobile root được đọc lại qua UI: **375 ×1010.17px**, Devices Mobile, nền#FFFFFF, zoom71%. Screenshot canvas mới xác nhận target là Olive và next-card preview lớn hơn preview hiện tại. Padding token hiển thị12 trong Properties được giữ nguyên dưới dạng token, không gọi là12px.
- **Mobile chưa khớp:** card trong preview rộng hơn Figma, nên phần card kế tiếp lộ ít hơn. Properties card Figma `48096:26022` vừa đọc lại xác nhận width244px,height405px,ratio4:5,Quick add=true. Runtime hiện dùng1.2 slidesPerView, cho284.5px khi content343/gap8. Con số284.5 là phép tính từ source, không phải bounding-box đo mới. Screenshot native cho thấy chênh lệch này; chưa tự sửa JS.
- Badge New vẫn hiện ở Halter trên mobile, trong khi frame mobile không hiển thị badge đó; swatch number/selection còn khác như phần QA trước. CTA vẫn chưa có destination. Không dùng kết quả sửa ảnh để kết luận các mismatch này đã hết.
- Evidence mới: `preview-mobile-olive-native.jpg`, `figma-mobile-native.jpg`, `figma-mobile-card-properties.txt` trong cùng thư mục output. Chưa xác minh bằng computed đầy đủ chiều cao section, typography/crop/overlay pixel hoặc horizontal overflow; chưa kiểm tra swipe/lifecycle mới. Không chạy lại Theme Check vì không sửa theme code/config.

Kết luận cập nhật: **ảnh Jacket đã sửa và xác nhận trên mobile; mobile đã kiểm tra bằng giao diện, vẫn lệch độ rộng card/peek và dữ liệu badge/swatch.**
