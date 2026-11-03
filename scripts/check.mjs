import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { services, projects, posts } from '../src/data/content.js';

export const pagePaths = ['/', '/about', '/services', '/projects', '/blog', '/contact', '/privacy', '/terms', ...services.map(x => `/services/${x.slug}`), ...projects.map(x => `/projects/${x.slug}`), ...posts.map(x => `/blog/${x.slug}`)];
const titles = new Set();
let checkedLinks = 0;
for (const path of [...pagePaths, '/404']) {
  const file = path === '/404' ? 'dist/404.html' : join('dist', path, 'index.html');
  const html = await readFile(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title, `${path}: missing title`);
  assert.ok(!titles.has(title), `${path}: duplicate title`); titles.add(title);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: requires one h1`);
  assert.equal((html.match(/<main[ >]/g) || []).length, 1, `${path}: requires one main landmark`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: requires one canonical`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${path}: missing description`);
  assert.match(html, /property="og:image"/, `${path}: missing sharing image`);
  assert.match(html, /name="twitter:card"/, `${path}: missing Twitter card`);
  assert.match(html, /href="#main-content"/, `${path}: missing skip link`);
  assert.ok(!html.includes('<!--app-html-->'), `${path}: not prerendered`);
  assert.ok(!/lorem ipsum|Porttitor ornare|Answer content goes here/i.test(html), `${path}: legacy placeholder copy`);
  const schema = JSON.parse(html.match(/<script id="page-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  if (path !== '/404') assert.ok(schema?.['@type'], `${path}: invalid structured data`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `${path}: duplicate HTML IDs`);
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(match[0], /\balt="[^"]*"/, `${path}: image has no alternative text`);
    assert.match(match[0], /\bwidth="\d+"/, `${path}: image has no width`);
    assert.match(match[0], /\bheight="\d+"/, `${path}: image has no height`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"<>]+)"/g)) {
    const value = match[1];
    if (value.startsWith('#')) { assert.ok(ids.includes(value.slice(1)), `${path}: broken anchor ${value}`); continue; }
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const target = value.split(/[?#]/)[0];
    if (target.startsWith('/assets/') || target.startsWith('/images/') || target.endsWith('.svg')) await stat(join('dist', target));
    else assert.ok(pagePaths.includes(target), `${path}: broken internal link ${value}`);
    checkedLinks++;
  }
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<url>/g) || []).length, pagePaths.length - 2, 'Sitemap should omit legal outlines');
assert.match(await readFile('dist/404.html', 'utf8'), /noindex, follow/);
console.log(`Verified ${pagePaths.length + 1} rendered pages: unique SEO, landmarks, headings, schema, IDs, images, anchors, and ${checkedLinks} local references.`);
