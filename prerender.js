import puppeteer from 'puppeteer';
import { createServer } from 'node:http';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import handler from 'serve-handler';

const ROUTES = ['/', '/om', '/musikk', '/sangtimer', '/galleri', '/tv', '/kontakt'];
const DIST = join(process.cwd(), 'dist');
const PORT = 3033;

const server = createServer((req, res) =>
  handler(req, res, { public: DIST, rewrites: [{ source: '**', destination: '/index.html' }] })
);

await new Promise((resolve) => server.listen(PORT, resolve));

const browser = await puppeteer.launch({ args: ['--no-sandbox'] });

for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
  const html = await page.content();

  const dir = join(DIST, route === '/' ? '' : route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);

  console.log(`Prerendered ${route}`);
  await page.close();
}

await browser.close();
server.close();
