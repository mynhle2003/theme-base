# Malandra Lighthouse — 2026-10-15

Owner xác nhận theme đúng là **192330498347 — Malandra template (Minhle)** trên `layouthub-template-v2.myshopify.com`, role `unpublished`. ID 192282820907 trong link đầu tiên là Arche và không được sửa. Nguồn local: branch `theme/malandra-theme`, HEAD `908780fb02b9ed61d9df0880f82284bdf853ae9f` + patch chưa commit.

## Kết quả đo

Lighthouse 13.5.0, Chrome headless, HTTPS draft thực tế; mobile dùng cấu hình mặc định (412×823, CPU slowdown 4×, simulated throttling); desktop truyền `desktop-config.js` trực tiếp. Mỗi lần chạy dùng browser mới, xác thực storefront, kiểm tra `Shopify.theme.id`, xóa network cache và chạy storage reset mặc định. Giữ preview bar, analytics, account và checkout runtime. Không lưu password, cookie hoặc request/response headers vào báo cáo.

| Chỉ số | Mobile trước | Mobile cuối | Desktop trước | Desktop cuối |
| --- | ---: | ---: | ---: | ---: |
| Performance | 66 | 86 | 84 | 97 |
| Accessibility | 93 | 96 | 93 | 96 |
| Best Practices | Không có điểm hợp lệ | Không có điểm hợp lệ | Không có điểm hợp lệ | Không có điểm hợp lệ |
| SEO | 92 | 100 | 92 | 100 |
| FCP | 2.32 s | 2.24 s | 1.14 s | 0.68 s |
| LCP | 4.03 s | 2.95 s | 1.44 s | 0.74 s |
| TBT | 351 ms | 52 ms | 5.5 ms | 0 ms |
| CLS | 0.043410 | 0.000040 | 0.004422 | 0.004302 |
| Speed Index | 14.61 s | 7.00 s | 5.46 s | 1.69 s |
| Tổng transfer | 2,708,448 B | 2,720,978 B | 2,223,524 B | 2,787,624 B |

Đây là các lần đo lab đơn lẻ, không phải median hay CrUX/production guarantee. Tổng transfer không giảm; lazy media/third-party timing khác nhau giữa các lần đo. SEO thay đổi ở audit robots.txt dù patch không sửa robots.txt/metadata; không quy mức tăng SEO cho code tối ưu.

Lần trung gian `after-mobile` (tab contrast 85%, trước khi hoàn thiện 95%) đạt Performance 68, FCP 2.25 s, LCP mô phỏng 10.19 s, TBT 90.5 ms, CLS 0, Speed Index 5.41 s. Trace thực tế của lần này ghi observed LCP 0.96 s; kết quả mô phỏng LCP lệch mạnh nên đã đo lại, không xóa hay che lần đo này. Mức dao động này giới hạn độ chắc chắn của so sánh score.

Mọi lần đo có cảnh báo preview URL redirect về `/`; runner xác minh đúng theme ID trước audit, asset dùng `t/37`. Best Practices là **null**, không phải 0: gatherer `ImageElements` lỗi `CSS.getMatchedStylesForNode: Could not find node with given id`, làm ba audit image-aspect-ratio/image-size-responsive/unsized-images không hoàn tất. Không báo Best Practices pass.

Bản tóm tắt có cấu hình, mọi lần đo, lỗi, CSS hashes và readback hashes: [audit JSON](../audits/malandra-lighthouse-2026-10-15.json). HTML/JSON gốc đã loại headers và ảnh QA nằm trong thư mục local được Git ignore `.shopify/lighthouse/malandra-2026-10-15/`: `before-mobile`, `before-desktop`, `after-mobile`, `final-mobile`, `final-desktop`.

## Patch

1. `sections/hero.liquid` + `snippets/hero-image.liquid`: hero ảnh ở `section.index == 1` xuất hai preload có media riêng, dùng đúng srcset/sizes như picture và `loading=eager`/`fetchpriority=high`. Hero ở dưới dùng lazy/auto. Cap candidate theo ảnh nguồn (desktop tối đa 2400px, mobile 1200px); không yêu cầu upscale, không thay artwork, crop, focal point hay video path. Dùng cơ chế `theme-lcp-preloads` đã có của layout. Với media hiện tại, desktop cap 1920px, mobile cap 750px; viewport 375px/DPR1 chọn nguồn 375px.
2. Tách nguyên CSS của tám owner dưới đây ra assets đồng bộ ngay đầu owner. Không đổi bất kỳ rule, selector, schema, preset hay JavaScript nào trong các owner. Component không render thì không tải stylesheet riêng; component được thêm trong Theme Editor vẫn xuất dependency cùng markup.
3. `snippets/tab-layout-styles.liquid`: inactive tab dùng 95% body/heading color trộn với scheme background, thay mức 48% transparent/44% background gây thiếu tương phản. Giữ kiểu chữ, kích thước, gap, underline, focus, active/hover và hành vi đổi tab. Lighthouse cuối xác nhận `color-contrast` pass cả mobile/desktop. Đây là thay đổi màu hiển thị có chủ đích để sửa accessibility.

