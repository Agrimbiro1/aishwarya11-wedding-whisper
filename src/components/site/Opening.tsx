import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { wedding } from "@/data/wedding";
import { Ornament } from "./Ornament";

/** Monogram Seal Badge Anchor */
function MonogramSeal() {
  return (
    <div className="relative mb-1 flex items-center justify-center pointer-events-none select-none">
      <svg
        viewBox="0 0 60 60"
        className="w-10 h-10 text-accent/60 fill-none stroke-current"
        strokeWidth="0.9"
        aria-hidden="true"
      >
        <circle cx="30" cy="30" r="26" strokeDasharray="3 3" />
        <circle cx="30" cy="30" r="22" strokeWidth="0.5" />
      </svg>
      <span className="absolute font-script text-[0.8rem] tracking-wider text-accent font-normal">
        A & R
      </span>
    </div>
  );
}

/** Subtle Ambient Floating Petals */
function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Petal 1 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-12 left-10 w-4 h-4 text-accent/40 fill-accent/30 animate-float-petal-1"
      >
        <path d="M12 2C12 2 17 8 17 13C17 16.5 14.5 19 12 19C9.5 19 7 16.5 7 13C7 8 12 2 12 2Z" />
      </svg>

      {/* Petal 2 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-20 right-12 w-3.5 h-3.5 text-primary/40 fill-primary/30 animate-float-petal-2"
      >
        <path d="M12 2C12 2 17 8 17 13C17 16.5 14.5 19 12 19C9.5 19 7 16.5 7 13C7 8 12 2 12 2Z" />
      </svg>

      {/* Petal 3 */}
      <svg
        viewBox="0 0 24 24"
        className="absolute bottom-32 left-1/3 w-3 h-3 text-accent/35 fill-accent/25 animate-float-petal-3"
      >
        <path d="M12 2C12 2 17 8 17 13C17 16.5 14.5 19 12 19C9.5 19 7 16.5 7 13C7 8 12 2 12 2Z" />
      </svg>
    </div>
  );
}

