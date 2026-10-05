# DEEP JYOTI HP

Four-page Japanese / English static website adapted from the supplied template.
The original page structure, navigation, language switch, and gallery are retained.
The source template is untouched. No installation or build is required.

## Open locally

Open `index.html` directly in your browser, or run this command from this folder:

```sh
python -m http.server 8088
```

Then visit http://localhost:8088/.

## Pages

- `index.html`: Home, restaurant introduction, LINE, and reservation link.
- `about.html`: Tara Gaire's complete supplied message (English) and Japanese translation, values, and company information.
- `stores.html`: Address, daily hours, phone, three interior photos, and map.
- `reservation.html`: Tabelog link, phone reservations, Rakuten Gurunavi restaurant listing, and three delivery services.

## Content notes

- Company name preserves the supplied spelling: Taragodo company l.t.d.
- Store phone: 045-316-4145. Company contact: 045-316-4145. Personal phone numbers are not published.
- Hours confirmed by the supplied screenshot: every day 11:00–15:00 / 17:00–23:00; no regular holidays.
- Supplied LINE, Uber Eats, Demae-can, Rocket Now, and Rakuten Gurunavi URLs are used. Gurunavi is labeled as a restaurant listing, not a guaranteed online booking service.
- The store logo is used for restaurant branding; no separate company logo was supplied.
- Seven supplied images and five generated culinary backgrounds are included. The supplied images are copied intact to `assets/`. Service logos are retained from the template. Generation prompts are saved in `ARTWORK.md`.
- Submission timestamps, monthly sales figures, blank additional-store fields, and spreadsheet placeholders are not public-facing website content.
- Phone reservations and email links work through the visitor's device. This static website has no reservation backend.
- Google Fonts and the Google Maps embed need internet access. Navigation, gallery, and local images work offline.

## Hosting

Upload the four HTML pages, `styles.css`, `script.js`, and `assets/` together.
Use `index.html` as the entry page. No site has been published by this task.

## Japanese text editing

Optional: install `requirements-build.txt` and run `python apply_budoux.py` after editing Japanese HTML copy to insert phrase boundaries.
Translations and shared header/footer text are in `script.js`.

## Review changes

Company typography replaces store logos in all headers and footers. The home photo uses a discreet store-logo signature. The hero uses a lighter black overlay. The CEO card adds a bilingual headline and matches the portrait height on desktop. The values section uses culinary artwork. The company phone replaces the personal number. The preferred wide interior is first in the gallery. The Tabelog button links to the supplied URL.
