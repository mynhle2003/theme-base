# Arche → Essen: Variant picker, Size guide, Product-card tags và các fix dùng chung

Ngày: 2026-10-13. Nguồn: `arche-theme`, branch `theme/arche-theme`, HEAD `f340ad0e3facf5e0ad9c6eba0700ae4e12e0f131` + patch local chưa commit. Đích: `../essen-theme`, branch `theme/essen-theme`, HEAD đã audit `acb809562bf01eb1f301e88439504d3c93bfc141`; chưa áp dụng update.

Theo phạm vi người dùng xác nhận, doc này theo dõi **Variant picker chỉ chuyển ảnh khi đổi swatch**, **fix Gap của Tab Layout**, **Rounded progress** **luật mở theme block bằng `@theme` cho section có `(custom)`** và **fix vệt đen ở mép Image card** và **fix cảnh báo CSS input dùng chung** (bổ sung theo yêu cầu ngày 2026-10-13). Navigation Only icon/layout Figma, preset `Image cards: carousel (custom)`, ảnh/content và thứ tự slide là custom riêng của Arche, không chuyển sang Essen. Không copy toàn bộ section/template hoặc dùng các phần riêng này làm dependency của Rounded progress.

Quy tắc: `agents-build-themes/skills/build/new/build-theme/references/variant-updates.md`. Giữ mã đã cấp cho từng update; trạng thái code local, QA, upload preview và publish được theo dõi riêng. Lần chỉnh doc này không áp dụng thêm code hay upload vào Essen.

| Mã update | Revision | Fix dùng chung | Nguồn | Trạng thái Essen | Dependency |
| --- | --- | --- | --- | --- | --- |
| ARCHE-ESSEN-TAB-LAYOUT-001 | 1 | Binding Gap desktop/mobile của Tab Layout | snippets/tab-layout-styles.liquid; Arche có override tại sections/collection-tabs.liquid | pending — đọc, kiểm tra và chỉ sửa khi được yêu cầu | none |
| ARCHE-ESSEN-SLIDESHOW-002 | 2 | Rounded progress toàn theme: Bullets, Slideshow segments, Swiper progressbar và Carousel manual-loop | assets/swiper-carousel.css; assets/swiper-carousel.js; assets/carousel-block.js; assets/slideshow.js; sections/slideshow.liquid — chỉ phần progress | pending | Swiper/pagination hiện có của Essen; không phụ thuộc Only icon |
| ARCHE-ESSEN-CUSTOM-SECTIONS-001 | 1 | Section có `(custom)` mở toàn bộ theme block công khai bằng `@theme` | Schema root của các section custom; docs/theme-customization-policy.md | pending — chỉ ghi hướng dẫn cho lần update Essen sau | none; không phụ thuộc preset/ảnh Arche |
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | Che khe pixel lẻ ở mép ảnh Image card | blocks/image-card.liquid — CSS lớp media ảnh | pending — kiểm tra lỗi đích trước khi áp dụng | none; không chuyển ảnh/preset Arche |

| ARCHE-ESSEN-VARIANT-PICKER-001 | 1 | Chỉ đổi gallery khi đổi swatch; giữ ảnh khi đổi size/option thường | snippets/variant-picker.liquid; assets/variant-picker.js; assets/product-media.js | pending — kiểm tra lỗi tại Essen trước khi áp dụng | Shared picker/gallery hiện có; không chuyển preset/layout |

| ARCHE-ESSEN-HEADER-ALIGNMENT-001 | 1 | Header bật Inherit parent alignment nhận text alignment từ section | blocks/header.liquid | pending — Essen phải tái hiện trước khi update | parent --text-align-default; không chuyển preset/layout Arche |

| Mã update mới | Revision | Phạm vi | Nguồn | Trạng thái Essen | Dependency |
| --- | --- | --- | --- | --- | --- |
| ARCHE-ESSEN-SIZE-GUIDE-001 | 1 | Size guide dùng Button Tertiary; xóa CSS riêng | snippets/variant-picker.liquid; assets/critical.css — commit 314ff1e6 | pending | Shared Tertiary button/underline contract |
| ARCHE-ESSEN-SIZE-GUIDE-DIALOG-002 | 1 | Dialog Size Guide căn giữa viewport như Quick View; nội dung dùng body-sm | snippets/variant-picker.liquid; tests/product-controls.test.cjs — commit 4c01f5a8 | pending — chưa audit/apply tại Essen | Shared component-overlay popup và typography body-sm; độc lập trigger Tertiary |
| ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 | 1 | Checkbox Show tags và tối đa ba tag trên Product cards | config/settings_schema.json; snippets/product-card.liquid; snippets/product-badges.liquid; snippets/badge.liquid; snippets/css-variables.liquid; assets/critical.css; locales/en.default.schema.json — patch local trước commit | pending | Shared badge primitive và card context; độc lập Size guide |

| Mã update cảnh báo | Revision | Phạm vi | Nguồn | Trạng thái Essen | Dependency |
| --- | --- | --- | --- | --- | --- |
| ARCHE-ESSEN-FORM-INPUT-CSS-001 | 1 | Định nghĩa modifier input ở CSS foundation; hết 7 cảnh báo ValidScopedCSSClass | assets/critical.css — patch local chưa commit | pending — chạy Theme Check và audit CSS ở Essen trước khi áp dụng | Form primitive `.form__control` hiện có; không đổi schema/settings |

| Mã update animation | Revision | Phạm vi | Nguồn | Trạng thái Essen | Dependency |
| --- | --- | --- | --- | --- | --- |
| ARCHE-ESSEN-BLOCK-ANIMATION-001 | 1 | Rebuild animation block theo main, đặt lại giá trị preset cũ tương ứng và dọn doc custom animation | Personal `main` tại revision được chọn khi update; không lấy runtime custom Arche làm nguồn | pending — chỉ ghi yêu cầu, chưa rebuild hoặc dọn doc đích | Contract animation trên main và mapping block/setting cũ → mới đã xác minh |

## Điều kiện bắt buộc trước mọi update variant

Owner yêu cầu ngày 2026-10-13: **theme variant phải kiểm tra lại lỗi/gap ở chính theme đích; chỉ thực hiện update nếu lỗi/gap còn tồn tại**. Quy tắc này áp dụng cho mọi mã trong doc, kể cả update mới thêm sau này.

- Khi được yêu cầu update, đọc implementation/schema và kiểm tra hành vi thực tế ở theme đích với đúng option, viewport và điều kiện gây lỗi. Lưu bằng chứng trước khi sửa; pending không tự chứng minh theme đang lỗi.
- Nếu lỗi đã hết, upstream đã có fix tương đương, hoặc contract `(custom)` đã được đáp ứng, ghi `skipped` và lý do/bằng chứng; không copy patch hoặc thay media/preset chỉ để khớp nguồn.
- Nếu chưa xác minh được lỗi/gap, giữ `pending` và ghi phần QA còn thiếu; không áp dụng thử mù. Contract không tương thích thì ghi `conflict`.
- Chỉ áp dụng patch nhỏ nhất khi tái hiện được lỗi/gap và có yêu cầu update của owner. Sau sửa, kiểm tra lại ở theme đích rồi mới đánh dấu verified; không dùng QA Arche thay cho QA Essen. Việc ghi doc không cho phép sửa/push/publish Essen.

## ARCHE-ESSEN-BLOCK-ANIMATION-001 — Animation block theo main và khôi phục preset

Yêu cầu tương ứng cho Arche được theo dõi riêng tại [MAIN-ARCHE-BLOCK-ANIMATION-001](main-to-arche.md).

Ngày: 2026-10-13. Revision: 1. Owner yêu cầu bổ sung vào doc update variant. Nguồn implementation là personal `main` của repo theme; chốt branch/commit nguồn và commit đích trong receipt khi thực hiện update. Đích `../essen-theme`, branch `theme/essen-theme`: **pending**, chưa rebuild, sửa preset, dọn doc custom, upload hoặc publish.

### Phạm vi và trình tự áp dụng

