# Arche → Essen: Variant picker, Gap, Rounded progress, section `(custom)` và mép ảnh

Ngày: 2026-10-13. Nguồn: `arche-theme`, branch `theme/arche-theme`, HEAD `f340ad0e3facf5e0ad9c6eba0700ae4e12e0f131` + patch local chưa commit. Đích: `../essen-theme`, branch `theme/essen-theme`, HEAD đã audit `acb809562bf01eb1f301e88439504d3c93bfc141`; chưa áp dụng update.

Theo phạm vi người dùng xác nhận, doc này theo dõi **Variant picker chỉ chuyển ảnh khi đổi swatch**, **fix Gap của Tab Layout**, **Rounded progress** **luật mở theme block bằng `@theme` cho section có `(custom)`** và **fix vệt đen ở mép Image card** (bổ sung theo yêu cầu ngày 2026-10-13). Navigation Only icon/layout Figma, preset `Image cards: carousel (custom)`, ảnh/content và thứ tự slide là custom riêng của Arche, không chuyển sang Essen. Không copy toàn bộ section/template hoặc dùng các phần riêng này làm dependency của Rounded progress.

Quy tắc: `agents-build-themes/skills/build/new/build-theme/references/variant-updates.md`. Giữ mã đã cấp cho từng update; trạng thái code local, QA, upload preview và publish được theo dõi riêng. Lần chỉnh doc này không áp dụng thêm code hay upload vào Essen.

| Mã update | Revision | Fix dùng chung | Nguồn | Trạng thái Essen | Dependency |
| --- | --- | --- | --- | --- | --- |
| ARCHE-ESSEN-TAB-LAYOUT-001 | 1 | Binding Gap desktop/mobile của Tab Layout | snippets/tab-layout-styles.liquid; Arche có override tại sections/collection-tabs.liquid | pending — đọc, kiểm tra và chỉ sửa khi được yêu cầu | none |
| ARCHE-ESSEN-SLIDESHOW-002 | 2 | Rounded progress toàn theme: Bullets, Slideshow segments, Swiper progressbar và Carousel manual-loop | assets/swiper-carousel.css; assets/swiper-carousel.js; assets/carousel-block.js; assets/slideshow.js; sections/slideshow.liquid — chỉ phần progress | pending | Swiper/pagination hiện có của Essen; không phụ thuộc Only icon |
| ARCHE-ESSEN-CUSTOM-SECTIONS-001 | 1 | Section có `(custom)` mở toàn bộ theme block công khai bằng `@theme` | Schema root của các section custom; docs/theme-customization-policy.md | pending — chỉ ghi hướng dẫn cho lần update Essen sau | none; không phụ thuộc preset/ảnh Arche |
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | Che khe pixel lẻ ở mép ảnh Image card | blocks/image-card.liquid — CSS lớp media ảnh | pending — kiểm tra lỗi đích trước khi áp dụng | none; không chuyển ảnh/preset Arche |

| ARCHE-ESSEN-VARIANT-PICKER-001 | 1 | Chỉ đổi gallery khi đổi swatch; giữ ảnh khi đổi size/option thường | snippets/variant-picker.liquid; assets/variant-picker.js; assets/product-media.js | pending — kiểm tra lỗi tại Essen trước khi áp dụng | Shared picker/gallery hiện có; không chuyển preset/layout |

| ARCHE-ESSEN-HEADER-ALIGNMENT-001 | 1 | Header bật Inherit parent alignment nhận text alignment từ section | blocks/header.liquid | pending — Essen phải tái hiện trước khi update | parent --text-align-default; không chuyển preset/layout Arche |

## Điều kiện bắt buộc trước mọi update variant

Owner yêu cầu ngày 2026-10-13: **theme variant phải kiểm tra lại lỗi/gap ở chính theme đích; chỉ thực hiện update nếu lỗi/gap còn tồn tại**. Quy tắc này áp dụng cho mọi mã trong doc, kể cả update mới thêm sau này.

