import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { basename, dirname, resolve } from 'node:path';
import { root, pages, verify } from './verify.mjs';

await verify();
const output = resolve(root, 'dist');
if (dirname(output) !== resolve(root) || basename(output) !== 'dist') throw new Error('Unexpected build destination.');
await rm(output, { recursive: true, force: true });
await mkdir(output);
for (const name of [...pages, 'styles.css', 'script.js', 'assets']) await cp(resolve(root, name), resolve(output, name), { recursive: true });
const manifest = JSON.parse(await readFile(resolve(root, 'SOURCE_MANIFEST.json'), 'utf8'));
const deployFiles = manifest.files.filter(e => pages.includes(e.repositoryPath) || ['styles.css', 'script.js'].includes(e.repositoryPath) || e.repositoryPath.startsWith('assets/'));
for (const entry of deployFiles) {
  const hash = createHash('sha256').update(await readFile(resolve(output, entry.repositoryPath))).digest('hex');
  if (hash !== entry.sha256) throw new Error(`Build changed approved bytes: ${entry.repositoryPath}`);
}
console.log(`Built dist/ with ${deployFiles.length} unchanged website files. No image compression, bundling, or content transformation.`);
