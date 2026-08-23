const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const distPath = path.resolve(__dirname, '../dist/client');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(distPath, 'index.html');
  }
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(4173, async () => {
  console.log("Static server running on http://localhost:4173/");

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 412, height: 915 });

    console.log("Navigating to app...");
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

    // Wait for initial curtain animation to complete (6.6s)
    await new Promise(r => setTimeout(r, 6800));
    console.log("Curtain animation completed. Tapping OPEN INVITATION...");

    // Find and click "OPEN INVITATION" button
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const openBtn = btns.find(b => b.textContent.includes('OPEN INVITATION'));
      if (openBtn) openBtn.click();
    });

    // Frame 7A: t = 1200ms post-tap (Pillars & Open Gate Mid-Drawing — partial strokes visible!)
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({ path: path.resolve(__dirname, 'frame_07_bloom_drawing.png') });
    console.log("Captured Frame 7: Gate & Pillars Mid-Drawing (Partial Strokes Visible)");

    // Frame 7B: t = 2200ms post-tap (Palm Trees & Feathery Fronds Mid-Drawing)
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.resolve(__dirname, 'frame_07b_palms_drawing.png') });
    console.log("Captured Frame 7B: Palm Trees & Fronds Mid-Drawing (Partial Strokes Visible)");

    // Frame 8: t = 3700ms post-tap (Seal centered in archway + Save-The-Date text reveal)
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({ path: path.resolve(__dirname, 'frame_08_std_text_revealed.png') });
    console.log("Captured Frame 8: Seal Centered in Archway + Save-The-Date Text Revealed");

    // Frame 9: t = 4800ms post-tap (Save-The-Date card holding)
    await new Promise(r => setTimeout(r, 1100));
    await page.screenshot({ path: path.resolve(__dirname, 'frame_09_std_holding.png') });
    console.log("Captured Frame 9: Save The Date Card Holding");

    // Frame 10: t = 6200ms post-tap (Transition into Welcome Section complete)
    await new Promise(r => setTimeout(r, 1400));
    await page.screenshot({ path: path.resolve(__dirname, 'frame_10_welcome_section.png') });
    console.log("Captured Frame 10: Smooth Transition into Welcome Section");

    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error("Verification error:", err);
    server.close();
    process.exit(1);
  }
});