- Khi được yêu cầu update, đọc implementation/schema và kiểm tra hành vi thực tế ở theme đích với đúng option, viewport và điều kiện gây lỗi. Lưu bằng chứng trước khi sửa; pending không tự chứng minh theme đang lỗi.
- Nếu lỗi đã hết, upstream đã có fix tương đương, hoặc contract `(custom)` đã được đáp ứng, ghi `skipped` và lý do/bằng chứng; không copy patch hoặc thay media/preset chỉ để khớp nguồn.
- Nếu chưa xác minh được lỗi/gap, giữ `pending` và ghi phần QA còn thiếu; không áp dụng thử mù. Contract không tương thích thì ghi `conflict`.
- Chỉ áp dụng patch nhỏ nhất khi tái hiện được lỗi/gap và có yêu cầu update của owner. Sau sửa, kiểm tra lại ở theme đích rồi mới đánh dấu verified; không dùng QA Arche thay cho QA Essen. Việc ghi doc không cho phép sửa/push/publish Essen.

## ARCHE-ESSEN-IMAGE-CARD-001 — Vệt đen ở mép ảnh

Ngày: 2026-10-13. Revision 1. Nguồn: `arche-theme`, branch `theme/arche-theme`, patch local chưa commit, draft `192282820907`. Essen: pending, chưa áp dụng.

### Lỗi và fix nguồn

- Ảnh cover và card tại tọa độ pixel lẻ có thể lộ nền tối ở mép trên. Border/shadow đều tắt; đổi ảnh thành AVIF vuông 592×592 vẫn tái hiện vệt đen trong preview Arche.
- Trong stylesheet của `blocks/image-card.liquid`, thêm rule chỉ cho media chứa ảnh:

```css
.image-card__media > .background-media:has(.background-media__image) {
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
}
```

- Lớp ảnh tràn 1px mỗi cạnh và được overflow của card clip; khung, aspect ratio, overlay, content, scheme và video giữ nguyên. Crop thay đổi tối đa 1px mỗi cạnh. Width/height phải cộng 2px vì media-background đã khai báo 100%; chỉ đổi inset không đủ.

### Kiểm tra và áp dụng cho Essen

1. Theo điều kiện chung ở trên, tái hiện vệt đen tại mép ảnh trên chính Essen, nhất là với nền scheme tối và tọa độ/kích thước lẻ. Phân biệt border option, viền chọn trong editor, pixel trong ảnh nguồn và khe render. Nếu Essen không có lỗi hoặc đã xử lý tương đương thì skipped, không sửa.
2. Nếu lỗi còn tồn tại, chuyển riêng rule CSS và điều chỉnh selector theo DOM thực tế. Không copy toàn bộ block, không chuyển ảnh square-592, preset hoặc composition Arche. Nếu stylesheet promo-grid riêng ở đích sở hữu cùng DOM, audit cascade và chỉ áp fix tại consumer thật sự lỗi.
3. Theme Check, preview desktop/mobile, ratio 1:1 và ratio merchant đang dùng; kiểm tra mép ảnh, hover zoom, radius, overlay và video fallback. Lưu screenshot trước/sau và kiểm tra editor save/reload trước verified. Ghi customization record Essen cho implementation được sửa.

Bằng chứng nguồn: ảnh square-592 vẫn còn vệt trước fix; sau fix, vệt trên không còn trong Chrome desktop và mobile 375px. Computed media inset -1px; desktop media 589px trên card 587px. Draft readback và Theme Check được ghi trong audit Arche. Đây không phải QA Essen; chưa kiểm tra toàn bộ ratio/video/editor lifecycle tại nguồn.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-IMAGE-CARD-001 | chưa áp dụng | pending | Chỉ chuyển khi Essen tái hiện lỗi; chưa sửa/push/publish Essen. |

## ARCHE-ESSEN-CUSTOM-SECTIONS-001 — Mở theme blocks cho section `(custom)`

Ngày: 2026-10-13. Revision: 1. Nguồn: branch `theme/arche-theme`, patch local và draft Arche `192282820907` trên `layouthub-template-v2.myshopify.com`. Đích Essen: **pending**, chưa sửa code, upload hoặc publish.

### Contract

