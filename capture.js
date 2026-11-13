// Saves one screenshot of the Driftlab page at each scroll stage into ./assets
// Setup (once):  npm i playwright && npx playwright install chromium
// Run:           node capture.js        (index.html must be in the same folder)
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Scroll progress for each still. 0, .14, .28, .42, .56 are the five word centres,
// .80 shows the left panel, .95 shows the right panel.
const STAGES = [0, 0.14, 0.28, 0.42, 0.56, 0.80, 0.95];

(async () => {
  fs.mkdirSync('assets', { recursive: true });
  const html = fs.readFileSync(path.join(__dirname, 'index.html'));
  const server = http.createServer((q, r) => { r.writeHead(200, { 'content-type': 'text/html' }); r.end(html); });
  await new Promise(r => server.listen(0, r));
  const url = `http://localhost:${server.address().port}/`;

  const args = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'];
  // Real Chrome plays the MP4 jellyfish (H.264). Bundled Chromium can't, and falls back to the still image.
  let browser;
  try { browser = await chromium.launch({ channel: 'chrome', args }); }
  catch { console.log('Chrome not found, using bundled Chromium (jellyfish will be the still frame).'); browser = await chromium.launch({ args }); }

  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(4000); // fonts, textures, video

  for (let i = 0; i < STAGES.length; i++) {
    const max = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
    await page.evaluate(y => scrollTo(0, y), Math.round(STAGES[i] * max));
    await page.waitForTimeout(3000); // the page eases toward the target at 10% per frame
    const file = `assets/stage-${i + 1}.jpg`;
    await page.screenshot({ path: file, type: 'jpeg', quality: 88 });
    console.log('saved', file);
  }
  await browser.close();
  server.close();
})();
