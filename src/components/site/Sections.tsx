import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  Flower2,
  Music2,
  Gem,
  Martini,
  UtensilsCrossed,
  PartyPopper,
  MapPin,
  CalendarPlus,
  X,
  Coffee,
  Heart,
  Sparkles,
  Wine,
  Compass,
  Footprints,
  Navigation,
} from "lucide-react";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { Ornament, SectionTitle } from "./Ornament";
import {
  BotanicalSprigLeft,
  BotanicalSprigRight,
  PalmLeafAccent,
  EveningStarAccent,
  DayHeadingFlourish,
  BirdSketch,
  ButterflySketch,
  FloatingPetalsSketch,
  LeafClusterDoodle,
  FootprintsDoodle,
  CompassDoodle,
  TwistingVinePath,
  ExtendedBranchLeftToRight,
  ExtendedBranchRightToLeft,
  LotusMotif,
  DiyaMotif,
  KalashMotif,
  MandalaPaisleyDivider,
  FamilySectionEndCap,
  PaperGrainOverlay,
} from "./EventAccents";

const ICONS: Record<string, typeof Flower2> = {
  flower: Flower2,
  music: Music2,
  rings: Gem,
  drinks: Martini,
  dinner: UtensilsCrossed,
  dance: PartyPopper,
};

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, new Date(target).getTime() - now);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

/** Subtle Inset Gold Double-Line Frame & Botanical Corner Flourishes for Welcome Hero */
function WelcomeFrameOverlay() {
  return (
    <div className="pointer-events-none absolute inset-3.5 rounded-[1.6rem] border border-amber-200/35 z-5">
      {/* Top-Left Corner Flourish */}
      <svg
        viewBox="0 0 40 40"
        className="absolute -top-1 -left-1 w-6 h-6 text-amber-200/80 fill-none stroke-current"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 36V12C4 7.6 7.6 4 12 4H36" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>

      {/* Top-Right Corner Flourish */}
      <svg
        viewBox="0 0 40 40"
        className="absolute -top-1 -right-1 w-6 h-6 text-amber-200/80 fill-none stroke-current scale-x-[-1]"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 36V12C4 7.6 7.6 4 12 4H36" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>

      {/* Bottom-Left Corner Flourish */}
      <svg
        viewBox="0 0 40 40"
        className="absolute -bottom-1 -left-1 w-6 h-6 text-amber-200/80 fill-none stroke-current scale-y-[-1]"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 36V12C4 7.6 7.6 4 12 4H36" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>

      {/* Bottom-Right Corner Flourish */}
      <svg
        viewBox="0 0 40 40"
        className="absolute -bottom-1 -right-1 w-6 h-6 text-amber-200/80 fill-none stroke-current scale-[-1]"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <path d="M4 36V12C4 7.6 7.6 4 12 4H36" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    </div>
  );
}

