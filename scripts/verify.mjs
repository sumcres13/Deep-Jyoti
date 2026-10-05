import { readFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const pages = ['index.html', 'about.html', 'stores.html', 'reservation.html'];

export async function verify() {
  const manifest = JSON.parse(await readFile(resolve(root, 'SOURCE_MANIFEST.json'), 'utf8'));
  for (const entry of manifest.files) {
    const path = resolve(root, entry.repositoryPath);
    if (!path.startsWith(root)) throw new Error('Manifest path escapes repository.');
    const bytes = await readFile(path);
    const hash = createHash('sha256').update(bytes).digest('hex');
    if (hash !== entry.sha256 || bytes.length !== entry.bytes) {
      throw new Error(`Approved source differs: ${entry.repositoryPath}`);
    }
  }
  async function checkReference(reference, from) {
    if (!reference || reference.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(reference)) return;
    const relative = decodeURIComponent(new URL(reference, 'http://local/').pathname).replace(/^\/+/, '');
    const path = resolve(root, relative);
    if (!path.startsWith(root) || !(await stat(path)).isFile()) throw new Error(`Missing local reference in ${from}: ${reference}`);
  }
  for (const name of pages) {
    const html = await readFile(resolve(root, name), 'utf8');
    for (const match of html.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/g)) await checkReference(match[1], name);
  }
  const css = await readFile(resolve(root, 'styles.css'), 'utf8');
  for (const match of css.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)) await checkReference(match[1], 'styles.css');
  for (const name of ['script.js', 'scripts/verify.mjs', 'scripts/build.mjs', 'scripts/serve.mjs']) {
    execFileSync(process.execPath, ['--check', resolve(root, name)], { stdio: 'inherit' });
  }
  console.log(`Verified ${manifest.files.length} original files byte-for-byte, local page/CSS references, and JavaScript syntax.`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await verify();
