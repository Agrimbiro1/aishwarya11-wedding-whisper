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
