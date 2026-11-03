# Deployment and SEO

## Build output

`npm run build` builds the browser bundle, renders every route into HTML using React,
generates page metadata and JSON-LD, and creates `sitemap.xml`, `robots.txt`, and
`404.html`. The temporary server bundle is removed after success. Deploy **dist/**
as a static website. Node is required for building, not serving. Serve directory
indexes for extensionless routes such as `/services/business-strategy`.

The template assumes installation at the domain root. Subdirectory hosting requires
coordinated changes to Vite base, BrowserRouter basename, image URLs, metadata, and
the prerender output. Do not change only one of these.

## Netlify

The included `netlify.toml` sets the build command and publish directory. Configure
the VITE_* environment values in the host settings. File-based routes resolve the
pre-rendered pages. Do not add a blanket SPA rewrite that serves the home page for
every unknown URL; the included `404.html` should be returned with status 404.

## Cloudflare Pages / GitHub Pages

Build command: `npm run build`; output directory: `dist`; Node: 22. Pages can serve
directory indexes and the provided `404.html`. Use a custom root domain for GitHub
Pages. A custom domain's base must remain `/`. Confirm host behavior for nested
paths, redirects, and 404 status codes after deployment.

## Apache / Nginx

Apache uses the included `.htaccess` when AllowOverride permits it. For Nginx,
configure the site root to dist and use:

```nginx
location / {
    try_files $uri $uri/ =404;
}
error_page 404 /404.html;
location = /404.html { internal; }
```

Copy the security/cache headers in `public/_headers` into your hosting platform's
equivalent configuration. Add an appropriate Content Security Policy for your own
backend and extensions; none is imposed blindly by this template. The generated
HTML includes inline JSON-LD and React image preloads. Test any CSP against them.

## SEO configuration

1. Set `VITE_SITE_URL` to the canonical HTTPS production origin before building.
2. Edit brand, email, telephone, and location in `src/config/site.js`.
3. Edit descriptions and page titles in `src/lib/metadata.js`, and content in
   `src/data/content.js`. Keep slugs unique and add redirects when changing published URLs.
4. Replace `public/images/social.jpg` with a branded social image. A 1200×630 image
   is a useful sharing format. The current file is a supplied-photo placeholder.
5. Replace all fictional examples with your own content. Set `VITE_DEMO_MODE=false`
   only after making the content appropriate for your business.
6. Complete privacy/terms pages and remove their noindex flags only when ready.
7. Check the deployed sitemap and robots file, register the production property in
   your search console, and submit the sitemap. Rankings and rich results are not guaranteed.

Each known page has a unique title, description, canonical, Open Graph/Twitter tags,
and WebPage/BlogPosting structured data. Client navigation updates the same metadata.
Article dates and authors come from content; update them accurately for real material.
No fictional ratings, testimonials, or performance claims are included in schema.
Query filters canonicalize to the base listing page. Privacy and terms drafting
outlines and 404 pages are noindex. Unknown paths use the React 404 view during
client navigation; the HTTP 404 status must be supplied by your static host.

Reference: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