1. Audit animation block ở theme đích và contract trên `main` tại revision được chọn. Nếu đích đã theo main, preset đã được bảo toàn và không còn ghi chú custom animation lỗi thời, ghi `skipped` cùng bằng chứng. Nếu main chưa có contract animation thay thế hoặc mapping chưa xác minh được, giữ `pending`/ghi `conflict` theo nguyên nhân; không copy runtime custom Arche để thay main.
2. Trước rebuild, snapshot giá trị animation cũ của từng block trong section/block presets, template JSON, section-group JSON và saved compositions/settings có liên quan. Ghi đường dẫn, block type/ID, ngữ cảnh và giá trị thực tế, gồm `animation_type`, `animation_delay`, các giá trị `none`/`0` và trường tương đương nếu contract đích dùng ID khác. Snapshot là dữ liệu của theme đích, không lấy cadence/default Arche hoặc Essen build plan để ghi đè.
3. Rebuild phần implementation/schema animation theo main, rồi **set lại giá trị preset cũ tương ứng** trên block/setting mới bằng mapping tường minh đã kiểm tra. Khôi phục cả saved instances liên quan; giữ content, media, thứ tự và các setting không thuộc animation. Giữ block ID khi contract cho phép. Chỉ dùng default main cho trường mới không có giá trị cũ tương ứng; không reset toàn bộ preset về default main hoặc suy đoán mapping chỉ theo vị trí block. Giá trị/type cũ không còn được hỗ trợ phải được báo rõ để giải quyết trước khi áp dụng.
4. Sau khi rebuild, khôi phục giá trị và QA đạt, **clear doc custom liên quan đến animation đã được thay bằng main** trong customization record và build plan của theme đích. Xóa hoặc sửa riêng mô tả/entry animation lỗi thời; nếu cùng file còn typography, token/font helpers, performance hoặc custom khác thì giữ record cho phần còn khác main. Không xóa nguyên dòng/file chỉ vì có nhắc animation. Preset-only không tính là custom implementation. Giữ lịch sử/receipt và mã update này để truy vết nguồn main, mapping và QA; dọn mô tả custom đang áp dụng không đồng nghĩa xóa lịch sử.

Owner cho phép đưa phần animation custom cũ về main trong mã update này; đây là ngoại lệ có phạm vi đối với luật giữ custom khi update base. Các custom ngoài animation vẫn theo [Theme customization policy](../theme-customization-policy.md). Không thực hiện cleanup trước khi migration thành công.

### Acceptance và trạng thái

- Implementation animation theo đúng commit main được ghi trong receipt; không còn runtime/schema custom cũ trong phạm vi đã thay thế hoặc dependency dư.
- Đối chiếu snapshot trước/sau: mỗi giá trị preset/saved instance cũ được khôi phục vào trường tương ứng hoặc có mapping được giải quyết rõ ràng; `none` và delay `0` không bị thay bằng default. Content/media/order và setting ngoài animation giữ nguyên.
- Parse JSON/schema, chạy Theme Check và customization coverage; QA animation desktop/mobile, motion on/off, reduced motion, nội dung vẫn đọc được, Theme Editor add/remove/duplicate/reorder/select/deselect/save/reload và teardown/reinit theo contract main. Không đánh dấu verified khi chưa có QA đích.
- Doc custom hiện hành chỉ còn các khác biệt thực tế so với main; ghi receipt cho phần animation trở về main và preset được bảo toàn. Upload preview/publish theo dõi riêng.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-BLOCK-ANIMATION-001 | chưa áp dụng | pending | Chỉ bổ sung yêu cầu rebuild theo main → khôi phục preset cũ tương ứng → dọn doc custom animation sau QA; chưa mutation repo/store Essen. |

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


## ARCHE-ESSEN-SIZE-GUIDE-001 — Size guide dùng Button Tertiary

Ngày 2026-10-13, revision 1. Nguồn Arche `theme/arche-theme`, commit `314ff1e6`; đích `../essen-theme`, branch `theme/essen-theme`: pending, chưa áp dụng.

- Shared `snippets/variant-picker.liquid` dùng `btn btn-tertiary` và `btn__label`/`btn__text` cho Size guide, gồm Featured product, main product và các overlay dùng picker. Giữ aria-controls/expanded và runtime mở guide.
- Xóa toàn bộ CSS riêng của trigger trong `assets/critical.css`: không override font, màu, hover, underline, padding hoặc alignment. Theme Settings Button Tertiary sở hữu style và underline.
- Trước update Essen, kiểm tra trigger còn hard-code/custom chặn Tertiary hay không; chỉ chuyển patch nhỏ nếu gap còn tồn tại. Không copy preset/layout. QA màu/hover, font/case, bật/tắt underline và offset, mở/đóng guide, desktop/mobile và Theme Editor save/reload.
- QA nguồn: full Theme Check và diff check trước commit; storefront/Theme Editor trực tiếp còn pending.


## ARCHE-ESSEN-SIZE-GUIDE-DIALOG-002 — Dialog căn giữa viewport và giảm cỡ chữ

Ngày: 2026-10-14. Revision: 1. Nguồn: `arche-theme`, branch `theme/arche-theme`, commit `4c01f5a8a4988b83b209925e8d3c6abb7b98c4c2`. Đích: `../essen-theme`, branch `theme/essen-theme`. Trạng thái: **pending** — chưa audit, áp dụng hoặc QA tại Essen; chưa upload preview/publish.

- Nguyên nhân: Size Guide truyền `data-desktop-layout="modal"`, trong khi geometry dùng chung chỉ căn giữa với `popup`. Dialog vì vậy không nhận `display: grid; place-items: center` như Quick View.
- `snippets/variant-picker.liquid`: mặc định layout desktop thành `popup`; chuẩn hóa giá trị `modal` đã lưu và giá trị không hợp lệ về `popup`, giữ `drawer`. Không đổi ID/value schema hoặc ghi lại settings merchant.
- Thêm `body-sm` vào `body_class: 'rte body-sm'` để giảm nhẹ cỡ chữ nội dung theo token của theme. Tiêu đề dialog tiếp tục dùng shared heading; không hardcode font-size hoặc sửa typography toàn theme.
- Tái sử dụng `component-overlay` và `append_to_body: true`: desktop Popup căn giữa viewport theo hai trục, giới hạn chiều cao theo viewport. Giữ nguyên width setting, drawer desktop và bottom sheet/drawer mobile, aria, focus trap, Escape, backdrop, scroll lock và lifecycle hiện có. Không copy animation riêng Quick View.
- Dependency: shared overlay có contract `popup` và token `body-sm` tại đích. Độc lập `ARCHE-ESSEN-SIZE-GUIDE-001` (trigger Button Tertiary). Commit nguồn còn chứa icon-with-text: chỉ lấy diff Size Guide và regression test tương ứng, không cherry-pick toàn commit.
- Nội dung Shopify Page `size-guide`, bảng số đo và HTML trình bày trên store là content riêng; không thuộc patch code chuyển variant, không tự sửa page hoặc copy content sang store đích.

### Áp dụng và acceptance tại Essen

1. Kiểm tra code và tái hiện trên Essen với layout desktop Popup, kể cả giá trị `modal` đã lưu. Nếu đã có mapping tương đương và dialog đã căn giữa, ghi `skipped`; chưa tái hiện được thì giữ `pending`; contract khác ghi `conflict`.
2. Chuyển riêng normalization và class nội dung theo DOM/token đích. Không copy toàn snippet, schema, preset, template hoặc settings_data.
3. QA desktop 768/1024/1440px: dialog ở giữa viewport ngang/dọc, nội dung dài cuộn được và nút đóng vẫn truy cập được; resize khi mở. Kiểm tra Popup mặc định, legacy `modal`, `popup`, giá trị sai và Drawer còn đúng vị trí.
4. QA mobile 320/375px: bottom sheet/drawer giữ hành vi cũ, bảng không làm tràn viewport; chữ nhỏ hơn nhưng vẫn dễ đọc khi zoom 200%. Kiểm tra keyboard mở/đóng, Tab/Shift+Tab, Escape, backdrop, trả focus, nhiều picker và trường hợp mở từ Quick View. Kiểm tra Theme Editor reload/duplicate/save.
5. Chạy regression tests phù hợp, full Theme Check và diff check ở Essen. Ghi commit đích và bằng chứng trước khi đánh dấu `verified`; upload/publish theo dõi riêng.

Bằng chứng nguồn: 35 tests product-controls/component-overlay/overlay-product-modules PASS, gồm normalization layout, giữ drawer/mobile, focus và lifecycle overlay; full Theme Check PASS (0 errors / 5 warnings settings-count có sẵn); diff check PASS. Chưa QA trực quan dialog storefront/Theme Editor sau patch; tests không thay thế QA tại Essen.

| Ngày | Mã | Revision | Commit nguồn | Trạng thái Essen | Preview / publish |
| --- | --- | --- | --- | --- | --- |
| 2026-10-14 | ARCHE-ESSEN-SIZE-GUIDE-DIALOG-002 | 1 | 4c01f5a8 | pending — chưa audit/apply | chưa upload / chưa publish |

## ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 — Show tags trong Product cards

Ngày 2026-10-13, revision 1. Nguồn Arche `theme/arche-theme`, patch local trước commit, tham khảo implementation local của `../elara-theme`. Đích `../essen-theme`, branch `theme/essen-theme`: pending, chưa áp dụng.

