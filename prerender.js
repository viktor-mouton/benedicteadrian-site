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
  // Wait for the LoadingScreen animation to complete and main content to be visible
  await page.waitForSelector('h1', { visible: true, timeout: 15000 });
  // Deduplicate <head> tags that react-helmet-async may have written multiple times.
  // Keep the last occurrence of each tag type so page-specific tags win over any stale ones.
  const html = await page.evaluate(() => {
    function dedupeLast(selector, getKey) {
      const map = new Map();
      Array.from(document.querySelectorAll(selector)).forEach(el => {
        const key = getKey(el);
        if (map.has(key)) map.get(key).remove();
        map.set(key, el);
      });
    }
    dedupeLast('title', () => 'title');
    dedupeLast('meta[name]', el => el.getAttribute('name'));
    dedupeLast('meta[property]', el => el.getAttribute('property'));
    dedupeLast('link[rel="canonical"]', () => 'canonical');
    dedupeLast('script[type="application/ld+json"]', el => {
      try { return JSON.parse(el.textContent)['@type']; } catch { return String(Math.random()); }
    });
    return '<!DOCTYPE html>' + document.documentElement.outerHTML;
  });

  const dir = join(DIST, route === '/' ? '' : route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);

  console.log(`Prerendered ${route}`);
  await page.close();
}

await browser.close();
server.close();
