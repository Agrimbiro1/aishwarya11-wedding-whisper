const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');
const { PNG } = require('pngjs');

// Theme primary sage green RGB: #4d684f (R=77, G=104, B=79)
const GREEN_R = 77;
const GREEN_G = 104;
const GREEN_B = 79;

function convertJpegToTransparentGreenPng(inputPath, outputPath) {
  const jpegData = fs.readFileSync(inputPath);
  const rawData = jpeg.decode(jpegData, { useTArray: true });

  const png = new PNG({
    width: rawData.width,
    height: rawData.height,
  });

  for (let y = 0; y < rawData.height; y++) {
    for (let x = 0; x < rawData.width; x++) {
      const idx = (rawData.width * y + x) << 2;
      const r = rawData.data[idx];
      const g = rawData.data[idx + 1];
      const b = rawData.data[idx + 2];

      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      if (lum > 220) {
        // Background white -> 100% Fully Transparent
        png.data[idx] = 0;
        png.data[idx + 1] = 0;
        png.data[idx + 2] = 0;
        png.data[idx + 3] = 0;
      } else {
        // Linework stroke -> Theme Sage Green with anti-aliased smooth alpha
        const alphaRatio = Math.min(1, Math.max(0, (240 - lum) / 170));
        png.data[idx] = GREEN_R;
        png.data[idx + 1] = GREEN_G;
        png.data[idx + 2] = GREEN_B;
        png.data[idx + 3] = Math.round(alphaRatio * 255);
      }
    }
  }

  const buffer = PNG.sync.write(png);
  fs.writeFileSync(outputPath, buffer);
  console.log(`Converted ${path.basename(inputPath)} to transparent sage green PNG: ${outputPath}`);
}

function main() {
  const brainDir = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421';
  const publicDir = 'd:\\100X_Devs\\PROJECTS\\EV8_Proj\\wedding-whisper\\public';

  const gateIn = path.join(brainDir, 'palm_gate_lineart_c_1787302550779.png');
  const gateBrainOut = path.join(brainDir, 'palm_gate_sage_transparent.png');
  const gatePublicOut = path.join(publicDir, 'palm_gate_sage_transparent.png');

  const coupleIn = path.join(brainDir, 'couple_dancing_lineart_a_1787302565228.png');
  const coupleBrainOut = path.join(brainDir, 'couple_dancing_sage_transparent.png');
  const couplePublicOut = path.join(publicDir, 'couple_dancing_sage_transparent.png');

  convertJpegToTransparentGreenPng(gateIn, gateBrainOut);
  convertJpegToTransparentGreenPng(coupleIn, coupleBrainOut);

  fs.copyFileSync(gateBrainOut, gatePublicOut);
  fs.copyFileSync(coupleBrainOut, couplePublicOut);

  console.log('All processed transparent sage green PNGs saved successfully!');
}

main();
