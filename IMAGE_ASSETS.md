# Image Assets Needed

All images currently show as gray/dark diagonal-stripe placeholders. Drop real files into
`public/images/...` using the exact paths below, then let me know and I'll wire them into
the `next/image` components in place of the placeholders.

Format: JPG or WebP for photos, SVG for logos. Export at the pixel size listed (that's the
2x/retina size already — don't go smaller). Keep filenames exactly as listed (lowercase,
hyphenated) so they match the code.

---

## 1. Hero banners (full-bleed, 1920×1200px)

| File path | Used on |
|---|---|
| `public/images/hero/home-hero.jpg` | Home — main hero background |
| `public/images/hero/sustainability-hero.jpg` | /sustainability page hero |
| `public/images/hero/our-process-hero.jpg` | /our-process page hero |
| `public/images/hero/contact-hero.jpg` | /contact page hero |

## 2. Split hero images (1200×900px, 4:3)

| File path | Used on |
|---|---|
| `public/images/hero/design-services-hero.jpg` | /design-services page hero (right side) |
| `public/images/hero/about-hero.jpg` | /about page hero (right side) |

## 3. Lifestyle / hotspot photo (1600×900px, 16:9)

| File path | Used on |
|---|---|
| `public/images/hero/lifestyle-hotspot.jpg` | Home "See It In the Wild" section — needs to visibly show folding carton, rigid box, pouches, and paper bags somewhere in frame (the 4 hotspot markers point at fixed positions) |

## 4. Product category images (1200×900px, 4:3) — 10 files

One per product. Used as the card thumbnail on Home ("What We Make"), the Products hub grid,
and reused for the 3 bento tiles on the Products hub hero.

| File path |
|---|
| `public/images/products/folding-carton/thumbnail.jpg` |
| `public/images/products/corrugated/thumbnail.jpg` |
| `public/images/products/rigid/thumbnail.jpg` |
| `public/images/products/display/thumbnail.jpg` |
| `public/images/products/labels-stickers/thumbnail.jpg` |
| `public/images/products/box-inserts/thumbnail.jpg` |
| `public/images/products/paper-shopping-bags/thumbnail.jpg` |
| `public/images/products/mailer-bags/thumbnail.jpg` |
| `public/images/products/pouches/thumbnail.jpg` |
| `public/images/products/eco-friendly-packaging/thumbnail.jpg` |

## 5. Product detail gallery images (1200×900px, 4:3)

Each product detail page has its own gallery carousel. Number needed per product:

| Product | File paths |
|---|---|
| Folding Carton | `public/images/products/folding-carton/gallery-1.jpg` … `gallery-4.jpg` (4 images) |
| Corrugated | `public/images/products/corrugated/gallery-1.jpg` … `gallery-4.jpg` (4 images) |
| Rigid | `public/images/products/rigid/gallery-1.jpg` … `gallery-5.jpg` (5 images) |
| Display | `public/images/products/display/gallery-1.jpg` … `gallery-4.jpg` (4 images) |
| Labels & Stickers | `public/images/products/labels-stickers/gallery-1.jpg` … `gallery-4.jpg` (4 images) |
| Box Inserts | `public/images/products/box-inserts/gallery-1.jpg` … `gallery-3.jpg` (3 images) |
| Paper Shopping Bags | `public/images/products/paper-shopping-bags/gallery-1.jpg` … `gallery-4.jpg` (4 images) |
| Mailer Bags | `public/images/products/mailer-bags/gallery-1.jpg` … `gallery-3.jpg` (3 images) |
| Pouches | `public/images/products/pouches/gallery-1.jpg` … `gallery-4.jpg` (4 images) |
| Eco-Friendly Packaging | `public/images/products/eco-friendly-packaging/gallery-1.jpg` … `gallery-4.jpg` (4 images) |

**Total: 39 gallery images**

## 6. Finishing add-ons (1200×900px, 4:3) — 6 files

Used on Home and on every product detail page (shared, same 6 files everywhere).

