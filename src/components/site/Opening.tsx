import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";
import { Ornament } from "./Ornament";

/** Preload video & poster silently in the background on gate load */
function useVideoPreload() {
  useEffect(() => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.src = "/opening-intro.mp4";
    const img = new Image();
    img.src = "/opening-intro-poster.jpg";
  }, []);
}

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

/** Invitation Section — the single deliberate gate. */
export function InvitationGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  useVideoPreload();

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

/** Video Intro Player — plays the 3s clip inline upon tapping Open Invitation. */
export function VideoIntroPlayer({ onDone }: { onDone: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadingOut, setFadingOut] = useState(false);
  const doneCalled = useRef(false);

  function triggerDone() {
    if (doneCalled.current) return;
    doneCalled.current = true;
    setFadingOut(true);
    setTimeout(onDone, 400);
  }

  useEffect(() => {
    // 1. Reduced motion check
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      triggerDone();
      return;
    }

    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Video playback blocked or failed:", err);
          setTimeout(triggerDone, 1500);
        });
      }
    }

    // Safety fallback: if video stalls or fails to reach ended within 4.5s
    const fallbackTimer = setTimeout(() => {
      triggerDone();
    }, 4500);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden transition-opacity duration-500 ${
        fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        playsInline
        muted
        autoPlay
        preload="auto"
        poster="/opening-intro-poster.jpg"
        onEnded={triggerDone}
        onError={triggerDone}
        className="h-full w-full object-cover"
      >
        <source src="/opening-intro.mp4" type="video/mp4" />
        <source src="/opening-intro.webm" type="video/webm" />
      </video>
    </div>
  );
}
