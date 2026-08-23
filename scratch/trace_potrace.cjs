const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\palm_gate_sage_transparent.png';
const outputPath = path.resolve(__dirname, 'traced_potrace.svg');

const params = {
  threshold: 180,
  turdSize: 5,
  optTolerance: 0.4,
  turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY,
  color: '#4d684f',
  fill: 'none',
  blackOnWhite: true,
};

console.log("Tracing image using Potrace:", inputPath);
potrace.trace(inputPath, params, (err, svgstr) => {
  if (err) {
    console.error("Potrace error:", err);
    process.exit(1);
  }
  fs.writeFileSync(outputPath, svgstr);
  console.log("Potrace vectorization complete! Saved SVG to:", outputPath);
  console.log("SVG file size:", svgstr.length, "bytes");
});
