import type { SVGProps } from "react";

/** Thin single-weight stroke SVG properties matching the site's botanical linework */
const strokeProps: SVGProps<SVGSVGElement> = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** Botanical Leaf Sprig — left side margin accent */
export function BotanicalSprigLeft({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={`w-16 h-24 text-primary/20 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M40 110C40 70 30 40 15 10" />
      <path d="M37 90C25 85 18 75 22 65C28 72 35 80 37 90Z" />
      <path d="M32 65C18 62 10 50 15 40C22 47 28 55 32 65Z" />
      <path d="M24 40C12 38 6 28 10 20C16 25 21 32 24 40Z" />
      <path d="M42 95C55 88 62 76 56 68C51 75 45 83 42 95Z" />
      <path d="M35 70C48 62 54 50 48 42C43 49 37 57 35 70Z" />
      <path d="M27 45C38 38 43 28 38 20C33 26 28 34 27 45Z" />
    </svg>
  );
}

/** Botanical Leaf Sprig — right side margin accent */
export function BotanicalSprigRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={`w-16 h-24 text-primary/20 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M40 110C40 70 50 40 65 10" />
      <path d="M43 90C55 85 62 75 58 65C52 72 45 80 43 90Z" />
      <path d="M48 65C62 62 70 50 65 40C58 47 52 55 48 65Z" />
      <path d="M56 40C68 38 74 28 70 20C64 25 59 32 56 40Z" />
      <path d="M38 95C25 88 18 76 24 68C29 75 35 83 38 95Z" />
      <path d="M45 70C32 62 26 50 32 42C37 49 43 57 45 70Z" />
      <path d="M53 45C42 38 37 28 42 20C47 26 52 34 53 45Z" />
    </svg>
  );
}

/** Delicate Palm Leaf Accent — margin accent near outdoor daytime events */
export function PalmLeafAccent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`w-20 h-20 text-accent/25 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M10 90Q50 70 90 10" />
      <path d="M90 10Q70 30 45 45" />
      <path d="M90 10Q65 20 35 30" />
      <path d="M90 10Q80 40 55 60" />
      <path d="M90 10Q55 15 20 20" />
      <path d="M90 10Q85 50 60 75" />
      <path d="M70 35Q40 45 15 50" />
      <path d="M80 50Q50 65 25 75" />
    </svg>
  );
}

/** Subtle Candle / Lantern Spark Accent — margin accent near evening/Sangeet events */
export function EveningStarAccent({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-12 h-12 text-accent/25 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M30 5V55" />
      <path d="M5 30H55" />
      <path d="M12 12L48 48" />
      <path d="M48 12L12 48" />
      <circle cx="30" cy="30" r="4" />
    </svg>
  );
}

/** Horizontal Floral Section Flourish — placed behind day headings */
export function DayHeadingFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={`w-48 h-5 text-accent/30 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M10 10H80" />
      <path d="M120 10H190" />
      <circle cx="100" cy="10" r="3" />
      <path d="M92 10C88 6 82 6 80 10C82 14 88 14 92 10Z" />
      <path d="M108 10C112 6 118 6 120 10C118 14 112 14 108 10Z" />
    </svg>
  );
}

/** Standalone Flying Songbird Line Sketch — Journey filler moment */
export function BirdSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={`w-8 h-6 text-primary/40 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M5 25C15 10 28 5 35 18C42 8 52 12 55 22C45 25 35 22 30 25C25 28 15 32 5 25Z" />
      <path d="M30 20C28 15 25 10 20 8" />
    </svg>
  );
}

/** Standalone Butterfly Line Sketch — Journey filler moment */
export function ButterflySketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={`w-7 h-7 text-primary/40 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M25 15C20 5 8 8 12 20C15 25 22 24 25 25C22 26 15 25 12 30C8 42 20 45 25 35" />
      <path d="M25 15C30 5 42 8 38 20C35 25 28 24 25 25C28 26 35 25 38 30C42 42 30 45 25 35" />
      <path d="M25 15V35" />
      <path d="M23 10C21 6 18 4 15 5" />
      <path d="M27 10C29 6 32 4 35 5" />
    </svg>
  );
}

/** Standalone Floating Flower Petals Sketch — Journey filler moment */
export function FloatingPetalsSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-9 h-9 text-primary/35 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M12 15C18 8 26 12 22 22C16 26 8 20 12 15Z" />
      <path d="M38 10C45 5 52 12 46 18C40 22 34 16 38 10Z" />
      <path d="M28 35C35 30 42 38 35 44C28 48 24 40 28 35Z" />
      <path d="M10 42C15 38 20 42 16 48C12 50 8 46 10 42Z" />
    </svg>
  );
}

