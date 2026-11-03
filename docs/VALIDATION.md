# Validation record

Validated during the 1.0.0 upgrade:

- ESLint: passed, without warnings.
- Production browser + server renderer builds: passed.
- All 20 content routes and the 404 page: prerendered successfully.
- Generated HTML checks: passed for unique titles, canonical/description/social metadata,
  structured data, one main/h1 per page, duplicate IDs, alt text, image dimensions,
  anchors, sitemap exclusions, and 701 internal links/asset references.
- Six API/content tests: passed, covering preview no-network behavior, POST contract,
  empty 204 responses, rate/server errors, request aborts, endpoint validation, and
  detail record/slug completeness.
- Fresh ZIP extracted; locked dependencies installed with npm ci; tests, lint,
  build, and generated-page checks passed from that isolated source copy.
- Local development server returned HTTP 200.
- Release allowlist inspected: no node_modules, Git history, private environment
  files, legacy components, or old oversized assets included.
- Image redistribution rights confirmed by the publisher.

Not completed in this environment: visual desktop/mobile layout review, browser
interaction/hydration checks, screen-reader testing, axe/Lighthouse, or live backend
delivery testing. Browser connection was unavailable; native Chrome access timed
out, and a retry was stopped because the tool could not verify the current URL.
The backend is intentionally supplied by the downloader, not by this template.

The publisher should perform the manual checks in ACCESSIBILITY.md and
PUBLISHER-CHECKLIST.md before uploading the public listing. No audit score or
standards certification is implied by the automated checks above.