| File path |
|---|
| `public/images/finishing/foiling.jpg` |
| `public/images/finishing/embossing.jpg` |
| `public/images/finishing/spot-uv.jpg` |
| `public/images/finishing/holographic.jpg` |
| `public/images/finishing/debossing.jpg` |
| `public/images/finishing/laminations.jpg` |

## 7. Process steps (1200×900px, 4:3) — 4 files

Shared across Home, /our-process, and /design-services (same 4 files in all three places).

| File path |
|---|
| `public/images/process/brief-quote.jpg` |
| `public/images/process/design-dieline.jpg` |
| `public/images/process/prototype-proof.jpg` |
| `public/images/process/print-deliver.jpg` |

## 8. Case studies

Grid thumbnail (1200×900px, 4:3) + gallery inside the popup modal (1200×1200px, square) — 4 per study.

| Study | Files |
|---|---|
| Lumen Skincare | `public/images/case-studies/lumen-skincare/thumbnail.jpg`, `gallery-1.jpg` … `gallery-4.jpg` |
| Northfork Coffee | `public/images/case-studies/northfork-coffee/thumbnail.jpg`, `gallery-1.jpg` … `gallery-4.jpg` |
| Salt & Bloom | `public/images/case-studies/salt-and-bloom/thumbnail.jpg`, `gallery-1.jpg` … `gallery-4.jpg` |

**Total: 15 images (3 thumbnails + 12 gallery)**

## 9. Design services portfolio (mixed aspect ratios) — 6 files

| File path | Size |
|---|---|
| `public/images/design-portfolio/cosmetic-rigid-box.jpg` | 900×1200 (3:4 portrait) |
| `public/images/design-portfolio/coffee-pouch-system.jpg` | 1200×900 (4:3) |
| `public/images/design-portfolio/retail-display-unit.jpg` | 960×1200 (4:5 portrait) |
| `public/images/design-portfolio/folding-carton-range.jpg` | 1200×900 (4:3) |
| `public/images/design-portfolio/mailer-bag-branding.jpg` | 900×1200 (3:4 portrait) |
| `public/images/design-portfolio/gift-box-suite.jpg` | 1200×900 (4:3) |

## 10. Decorative illustrations (1200×1200px, square)

Abstract/pattern graphics, not product photos — used behind text as parallax accents.

| File path | Used on |
|---|---|
| `public/images/illustrations/sustainability.jpg` | Home sustainability teaser + /sustainability page (same file, both spots) |
| `public/images/illustrations/our-story.jpg` | /about page |

## 11. Blog post images (1600×900px, 16:9) — 3 files

Same file used for both the index-grid thumbnail and the article hero.

| File path |
|---|
| `public/images/blog/packaging-trends-to-watch.jpg` |
| `public/images/blog/sustainable-packaging-materials-explained.jpg` |
| `public/images/blog/unboxing-design-tips.jpg` |

## 12. Site chrome (not product photos)

| File path | Size | Notes |
|---|---|---|
| `public/favicon.ico` | 48×48px | Browser tab icon |
| `public/apple-touch-icon.png` | 180×180px | iOS home-screen icon |
| `public/og-image.jpg` | 1200×630px | Social share preview (link unfurls in Slack/iMessage/Twitter) |

## 13. Not something you design — flag separately

- **Client logos** (Home trust strip, 8 slots): these need to be your *actual clients'* logos
  with their permission, not generated artwork. SVG, transparent background, roughly
  200×80px each. Let me know once you have real client names/logos and I'll swap the
  placeholder "Brand 01"–"Brand 08" text blocks for real logo marks.
- **Contact page map**: once you give me a real business address, I'll switch this from a
  placeholder image to a live embedded Google Map — no image file needed from you.

---

### Grand total: ~85 images + 3 site-chrome files + 8 client logos (separate)

Once any batch is ready, drop the files into the matching `public/images/...` folders using
these exact names and tell me — I'll swap them into the code in one pass.
