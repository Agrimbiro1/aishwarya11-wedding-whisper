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
          <h2 className="mt-4 font-script text-5xl md:text-6xl text-primary font-normal leading-tight tracking-wide">
            Order of the Day
          </h2>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground font-medium">
            What we have planned for you
          </p>

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

/** 4.5 Gallery */
export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);
  const photos = wedding.gallery.photos;

  return (
    <section className="py-20">
      <Reveal>
        <SectionTitle eyebrow="A few favourites" title={wedding.gallery.title} />
      </Reveal>

      <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
        {photos.map((p, i) => (
          <Reveal key={p.caption} delay={i * 80} className="shrink-0 snap-center">
            <button onClick={() => setOpen(i)} className="block w-[70vw] max-w-[260px] text-left">
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                width={900}
                height={1125}
                className="h-[340px] w-full rounded-2xl object-cover"
              />
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.caption}</p>
            </button>
          </Reveal>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-ink/90 p-4" onClick={() => setOpen(null)}>
          <button className="absolute right-4 top-4 text-background" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <img
            src={photos[open]!.src}
            alt={photos[open]!.caption}
            className="max-h-[80vh] w-auto rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

/** 4.6 Family */
export function FamilySection() {
  return (
    <section className="px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="With the blessings of" title="Our Families" />
      </Reveal>
      <div className="mx-auto mt-10 max-w-sm space-y-8">
        {wedding.families.map((f, i) => (
          <Reveal key={f.names} delay={i * 120}>
            <div className="text-center">
              <p className="text-[0.62rem] uppercase tracking-[0.3em] text-accent">{f.label}</p>
              <h3 className="mt-2 font-display text-2xl text-foreground">{f.names}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{f.note}</p>
              {i === 0 && <Ornament className="mx-auto mt-8 opacity-60" />}
            </div>
          </Reveal>
        ))}
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
        <Ornament className="mx-auto" />
        <h2 className="mt-6 font-display text-[2.4rem] leading-tight text-foreground">{names}</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">{wedding.dateLabel}</p>
        <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
          {wedding.thankYou.message}
        </p>
        {wedding.thankYou.attribution && (
          <p className="mt-12 text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground/70">
            Made with Digital Yesh
          </p>
        )}
      </Reveal>
    </section>
  );
}
