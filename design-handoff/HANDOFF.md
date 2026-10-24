# Handoff: Sal’s Precision Painting website

## Overview
This is a new one-page site for Sal’s Precision Painting. The owner is **Carter**; "Sal’s" is the brand name only, so don't call him Sal anywhere. He does interior and exterior painting, kitchen cabinet refinishing, staining, and fences and decks. He serves Kelowna and surrounding areas. The business has no website yet; all the content comes from his Facebook page.

The goal is phone calls and quote requests. The look follows his logo: navy #0E1238, a blue-to-violet brushstroke gradient (#1E9BFF → #7B4DFF), and a cool light-grey background. Type is Saira for headings and Figtree for body text.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there is no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `Sals Precision Painting.dc.html`: the source prototype. All copy and data arrays (`PAIRS`, `SERVICES`, `POINTS`, `LOG`, `REVIEWS`, `JOBS`) are in the script at the bottom.
- `preview.html`: a self-contained clickable preview.
- `sal/`: the logos (`logo-navy.png` for light backgrounds, `logo-white.png` for dark) and all job photos. All are Carter's own.
- `support.js`: the prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final. Exact values are inline in the prototype. **Do not add services, prices, review counts, towns or claims** that aren't already in the prototype.

## Page structure (single route `/`, anchor sections)
1. **Header**: sticky with a translucent blur. Navy logo, nav links (Before & after, Services, On the job, Reviews, Contact) shown at 980px and wider, and a navy phone button.
2. **Hero**:
   - Three tags: WCB, Insured, References available.
   - H1 "Done properly. / Start to finish." The second line uses gradient text.
   - The line "Clean · Efficient · Reliable · Professional", then a sub paragraph.
   - Buttons: Get a free quote (blue) and See the work (outlined).
   - Gambier Island photo with a navy caption card, plus a 10px gradient bar on its right edge.
3. **Booking strip** (navy): Interior & cabinets Oct–Mar · Exterior Apr–Sep · 10–15% off interiors & cabinet refinishing.
4. **Before/after slider** (signature interaction):
   - 5 pairs, switched with toggle buttons.
   - Implementation: the before image is clipped with `clip-path: inset(0 X 0 0)`, with a white divider line and a gradient handle. Use pointer events, and allow vertical scrolling on touch (`touch-action: pan-y`).
   - Portrait pairs (3/4) display in a centred frame capped at max-width calc(82vh × .75). On mobile, every pair uses 3/4.
   - When the slider first scrolls into view, it auto-sweeps once (50→22→78→50 over about 2.2s) to hint that it can be dragged.
5. **What we do** (navy): 6 service cards in 3 columns at 980px+, 2 columns at 620px+, and 1 column below. Each photo scales to 1.06 on hover over 1.2s.
6. **The prep is the job**: 4 numbered points and two staggered photos.
7. **On the job**: 6 entries adapted from his Facebook posts (date / title / text / photo). The left column is sticky on desktop. Includes a link to his Facebook page.
8. **Reviews**:
   - A "5.0 · Rated on Google" badge with gradient stars.
   - 5 reviews (from Facebook recommendations) laid out in 3, 2 or 1 masonry columns depending on width, using CSS columns.
9. **Contact** (navy):
   - Large phone and email links, plus the service area.
   - Form fields: name, phone, email, job-type toggle chips, details.
   - Success state: "Thanks. We’ll be in touch about your quote."
10. **Footer**: white logo, © year, "WCB · Insured · Free quotes", and "Powered by Backpack Digital Media" (linking to https://backpackdigitalmedia.com).
11. **Mobile sticky bar** (below 980px): Call and Free quote, fixed to the bottom of the screen. Add 60px of bottom padding to the footer so the bar doesn't cover it.

## Motion
- **Easing:** `cubic-bezier(.16,.84,.3,1)` throughout.
- **Hero image:** on load, scales 1.14 → 1 and saturation .6 → 1 over 2.6s.
- **Hero bar:** scaleY 0 → 1 from the top, with a 0.5s delay.
- **Scroll reveal** (every `[data-reveal]` element): fade up 36px over 1s, staggered 90ms between siblings. Trigger with an IntersectionObserver (rootMargin -8% bottom). Elements already in view on load animate straight away.
- **Reduced motion:** respect `prefers-reduced-motion` and skip all motion.

## Design tokens
- **Colours**
  - Navy #0E1238 (primary dark)
  - Footer #080B26
  - Page background #E9E9EC, alternate section #DCDCE2
  - Card border on navy #262B57
  - Blue #3B5BFF (buttons and links), light blue on navy #8FB4FF
  - Gradient #1E9BFF → #7B4DFF, used for the brush, the bar, the slider handle and gradient text
  - Body text #2E3358, text on navy #C9CEEA / #D6DBF5
- **Fonts:** Saira 600–800 for headings, with tight tracking (−.02em) and line-height .95. Figtree for body text at 18px with line-height 1.6.
- **Shape:** square corners everywhere. Rules between items are 2px navy.
- **Layout:** max-width 1440px, side padding clamp(18px, 4vw, 48px), section padding clamp(72px, 9vw, 128px).

## Contact
(778) 251-8840 (tel:17782518840) · carter.precisionpainting@gmail.com · Facebook: https://www.facebook.com/p/Sals-Precision-Painting-100088216351099/

## To finish at build time
- Connect the form to email (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon (crop the brush from the logo), and LocalBusiness/HousePainter JSON-LD.
- Convert the photos to WebP or AVIF, use responsive sizes, and lazy-load everything below the hero.

## Confirm with the client
- His Google review count and a Google reviews link (the rating badge currently says 5.0 only).
- Service area. The site says Kelowna & surrounding areas, but the Gambier Island and Gibsons jobs are on the Sunshine Coast. Label them as past work, or list both areas.
- Before/after order for the vanity and the built-ins. I assumed white was the "before".
- A photo of Carter for the site.
