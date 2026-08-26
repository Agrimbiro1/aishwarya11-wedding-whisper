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

  await new Promise((r) => server.listen(4221, r));
  console.log('Static server running on http://localhost:4221/');

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 640, height: 844, deviceScaleFactor: 2 });
    await page.goto('http://localhost:4221/', { waitUntil: 'networkidle2' });

    // Open gate to enter site stage where music starts
    await page.evaluate(() => {
      const openBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('OPEN INVITATION'));
      if (openBtn) openBtn.click();
    });

    // Wait for save-the-date transition to finish (~6s)
    await new Promise((r) => setTimeout(r, 6500));

    const musicImgPath = path.resolve(__dirname, 'music_raabta_player_preview.png');
    await page.screenshot({ path: musicImgPath });
    console.log('Captured Music Player screenshot to:', musicImgPath);

    await browser.close();
  } catch (err) {
    console.error('Error verifying Music Player:', err);
  } finally {
    server.close();
    process.exit(0);
  }
}

main();