- Thêm checkbox `product_card_show_tags`, mặc định false, ngay sau Show sold out badge trong Theme Settings → Product cards → Display; label `t:labels.show_tags`. Không sửa settings/preset đã lưu.
- `snippets/product-card.liquid` truyền switch và `context: 'product-card'` vào `product-badges`. Resolver render tối đa ba tag không rỗng theo thứ tự `product.tags`, strip khoảng trắng và tiền tố `badge:` không phân biệt hoa thường; label escape qua `badge`. Bật tags không phụ thuộc Sale/Sold out; Sold out vẫn ưu tiên Sale. Tắt tags không sinh wrapper rỗng.
- Theo Elara, card không đi qua nhánh manual `badge:` cũ để tránh duplicate; product-page manual badges giữ nguyên. Không bật thêm collection/manual rules ở caller Arche. `badge` chấp nhận `tag`/`tag-secondary`; tag thứ hai dùng tone phụ, thứ nhất/ba dùng tone chính. CSS tiêu thụ bốn token tag trong `css-variables`, dùng màu tương ứng Elara; giữ typography/radius/layout badge hiện có của Arche. Không chuyển custom geometry Elara.
- Files: `config/settings_schema.json`, `locales/en.default.schema.json`, `snippets/product-card.liquid`, `snippets/product-badges.liquid`, `snippets/badge.liquid`, `snippets/css-variables.liquid`, `assets/critical.css`.
- Khi được yêu cầu update Essen, kiểm tra setting/logic tương đương đã tồn tại hay chưa. Nếu gap còn tồn tại, chỉ chuyển patch của consumer; giữ schema/preset và appearance của đích. QA tags on/off, empty tags, hơn ba tag, prefix, ký tự HTML, Sale/Sold out, product-page manual badges, wrap desktop/mobile và Theme Editor save/reload trước verified. Chưa sửa/upload/publish Essen.

QA nguồn Show tags: bốn Liquid render tests PASS; full Theme Check 0 errors / 12 existing warnings; diff check PASS. Một test Footer của suite theme-settings lỗi sẵn tại HEAD, ngoài phạm vi patch; không thay footer preset. Chưa QA live editor ở Arche/Essen.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-SIZE-GUIDE-001 | chưa áp dụng | pending | Commit nguồn 314ff1e6; Essen phải kiểm tra gap trước update. |
| 2026-10-13 | ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 | chưa áp dụng | pending | Bốn render tests và Theme Check nguồn pass; chưa mutation/upload/publish Essen. |


## ARCHE-ESSEN-FORM-INPUT-CSS-001 — Cảnh báo CSS input dùng chung

Ngày: 2026-10-13. Revision: 1. Nguồn: `arche-theme`, branch `theme/arche-theme`, HEAD `98fb9bc1aa0fffe21201f4f7ac68150c322cfc37` + patch local chưa commit. Đích: `essen-theme`, branch dự kiến `theme/essen-theme`; Essen pending, chưa audit/apply/upload/publish trong tác vụ này.

### Nguyên nhân và patch nguồn

- Theme Check trước sửa: 0 errors / 12 warnings. Có 7 `ValidScopedCSSClass`: 6 lần dùng `form__control--input` trong `blocks/product-buy-buttons.liquid`, 1 lần trong `blocks/product-buy-quantity.liquid`.
- Modifier được dùng bởi form-field, quantity, gift-card recipient, back-in-stock và các input khác. Một số component có selector riêng trong `{% stylesheet %}`, nhưng foundation chưa định nghĩa modifier. Các consumer không render component đó bị checker cảnh báo về dependency CSS ngoài scope.
- Sửa riêng `assets/critical.css`: thêm selector sau vào **cùng `:where(...)` đang sở hữu style input toàn theme**, giữ nguyên tất cả selector/declaration cũ:

```css
.form__control.form__control--input:not(.form__control--checkbox):not(.form__control--radio):not([type='checkbox']):not([type='radio']):not([type='hidden'])
```

- Selector mới là tập con của selector `.form__control:not(...)` hiện có, nằm trong cùng `:where` có specificity 0. Không thêm declaration, không đổi style/cascade hiện tại; modifier nay có owner toàn theme rõ ràng. Giữ các selector riêng của Search, Email signup, Contact form và Header search, cùng markup/runtime hiện có.
- Không chuyển custom layout/preset/content Arche; không sửa settings merchant hoặc tắt checker.

### Kiểm tra và áp dụng ở Essen

1. Chạy `shopify theme check --output json` ở Essen, kiểm tra các consumer thật và definition của modifier trong CSS global được layout tải. Nếu đã có definition tương đương hoặc không còn cảnh báo/gap này, ghi `skipped` cùng bằng chứng. Chưa xác minh được thì giữ `pending`.
2. Nếu gap còn tồn tại và owner yêu cầu update Essen, thêm riêng selector vào rule foundation tương ứng của Essen. Audit các exclusion và specificity thực tế, không copy cả `critical.css` của Arche hoặc CSS riêng của component khác. Nếu contract khác, ghi `conflict` và reconcile trước.
3. Chạy lại Theme Check: `ValidScopedCSSClass` liên quan phải hết; so sánh với baseline để không phát sinh cảnh báo/error mới. Kiểm tra Quantity, recipient/back-in-stock, Search, Email signup và Contact form ở desktop/mobile, bàn phím/focus, input type checkbox/radio/hidden, Theme Editor save/reload. Giá trị, validation và form submit phải giữ nguyên.
4. Ghi customization record Essen với cùng mã và bằng chứng QA đích; chỉ đánh dấu `verified` sau QA Essen. Upload/publish theo dõi riêng.

### QA nguồn và 5 cảnh báo để xử lý sau

