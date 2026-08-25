const fs = require('fs');
const path = require('path');

const assetsDir = path.resolve(__dirname, '../public/assets');
const svgFiles = [
  'travel_palace_art.svg',
  'travel_air_art.svg',
  'travel_rail_art.svg',
];

function calculateBounds(svgContent) {
  // Extract all numbers from path d attributes
  const pathRegex = /d="([^"]+)"/g;
  let match;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  while ((match = pathRegex.exec(svgContent)) !== null) {
    const d = match[1];
    // Split by command letters and spaces/commas
    const tokens = d.match(/-?\d+\.?\d*/g);
    if (!tokens) continue;

    for (let i = 0; i < tokens.length - 1; i += 2) {
      const x = parseFloat(tokens[i]);
      const y = parseFloat(tokens[i + 1]);
      if (!isNaN(x) && !isNaN(y)) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 4% padding
  const width = maxX - minX;
  const height = maxY - minY;
  const padX = width * 0.04;
  const padY = height * 0.04;

  const finalMinX = Math.floor(minX - padX);
  const finalMinY = Math.floor(minY - padY);
  const finalWidth = Math.ceil(width + padX * 2);
  const finalHeight = Math.ceil(height + padY * 2);

  return { minX: finalMinX, minY: finalMinY, width: finalWidth, height: finalHeight };
}

function fixSvg(file) {
  const filePath = path.join(assetsDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  const bounds = calculateBounds(content);
  console.log(`Bounds for ${file}:`, bounds);

  // Replace viewBox and width/height attributes
  const newViewBox = `viewBox="${bounds.minX} ${bounds.minY} ${bounds.width} ${bounds.height}"`;
  content = content.replace(/viewBox="[^"]+"/, newViewBox);
  content = content.replace(/width="1024"/, `width="${bounds.width}"`);
  content = content.replace(/height="1024"/, `height="${bounds.height}"`);

  fs.writeFileSync(filePath, content);
  console.log(`Updated viewBox for ${file} to ${newViewBox}`);
}

svgFiles.forEach(fixSvg);