/** Small Scattered Leaf Cluster Doodle */
export function LeafClusterDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`w-5 h-5 text-primary/35 pointer-events-none ${className}`} {...strokeProps}>
      <path d="M10 30C15 15 30 10 35 12C30 25 15 30 10 30Z" />
      <path d="M10 30L30 15" />
      <path d="M5 20C12 12 22 15 20 22" />
    </svg>
  );
}

/** Tiny Footprints Line Doodle — Journey step marker */
export function FootprintsDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`w-5 h-5 text-primary/45 pointer-events-none ${className}`} {...strokeProps}>
      {/* Left footprint */}
      <ellipse cx="15" cy="22" rx="4" ry="7" transform="rotate(-15 15 22)" />
      <circle cx="12" cy="11" r="1" />
      <circle cx="16" cy="11" r="1.1" />
      <circle cx="20" cy="13" r="1" />

      {/* Right footprint */}
      <ellipse cx="26" cy="15" rx="4" ry="7" transform="rotate(15 26 15)" />
      <circle cx="22" cy="5" r="1" />
      <circle cx="27" cy="5" r="1.1" />
      <circle cx="31" cy="7" r="1" />
    </svg>
  );
}

/** Mini Compass Rose Sketch — Journey waypoint marker */
export function CompassDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`w-6 h-6 text-primary/50 pointer-events-none ${className}`} {...strokeProps}>
      <circle cx="20" cy="20" r="14" />
      <path d="M20 6V34" />
      <path d="M6 20H34" />
      <polygon points="20,10 23,20 20,17 17,20" fill="currentColor" opacity={0.6} />
      <polygon points="20,30 23,20 20,23 17,20" fill="currentColor" opacity={0.4} />
    </svg>
  );
}

/** Decorative Twisting Vine Path SVG — Winding journey curve with spiraling vine & sprouted leaves */
export function TwistingVinePath({ isLeft = true, className = "" }: { isLeft?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 90"
      className={`h-20 w-full text-primary/60 fill-none opacity-90 ${
        isLeft ? "scale-x-100" : "scale-x-[-1]"
      } ${className}`}
      aria-hidden="true"
    >
      {/* Main Dotted Path */}
      <path
        d="M 50 0 C 180 25, 180 65, 140 90"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />

      {/* Secondary Organic Twisting Vine Line */}
      <path
        d="M 45 4 C 175 18, 185 72, 145 86"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 3"
        opacity={0.6}
      />

      {/* Sprouted Leaves along the twisting vine */}
      <path d="M 85 18 C 92 10, 98 12, 95 20 C 90 22, 85 20, 85 18 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity={0.2} />
      <path d="M 140 38 C 150 32, 155 38, 148 45 C 142 45, 138 42, 140 38 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity={0.25} />
      <path d="M 152 62 C 160 58, 162 66, 155 70 C 150 68, 148 64, 152 62 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity={0.2} />

      {/* Directional Path Arrow Markers */}
      <path d="M 110 30 L 115 36 L 108 38" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Extended Connecting Botanical Branch (Left-to-Right) — Connects adjacent cards organically */
export function ExtendedBranchLeftToRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 180" className={`w-24 h-36 text-primary/70 pointer-events-none ${className}`} {...strokeProps}>
      {/* Main extended stem stretching down across the gap */}
      <path d="M15 10 C 25 50, 45 90, 85 165" strokeWidth="1.4" />
      {/* Sprouted leaves along stem */}
      <path d="M18 35 C30 25 40 28 35 38 C28 42 20 40 18 35 Z" fill="currentColor" fillOpacity={0.22} strokeWidth="1" />
      <path d="M30 65 C48 55 56 62 48 72 C40 75 32 70 30 65 Z" fill="currentColor" fillOpacity={0.25} strokeWidth="1" />
      <path d="M48 98 C65 88 74 95 66 106 C58 110 50 104 48 98 Z" fill="currentColor" fillOpacity={0.2} strokeWidth="1" />
      <path d="M68 135 C88 125 96 132 88 144 C80 148 70 142 68 135 Z" fill="currentColor" fillOpacity={0.25} strokeWidth="1" />
      {/* Sub-twigs */}
      <path d="M30 65 C20 75 15 85 10 95" strokeWidth="1" opacity={0.6} />
      <path d="M10 95 C18 90 22 96 16 102 Z" fill="currentColor" fillOpacity={0.15} strokeWidth="0.8" />
    </svg>
  );
}

