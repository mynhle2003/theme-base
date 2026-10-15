# Promo card cover diagnosis

Measured in local Shopify dev preview 9301: card/picture 444.75×616.8125, nested img 444.75×555 (height:auto inherited from shared image). background-media.liquid matches theme-base byte for byte. Its height rules omit picture > img, although object-fit includes that path. Selecting mobile_image adds a picture wrapper, exposing the uncovered bottom on taller cards.

Scoped correction in blocks/promo-card.liquid sets image and video leaf boxes to 100% width/height with object-fit:cover, independent of shared image snippet order. After reload: card/picture/img all 444.75×616.8125; no media gap. Existing runtime/promo lifecycle tests pass 15/15. Theme Check 0 errors / 5 existing warnings. Built-in Shopify skill validator unavailable: missing @shopify/theme-check-common; installed Shopify CLI Theme Check used.

Responsive QA: local live section at mobile width 375: card/picture/img all 328×360. Isolated fixture using actual theme styles and media-background DOM tested both picture and uploaded video paths: 620px card/media at desktop, 420px at mobile, object-fit cover in all four cases. Temporary viewport reset. No theme configuration edited online.
