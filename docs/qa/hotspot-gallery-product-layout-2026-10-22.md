# Hotspot Gallery product layout — 2026-10-22

Reference: Figma file yTXlAfT0miBGgRuuYM4OMp, node 48249:16626. Inspected through computer use as requested.

Existing preset/homepage settings already enable product image and price and disable product type. Retain these options. Product title and action consume existing global typography tokens; price retains the shared price component. Card/media radii consume existing theme settings.

Theme-specific CSS in assets/virelle.css adds the missing geometry: maximum width 344px, 12px padding and gap, 80×100px portrait media, 16px hotspot spacing and the two Figma shadow layers. Scope is Hotspot Gallery product cards; content popovers retain their sizing.

Verified through Chrome computer use on localhost:9300, development theme 192661848363:
- Desktop rendered card 344×124px, media 80×100px, padding/gap 12px.
- At viewport 375×900, card clamps to 328×124px within viewport (left 16px, right 344px).
- Opened pink and brown product popovers. Brown title, $35 sale price, $45 compare-at price and action are visible without overlap.
- Screenshots: /tmp/kinetra-hotspot-product-mobile.png and /tmp/kinetra-hotspot-product-mobile-brown.png. Temporary viewport override reset after verification.
- Theme Check: zero errors, eight existing warnings. git diff --check passes.

Source Figma CTA says Add to cart. Existing View product label and native quick-view behavior are retained; this change implements the requested layout without relabeling quick view as a cart action. Product media remain the linked product resources.
