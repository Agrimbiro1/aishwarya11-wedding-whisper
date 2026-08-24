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

  await new Promise((r) => server.listen(4177, r));
  console.log('Static server running on http://localhost:4177/');

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await page.goto('http://localhost:4177/', { waitUntil: 'networkidle2' });

    // Scroll to RSVP section
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await new Promise((r) => setTimeout(r, 1000));

    // Capture initial RSVP state
    await page.screenshot({ path: path.resolve(__dirname, 'rsvp_initial_preview.png') });
    console.log('Captured initial RSVP screenshot');

    // Click Joyfully Accept button
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text && text.includes('Joyfully Accept')) {
        await btn.click();
        break;
      }
    }

    await new Promise((r) => setTimeout(r, 1000));

    // Capture accepted RSVP state
    await page.screenshot({ path: path.resolve(__dirname, 'rsvp_accepted_preview.png') });
    console.log('Captured accepted RSVP screenshot');

    await browser.close();
  } catch (err) {
    console.error('Error verifying RSVP:', err);
  } finally {
    server.close();
    process.exit(0);
  }
}

main();
