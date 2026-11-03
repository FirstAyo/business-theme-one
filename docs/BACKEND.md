# Connecting a backend

The template ships as a static React frontend. It has no database or mail credentials,
and preview inquiries are deliberately not sent or stored. The adapter lives in
`src/lib/api.js`; the form lives in `src/components/InquiryForm.jsx`.

## Configure

Copy `.env.example` to `.env`. Set `VITE_API_BASE_URL` to `https://api.yourdomain.com`
or a same-origin prefix such as `/api`. Rebuild after changing it. The form sends
`POST {VITE_API_BASE_URL}/inquiries` with `Content-Type: application/json`:

```json
{
  "name": "Alex Morgan",
  "email": "alex@example.com",
  "company": "Example Studio",
  "service": "business-strategy",
  "message": "We would like to discuss our next growth phase.",
  "consent": true,
  "website": ""
}
```

`company` and `service` may be empty strings. Service identifiers are the slugs in
`src/data/content.js`. `website` is a honeypot and must remain empty.

Successful responses: `200`, `201`, `202`, or `204`. A JSON response body is optional.
The frontend shows success only after a successful HTTP response. It handles rate
limits (`429`), other HTTP errors, and a 15-second timeout. Failed messages remain
in the form for retry. The current public adapter uses no browser credentials or
authentication headers. For authenticated use, replace the adapter and implement
the corresponding server authentication and CSRF controls.

## Server responsibilities

Validate every value on the server: trim name/email/message; reject whitespace-only
names or messages; enforce name <=100, email <=254, company <=150, and message
10–5000 characters; validate email, consent, and allowed service values. Treat
browser validation and honeypots as convenience, not a security boundary.

Use request size limits, rate limiting, spam protection, safe database queries,
and escaped email templates. Store secrets only on the server. If origins differ,
allow only your intended website origin in CORS and handle OPTIONS preflight.
Do not blindly send user-supplied email headers. Return generic errors rather than
database details. Provide retention/deletion policies matching your actual storage.

Suggested flow: validate -> spam/rate checks -> store or queue -> send notification
-> return success. Only report success after accepting the message durably. Avoid
logging full inquiry bodies or personal information unnecessarily.

## Connecting content to a CMS

Services, projects, articles, and team profiles are centralized in `src/data/content.js`.
Preserve their existing field shapes when fetching from a CMS. For an SEO-friendly
static site, fetch content at build time, write this data module or a JSON source,
and then run the build. Regenerate the route list and sitemap from the same source.
Use a CMS webhook to rebuild after content changes. For real-time data, add an API
layer with loading/error/empty states and consider a server-rendered framework if
new routes must exist without rebuilding.

All VITE_* values are public. Never put API secrets, database URLs, or mail keys in
them. HTTPS is required for a production form endpoint. Test error and success paths
against your own staging backend before enabling the live form.