/** Extended Connecting Botanical Branch (Right-to-Left) — Connects adjacent cards organically */
export function ExtendedBranchRightToLeft({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 180" className={`w-24 h-36 text-primary/70 pointer-events-none ${className}`} {...strokeProps}>
      {/* Main extended stem stretching down across the gap */}
      <path d="M105 10 C 95 50, 75 90, 35 165" strokeWidth="1.4" />
      {/* Sprouted leaves along stem */}
      <path d="M102 35 C90 25 80 28 85 38 C92 42 100 40 102 35 Z" fill="currentColor" fillOpacity={0.22} strokeWidth="1" />
      <path d="M90 65 C72 55 64 62 72 72 C80 75 88 70 90 65 Z" fill="currentColor" fillOpacity={0.25} strokeWidth="1" />
      <path d="M72 98 C55 88 46 95 54 106 C62 110 70 104 72 98 Z" fill="currentColor" fillOpacity={0.2} strokeWidth="1" />
      <path d="M52 135 C32 125 24 132 32 144 C40 148 50 142 52 135 Z" fill="currentColor" fillOpacity={0.25} strokeWidth="1" />
      {/* Sub-twigs */}
      <path d="M90 65 C100 75 105 85 110 95" strokeWidth="1" opacity={0.6} />
      <path d="M110 95 C102 90 98 96 104 102 Z" fill="currentColor" fillOpacity={0.15} strokeWidth="0.8" />
    </svg>
  );
}

/** Traditional Hindu Lotus Flower Line Motif — Bride's Side Symbol */
export function LotusMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 40" className={`w-5 h-4 text-[#c28e38] pointer-events-none ${className}`} {...strokeProps}>
      {/* Central petal */}
      <path d="M25 5C20 15 22 26 25 32C28 26 30 15 25 5Z" fill="currentColor" fillOpacity={0.25} strokeWidth="1.2" />
      {/* Inner side petals */}
      <path d="M25 10C16 12 12 22 18 32C22 30 24 25 25 20" strokeWidth="1.1" />
      <path d="M25 10C34 12 38 22 32 32C28 30 26 25 25 20" strokeWidth="1.1" />
      {/* Outer base petals */}
      <path d="M18 22C8 24 6 30 12 34C18 34 22 30 24 28" strokeWidth="1" />
      <path d="M32 22C42 24 44 30 38 34C32 34 28 30 26 28" strokeWidth="1" />
      {/* Base stem curve */}
      <path d="M15 34C22 37 28 37 35 34" strokeWidth="1.2" />
    </svg>
  );
}

/** Traditional Hindu Ceremonial Diya Flame Line Motif — Groom's Side Symbol */
export function DiyaMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 40" className={`w-5 h-4 text-[#c87d55] pointer-events-none ${className}`} {...strokeProps}>
      {/* Diya Base Bowl */}
      <path d="M8 22C12 32 38 32 42 22C45 22 38 20 25 20C12 20 5 22 8 22Z" fill="currentColor" fillOpacity={0.2} strokeWidth="1.2" />
      <path d="M12 22C18 26 32 26 38 22" strokeWidth="1" />
      {/* Flame */}
      <path d="M25 5C22 11 20 16 25 20C30 16 28 11 25 5Z" fill="#d99138" fillOpacity={0.4} strokeWidth="1.1" />
      <path d="M25 9C23 13 22 16 25 19" strokeWidth="0.8" opacity={0.8} />
    </svg>
  );
}

/** Traditional Sacred Kalash Line Motif — Indian Wedding Blessing Symbol */
export function KalashMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={`w-10 h-10 text-[#b88636] pointer-events-none ${className}`} {...strokeProps}>
      {/* Coconut on Top */}
      <path d="M30 6C25 12 25 18 30 22C35 18 35 12 30 6Z" fill="currentColor" fillOpacity={0.3} strokeWidth="1.2" />
      {/* Mango Leaves */}
      <path d="M30 18C20 12 12 18 18 24C22 22 27 20 30 20Z" fill="currentColor" fillOpacity={0.18} strokeWidth="1" />
      <path d="M30 18C40 12 48 18 42 24C38 22 33 20 30 20Z" fill="currentColor" fillOpacity={0.18} strokeWidth="1" />
      {/* Kalash Brass Pot Body */}
      <path d="M22 24H38L42 28C46 36 44 46 30 46C16 46 14 36 18 28Z" fill="currentColor" fillOpacity={0.22} strokeWidth="1.3" />
      {/* Neck Band */}
      <path d="M20 26H40" strokeWidth="1.2" />
      <path d="M22 28H38" strokeWidth="1" />
      {/* Sacred Thread (Mauli) Swastik/Band Marks */}
      <path d="M24 35C30 38 30 38 36 35" strokeWidth="1" opacity={0.7} />
      {/* Pedestal Base */}
      <path d="M22 46H38L40 50H20Z" fill="currentColor" fillOpacity={0.25} strokeWidth="1.2" />
    </svg>
  );
}

