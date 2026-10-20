# Rebuild Theme Settings: Virelle → base team

Cập nhật cuối: 20/10/2026. Repo triển khai: `virelle-theme`, branch `theme/virelle-theme`. Tài liệu này tổng hợp **trạng thái cuối của các thay đổi trong đoạn chat**, thay các phương án cũ đã bị điều chỉnh. Chưa chuyển implementation sang base team, chưa commit/publish.

Nguồn đối chiếu ban đầu: [sheet So sánh / plan update](https://docs.google.com/spreadsheets/d/18wHD4UxSomLRIE3yQvWWEDMultZAtjiJblAjb6aaVlg/edit?gid=455321062#gid=455321062), [sheet Base](https://docs.google.com/spreadsheets/d/18wHD4UxSomLRIE3yQvWWEDMultZAtjiJblAjb6aaVlg/edit?gid=1623040219#gid=1623040219), theme mẫu Shopify `161667842133`, base tham chiếu `139628773461`. Không coi ghi chú local là xác nhận đã ghi sheet live. Các bảng dưới được đối chiếu với code local; sheet không đọc mới trong lượt ghi doc. Riêng Sale/Sold out badge đã đọc lại trực tiếp UI theme mẫu theo xác nhận ở mục4.1.

## 1. Phạm vi rebuild và cách chuyển về base

Đưa về base: schema, locale, resolver, primitive/alias CSS, binding consumer, migration và test liên quan. Không copy nguyên palette, font picker, content/media, catalog, section assignments hoặc template Virelle thành default base.

Luồng bắt buộc: `config/settings_schema.json → config/settings_data.json → snippets/css-variables.liquid / resolver → CSS token → class/component`.

- Giữ nhãn Display / Extra large / Large / Medium / Small / Extra small, Eyebrow và Primary / Secondary / Tertiary button.
- Font size liên tục dùng range; range là number, select là string. Không giữ các key/option cũ chỉ để bảo toàn style; migration phải tạo dữ liệu hợp lệ rồi config từng theme từ Figma.
- Một bộ 11 token letter spacing và 6 token line height; nhiều control được chọn độc lập nhưng cùng scale.
- Chỉ ghi `visible_if` khi schema thực sự có; không có nghĩa là control không bị ẩn do group/context khác. Bảng class/token là code đang dùng, không lấy tên viết ví dụ trong chat làm tên thật.
- **Không cần khớp Heading tablet**; không thêm control/breakpoint tablet cho việc này.

## 2. Typography: control, resolver, token và class

### 2.1. Font role và Body

| Setting / nguồn | Runtime và token | Consumer chính |
| --- | --- | --- |
| `type_heading_font` | Font object Heading → `--font-heading-family`, `--font-heading-style`, `--font-heading-weight` | `.heading-text`, heading tag/class visual |
| `type_primary_font` | Font object Body → `--font-body-family`, `--font-body-style`, `--font-body-weight` | `body`, `.body-text`, `.font-body`, Price kế thừa |
| `type_accent_font` | Font object Accent → `--font-accent-family`, `--font-accent-style`, `--font-accent-weight` | `.accent-text`, `.font-accent`, consumer chọn role Accent |
| `type_body_size` | Range12–18px/step1 → `--font-body-size`; `--font-body-md` alias về size này | `.body-md`, Body/Price root |
| Cỡ phụ Body | XS=base−4, SM=base−2, LG=base+2, XL=base+4, XXL=base+8 → `--font-body-xs/sm/lg/xl/xxl` | `.body-xs/sm/lg/xl/xxl` |
| `type_body_leading` | `typography-token`, kind `line_height` → `--font-body-line-height` | `.body-text`, `.price` qua `--price-line-height` |
| Body tracking, **không có picker riêng** | `--font-body-letter-spacing` chọn primitive chung; hiện Virelle trỏ `--letter-spacing-relaxed`=0.1px | Body và Price kế thừa; không tạo Price tracking riêng |

Font Heading đọc từ Heading Style Guide; Body đọc Body/16 – Body text; Accent đọc frame Eyebrow được gửi. Weight của role do font picker quyết định. Ngoại lệ Button/Badge có control weight riêng ở mục2.4. Không đổi Body sang500 chỉ để khớp Button.

### 2.2. Heading: size, leading, tracking, case độc lập mỗi cấp

| UI / cấp | Size ID | Range px, step1 | Alias size / class visual |
| --- | --- | --- | --- |
| Display / H1 | `type_heading_1_size_desktop`, `type_heading_1_size_mobile` | 28–80 | `--font-heading-display`; `.heading-display`, `.heading-h1`, `h1` |
| Extra large / H2 | `type_heading_2_size_desktop`, `type_heading_2_size_mobile` | 22–50 | `--font-heading-xl`; `.heading-xl`, `.heading-h2`, `h2` |
| Large / H3 | `type_heading_3_size_desktop`, `type_heading_3_size_mobile` | 16–34 | `--font-heading-lg`; `.heading-lg`, `.heading-h3`, `h3` |
| Medium / H4 | `type_heading_4_size_desktop`, `type_heading_4_size_mobile` | 16–28 | `--font-heading-md`; `.heading-md`, `.heading-h4`, `h4` |
| Small / H5 | `type_heading_5_size_desktop` | 14–22 | `--font-heading-sm`; `.heading-sm`, `.heading-h5`, `h5` |
| Extra small / H6 | `type_heading_6_size_desktop` | **12–22**, default16 | `--font-heading-xs`; `.heading-xs`, `.heading-h6`, `h6` |

H1–H4 dùng `snippets/fluid-type-size.liquid`: clamp từ mobile tại375px đến desktop tại1150px, hỗ trợ cả scale đảo chiều. H5/H6 có một size cho mọi thiết bị dù giữ hậu tố `_desktop`; nhãn UI Font size. Bỏ các size tablet và H5/H6 mobile.

Với mỗi `n=1…6`, `suffix=display/xl/lg/md/sm/xs`:

| Setting | Logic → token | CSS consumer |
| --- | --- | --- |
| `type_heading_n_line_height` | kind `line_height` → `--font-heading-suffix-line-height` | `line-height` trong class/tag tương ứng |
| `type_heading_n_letter_spacing` | kind `spacing` → `--font-heading-suffix-letter-spacing` | `letter-spacing` trong class/tag tương ứng |
| `type_heading_n_case` | kind `case` → `--font-heading-suffix-text-transform` | `text-transform` trong class/tag tương ứng |

Đã **thay control chung `type_letter_spacing` bằng 6 control tracking riêng** trong từng group Heading. Generic `--font-heading-letter-spacing` và các alias Custom kế thừa Medium. Các token alias `--type-heading-*` đang có vẫn được giữ theo source; không tạo scale song song.

Đã bỏ info lỗi thời “Display follows the HTML tag typography from Theme Settings. A div uses H2 settings.” khỏi control Heading size.

`blocks/heading.liquid`: `heading_size` chọn class visual; `html_tag` chọn thẻ semantic, hai việc độc lập. Ví dụ Display + h3 render `h3` với `.heading-display`. Paragraph trong control HTML tag hiện có value `div`, không phải đổi implementation sang thẻ `p`. Custom vẫn có trong Heading block, chỉ Overlay bỏ Custom.

### 2.3. Eyebrow

| Setting | Token / logic |
| --- | --- |
| `type_eyebrow_font` | body/heading/accent → `--font-eyebrow-family/style/weight` theo role |
| `type_eyebrow_size` | Range10–18px → `--font-eyebrow-size` |
| `type_eyebrow_line_height` | 6 mức → `--font-eyebrow-line-height` |
| `type_eyebrow_letter_spacing` | 11 mức → `--font-eyebrow-letter-spacing` |
| `type_eyebrow_case` | 4 case → `--font-eyebrow-text-transform` |

`.eyebrow-text` và `.body-p3` dùng bộ token trên; không giữ literal2px/500 để né setting. `.eyebrow-text` lấy màu `--accent-color`, radius `--subheading-radius`; font Accent và màu Eyebrow là hai khái niệm độc lập.

### 2.4. Button và Badge: trạng thái cuối của weight

Typography > Button dùng chung cho Primary/Secondary/Tertiary; group Buttons riêng chỉ quản lý geometry/hành vi.

| Thuộc tính | Button ID → token | Badge ID → token |
| --- | --- | --- |
| Family/style | `button_primary_font` → `--button-font-family/style` | `badge_font` → `--badge-font-family/style` |
| Weight | `button_font_weight` → `--button-font-weight` | `badge_font_weight` → `--badge-font-weight` |
| Size | `button_font_size_px`:10–18px → `--button-font-size`; mobile alias cùng số | `badge_font_size`:10–18px → `--badge-font-size` |
| Tracking | `button_letter_spacing` → `--button-letter-spacing` | `badge_letter_spacing` → `--badge-letter-spacing` |
| Case | `button_primary_text_case` → `--button-text-case` và alias variant | `badge_text_case` → `--badge-text-transform` |

**Weight options cuối cùng:** UI **Default / 300 / 400 / 500 / 600 / 700**; value `body / "300" / "400" / "500" / "600" / "700"`; schema default `body`. Nhãn Default **lấy weight Body**, không phải weight font picker của family đang chọn. Đã bỏ option `inherit` / “Default (font picker weight)”, các số100/200/800/900 và info “Uses the selected font family. If this weight is unavailable, the font picker weight is used.”

Logic weight:

1. Lấy font object theo role family/style của Button hoặc Badge.
2. `body` lấy `body_font.weight`; numeric lấy số được chọn.
3. Dùng `font_modify: 'weight', requested_weight` trên **family đang chọn**, không đổi family sang Body.
4. Có variant thì emit weight tương ứng; riêng Default giữ alias `var(--font-body-weight)`. Loader `snippets/font-faces.liquid` nhận `button_font`/`badge_font`, emit `font_face` và `uniq` để hai nhóm dùng cùng face không bị nạp trùng.
5. Không có variant: fallback nội bộ về weight của role picker, ghi gap; fallback không phải option UI và không được báo đã khớp Figma. Không tự tải family mới.

`.btn`, `button.btn`, `input.btn`, `input[type='submit'].btn` dùng các token Button. `.btn-primary/.btn--primary`, `.btn-secondary/.btn--secondary`, `.btn-tertiary/.btn--tertiary` map màu/border/alias variant về cùng font/size/weight/tracking/case; không còn ba font size độc lập.

`.product-badge` dùng bộ Badge token; `.product-card__badges .product-badge` kế thừa font/size/weight và dùng tracking/case chung. Geometry riêng card vẫn tồn tại (padding/min-height/line-height1.5), không phải toàn bộ CSS badge đã bị xóa. Generic badge và `.btn` vẫn có `line-height:1`; chưa thêm control leading cho hai nhóm này.

### 2.5. Product card title và price

| Setting | Token đích | Consumer |
| --- | --- | --- |
| `product_card_title_font` | `--product-card-title-font-family/style/weight` | `.product-card__title` |
| `product_card_title_size_desktop` | Range10–20px, mọi viewport → `--product-card-title-font-size` | `.product-card__title` |
| `product_card_title_line_height` | `--product-card-title-line-height` từ scale6 | `.product-card__title` |
| `product_card_title_letter_spacing` | `--product-card-title-letter-spacing` từ scale11 | `.product-card__title` |
| `product_card_title_text_case` | `--product-card-title-text-transform` | `.product-card__title` |
| `product_card_price_font` | `--product-card-price-font-family/style/weight` | `.price--product-card` map về `--price-font-family/style/weight` |
| `product_card_price_size` | Range10–20px → `--product-card-price-font-size` | `.price--product-card` map về `--price-font-size` |

Title/price typography chuyển vào Typography; layout Product cards giữ riêng. Bỏ enum title font `display` trùng heading; bỏ size mobile riêng. Token title size cũ `--product-card-title-size` / `--product-card-title-size-mobile` được thay bằng `--product-card-title-font-size`.

Đã gỡ override typography title ở Single/Compact/Shop the look/Video popup và override giá trong `assets/virelle.css`. Không khôi phục `letter-spacing:0.1px`, `gap:6px`, heading color hoặc font/size cứng theo section để né các control này. `.card-title-text` là utility khác còn trong repo, không coi nó là nguồn token của `.product-card__title`.

Price root vẫn lấy Body. `.price--product-card` chỉ đổi font/size ở scope card; PDP/cart giữ nguồn và override của context. Price tracking **kế thừa Body** từ `--font-body-letter-spacing`, không có Price tracking setting/scale riêng. `assets/product-information.css` và utility `.tracking-tight/.tracking-normal/.tracking-relaxed` đã nối primitive chung ở các binding liên quan; không coi mọi literal typography trong repo đều đã được thay.

## 3. Shared token scale và quy tắc Figma

Resolver: `snippets/typography-token.liquid`, tham số `kind` và `value`.

| Line-height value | CSS token | Số hiện tại |
| --- | --- | --- |
| `tighter` | `--line-height-tighter` | 1.1 |
| `tight` | `--line-height-tight` | 1.2 |
| `normal` | `--line-height-normal` | 1.3 |
| `relaxed` | `--line-height-relaxed` | 1.4 |
| `loose` | `--line-height-loose` | 1.5 |
| `extra_loose` | `--line-height-extra-loose` | 1.6 |

| Letter-spacing value | CSS token | Số **Virelle hiện tại**, không phải base default bắt buộc |
| --- | --- | --- |
| `extra_tight` | `--letter-spacing-extra-tight` | −2px |
| `super_tight` | `--letter-spacing-super-tight` | −1.5px |
| `ultra_tight` | `--letter-spacing-ultra-tight` | −1.2px |
| `tighter` | `--letter-spacing-tighter` | −0.6px |
| `tight` | `--letter-spacing-tight` | −0.2px |
| `normal` | `--letter-spacing-normal` | 0em =0px |
| `relaxed` | `--letter-spacing-relaxed` | 0.1px |
| `loose` | `--letter-spacing-loose` | 0.4px |
| `extra_loose` | `--letter-spacing-extra-loose` | 0.8px |
| `ultra_loose` | `--letter-spacing-ultra-loose` | 1.2px |
| `mega_loose` | `--letter-spacing-mega-loose` | 2px |

Các số−2/−1.5/0.4/0.8/1.2 là slot điền suy luận để giữ thứ tự, không phải tất cả đều là style đã đo. Bảng em của các lượt trước đã được thay bằng bảng này. Case resolver: `original`→`none`, còn `capitalize/uppercase/lowercase` giữ tên CSS.

Thu thập Heading, Body, Eyebrow, Button, Badge, card title/price trước khi chỉnh scale global. Px được dùng trực tiếp hoặc đổi em theo size và cascade thực; thứ tự tăng nghiêm ngặt, Normal tracking0, Normal leading1.3. Thiếu hơn11 slot thì ưu tiên Heading→Eyebrow→Product title và hỏi trước khi mở rộng value/token; không tạo scale riêng theo nhóm.

## 4. Colors và scheme owner

Group **Colors**; scheme content order: Background → Headings → Heading highlight → Text → Border → Sale price → Shadow → Eyebrow. Giữ ID scheme, default scheme, section assignment, alpha và các option mở rộng cần dùng.

| Scheme field | CSS token | Consumer/ý nghĩa |
| --- | --- | --- |
| `background` | `--background-color` | Background component theo scheme gần nhất |
| `heading` | `--heading-color` | Heading |
| `heading_highlight` | `--heading-highlight-color` | Heading highlight; giữ tên đúng, không copy lỗi `hightlight` |
| `text` | `--body-color` | Body và màu kế thừa |
| `border` | `--border-color` | Border/input border |
| `sale_price` | `--sale-price-color` → `--price-sale-color` | `.price__current--sale` |
| `shadow` | `--shadow-color` | Shadow theo consumer |
| `accent` | `--accent-color` | Nhãn UI **Eyebrow**; còn consumer link/icon/focus, không chỉ Eyebrow |
| `button_primary_*`, `button_secondary_*` | `--button-primary-*`, `--button-secondary-*` | `.btn-primary`, `.btn-secondary` map vào generic `--button-background/foreground/border` và hover equivalents |
| `button_tertiary_text`, `button_tertiary_hover_text` | `--button-tertiary-text`, `--button-tertiary-hover-text` | `.btn-tertiary`, nền trong suốt |

Scheme emit class `.{{ scheme.id }}` trong `css-variables.liquid`; chuẩn hóa field trống bằng fallback trước khi emit. Primary/Secondary giữ riêng Background / Label / Border / Hover border / Hover background / Hover label. Tertiary giữ Label / Hover label; không gộp thành Outline and subtle.

Xóa picker global dư `button_primary_background_color`, `button_primary_text_color`, `button_secondary_background_color`, `button_secondary_text_color` và nhánh CSS override màu `.btn` tương ứng. Màu button lấy scheme gần nhất; không giữ hai owner tranh nhau.

Sale/Sold out badge đưa bốn picker về Colors, giữ ID: `badge_sale_background_color`→`--badge-sale-background`, `badge_sale_text_color`→`--badge-sale-color`, `badge_sold_out_background_color`→`--badge-sold-out-background`, `badge_sold_out_text_color`→`--badge-sold-out-color`. Consumer `.product-badge--sale/--sold-out`. Không gộp với Sale price; bỏ global `badge_sale_price_color` vì Sale price do từng scheme quản lý; giữ default scheme và rule collection/custom badge. Custom/manual badge có scope màu riêng trong repo, chưa được chuyển thành hệ scheme mới.

### 4.1. Sale badge / Sold out badge: đã đối chiếu lại UI mẫu

Nguồn: Shopify theme mẫu `161667842133` (Updated copy of Elvara), Theme settings → Colors, đọc trực tiếp ngày20/10/2026. Mỗi nhóm là control màu global bên ngoài color scheme definition; không phải picker riêng từng scheme. Không có điều kiện visible_if được xác định từ schema Virelle cho bốn control này.

| Header mẫu / UI Virelle | Picker mẫu / UI Virelle | ID giữ lại | Runtime token → class |
| --- | --- | --- | --- |
| Sale badge | Background color | `badge_sale_background_color` | `--badge-sale-background` → background/border `.product-badge--sale` |
| Sale badge | Text color | `badge_sale_text_color` | `--badge-sale-color` → color `.product-badge--sale` |
| Sold out badge | Background color | `badge_sold_out_background_color` | `--badge-sold-out-background` → background/border `.product-badge--sold-out` |
| Sold out badge | Text color | `badge_sold_out_text_color` | `--badge-sold-out-color` → color `.product-badge--sold-out` |

Readback: Virelle đã có đúng header, thứ tự Background color→Text color, ID và scope như trên; không cần thêm control hoặc thay binding. Giữ extension Default color scheme hiện hữu và palette Virelle theo yêu cầu không copy preset mẫu. Màu mẫu đọc được: Sale #8F3D32/#FFFFFF, Sold out #D8D3CB/#5C5852; đây là giá trị tham chiếu, không ghi vào current/presets Virelle. Không sửa badge format/visibility/collection rules hoặc Sale price. Không Save theme mẫu.

### Hover và Generated

Nếu Figma có hover thì dùng nguồn đó; thiếu thì đã được phép tạo **derived-hover** từ normal: mix khoảng8–12% về trắng với nền tối hoặc đen với nền sáng, giữ label nếu contrast≥4.5:1; nếu chưa đủ thì giảm mix/chọn label sáng tối phù hợp. Tertiary kiểm tra label trên background scheme. Alpha phải composite đúng nền, không giảm opacity cả nút. Virelle đã dùng12%, kiểm tra đủ3 scheme; không đổi normal colors/disabled/focus ring. Đây là cấu hình suy luận, không phải màu hover đo từ Figma.

`Generated/N` hoặc `from Generated/N`: dùng Heading HEX của palette làm seed trong Layouthub Generate Color, tra đúng cấpN; không coiN là opacity. Overlay/Bg Bar/Bg Component không tự map thành Shadow/Background nếu không có control đúng nghĩa.

## 5. Buttons: geometry và underline

| Setting | Token / consumer |
| --- | --- |
| `button_height_desktop/mobile` | `--button-height`, `--button-height-mobile` → `.btn`; mobile qua media query hiện hữu |
| `button_padding_inline_desktop/mobile` | `--button-padding-inline-desktop/mobile` → padding-inline; nhãn **Desktop padding / Mobile padding** |
| `button_disabled_opacity` | `--button-disabled-opacity`, phần trăm đổi tỷ lệ0–1 |
| `button_primary_border_width`, `button_secondary_border_width` | `--button-primary-border-width`, `--button-secondary-border-width` → variant generic border width |
| `button_tertiary_show_underline` | `--button-tertiary-underline-display`, `--button-tertiary-text-decoration`, `--button-tertiary-underline-space` |
| `button_tertiary_underline_offset` | Range0–8px/step1 → `--button-tertiary-underline-offset`; `.btn-tertiary` map sang `--link-underline-offset/padding` |

Underline consumer `.link-underline::after` hoặc `.link-underline[data-underline-target='text'] .btn__text::after`, tùy markup hiện hữu. Checkboxfalse ẩn đường và bỏ khoảng chừa, **không reset offset đã lưu**. Offset không mặc nhiên là khoảng cách baseline; Virelle padding3px với pseudo1px tạo khoảng trống2px theo geometry đã suy luận. Tertiary vẫn min-height:auto, padding0, không ép geometry Primary.

Chưa thêm setting icon–label gap; `.btn` còn gap0.5rem. Đây là giới hạn hiện hữu, không tuyên bố đã khớp toàn bộ geometry Figma.

## 6. Price gap và compare-at

| Nội dung | Logic cuối |
| --- | --- |
| Gap hai giá | Root `--compare-at-price-spacing:4px`; `.price` dùng `column-gap:var(--compare-at-price-spacing,4px)`, `row-gap:0`. Token dùng chung nếu context không override. Không có option UI cho gap này. |
| Nguồn4px | Người dùng xác nhận Figma dùng Tailwind spacing mặc định:1=4px,2=8px,1.5=6px. Scale custom cần resolve thực; không suy mọi chip tên1 là1px hoặc mặc định mọi scale đều Tailwind. Số6px của nguồn lịch sử đã được thay thế. |
| Compare-at color | Root và scheme giữ `--price-compare-color:#808080` trong cấu hình Virelle; `.price__compare-at` dùng token này. Không đổi Body color để bù. |
| Compare-at size/opacity | `.price__compare-at {font-size:1em;opacity:1}`; với card price14px, compare-at14px. Không làm nhạt thêm HEX bằng opacity0.72. |

Ngoại lệ được cho phép khi config Figma: chỉnh color/font-size/opacity compare-at ở token/rule hiện hữu khi thiếu option. Không mở quyền hardcode family/weight/tracking, thêm selector hoặc đổi commerce. Đọc size/alpha, ratio em theo size cha, audit card/PDP/cart. Bundle có override màu cục bộ `--price-compare-color:var(--body-color)` vẫn giữ. Màu#808080/ratio1/opacity1/gap4 là config Virelle, không áp cứng thành default mọi theme.

## 7. Radius & shape

| Setting / enum | Token và consumer |
| --- | --- |
| `button_radius_style`: square/slightly_rounded/rounded/pill | Chuyển vào Radius & shape, nhãn Buttons and inputs; `--button-radius`, `--input-radius` dùng chung resolver. Bỏ `input_radius_style`. |
| `radius_badges_subheadings` | `--badge-radius`, `--subheading-radius` → `.product-badge`, `.eyebrow-text` |
| `radius_variant_pickers` | `--variant-radius` → variant control |
| `radius_swatches` | `--swatch-radius` → swatch |
| `radius_navigation` | `--navigation-radius` → navigation controls |
| `radius_tags` | `--tag-radius` → `.main-collection__active-filter`, discount chip, `.search-suggestions__chips button` |
| `radius_media_containers` | `--media-radius`, `--card-radius`; derived xs/sm/lg =0.3×/0.6×/1.3× |
| `radius_drawers` | `--drawer-radius` → drawer/overlay docking edges |
| `radius_bottom_sheets` | `--bottom-sheet-radius` → chỉ hai góc trên của sheet/filter sheet |
| `shape_border_width` | `--shape-border-width`, consumer giữ owner riêng |

Primitive: Square0px / Slightly rounded4px / Rounded8px / Pill1000px / Extra rounded16px. Không đổi Slightly rounded thành8 chỉ vì mẫu khác. Popup `.component-overlay__panel` dùng `--card-radius-lg`; popup/popover không dùng chung drawer radius. `assets/component-overlay.css` giữ docking/radius riêng desktop/mobile, collection sheet đã bỏ hardcode14px.

Eyebrow block có Default để inherit `--subheading-radius`; Square explicit vẫn0px, không migrate mọi Square thành inherit. Local override variant/swatch giữ theo contract component, không tự xóa vì tên giống global. Icon/spinner/search tab tròn không phải tag để đổi radius hàng loạt.

## 8. Overlay Title size

Theme mẫu Overlay chỉ có Heading3–6. Người dùng đã cho phép **riêng Overlay** bỏ Display / Extra large / Custom và custom-size range; các nhóm Heading khác giữ nhãn/khả năng riêng.

| UI | Value | Token / class |
| --- | --- | --- |
| Large | `lg` | `--font-heading-lg`, `.heading-lg` |
| Medium | `md` | `--font-heading-md`, `.heading-md` |
| Small | `sm` | `--font-heading-sm`, `.heading-sm` |
| Extra small | `xs` | `--font-heading-xs`, `.heading-xs` |

`overlay_title_size` defaultmd. `snippets/overlay-heading-size.liquid` là resolver chung, nhận thêm heading_3…6→lg/md/sm/xs, fallbackmd. Cart drawer và shared `component-overlay.liquid` render `.heading-text.heading-{suffix}`; không còn shell cứngheading-sm. `--overlay-title-size` theo size được chọn; `.overlay__title/.component-overlay__title/.popover__title/.drawer__title/[data-overlay-title]` dùng size token, class Heading nối leading/tracking/case.

Xóa `overlay_custom_title_size` khỏi schema/current/presets, bỏ inline/rule custom-size dư. Migration display/xl→lg, custom→md; giữ giá trịlg/md/sm/xs đã hợp lệ. Không dùng migration này để bỏ Display/Custom ở block Heading khác.

## 9. Product cards layout và điều kiện hiện hữu

Phần thay đổi trong chat: di chuyển typography ra Typography, thêm Price controls, sửa consumer kế thừa và **bổ sung skill đọc layout card Figma**. Không coi toàn bộ layout controls dưới đây đều mới được thêm hoặc toàn bộ card đã config lại hoàn tất.

| Control / điều kiện | Runtime/class/token để đọc khi config |
| --- | --- |
| `product_card_style`:standard/card | `.product-card--standard/--card`; card border/shadow/scheme có `visible_if` style==card |
| `product_card_ratio` | natural/square/portrait/landscape → `--product-card-image-ratio`=auto/1:1/4:5/4:3 và class `product-card--ratio-*` |
| `product_card_alignment` | left/center/right → `--product-card-alignment`, `--product-card-content-alignment`, class `product-card--align-*` |
| `product_card_content_spacing_desktop/mobile` | `--product-card-content-spacing[-mobile]`, media→content; standard dùng padding-top |
| `product_card_content_gap_desktop/mobile` | `--product-card-content-gap[-mobile]` → `.product-card__content` group gap |
| `product_card_info_gap_desktop/mobile` | `--product-card-info-gap[-mobile]` → `.product-card__details`, gồm title→price khi không có dòng khác |
| `product_card_gap_device` | Chỉ đổi control đang hiện trong editor: visible_if desktop/mobile cho các range tương ứng, không phải breakpoint runtime |
| `product_card_title_line_limit` | none/1/2/3 → `--product-card-title-line-limit`, class `product-card--title-limit-*` khi có clamp |
| `product_card_swatch_position`, `_selected_style` | Thứ tự render top/bottom, class `product-card--swatches-*`, `product-card--swatches-selected-*` |
| Swatch size/type/limit/gap/ratio | Các `product_card_swatch_*` → `--product-card-swatch-*`, đọc cả Liquid consumer chứ không chỉ token boolean |
| Quick add/view, vendor/type, secondary image, badge visibility | Các setting `product_card_*` hiện hữu → điều kiện Liquid/class/CSS; thiếu nội dung trong một card không tự chứng minh phải tắt global |

Card width/columns/gutter/carousel/peek thuộc section chứa; không đổi global card spacing để bù grid sai. Không tự thay commerce/catalog/tag/collection rule từ card minh họa. Skill yêu cầu đọc desktop/mobile và resolved variable rồi kiểm tra các context collection, featured, single/compact, shop-the-look/video đang có; thiếu khả năng thì ghi gap, không thêm CSS/layout bù.

## 10. Migration schema/data/locale: danh sách cuối

| Thay đổi | Migration cần thực hiện trên dữ liệu base đích |
| --- | --- |
| `type_letter_spacing`→6 key theo cấp | Sao chép giá trị chung cũ vào từng key chưa có; xóa key cũ. Sau đó chỉ current theme được config Figma theo từng cấp. |
| Weight `inherit` bị bỏ | `button_font_weight`/`badge_font_weight`: inherit→body; key thiếu dùngbody. Default UI làBody weight.100/200→300,800/900→700 nếu dữ liệu cũ có. Current500 của Virelle giữ nguyên. |
| Button size đổi kiểu | Select cũ `button_font_size`/`button_font_size_mobile` chứa chuỗi14px không đổi trực tiếp thành range cùngID; dùng range mới `button_font_size_px`, dọn haiID cũ và ID numeric mobile trung gian `button_font_size_mobile_px`. Runtime không đọc px-string cũ. |
| Font/case variant dư | Xóa `button_secondary_font`, `button_tertiary_font`, `button_secondary_text_case`, `button_tertiary_text_case`; chung vềPrimary font/case. **Không xóa `button_font_weight` hiện tại**: control này đã được thêm lại theo yêu cầu mới. |
| Size dư | Bỏ Heading1/2/3/5 size_tablet, Heading5/6 size_mobile, `product_card_title_size_mobile`. |
| Sale price global dư | Bỏ header Product status và `badge_sale_price_color` khỏi Badges/schema/current/presets; bỏ resolver/alias `--badge-sale-price`. Root và scheme cùng dùng `--price-sale-color:var(--sale-price-color)`. Không copy global cũ lên mọi scheme. |
| Màu button global dư | Bỏ4 picker/key global đã nêu mục4, không copy màu cũ lên mọi scheme. |
| Radius/Overlay | Xóa `input_radius_style`, `overlay_custom_title_size`; migrate Overlay theo mục8. |
| Nhánh không còn dùng | Dọn `legacy_*`, `reference`, leading1.75, `legacy_card`, aliasbadge-card; `product_card_gap` và `social_show_labels` không còn consumer theo audit rebuild. Không xóa mọi control têninherit của nhóm khác. |

Migration phải áp dụng current và preset liên quan, đúng key/kiểu/domain, giữ composition và các lựa chọn hợp lệ khác. Không để key mồ côi. Thay option/range/resolver/data cùng đợt; đừng chỉ sửa settings_data.

Locale cuối: `options.font_weight.body` = **Default**; không còn `options.font_weight.inherit` hoặc info font_weight_variant. `info.heading_html_tag` = “Use headings in order (H1 → H2 → H3) for better SEO and readability. If unsure, choose Paragraph.” Typography UI label vẫn giữ bộ visual size và Eyebrow đã chốt.

## 11. Cấu hình riêng Virelle sau rebuild

Các số sau là dữ liệu/config của Virelle, **không phải defaults bắt buộc của base**.

| Nhóm | Current / calibration |
| --- | --- |
| Font roles | HeadingRoboto Condensed700; BodyRoboto400; AccentRoboto Condensed500 |
| H1→H6 desktop | 68/50/28/18/14/12px; H1→H4 mobile40/30/22/18px |
| Heading leading | 1.2/1.2/1.3/1.4/1.5/1.5; uppercase; tracking−1.2/−0.6/0/0/0/0px |
| Body | 16px, leading1.5, tracking0.1px |
| Eyebrow | Accent14px, leading1.5, tracking2px, uppercase |
| Button | Body14px, weight500, tracking−0.2px, uppercase; height56/44px; horizontal padding24/22px; underline bật, offset3 |
| Badge | Body12px, weight500, tracking2px, uppercase |
| Card title | Accent18px, leading1.5, tracking0, capitalize |
| Card price | Body14px; sale#D82727; compare#808080/1em/opacity1; gap4px |
| Border scheme1/2/3 | #CCCCCC/#B3B3B3/#CCCCCC từ Generated200/300/200, Heading seed#181818 |

Không có H6 Figma:12px suy từ H5−2, giữ thuộc tính khác củaH5. **H6 schema min12/max22/step1/default16**, current12, saved preset16. Lượt tăng current14 để né lỗi upload đã bị hủy theo yêu cầu; không khôi phục.

Lỗi Shopify “can't be less than14” đã xác minh là phiên dev chưa nhận schema mới: lưu lại schema trước, data sau; phiên dev Virelle restart trong lúc kiểm tra, preview9300 trảHTTP200 và hết trang Failed to Upload Theme Files. Đây là readback hết lỗi upload, không phải chứng minh giao diện/font đã khớp Figma hoàn toàn.

## 12. File chuyển logic về base và skill

| File | Phần cần review/chuyển |
| --- | --- |
| `config/settings_schema.json`, `config/settings_data.json` | Control/domain/order/visible_if và migration dữ liệu đích |
| `locales/en.default.schema.json` | Labels/options/info cuối; không copy riêng label mà thiếu runtime |
| `snippets/css-variables.liquid` | Font roles/weight resolver, typography alias, primitives, scheme/color/radius, card controls, Overlay |
| `snippets/typography-token.liquid`, `snippets/fluid-type-size.liquid` | Resolver chung vàclamp |
| `snippets/font-faces.liquid` | Nạp role + Button/Badge resolved variant, deduplicate |
| `blocks/heading.liquid`, `blocks/eyebrow.liquid` | Semantic/visual độc lập; Default radiusinherit |
| `snippets/overlay-heading-size.liquid`, `snippets/component-overlay.liquid`, `sections/cart-drawer.liquid` | Shared Overlay size resolver/class; bỏcustom riêng |
| `assets/critical.css`, `assets/product-information.css` | Consumer/token cascade chung; Price card scope và utility tracking |
| `assets/component-overlay.css`, `assets/section-collection.css`, `assets/cart-page.css`, `assets/component-search-suggestions.css` | Popup/drawer/sheet/tag-radius đúng owner |
| `blocks/product-card-single.liquid`, `blocks/product-card-compact.liquid`, `sections/video-with-products.liquid` | Các override typography card đã gỡ; kiểm tra context hiện hữu của base |
| `assets/virelle.css` | Chỉ đối chiếu các override title/price/badge đã gỡ, **không copy cả file riêng theme** |
| `tests/theme-settings-sync.test.cjs` | Schema/data/migration, scale, weight loading/fallback/dedup, inheritance, Overlay, hover contrast |

Các skill đã đồng bộ trong repo `agents-build-themes`: theme-style-guide, init-theme, build-preset và metadata/routing. Nguồn quy tắc chung: `skills/build/preset/theme-style-guide/references/config-theme-settings.md`; file hướng dẫn Markdown giao người dùng được sync theo nguồn này.

Quyền cuối của skill: config current/token/range/runtime hiện hữu; bộ nâng cấp6 Heading tracking +2 weight controls và loader đã được duyệt; compare-at custom đúngcolor/size/opacity; thiếuhover được tạo từnormal. Ngoài bộ đã duyệt không tự thêm setting/value/token/selector/layout, không tự push/Save/publish. Variant init giữ contract kế thừa, chỉ đổi theo phạm vi được yêu cầu.

## 13. QA, bằng chứng và giới hạn

Khi chuyển base: snapshot diff/dữ liệu đích → cập nhật schema/locale/resolver/consumer → migrate keys → kiểm tra domain/default/current/preset → render lựa chọn độc lập → kiểm tra mọi context chịu tác động → Theme Check/diff → đồng bộ schema+data và QA store khi được yêu cầu. Không copy settings_data Virelle làm migration cho base khác.

- Bài test diện rộng trong lượt nâng cấp control: **53/53** (Typography/Overlay/cart). Sau tinh chỉnh weight Body/Default và bỏ Sale price global dư: **17/17** test Theme Settings đạt. Không suy đây là số test toàn repo.
- Theme Check gần nhất: **0 lỗi,7 cảnh báo**; parse JSON và diff check đạt. Kiểm tra link/YAML skill đạt. Quick validator skill Python thiếuPyYAML ở môi trường đã thử; dùng Ruby YAML + kiểm tra link riêng, không báo quick_validate đã pass.
- Các failure ngoài scope ở testcard tags/footer đã được ghi trong audit trước; chưa chạy lại toàn suite để khẳng định tất cả đều pass.
- PreviewHTTP200 chỉ xác nhận hết lỗi upload H6. Font CDN/computed style và đối chiếu toàn bộ desktop/mobile/card/hover Figma chưa được xác minh hoàn chỉnh. Product cards layout/mobile cùng một số normal-color source còn thiếu evidence; không ghi là đã config hoàn tất chỉ vì skill đã bổ sung hướng dẫn.
- Trong lượt ghi tài liệu này chỉ sửa doc, không triển khai lại code hoặc đưa thay đổi sang base team.

Bằng chứng chi tiết: [audit rebuild schema/data](audits/virelle-theme-settings-sync-2026-10-20.md), [migration JSON](audits/virelle-theme-settings-sync-2026-10-20.json), [audit inheritance](audits/virelle-typography-inheritance-2026-10-20.md), [audit config Figma/current](audits/virelle-style-guide-config-2026-10-20.md), [JSON config và các lần điều chỉnh](audits/virelle-style-guide-config-2026-10-20.json), [customization Virelle](theme-customizations/virelle-theme.md). Audit cũ là bằng chứng lịch sử; khi khác nhau dùng trạng thái cuối của doc này và code hiện tại.
