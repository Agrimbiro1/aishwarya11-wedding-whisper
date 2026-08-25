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

  await new Promise((r) => server.listen(4191, r));
  console.log('Static server running on http://localhost:4191/');

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
    await page.goto('http://localhost:4191/', { waitUntil: 'networkidle2' });

    // 1. Scroll to Event Section
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2, h3'));
      const event = headings.find(h => h.textContent.includes('Order of the Day') || h.textContent.includes('Schedule'));
      if (event) {
        event.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });
    await new Promise((r) => setTimeout(r, 1000));
    const eventImgPath = path.resolve(__dirname, 'event_section_typography.png');
    await page.screenshot({ path: eventImgPath });
    console.log('Captured Event Section screenshot');

    // 2. Scroll to Travel Section
    await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h2, h3'));
      const travel = headings.find(h => h.textContent.includes('Travel & Stay'));
      if (travel) {
        travel.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    });
    await new Promise((r) => setTimeout(r, 1000));
    const travelImgPath = path.resolve(__dirname, 'travel_section_typography.png');
    await page.screenshot({ path: travelImgPath });
    console.log('Captured Travel Section screenshot');

    // 3. Render side-by-side comparison HTML page
    const eventDataUri = `data:image/png;base64,${fs.readFileSync(eventImgPath).toString('base64')}`;
    const travelDataUri = `data:image/png;base64,${fs.readFileSync(travelImgPath).toString('base64')}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 24px; background: #121212; color: #fff; font-family: system-ui, sans-serif; }
          .header { text-align: center; margin-bottom: 24px; }
          .header h1 { font-size: 20px; font-weight: 600; color: #f5f5f5; margin: 0 0 8px 0; }
          .header p { font-size: 13px; color: #a0a0a0; margin: 0; }
          .grid { display: flex; gap: 24px; justify-content: center; align-items: flex-start; }
          .col { background: #1e1e1e; padding: 16px; border-radius: 16px; border: 1px solid #333; text-align: center; }
          .col-title { font-size: 14px; font-weight: 600; color: #b88636; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 12px; }
          img { border-radius: 12px; width: 390px; height: auto; display: block; border: 1px solid #444; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Typography Consistency Verification</h1>
          <p>Comparing Event Section vs Travel & Stay Section (Headings, Subtitles, Body Text, and Tracked-Caps Badges)</p>
        </div>
        <div class="grid">
          <div class="col">
            <div class="col-title">Event Section (Reference Standard)</div>
            <img src="${eventDataUri}" />
          </div>
          <div class="col">
            <div class="col-title">Travel & Stay Section (Corrected)</div>
            <img src="${travelDataUri}" />
          </div>
        </div>
      </body>
      </html>
    `;

    const sideBySidePage = await browser.newPage();
    await sideBySidePage.setViewport({ width: 900, height: 950, deviceScaleFactor: 2 });
    await sideBySidePage.setContent(htmlContent, { waitUntil: 'load' });
    const sideBySidePath = path.resolve(__dirname, 'side_by_side_typography.png');
    await sideBySidePage.screenshot({ path: sideBySidePath, fullPage: true });
    console.log('Captured Side-by-Side comparison screenshot to:', sideBySidePath);

    await browser.close();
  } catch (err) {
    console.error('Error rendering comparison:', err);
  } finally {
    server.close();
    process.exit(0);
  }
}

main();
