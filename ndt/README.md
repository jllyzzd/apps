# NDT Master Marketing Site

A pure-static, responsive marketing site for **NDT Master: UT & Weld Inspection**.
Lives at `website/` and ships with no build step — just HTML, CSS, vanilla JS, and
the real App Store screenshots already produced for v1.5.

## Layout

```
website/
├── index.html          Single-page site (all sections)
├── styles.css          All styling + responsive breakpoints
├── script.js           Minimal vanilla JS (mobile nav toggle only)
└── images/
    ├── icon.jpg        App icon
    ├── hero.jpg        Hero / 3D beam + A-scan
    ├── feature-flaw-location.jpg
    ├── feature-offline.jpg
    ├── feature-tools.jpg
    ├── feature-snell.jpg
    ├── feature-beam-spread.jpg
    ├── feature-library.jpg
    └── feature-export.jpg
```

The 8 screenshot files are sourced from
`fastlane/screenshots/raw_bases/en-US/iphone_0{1..8}.png` — the **pure on-device UI
captures**, with no marketing overlay, no App Store headlines, no gradient backdrop.
They show what an inspector sees on the iPhone screen, not what they see on the
App Store product page.

> **Why not `v3_upload_ready`?** Those screenshots have ASO headlines
> ("See the Beam, Not Just Numbers") and a blue gradient baked in. Embedding them
> here would double-describe the same feature — once in the image, once in the
> page copy. The website owns the copy, so it owns only the raw UI here.

## Local preview

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000/
```

No dependencies, no build step, no npm.

## Sections

1. Nav (sticky, hamburger on mobile)
2. Hero — value prop + dual CTA + 4 KPI stats + phone frame
3. Features — 6 cards (3D beam first, XL)
4. Workflow — 4 numbered steps
5. Tools — 9 calculators with Free/Pro badges
6. Privacy — 4 trust points + Data Not Collected stamp
7. Gallery — all 8 real screenshots
8. Pricing — Free vs Pro ($9.99 one-time)
9. Download — direct App Store link + App ID
10. FAQ — 6 questions
11. Footer

## Design system

Mirrors the iOS app's dark UI: `#0A0A0A` background, `#39FF14` brand green,
`#FF9500` accent orange, system UI font.

## Responsive breakpoints

| Range          | Layout                                  |
| -------------- | --------------------------------------- |
| `< 768px`      | Single column, hamburger nav            |
| `768–1024px`   | 2-col features, side-stacked hero       |
| `≥ 1024px`     | Full 12-col grid                        |

Respects `prefers-reduced-motion`.

## Deploying

Drop the `website/` contents onto any static host:

- GitHub Pages (replace existing `apps/ndt/` site)
- Netlify / Vercel / Cloudflare Pages (drag-and-drop)
- Nginx / Apache (serve as-is)

## Updating screenshots

After a new App Store screenshot batch is captured, refresh the images **from the
raw captures, not the marketing composites**:

```bash
SRC=/Users/zzd/ios_dev/ndt/fastlane/screenshots/raw_bases/en-US
DST=/Users/zzd/ios_dev/ndt/website/images

cp "$SRC/iphone_01.png" "$DST/hero.png"
for i in 02 03 04 05 06 07 08; do
  cp "$SRC/iphone_${i}.png" "$DST/feature-$(echo $i | sed 's/^0*//').png"
done

# Resize + convert to JPEG for web
declare -A NAMES=( [01]=hero [02]=feature-flaw-location [03]=feature-offline \
  [04]=feature-tools [05]=feature-snell [06]=feature-beam-spread \
  [07]=feature-library [08]=feature-export )
for i in 01 02 03 04 05 06 07 08; do
  magick "$SRC/iphone_${i}.png" -resize 800x -quality 88 -strip "$DST/${NAMES[$i]}.jpg"
done

# remove the now-unused PNG copies
rm -f $DST/*.png
```

> The screenshot→feature mapping (which iPhone capture powers which section)
> is `docs/appstore/screenshots_v3_upload_guide_2026-10-01.md`.

## Maintenance

- CSS variables for the palette — change once, update everywhere.
- Copy is plain English. Add translations by duplicating structure (e.g. `index.zh.html`).
- Footer links point to `../web/support.html` and `../web/privacy.html` — update if you
  move those files.