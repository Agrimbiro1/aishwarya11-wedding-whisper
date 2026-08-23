const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const refImgPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\palm_gate_sage_transparent.png';
const svgPath = path.resolve(__dirname, 'traced_multipath.svg');
const outPngPath = path.resolve(__dirname, 'static_side_by_side.png');

const refImgData = fs.readFileSync(refImgPath).toString('base64');
const svgContent = fs.readFileSync(svgPath, 'utf8');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #fdfcf9;
      font-family: serif;
      margin: 0;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      color: #4d684f;
      margin-bottom: 20px;
      font-size: 24px;
    }
    .comparison-container {
      display: flex;
      flex-direction: row;
      gap: 30px;
      align-items: center;
      justify-content: center;
      background: #faf6f0;
      padding: 24px;
      border: 1px solid #e0d5c1;
      border-radius: 12px;
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .box h2 {
      font-size: 16px;
      color: #b88636;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    .media-frame {
      width: 400px;
      height: 400px;
      object-fit: contain;
      border: 1px solid #d8cbb5;
      background: #fdfcf9;
      border-radius: 8px;
    }
    .svg-frame svg {
      width: 400px;
      height: 400px;
    }
  </style>
</head>
<body>
  <h1>Static Vectorization Verification: Side-by-Side Comparison</h1>
  <div class="comparison-container">
    <div class="box">
      <h2>Original Reference Image</h2>
      <img src="data:image/png;base64,${refImgData}" class="media-frame" />
    </div>
    <div class="box">
      <h2>Traced Multi-Path SVG (Static)</h2>
      <div class="media-frame svg-frame">
        ${svgContent}
      </div>
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync(path.resolve(__dirname, 'comparison.html'), htmlContent);

(async () => {
  console.log("Rendering side-by-side static comparison screenshot...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 960, height: 600 });
  await page.goto(`file://${path.resolve(__dirname, 'comparison.html')}`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: outPngPath, fullPage: true });
  await browser.close();
  console.log("Static side-by-side comparison saved to:", outPngPath);
})();
