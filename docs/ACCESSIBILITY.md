# Accessibility and validation

The template includes one main landmark and one h1 per page, a visible-on-focus skip
link, descriptive navigation landmarks, ordered breadcrumbs, labeled form fields,
autocomplete, native required-field validation, live status feedback, a keyboard-
operable modal navigation dialog, native FAQ disclosure controls, visible focus,
filter pressed states, article page current states, image alternatives, reduced-
motion styling, responsive reflow, and print styles. Route changes focus the main
content and reset scroll. Normal browser zoom is unrestricted.

No automatic carousel advances or distracting counters are included. No third-party
map is automatically loaded. Controls use actual links/buttons rather than clickable
divs. Form feedback distinguishes preview mode from real delivery.

## Release checks

`npm run check` runs lint, production build, and rendered-page assertions for SEO,
landmarks/headings, duplicate IDs, broken internal links/anchors, image references,
image dimensions/alt attributes, and sitemap entries. `npm test` exercises the API
adapter and content contracts. These checks catch regressions, not every accessibility
issue. A WCAG certification or Lighthouse score is not claimed.

Before each public release, manually verify desktop and 320/375/768px mobile widths,
200% and 400% zoom, Tab/Shift+Tab order, skip link, native validation, modal open/close
with Escape and focus return, filter feedback, article anchors, and submission
success/failure. Test with a screen reader (NVDA or VoiceOver), run axe/Lighthouse,
check the contrast of customized tokens, and confirm there is no horizontal overflow.
New copy, imagery, colors, and backend errors must retain accessible behavior.

The current environment could build and inspect generated HTML and serve the preview,
but browser visual/interaction QA was unavailable: browser access host unavailable;
native Chrome access first timed out and then stopped because its current URL could
not be verified by the tool. Complete the manual checklist before marketplace
publication. No claim of a completed browser or screen-reader audit is made.

Reference: https://www.w3.org/WAI/tutorials/forms/
