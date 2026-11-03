import { cp, mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = resolve('.');
const { version } = JSON.parse(await readFile('package.json', 'utf8'));
await stat('dist/index.html');
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const name = `nexora-${version}-${stamp}`;
const release = join(root, 'release');
const bundle = join(release, name);
const source = join(bundle, 'source');
await mkdir(source, { recursive: true });
const files = [
  'package.json', 'package-lock.json', 'index.html', 'vite.config.js', 'eslint.config.js',
  '.env.example', '.gitignore', '.nvmrc', 'netlify.toml', 'README.md', 'LICENSE', 'ASSETS.md', 'CHANGELOG.md',
  'src/App.jsx', 'src/main.jsx', 'src/entry-server.jsx', 'src/index.css',
  'src/components/SiteLayout.jsx', 'src/components/Elements.jsx', 'src/components/InquiryForm.jsx',
  'src/pages/SitePages.jsx', 'src/config', 'src/data', 'src/lib', 'scripts', 'tests', 'docs',
  'public/images', 'public/favicon.svg', 'public/_headers', 'public/.htaccess',
];
for (const file of files) {
  await mkdir(resolve(source, file, '..'), { recursive: true });
  await cp(join(root, file), join(source, file), { recursive: true });
}
await cp('dist', join(bundle, 'demo'), { recursive: true });
await writeFile(join(bundle, 'START-HERE.txt'), 'NEXORA by Crafted Template\n\n1. Read source/README.md.\n2. Open a terminal in source, run npm ci, then npm run dev.\n3. Customize brand/content/domain and optionally connect your backend.\n4. Run npm test and npm run check, then deploy source/dist.\n\nThe demo folder is a prebuilt reference; serve it over HTTP.\nCode license: source/LICENSE (MIT). Photo rights: source/ASSETS.md.\n');
const archive = join(release, `${name}.zip`);
if (process.platform === 'win32') {
  execFileSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', 'Compress-Archive -LiteralPath $env:NEXORA_ARCHIVE_SOURCE -DestinationPath $env:NEXORA_ARCHIVE_DESTINATION -CompressionLevel Optimal'], {
    env: { ...process.env, NEXORA_ARCHIVE_SOURCE: bundle, NEXORA_ARCHIVE_DESTINATION: archive }, stdio: 'inherit',
  });
} else execFileSync('zip', ['-qr', archive, name], { cwd: release, stdio: 'inherit' });
const size = (await stat(archive)).size;
console.log(`Created ${archive} (${(size / 1024 / 1024).toFixed(2)} MB).`);