- Sau patch: Theme Check toàn repo **0 errors / 5 warnings**, hết cả 7 `ValidScopedCSSClass`; 18 tests liên quan product controls, overlay product modules và search PASS. `git diff --check` PASS.
- Kiểm tra selector: alias mới chỉ khớp phần tử đã khớp selector foundation cũ; declaration và specificity không đổi. Chưa chạy QA storefront/Theme Editor trực tiếp; không coi unit tests là QA Essen.
- Owner xác nhận ngày 2026-10-13: **5 cảnh báo `ExcessiveSettingsCount` xử lý sau**. Giữ `.theme-check.yml` dùng recommended, ngưỡng mặc định 40; không tăng ngưỡng hoặc disable rule. Theo [Shopify](https://shopify.dev/docs/storefronts/themes/tools/theme-check/checks/excessive-settings-count), chỉ settings root có `id` được tính, không tính header/paragraph. Đây là ngưỡng lint về độ phức tạp, không phải giới hạn cứng schema.

| Block nguồn | Settings có id | Trạng thái |
| --- | --- | --- |
| `blocks/_bundle-summary.liquid` | 41 | deferred — xử lý sau theo owner |
| `blocks/_comparison-table-features.liquid` | 41 | deferred — xử lý sau theo owner |
| `blocks/carousel.liquid` | 55 | deferred — xử lý sau theo owner |
| `blocks/comparison-table-column.liquid` | 46 | deferred — xử lý sau theo owner |
| `blocks/editorial-text.liquid` | 55 | deferred — xử lý sau theo owner |

Các settings có consumer trực tiếp hoặc dynamic/snippet; không xóa chỉ để giảm count. Đợt xử lý sau cần thiết kế block con và migration dữ liệu riêng, bảo toàn setting IDs/giá trị và QA editor; phần đó không nằm trong patch CSS này và không phải lệnh update Essen.

| Ngày | Mã | Revision đích | Trạng thái | Bằng chứng |
| --- | --- | --- | --- | --- |
| 2026-10-13 | ARCHE-ESSEN-FORM-INPUT-CSS-001 | chưa áp dụng | pending | Arche hết 7 CSS warnings; Essen chưa audit/sửa/upload/publish. |


## ARCHE-ESSEN-PRODUCT-BADGES-002 — Tags, Sale và Sold out theo Figma

Ngày 2026-10-13. Owner yêu cầu ghi chú update variant; Essen **pending**, chưa áp dụng. Nguồn: Arche local, chưa commit. Figma desktop 46306:2048; shared Badges 34147:1638, Sold out 34147:1639.

| File | Chuyển thay đổi |
| --- | --- |
| assets/critical.css | Card NEW/SALE/SOLD OUT: Poppins từ token font sẵn có, 10px, weight từ badge token (500), uppercase, tracking 1.4px, line-height 1.5, min-height 22px; padding 2px/8px trừ border-width hiện có. Radius dùng --badge-radius, không đóng cứng. Tag border dùng màu nền tương ứng. |
| snippets/css-variables.liquid | Tag primary text #111111 thay #181818; giữ trắng và secondary tone hiện có. |
| snippets/product-badges.liquid | Bỏ sale/soldout (kể cả dạng có khoảng trắng, dấu -/_, legacy badge:) trong custom-tag loop; không tính vào giới hạn 3 tag. Giữ automatic sale/sold-out, sold-out precedence và Show tags gating. |
| config/settings_data.json current | Dùng option sẵn có: product_card_show_tags=true, radius_badges_subheadings=slightly_rounded (4px), badge_sale_background_color=#D94100, badge_sale_text_color=#FFFFFF, badge_sold_out_background_color=#FFFFFF, badge_sold_out_text_color=#111111. Giữ preset khác. |
| tests/product-card-tags.test.cjs | Thêm regression cho status-tag exclusion và không tiêu hao giới hạn tag. |

Khi update Essen: audit code/settings đích trước, chuyển patch theo diff nhỏ; giữ option màu/bo góc/font/border, không thay bằng CSS hardcoded. Color/radius settings là global nên kiểm tra cả consumers ngoài product card. Không copy nguyên settings_data hoặc ghi đè các customizations khác. Chỉ các thông số card chưa có option mới nằm trong CSS.

Catalog là dữ liệu store, không được chuyển bằng Git: không chạy lại cleanup trên store khác. Với catalog được yêu cầu đồng bộ Figma, chỉ gắn tag đúng product trong nguồn; không thêm New/Bestseller mặc định, badge: prefix, vendor/template hoặc Figma-* marker. Source text new hiện được store tái sử dụng thành New; CSS uppercase hiển thị NEW. Không rename tag dùng chung để đổi case. Sale/Sold out lấy trạng thái commerce, không tạo tag hay đổi stock để giả lập. Quy tắc duy trì tại agents-build-themes/skills/setup-store/store-content-media/references/products.md.

Bằng chứng nguồn: 5 tests PASS, Theme Check 0 errors / 5 existing deferred warnings, diff check PASS; homepage DOM readback xác nhận 11 sản phẩm không còn tag ngoài Figma (ngoại lệ Sale giữ nguyên). Desktop NEW/SALE có 10px, tracking 1.4px, bo góc 4px và cao 22px. Sold-out verified qua source component/Liquid logic; live target sold-out và Theme Editor save/reload phải QA khi áp dụng Essen.

## Receipt Essen — 2026-10-14

Owner yêu cầu đọc doc, kiểm tra và update trong repo Essen. Đích `theme/essen-theme`, HEAD trước sửa `acb809562bf01eb1f301e88439504d3c93bfc141`; patch local chưa commit. [Receipt đầy đủ tại Essen](../../../essen-theme/docs/audits/arche-to-essen-2026-10-14.md) ghi bằng chứng đích, file sở hữu và QA còn thiếu. Receipt này cập nhật các trạng thái pending lịch sử ở trên; không dùng QA Arche làm QA Essen.

| Mã | Revision | Essen hiện tại | Bằng chứng / phần còn thiếu |
| --- | --- | --- | --- |
| ARCHE-ESSEN-TAB-LAYOUT-001 | 1 | applied — local | Tái hiện gap cố định bằng CSS Essen; binding desktop/mobile và gap 0–100px pass Chrome. Live editor pending. |
| ARCHE-ESSEN-SLIDESHOW-002 | 2 | applied — local | Tái hiện scaleX(.5); shared reveal và reconcile clock CSS, giữ navigation/geometry/timer Essen. 40 Chrome progress cases pass; live editor/manual-loop edge QA pending. |
| ARCHE-ESSEN-CUSTOM-SECTIONS-001 | 1 | applied — local | Sáu root còn thiếu đã mở @theme, giữ private/@app/preset. Comparison table/hai testimonial skipped vì đã đáp ứng. Custom section không có tên/preset `(custom)` nên giữ nguyên. Live editor pending. |
| ARCHE-ESSEN-IMAGE-CARD-001 | 1 | applied — local follow-up 2026-10-14 | Sau commit Essen 116e03ed, owner báo seam do làm tròn pixel và yêu cầu fix Arche. Đã chuyển đúng image-only inset -1px / width-height +2px; 36 Chrome fixture cases PASS. Live QA/release pending. |
| ARCHE-ESSEN-VARIANT-PICKER-001 | 1 | applied — local | Target fixture tái hiện đổi size vẫn chuyển ảnh; swatch intent và gallery guard đã áp dụng, commerce updates giữ nguyên. Live QA pending. |
| ARCHE-ESSEN-HEADER-ALIGNMENT-001 | 1 | applied — local | CSS đích trả start cho parent Center/Right trước sửa; fallback token và local override pass desktop/mobile. Live editor pending. |
| ARCHE-ESSEN-SIZE-GUIDE-001 | 1 | applied — local | Trigger thiếu Tertiary và có CSS riêng; chuyển shared button/underline, giữ dialog runtime. Live color/underline/open-close QA pending. |
| ARCHE-ESSEN-PRODUCT-CARD-TAGS-001 | 1 | applied — local | Target thiếu switch/resolver; thêm default false, ba tag, prefix/escape/status precedence; năm Liquid tests trên snippets Essen pass. Giữ geometry/settings Essen. Live editor pending. |
| ARCHE-ESSEN-FORM-INPUT-CSS-001 | 1 | applied — local | Baseline đầu chỉ có năm warnings; lần check sau phát hiện bảy input warnings. Thêm subset selector :where không đổi declarations/specificity. Final Theme Check 0 errors/5 existing warnings. Live forms QA pending. |
| ARCHE-ESSEN-BLOCK-ANIMATION-001 | 1 | applied — local | Runtime byte-identical personal main e84d0689249b5ae26d3c5c066c90348e4aae06f4; identity mapping giữ đủ 424 giá trị cũ, template/saved settings byte-identical. Dọn mô tả runtime custom cũ, giữ leaf hooks/CSS/khác biệt ngoài animation. Live editor pending. |
| ARCHE-ESSEN-PRODUCT-BADGES-002 | 1 | applied — shared logic; appearance pending | Chuyển status-tag exclusion và primary tag text #111111. Chưa xác minh gap appearance Figma ở Essen nên giữ typography/geometry/radius/color/current settings; không mutation catalog. |

QA đích: 39 scoped tests PASS; 40 progress + 42 gap/alignment/motion Chrome cases PASS; JS syntax và diff check PASS; Theme Check 0 errors/5 existing settings-count warnings. Ba assertions product-media-variant cũ thất bại cả HEAD gốc và patch, không phải regression mới. Customization coverage còn thiếu Header/Footer ngoài phạm vi update; các path thuộc update đã được record. AI Toolkit Liquid validator thiếu dependency; dùng Shopify CLI Theme Check. Chưa verified live storefront/Theme Editor. Không commit/push/upload/publish; giữ Header/Announcement đang được chỉnh đồng thời trong workspace.

### Essen Image card follow-up — ARCHE-ESSEN-IMAGE-CARD-001 revision 1 — 2026-10-14

Owner báo vệt/border phía trên ảnh do làm tròn pixel và yêu cầu áp dụng fix Arche, đồng thời ghi lịch sử theo mã để tra nhanh. Nguồn đối chiếu: Arche `theme/arche-theme`, commit `4fd63fc3e87089e59538dbeb134af2518b485941`, CSS trong blocks/image-card.liquid. Đích Essen `theme/essen-theme`, patch local sau commit `116e03edddb1783ae6fdafb4ae7cc17e076636dc`. Commit 116e03ed chứa các mã update trước đó nhưng chưa chứa IMAGE-CARD-001; receipt pending trước đó là lịch sử và được thay bằng applied local ở follow-up này.

Đã thêm đúng rule `.image-card__media > .background-media:has(.background-media__image)` với inset -1px và width/height calc(100% + 2px). Giữ clipping/card box, media/preset/schema, ratio, overlay, radius, hover và video; không tắt border merchant chọn. QA đích: 36 Chrome fixture cases PASS tại 375/768/1920px, ratios 1:1/5:4/4:5, tọa độ/kích thước pixel lẻ, ảnh/video, square/rounded, overlay/hover. Theme Check 0 errors/5 existing warnings; diff check PASS. Chưa verified storefront/Theme Editor live; chưa commit/push/upload/publish follow-up.

Tra nhanh trạng thái/mã/commit của tất cả update tại [bảng tra nhanh Essen](../../../essen-theme/docs/audits/arche-to-essen-2026-10-14.md#tra-nhanh-update-theo-arche); chi tiết mapping source/target và lịch sử IMAGE-CARD-001 trong cùng receipt.

## Header navigation — hướng dẫn update variant ngày 2026-10-14

Nguồn: repo `arche-theme`, branch `theme/arche-theme`. Đích theo tài liệu này: repo `essen-theme`, branch `theme/essen-theme`. Các mã dưới đây đều **pending** tại Essen: chưa audit/apply/QA/upload/publish trong tác vụ Header này. Không nhầm với `ARCHE-ESSEN-HEADER-ALIGNMENT-001`, mã cũ dành cho compound content block `blocks/header.liquid`, không phải navigation Header.

| Mã | Revision | Phạm vi nguồn | Commit nguồn | Essen |
| --- | --- | --- | --- | --- |
| ARCHE-ESSEN-HEADER-LOGO-002 | 1 | Logo Desktop/Mobile position, nhóm action mobile, first paint/resize | 8cbc1913 | pending |
| ARCHE-ESSEN-HEADER-GAP-003 | 1 | Gap menu/actions độc lập và Customize for mobile | ad3fc68d | pending |
| ARCHE-ESSEN-HEADER-SEARCH-004 | 1 | Bốn giá trị Search Desktop type | ad3fc68d | pending |
| ARCHE-ESSEN-HEADER-BUTTON-005 | 1 | Banner dùng shared button và tránh cắt underline tertiary | 8cbc1913 + ad3fc68d | pending |

### ARCHE-ESSEN-HEADER-LOGO-002 — vị trí logo độc lập

- Files: `blocks/_header-logo.liquid`, `assets/header.js`, `blocks/_header-top.liquid`, phần Header first-paint của `assets/critical.css`; regression trong `tests/header-responsive-layout.test.cjs`.
- Giữ ID cũ `position`, đổi nhãn thành Desktop position; thêm `position_mobile` với Left/Center, default Center, Liquid normalization và data attributes riêng. Không rename ID desktop làm mất giá trị đã lưu.
- Runtime dùng breakpoint hiện tại 991.98/992px; đọc đúng option từng viewport. Mobile Center: hai cột hai bên cân bằng, logo giữa thực sự, Menu toggle/Search cụm trái và Cart phải. Mobile Left: logo trái, toggle/Search/actions cụm phải. Desktop giữ bố cục theo Desktop position.
- Di chuyển lại cùng node khi breakpoint/vị trí đổi; lưu thứ tự gốc bằng WeakMap, không nhân bản logo/action hoặc listener; giữ focus sau reparent. First paint phải đọc Mobile position, không suy từ class desktop. Existing section-load/reinitialization vẫn idempotent.
- Dependency: DOM cột/Header runtime của Essen và CSS breakpoint đích; không bắt buộc chuyển preset, menu store hoặc ảnh Arche. Nếu cấu trúc khác, reconcile patch, không copy nguyên file.

### ARCHE-ESSEN-HEADER-GAP-003 — gap menu và cụm actions

- Files: `blocks/_header-top.liquid`, phần Header first-paint `assets/critical.css`.
- Giữ `gap` (đổi label Gap menu): khoảng giữa các cột Header/logo và navigation. Không thay nó cho gap từng navigation link; `_header-menu.gap` vẫn là setting riêng.
- Thêm `actions_gap`: gap trong cụm Search/Account/Cart/localization/divider. Thêm `customize_mobile_gap` (Customize for mobile), `gap_mobile`, `actions_gap_mobile`; chỉ hiện hai range mobile khi checkbox bật.
- Liquid guard 0–100px, giữ 0 hợp lệ. Binding `--header-top-gap` và `--header-actions-gap`; mobile override qua `--header-top-gap-mobile` / `--header-actions-gap-mobile` chỉ emit khi bật. Tắt checkbox thì cả hai kế thừa desktop, không dùng mobile hardcoded.
- First paint cũng dùng gap actions tương ứng để không nhảy khi JS sắp cột. Ở Essen giữ giá trị đã lưu; chỉ migrate/add default sau khi đối chiếu owner/setting đích.

### ARCHE-ESSEN-HEADER-SEARCH-004 — Desktop type đúng giá trị

- File: `blocks/_header-search.liquid`. Giữ ID/value hiện có `type`: icon, text, icon_with_text, search_bar.
- >=992px: Icon chỉ icon; Text chỉ nhãn (ẩn icon bằng selector đủ specificity); Icon with text hiện cả hai; Search bar là form GET tới routes.search_url với input q và submit.
- Bỏ việc thu Search bar thành icon từ 1400px; desktop compact 1024px vẫn phải hiển thị kiểu đã chọn. <992px, mọi kiểu dùng icon mở Search overlay; form desktop và nhãn được ẩn, không hiện hai trigger.
- Giữ label/input ID, block editor attributes, aria-controls/haspopup và data-search-overlay-open; không sửa Search overlay logic hoặc search route của đích.

### ARCHE-ESSEN-HEADER-BUTTON-005 — option tertiary và gạch chân

- File implementation: `blocks/_mega-menu-banner.liquid`. Đã có `button_style` với Primary/Secondary/Tertiary, nên giữ option, không hardcode mọi nút thành Tertiary.
- Thay button markup riêng bằng `render 'theme-button'`: truyền variant, label, URL, open_new_tab, icon/position và class spacing/full-width. Shared renderer cấp btn/btn-tertiary/btn--tertiary, btn__label/btn__text và underline attributes đúng contract. Không thêm CSS appearance riêng cho Shop now, không copy shared snippet nếu Essen đã có renderer tương đương.
- Nguyên nhân underline vẫn bị mất ở preset: banner overflow hidden cắt pseudo-element ở dưới nút khi content bottom padding=0. Arche dùng **setting padding_bottom sẵn có =6px** trong hai banner ở section preset và header-group, đủ cho global underline offset hiện tại 5px + nét 1px. Đây là cấu hình theo token đích, không phải quy tắc hardcode 6px cho mọi theme.
- Essen phải tái hiện clipping với global underline bật và option Tertiary; nếu bị cắt, dùng padding control hiện có đủ cho offset/độ dày thực tế. Không ép gạch chân khi global Show underline tắt, không đổi toàn bộ button settings của Essen.
- Dependency: shared theme-button/underline contract và các setting banner hiện có; độc lập logo/gap/Search, không cần copy các feature đó để fix nút.

### Preset, media và giá trị riêng Arche — không tự copy sang Essen

- Nguồn cấu hình: `sections/header.liquid` (schema presets), `sections/header-group.json`; giữ các implementation edits ngoài schema không thuộc các mã trên.
- Trạng thái Arche mới nhất tại `26acff38`: Sticky Type **Always**, Bottom separator **Line**; Transparent header section bật, transparent scheme-3; logo desktop Left/mobile Center.
- Lịch sử: `3fbb353c` bật Always và separator None; `26acff38` đổi lại separator Line theo owner. Không lấy giá trị None cũ làm final.
- Gaps Arche: menu/column 64px, actions 24px desktop; Customize for mobile bật với menu/column 8px, actions 4px. Navigation link gap 28px. Hai banner chọn Button style Tertiary, bottom padding 6px.
- Giữ hai logo global cũ của Arche: `shopify://shop_images/arche-header-black.avif` và `arche-header-white.avif`; không thay bằng ESSEN logo đã upload. Essen phải giữ logo thường/transparent của chính Essen.
- Menu `arche-header` (Menswear/New/Sale/About, Categories/Material) và hai ảnh banner là resource riêng store/preset Arche. Không tạo/copy/đổi menu hoặc upload Files sang variant chỉ vì chuyển code. Handle/menu/media phải xác minh độc lập nếu owner yêu cầu content. Receipt nguồn: `docs/audits/arche-header-media-2026-10-14.json`, `arche-header-menu-2026-10-14.json`.
- Preset/media không là dependency bắt buộc của bốn fix implementation; preserve template, scheme, padding, menu và các setting merchant ở Essen.

### Cách áp dụng, QA và trạng thái đích

1. Khi được yêu cầu update Essen, đọc từng mã, audit file/schema/runtime và tái hiện gap tại chính Essen. Đã được upstream sửa thì skipped kèm bằng chứng; chưa tái hiện được giữ pending; contract khác ghi conflict. Không áp dụng chỉ từ QA Arche.
2. Chuyển từng diff implementation nhỏ theo DOM/token đích; bổ sung option mới với migration rõ ràng, bảo toàn IDs/giá trị đã có. Không chép nguyên Header group/settings_data hoặc ghi đè worktree.
3. QA Logo: cả bốn tổ hợp desktop/mobile Left/Center, 320/375/768/1440px; first paint trước JS, resize round-trip, không duplicate, giữ focus; thêm/remove/reorder/reload và select block trong Theme Editor.
4. QA Gap: giá trị 0/4/24/64 và 100px; bật/tắt mobile override, gap actions và gap cột phải độc lập; labels dài, nhiều controls, overflow và keyboard.
5. QA Search: cả bốn kiểu ở 375/1024/1440px, đúng icon/label/form visibility; GET submit, mở/đóng overlay, aria/focus và editor save/reload.
6. QA Button: ba option style, có/không icon, left/right icon, full width và new tab. Tertiary có nét 1px trong clipping bounds khi bật; global underline off thì ẩn; kiểm tra hover/focus và drawer mobile.
7. Chạy Theme Check, JS syntax, diff check và tests phù hợp ở Essen. Ghi commit/revision đích, QA thực tế và pending live editor riêng. Upload/publish cần quyền riêng, không nằm trong việc ghi doc.

Bằng chứng nguồn: 21 Chrome fixture tests PASS cho responsive logo, first paint, option Search, gap inheritance và tertiary clipping/global toggle; Theme Check full 0 errors / 5 warnings có sẵn; diff check PASS. Test fixture không thay thế QA storefront/Theme Editor live. Không đổi code hoặc deploy Essen trong tác vụ này.

| Ngày | Mã | Revision đích | Trạng thái | Preview / publish |
| --- | --- | --- | --- | --- |
| 2026-10-14 | HEADER-LOGO-002 / HEADER-GAP-003 / HEADER-SEARCH-004 / HEADER-BUTTON-005 (đầy đủ prefix ARCHE-ESSEN ở trên) | chưa audit/apply | pending | chưa upload / chưa publish |


## ARCHE-ESSEN-PRESS-001 — Hiển thị nội dung khi đổi active item

Ngày: 2026-10-14. Revision: 1. Nguồn: `arche-theme`, branch `theme/arche-theme`, commit `c04c3a402149f25ac5373c9af39cd4159163f857` (`fix(press): reveal selected quotes and release fade effects`), tham khảo runtime của `elara-theme`. Đích: `../essen-theme`, branch `theme/essen-theme`. Trạng thái: **pending** — chưa audit, áp dụng hoặc QA tại Essen; chưa upload preview/publish.

### Lỗi, phạm vi và dependency

- Khi chọn logo/item khác trong Press, quote có entrance animation có thể còn `reveal-pending` vì callback IntersectionObserver đã chạy khi item bị ẩn. Khi quay lại item cũ, animation fade với `fill: forwards` có thể giữ opacity 0 dù item đã được chọn.
- `assets/block-animations.js`: thêm `.press-item[data-carousel-slide]` vào `scopeSelector` để lifecycle hiện có reset nội dung khi ẩn và reveal khi item được active trong viewport.
- `assets/carousel-block.js`: trong `initializeReveal`, cancel animation trong `finally` sau khi promise finished kết thúc để CSS selection sở hữu trạng thái opacity nghỉ; chuyển keyframes exit/enter thành opacity-only, để animation của block con sở hữu chuyển động.
- `tests/press-active-item.test.cjs`: kiểm thử quote chưa được reveal khi ẩn, đổi và quay lại item, animation `none`, cleanup fade và chọn nhanh liên tiếp.
- Dependency: reveal carousel và block entrance lifecycle hiện có tại đích. Độc lập với `ARCHE-ESSEN-BLOCK-ANIMATION-001`; nếu Essen đã rebuild theo main, đối chiếu controller mới và áp dụng logic tương đương, không thay bằng runtime Arche cũ. Không chuyển imports Swiper, preset, quote, logo, image ratio, spacing hoặc layout của Arche/Elara.

### Áp dụng và acceptance tại Essen

1. Tái hiện trên Essen với quote có animation, chọn item 1 → 2 → 1 và click nhanh nhiều logo. Kiểm tra `aria-hidden`, `.is-selected`, `reveal-pending` và opacity thực tế. Nếu đã có fix tương đương và không còn lỗi, ghi `skipped`; chưa tái hiện được thì giữ `pending`.
2. Chuyển riêng logic lifecycle/cleanup theo implementation đích; không copy toàn bộ hai asset hoặc ghi đè các custom khác. Giữ autoplay, pause-on-hover, keyboard/focus, pagination và Theme Editor lifecycle hiện có.
3. QA desktop/mobile, animation bật/tắt và reduced motion; từng item hiển thị quote đúng khi active, quay lại item cũ không mất nội dung, chọn nhanh kết thúc ở item yêu cầu cuối cùng, chỉ một item selected và logo có `aria-current` đúng. Kiểm tra autoplay, nhiều instance và Theme Editor select/add/remove/duplicate/reorder/save/reload.
4. Chạy tests thích ứng với runtime đích, Theme Check full và diff check; ghi commit đích cùng bằng chứng, chỉ đánh dấu `verified` sau QA Essen. Preview/publish theo dõi riêng.

Bằng chứng nguồn: 4 Press regression tests và 3 collection-tab motion tests PASS (7/7); `git diff --check` PASS; Theme Check full với `--fail-level error` PASS, 0 errors / 5 cảnh báo settings-count ở các file khác. Chưa QA storefront/Theme Editor live; kết quả nguồn không thay thế QA Essen.

| Ngày | Mã | Revision | Commit nguồn | Trạng thái Essen | Preview / publish |
| --- | --- | --- | --- | --- | --- |
| 2026-10-14 | ARCHE-ESSEN-PRESS-001 | 1 | c04c3a40 | pending — chưa audit/apply | chưa upload / chưa publish |

## ARCHE-ESSEN-HEADER-LOAD-006 — Header không nhảy menu khi tải lại

Ngày 2026-10-14, revision 1. Nguồn: `arche-theme`, branch `theme/arche-theme`, patch local chưa commit. Đích `essen-theme`, branch `theme/essen-theme`: **pending**, chưa kiểm tra/apply/upload/publish.

- Files: phần Header first-paint trong `assets/critical.css`; regression `tests/header-responsive-layout.test.cjs`. Không thay font/logo/resource hoặc trì hoãn/ẩn toàn bộ Header chờ JS.
- Nguyên nhân: trước `data-layout-ready`, menu desktop bị đặt absolute ở giữa cho logo Left; sau `organizeHeaderLayout` nó chuyển sang cột navigation bên cạnh logo. Logo trước JS căn theo top thay vì center; menu toggle mobile có min-height 40px trước JS nhưng block hiện tại dùng 24px.
- Sửa nguồn: giữ menu trong flow trước JS; logo Left đứng đầu, menu nối tiếp với khoảng cách tính từ `--header-top-gap` và `--header-actions-gap`, vùng menu co giãn để giữ actions phải. Logo Center vẫn giữa; giới hạn menu theo phần cột trái. Căn giữa logo tuyệt đối theo cả hai trục. Đồng bộ toggle mobile với block hiện tại 24px. JS tiếp tục tổ chức cùng nodes như trước; không thêm listener hoặc runtime khởi tạo thứ hai.
- Dependency: DOM Header và các gap/position setting hiện có của đích. Nếu Essen chưa nhận HEADER-LOGO-002/GAP-003 thì điều chỉnh theo token/DOM thực tế, không copy mù selectors hoặc yêu cầu copy preset Arche. Con số toggle phải theo block đích, không coi 24px là chuẩn bắt buộc mọi theme.
- Khi update: tái hiện vị trí logo/menu/actions trước JS và sau khởi tạo bằng cách trì hoãn runtime; chỉ áp dụng nếu còn dịch chuyển. Kiểm tra Desktop/Mobile Left/Center, custom gap, logo thường/transparent, sticky, width 375/768/1024/1440/1920, viewport đổi và editor reload. Đo nội dung nhìn thấy, không chỉ container. Nếu lỗi đã hết, ghi skipped và bằng chứng.
- QA nguồn: 41 Chrome fixture tests PASS, gồm 20 trường hợp đối chiếu vị trí hiển thị trước/sau JS ở năm viewport và bốn tổ hợp vị trí logo, sai lệch không quá 1px; giữ 21 regression Search/gap/tertiary. Theme Check 0 errors/5 existing warnings; diff check PASS. Chưa xác minh reload trên storefront/Theme Editor live của Essen; QA fixture nguồn không được dùng để đánh dấu verified đích.
- Trạng thái Essen: pending. Preview/publish: chưa thực hiện. Không chuyển preset/media/menu hoặc các patch animation/banner đang sửa đồng thời.

## Lighthouse — hướng dẫn update variant ngày 2026-10-14

Ngày: 2026-10-14. Revision: 1. Người dùng yêu cầu tối ưu preview Arche và ghi lại để Essen đọc/apply sau. Nguồn: `arche-theme`, branch `theme/arche-theme`, checkpoint `04dc9f04410f76f2c502752a40476993b29c47c9` + patch local ở `assets/block-animations.js` và `blocks/_mega-menu-banner.liquid`. Preview nguồn: [draft 192282820907](https://layouthub-template-v2.myshopify.com/?preview_theme_id=192282820907). Đích: `../essen-theme`, branch `theme/essen-theme`; tất cả mã dưới đây **pending**, chưa audit/apply/QA/upload/publish Essen.

Bao gồm hai tối ưu mới ngày 14/10 và các tối ưu đã có trong checkpoint nguồn nhưng chưa có handoff Lighthouse. Giữ preset, media, thứ tự, typography, khoảng cách và layout riêng của Essen. Không chép homepage, header-group hay settings_data Arche. Audit từng gap tại đích theo điều kiện chung đầu doc; đã có fix tương đương thì skipped, chưa xác minh thì pending.

| Mã | Revision | Phạm vi | Nguồn | Trạng thái Essen |
| --- | --- | --- | --- | --- |
| ARCHE-ESSEN-LIGHTHOUSE-CSS-001 | 1 | CSS component tĩnh tải theo owner | section/block Liquid và asset CSS được owner tham chiếu | pending |
| ARCHE-ESSEN-LIGHTHOUSE-ANIMATION-002 | 1 | Cache row geometry trong mỗi scan animation | assets/block-animations.js — patch local 14/10 | pending |
| ARCHE-ESSEN-LIGHTHOUSE-MEDIA-003 | 1 | Lazy/responsive ảnh mega menu đang ẩn | blocks/_mega-menu-banner.liquid — patch local 14/10 | pending |
| ARCHE-ESSEN-LIGHTHOUSE-RUNTIME-004 | 1 | Runtime Scrolling cards theo viewport; chuẩn bị slide kế cho autoplay | sections/scrolling-cards.liquid; assets/scrolling-cards.js; assets/slideshow.js; assets/theme-module-loader.js | pending |
| ARCHE-ESSEN-LIGHTHOUSE-ACCESS-005 | 1 | Meta description fallback, tên link bài viết, Skip to content, account menu fallback | snippets/meta-tags.liquid; snippets/theme-button.liquid; blocks/blog-card-button.liquid; layout/theme.liquid; assets/critical.css; locales/en.default.json; blocks/_header-account.liquid; blocks/_header-top.liquid | pending |

### ARCHE-ESSEN-LIGHTHOUSE-ANIMATION-002 — giảm đọc layout lặp

- Gap nguồn: `scan()` query toàn bộ siblings và đọc tọa độ hàng của mọi sibling cho từng card; 24 card tạo 600 lần đọc row geometry/24 query list, 100 card tạo 10.100 lần đọc.
- Patch mới dùng Map **cục bộ trong mỗi scan** cho list membership, card→list và row top. Chụp tọa độ trước khi ghi các attribute reveal; mỗi card đo một lần. Token `--tab-card-stagger` đọc một lần/card thay cho hai lần.
- Kết quả fixture so sánh trực tiếp code trước/sau: 24 card còn 24 đọc/1 query list; 100 card còn 100 đọc. Dataset delay/tab delay/row delay/stagger khớp trước/sau; resize sang hai cột đo lại và giữ parity. Đây là số lần đọc layout trong fixture, không phải số điểm Lighthouse hay tổng forced reflow trên trang thực.
- Giữ nguyên animation type, curve, thời lượng, delay merchant, quy tắc row cách nhau <8px, DOM-order tab staggering, focus, reduced motion, Press và teardown. Không đổi option/preset. Không cache lâu dài vì tab ẩn và breakpoint có thể đổi geometry.
- Dependency: runtime main/card staggering thực tế của Essen. Mã này là tối ưu bổ sung sau migration animation theo main; không dùng nó để thay toàn bộ runtime hoặc khôi phục runtime Elara cũ. Nếu Essen đã có batching/caching tương đương, skipped. Nếu cấu trúc khác, chuyển logic vào owner scan tương ứng.
- QA đích: dataset/timing trước/sau với 1/24/100 card, nhiều list/nested list, tab ẩn→active, resize desktop→mobile→desktop, explicit delay 0/75/150, `none`, reduced motion, Press 1→2→1, editor reload/duplicate/unload và keyboard focus. Chỉ verified khi QA runtime Essen đạt.

### ARCHE-ESSEN-LIGHTHOUSE-MEDIA-003 — ảnh menu không tranh tải đầu trang

- Quan sát trên HTTPS draft ngày 14/10: hai banner Header có `loading=auto`, `fetchPriority=auto`, ảnh được chọn ở width=1000; khung desktop đang được DOM báo rộng khoảng 441px. Hero đầu vẫn `loading=eager`/`fetchPriority=high`.
- Chỉ bổ sung vào `image_tag` của banner: `loading: 'lazy'`, `sizes: 'auto, (max-width: 767px) 100vw, 50vw'`. Giữ image_url tối đa 1000 và widths `240, 360, 480, 720, 1000`, alt, dimensions Shopify, focal point và CSS. `auto` dùng chiều rộng khung thực trên trình duyệt hỗ trợ; fallback giữ chất lượng trên trình duyệt cũ. Không dùng 50vw như phép tính chính xác của tất cả cấu hình mega menu.
- Dependency: ảnh banner nằm trong menu/drawer ẩn ở first paint, không phải ảnh LCP. Không áp lazy cho logo hoặc hero. Không cần chuyển Button Tertiary/layout/menu/media Arche để áp patch này.
- Tham khảo chính thức: [Shopify responsive images](https://shopify.dev/docs/storefronts/themes/best-practices/performance/use-responsive-images), [image_tag](https://shopify.dev/docs/api/liquid/filters/image_tag).
- QA đích: cold-cache không tải banner khi menu vẫn ẩn; mở bằng mouse/keyboard và mobile drawer phải tải ảnh đúng, không đổi bounds/ratio/spacing, không CLS mới; thử 1/2 banner, width limit bật/tắt, hai breakpoint, no-JS và Theme Editor. Không giữ pending ảnh mãi khi menu hiện. Không đánh dấu verified chỉ từ Liquid render.

### ARCHE-ESSEN-LIGHTHOUSE-CSS-001 — CSS theo owner, giữ layout

- Tối ưu đã có ở nguồn từ 13/10: chuyển các CSS tĩnh component tùy chọn khỏi `{% stylesheet %}` bundle phát triển chung sang asset, nạp **synchronous** bằng owner Liquid. Component trên trang vẫn có CSS để dự trữ layout; component vắng mặt không mang CSS theo bundle. Không defer CSS đang giữ hình học above-the-fold.
- Audit các cặp `section-*.css`/`block-*.css` trong source hiện hành và reference tương ứng, không copy tất cả asset theo glob. Danh sách nhóm chính gồm collection banners/list/thumbnails/tabs/background, email signup, FAQ, image cards/comparison, icon text, location map, parallax, marquee, shop-the-look, testimonial, timeline, search và zoom banner; block bundle product list, countdown, FAQ accordion, image-text card grid item, slide, testimonial item và timeline slide.
- Với mỗi owner đủ điều kiện ở Essen, trích **CSS Essen hiện tại** vào asset, giữ byte nội dung rule/cascade/specificity/media queries rồi thay đúng stylesheet owner bằng reference. Không lấy CSS Arche để ghi đè geometry Essen. Dynamic Liquid CSS vẫn ở owner hiện tại.
- Dependency: asset và owner reference phải được chuyển cùng nhau; kiểm tra section rendering API/editor và no-JS. Không giữ cùng rule ở cả compiled bundle và asset. Tên asset khác ở Essen thì dùng tên đích hiện có.
- QA đích: so sánh nội dung rule trước/sau, URL asset không 404, initial geometry desktop/mobile, mọi template đang dùng owner, section add/reload và bundle byte before/after. Dữ liệu bundle 13/10 là development bundle, không cam kết cùng mức giảm trên HTTPS draft/production.

### ARCHE-ESSEN-LIGHTHOUSE-RUNTIME-004 — trì hoãn runtime dưới fold

- `sections/scrolling-cards.liquid`: section ở vị trí template sau hai vị trí đầu dùng marker `data-theme-module`; vị trí đầu và Theme Editor tải ngay. `assets/scrolling-cards.js` export `initializeThemeModule` để loader init instance mới sau khi import đã cache.
- Dependency bắt buộc: `assets/theme-module-loader.js` của đích phải hiểu marker, init instance mới, observe boxed ancestor và xử lý editor select/unload/replay. Nếu đích chưa đáp ứng, audit/port riêng phần thiếu; không copy whole loader. Không chuyển centering, Fade/Scale preset hoặc artwork Arche chỉ để có lazy runtime.
- `assets/slideshow.js`: autoplay dùng `lazyPreloadPrevNext: 1` để slide kế sẵn sàng trước deadline; manual-only vẫn native lazy. Đây là tradeoff tải thêm một slide gần kề cho autoplay, không phải bảo đảm giảm LCP. Giữ preload responsive ưu tiên của slide đầu.
- QA: runtime dưới fold chưa tải ở top, vào viewport init đúng một lần; editor add/select/reload và cleanup; autoplay/hover/focus/hidden tab/reduced motion, slide kế không trống; không đổi timer/duration, effects hoặc pagination riêng Essen.

### ARCHE-ESSEN-LIGHTHOUSE-ACCESS-005 — SEO và accessibility dùng chung

- Meta description dùng `page_description`, khi thiếu thì fallback về description Open Graph hiện có; escape đúng, không đặt prose Arche vào Essen.
- Blog Read more truyền article title qua argument tùy chọn `accessible_description` của shared theme-button. Label hiển thị giữ nguyên; title thêm bằng visually-hidden để tên link có ngữ cảnh. Chuyển caller/renderer contract cùng nhau nếu Essen thiếu.
- Layout thêm Skip to content trỏ `#MainContent`, dùng locale và CSS chỉ hiện khi focus; main có `tabindex=-1`. Giữ landmark/IDs, vị trí bàn phím và style token đích.
- Header account chỉ yêu cầu handle `customer-account-main-menu` nếu menu tồn tại, nếu không dùng account menu mặc định Shopify. Không tạo resource/menu mới.
- Các thay đổi độc lập; áp riêng phần còn gap ở đích, không copy whole Header/layout. Kiểm tra link names, meta DOM, keyboard skip, account link/menu và mobile/editor. Contrast và pagination target hiện tại cần audit riêng, không tự đổi màu/kích thước preset để nâng điểm.

### Bằng chứng nguồn và giới hạn đo

- Patch mới 14/10: 20 tests PASS (3 direct before/after geometry-count tests, 10 animation lifecycle, 3 collection-tab motion, 4 Press); Liquid render banner PASS; JS syntax/diff check PASS. Full Theme Check: 362 files, 0 errors / 5 cảnh báo ExcessiveSettingsCount có sẵn.
- Customization checker vẫn báo thiếu record ở các asset/owner CSS và một số implementation cũ ngoài patch; chưa có full coverage PASS. Hai implementation mới đã ghi trong Customizations table; không biến tình trạng này thành QA đạt toàn repo.
- HTTPS preview được mở read-only trong Chrome, xác nhận draft Arche và asset t/34. HTTP client không có storefront session bị chuyển tới password page. Shopify CLI yêu cầu đăng nhập lại; local preview đã dừng. **Chưa upload patch 14/10, chưa có Lighthouse before/after mới trên URL yêu cầu và chưa QA storefront/editor của patch mới.** Không dùng điểm password page hoặc số đo cũ làm điểm hiện tại.
- Lịch sử tham khảo: các report Lighthouse 13.5.0 ngày 13/10 đo `http://127.0.0.1:9300/`, mobile Performance 46→54, TBT 391.5→120.5ms; desktop 71→72; SEO 85→100; Accessibility 94, Best Practices 54. Các run đều có cảnh báo page load timeout. Development resources/no-cache/hot reload và request Shopify làm kết quả chưa đại diện production. Không cộng mức cải thiện này vào patch 14/10.
- Khi CLI/session phục hồi: xác nhận exact store/theme unpublished → backup/read remote đúng hai file → scope upload với `--only` và `--nodelete` → pull/readback → Lighthouse cold-cache mobile/desktop ít nhất ba lần cùng viewport/version/throttling, báo median LCP/TBT/CLS/score và warnings. Giữ authentication hợp lệ mà không tắt storefront password; không publish. Doc update Essen vẫn pending đến khi owner yêu cầu apply và có QA đích.

| Ngày | Mã | Revision nguồn | Trạng thái Essen | Upload preview nguồn / publish |
| --- | --- | --- | --- | --- |
| 2026-10-14 | LIGHTHOUSE-CSS-001 / ANIMATION-002 / MEDIA-003 / RUNTIME-004 / ACCESS-005 (prefix ARCHE-ESSEN đầy đủ ở trên) | checkpoint 04dc9f04 + local patch | pending — chưa audit/apply | patch 14/10 chưa upload / chưa publish |

## Receipt Essen đợt 3 — 2026-10-14

Owner yêu cầu tiếp tục đọc Arche để update variant Essen. Đích `theme/essen-theme`, HEAD trước sửa `058c2b511eba1f3e69842333ce7b205a19929494`; patch đợt 3 local, chưa commit/push/upload/publish. Nguồn code Arche clean HEAD `21e1dc5c4e462625efd267ebb9b7ef641a8473a4` khi audit; commit từng mã ở bảng dưới. [Receipt đích đợt 3](../../../essen-theme/docs/audits/arche-to-essen-round-3-2026-10-14.md), [history/tra nhanh](../../../essen-theme/docs/variant-update-history.md).

Các pending của đợt hướng dẫn Header/Press/Lighthouse/Size Guide bên trên là lịch sử trước audit; trạng thái mới của các mã trong đợt 3 là applied local, live QA chưa verified. Các mã cũ đã nhận không áp lại. Release trước: shared đợt 1 `116e03ed`; Image card `595a3548`; doc release history `058c2b51`, đều đã push Essen. Badge appearance/settings PRODUCT-BADGES-002 vẫn pending.

| Mã đầy đủ | Revision | Commit nguồn | Essen mới nhất / bằng chứng |
| --- | --- | --- | --- |
| ARCHE-ESSEN-SIZE-GUIDE-DIALOG-002 | 1 | 4c01f5a8 | applied local — Popup normalization/body-sm; 25 target Chrome shell cases. |
| ARCHE-ESSEN-HEADER-LOGO-002 | 1 | 8cbc1913 | applied local — Desktop/mobile positions, reparent/focus/resize; giữ candidates/logo Essen. |
| ARCHE-ESSEN-HEADER-GAP-003 | 1 | ad3fc68d | applied local — Menu/actions độc lập, mobile override tùy chọn, zero hợp lệ; giữ gap saved 16px. |
| ARCHE-ESSEN-HEADER-SEARCH-004 | 1 | ad3fc68d | applied local — Bốn desktop types tại 1024/1440; mobile icon-only. |
| ARCHE-ESSEN-HEADER-BUTTON-005 | 1 | 8cbc1913 + ad3fc68d | applied local — Shared theme-button; banner Essen hiện Primary/padding 40px, không chuyển Tertiary/6px preset. |
| ARCHE-ESSEN-HEADER-LOAD-006 | 1 | f4b52bb6 | applied local — First-paint visibility khớp initialized trong 20 Chrome cases. |
| ARCHE-ESSEN-PRESS-001 | 1 | c04c3a40 | applied local — Press scope/reset/reveal và cancel filled fade; opacity-only selection. |
| ARCHE-ESSEN-LIGHTHOUSE-CSS-001 | 1 | 04dc9f04 inventory | applied local — Trích 29 CSS owner từ Essen, byte-identical 122749 raw bytes; synchronous assets, không copy CSS source. |
| ARCHE-ESSEN-LIGHTHOUSE-ANIMATION-002 | 1 | f8433bb9 | applied local — Cache cục bộ mỗi scan; 24 card row reads 600→24, 100 card 10100→100; timing parity. |
| ARCHE-ESSEN-LIGHTHOUSE-MEDIA-003 | 1 | f8433bb9 | applied local — Menu banner lazy/sizes auto fallback; giữ alt/candidates; network live QA pending. |
| ARCHE-ESSEN-LIGHTHOUSE-RUNTIME-004 | 1 | 04dc9f04 | applied local — Marker/export Scrolling cards, preload autoplay neighbor; loader đích đã tương đương; không chuyển Fade/Scale/centering. |
| ARCHE-ESSEN-LIGHTHOUSE-ACCESS-005 | 1 | 04dc9f04 | applied local — Description fallback, article link context, skip link locale/focus, existing account-menu guard. |

QA đích: Header 10/41 PASS trước → 41/41 PASS sau; Press 0/4 → 4/4. Tổng 80 scoped tests, 67 Chrome cases, 6 Liquid cases và 6 cache-parity comparisons PASS. Full Theme Check 0 errors/5 existing warnings, JS syntax/diff check PASS. CSS manifest có hash từng asset; schema/preset/template/group/settings JSON giữ nguyên ngoài control Header bổ sung; không thay content/media/order/animation values. Header/Announcement đang sửa riêng được giữ byte-identical ngoài first-paint scope đã audit. Customization coverage vẫn thiếu Header/Footer ngoài phạm vi, không báo full coverage PASS.

Chưa verified live storefront/Theme Editor, chưa đo cold-cache Lighthouse before/after production; không coi raw CSS bytes hay read-count fixture là cải thiện score thực. Chưa release/upload/publish đợt 3.

## ARCHE-ESSEN-HEADER-PRESET-007 — Essen Header preset theo Arche, giữ logo — 2026-10-14

Revision 1. Owner yêu cầu Header preset giống Arche và chỉ giữ logo Essen hiện tại; yêu cầu này cho phép chuyển riêng composition/content/resource references Header vốn bị loại khỏi các mã implementation trước. Nguồn code Arche `21e1dc5c4e462625efd267ebb9b7ef641a8473a4`, section preset và saved Header hiện hành. Đích Essen `theme/essen-theme`, local sau `058c2b51`; applied, chưa commit/push/upload/publish.

Đã chuyển đúng presets array của sections/header.liquid và Header node trong sections/header-group.json: Always, separator Line, transparent scheme-3, desktop Left/mobile Center, gap 64/24 và mobile 8/4, padding 16/10, body/sm navigation, menu arche-header, Cart icon, Search text, bỏ Localization/divider, hai banner nguồn với Tertiary/bottom padding 6px. Giữ config/settings_data.json byte-identical, gồm hai logo Essen thường/transparent và width 104/140px. Không chuyển global logo Arche, không tạo menu/upload Files hoặc đổi Announcement.

QA: preset/instance đích exact source; 20 block instances hợp lệ theo type/setting IDs/select/range/order; Header implementation và group ngoài Header giữ nguyên; Theme Check 0 errors/5 warnings cũ; diff check PASS. Resource live readback và storefront/Theme Editor QA pending. [History đợt 4 tại Essen](../../../essen-theme/docs/variant-update-history.md) ghi lịch sử riêng, không gộp preset follow-up vào receipt bảo toàn đợt 3.

### Essen release receipt — 2026-10-14, đợt 3–5

Essen đã commit/push 12 mã shared r1 đợt 3 và ARCHE-ESSEN-HEADER-PRESET-007 r1 đợt 4 tại `34a8ca27bbcc0c525b84bc8f4f9cf8b4f3c105cd` trên `origin/theme/essen-theme`. Cùng release có ESSEN-HEADER-LOGO-FIGMA-001 r1 đợt 5: logo desktop/tablet/mobile 104/96/80px theo Figma Essen, giữ tài nguyên logo Essen. Mốc đích hoàn tất code đến đợt 5; lịch sử chi tiết: essen-theme/docs/variant-update-history.md. Full Theme Check workspace/index 0 errors / 5 warnings cũ. Appearance/settings PRODUCT-BADGES-002, live QA và Lighthouse production còn pending; chưa upload/publish, chưa verified.
