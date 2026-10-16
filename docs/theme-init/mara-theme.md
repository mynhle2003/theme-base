# Mara initialization

Status: Style Guide applied; homepage contains15 source-ordered instances and Footer is configured. Resource-dependent drafts are disabled because Figma export/copy/sharing is restricted. No configuration deployed.

- Branch: `theme/mara-theme`; base checkpoint: `c07753a2`.
- Store: `layouthub-template-v2.myshopify.com`.
- Figma file: `bH9A5237I07NWt19Cua9gL`.
- Style Guide: `43001:11865`.
- Desktop Homepage 1: `47015:4318`, 1920 × 11626.
- Mobile: `47228:13878`, 375 × 12271.
- Source: signed-in Chrome Figma Dev Mode Inspect, layer tree and canvas. MCP tools returned seat quota errors; UI inspection works.

## Confirmed typography

Desktop H1 node `43001:11884`: Urbanist normal 400, 44px, line-height 120%, letter-spacing 2px, uppercase, #181818.
Desktop body sample: Urbanist normal 400, 16px, line-height 150%, letter-spacing 0.2px, #6C6C6C.
Typography table: `43415:6890`; remaining role and breakpoint values require verification.

## Current section routing and progress

See [mara-section-build-status.md](mara-section-build-status.md) for the final mapping, source order, disabled drafts and gaps. It supersedes the initial survey.

## Verified media receipt

Both hero source videos were downloaded through Figma Dev Mode Inspect's Download video control, probed (H.264/AAC, 1920×1080) and visually checked at start/middle/end. Shopify Files upload/readback succeeded:

- `mara-hero-veneta.mp4`: Video `46657881604395`, 12.178833 seconds, CDN https://cdn.shopify.com/videos/c/o/v/d4d3b97911ab4c8c969f28427b2f9742.mp4. Desktop node `47045:12535` / mobile `47228:13880`.
- `mara-hero-craftsmanship.mp4`: Video `46657881538859`, 17.6 seconds, CDN https://cdn.shopify.com/videos/c/o/v/23446100433d479bbd4b364e386e2d95.mp4. Desktop node `47028:23415` / mobile `47228:14024`.

Both Shopify file editor players reached readyState 4 with matching duration. No admin theme settings were saved. Both video references are bound to their respective local Hero instances; default Hero preset uses Veneta. Full checksum ledger is ignored under `.shopify/mara-media.json`.

## Additional layout evidence

- Hero 1 desktop: 880px height, 80px padding, bottom-center; mobile: 720px height, 40px padding. Hero 2 desktop: 720px, 80px padding; mobile: 720px, 64px padding. Both use black 20% overlay and scheme 3.
- Main section top spacing usually desktop 96px / mobile 56px. Countdown: desktop vertical padding 80px / mobile 56px. Marquee: desktop 64px / mobile 48px. Testimonial: 56px both. Individual section evidence must override these observations.
- Featured collection 15 has a left banner and 2×2 product grid; route to `featured-collection-banner` with `header`, `banner`, `product-list-banner` and `product-card`.
- Gallery desktop is four images around a middle feature tile; mobile moves the feature tile above a 2×2 image grid. `gallery-full-width-strip` has suitable item/feature blocks but its mobile ordering needs checking; no CSS changes permitted.
- Collection list 27 mobile is a vertical stack of three collection cards, not a horizontal slider. Blog mobile stacks three full article cards.

## Build checkpoint — Header → Hero 1

- Announcement desktop node 47045:12545: scheme 3, 33px overall, copy “Free shipping for orders over $300”; single text block replaces three inherited promotions. Existing bar lacks close action; 14px/150% plus 6px padding gives approximately 33px. Mobile top starts at 29px; no independent mobile padding control.
- Navigation desktop 47039:24637: transparent overlay, centered 130×36 logo, 16px vertical padding, 32px major gap, menu HOME/SHOP/COLLECTIONS/PAGES. Mobile 47228:13885: 12px vertical padding, menu toggle + 72.17×20 logo left and search/cart right. Existing shared position control centers logo at both breakpoints; mobile logo grouping is a gap. Actual menu resource needs audit; main-menu reference retained, demo mega-menu banners removed. Country text format and actual menu destinations remain pending. Normal-state dark logo still pending; white overlay logo is bound.
- White logo: Figma Inspect Download icons from desktop Logo; original MĀRA.svg rasterized with transparency to AVIF 520×144, no geometry/color edits. Shopify MediaImage 46658879684907; filename mara-logo-white.avif. Logo width controls nearest valid: desktop 128 instead of 130, mobile 72 instead of 72.17.
- Hero 1 uses hero → heading(h1) + button. Verified source videos bound to default Hero preset and homepage instance. Existing height large gives 900px desktop / 760px mobile versus Figma 880/720; no height schema calibration allowed. Source 80/40px vertical padding, gap20, bottom-center and black20% overlay configured. CTA target collection handle still unverified; link intentionally unset pending resource audit. Heading tracking follows reported Style Guide gap.
- Status: Header and Hero1 configured, resource/navigation gaps pending; storefront unverified. Subsequent sections are now configured; see the current section status report. No new implementation, range or option added.

## Rich text 1 — draft awaiting two source images

Desktop 47015:20496 / mobile 47228:13886: centered heading copy “Looks good. [image] feels amazing. [image] Your edit, [image] your story.” Source H1 role 44px desktop / 28px mobile. Desktop Heading width1024px and row/column gap20/16; mobile width343px and gap12/6. Source image boxes112×80 desktop /62×44 mobile, square corners.

Configured rich-text with three required static blocks blank and editorial-text dynamic block. Default preset and homepage instance share exact copy and verified first image. Width1024→1020, image widths112→110 and62→60 follow existing range steps. Base inline layout controls line wrapping and spacing, so Figma flex phrase gaps cannot be matched exactly without implementation changes. Scroll reveal disabled because source motion has not been verified.

Image1 original PNG2000×2000 received; crop derived from Figma fill transform, converted to transparent AVIF1120×800, visually checked and decoded. Uploaded via Shopify connector, MediaImage46658998239531, filename mara-editorial-bag-1.avif; bound as shopify://shop_images/mara-editorial-bag-1.avif. Images2/3 raw hashes146518b01c57a7eacdd64da8a5971190bb305179 /87b54bbd06052b1c4c2fbebfbd4e7d17300c72dc inspected, but no verified source files received after download attempts. Slots remain disabled; this section is BLOCKED on those media, not complete.

Resource audit via connector verified target store. No matching collection titles Veneta/Mara or product titles Roma/Peekaboo/Spy currently exist; no unrelated resources reused. Header main-menu audit found Home/Catalog/Contact, so Mara navigation remains pending a dedicated menu.

## Remaining sections checkpoint

See [mara-section-build-status.md](mara-section-build-status.md) for the full15-section composition, disabled resource-dependent drafts, corrected section routing and control gaps. Export/copy/sharing restriction is now explicit in Figma; user confirmed it cannot be enabled. Configuration work continued without bypassing it.
