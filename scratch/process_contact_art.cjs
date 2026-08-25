const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\contact_help_art_1787660079883.png';
const outputPath = path.resolve(__dirname, '../public/assets/contact_help_art.png');

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const imageBuffer = fs.readFileSync(inputPath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  const transparentDataUrl = await page.evaluate(async (dataUri) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Target color: #4d684f (r:77, g:104, b:79)
        const targetR = 77;
        const targetG = 104;
        const targetB = 79;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Calculate brightness (0 = black, 255 = white)
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

          if (brightness > 230) {
            // White / light background becomes completely transparent
            data[i + 3] = 0;
          } else {
            // Linework: calculate stroke alpha based on darkness
            const alpha = Math.min(255, Math.max(0, (250 - brightness) * 1.5));
            data[i] = targetR;
            data[i + 1] = targetG;
            data[i + 2] = targetB;
            data[i + 3] = Math.round(alpha);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = dataUri;
    });
  }, base64Image);

  const base64Data = transparentDataUrl.replace(/^data:image\/png;base64,/, '');
  fs.writeFileSync(outputPath, base64Data, 'base64');
  console.log('Successfully saved transparent olive line-art image to:', outputPath);

  await browser.close();
  process.exit(0);
}

main();
