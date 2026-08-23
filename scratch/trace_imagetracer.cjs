const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const ImageTracer = require('imagetracerjs');

const inputPath = 'C:\\Users\\Dell\\.gemini\\antigravity\\brain\\b1f18c1c-3d41-462c-90a9-e2d36b042421\\palm_gate_sage_transparent.png';
const outputPath = path.resolve(__dirname, 'traced_multipath.svg');

fs.createReadStream(inputPath)
  .pipe(new PNG({ filterType: 4 }))
  .on('parsed', function() {
    console.log(`Loaded PNG image: ${this.width}x${this.height}`);

    const imgd = {
      width: this.width,
      height: this.height,
      data: this.data
    };

    const options = {
      corsenabled: false,
      ltres: 1,
      qtres: 1,
      pathomit: 8,
      colorsampling: 2,
      numberofcolors: 3,
      mincolorratio: 0.02,
      colorquantcycles: 3,
      scale: 1,
      strokewidth: 1.2,
      linefilter: true,
    };

    console.log("Tracing image to multi-path SVG...");
    const svgstr = ImageTracer.imagedataToSVG(imgd, options);
    fs.writeFileSync(outputPath, svgstr);
    console.log("Vectorization complete! Saved SVG to:", outputPath);
    console.log("SVG file size:", svgstr.length, "bytes");

    const pathMatches = svgstr.match(/<path/g);
    console.log("Total individual SVG paths generated:", pathMatches ? pathMatches.length : 0);
  });
