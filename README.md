# Nexora — Business Consulting Template

A considered, responsive website for consultants, agencies, and professional service
businesses. Built by Crafted Template with React 19, React Router 7, Vite 7, Tailwind
CSS 4 base styles, and Lucide icons. Styled with a documented CSS token system and
local system fonts. MIT licensed template code.

## Quick start

Install Node.js 22 LTS and npm. Extract the download, open its `source` folder in a
terminal, then run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To build or preview the static site:

```sh
npm test
npm run check
npm run preview
```

`npm run check` includes lint, build, and rendered output checks. `npm run build`
creates `dist/` with 20 complete HTML pages plus a 404 page, ready for static hosting.
The package's separate `demo/` directory is a prebuilt reference; serve it over HTTP,
not by double-clicking index.html. Rebuild from source for your production domain.

Requires modern browsers with native dialog, fetch, AbortSignal.timeout, and CSS
Grid support. For older browsers, supply and test the appropriate polyfills.

## Included pages and behavior

- Home, About, Expertise index, 4 service details
- Filterable project index, 4 distinct project case studies
- Searchable journal with topic filtering, pagination, and 4 distinct articles
- Contact form with validation, consent, pending/error/success feedback, and an API adapter
- Privacy/terms drafting outlines and a designed 404 view
- Responsive navigation, native modal mobile menu, and FAQ disclosures
- Build-time prerendering, unique SEO and sharing metadata, structured data, sitemap, and robots
- Keyboard focus, skip link, semantic landmarks, form labels, image alternatives, and reduced motion

The consulting brand, people, organizations, projects, and timelines are fictional.
Preview forms do not send or store data. There are no fabricated client testimonials
or verified outcome claims. This is a frontend, not a hosted backend or CMS.

## Make it yours

1. Copy `.env.example` to `.env` and set `VITE_SITE_URL` to your production origin.
2. Edit `src/config/site.js` for name, contact details, and public site settings.
   The wordmark uses the site name. Update the favicon and social image to match.
3. Edit `src/data/content.js` for services, projects, articles, and team members.
4. Edit CSS variables at the top of `src/index.css` for colors and typography.
5. Replace photos in `public/images/` and edit their alt text in data/page components.
6. Edit metadata in `src/lib/metadata.js`, replace the favicon and social image.
7. Complete privacy/terms pages for your business. They ship as noindex outlines.
8. Connect the inquiry endpoint, or leave the explicit preview behavior in place.
9. Set `VITE_DEMO_MODE=false` after replacing fictional content, then rebuild.

VITE_* values are public at build time. Do not place credentials in them.
The site assumes root-domain deployment. See deployment docs before changing that.

## Source map

```text
src/
  config/site.js             Public settings
  data/content.js            Editable content records
  lib/api.js                 Replaceable backend adapter
  lib/metadata.js            Route metadata and prerender paths
  components/Elements.jsx    Shared UI sections and cards
  components/InquiryForm.jsx Accessible inquiry form
  components/SiteLayout.jsx  Navigation, footer, route focus, metadata
  pages/SitePages.jsx        Page composition and detail views
  App.jsx                   Route definitions and 404
  main.jsx                  Client rendering / static HTML hydration
  entry-server.jsx          Build-time renderer
  index.css                 Tokens, components, responsive/print styles
scripts/
  prerender.mjs             Static page, sitemap, robots generation
  check.mjs                 Generated HTML verification
  package.mjs               Clean source + demo ZIP
tests/                      API and content contract checks
public/                     Local images, favicon, host headers
```

The original working checkout also retains superseded files for reference. They
are not imported by the current app and are excluded from release packages.

## Guides

- [Backend contract and CMS integration](docs/BACKEND.md)
- [Static hosting, canonical URLs, and SEO](docs/DEPLOYMENT.md)
- [Accessibility and validation checklist](docs/ACCESSIBILITY.md)
- [Publisher release checklist](docs/PUBLISHER-CHECKLIST.md)
- [Image rights and dependency notices](ASSETS.md)
- [MIT license](LICENSE)

## Packaging

Run `npm test` and `npm run check`, then `npm run package`. The packaging script
copies only current source files and the built demo into a timestamped release
folder and creates a ZIP. It excludes Git, node_modules, environment secrets,
temporary build files, retained legacy components, and old oversized source assets.
Windows uses PowerShell Compress-Archive; macOS/Linux use the `zip` command.

Photo redistribution rights have been confirmed by the publisher; see ASSETS.md.
Before marketplace publication, finish the manual browser/accessibility QA described
in the publisher checklist.
