// Dependency injection keeps the adapter easy to test or replace.
export function createInquiryClient(baseUrl = '', fetcher = globalThis.fetch) {
  const base = baseUrl.replace(/\/$/, '');
  if (base && !/^https?:\/\//.test(base) && !/^\/(?!\/)/.test(base)) throw new Error('API URL must be an HTTP(S) URL or same-origin path.');
  return async function submit(payload, { signal } = {}) {
  if (!base) return { demo: true };
  const response = await fetcher(`${base}/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
    signal,
  });
  if (!response.ok) {
    throw new Error(response.status === 429 ? 'Too many requests. Please wait a moment and try again.' : 'We couldn’t send your message. Please try again or contact us by email.');
  }
  // A successful endpoint may return JSON or an empty 204 response.
  return { demo: false };
  };
}
// Replace this adapter to integrate any backend. Never put secrets in VITE_*.
export const submitInquiry = createInquiryClient(import.meta.env?.VITE_API_BASE_URL || '');
