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

server.listen(4174, async () => {
  console.log("Static server running on http://localhost:4174/");

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 412, height: 915 });

    console.log("Navigating to app...");
    await page.goto('http://localhost:4174/', { waitUntil: 'networkidle0' });

    // Scroll to Wishing Wall section
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2'));
      const heading = headings.find(h => h.textContent.includes('Wishing Wall'));
      if (heading) {
        heading.scrollIntoView({ behavior: 'instant', block: 'center' });
      }
    });

    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.resolve(__dirname, 'wishing_wall_preview.png') });
    console.log("Captured Wishing Wall screenshot to scratch/wishing_wall_preview.png");

    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error("Verification error:", err);
    server.close();
    process.exit(1);
  }
});
