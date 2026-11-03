import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { render, getMetadata, paths, site } from '../.prerender/entry-server.js';

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
if (!/^https?:\/\//.test(site.url)) throw new Error('VITE_SITE_URL must be an absolute HTTP(S) URL.');
if (site.url === 'https://example.com') console.warn('Preview build: set VITE_SITE_URL to your production origin before publishing.');
const template = await readFile('dist/index.html', 'utf8');
for (const path of [...paths, '/404']) {
  const meta = getMetadata(path);
  const head = [
    `<meta name="description" content="${escape(meta.description)}">`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}">`,
    `<link rel="canonical" href="${escape(meta.canonical)}">`,
    ...Object.entries({ title: meta.title, description: meta.description, url: meta.canonical, image: meta.image, type: meta.type, site_name: site.name }).map(([key, value]) => `<meta property="og:${key}" content="${escape(value)}">`),
    ...Object.entries({ card: 'summary_large_image', title: meta.title, description: meta.description, image: meta.image }).map(([key, value]) => `<meta name="twitter:${key}" content="${escape(value)}">`),
    `<script id="page-schema" type="application/ld+json">${JSON.stringify(meta.schema).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
  const html = template.replace(/<title>.*?<\/title>/, () => `<title>${escape(meta.title)}</title>`).replace('<!--page-head-->', () => head).replace('<!--app-html-->', () => render(path));
  const destination = path === '/404' ? 'dist/404.html' : join('dist', path, 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.filter(path => !getMetadata(path).noindex).map(path => `<url><loc>${escape(getMetadata(path).canonical)}</loc></url>`).join('')}</urlset>\n`;
await writeFile('dist/sitemap.xml', sitemap);
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
await rm('.prerender', { recursive: true, force: true });
console.log(`Pre-rendered ${paths.length} pages + 404, with sitemap and robots.txt.`);