/** 4.3 Welcome Section */
export function WelcomeSection() {
  const c = useCountdown(wedding.date);
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-6 pb-10 text-center">
      {/* 1. Original Hand-Painted Udaipur Venue Background */}
      <img
        src={wedding.welcome.heroImage}
        alt={`${wedding.couple.partnerA} and ${wedding.couple.partnerB}'s venue in ${wedding.city}`}
        width={1088}
        height={1632}
        className="animate-drift absolute inset-0 h-full w-full object-cover object-top md:object-center"
      />

      {/* 2. Rich Dark Scrim Gradient Overlay for 100% Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/12 pointer-events-none" />

      {/* 3. Inset Gold Frame & Botanical Corner Flourishes */}
      <WelcomeFrameOverlay />

      {/* 4. Transparent Line-Art Decorative Overlay SVGs */}
      <BotanicalSprigLeft className="absolute top-4 left-2 w-28 h-28 text-white/30 opacity-30 rotate-[-12deg] pointer-events-none z-1" />
      <BotanicalSprigRight className="absolute top-4 right-2 w-28 h-28 text-white/30 opacity-30 rotate-[15deg] pointer-events-none z-1" />

      {/* 5. Content Container (Shifted Higher Up) */}
      <div className="relative z-10 w-full max-w-sm mb-2">
        {/* Eyebrow Label inside a Glassmorphic Pill Badge */}
        <Reveal>
          <div className="inline-flex items-center rounded-full border border-amber-200/35 bg-black/45 backdrop-blur-md px-4 py-1 text-[0.66rem] uppercase tracking-[0.32em] text-amber-100 font-medium shadow-xs">
            {wedding.welcome.headline}
          </div>
        </Reveal>

        {/* Larger & Bolder Couple Names */}
        <Reveal delay={150}>
          <h1 className="mt-3.5 font-display text-5xl md:text-6xl leading-[1.02] text-white font-medium drop-shadow-xl tracking-wide">
            {wedding.couple.partnerA}
            <span className="block my-1 font-script text-3xl md:text-4xl text-amber-200/95 drop-shadow-sm">and</span>
            {wedding.couple.partnerB}
          </h1>
        </Reveal>

        {/* Ornament & Two-Line Date + Venue Layout */}
        <Reveal delay={300}>
          <Ornament className="mx-auto mt-3.5 text-amber-200/80 filter drop-shadow-xs" />
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-amber-100 font-medium drop-shadow-sm">
            {wedding.dateLabel}
          </p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-amber-200/85 font-medium drop-shadow-sm">
            {wedding.city}
          </p>
        </Reveal>

        {/* Live Countdown Grid — Glassmorphic Dark Cards with Enhanced Breathing Room (mt-10) */}
        {wedding.welcome.countdown && (
          <Reveal delay={420}>
            <div className="mt-10 grid grid-cols-4 gap-2">
              {[
                ["Days", c.days],
                ["Hrs", c.hours],
                ["Min", c.minutes],
                ["Sec", c.seconds],
              ].map(([label, value]) => (
                <div key={label as string} className="rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md px-1 py-3.5 shadow-lg">
                  <p className="font-display text-2xl text-white font-normal">{String(value).padStart(2, "0")}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-amber-200/90 font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Scroll Indicator — Preserved */}
        <ChevronDown className="animate-nudge mx-auto mt-7 h-5 w-5 text-amber-100/80 drop-shadow-sm" />
      </div>
    </section>
  );
}

/** 4.4 Event / Schedule */
export function EventSection() {
  function addToCalendar() {
    const stamp = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const baseDate = new Date(wedding.date);

    const eventsIcs = wedding.days.flatMap((d, dayIndex) =>
      d.events.map((e) => {
        const dt = new Date(baseDate.getTime() + (dayIndex - (wedding.days.length - 1)) * 86400000);
        const parts = e.time.split(":").map(Number);
        const hrs = parts[0];
        const mins = parts[1];
        if (hrs !== undefined && mins !== undefined && !isNaN(hrs) && !isNaN(mins)) {
          dt.setHours(hrs, mins, 0, 0);
        }
        const dtEnd = new Date(dt.getTime() + 2 * 3600 * 1000);

        return [
          "BEGIN:VEVENT",
          `DTSTART:${stamp(dt)}`,
          `DTEND:${stamp(dtEnd)}`,
          `SUMMARY:${wedding.couple.partnerA} & ${wedding.couple.partnerB} — ${e.title}`,
          `DESCRIPTION:${e.desc}`,
          `LOCATION:${"location" in e && e.location ? e.location : wedding.travel.venueName}`,
          "END:VEVENT",
        ].join("\r\n");
      })
    );

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Digital Yesh//Wedding Invitation//EN",
      ...eventsIcs,
      "END:VCALENDAR",
    ].join("\r\n");

    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-schedule.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  const totalEvents = wedding.days.reduce((acc, d) => acc + d.events.length, 0);
  let globalEventCounter = 0;

  return (
    <section className="relative event-bg-pattern px-6 py-20 text-center overflow-hidden">
      {/* Background Decorative Line-Art Ornaments (Non-interactive, Aria-hidden, Low Opacity, 100% Transparent) */}
      <BotanicalSprigLeft className="absolute top-20 -left-2 rotate-[-12deg] opacity-20" />
      <BotanicalSprigRight className="absolute top-[34%] -right-2 rotate-[15deg] opacity-20" />
      <PalmLeafAccent className="absolute top-[58%] -left-3 opacity-25" />
      <EveningStarAccent className="absolute top-[78%] right-2 opacity-25" />

      {/* Header Section */}
      <Reveal>
        <div className="flex flex-col items-center">
          <img
            src="/couple_dancing.png"
            alt="Dancing couple line art"
            width={200}
            height={200}
            className="h-32 w-auto object-contain opacity-85"
          />
          <p className="mt-4 text-[0.66rem] uppercase tracking-[0.32em] text-accent/90 font-medium">
            WHAT WE HAVE PLANNED FOR YOU
          </p>
          <h2 className="mt-1 font-script text-5xl md:text-6xl text-primary font-normal leading-tight tracking-wide">
            Order of the Day
          </h2>
          <Ornament className="mx-auto mt-2" />

          <button
            onClick={addToCalendar}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 backdrop-blur-xs px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-foreground shadow-xs transition-transform duration-300 active:scale-[0.98]"
          >
            <CalendarPlus className="h-3.5 w-3.5 text-accent" /> Add Full Schedule to Calendar
          </button>
        </div>
      </Reveal>

      {/* Sequential Event Flow */}
      <div className="mx-auto mt-14 max-w-sm">
        {wedding.days.map((d) => (
          <div key={d.label} className="w-full">
            {/* Inline Day Heading Break */}
            <Reveal>
              <div className="my-8 flex flex-col items-center text-center">
                <DayHeadingFlourish className="mb-2" />
                <h3 className="font-display text-2xl md:text-3xl text-foreground font-normal tracking-wide">
                  {d.label}
                </h3>
                {d.dateLabel && (
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-accent font-medium">
                    {d.dateLabel}
                  </p>
                )}
                <DayHeadingFlourish className="mt-2 rotate-180" />
              </div>
            </Reveal>

            {/* Day Events */}
            {d.events.map((e, i) => {
              globalEventCounter++;
              const isLastEventInSchedule = globalEventCounter === totalEvents;

              return (
                <Reveal key={`${d.label}-${e.title}`} delay={i * 80}>
                  <div className="flex flex-col items-center text-center">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.26em] text-accent/90">
                      {e.time}
                    </p>
                    <h4 className="mt-1 font-display text-2xl md:text-3xl text-foreground font-normal leading-snug">
                      {e.title}
                    </h4>
                    <p className="mt-1 max-w-xs text-sm leading-relaxed text-muted-foreground/90 font-sans">
                      {e.desc}
                    </p>
                    {"location" in e && e.location && (
                      <p className="mt-1.5 flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 text-accent" /> {e.location}
                      </p>
                    )}

                    {!isLastEventInSchedule && (
                      <div className="my-7 h-12 w-px bg-accent/40" />
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        ))}
      </div>

      {/* Closing Flourish Illustration — Option C Approved Line Art */}
      <Reveal delay={200}>
        <div className="mt-12 flex justify-center">
          <img
            src="/palm_gate.png"
            alt="Garden gate single-line art flourish"
            width={400}
            height={300}
            className="w-full max-w-xs md:max-w-sm object-contain opacity-85"
          />
        </div>
      </Reveal>
    </section>
  );
}

/** 4.5 Gallery — Single-Line Olive-Green Journey Map & Organic Photo Vignettes */
export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);
  const photos = wedding.gallery.photos;

  // Milestone icon mapping per photo vignette
  const MILESTONE_ICONS = [Coffee, Gem, Wine, Sparkles, Heart];

  // Formatted captions with serif + script pairing
  const FORMATTED_CAPTIONS = [
    { chapter: "CHAPTER I", main: "Where", script: "it", tail: "Began" },
    { chapter: "CHAPTER II", main: "The", script: "sweet", tail: "Proposal" },
    { chapter: "CHAPTER III", main: "Planning", script: "the", tail: "Table" },
    { chapter: "CHAPTER IV", main: "Us,", script: "mostly", tail: "Laughing" },
    { chapter: "CHAPTER V", main: "Always", script: "& forever", tail: "Together" },
  ];

  // Organic rotations & deckle shapes per photo card
  const CARD_CONFIGS = [
    { rotation: "rotate-[-3.5deg]", outerShape: "rounded-[2.2rem_1.2rem_2.5rem_1.4rem]", innerShape: "rounded-[1.8rem_0.9rem_2.1rem_1.1rem]" },
    { rotation: "rotate-[3.2deg]", outerShape: "rounded-[1.3rem_2.4rem_1.2rem_2.5rem]", innerShape: "rounded-[1rem_2rem_0.9rem_2.1rem]" },
    { rotation: "rotate-[-2deg]", outerShape: "rounded-[2.4rem_1.1rem_2.2rem_1.3rem]", innerShape: "rounded-[2rem_0.8rem_1.8rem_1rem]" },
    { rotation: "rotate-[3.8deg]", outerShape: "rounded-[1.2rem_2.3rem_1.4rem_2.6rem]", innerShape: "rounded-[0.9rem_1.9rem_1.1rem_2.2rem]" },
    { rotation: "rotate-[-2.8deg]", outerShape: "rounded-[2.1rem_1.4rem_2.3rem_1.2rem]", innerShape: "rounded-[1.7rem_1.1rem_1.9rem_0.9rem]" },
  ];

  // Handwritten journal micro-annotations between chapters
  const JOURNAL_ANNOTATIONS = [
    { text: "next chapter ⟶ ♡", rotation: "rotate-[-5deg]", position: "right-4 top-0" },
    { text: "our favourite day ♡", rotation: "rotate-[4deg]", position: "left-4 top-0" },
    { text: "the best memories...", rotation: "rotate-[-3deg]", position: "right-4 top-0" },
    { text: "forever & always... ♡", rotation: "rotate-[5deg]", position: "left-4 top-0" },
  ];

  return (
    <section className="relative px-5 py-24 text-center overflow-hidden bg-background">
      {/* Background Olive-Green Line Art Botanical Accent Vines */}
      <div className="absolute top-10 left-3 opacity-20 pointer-events-none z-0">
        <BotanicalSprigLeft className="w-36 h-48 text-primary" />
      </div>
      <div className="absolute bottom-10 right-3 opacity-20 pointer-events-none z-0">
        <BotanicalSprigRight className="w-36 h-48 text-primary" />
      </div>

      {/* Integrated Section Header */}
      <Reveal>
        <div className="relative z-10 flex flex-col items-center">
          <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent/90 font-medium">
            A FEW FAVOURITES
          </p>
          <h2 className="mt-1 font-script text-5xl md:text-6xl text-primary font-normal leading-tight tracking-wide">
            {wedding.gallery.title}
          </h2>
          <Ornament className="mx-auto mt-2" />
        </div>
      </Reveal>

      {/* Single-Line Olive-Green Winding Journey Container */}
      <div className="relative z-10 mx-auto mt-14 flex w-full max-w-sm flex-col items-center gap-12">
        {photos.map((p, i) => {
          const IconComponent = MILESTONE_ICONS[i % MILESTONE_ICONS.length] || Coffee;
          const cap = FORMATTED_CAPTIONS[i % FORMATTED_CAPTIONS.length] || {
            chapter: `MOMENT 0${i + 1}`,
            main: p.caption,
            script: "and",
            tail: "More",
          };
          const cfg = CARD_CONFIGS[i % CARD_CONFIGS.length] || CARD_CONFIGS[0]!;
          const isLeft = i % 2 === 0;

          return (
            <div key={p.caption} className="relative flex flex-col items-center w-full">
              <Reveal delay={i * 90} className="w-full">
                <div
                  className={`relative flex w-full ${
                    isLeft ? "justify-start pl-2" : "justify-end pr-2"
                  }`}
                >
                  {/* Thin Single-Line Olive-Green Waypoint Stamp sitting directly ON path */}
                  <div
                    className={`absolute top-[-1.25rem] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-card/95 text-primary shadow-xs ${
                      isLeft ? "left-7" : "right-7"
                    }`}
                  >
                    <IconComponent className="h-4.5 w-4.5" />
                  </div>

                  {/* Main Photo Anchor Container */}
                  <div className={`relative w-[88%] max-w-[270px] ${cfg.rotation} cursor-pointer`}>
                    {/* Integrated Soft Paper Shadow (Illustration Lighting World) */}
                    <div
                      className={`absolute inset-1.5 bg-primary/15 blur-md translate-y-2 -z-1 ${cfg.outerShape}`}
                    />

                    {/* Organic Paper Deckle Frame */}
                    <button
                      onClick={() => setOpen(i)}
                      className={`group relative block w-full bg-card/95 p-2 pb-4 text-center border-2 border-primary/30 shadow-xs transition-transform duration-300 active:scale-[0.98] hover:rotate-0 ${cfg.outerShape}`}
                    >
                      {/* Image Wrapper with Color Harmonization Tint */}
                      <div className={`relative w-full h-[215px] overflow-hidden ${cfg.innerShape}`}>
                        <img
                          src={p.src}
                          alt={p.caption}
                          loading="lazy"
                          width={900}
                          height={1125}
                          className="h-full w-full object-cover"
                        />
                        {/* Subtle Warm Color Harmonization Overlay Tint */}
                        <div className="absolute inset-0 bg-amber-100/15 mix-blend-soft-light pointer-events-none" />
                      </div>

                      {/* Refined Serif + Script Caption Pairing */}
                      <div className="mt-3 text-center">
                        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent font-medium">
                          {cap.chapter}
                        </p>
                        <h3 className="mt-0.5 font-display text-2xl text-foreground font-normal tracking-wide">
                          {cap.main}{" "}
                          <span className="font-script text-2xl text-primary mx-0.5 font-normal">
                            {cap.script}
                          </span>{" "}
                          {cap.tail}
                        </h3>
                      </div>
                    </button>

                    {/* Asymmetric Overlapping Corner Linework (Z-30) */}
                    <svg
                      viewBox="0 0 60 60"
                      className={`absolute -top-3.5 ${
                        isLeft ? "-left-3.5" : "-right-3.5 scale-x-[-1]"
                      } w-14 h-14 text-primary fill-primary/25 stroke-current z-30 pointer-events-none filter drop-shadow-xs`}
                      strokeWidth="1.3"
                      aria-hidden="true"
                    >
                      <path d="M10 40 C 15 25, 25 15, 45 10 C 35 25, 25 35, 10 40 Z" />
                      <path d="M18 28 C 22 18, 30 14, 38 10" />
                      <path d="M12 36 C 20 32, 28 24, 32 16" />
                    </svg>

                    {/* Extended Botanical Vine Branch Connecting Card i to Card i+1 (Z-20) */}
                    {i < photos.length - 1 && (
                      isLeft ? (
                        <ExtendedBranchLeftToRight className="absolute -bottom-28 -left-4 z-20 opacity-80" />
                      ) : (
                        <ExtendedBranchRightToLeft className="absolute -bottom-28 -right-4 z-20 opacity-80" />
                      )
                    )}
                  </div>
                </div>
              </Reveal>

              {/* Decorative Twisting Vine Path + Embedded Milestone Markers & Handwritten Annotations */}
              {i < photos.length - 1 && (
                <div className="relative w-full my-2 flex flex-col items-center justify-center min-h-[4.8rem]">
                  {/* Handwritten Journal Micro-Annotation */}
                  {JOURNAL_ANNOTATIONS[i] && (
                    <div
                      className={`absolute z-20 pointer-events-none ${JOURNAL_ANNOTATIONS[i].position} ${JOURNAL_ANNOTATIONS[i].rotation} opacity-80`}
                    >
                      <span className="font-script text-lg text-primary font-normal leading-none select-none">
                        {JOURNAL_ANNOTATIONS[i].text}
                      </span>
                    </div>
                  )}

                  {/* Standalone Illustrated Journey Filler Moment per Gap */}
                  {i === 0 && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-10 z-10 pointer-events-none rotate-6">
                      <BirdSketch className="w-9 h-7 text-primary/70" />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 left-10 z-10 pointer-events-none -rotate-12">
                      <ButterflySketch className="w-8 h-8 text-primary/70" />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-10 z-10 pointer-events-none rotate-12">
                      <FloatingPetalsSketch className="w-10 h-10 text-primary/60" />
                    </div>
                  )}
                  {i >= 3 && (
                    <div className="absolute top-1/2 -translate-y-1/2 left-10 z-10 pointer-events-none rotate-6">
                      <ButterflySketch className="w-8 h-8 text-primary/60" />
                    </div>
                  )}

                  {/* Mid-Path Milestone Markers (Footprints & Mini Compass) */}
                  {i === 0 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-80 rotate-12">
                      <FootprintsDoodle className="w-5 h-5 text-primary/70" />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-80 -rotate-6">
                      <CompassDoodle className="w-5.5 h-5.5 text-primary/75" />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-80 rotate-45">
                      <FootprintsDoodle className="w-5 h-5 text-accent/80" />
                    </div>
                  )}
                  {i >= 3 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-80">
                      <CompassDoodle className="w-5.5 h-5.5 text-primary/75" />
                    </div>
                  )}

                  {/* Scattered Leaf Cluster Doodles inside & outside path curve */}
                  <div className={`absolute ${isLeft ? "left-12 top-1" : "right-12 top-1"} pointer-events-none opacity-75 -rotate-18`}>
                    <LeafClusterDoodle className="w-5.5 h-5.5 text-primary/60" />
                  </div>
                  <div className={`absolute ${isLeft ? "right-14 bottom-1" : "left-14 bottom-1"} pointer-events-none opacity-75 rotate-28`}>
                    <LeafClusterDoodle className="w-4.5 h-4.5 text-accent/80" />
                  </div>

                  {/* Decorative Twisting Vine Path Line */}
                  <TwistingVinePath isLeft={isLeft} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fullscreen Photo Modal */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-xs"
          onClick={() => setOpen(null)}
        >
          <button className="absolute right-4 top-4 text-background p-2" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <img
            src={photos[open]!.src}
            alt={photos[open]!.caption}
            className="max-h-[82vh] w-auto rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

/** 4.6 Family — Harmonized Sunset Gold & Terracotta Palette matching Top Artwork */
export function FamilySection() {
  return (
    <section className="relative bg-background pt-24 pb-20 overflow-hidden text-center">
      {/* Subtle Warm Printed Paper Grain & Linen Texture Overlay */}
      <PaperGrainOverlay />

      {/* Integrated Section Header — Styled with Warm Sunset-Gold Accents matching Top Painting */}
      <Reveal>
        <div className="relative z-10 flex flex-col items-center px-6">
          <p className="text-[0.66rem] uppercase tracking-[0.34em] text-[#b88636] font-medium">
            WITH THE BLESSINGS OF
          </p>
          <h2 className="mt-1 font-script text-5xl md:text-6xl text-primary font-normal leading-tight tracking-wide">
            Our Families
          </h2>
          <Ornament className="mx-auto mt-2 text-[#b88636]/80" />
        </div>
      </Reveal>

      {/* Watercolor Venue Illustration with Soft 360-Degree Vignette Mask & Blended Edges */}
      <Reveal>
        <div className="relative w-full max-w-md mx-auto h-56 sm:h-64 my-8 px-4">
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              maskImage: "radial-gradient(ellipse 92% 82% at 50% 50%, black 45%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 92% 82% at 50% 50%, black 45%, transparent 100%)",
            }}
          >
            <img
              src="/udaipur_family_art.png"
              alt="Udaipur venue watercolor scene"
              className="w-full h-full object-cover object-center scale-105"
              loading="lazy"
            />
            {/* Multi-tier Gradient Vignette Overlays for 100% Seamless Paper Melt */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-90 pointer-events-none" />
          </div>
        </div>
      </Reveal>

      {/* Family Details Container Below Artwork */}
      <div className="relative z-10 px-6 mx-auto max-w-sm flex flex-col items-center text-center">
        {/* Family Blocks with Sunset-Gold Motifs & Serif + Script Typography */}
        <div className="w-full space-y-10 sm:space-y-12">
          {wedding.families.map((f, i) => {
            // Split name around "&" to apply refined Serif + Calligraphic Script pairing
            const parts = f.names.split(" & ");
            const firstName = parts[0] || f.names;
            const secondName = parts[1] || "";

            // Highlight key emotional words ("joy" / "blessings") with calligraphic script accent (matching Our Story captions)
            const renderFormattedNote = (noteText: string) => {
              const wordsToHighlight = ["joy", "blessings"];
              const regex = new RegExp(`\\b(${wordsToHighlight.join("|")})\\b`, "gi");
              const noteParts = noteText.split(regex);

              return noteParts.map((part, index) => {
                if (wordsToHighlight.includes(part.toLowerCase())) {
                  return (
                    <span key={index} className="font-script text-xl sm:text-2xl text-primary font-normal mx-0.5 inline-block">
                      {part}
                    </span>
                  );
                }
                return <span key={index}>{part}</span>;
              });
            };

            return (
              <Reveal key={f.names} delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  {/* Decorative Sunset-Gold Label Icon (Lotus for Bride, Diya for Groom) */}
                  <div className="inline-flex items-center justify-center gap-2">
                    {i === 0 ? (
                      <LotusMotif className="w-5 h-4 text-[#c28e38]" />
                    ) : (
                      <DiyaMotif className="w-5 h-4 text-[#c87d55]" />
                    )}
                    <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#b88636] font-medium">
                      {f.label}
                    </p>
                    {i === 0 ? (
                      <LotusMotif className="w-5 h-4 text-[#c28e38] scale-x-[-1]" />
                    ) : (
                      <DiyaMotif className="w-5 h-4 text-[#c87d55] scale-x-[-1]" />
                    )}
                  </div>

                  {/* Refined Serif + Script Name Pairing (matching Our Story captions) */}
                  <h3 className="mt-2 font-display text-2xl sm:text-[1.75rem] text-foreground font-normal tracking-wide">
                    {firstName}{" "}
                    {secondName && (
                      <>
                        <span className="font-script text-2xl sm:text-3xl text-primary mx-1 font-normal">
                          &
                        </span>{" "}
                        {secondName}
                      </>
                    )}
                  </h3>

                  {/* Refined Welcome Note with Script Word Highlight */}
                  <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground font-sans">
                    {renderFormattedNote(f.note)}
                  </p>

                  {/* Traditional Sunset-Gold Paisley & Kalash Divider Between Family Blocks */}
                  {i === 0 && <MandalaPaisleyDivider className="text-[#b88636]" />}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Unique Closing Decorative End-Cap Flourish */}
        <Reveal delay={240}>
          <FamilySectionEndCap className="mx-auto mt-10 sm:mt-12" />
        </Reveal>
      </div>
    </section>
  );
}

/** 4.11 Thank You */
export function ThankYouSection() {
  const names = useMemo(
    () => `${wedding.couple.partnerA} & ${wedding.couple.partnerB}`,
    [],
  );
  return (
    <section className="paper px-6 py-24 text-center">
      <Reveal>
        <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent/90 font-medium">
          WITH ALL OUR LOVE
        </p>
        <h2 className="mt-1 font-script text-5xl md:text-6xl text-primary font-normal leading-tight tracking-wide">
          {names}
        </h2>
        <Ornament className="mx-auto mt-2" />
        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-accent font-medium">{wedding.dateLabel}</p>
        <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {wedding.thankYou.message}
        </p>
        {wedding.thankYou.attribution && (
          <div className="mt-12 flex items-center justify-center gap-1.5 font-sans text-[0.66rem] uppercase tracking-[0.26em] text-muted-foreground/75 font-medium">
            <span>Made with</span>
            <Heart className="h-3 w-3 stroke-[1.8] text-[#c45b5b] fill-[#c45b5b]/30 inline-block animate-pulse" />
            <span>for {names}</span>
          </div>
        )}
      </Reveal>
    </section>
  );
}
