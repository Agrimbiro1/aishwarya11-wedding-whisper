const fs = require('fs');
const path = require('path');

const svgRaw = fs.readFileSync(path.resolve(__dirname, 'traced_multipath.svg'), 'utf8');

// Extract all path d attributes and colors
const pathRegex = /<path [^>]*d="([^"]+)"[^>]*fill="([^"]+)"[^>]*\/>/g;
let match;
const paths = [];

while ((match = pathRegex.exec(svgRaw)) !== null) {
  const d = match[1];
  const fill = match[2];
  // Filter out pure white background boxes
  if (fill !== 'rgb(255,255,255)' && fill !== '#ffffff' && fill !== 'rgb(253,252,249)') {
    paths.push({ d, fill: '#4d684f' });
  }
}

console.log("Filtered active line-art paths:", paths.length);

// Generate clean static SVG component JSX
const jsxContent = `export function GardenGateStaticTracedSVG({ className = "w-80 h-80 text-[#4d684f]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={\`pointer-events-none select-none \${className}\`}
      aria-hidden="true"
    >
      ${paths.map(p => `<path d="${p.d}" fill="#4d684f" opacity="0.85" />`).join('\n      ')}
    </svg>
  );
}`;

fs.writeFileSync(path.resolve(__dirname, 'GardenGateStaticTracedSVG.tsx'), jsxContent);
console.log("Static component generated at scratch/GardenGateStaticTracedSVG.tsx!");
