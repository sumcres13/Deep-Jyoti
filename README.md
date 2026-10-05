# Deep Jyoti

The approved, four-page Japanese/English DEEP JYOTI restaurant website. All original HTML, CSS, JavaScript, images, artwork, and editing utilities are preserved byte-for-byte. The original local-site README is retained at `docs/original-README.md`.

## Run or host

Install Node.js 24 LTS (Node.js 22 or later also works), then run:

```sh
npm ci
npm run verify
npm run build
npm start
```

Visit `http://localhost:3000`. `npm start` serves the unchanged source website. `npm run preview` serves the verified `dist/` build instead. Both bind to `0.0.0.0` and respect `PORT` and `HOST`, or `--port` and `--host` command arguments.

**There are no npm/runtime package dependencies, backend, database, environment secrets, or API keys to install.** The build and web server use Node's built-in modules. `npm ci` uses the committed lockfile.

For static hosting: build command `npm run build`, output directory `dist`, entry point `index.html`. Keep all four `.html` pages and `assets/` at their existing relative paths. Serve actual page files rather than redirecting every route to the homepage.

## Manus handoff

Give Manus this repository and [MANUS_HANDOFF.md](MANUS_HANDOFF.md). It contains a ready-to-paste import instruction, commands, route expectations, and preservation checks. Hosting on Manus has not been performed by this repository preparation.

## Verify the lossless transfer

`SOURCE_MANIFEST.json` records SHA-256 hashes and file sizes for all 28 files from the approved local site. `npm run verify` validates every original file, local page/stylesheet asset references, and JavaScript syntax. `npm run build` additionally checks that every deployed file in `dist/` matches those hashes. Git stores the images normally; no Git LFS download is needed. `.gitattributes` disables line-ending normalization to preserve exact source bytes across operating systems.

The manifest is the approved baseline. Intentional future design/content edits will make its verification fail until the manifest is deliberately updated after review. Do not regenerate it simply to hide a failed transfer.

## Optional Japanese copy-editing dependency

The already-approved site needs no Python runtime. Only future edits using `apply_budoux.py` need Python and the pinned `budoux==0.9.2` dependency:

```sh
python -m venv .venv
# macOS/Linux:
.venv/bin/python -m pip install -r requirements-build.txt
# Windows:
.venv\Scripts\python -m pip install -r requirements-build.txt
```

Do not run `apply_budoux.py` during import or deployment: it rewrites the HTML. Existing Japanese phrase boundaries are already generated, and translations/shared components are in `script.js`.

## Included content

- `index.html`, `about.html`, `stores.html`, `reservation.html`, `styles.css`, and `script.js`.
- All 18 assets: original photos/logos and desktop/mobile generated artwork; full prompts in `ARTWORK.md`.
- Full CEO message, bilingual navigation, language persistence, gallery controls, map embed, company details, reservations and delivery links.
- Public company/store phone `045-316-4145`; no owner's personal phone number.

Google Fonts, the Google Maps embed, and external LINE/reservation/delivery services require internet access. They remain the same external services as the approved website; they are not missing installable package dependencies. The site has no form backend; phone/email/reservation buttons use their existing destination links.
