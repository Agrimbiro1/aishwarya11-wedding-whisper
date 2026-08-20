import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import { Ornament } from "./Ornament";

/** 4.1 Opening Animation — monogram traces itself while assets preload. */
export function OpeningAnimation({ fast, onDone }: { fast: boolean; onDone: () => void }) {
  const [leaving, setLeaving] = useState(false);
  const min = fast ? 700 : 2000;

  useEffect(() => {
    const out = setTimeout(() => setLeaving(true), min);
    const done = setTimeout(onDone, min + 600);
    return () => {
      clearTimeout(out);
      clearTimeout(done);
    };
  }, [min, onDone]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center paper transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" className="animate-draw h-28 w-28 text-primary" fill="none" stroke="currentColor" strokeWidth="0.8">
        <path d="M60 8c14 14 28 26 28 44a28 28 0 1 1-56 0c0-18 14-30 28-44z" />
        <path d="M60 44v40M44 62h32" />
      </svg>
      <p className="animate-bloom mt-6 font-display text-2xl tracking-[0.3em] text-foreground">
        {wedding.couple.monogram}
      </p>
      <Ornament className="mt-4 opacity-70" />
      <div className="mt-8 h-px w-24 overflow-hidden bg-border">
        <div className="h-full w-1/3 animate-[drift_1.4s_ease-in-out_infinite] bg-accent" />
      </div>
    </div>
  );
}

/** 4.2 Invitation Section — the single deliberate gate. */
export function InvitationGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  function open() {
    setOpening(true);
    setTimeout(onOpen, 550);
  }

  return (
    <div
      className={`fixed inset-0 z-40 flex items-center justify-center overflow-hidden paper px-6 transition-all duration-500 ${
        opening ? "scale-105 opacity-0" : "scale-100 opacity-100"
      }`}
    >
      <div className="wavy-frame w-full max-w-sm px-7 py-14 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.36em] text-muted-foreground">
          Together with their families
        </p>
        <h1 className="mt-6 font-display text-[2.6rem] leading-[1.1] text-foreground">
          {wedding.couple.partnerA}
          <span className="mx-2 text-accent">&</span>
          {wedding.couple.partnerB}
        </h1>
        <Ornament className="mx-auto mt-5" />
        <p className="mt-5 text-sm tracking-[0.18em] uppercase text-muted-foreground">
          {wedding.dateLabel}
        </p>
        <p className="mt-4 px-2 text-sm leading-relaxed text-muted-foreground">
          {wedding.invitationLine}
        </p>
        <button
          onClick={open}
          className="mt-9 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium tracking-[0.2em] uppercase text-primary-foreground transition-transform duration-300 active:scale-[0.98]"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}
