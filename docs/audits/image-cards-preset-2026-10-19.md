# Image cards preset — 2026-10-19

Applied the requested build-preset workflow to Figma bH9A5237I07NWt19Cua9gL, desktop 47062:14049 (1920 × 800) and mobile 47230:15536 (375 × 1000). Read high-fidelity design contexts and screenshots for both frames.

Updated the existing Image cards Add section preset and homepage hero_pair instance, retaining first position, original translation key/category, existing Shopify image references, copy, zero section/card gaps, horizontal desktop and stacked mobile flow. No new section/block implementation or media upload.

Each card uses Custom W/H 960/800 desktop and 375/500 mobile. Desktop content padding remains 80px vertical / 56px horizontal, mobile 40px / 16px. Header gap 16px desktop / 8px mobile; button gap 32px / 24px; solid black overlay 20%; scheme-3 supplies white text and tertiary buttons. Both heading blocks use display + h1 because the existing Heading implementation remaps display to the semantic tag size; this gives the requested shared H1 scale (44px desktop / 28px mobile). This composition therefore has two H1 elements.

Validation: configured setting IDs/options/ranges valid; homepage first placement verified; git diff --check passes. Theme Check has zero errors; existing Image card settings-count warning remains. Read-only preview at localhost:9300 matches this checkout. At current browser viewport 342px (327px layout width), both cards measure 327 × 436, aspect ratio 0.75, heading 28px, content padding 40px 16px and gap 24px; both existing hero images load. Screenshot: /tmp/zevra-image-cards-mobile.png.

Limits/gaps: exact 375px mobile and 1920px desktop browser viewports were not available through the current browser controls; desktop layout was checked in source/configuration only. Custom ratio scales with viewport width, whereas Figma mobile depicts fixed 500px card heights at 375px. Existing image crop/focal behavior is retained; desktop Figma positions images near the top while the theme uses its existing image renderer, so exact desktop crop remains unverified. Existing Shop now destinations are unset and render as disabled buttons; no destination was supplied. Typography tracking and exact line wraps remain governed by current global tokens. No CSS/JS/Liquid render edits, manual push, publish, store Theme Editor save, or commit performed.


## Crop correction

User reported incorrect cropping. Inspected Figma fill transforms for desktop 47062:14050 / 47062:14059 and mobile 47230:15537 / 47230:15543. Desktop uses CROP: vertical translation 0.0011143753 / 0.0019624147 and scale 0.7185596228 / 0.6627533436; equivalent CSS object-position Y approximately 0.396% / 0.582%. Mobile uses FILL with centered horizontal crop.

Saved focal points through Shopify Files: By The Way 50.0017% 0.3731%; Peekaboo 50% 0.5597%. Store layouthub-template-v2.myshopify.com; media IDs 46681150882091 / 46681161761067. Original files, filenames and references retained. Files UI lists one theme consumer for each. No store Theme Editor/template save or implementation edit.

Verified Files save completion and storefront readback: image_tag emits the saved object-position values on both loaded hero images. Desktop viewport 1280px: two 632.5 × 527.08 cards with the near-top crop matching Figma composition. Screenshot /tmp/zevra-image-cards-crop-desktop.png. Focal point rounding gives less than 0.11px vertical deviation from the Figma transforms at 1920px. Exact 1920px and mobile after correction remain unverified: current new browser tabs render at 1280px. Mobile keeps centered horizontal focal position; Y has no material effect when cover fills the original image height. This supersedes the previous desktop center-crop gap.