/** Ornamental Inset Double Border with Corner Scroll Flourishes */
function OrnamentalDoubleBorder() {
  return (
    <div className="pointer-events-none absolute inset-2.5 rounded-[1.8rem] border border-accent/35 z-5">
      {/* Top-Left Corner Flourish */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -top-1 -left-1 w-5 h-5 text-accent/70 fill-none stroke-current"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 20V8C4 5.8 5.8 4 8 4H20" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>

      {/* Top-Right Corner Flourish */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -top-1 -right-1 w-5 h-5 text-accent/70 fill-none stroke-current scale-x-[-1]"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 20V8C4 5.8 5.8 4 8 4H20" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom-Left Corner Flourish */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -bottom-1 -left-1 w-5 h-5 text-accent/70 fill-none stroke-current scale-y-[-1]"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 20V8C4 5.8 5.8 4 8 4H20" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom-Right Corner Flourish */}
      <svg
        viewBox="0 0 24 24"
        className="absolute -bottom-1 -right-1 w-5 h-5 text-accent/70 fill-none stroke-current scale-[-1]"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 20V8C4 5.8 5.8 4 8 4H20" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

/** Soft Botanical Corner Wreath Frame */
function BotanicalCornerWreath() {
  return (
    <>
      {/* Top-Left */}
      <svg
        viewBox="0 0 140 140"
        className="pointer-events-none absolute -top-1 -left-1 w-28 h-28 text-primary/25 fill-none stroke-current"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 10 C 40 10, 80 25, 110 60 C 125 80, 130 110, 130 130" />
        <path d="M25 14 C 18 6, 28 2, 35 10 C 40 16, 30 22, 25 14 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M48 20 C 42 10, 52 5, 60 14 C 65 20, 54 27, 48 20 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M72 32 C 68 20, 80 16, 86 26 C 90 32, 78 40, 72 32 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M96 52 C 94 38, 108 36, 112 48 C 114 56, 102 62, 96 52 Z" fill="currentColor" fillOpacity="0.15" />
      </svg>

      {/* Top-Right */}
      <svg
        viewBox="0 0 140 140"
        className="pointer-events-none absolute -top-1 -right-1 w-28 h-28 text-primary/25 fill-none stroke-current scale-x-[-1]"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 10 C 40 10, 80 25, 110 60 C 125 80, 130 110, 130 130" />
        <path d="M25 14 C 18 6, 28 2, 35 10 C 40 16, 30 22, 25 14 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M48 20 C 42 10, 52 5, 60 14 C 65 20, 54 27, 48 20 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M72 32 C 68 20, 80 16, 86 26 C 90 32, 78 40, 72 32 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M96 52 C 94 38, 108 36, 112 48 C 114 56, 102 62, 96 52 Z" fill="currentColor" fillOpacity="0.15" />
      </svg>

      {/* Bottom-Left */}
      <svg
        viewBox="0 0 140 140"
        className="pointer-events-none absolute -bottom-1 -left-1 w-28 h-28 text-primary/25 fill-none stroke-current scale-y-[-1]"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 10 C 40 10, 80 25, 110 60 C 125 80, 130 110, 130 130" />
        <path d="M25 14 C 18 6, 28 2, 35 10 C 40 16, 30 22, 25 14 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M48 20 C 42 10, 52 5, 60 14 C 65 20, 54 27, 48 20 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M72 32 C 68 20, 80 16, 86 26 C 90 32, 78 40, 72 32 Z" fill="currentColor" fillOpacity="0.15" />
      </svg>

      {/* Bottom-Right */}
      <svg
        viewBox="0 0 140 140"
        className="pointer-events-none absolute -bottom-1 -right-1 w-28 h-28 text-primary/25 fill-none stroke-current scale-[-1]"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10 10 C 40 10, 80 25, 110 60 C 125 80, 130 110, 130 130" />
        <path d="M25 14 C 18 6, 28 2, 35 10 C 40 16, 30 22, 25 14 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M48 20 C 42 10, 52 5, 60 14 C 65 20, 54 27, 48 20 Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M72 32 C 68 20, 80 16, 86 26 C 90 32, 78 40, 72 32 Z" fill="currentColor" fillOpacity="0.15" />
      </svg>
    </>
  );
}

/** Udaipur Lake Palace & Water Silhouette Line Art */
function UdaipurLakeSilhouette() {
  return (
    <svg
      viewBox="0 0 400 120"
      className="pointer-events-none absolute bottom-0 left-0 h-24 w-full text-primary/18 fill-none stroke-current"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M0 80 Q 50 60, 100 70 T 200 55 T 300 68 T 400 60 V 120 H 0 Z" fill="currentColor" fillOpacity="0.04" />
      <path d="M80 85 V 65 H 120 V 85 M100 65 V 50 M95 50 C 95 40, 105 40, 105 50 Z" />
      <path d="M160 85 V 55 H 240 V 85 M200 55 V 38 M192 38 C 192 28, 208 28, 208 38 Z M175 55 V 45 C 175 40, 185 40, 185 45 V 55 M215 55 V 45 C 215 40, 225 40, 225 45 V 55" />
      <path d="M280 85 V 65 H 320 V 85 M300 65 V 50 M295 50 C 295 40, 305 40, 305 50 Z" />
      <path d="M60 85 H 340 V 90 H 60 Z" />
      <path d="M30 98 Q 70 94, 110 98 T 190 98 T 270 98 T 350 98" strokeDasharray="3 3" />
      <path d="M50 106 Q 90 103, 130 106 T 210 106 T 290 106 T 370 106" strokeDasharray="2 4" />
    </svg>
  );
}

/** Invitation Section — the single deliberate gate card. */
export function InvitationGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  function open() {
    setOpening(true);
    setTimeout(onOpen, 350);
  }

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center overflow-hidden touch-none select-none paper px-6 transition-all duration-500 ${
        opening ? "scale-105 opacity-0 pointer-events-none" : "scale-100 opacity-100"
      }`}
    >
      {/* Background Botanical Line-Art Motifs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-35 z-0" aria-hidden="true">
        <svg className="absolute -top-4 -left-4 w-36 h-36 text-accent/50 fill-none stroke-current" strokeWidth="0.8" viewBox="0 0 100 100">
          <path d="M10 90 Q 30 50, 90 10" />
          <path d="M30 70 Q 20 50, 35 45 M45 55 Q 35 35, 50 30 M60 40 Q 50 20, 65 15 M75 25 Q 65 5, 80 0" />
        </svg>
        <svg className="absolute -bottom-4 -right-4 w-36 h-36 text-accent/50 fill-none stroke-current scale-[-1]" strokeWidth="0.8" viewBox="0 0 100 100">
          <path d="M10 90 Q 30 50, 90 10" />
          <path d="M30 70 Q 20 50, 35 45 M45 55 Q 35 35, 50 30 M60 40 Q 50 20, 65 15 M75 25 Q 65 5, 80 0" />
        </svg>
      </div>

      {/* Ambient Floating Petals */}
      <FloatingPetals />

      <div className="wavy-frame relative w-full max-w-sm px-6 py-9 text-center flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#fdfcf9] via-[#faf5ef] to-[#f6ece5] shadow-[0_20px_48px_-14px_rgba(77,104,79,0.18),0_8px_24px_-6px_rgba(138,120,93,0.14)] animate-card-entrance">
        {/* 1. Inset Double Border & Corner Scroll Flourishes */}
        <OrnamentalDoubleBorder />

        {/* 2. Botanical Corner Wreath Frame */}
        <BotanicalCornerWreath />

        {/* 3. Udaipur Lake Palace & Silhouette Line Art */}
        <UdaipurLakeSilhouette />

        {/* Content Container (Z-10 relative) */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Monogram Seal Badge Anchor */}
          <MonogramSeal />

          {/* Transparent Sage Green Couple Line Art */}
          <img
            src="/couple_dancing.png"
            alt="Dancing couple line art"
            width={160}
            height={160}
            className="h-20 w-auto object-contain opacity-90 mb-2"
          />

          {/* Small caps label — aligned with Event Section label typography */}
          <p className="text-[0.68rem] uppercase tracking-[0.26em] text-accent/90 font-medium">
            Together with their families
          </p>

          {/* Couple Names — aligned with Event Section serif heading typography */}
          <h1 className="mt-2.5 font-display text-[2.35rem] leading-[1.1] text-foreground font-normal">
            {wedding.couple.partnerA}
            <span className="mx-2 font-script text-3xl text-accent">&</span>
            {wedding.couple.partnerB}
          </h1>

          <Ornament className="mx-auto mt-2.5" />

          {/* Date — aligned with Event Section label typography */}
          <p className="mt-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-accent font-medium">
            {wedding.dateLabel}
          </p>

          {/* Tagline — aligned with Event Section description typography */}
          <p className="mt-2 px-2 text-sm leading-relaxed text-muted-foreground/90 font-sans max-w-[280px]">
            {wedding.invitationLine}
          </p>

          {/* CTA Button with Ambient Glow Pulse */}
          <button
            onClick={open}
            className="mt-5 w-full rounded-full bg-primary px-6 py-3.5 text-[0.72rem] font-medium tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 active:scale-[0.98] animate-cta-pulse"
          >
            Open Invitation
          </button>

          {/* Warm Personal Micro-Copy */}
          <p className="mt-3 text-[0.72rem] italic font-serif text-accent/85 tracking-wide">
            Tap to begin our story
          </p>
        </div>
      </div>
    </div>
  );
}

/** 🎀 Celebration Ribbon & Confetti Flourish — Delicate 12–18px Satin Ribbons & Streamers */
function RibbonShowerFlourish() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden z-30 select-none"
      aria-hidden="true"
    >
      {/* Soft Warm Golden Sunburst Light Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(250,225,160,0.85)_0%,rgba(184,134,54,0.3)_40%,transparent_75%)] opacity-85 transition-opacity duration-1000" />

      {/* SVG Defs for Satin Gradients */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="gold-satin-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b88636" />
            <stop offset="50%" stopColor="#f7e8bd" />
            <stop offset="100%" stopColor="#c28e38" />
          </linearGradient>
          <linearGradient id="gold-satin-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d99138" />
            <stop offset="50%" stopColor="#faf2d9" />
            <stop offset="100%" stopColor="#b88636" />
          </linearGradient>
          <linearGradient id="cream-satin-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fdfaf3" />
            <stop offset="50%" stopColor="#e5c896" />
            <stop offset="100%" stopColor="#b88636" />
          </linearGradient>
        </defs>
      </svg>

      {/* 30 Delicate Full-Width Ribbon Strips (Distributed 3% to 96% Across Screen) */}

      {/* Ribbon 1 - Gold S-Curve (Far Left) - 4px × 16px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[3%] w-1 h-4 animate-flutter-1 opacity-90" style={{ animationDelay: "0ms" }}>
        <path d="M5 5 C 25 15, 5 35, 25 50 C 15 58, 20 65, 25 65 C 10 50, 20 25, 5 5 Z" fill="url(#gold-satin-1)" />
      </svg>

      {/* Ribbon 2 - Olive Green Streamer (Left Outer) - 3.5px × 14px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[8%] w-1 h-3.5 animate-flutter-2 opacity-90" style={{ animationDelay: "120ms" }}>
        <path d="M8 4 C 28 18, 2 38, 22 55 C 12 62, 18 68, 22 68 C 8 48, 22 22, 8 4 Z" fill="#4d684f" />
      </svg>

      {/* Ribbon 3 - Warm Cream Gold (Left) - 4px × 15px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[14%] w-1 h-4 animate-flutter-3 opacity-90" style={{ animationDelay: "60ms" }}>
        <path d="M10 6 C 26 16, 8 36, 24 52 C 14 60, 18 66, 24 66 C 10 46, 20 20, 10 6 Z" fill="url(#cream-satin-1)" />
      </svg>

      {/* Ribbon 4 - Satin Gold (Left Mid-Outer) - 3.5px × 14px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[20%] w-1 h-3.5 animate-flutter-1 opacity-95" style={{ animationDelay: "200ms" }}>
        <path d="M6 4 C 24 18, 6 38, 24 54 C 14 62, 20 68, 24 68 C 8 48, 20 22, 6 4 Z" fill="url(#gold-satin-2)" />
      </svg>

      {/* ACCENT RIBBON 1 - Cream Gold (Left Mid) - 5px × 21px */}
      <svg viewBox="0 0 35 80" className="absolute -top-4 left-[26%] w-1.5 h-5 animate-flutter-2 opacity-95" style={{ animationDelay: "80ms" }}>
        <path d="M8 6 C 32 22, 8 48, 32 68 C 18 78, 26 88, 32 88 C 12 68, 26 32, 8 6 Z" fill="url(#cream-satin-1)" />
      </svg>

      {/* Ribbon 6 - Olive Green (Left Inner) - 4px × 16px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[32%] w-1 h-4 animate-flutter-3 opacity-90" style={{ animationDelay: "240ms" }}>
        <path d="M10 5 C 25 15, 5 32, 20 48 C 12 55, 16 62, 20 62 C 8 44, 18 20, 10 5 Z" fill="#6c8c6f" />
      </svg>

      {/* Ribbon 7 - Deep Gold (Center Left) - 3.5px × 15px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[38%] w-1 h-3.5 animate-flutter-1 opacity-95" style={{ animationDelay: "150ms" }}>
        <path d="M5 4 C 26 16, 4 36, 26 54 C 16 62, 22 68, 26 68 C 8 48, 22 22, 5 4 Z" fill="url(#gold-satin-1)" />
      </svg>

      {/* ACCENT RIBBON 2 - Gold (Center) - 5.5px × 22px */}
      <svg viewBox="0 0 35 80" className="absolute -top-4 left-[44%] w-1.5 h-5.5 animate-flutter-2 opacity-100" style={{ animationDelay: "40ms" }}>
        <path d="M6 6 C 30 20, 6 45, 30 65 C 18 75, 24 85, 30 85 C 12 65, 24 30, 6 6 Z" fill="url(#gold-satin-2)" />
      </svg>

      {/* ACCENT RIBBON 3 - Olive Green (Center Right) - 5px × 20px */}
      <svg viewBox="0 0 35 80" className="absolute -top-4 left-[50%] w-1.5 h-5 animate-flutter-3 opacity-95" style={{ animationDelay: "180ms" }}>
        <path d="M8 6 C 32 22, 8 48, 32 68 C 18 78, 26 88, 32 88 C 12 68, 26 32, 8 6 Z" fill="#4d684f" />
      </svg>

      {/* Ribbon 10 - Satin Cream (Right Inner) - 4px × 16px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[56%] w-1 h-4 animate-flutter-1 opacity-90" style={{ animationDelay: "300ms" }}>
        <path d="M6 5 C 24 15, 6 35, 22 50 C 12 58, 18 64, 22 64 C 8 46, 20 22, 6 5 Z" fill="url(#cream-satin-1)" />
      </svg>

      {/* Ribbon 11 - Gold Streamer (Right Mid) - 3.5px × 14px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[62%] w-1 h-3.5 animate-flutter-2 opacity-95" style={{ animationDelay: "100ms" }}>
        <path d="M10 5 C 25 15, 5 32, 20 48 C 12 55, 16 62, 20 62 C 8 44, 18 20, 10 5 Z" fill="url(#gold-satin-1)" />
      </svg>

      {/* Ribbon 12 - Gold (Right Mid-Outer) - 4px × 17px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[68%] w-1 h-4 animate-flutter-3 opacity-95" style={{ animationDelay: "220ms" }}>
        <path d="M6 6 C 30 20, 6 45, 30 65 C 18 75, 24 85, 30 85 C 12 65, 24 30, 6 6 Z" fill="url(#gold-satin-2)" />
      </svg>

      {/* Ribbon 13 - Olive Green (Right Outer) - 3.5px × 15px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[74%] w-1 h-3.5 animate-flutter-1 opacity-90" style={{ animationDelay: "360ms" }}>
        <path d="M8 4 C 28 18, 2 38, 22 55 C 12 62, 18 68, 22 68 C 8 48, 22 22, 8 4 Z" fill="#6c8c6f" />
      </svg>

      {/* Ribbon 14 - Warm Cream (Right Outer) - 4px × 16px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[80%] w-1 h-4 animate-flutter-2 opacity-90" style={{ animationDelay: "140ms" }}>
        <path d="M10 6 C 26 16, 8 36, 24 52 C 14 60, 18 66, 24 66 C 10 46, 20 20, 10 6 Z" fill="url(#cream-satin-1)" />
      </svg>

      {/* Ribbon 15 - Deep Gold (Far Right) - 3.5px × 14px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[86%] w-1 h-3.5 animate-flutter-3 opacity-95" style={{ animationDelay: "280ms" }}>
        <path d="M8 6 C 32 22, 8 48, 32 68 C 18 78, 26 88, 32 88 C 12 68, 26 32, 8 6 Z" fill="url(#gold-satin-1)" />
      </svg>

      {/* Ribbon 16 - Gold Streamer (Edge Right) - 4px × 15px */}
      <svg viewBox="0 0 30 70" className="absolute -top-3 left-[92%] w-1 h-3.5 animate-flutter-1 opacity-85" style={{ animationDelay: "420ms" }}>
        <path d="M5 4 C 25 16, 5 35, 23 52 C 14 60, 19 65, 23 65 C 8 46, 20 20, 5 4 Z" fill="url(#gold-satin-2)" />
      </svg>

      {/* Delicate Confetti Foil Strips & Diamonds (14 pieces) */}
      <div className="absolute -top-3 left-[5%] w-1 h-3.5 bg-[#b88636] rounded-sm animate-flutter-1 shadow-sm opacity-90" style={{ animationDelay: "80ms" }} />
      <div className="absolute -top-3 left-[12%] w-1.5 h-1.5 bg-[#c87d55] rotate-45 animate-flutter-2 shadow-sm opacity-90" style={{ animationDelay: "160ms" }} />
      <div className="absolute -top-3 left-[18%] w-1 h-4 bg-[#4d684f] rounded-sm animate-flutter-3 opacity-85" style={{ animationDelay: "240ms" }} />
      <div className="absolute -top-3 left-[24%] w-1.5 h-1.5 rounded-full bg-[#f7e8bd] border border-[#b88636] animate-flutter-1 opacity-95" style={{ animationDelay: "320ms" }} />
      <div className="absolute -top-3 left-[30%] w-1 h-3.5 bg-[#d99138] rounded-sm animate-flutter-2 opacity-90" style={{ animationDelay: "100ms" }} />
      <div className="absolute -top-3 left-[36%] w-1.5 h-1.5 bg-[#f5ebd7] border border-[#b88636]/50 rotate-45 animate-flutter-3 opacity-90" style={{ animationDelay: "400ms" }} />
      <div className="absolute -top-3 left-[42%] w-1 h-4 bg-[#c28e38] rounded-sm animate-flutter-1 opacity-95" style={{ animationDelay: "180ms" }} />
      <div className="absolute -top-3 left-[48%] w-1.5 h-1.5 bg-[#6c8c6f] rotate-45 animate-flutter-2 opacity-85" style={{ animationDelay: "460ms" }} />
      <div className="absolute -top-3 left-[54%] w-1 h-3.5 bg-[#b88636] rounded-sm animate-flutter-3 opacity-90" style={{ animationDelay: "220ms" }} />
      <div className="absolute -top-3 left-[60%] w-1.5 h-1.5 bg-[#c87d55] rotate-45 animate-flutter-1 opacity-90" style={{ animationDelay: "520ms" }} />
      <div className="absolute -top-3 left-[66%] w-1 h-4 bg-[#4d684f] rounded-sm animate-flutter-2 opacity-85" style={{ animationDelay: "340ms" }} />
      <div className="absolute -top-3 left-[72%] w-1.5 h-1.5 rounded-full bg-[#f7e8bd] border border-[#b88636] animate-flutter-3 opacity-95" style={{ animationDelay: "600ms" }} />
      <div className="absolute -top-3 left-[78%] w-1 h-3.5 bg-[#d99138] rounded-sm animate-flutter-1 opacity-90" style={{ animationDelay: "280ms" }} />
      <div className="absolute -top-3 left-[84%] w-1.5 h-1.5 bg-[#f5ebd7] border border-[#b88636]/50 rotate-45 animate-flutter-2 opacity-90" style={{ animationDelay: "680ms" }} />
      <div className="absolute -top-3 left-[90%] w-1 h-4 bg-[#c28e38] rounded-sm animate-flutter-3 opacity-95" style={{ animationDelay: "440ms" }} />
      <div className="absolute -top-3 left-[96%] w-1.5 h-1.5 bg-[#6c8c6f] rotate-45 animate-flutter-1 opacity-85" style={{ animationDelay: "760ms" }} />
    </div>
  );
}

/** 💥 360-Degree Radial Explosive Confetti Burst Component */
function ConfettiBurstFlourish() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden z-35 select-none"
      aria-hidden="true"
    >
      {/* Centered Burst Anchor Point at 50% 50% */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        {/* Radial Burst Particle 1 (Top Left Burst) */}
        <div className="absolute w-1 h-3.5 bg-[#b88636] rounded-sm animate-burst-tl shadow-sm opacity-95" />
        <div className="absolute w-1.5 h-1.5 bg-[#c87d55] rotate-45 animate-burst-tl opacity-90" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#f7e8bd] border border-[#b88636] animate-burst-tl opacity-95" />

        {/* Radial Burst Particle 2 (Top Right Burst) */}
        <div className="absolute w-1 h-3.5 bg-[#c28e38] rounded-sm animate-burst-tr opacity-95" />
        <div className="absolute w-1.5 h-1.5 bg-[#4d684f] rotate-45 animate-burst-tr opacity-90" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#faf2d9] border border-[#d99138] animate-burst-tr opacity-95" />

        {/* Radial Burst Particle 3 (Bottom Left Burst) */}
        <div className="absolute w-1 h-3.5 bg-[#d99138] rounded-sm animate-burst-bl opacity-95" />
        <div className="absolute w-1.5 h-1.5 bg-[#6c8c6f] rotate-45 animate-burst-bl opacity-90" />

        {/* Radial Burst Particle 4 (Bottom Right Burst) */}
        <div className="absolute w-1 h-3.5 bg-[#b88636] rounded-sm animate-burst-br opacity-95" />
        <div className="absolute w-1.5 h-1.5 bg-[#c87d55] rotate-45 animate-burst-br opacity-90" />

        {/* Radial Burst Particle 5 (Upward Straight Burst) */}
        <div className="absolute w-1 h-4 bg-[#e5b869] rounded-sm animate-burst-up opacity-95" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#f5ebd7] border border-[#b88636] animate-burst-up opacity-95" />
      </div>
    </div>
  );
}

/**
 * CurtainOpeningAnimation
 * Rich theatrical curtain-opening sequence with:
 * - 3D cylindrical gathered fabric folds & woven linen textile noise
 * - Scalloped lace trim & gold bead tassel inner seam
 * - Monogram emblem wax seal ("A & R")
 * - 4-Beat Choreographed Sequence (~3.6s total):
 *   Beat 1 (0–600ms): Curtains closed, seal visible & static
 *   Beat 2 (600–1200ms): Seal unlocks with golden shimmer glow & scale pulse (1.0 -> 1.15)
 *   Beat 3 (1200–1400ms): Seal clears / fades out (opacity 1 -> 0)
 *   Beat 4 (1400–3600ms): Curtains slide apart for EXACTLY 2200ms (2.2s)
 */
export function CurtainOpeningAnimation({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"closed" | "unlocking" | "clearing" | "parting" | "done">("closed");

  useEffect(() => {
    // 1. Reduced motion check
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      onDone();
      return;
    }

    // Beat 1: Closed pause for 600ms (seal visible & static)
    const timer1 = setTimeout(() => {
      setPhase("unlocking");
    }, 600);

    // Beat 2: Seal unlocks with golden glow pulse (600ms to 1200ms)
    const timer2 = setTimeout(() => {
      setPhase("clearing");
    }, 1200);

    // Beat 3: Seal clears/fades (1200ms to 1400ms)
    const timer3 = setTimeout(() => {
      setPhase("parting");
    }, 1400);

    // Beat 4: Curtains part for 5000ms (5.0s) (1400ms to 6400ms)
    const timer4 = setTimeout(() => {
      setPhase("done");
      onDone();
    }, 6400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onDone]);

  if (phase === "done") return null;

  const isUnlocking = phase === "unlocking";
  const isClearing = phase === "clearing" || phase === "parting";
  const isParting = phase === "parting";

  return (
    <div
      className="absolute inset-0 z-50 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* 360-Degree Radial Confetti Burst & 32 Full-Width Ribbon Shower at Reveal */}
      {isParting && (
        <>
          <RibbonShowerFlourish />
          <ConfettiBurstFlourish />
        </>
      )}

      {/* LEFT CURTAIN FABRIC PANEL */}
      <div
        className={`absolute top-0 left-0 bottom-0 w-1/2 curtain-panel-left shadow-[12px_0_28px_rgba(40,30,15,0.22)] z-40 ${
          isParting ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, #f8f4ec 0%, #ede6d6 12%, #faf6f0 25%, #e8dfce 38%, #fbf8f2 50%, #ebe1cf 63%, #fcfaf4 75%, #e5dac7 88%, #d9cbb4 100%)",
        }}
      >
        {/* Woven Linen Textile Texture Overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-multiply pointer-events-none">
          <filter id="curtain-left-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#curtain-left-texture)" />
        </svg>

        {/* Decorative Scalloped Lace Edge & Tassel Bead Accent Line (Left Panel Seam) */}
        <svg
          viewBox="0 0 40 400"
          className="absolute top-0 right-0 h-full w-8 text-[#b88636]/65 fill-none stroke-current pointer-events-none z-20"
          preserveAspectRatio="none"
        >
          <path
            d="M40 0 C 20 20, 20 40, 40 60 C 20 80, 20 100, 40 120 C 20 140, 20 160, 40 180 C 20 200, 20 220, 40 240 C 20 260, 20 280, 40 300 C 20 320, 20 340, 40 360 C 20 380, 20 400, 40 400"
            strokeWidth="1.2"
          />
          <circle cx="24" cy="30" r="2.2" fill="currentColor" />
          <circle cx="24" cy="90" r="2.2" fill="currentColor" />
          <circle cx="24" cy="150" r="2.2" fill="currentColor" />
          <circle cx="24" cy="210" r="2.2" fill="currentColor" />
          <circle cx="24" cy="270" r="2.2" fill="currentColor" />
          <circle cx="24" cy="330" r="2.2" fill="currentColor" />
          <circle cx="24" cy="390" r="2.2" fill="currentColor" />
        </svg>

        {/* Outer Shadow Overlap Seam Edge */}
        <div className="absolute top-0 right-0 bottom-0 w-2.5 bg-gradient-to-l from-[#7a6744]/25 to-transparent pointer-events-none" />
      </div>

      {/* RIGHT CURTAIN FABRIC PANEL */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-1/2 curtain-panel-right shadow-[12px_0_28px_rgba(40,30,15,0.22)] z-40 ${
          isParting ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          background:
            "linear-gradient(-90deg, #f8f4ec 0%, #ede6d6 12%, #faf6f0 25%, #e8dfce 38%, #fbf8f2 50%, #ebe1cf 63%, #fcfaf4 75%, #e5dac7 88%, #d9cbb4 100%)",
        }}
      >
        {/* Woven Linen Textile Texture Overlay */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06] mix-blend-multiply pointer-events-none">
          <filter id="curtain-right-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#curtain-right-texture)" />
        </svg>

        {/* Decorative Scalloped Lace Edge & Tassel Bead Accent Line (Right Panel Seam) */}
        <svg
          viewBox="0 0 40 400"
          className="absolute top-0 left-0 h-full w-8 text-[#b88636]/65 fill-none stroke-current pointer-events-none scale-x-[-1] z-20"
          preserveAspectRatio="none"
        >
          <path
            d="M40 0 C 20 20, 20 40, 40 60 C 20 80, 20 100, 40 120 C 20 140, 20 160, 40 180 C 20 200, 20 220, 40 240 C 20 260, 20 280, 40 300 C 20 320, 20 340, 40 360 C 20 380, 20 400, 40 400"
            strokeWidth="1.2"
          />
          <circle cx="24" cy="30" r="2.2" fill="currentColor" />
          <circle cx="24" cy="90" r="2.2" fill="currentColor" />
          <circle cx="24" cy="150" r="2.2" fill="currentColor" />
          <circle cx="24" cy="210" r="2.2" fill="currentColor" />
          <circle cx="24" cy="270" r="2.2" fill="currentColor" />
          <circle cx="24" cy="330" r="2.2" fill="currentColor" />
          <circle cx="24" cy="390" r="2.2" fill="currentColor" />
        </svg>

        {/* Outer Shadow Overlap Seam Edge */}
        <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gradient-to-r from-[#7a6744]/25 to-transparent pointer-events-none" />
      </div>

      {/* CENTERED PROMINENT MONOGRAM WAX-SEAL EMBLEM ("A & R") */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center transition-all duration-300 ${
          isClearing
            ? "scale-125 opacity-0 pointer-events-none"
            : isUnlocking
            ? "scale-115 opacity-100"
            : "scale-100 opacity-100"
        }`}
      >
        {/* Soft Golden Shimmer Unlocking Glow Halo */}
        <div
          className={`absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(245,230,195,0.95)_0%,rgba(184,134,54,0.55)_50%,transparent_75%)] transition-all duration-400 ${
            isUnlocking ? "scale-160 opacity-100" : "scale-100 opacity-0"
          }`}
        />

        {/* Outer Wax Seal Medallion */}
        <div
          className={`relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#fdfaf3] border-4 border-[#b88636] flex flex-col items-center justify-center transition-shadow duration-400 ${
            isUnlocking
              ? "shadow-[0_0_50px_rgba(184,134,54,0.85),0_12px_40px_rgba(0,0,0,0.25)]"
              : "shadow-[0_10px_35px_rgba(184,134,54,0.4),0_4px_20px_rgba(0,0,0,0.2)]"
          }`}
        >
          {/* Inner Ornate Gold Filigree Ring */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] text-[#b88636]/75 fill-none stroke-current"
            strokeWidth="1.2"
          >
            <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="39" strokeWidth="0.8" />
          </svg>

          {/* Monogram Couple Initials */}
          <div className="flex flex-col items-center justify-center text-center text-[#b88636] z-10 px-2">
            <span className="font-script text-3xl sm:text-4xl font-semibold leading-none tracking-wide text-[#b88636] drop-shadow-sm">
              {wedding.couple.partnerA.charAt(0)} & {wedding.couple.partnerB.charAt(0)}
            </span>
            <div className="my-0.5 w-8 h-px bg-[#b88636]/40" />
            <span className="text-[0.52rem] sm:text-[0.6rem] uppercase tracking-[0.32em] text-[#b88636] font-semibold">
              INVITATION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** ✒️ Hand-Drawn Path Component — Dynamically calculates path length and animates stroke tracing */
function HandDrawnPath({
  d,
  stroke = "#4d684f",
  strokeWidth = 1.3,
  fill = "none",
  delay = 0,
  duration = 0.85,
  className = "",
}: {
  d: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        setLength(Math.ceil(len));
      } catch {
        setLength(400);
      }
    }
  }, []);

  const pathLen = length || 400;

  return (
    <path
      ref={pathRef}
      d={d}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        strokeDasharray: pathLen,
        strokeDashoffset: pathLen,
        animation: `liveLineDraw ${duration}s cubic-bezier(0.35, 0, 0.25, 1) ${delay}s forwards`,
      }}
    />
  );
}

/** 🌴 Highly-Detailed Hand-Drawn Garden Gate & Regal Palm Trees SVG Artwork (90+ Paths) */
export function GardenGatePalmTreeSVG({ showSeal = false }: { showSeal?: boolean }) {
  return (
    <svg
      viewBox="0 0 400 340"
      className="w-84 h-76 sm:w-[26rem] sm:h-84 pointer-events-none select-none text-[#4d684f] fill-none stroke-current"
      aria-hidden="true"
    >
      {/* ========================================================================= */}
      {/* STAGE 1: STONE PILLARS (Left & Right) (t = 0.0s – 0.9s)                  */}
      {/* ========================================================================= */}
      {/* Left Pillar Molding, Bevel & Shaft Contours */}
      <HandDrawnPath d="M 120 95 L 155 95 L 155 105 L 120 105 Z" strokeWidth={1.4} delay={0.0} duration={0.8} />
      <HandDrawnPath d="M 123 105 L 152 105 L 150 112 L 125 112 Z" strokeWidth={1.0} delay={0.06} duration={0.7} />
      <HandDrawnPath d="M 125 112 L 125 220" strokeWidth={1.4} delay={0.10} duration={0.85} />
      <HandDrawnPath d="M 150 112 L 150 220" strokeWidth={1.4} delay={0.14} duration={0.85} />
      <HandDrawnPath d="M 130 118 L 145 118 L 145 214 L 130 214 Z" strokeWidth={0.9} delay={0.18} duration={0.8} />
      <HandDrawnPath d="M 125 140 L 150 140 M 125 168 L 150 168 M 125 196 L 150 196" strokeWidth={1.0} delay={0.22} duration={0.75} />
      <HandDrawnPath d="M 120 220 L 155 220 L 155 230 L 120 230 Z" strokeWidth={1.4} delay={0.26} duration={0.7} />

      {/* Right Pillar Molding, Bevel & Shaft Contours */}
      <HandDrawnPath d="M 245 95 L 280 95 L 280 105 L 245 105 Z" strokeWidth={1.4} delay={0.12} duration={0.8} />
      <HandDrawnPath d="M 248 105 L 277 105 L 275 112 L 250 112 Z" strokeWidth={1.0} delay={0.18} duration={0.7} />
      <HandDrawnPath d="M 250 112 L 250 220" strokeWidth={1.4} delay={0.22} duration={0.85} />
      <HandDrawnPath d="M 275 112 L 275 220" strokeWidth={1.4} delay={0.26} duration={0.85} />
      <HandDrawnPath d="M 255 118 L 270 118 L 270 214 L 255 214 Z" strokeWidth={0.9} delay={0.30} duration={0.8} />
      <HandDrawnPath d="M 250 140 L 275 140 M 250 168 L 275 168 M 250 196 L 275 196" strokeWidth={1.0} delay={0.34} duration={0.75} />
      <HandDrawnPath d="M 245 220 L 280 220 L 280 230 L 245 230 Z" strokeWidth={1.4} delay={0.38} duration={0.7} />

      {/* ========================================================================= */}
      {/* STAGE 2: WROUGHT-IRON OPEN GATE DOORS (Swung Inward) (t = 0.5s – 1.6s)   */}
      {/* ========================================================================= */}
      {/* Left Swung Gate Frame & Vertical Spear Spindles */}
      <HandDrawnPath d="M 150 108 L 175 118 L 175 220 L 150 215 Z" strokeWidth={1.3} delay={0.50} duration={0.85} />
      <HandDrawnPath d="M 156 110 L 156 216 M 156 110 L 154 105 L 158 105 Z" strokeWidth={0.9} delay={0.58} duration={0.8} />
      <HandDrawnPath d="M 162 113 L 162 217 M 162 113 L 160 108 L 164 108 Z" strokeWidth={0.9} delay={0.64} duration={0.8} />
      <HandDrawnPath d="M 168 115 L 168 219 M 168 115 L 166 110 L 170 110 Z" strokeWidth={0.9} delay={0.70} duration={0.8} />
      <HandDrawnPath d="M 150 192 C 162 198, 162 208, 175 204 M 150 182 C 162 188, 162 198, 175 194" strokeWidth={0.9} delay={0.76} duration={0.75} />
      <HandDrawnPath d="M 150 130 C 162 125, 162 135, 175 132" strokeWidth={0.9} delay={0.82} duration={0.7} />

      {/* Right Swung Gate Frame & Vertical Spear Spindles */}
      <HandDrawnPath d="M 250 108 L 225 118 L 225 220 L 250 215 Z" strokeWidth={1.3} delay={0.56} duration={0.85} />
      <HandDrawnPath d="M 244 110 L 244 216 M 244 110 L 242 105 L 246 105 Z" strokeWidth={0.9} delay={0.64} duration={0.8} />
      <HandDrawnPath d="M 238 113 L 238 217 M 238 113 L 236 108 L 240 108 Z" strokeWidth={0.9} delay={0.70} duration={0.8} />
      <HandDrawnPath d="M 232 115 L 232 219 M 232 115 L 230 110 L 234 110 Z" strokeWidth={0.9} delay={0.76} duration={0.8} />
      <HandDrawnPath d="M 250 192 C 238 198, 238 208, 225 204 M 250 182 C 238 188, 238 198, 225 194" strokeWidth={0.9} delay={0.82} duration={0.75} />
      <HandDrawnPath d="M 250 130 C 238 125, 238 135, 225 132" strokeWidth={0.9} delay={0.88} duration={0.7} />

      {/* ========================================================================= */}
      {/* STAGE 3: ORNATE ARCHWAY, FINIAL CREST & PATHWAY (t = 1.0s – 1.9s)        */}
      {/* ========================================================================= */}
      <HandDrawnPath d="M 150 95 C 150 48, 250 48, 250 95" strokeWidth={1.5} delay={1.0} duration={0.9} />
      <HandDrawnPath d="M 150 102 C 155 60, 245 60, 250 102" strokeWidth={1.0} delay={1.08} duration={0.85} />
      <HandDrawnPath d="M 200 52 L 200 32 M 200 32 C 190 38, 190 46, 200 52 M 200 32 C 210 38, 210 46, 200 52" strokeWidth={1.2} delay={1.16} duration={0.8} />
      <HandDrawnPath d="M 165 78 C 158 68, 172 65, 168 76 M 182 62 C 176 52, 190 50, 184 60" strokeWidth={0.9} delay={1.24} duration={0.75} />
      <HandDrawnPath d="M 235 78 C 242 68, 228 65, 232 76 M 218 62 C 224 52, 210 50, 216 60" strokeWidth={0.9} delay={1.30} duration={0.75} />

      {/* Garden Winding Pathway & Distant Horizon */}
      <HandDrawnPath d="M 150 220 C 160 250, 185 275, 200 300" strokeWidth={1.2} delay={1.36} duration={0.85} />
      <HandDrawnPath d="M 250 220 C 240 250, 215 275, 200 300" strokeWidth={1.2} delay={1.42} duration={0.85} />
      <HandDrawnPath d="M 165 240 Q 200 248, 235 240 M 175 265 Q 200 274, 225 265 M 188 288 Q 200 294, 212 288" strokeWidth={0.8} delay={1.50} duration={0.8} />
      <HandDrawnPath d="M 175 180 C 188 172, 212 172, 225 180 M 200 176 L 200 155 C 196 165, 204 165, 200 176" strokeWidth={0.8} delay={1.58} duration={0.75} />

      {/* ========================================================================= */}
      {/* STAGE 4: REGAL PALM TREE TRUNKS & FROND BRANCH STEMS (t = 1.5s – 2.6s)   */}
      {/* ========================================================================= */}
      {/* Left Main Palm Trunk & Bark Ring Texture */}
      <HandDrawnPath d="M 95 260 C 102 190, 105 125, 96 38" strokeWidth={1.4} delay={1.50} duration={0.9} />
      <HandDrawnPath d="M 103 260 C 110 190, 113 125, 104 38" strokeWidth={1.4} delay={1.56} duration={0.9} />
      <HandDrawnPath d="M 96 230 L 104 230 M 97 205 L 105 205 M 98 180 L 106 180 M 99 155 L 107 155 M 100 130 L 108 130 M 101 105 L 109 105 M 100 80 L 108 80 M 98 55 L 106 55" strokeWidth={0.8} delay={1.64} duration={0.8} />

      {/* Left Main Palm Frond Branch Stems (7 Spreading Branches) */}
      <HandDrawnPath d="M 100 38 C 75 18, 48 20, 25 38" strokeWidth={1.3} delay={1.72} duration={0.85} />
      <HandDrawnPath d="M 100 38 C 92 12, 102 4, 122 10" strokeWidth={1.3} delay={1.78} duration={0.85} />
      <HandDrawnPath d="M 100 38 C 122 18, 148 20, 170 38" strokeWidth={1.3} delay={1.84} duration={0.85} />
      <HandDrawnPath d="M 100 38 C 65 38, 42 58, 20 80" strokeWidth={1.3} delay={1.90} duration={0.85} />
      <HandDrawnPath d="M 100 38 C 135 38, 158 58, 180 80" strokeWidth={1.3} delay={1.96} duration={0.85} />
      <HandDrawnPath d="M 100 38 C 82 55, 70 82, 58 112" strokeWidth={1.3} delay={2.02} duration={0.85} />
      <HandDrawnPath d="M 100 38 C 118 55, 130 82, 142 112" strokeWidth={1.3} delay={2.08} duration={0.85} />

      {/* Left Secondary (Background) Palm Tree */}
      <HandDrawnPath d="M 60 265 C 65 200, 68 140, 62 80 M 65 265 C 70 200, 73 140, 67 80" strokeWidth={1.2} delay={1.80} duration={0.85} />
      <HandDrawnPath d="M 64 80 C 42 60, 25 65, 8 85 M 64 80 C 85 60, 102 65, 120 85 M 64 80 C 52 58, 60 42, 78 50" strokeWidth={1.0} delay={1.88} duration={0.8} />

      {/* Right Main Palm Trunk & Bark Ring Texture */}
      <HandDrawnPath d="M 305 260 C 298 190, 295 125, 304 38" strokeWidth={1.4} delay={1.55} duration={0.9} />
      <HandDrawnPath d="M 297 260 C 290 190, 287 125, 296 38" strokeWidth={1.4} delay={1.61} duration={0.9} />
      <HandDrawnPath d="M 304 230 L 296 230 M 303 205 L 295 205 M 302 180 L 294 180 M 301 155 L 293 155 M 300 130 L 292 130 M 299 105 L 291 105 M 300 80 L 292 80 M 302 55 L 294 55" strokeWidth={0.8} delay={1.69} duration={0.8} />

      {/* Right Main Palm Frond Branch Stems (7 Spreading Branches) */}
      <HandDrawnPath d="M 300 38 C 325 18, 352 20, 375 38" strokeWidth={1.3} delay={1.77} duration={0.85} />
      <HandDrawnPath d="M 300 38 C 308 12, 298 4, 278 10" strokeWidth={1.3} delay={1.83} duration={0.85} />
      <HandDrawnPath d="M 300 38 C 278 18, 252 20, 230 38" strokeWidth={1.3} delay={1.89} duration={0.85} />
      <HandDrawnPath d="M 300 38 C 335 38, 358 58, 380 80" strokeWidth={1.3} delay={1.95} duration={0.85} />
      <HandDrawnPath d="M 300 38 C 265 38, 242 58, 220 80" strokeWidth={1.3} delay={2.01} duration={0.85} />
      <HandDrawnPath d="M 300 38 C 318 55, 330 82, 342 112" strokeWidth={1.3} delay={2.07} duration={0.85} />
      <HandDrawnPath d="M 300 38 C 282 55, 270 82, 258 112" strokeWidth={1.3} delay={2.13} duration={0.85} />

      {/* Right Secondary (Background) Palm Tree */}
      <HandDrawnPath d="M 340 265 C 335 200, 332 140, 338 80 M 335 265 C 330 200, 327 140, 333 80" strokeWidth={1.2} delay={1.85} duration={0.85} />
      <HandDrawnPath d="M 336 80 C 358 60, 375 65, 392 85 M 336 80 C 315 60, 298 65, 280 85 M 336 80 C 348 58, 340 42, 322 50" strokeWidth={1.0} delay={1.93} duration={0.8} />

      {/* ========================================================================= */}
      {/* STAGE 5: DENSE FEATHERY LEAFLET HATCHING & SURROUNDING FERNS (t = 2.0s–3.0s) */}
      {/* ========================================================================= */}
      {/* Left Palm Feathery Leaflet Texture Hatching */}
      <HandDrawnPath d="M 90 32 L 82 20 M 80 27 L 70 16 M 70 24 L 58 14 M 60 25 L 48 18 M 48 28 L 36 24 M 36 33 L 26 30" strokeWidth={0.8} delay={2.00} duration={0.8} />
      <HandDrawnPath d="M 98 28 L 88 18 M 99 20 L 92 8 M 103 16 L 102 2 M 109 14 L 114 4 M 115 13 L 122 8" strokeWidth={0.8} delay={2.08} duration={0.8} />
      <HandDrawnPath d="M 110 32 L 118 20 M 120 27 L 130 16 M 130 24 L 142 14 M 140 25 L 152 18 M 152 28 L 164 24 M 164 33 L 174 30" strokeWidth={0.8} delay={2.16} duration={0.8} />
      <HandDrawnPath d="M 88 40 L 76 48 M 76 44 L 62 55 M 64 52 L 48 65 M 50 60 L 35 75 M 36 70 L 22 85" strokeWidth={0.8} delay={2.24} duration={0.8} />
      <HandDrawnPath d="M 112 40 L 124 48 M 124 44 L 138 55 M 136 52 L 152 65 M 150 60 L 165 75 M 164 70 L 178 85" strokeWidth={0.8} delay={2.32} duration={0.8} />
      <HandDrawnPath d="M 94 48 L 82 58 M 86 64 L 72 76 M 78 80 L 64 94 M 70 95 L 56 110" strokeWidth={0.8} delay={2.40} duration={0.8} />
      <HandDrawnPath d="M 106 48 L 118 58 M 114 64 L 128 76 M 122 80 L 136 94 M 130 95 L 144 110" strokeWidth={0.8} delay={2.48} duration={0.8} />

      {/* Right Palm Feathery Leaflet Texture Hatching */}
      <HandDrawnPath d="M 310 32 L 318 20 M 320 27 L 330 16 M 330 24 L 342 14 M 340 25 L 352 18 M 352 28 L 364 24 M 364 33 L 374 30" strokeWidth={0.8} delay={2.05} duration={0.8} />
      <HandDrawnPath d="M 302 28 L 312 18 M 301 20 L 308 8 M 297 16 L 298 2 M 291 14 L 286 4 M 285 13 L 278 8" strokeWidth={0.8} delay={2.13} duration={0.8} />
      <HandDrawnPath d="M 290 32 L 282 20 M 280 27 L 270 16 M 270 24 L 258 14 M 260 25 L 248 18 M 248 28 L 236 24 M 236 33 L 226 30" strokeWidth={0.8} delay={2.21} duration={0.8} />
      <HandDrawnPath d="M 312 40 L 324 48 M 324 44 L 338 55 M 336 52 L 352 65 M 350 60 L 365 75 M 364 70 L 378 85" strokeWidth={0.8} delay={2.29} duration={0.8} />
      <HandDrawnPath d="M 288 40 L 276 48 M 276 44 L 262 55 M 264 52 L 248 65 M 250 60 L 235 75 M 236 70 L 222 85" strokeWidth={0.8} delay={2.37} duration={0.8} />
      <HandDrawnPath d="M 306 48 L 318 58 M 314 64 L 328 76 M 322 80 L 336 94 M 330 95 L 344 110" strokeWidth={0.8} delay={2.45} duration={0.8} />
      <HandDrawnPath d="M 294 48 L 282 58 M 286 64 L 272 76 M 278 80 L 264 94 M 270 95 L 256 110" strokeWidth={0.8} delay={2.53} duration={0.8} />

      {/* Surrounding Ferns & Flowering Shrubs at Base */}
      <HandDrawnPath d="M 75 260 C 50 235, 30 245, 15 275 M 82 260 C 62 230, 42 235, 28 265 M 90 260 C 75 225, 60 230, 48 258" strokeWidth={1.1} delay={2.35} duration={0.8} />
      <HandDrawnPath d="M 105 255 C 112 225, 124 230, 135 260 M 115 255 C 122 230, 130 235, 140 265" strokeWidth={1.1} delay={2.43} duration={0.8} />
      <HandDrawnPath d="M 325 260 C 350 235, 370 245, 385 275 M 318 260 C 338 230, 358 235, 372 265 M 310 260 C 325 225, 340 230, 352 258" strokeWidth={1.1} delay={2.51} duration={0.8} />
      <HandDrawnPath d="M 295 255 C 288 225, 276 230, 265 260 M 285 255 C 278 230, 270 235, 260 265" strokeWidth={1.1} delay={2.59} duration={0.8} />

      {/* ========================================================================= */}
      {/* STAGE 6: MONOGRAM SEAL ("A & R") IN ARCHWAY (Fades In at t = 3.1s)          */}
      {/* ========================================================================= */}
      <g
        className={`transition-all duration-700 ${
          showSeal ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Double Gold Accent Seal Rings */}
        <circle cx="200" cy="148" r="28" stroke="#b88636" strokeWidth="1.2" fill="none" />
        <circle cx="200" cy="148" r="25" stroke="#b88636" strokeWidth="0.8" fill="none" />
        {/* Centered Script Monogram Text */}
        <text
          x="200"
          y="155"
          textAnchor="middle"
          fill="#b88636"
          className="font-script text-2xl font-normal select-none pointer-events-none"
        >
          {wedding.couple.monogram}
        </text>
      </g>
    </svg>
  );
}

