const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\udaipur_rsvp_journey_art_1787563989158.png';
const outputSvgPath = path.resolve(__dirname, '../public/assets/udaipur_rsvp_journey.svg');
const assetsDir = path.resolve(__dirname, '../public/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const params = {
  color: '#4d684f',
  background: 'transparent',
  threshold: 190,
  turdSize: 4,
  optCurve: true,
  optTolerance: 0.4
};

potrace.trace(inputPath, params, function(err, svg) {
  if (err) {
    console.error('Potrace error:', err);
    process.exit(1);
  }
  fs.writeFileSync(outputSvgPath, svg);
  console.log('Successfully vectorized Udaipur RSVP Journey SVG to:', outputSvgPath);
});
