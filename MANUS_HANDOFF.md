# Manus import and hosting handoff

Repository: `https://github.com/sumcres13/Deep-Jyoti` (private; authorize Manus to read it).

## Ready-to-paste instruction

> Import https://github.com/sumcres13/Deep-Jyoti and host the existing approved DEEP JYOTI website. Preserve its design, Japanese and English copy, navigation, mobile layouts, photos, generated artwork, gallery, map, phone number, and external links exactly. This is a complete static multi-page website, not a design prompt. Use Node.js 24, run `npm ci`, `npm run verify`, and `npm run build`. Deploy the complete `dist/` folder as a static site, with `index.html` as the homepage and `/about.html`, `/stores.html`, `/reservation.html` served as real pages. If a web process is required, run `npm run preview -- --port 3000 --host 0.0.0.0`, or use the platform-assigned PORT environment variable. Do not convert the site to React, rewrite CSS, compress/re-encode images, replace artwork, run the optional BudouX editor, or introduce a database. Confirm checksum verification passes before publishing. Check both languages, navigation, the gallery, the map, and the Tabelog/phone/delivery/LINE destinations at mobile and desktop sizes.

## Environment and commands

- Repository root is the working directory; Node.js 24 LTS; no npm dependencies or secrets.
- Install: `npm ci`.
- Integrity check: `npm run verify`.
- Build: `npm run build`.
- Static output: `dist/`.
- Optional built-site server: `npm run preview` (bind `0.0.0.0`, default port 3000, honors `PORT`).
- Source server: `npm start` or `npm run dev`.
- No Python needed for hosting. `requirements-build.txt` is an optional future copy-editing tool only.

## Preserve these behaviors

- `/`, `/index.html`, `/about.html`, `/stores.html`, `/reservation.html` load directly and after refresh.
- Relative asset paths and CSS `url()` paths retain all original filenames.
- Japanese/English toggle persists via browser localStorage; mobile navigation opens/closes.
- The preferred wide interior photo starts the slideshow; arrows and dots work.
- Mobile store and values artwork each use one portrait image with no tiling.
- Keep `tel:0453164145` and the Tabelog destination `https://tabelog.com/kanagawa/A1401/A140102/14059391/`.
- Retain the full original English CEO message and existing Japanese translation.
- Retain external Google Fonts, Google Maps, LINE, Gurunavi, and delivery service destinations. These need internet access, not package installation.

## Integrity and deployment boundaries

Every original source file is accounted for in `SOURCE_MANIFEST.json`; the original README moved losslessly to `docs/original-README.md`. Deployment creates only a generated `dist/` copy. Do not run the copy editor or change the baseline manifest merely to make hashes pass. The repository preparation verifies the package; the actual Manus hosting/domain configuration must be completed in Manus.

Official reference: [Manus GitHub repository deployment tool](https://manus.im/playbook/github-repository-deployment-tool). Platform UI and available hosting features may vary by account; use the existing static package and verified commands above.
