import test from 'node:test';
import assert from 'node:assert/strict';
import { createInquiryClient } from '../src/lib/api.js';

test('unconfigured template does not send or persist inquiry data', async () => {
  const client = createInquiryClient('', () => { throw new Error('Must not call network'); });
  assert.deepEqual(await client({ email: 'demo@example.com' }), { demo: true });
});
test('configured client sends JSON to the agreed endpoint and accepts 204', async () => {
  const controller = new AbortController();
  const payload = { name: 'Test', email: 'test@example.com', message: 'A sample inquiry', consent: true };
  const client = createInquiryClient('/api/', async (url, options) => {
    assert.equal(url, '/api/inquiries');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers['Content-Type'], 'application/json');
    assert.deepEqual(JSON.parse(options.body), payload);
    assert.equal(options.signal, controller.signal);
    return new Response(null, { status: 204 });
  });
  assert.deepEqual(await client(payload, { signal: controller.signal }), { demo: false });
});
test('rate limiting and server failures produce useful errors', async () => {
  await assert.rejects(createInquiryClient('/api', async () => new Response(null, { status: 429 }))({}), /Too many requests/);
  await assert.rejects(createInquiryClient('/api', async () => new Response(null, { status: 500 }))({}), /couldn’t send/);
});
test('aborted and failed requests propagate without a false success', async () => {
  await assert.rejects(createInquiryClient('/api', async () => { throw new DOMException('Aborted', 'AbortError'); })({}), { name: 'AbortError' });
});
test('reject unsafe or ambiguous endpoint schemes', () => {
  for (const url of ['javascript:alert(1)', '//another.example', 'api']) assert.throws(() => createInquiryClient(url), /API URL/);
});
