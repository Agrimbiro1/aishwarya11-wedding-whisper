const puppeteer = require('puppeteer');
const http = require('http');
const path = require('path');
const fs = require('fs');

const distDir = path.resolve(__dirname, '../dist/client');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

async function main() {
  const server = http.createServer((req, res) => {
    let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  await new Promise((r) => server.listen(4220, r));
  console.log('Static server running on http://localhost:4220/');

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await page.goto('http://localhost:4220/', { waitUntil: 'networkidle2' });

    // Scroll to Event section ("Order of the Day")
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2, h3'));
      const eventHead = headings.find(h => h.textContent.includes('Order of the Day') || h.textContent.includes('WHAT WE HAVE PLANNED'));
      if (eventHead) {
        eventHead.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });
    await new Promise((r) => setTimeout(r, 1200));

    const eventImgPath = path.resolve(__dirname, 'event_clickable_venues_preview.png');
    await page.screenshot({ path: eventImgPath });
    console.log('Captured Event Clickable Venues screenshot to:', eventImgPath);

    await browser.close();
  } catch (err) {
    console.error('Error verifying Event section:', err);
  } finally {
    server.close();
    process.exit(0);
  }
}

main();
