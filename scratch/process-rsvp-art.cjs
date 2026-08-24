const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\udaipur_rsvp_journey_art_1787563989158.png';
const outputPngPath = path.resolve(__dirname, '../public/assets/udaipur_rsvp_journey_transparent.png');

// Ensure output dir exists
const assetsDir = path.resolve(__dirname, '../public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function () {
    const targetR = 77;  // #4d684f
    const targetG = 104;
    const targetB = 79;

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];

        // Calculate luminosity (0 = pitch black, 255 = white background)
        const lum = (r * 0.299 + g * 0.587 + b * 0.114);

        if (lum > 225) {
          // Pure/near white background -> fully transparent
          this.data[idx + 3] = 0;
        } else {
          // Line art -> recolor to sage olive (#4d684f) with proportional alpha
          const lineAlpha = Math.round((255 - lum) * 1.05);
          this.data[idx] = targetR;
          this.data[idx + 1] = targetG;
          this.data[idx + 2] = targetB;
          this.data[idx + 3] = Math.min(255, lineAlpha);
        }
      }
    }

    this.pack()
      .pipe(fs.createWriteStream(outputPngPath))
      .on('finish', () => {
        console.log('Saved transparent PNG to:', outputPngPath);
      });
  });
