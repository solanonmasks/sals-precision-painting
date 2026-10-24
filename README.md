# Sal’s Precision Painting website

A one-page website built with [Astro](https://astro.build). It turns into plain HTML, CSS and images, so it can be hosted almost anywhere (Vercel is the easiest).

## Where things are

| What you want to change | File |
| --- | --- |
| Any text: services, reviews, job posts, phone, email | `src/data/content.js` |
| Photos (add a file here, then use its name in `content.js`) | `src/assets/sal/` |
| Page layout | `src/pages/index.astro` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Slider, animations, quote form | `src/scripts/site.js` |
| Favicon and social-share image | `public/` |
| Original design files (for reference only, not part of the site) | `design-handoff/` |

## Running it on your computer

You need [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install      # once, to download Astro
npm run dev      # opens a live preview at http://localhost:4321
npm run build    # makes the finished site in the dist/ folder
```

## Putting it online (Vercel)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. Click **Add New → Project** and pick this repository.
3. Vercel detects Astro on its own. Click **Deploy**.

Every time `main` changes, Vercel rebuilds the site automatically.

## Still to do

- **Quote form email:** right now the form opens the visitor's email app. To have requests sent straight to Carter's inbox, make a free form at [formspree.io](https://formspree.io) and paste its address into `FORM_ENDPOINT` in `src/data/content.js`.
- **Domain:** once there is one, put it in `astro.config.mjs` (the `site:` line) so share previews use full links.
- **Confirm with Carter:** Google review count and link, the service area (Gambier Island and Gibsons are on the Sunshine Coast), the before/after order for the vanity and built-ins, and a photo of Carter.

## Undoing a change

Every change is a separate git commit. To go back, find the commit on GitHub (the **Commits** list) and use `git revert <commit id>`, or ask Claude to revert it.
