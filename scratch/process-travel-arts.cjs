const fs = require('fs');
const path = require('path');
const potrace = require('potrace');

const palaceInput = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\udaipur_palace_card_1787644296443.png';
const airInput = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\travel_air_card_1787644314699.png';
const railInput = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\travel_rail_card_1787644330022.png';

const assetsDir = path.resolve(__dirname, '../public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const items = [
  { name: 'travel_palace_art', input: palaceInput },
  { name: 'travel_air_art', input: airInput },
  { name: 'travel_rail_art', input: railInput },
];

async function processItem({ name, input }) {
  const outputSvg = path.join(assetsDir, `${name}.svg`);
  const params = {
    color: '#4d684f',
    background: 'transparent',
    threshold: 190,
    turdSize: 3,
    optCurve: true,
    optTolerance: 0.4,
  };

  await new Promise((resolve, reject) => {
    potrace.trace(input, params, (err, svg) => {
      if (err) return reject(err);
      fs.writeFileSync(outputSvg, svg);
      console.log(`Saved SVG: ${outputSvg}`);
      resolve();
    });
  });
}

async function main() {
  for (const item of items) {
    await processItem(item);
  }
  console.log('All 3 travel line-art SVGs vectorized successfully!');
}

main().catch((err) => {
  console.error('Error processing travel arts:', err);
  process.exit(1);
});
