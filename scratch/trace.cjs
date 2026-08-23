const ImageTracer = require('imagetracerjs');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\palm_gate_sage_transparent.png';
const outputPath = path.resolve(__dirname, 'traced_palm_gate.svg');

// Options tuned for high-density line-art vectorization:
const options = {
  corsenabled: false,
  ltres: 0.5,
  qtres: 0.5,
  pathomit: 4,
  colorsampling: 2,
  numberofcolors: 4,
  mincolorratio: 0.02,
  colorquantcycles: 3,
  scale: 1,
  strokewidth: 1,
  linefilter: true,
  scale: 1,
};

console.log("Vectorizing image:", inputPath);
ImageTracer.imageToSVG(inputPath, (svgstr) => {
  fs.writeFileSync(outputPath, svgstr);
  console.log("Vectorization complete! Saved SVG to:", outputPath);
  console.log("SVG size:", svgstr.length, "bytes");
}, options);
