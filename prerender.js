import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { createServer } from 'node:http';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { platform } from 'node:process';
import handler from 'serve-handler';

const ROUTES = ['/', '/om', '/musikk', '/sangtimer', '/galleri', '/tv', '/kontakt'];
const DIST = join(process.cwd(), 'dist');
const PORT = 3033;

const server = createServer((req, res) =>
  handler(req, res, { public: DIST, rewrites: [{ source: '**', destination: '/index.html' }] })
);

await new Promise((resolve) => server.listen(PORT, resolve));

const isMac = platform === 'darwin';
const executablePath = isMac
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : await chromium.executablePath();

const browser = await puppeteer.launch({
  args: isMac ? [] : chromium.args,
  executablePath,
  headless: true,
});

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
