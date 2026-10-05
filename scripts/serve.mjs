import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = fileURLToPath(new URL('../', import.meta.url));
const root = process.argv.includes('--dist') ? resolve(repository, 'dist') : resolve(repository);
function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}
const port = Number(option('--port', process.env.PORT || '3000'));
const host = option('--host', process.env.HOST || '0.0.0.0');
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT.');
await stat(resolve(root, 'index.html')).catch(() => { throw new Error('Website files missing. Run npm run build before npm run preview.'); });
const entryFiles = new Set(['index.html', 'about.html', 'stores.html', 'reservation.html', 'styles.css', 'script.js']);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon' };
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow:'GET, HEAD' }); response.end(); return;
  }
  let relative;
  try { relative = decodeURIComponent(new URL(request.url, 'http://local/').pathname).replace(/^\/+/, '') || 'index.html'; }
  catch { response.writeHead(400); response.end('Bad request'); return; }
  const path = resolve(root, relative);
  if (!path.startsWith(root + sep) || (!entryFiles.has(relative) && !relative.startsWith('assets/'))) {
    response.writeHead(404); response.end('Not found'); return;
  }
  let metadata;
  try { metadata = await stat(path); if (!metadata.isFile()) throw new Error('Not a file'); }
  catch { response.writeHead(404); response.end('Not found'); return; }
  response.writeHead(200, { 'Content-Type':types[extname(path).toLowerCase()] || 'application/octet-stream', 'Content-Length':metadata.size, 'X-Content-Type-Options':'nosniff', 'Cache-Control':'no-cache' });
  if (request.method === 'HEAD') { response.end(); return; }
  const stream = createReadStream(path);
  stream.on('error', () => response.destroy());
  stream.pipe(response);
});
server.listen(port, host, () => console.log(`DEEP JYOTI ${process.argv.includes('--dist') ? 'built website' : 'website'} at http://localhost:${port} (bind ${host})`));
for (const signal of ['SIGINT','SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
