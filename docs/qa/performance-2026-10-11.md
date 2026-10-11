# Homepage Lighthouse optimization — 2026-10-11

The homepage Featured product accelerated-checkout static block is disabled in
`templates/index.json` using Shopify's native block visibility option. Product
templates, quick add and quick view settings are unchanged. No CSS hides checkout.

Featured product modules now use the existing viewport module loader. Animation
startup batches visibility reads before DOM writes. Overlay pagination geometry
is present in critical CSS before deferred Swiper styles arrive. Thumbnail Swiper
preserves the button role for accessibility.

## HTTPS audit

Lighthouse 12.8.2, headless Chrome, Shopify development theme 192212304171 on
layouthub-template-v2.myshopify.com. Authenticated storefront; credentials and
cookies were not saved in reports. Mobile uses default Lighthouse throttling;
desktop requires the explicit desktop config (see correction below). Scores are
individual lab runs, not field data.

| Metric | Mobile before | Mobile after | Desktop after |
| --- | ---: | ---: | ---: |
| Performance | 53 | 59 | — |
| Accessibility | 96 | 97 | — |
| Best Practices | 79 | 79 | — |
| SEO | 92 | 92 | — |
| Mobile FCP | 2.8 s | 2.2 s | — |
| Mobile LCP | 4.7 s | 4.5 s | — |
| Mobile TBT | 900 ms | 740 ms | — |
| Mobile CLS | 0.001 | 0.001 | — |

Reports are in the ignored `.shopify/lighthouse/` directory:
`https-before-mobile.report.html`, `homepage-no-buy-now-mobile.report.html`,
and `homepage-no-buy-now-desktop.report.html`. Local proxy scores were excluded
because the proxy does not compress HTML/CSS. Preview redirects were the only
final audit warning; the audited theme assets were verified as theme t/28.

## Validation

- 36 scoped tests pass: animation startup/reduced motion, announcement/header
  layout, product controls, responsive slideshow images, gallery pagination,
  and overlay product modules.
- Broader batch: 38/41 pass. The three media variant-navigation assertion failures
  also reproduce against `HEAD:assets/product-media.js`; this change does not
  modify variant navigation. VM fixture import stripping now accepts Windows CRLF.
- Browser: all six Featured product module markers loaded, no accelerated
  checkout element, Add to cart visible, Quantity incremented to 2 and Color
  changed to Silver using keyboard selection.
- Homepage JSON parses and `git diff --check` passes.
- Shopify Theme Check could not run: `theme info` required renewed CLI login.

Changes are on the development preview only; the live theme was not published.

## Further slideshow optimization

Autoplay progress now runs through CSS animations. JavaScript changes the
playback state only on pause/resume and checks the slide timer at 10 Hz instead
of requesting an animation frame continuously. Hover, focus, touch, hidden tabs,
offscreen sections and reduced motion retain their pause behavior. Bullet and
segmented progress use transforms; numbered progress animates its SVG stroke.
Deferred video fallback images are now lazy loaded as well as their cover images.

The completed intermediate HTTPS run `homepage-css-clock-mobile-retry.report.html`
scored 66 Performance, 97 Accessibility, 79 Best Practices and 92 SEO. Mobile LCP
was 3.1 s (previous run: 4.5 s), FCP 2.3 s, TBT 980 ms and CLS 0.001. TBT remains
high and varies with the Windows machine's available memory; no claim of a
healthy overall Performance score is made. That run preceded the final timer
frequency reduction. Some subsequent audit processes failed during Windows
memory pressure and are not usable measurements.

39 scoped tests pass, including real browser checks that all three pagination
styles receive their CSS animation, pause correctly and stop for reduced motion.

Final mobile audit after the timer reduction:
`homepage-low-frequency-mobile.report.html` — Performance 73, Accessibility 97,
Best Practices 79, SEO 92. FCP 2.2 s, LCP 3.1 s, TBT 630 ms, Speed Index 4.3 s,
CLS 0.001. Compared with the preceding delivered run, Performance improves
59 → 73, LCP 4.5 → 3.1 s and TBT 740 → 630 ms. The same preview redirect warning
remains; no runtime error was reported.

### Audit configuration correction

The earlier files named `*-desktop.report.*` were actually mobile emulation:
passing `preset: 'desktop'` in Lighthouse API flags does not apply the CLI preset.
Their former desktop score of 69 is withdrawn. The runner now passes Lighthouse's
`core/config/desktop-config.js` as the API config argument. Mobile reports have
verified `formFactor: mobile`, viewport 412×823, 4× CPU slowdown and default
mobile network throttling. The 39-point run named `homepage-low-frequency-desktop`
is another mobile run during memory pressure, not a valid desktop comparison.

The corrected desktop run `homepage-desktop-config-corrected.report.html` scores
97 Performance, 94 Accessibility, 78 Best Practices and 92 SEO. Its config was
checked for desktop form factor and viewport. There is no valid desktop baseline
comparison. Both final reports include the development preview bar and storefront
third-party scripts. Browser QA confirms the current slideshow progress uses
`slideshow-clock-segment` and pauses when its pagination control has focus; the
homepage header and slide layout were visually inspected.
