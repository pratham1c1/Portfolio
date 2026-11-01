# Prathamesh Chandekar — Portfolio

A responsive, animated backend-engineering portfolio built with React, Vite, GSAP and Motion for React. The site remains static and is designed for GitHub Pages.

## Requirements

- Node.js 20+ (Node.js 22 recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Validate a production build

```bash
npm run build
npm run preview
```

Vite writes the static production site to `dist/`. Open the preview URL printed by Vite and test the checklist below.

## Deploy to GitHub Pages

1. Commit and push this project to the repository's `main` branch.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open **Actions** and watch **Deploy Vite site to GitHub Pages** until both build and deploy jobs succeed.
4. Visit `https://pratham1c1.github.io/Portfolio/`.

The Vite `base: './'` setting keeps built asset URLs relative to the project site. The workflow builds the app and publishes `dist/`; it does not publish the source directory directly.

## Updating the resume

Replace `public/resume/Prathamesh_3YOE_backend_v4.pdf` with the latest PDF, keeping the same filename. Both resume buttons link to this static asset. Rebuild and deploy to publish the replacement.

## Validation checklist

- [ ] Header navigation scrolls to the correct section; mobile menu opens and closes.
- [ ] Theme toggle switches between light and dark and remembers the preference after reload.
- [ ] Career timeline renders both roles and its path animation progresses on scroll.
- [ ] Skill category tabs switch content.
- [ ] Project rows expand/collapse; external links open in a new tab.
- [ ] Learning Map canvas loads; hover, click-to-zoom, breadcrumbs and Back work.
- [ ] Both Download Resume links download `Prathamesh_3YOE_backend_v4.pdf`.
- [ ] Profile and project images load.
- [ ] Check at desktop width and a mobile viewport (e.g. 390 × 844).
- [ ] Browser console has no uncaught errors.
- [ ] `npm run build` completes successfully.

## Notes

- The website does not require a backend or environment secrets.
- Some external fonts and legacy icon URLs may require an internet connection. Core layout and interactions are local.
- Review resume metrics and project descriptions before publishing if you want to adjust them for your current job-search positioning.