- Xét tên section trong schema **hoặc bất kỳ tên preset** sau khi resolve locale `t:`. Nếu tên chứa `(custom)`, schema root phải có `"blocks": [{ "type": "@theme" }]` để merchant thêm được mọi theme block công khai, thay cho allow-list public cố định.
- Section phải render children động qua `{% content_for 'blocks' %}`. Giữ `@app` nếu đã có; không tự thêm app support. Private block có tên file bắt đầu `_` không xuất hiện qua `@theme`; giữ entry private được yêu cầu riêng.
- Quy tắc chỉ áp dụng ở root section. Không mở rộng allow-list của Carousel/Slide/Grid/Group hoặc các compound block khác; giữ nguyên nesting, capacity, context, placement và runtime.
- Nguồn luật chung: [Section Contract](../../../agents-build-themes/skills/build/new/build-theme/references/section-contract.md#sections-named-custom), [Shopify theme block targeting](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/targeting). Quy tắc này là ngoại lệ được owner yêu cầu đối với allow-list hạn chế của section thông thường.

### Danh sách nguồn cần audit ở Essen

Arche đã đổi root allow-list của 7 file sau sang `@theme`:

- `sections/custom-section.liquid` — ở Arche, preset `Image cards: carousel (custom)` làm section này thuộc luật. **Không chuyển tên preset hoặc ảnh Arche sang Essen**; chỉ mở `@theme` ở Essen nếu tên section/preset thực tế của Essen có `(custom)`.
- `sections/gallery-custom.liquid`
- `sections/icon-with-text-custom.liquid`
- `sections/text-marquee-custom.liquid`
- `sections/promo-grid-custom.liquid`
- `sections/contact-form-custom.liquid`
- `sections/image-comparison-custom.liquid`

Arche đã có `@theme` ở `comparison-table-custom`, `testimonials-horizontal-custom` và `testimonials-background-custom`; hai testimonial giữ `@app`. Đây là inventory nguồn, không thay thế việc kiểm tra schema/tên thực tế của Essen. Quét toàn bộ section/preset ở đích để phát hiện thêm section phù hợp, không chỉ dựa vào tên file `*-custom`.

### Áp dụng và acceptance ở Essen

1. Chỉ thực hiện khi người dùng yêu cầu Essen đọc/apply update. Resolve tên schema/preset của Essen, kiểm tra root rendering và allow-list. Nếu đã có `@theme`, ghi skipped cùng bằng chứng.
2. Với section đủ điều kiện, chỉ chuyển patch schema root và ghi luật vào doc của Essen. Giữ mọi settings, tên preset, cây preset, ảnh/resource, saved block ID/order, CSS/Liquid/JS và placement của Essen; không copy cả file Arche hoặc homepage.
3. Parse schema, chạy Theme Check; reload Theme Editor và xác minh Add block ở root hiển thị các nhóm public theme block ngoài allow-list cũ. Kiểm tra thêm/xóa/reorder/save/reload một block phù hợp với context và responsive desktop/mobile trên bản draft đích.
4. Chỉ ghi applied/verified sau khi có QA của Essen. Schema-only không tính là custom implementation theo policy hiện tại; ghi receipt/schema update, không bịa thay đổi Liquid/CSS/JS trong customization table.

Bằng chứng nguồn Arche: 7 schema và homepage được pull/readback khớp sau scoped upload; root Add block của Custom section hiển thị các nhóm Basic, Blog, Cards, Forms, Gallery, Layout, Product và các public block khác. Theme Check: 0 errors / 12 warnings ở block ngoài phạm vi sửa. Đây không phải QA của Essen; add/reorder/save/reload toàn bộ block chưa được kiểm tra tại nguồn.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-CUSTOM-SECTIONS-001 | chưa áp dụng | pending | Owner yêu cầu ghi doc để Essen đọc sau; không mutation repo/store Essen. |

## ARCHE-ESSEN-SLIDESHOW-002 — Rounded progress

Ngày mở rộng: 2026-10-13. Revision nguồn: **2**, patch local chưa commit. Giữ mã cũ cho cùng fix; revision 1 chỉ ghi Slideshow, revision 2 mở rộng consumer dùng chung toàn theme. Essen chưa nhận revision nào.

### Lỗi và phạm vi fix

- ScaleX trên fill active làm biến dạng bán kính bo góc khi fill còn ngắn; đầu thanh active không giữ bo góc giống track.
- Reveal fill bằng `clip-path: inset(... round radius)` trên hình giữ nguyên kích thước. Transform chỉ translate để giữ vị trí; không scale. Bán kính lấy từ token/radius của track ở theme đích, giữ width/height, màu và layout đang có.
- Giữ timer, pause/resume, reset khi chuyển slide; RTL reveal từ cạnh tương ứng. Reduced-motion bỏ animation và hiển thị fill đầy với bo góc hiện có.

### Áp dụng riêng vào Essen

- Đọc consumer Bullets/autoplay hiện tại ở Essen và chuyển riêng shared reveal/keyframes/RTL/reduced-motion từ `assets/swiper-carousel.css`. Fix áp dụng cho mọi style; không đưa wrapper `slideshow__bullet-controls` hoặc điều kiện `only_icon` sang đích.
- `assets/swiper-carousel.js`: bind native progressbar sau init và mỗi `paginationUpdate`/`changeDirection`; cập nhật `--rounded-progress-value` theo snapGrid/group/loop, thêm class fill dùng chung, bỏ inline scale của vendor. Gỡ listener trong destroy; không sửa vendor Swiper.
- `assets/carousel-block.js`: manual-loop fill dùng class `rounded-progress-fill`, cập nhật cùng biến theo logical index để không tính clone.
- `assets/slideshow.js` và CSS progress trong `sections/slideshow.liquid`: segment fill dùng class chung và toggle active theo logical slide; duration lấy delay hiện có, dùng data-autoplay-clock để pause/resume. Number pagination giữ clock riêng.
- Native Swiper track/fill dùng `--swiper-pagination-progressbar-border-radius` (fallback pill 1000px ở Arche); horizontal LTR/RTL và vertical/opposite reveal đúng hướng, transition clip-path theo speed sẵn có. Ở Essen map token này theo radius track được chọn cho theme đích.
- Cart shipping/bundle progress hiện thay đổi width với border-radius, không scale radius; giữ implementation hiện có. Tab underline có radius square nên không thay trong mã fix này.
- Không thêm option navigation_style, không đổi preset/template, icon, navigation position, kích thước/khoảng cách bullets, màu hoặc content. Không ép radius 5px của custom Arche lên Essen; dùng radius hiện có của track.
- Không copy toàn bộ sections/slideshow.liquid. Ghi đúng patch vào customization record Essen khi thực sự áp dụng và giữ mã ARCHE-ESSEN-SLIDESHOW-002.

### Acceptance và trạng thái

- Sample progress đầu/giữa/cuối chu kỳ: đầu fill bo tròn cùng track, không scale radius; chuyển slide reset; pause/resume, RTL và reduced-motion đúng.
- Giữ nguyên các option/layout/preset của Essen. Kiểm tra Theme Check, desktop/mobile và autoplay thực tế trên DOM Essen trước khi đánh dấu verified.
- Bằng chứng revision 1: Chrome fixture 1920px/375px xác nhận bo góc 5px giữa chu kỳ, transform không scale và reduced-motion PASS.
- Bằng chứng revision 2: 108 Chrome fixture cases PASS (59 shared Bullets/Slideshow + 49 native/manual-loop); 375/768/1920px, LTR/RTL, static/autoplay, reduced motion, grouped snap pages, horizontal/vertical/opposite, navigation và destroy/reinit. JavaScript syntax, diff check và customization coverage PASS; Theme Check 0 errors / 12 existing warnings. Chi tiết trong customization record nguồn; kiểm tra dùng CSS/JS thật tại local fixture. Chưa kiểm tra save/reload trên Shopify Theme Editor live; không dùng QA nguồn để đánh dấu Essen verified.
- Essen: **pending**. Chưa áp dụng Rounded progress trong tác vụ này; chưa upload/publish.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-SLIDESHOW-002 | chưa áp dụng revision 1/2 | pending | Revision 2 mở rộng shared progress toàn theme tại nguồn; Essen chưa sửa/upload/publish. Các custom khác của Arche bị loại khỏi phạm vi chuyển. |

## ARCHE-ESSEN-TAB-LAYOUT-001 — Gap của Tab Layout

Ngày: 2026-10-13. Revision: 1.
Nguồn: `arche-theme`, branch `theme/arche-theme`, HEAD `f340ad0e3facf5e0ad9c6eba0700ae4e12e0f131` + patch local chưa commit. Đích: `essen-theme`, branch `theme/essen-theme`, HEAD `acb809562bf01eb1f301e88439504d3c93bfc141`; chưa áp dụng patch.

### Lỗi và contract

- `blocks/tab-layout.liquid` đã xuất `--tab-layout-gap-desktop` và `--tab-layout-gap-mobile`, nhưng navigation dùng gap cố định từ layout-grid-gap/rem; gap trên wrapper một child không tạo khoảng cách giữa tab. Cả Arche và Essen đều bị lỗi.
- Trong `snippets/tab-layout-styles.liquid`, navigation dùng `gap: var(--tab-layout-gap-desktop, 16px)` cho desktop/tablet; mobile <= 767.98px dùng `gap: var(--tab-layout-gap-mobile, var(--tab-layout-gap-desktop, 16px))`. Giá trị áp dụng cho cả khoảng cách giữa tab và giữa các hàng khi wrap, cho Underline và Button.
- Bỏ column-gap/row-gap cố định của Button để không chặn setting. Giá trị 0 hợp lệ; schema, min/max/default và mapping Liquid giữ nguyên.
- Arche còn override navigation desktop `gap: 0` và mobile `column-gap: 4px; row-gap: 12px`. Đổi riêng các override này sang cùng token. Preset desktop Gap=0 vẫn giữ rail liền; mobile dùng đúng giá trị Gap mobile đã lưu thay vì khoảng cách Figma cố định 4px/12px.
- Section Gap vẫn điều khiển khoảng cách giữa controls/products/actions; Tab Layout Gap chỉ điều khiển các tab. Không thay setting merchant, font, màu, padding tab, layout rail hay content/preset.

### Áp dụng và bảo toàn biến thể

- Đây là hướng dẫn cho lần update Essen sau này, không phải lệnh áp dụng ngay. Khi người dùng yêu cầu đọc/apply update, audit code và computed gap thực tế của Essen trước; nếu upstream đã sửa tương đương thì ghi skipped cùng bằng chứng, không áp dụng lại.
- Nếu Essen vẫn lỗi, chỉ chuyển patch binding trong `snippets/tab-layout-styles.liquid`; không copy toàn bộ section Arche. Audit các override hiện có ở đích và chỉ reconcile override chặn setting. Không chuyển rail/layout Figma riêng của Arche.
- Sau khi được yêu cầu và thực sự áp dụng, chạy QA ở Essen rồi mới cập nhật customization record đích và trạng thái applied/verified. Không dùng QA nguồn để đánh dấu verified cho Essen.
- Arche nhận patch shared và hai override trong section. Khi cập nhật base, giữ các binding này hoặc dùng implementation upstream tương đương đã QA; không đưa gap cố định trở lại.
- Dependencies: none. Mã này độc lập với Rounded progress; không chuyển layout Figma riêng của Arche sang Essen.

### Acceptance và bằng chứng nguồn

- Arche: 240 cases Chrome fixture với CSS thực tại 1920/768/375px, Gap 0/8/16/24/100px, section/navigation ngang/dọc, Underline/Button, đảo thứ tự stylesheet; computed gap và khoảng cách hình học PASS. Desktop=24px/mobile=8px độc lập PASS.
- Arche: `git diff --check` PASS; Theme Check 0 errors, 5 existing settings-count warnings. QA nguồn dùng CSS fixture; chưa xác nhận kéo setting/save/reload trong Theme Editor.
- Khi thực hiện ở Essen sau này, kiểm tra lại các giá trị trên, giá trị 0, gap giữa hàng khi wrap, desktop/mobile độc lập, Underline/Button và Theme Editor save/reload. Giữ nguyên Section Gap, preset/content và custom của Essen.
- Trạng thái hiện tại của Essen: pending. Patch local đã áp dụng nhầm trước đó được hoàn tác theo phạm vi người dùng làm rõ; code và customization record Essen trở về trạng thái trước tác vụ. Bằng chứng QA trên patch thử trước đó không được dùng để đánh dấu Essen đã cập nhật. Không thực hiện upload/publish.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-TAB-LAYOUT-001 | chưa nhận revision 1 | pending | Đã hoàn tác patch áp dụng nhầm; chờ người dùng yêu cầu Essen đọc, kiểm tra và sửa nếu còn lỗi. |


## ARCHE-ESSEN-VARIANT-PICKER-001 — Chỉ chuyển ảnh khi đổi swatch

Ngày: 2026-10-13. Revision: 1. Nguồn: Arche, branch `theme/arche-theme`, patch local chưa commit. Đích Essen: pending; chưa sửa/upload/publish.

### Contract và patch nguồn

- Featured product, Quick view và Quick add dùng cùng contract với main product: đổi size hoặc option thường cập nhật variant ID, availability, giá, sale badge, inventory và form mua nhưng giữ ảnh/slide đang xem. Chỉ thao tác đổi option swatch/color mới chuyển tới featured media và lọc gallery.
- `snippets/variant-picker.liquid`: fieldset xuất `data-option-swatch` từ `option_is_color` đã có; giữ native swatch và fallback Color/Colour. Áp dụng cả presentation color/image/button/color_button/dropdown, không đoán qua tên dịch trong JavaScript.
- `assets/variant-picker.js`: `sync` phát `detail.updateMedia`; `handleChange` lấy flag từ fieldset. Non-swatch không gọi legacy media filter. Initial/history/external giữ default updateMedia=true để bảo toàn khởi tạo/deep link và contract event cũ.
- `assets/product-media.js`: luôn đồng bộ currentVariantId, nhưng return trước filter/rebuild/scroll/showMedia nếu updateMedia=false. Giữ gallery và thumbnails đang xem, kể cả merchant đang bật lọc variant media; filtering được cập nhật khi đổi swatch tiếp theo. Consumer event không có flag vẫn giữ hành vi cũ.
- Patch chỉ thay shared runtime và một data attribute, không đổi setting, preset, layout, ảnh/content hoặc URL policy của overlay/featured product.

### Kiểm tra và áp dụng ở Essen

1. Khi owner yêu cầu Essen đọc/apply update, tái hiện trên Featured product, Quick view, Quick add và main product: chọn swatch, kéo gallery tới ảnh khác, đổi size; ảnh phải giữ nguyên. Thử cả size có featured media khác và bật/tắt filter variant media. Nếu Essen đã đáp ứng thì skipped kèm bằng chứng; chưa kiểm tra được thì pending.
2. Nếu lỗi còn tồn tại, chuyển riêng contract flag/fieldset và guard ở consumer thật của Essen. Không copy cả file Arche hoặc các custom two-item carousel/layout. Kiểm tra event không flag, initial/deep link, unavailable combination, color dropdown và translated native swatch.
3. QA desktop/mobile, slider/static/two-item layouts, bàn phím, mở/đóng rồi mở lại overlay, duplicate và Theme Editor save/reload. Giá/variant ID/nút mua/inventory phải cập nhật khi đổi size; ảnh chỉ chuyển theo swatch và không rebuild gallery cho non-swatch.
4. Chạy tests/Theme Check và ghi customization record Essen bằng cùng mã; chỉ đánh dấu verified sau QA ở Essen. Upload preview/publish theo dõi riêng.

Bằng chứng nguồn: Theme Check 0 errors / 12 warnings ngoài phạm vi patch; git diff --check PASS. 17 kiểm thử PASS gồm shared picker, media intent, giữ ảnh khi đổi non-swatch ở desktop-static/mobile-slider/quick-add-strip và module loading Quick add/Quick view. Chưa QA storefront/Theme Editor trực tiếp; không dùng kết quả nguồn để đánh dấu Essen verified.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-VARIANT-PICKER-001 | chưa áp dụng | pending | Đã ghi hướng dẫn audit/apply; không mutation repo/store Essen. |


## ARCHE-ESSEN-HEADER-ALIGNMENT-001 — Header kế thừa alignment của section

Ngày 2026-10-13, revision 1. Nguồn `arche-theme`, branch `theme/arche-theme`, patch local chưa commit. Đích `essen-theme`, branch `theme/essen-theme`: pending, chưa sửa/upload/publish.

- Lỗi: Header width Fill bật Inherit parent alignment nhưng chữ vẫn Left khi section chọn Center/Right. Parent xuất `--text-align-default`; Header và các leaf trực tiếp dùng `inherit`, nên mất alignment của section.
- Patch độc lập tại `blocks/header.liquid`: fallback text-align desktop và mobile dùng `var(--header-text-align, var(--text-align-default, inherit))`; mobile vẫn ưu tiên `--header-text-align-mobile`. Giữ nguyên checkbox, option alignment riêng, width, mobile override, schema và preset.
- QA nguồn trên preview Arche: desktop Center/Right và mobile Right/Center đều cho computed text-align đúng ở Header và Heading child. Configuration QA tạm thời đã khôi phục.
- Khi được yêu cầu update Essen: tái hiện trên section của Essen, với Header Fill/Inherit bật; nếu vẫn lỗi, chuyển đúng fallback này theo token của đích. Test Left/Center/Right ở cả hai viewport, tắt Inherit và kiểm tra alignment riêng, rồi save/reload trong editor. Nếu upstream đã sửa, ghi skipped cùng bằng chứng. Không copy toàn file/preset/content Arche.
- Dependency: parent alignment token hiện có. Không phụ thuộc Blog posts hoặc custom layout của Arche. QA Theme Editor save/reload ở đích còn pending.