/**
 * GardenGateSaveTheDateTransition
 * Plays immediately after guest taps "OPEN INVITATION".
 * 1. Live stroke-by-stroke hand-drawing of the Garden-Gate with Palm Trees illustration (~3.0s).
 * 2. Monogram seal ("A & R") fades in centered inside the open gate archway (t = 3.1s).
 * 3. Save-The-Date text ("Aanya & Rahul", "Saturday, 12 December 2026", tagline) reveals below (t = 3.6s).
 * 4. Holds moment for guest readability, then fades out smoothly into Welcome Section (~5.8s total).
 */
export function GardenGateSaveTheDateTransition({ onDone }: { onDone: () => void }) {
  const [showSeal, setShowSeal] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // 1. Reduced motion check
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShowSeal(true);
      setShowText(true);
      const timer = setTimeout(() => {
        onDone();
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Step 1: Fade in Seal centered within open gate archway as drawing finishes (at t = 3100ms)
    const sealTimer = setTimeout(() => {
      setShowSeal(true);
    }, 3100);

    // Step 2: Reveal Save-The-Date text block below (at t = 3600ms)
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3600);

    // Step 3: Start fading out into Welcome Section (at t = 5200ms)
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 5200);

    // Step 4: Complete transition and enter site (at t = 5900ms)
    const doneTimer = setTimeout(() => {
      onDone();
    }, 5900);

    return () => {
      clearTimeout(sealTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden touch-none select-none bg-gradient-to-b from-[#fdfcf9] via-[#faf5ef] to-[#f6ece5] px-6 transition-opacity duration-700 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Inset Ornamental Border */}
      <OrnamentalDoubleBorder />

      {/* Floating Petals for Atmosphere */}
      <FloatingPetals />

      {/* Center Stage Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-sm w-full py-4">
        {/* 1. Live Hand-Drawn Garden Gate & Palm Trees Artwork Stack */}
        <div className="relative flex items-center justify-center w-84 h-76 sm:w-[26rem] sm:h-84 mb-2">
          <GardenGatePalmTreeSVG showSeal={showSeal} />
        </div>

        {/* 2. Save-The-Date Text Reveal (Staggered slide up & fade in) */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Small Caps Label */}
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-accent/90 font-medium mb-1">
            Save The Date
          </p>

          {/* Couple Names — Serif Heading */}
          <h2 className="font-display text-3xl sm:text-4xl leading-tight text-foreground font-normal mb-1.5">
            {wedding.couple.partnerA}
            <span className="mx-2 font-script text-3xl text-accent">&</span>
            {wedding.couple.partnerB}
          </h2>

          {/* Gold Decorative Line */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent my-1.5" />

          {/* Date Label */}
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] text-accent font-semibold mb-1.5">
            {wedding.dateLabel}
          </p>

          {/* Tagline */}
          <p className="font-sans italic text-xs sm:text-sm text-foreground/80 max-w-[260px] leading-relaxed">
            {wedding.invitationLine}
          </p>
        </div>
      </div>
    </div>
  );
}
