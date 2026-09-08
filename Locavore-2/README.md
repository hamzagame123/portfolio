# Locavore 2

Separate implementation; the original `Locavore/` is untouched.

- `index.html`: SIR rendered DOM structure with Locavore-specific copy and icons. Same section, grid, rounded-container and icon counts as the source.
- `case-study-layout.css`: copied SIR build stylesheet. Retains original geometry.
- `theme.css`: shared Locavore palette and typography; case-study image treatment.
- `app.html`, `app.css`, `app.js`: sample-data discovery and local planning app.
- `case-study.js`: accessible screenshot enlargement using native dialog.

Run any static server from the portfolio root. Open `/Locavore-2/` or `/Locavore-2/app.html`. No build step or API key is required. Google Fonts and existing Unsplash photography require network access; screenshots are local.

The app has three illustrative markets. Search, day filters, details, local saved state, removal and undo are implemented. No real location, booking, message, payment or environmental outcome is represented. The original shopping prototype is linked separately.

Verified at 320, 390, 768 and 1440px: no page overflow. Tested search, filtering, save/reload persistence, removal/undo, detail Escape, screenshot enlargement and local screenshot loading. Original Locavore files have no diff. Not committed or published.