/** Traditional Paisley & Mandala Horizontal Divider for Indian Wedding Section with Star Tips & Extended Rules */
export function MandalaPaisleyDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 sm:gap-3 text-[#b88636] opacity-95 my-10 sm:my-12 w-full max-w-xs sm:max-w-sm mx-auto ${className}`}>
      {/* Left Extended Paisley Swirl with End Star Flourish */}
      <svg viewBox="0 0 140 24" className="w-32 sm:w-36 h-5 stroke-current fill-none pointer-events-none" strokeWidth="1.1" strokeLinecap="round">
        {/* End Star Tip Flourish at Far Left */}
        <path d="M6 12L10 10L14 12L10 14Z" fill="currentColor" strokeWidth="0.8" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />

        {/* Extended Dotted Rule */}
        <path d="M16 12H100" strokeDasharray="3 3" />

        {/* Paisley Swirl Motif */}
        <path d="M100 12C112 4, 122 6, 126 12C128 16, 124 20, 118 18C113 16, 114 10, 120 10" />
        <circle cx="120" cy="10" r="1.5" fill="currentColor" />
      </svg>

      {/* Central Sacred Kalash Icon */}
      <KalashMotif className="w-8 h-8 shrink-0 text-[#b88636]" />

      {/* Right Extended Paisley Swirl with End Star Flourish */}
      <svg viewBox="0 0 140 24" className="w-32 sm:w-36 h-5 stroke-current fill-none pointer-events-none scale-x-[-1]" strokeWidth="1.1" strokeLinecap="round">
        {/* End Star Tip Flourish at Far Right */}
        <path d="M6 12L10 10L14 12L10 14Z" fill="currentColor" strokeWidth="0.8" />
        <circle cx="10" cy="12" r="1" fill="currentColor" />

        {/* Extended Dotted Rule */}
        <path d="M16 12H100" strokeDasharray="3 3" />

        {/* Paisley Swirl Motif */}
        <path d="M100 12C112 4, 122 6, 126 12C128 16, 124 20, 118 18C113 16, 114 10, 120 10" />
        <circle cx="120" cy="10" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

/** Unique Decorative Closing End-Cap Flourish for Family Section */
export function FamilySectionEndCap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 30"
      className={`w-44 h-7 text-[#b88636]/85 fill-none stroke-current pointer-events-none ${className}`}
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Left Tapering Rule */}
      <path d="M10 15H55" strokeDasharray="3 3" />
      {/* Left Swirl */}
      <path d="M55 15C62 9 68 11 72 15C74 18 72 21 68 20C64 19 65 14 70 14" />
      <circle cx="70" cy="14" r="1.2" fill="currentColor" />

      {/* Central Lotus End-Cap Blossom Motif */}
      <path d="M90 6C86 13 88 20 90 24C92 20 94 13 90 6Z" fill="currentColor" fillOpacity={0.3} strokeWidth="1" />
      <path d="M90 10C82 12 79 20 84 24" strokeWidth="0.9" />
      <path d="M90 10C98 12 101 20 96 24" strokeWidth="0.9" />

      {/* Right Swirl */}
      <path d="M125 15C118 9 112 11 108 15C106 18 108 21 112 20C116 19 115 14 110 14" />
      <circle cx="110" cy="14" r="1.2" fill="currentColor" />
      {/* Right Tapering Rule */}
      <path d="M125 15H170" strokeDasharray="3 3" />
    </svg>
  );
}

/** Subtle Warm Paper Grain & Linen Tactile Texture Overlay */
export function PaperGrainOverlay({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.045] mix-blend-multiply ${className}`}
      aria-hidden="true"
    >
      <filter id="paper-tactile-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paper-tactile-grain)" />
    </svg>
  );
}