| Owner | Asset |
| --- | --- |
| sections/collections-with-background.liquid | assets/section-collections-with-background.css |
| sections/collections-with-tabs.liquid | assets/section-collections-with-tabs.css |
| sections/collection-banner.liquid | assets/section-collection-banner.css |
| sections/featured-collection-horizontal.liquid | assets/section-featured-collection-horizontal.css |
| sections/slideshow.liquid | assets/section-slideshow.css |
| blocks/slideshow-slide.liquid | assets/block-slideshow-slide.css |
| blocks/press-quotes.liquid | assets/block-press-quotes.css |
| blocks/timeline-slide.liquid | assets/block-timeline-slide.css |

Tổng source CSS tách khỏi bundle: **63,803 B** (byte-identical với HEAD). Bundle homepage thực tế đã minify giảm **416,943 → 362,805 B** decoded (54,138 B, 13.0%); transfer mobile **46,002 → 40,823 B**. Không gọi raw bytes là compressed savings.

## Validation và giới hạn

- Liquid validator: 10 file Hero/CSS owner pass, hai advisory ở preload gợi ý dùng `image_tag preload`; giữ explicit media-qualified preload để khớp art direction. Snippet tab được validate riêng sau chỉnh cuối. Theme Check: 0 errors, 5 ExcessiveSettingsCount warnings có sẵn; không tắt check.
- 13/13 scoped image tests pass: preload/picture parity, first/later hero, missing mobile, source-size caps, focal point/video path và slideshow mobile presets. Test slideshow đọc CSS tại asset owner mới.
- Batch bổ sung có 5 lỗi fixture cũ: một kỳ vọng marquee preset `show_top_divider`, bốn Press tests dựa trên runtime API cũ. Các runtime/preset liên quan không đổi so với HEAD (`blocks/marquee.liquid`, `sections/text-marquee-custom.liquid`, `assets/block-animations.js`, `assets/carousel-block.js`); không trình bày full suite pass.
- CSS của cả tám owner đối chiếu byte-for-byte với HEAD; schema/runtime giữ nguyên. `git diff --check` pass.
- Storefront thật: 375px mobile và 1280px desktop không tràn ngang; hero load thành công với high priority, giữ frame 620px mobile; ảnh desktop/mobile đúng nguồn. NEW IN tab chọn thành công, panel tải xong hiển thị bốn product cards. Tám stylesheet optional không xuất hiện trên homepage. Screenshot `mobile-after.png`, `desktop-after.png` nằm cùng thư mục báo cáo.
- Chưa QA đầy đủ các owner optional trên mọi template hoặc Theme Editor add/remove/duplicate/reorder/select/save/reload; không gọi toàn theme release-ready. Header/footer animation settings, delay và interactions giữ nguyên.
- Accessibility còn heading h4 nhảy cấp tại Quality That Lasts và iframe preview bar thiếu title. Không sửa iframe Shopify để làm đẹp điểm; không upload template homepage đang có chỉnh sửa riêng của owner.

## Upload ledger

Store/target duy nhất: `layouthub-template-v2.myshopify.com`, draft `192330498347`.

| Batch ngày 15/10/2026 (giờ Việt Nam) | Scope | Kết quả |
| --- | --- | --- |
| 12:06:46 | Tám CSS assets + snippets/hero-image.liquid | Uploaded; dependency trước caller |
| 12:08:00 | Tám CSS owners + sections/hero.liquid + snippets/tab-layout-styles.liquid | Uploaded; chỉ 10 file, `--only`, `--nodelete` |
| 12:10:14 | snippets/tab-layout-styles.liquid | Uploaded follow-up contrast 95% |

Pull snapshot của 10 file cũ trước upload khớp HEAD; backup local `/tmp/malandra-lighthouse-remote-before`. Readback sau upload của toàn bộ **19/19 file** khớp local, hashes trong audit JSON. Rollback bằng snapshot của đúng 10 caller cũ; các dependency assets mới không được tham chiếu sau rollback, không cần xóa. Không đổi theme live, không publish; không Git commit/push.

