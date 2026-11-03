# Crafted Template release checklist

The ZIP contains the current template source, documentation, tests, and prebuilt
demo. Retained legacy workspace components and original oversized images are excluded
from the source package. Regenerate after changing anything included in the download.

- [x] Publisher confirmed the existing photos may be redistributed inside this template; recorded in ASSETS.md.
- [ ] Complete desktop/mobile browser, keyboard, screen reader, and visual checks in ACCESSIBILITY.md.
- [ ] Decide whether to ship photography or use publisher-owned placeholders; document the choice.
- [ ] Confirm README, MIT license, asset notices, and package version match the listing.
- [ ] Open an extracted download, run `npm ci`, `npm test`, and `npm run check`.
- [ ] Set a real preview domain for the hosted marketplace demo; rebuild for that domain.
- [ ] Test that the demo 404 response is HTTP 404 and nested route reloads work.
- [ ] Keep clear sample-content and demo-form notices on the marketplace preview.
- [ ] Capture desktop/mobile screenshots and add listing copy describing the actual features.
- [ ] Publish the ZIP and previews on Crafted Template when the checks above are complete.

End users configure their own brand/domain/backend and complete their legal pages.
Those are documented setup steps. Marketplace browser/accessibility QA remains
a publisher release check; image permission has been confirmed by the publisher.
