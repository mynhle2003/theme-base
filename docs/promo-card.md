# Product list and Collection tab Promo cards

Promo card is a dynamic child of Product list and each Collection tab. Static
Product card controls remain; Add block exposes only Promo card, with no category.
Settings control card slot, mobile top, links, responsive image/video, overlay,
content, typography, CTA, gaps, scheme and padding. Each list owns its captured
slot stream; positions clamp to the last boundary and ties retain block order.
One DOM card moves above products on mobile and returns to its original slot.
Selection reveals an off-screen card without scrolling a visible card to slot 1.

Product and Promo cards use the same shared entrance scan, stable layout row
stagger, hidden-tab activation, global animation toggle and reduced motion.
Animation belongs to the inner card, preserving Swiper's layout transform.
Template-specific JSON, products and imagery are not copied across branches.

Validation: targeted rendering/lifecycle/animation tests, JS syntax, whitespace
checks and Theme Check on this branch. Live Peeko editor covered add/remove,
position changes, grid/carousel, mobile-top, selection and owning-tab activation.
Base runtime is scoped to Product/Promo cards; existing theme motion tokens and
motion_block_animations setting remain authoritative.

## Malandra Collection tab desktop override

`show_on_top_desktop` defaults false and appears immediately above the mobile
checkbox. It pins the enabled promo(s) in a separate first column beside the
Collection tab product carousel/grid. Desktop product columns describe the
remaining products; with three columns the pinned promo occupies the fourth
equal-width card slot. Multiple enabled promos stack in that first column.
The mobile checkbox independently moves a promo above the list. Product list
ignores the desktop setting. The shared Promo card editor includes the checkbox; its desktop runtime is
scoped to Collection tab panels. The flag reads the checkbox directly, without
requiring `section.type`. The detached promo host is outside the Swiper root;
pagination stays inside the product Swiper and centers within its own column.
Without JavaScript cards remain readable in their configured original slots.

When desktop promos are detached, the product carousel (including pagination)
is sticky below the theme's sticky-header height and stops at the panel bottom.
Its grid item does not stretch to match the stacked promo column. This keeps
products reachable alongside multiple promos; mobile retains normal flow.