Doc chuyển fix dùng chung: [Malandra → Elara](../variant-updates/malandra-to-elara.md), ba mã Lighthouse mới đều **pending** ở Elara; chưa sửa hoặc upload Elara.

## Git release follow-up — 2026-10-15

Owner yêu cầu commit/push toàn bộ thay đổi hiện có, trừ test. Full Theme Check release gate pass (0 errors/5 existing warnings), 13 scoped image tests pass local; năm lỗi Marquee/Press nêu trên tái hiện nguyên trạng trong snapshot HEAD riêng. Các test được giữ local và không nằm trong commit. Shopify đã đồng bộ patch Lighthouse lên remote bằng `ace7cd08`, `eb8da206`, `c3e4661a`; release tiếp theo giữ các commit này và gộp tài liệu/preset/custom-section/rich-text còn lại, bảo toàn normalization JSON/locale từ remote. Đây là Git release, không publish Shopify theme hoặc áp dụng Elara.

## Best Practices follow-up — 2026-10-15

Phần này thay thế trạng thái Best Practices **null** ở các lần đo lịch sử phía trên. Owner yêu cầu xử lý cảnh báo còn lại; nguồn `daf292dc` + patch local `assets/block-animations.js`. Không sửa Lighthouse, bỏ audit, chặn third-party requests hoặc phân nhánh theo user-agent để đạt điểm.

Diagnostic xác định node lỗi là `<img>` data-URI SVG của icon trong **clone marquee**, không phải ảnh hero. `block-animations.js` ghi lại class/data-animation-initialized trên các node excluded dù giá trị không đổi. MutationObserver của marquee nhận các ghi này và rebuild clones; childList từ rebuild lại kích hoạt animation scan. Vòng lặp làm clone bị tháo khỏi DOM khi ImageElements đang lấy matched CSS rules, gây lỗi stale node.

Patch chỉ làm hai thao tác thành idempotent: chỉ bỏ `reveal-pending` khi class tồn tại; chỉ đặt `data-animation-initialized=true` cho node excluded khi chưa true. Giữ Type/Delay, exclusions, animation/focus behavior, markup, asset safety và chính sách header/footer. Không sửa SVG sanitizer hoặc thay icon bằng inline SVG để tránh audit ảnh.

Regression Chrome dùng **hai runtime thật** trước/sau và cùng marquee JS/CSS: sau startup, 600ms có **108 → 0** clone removals; vẫn còn ba clones và một animation. Merchant text update, resize 375→1280px, section unload/reload và reduced motion pass. Theme Check 0 errors/5 existing warnings; JS syntax/diff check pass. Script regression nằm local `/tmp/malandra-perf-tools/marquee-regression.mjs`, không thêm test vào commit.

| Lần đo mới, Lighthouse 13.5.0 / Chrome 155 | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | 87 | 98 |
| Accessibility | 96 | 96 |
| Best Practices | **77** | **77** |
| SEO | 100 | 100 |
| LCP | 3.00 s | 0.73 s |
| TBT | 181 ms | 5.5 ms |
| Audit/gatherer errors | **0** | **0** |

`image-aspect-ratio`, `image-size-responsive` và `unsized-images` đều pass cả hai viewport. Đây vẫn là single lab runs với preview redirect warning, không phải median/field data; không quy dao động TBT giữa các lần chạy cho patch này.

