# Independent pagination — Zevra, 2026-10-19

Explicit user request: theme-only custom splitting Show pagination into Show pagination on desktop / Show pagination on mobile everywhere applicable, then configure Collection tabs according to supplied Figma.

Nine setting owners split: Collection tabs, Collection list thumbnails, Slideshow, Hotspot full width carousel; Collection list items, Blog list, Product callout gallery, Shop the look products, Product list. Collection tab consumes section-owned controls. Carousel already has independent controls. Product media and Promo grid only slide on mobile; corrected their labels to Show pagination on mobile without creating a nonfunctional desktop option.

Kept existing show_pagination_on_desktop IDs. Slideshow/Hotspot old show_pagination migrated to show_pagination_on_desktop. Added show_pagination_on_mobile default true to former shared controls. Recursively migrated explicit saved values in section/block presets, template JSON and groups/settings where applicable, preserving old false/false and true/true states. Related posts former forced mobile-pagination argument moved into preset/saved default true so merchants can now disable it. Other content/order/resources preserved.

Shared visibility attributes sit on pagination elements, including fraction controls, with CSS at768px hiding the disabled viewport using display:none (no residual spacing or focusable bullet). Markup is emitted when either viewport requires it, omitted when both false. Product callout/Hotspot runtime owner flags are independent; existing resize/editor runtime stays in charge. Desktop/mobile navigation offset values follow their pagination visibility. Omitted snippet arguments preserve legacy callers.

Collection tabs Add section preset and homepage editors_pick: desktop true, mobile false, desktop spacing48px/mobile24px retained. Layout and other previously documented visual gaps unchanged.

Schema conditional strings are within Shopify's250-character limit. Some width option conditions omit the redundant carousel-layout guard to fit this limit; maximum width is conditional on limit-width plus either viewport checkbox. Mobile/desktop spacing and position controls use their own checkbox.

Validation: targeted pagination Liquid/eligibility/preset tests plus Swiper lifecycle, deferred-tab and card-lifecycle tests:20 passed. Broader selected suite:26 passed,6 failures also reproduced from HEAD sources (legacy schema allow-list expectation and five promo tests with unresolved nested render fixture). No out-of-scope test/harness repair. Full Theme Check:0 errors,6 existing ExcessiveSettingsCount warnings. Preview initially rejected overly long visible_if expressions; corrected and dependencies retried through the already-running development watcher, restoring successful storefront response. Final viewport readback recorded below. No manual push/publish, commit or Theme Editor save.

Remaining QA: all four toggle combinations rendered by Liquid tests; complete Theme Editor checkbox/save/reload and visual regressions for each owner have not been exercised. Original full Figma parity is outside this pagination-only change.

Preview readback: localhost9300,1265px desktop, Collection tabs pagination data-pagination-visible-desktop=true / data-pagination-visible-mobile=false, computed display:block, height2px. Desktop screenshot inspected. Browser viewport remained desktop even for the visible tab, so actual mobile computed display was not verified; CSS breakpoint and Liquid states are covered by code/tests. Parent presets/template were retriggered after dependency uploads to clear transient unknown-setting failures.