**Hai warning còn lại:** `third-party-cookies` (`_shop_app_essential` từ `shop.app/accounts/pre_auth`) và `inspector-issues` (cookie issues từ Shop pre-auth, Shop Pay sprite và Shopify Web Pixels `/cdn/wpm/`). Đây là runtime do Shopify cung cấp, không phải lỗi kích thước ảnh hay JavaScript theme. Giữ native account/sign-in/Shop recognition, checkout và pixel behavior. Không xóa `content_for_header`, giả consent hoặc tắt dịch vụ chỉ để đạt 100. [Shopify account component documentation](https://shopify.dev/docs/api/storefront-web-components/components/shopify-account) mô tả các chức năng cần bảo toàn; loại bỏ/đổi các integration này là thay đổi sản phẩm và cần scope riêng.

Upload riêng `assets/block-animations.js` vào draft `192330498347` lúc **13:15:26 giờ Việt Nam**; backup remote trước sửa khớp HEAD, readback sau sửa khớp local. Chưa Git commit/push hoặc publish follow-up này; không áp dụng Elara. [Evidence JSON](../audits/malandra-best-practices-2026-10-15.json) ghi hash/readback/regression/scores; HTML/JSON `best-practices-fixed-mobile` và `best-practices-fixed-desktop` trong `.shopify/lighthouse/malandra-2026-10-15/` là báo cáo mới có điểm hợp lệ.

Git release follow-up: owner yêu cầu commit/push, tiếp tục loại test. Shopify đã đồng bộ đúng patch JavaScript bằng `17a3623c`; commit tài liệu/evidence tiếp theo giữ nguyên commit nguồn này. Full Theme Check trước release pass (0 errors/5 existing warnings), JS syntax và diff check pass. Trạng thái chưa commit ở đoạn trên là thời điểm đo; Elara vẫn pending, không publish Shopify theme.

## Mobile Performance follow-up — 2026-10-15

Owner báo Performance mobile giảm và yêu cầu bổ sung tối ưu còn thiếu vào doc variant. Đo lại cùng draft 192330498347, Lighthouse 13.5.0/default mobile, giữ account/checkout/pixels/preview bar. Ba baseline trên cùng compiled CSS và animation asset đạt 82/89/90; **lần 89 có load timeout**, không dùng làm benchmark hoàn tất. Hai lần còn lại có TBT 355.5/95.5ms; animation có long task 160/115ms, song tác vụ Web Pixels/Trekkie cũng chiếm CPU. Vì vậy score 87 lịch sử chỉ là một lần đo, không phải mức ổn định hay bảo đảm.

Patch mới `assets/block-animations.js`: tạo controller của section xa dưới fold khi cách viewport 300px. First viewport, root có focus, zero-height overlay wrappers, Theme Editor và missing IntersectionObserver vẫn init ngay. Section pending được unobserve khi unload; editor/reload init trực tiếp. Không đổi effect, delay, content/layout/colors, không bỏ fix marquee hoặc chặn Shopify scripts. Nguồn checkpoint `12cb57fe` + local patch.

| Ba lần hoàn tất sau upload | Performance | LCP | TBT | Best Practices |
| --- | ---: | ---: | ---: | ---: |
| viewport-after-1 | 89 | 2.93 s | 64.5 ms | 77 |
| viewport-after-2 | 87 | 3.09 s | 28 ms | 77 |
| viewport-after-3 | 89 | 3.23 s | 34 ms | 77 |
| Median | **89** | **3.09 s** | **34 ms** | **77** |

Ba report không load timeout hoặc gatherer error; vẫn có preview redirect warning. Không animation long task >50ms trong cả ba trace; animation CPU total 204.5/205.8/136.4ms, so với 481.5/337.6ms ở hai baseline hoàn tất. Không suy ra Shopify runtime hết dao động hoặc mọi máy đạt 89; chưa đo lại desktop cho patch này.

Accessibility mới **93** (SEO 100): audit tìm thấy metadata blog màu #999 trên trắng thiếu contrast, ngoài lỗi heading-order/preview-frame đã biết. Runtime patch không sửa màu/preset; các card dưới fold chưa đi qua entrance preparation làm kết quả kiểm tra phần này khác các lần trước. Ghi rõ gap này, không dùng opacity hoặc bỏ audit để giữ score 96 cũ.

Chrome regression pass: first/far viewport, editor immediate, missing observer, reduced motion, pending unload/reload. Marquee fixture vẫn không churn sau settle; merchant text update, resize, editor reload/reduced motion pass. JS syntax/diff check và full Theme Check pass (0 errors/5 existing warnings). Regression scripts ở `/tmp/malandra-perf-tools/animation-viewport-regression.mjs` và `marquee-regression.mjs`; không thêm test vào commit.

Upload duy nhất `assets/block-animations.js` lên draft lúc **13:34:57 giờ Việt Nam**. Backup trước khớp Git source; readback sau khớp local (hash trong [evidence](../audits/malandra-mobile-performance-2026-10-15.json)). Các thay đổi layout/section khác làm riêng được giữ nguyên và không nằm trong upload này. HTML/JSON cả sáu report lưu tại `.shopify/lighthouse/malandra-2026-10-15/` với prefix `mobile-regression-1/2/3` và `viewport-after-1/2/3`.

Đã bổ sung [MALANDRA-ELARA-LIGHTHOUSE-ANIMATION-005](../variant-updates/malandra-to-elara.md#malandra-elara-lighthouse-animation-005--mobile-performance-2026-10-15), đồng thời đưa 004/005 vào bảng tra cứu và cập nhật receipt Git 004. Elara pending, chưa áp dụng/publish; patch 005 và doc bổ sung chưa Git commit/push.

Git release 005: owner yêu cầu commit/push; runtime đã được Shopify đồng bộ tại `52d8b37c`. Commit tài liệu/evidence tiếp theo giữ nguyên runtime này, không bao gồm file test. Các ghi chú chưa commit phía trên là trạng thái tại thời điểm đo; Elara vẫn pending.
