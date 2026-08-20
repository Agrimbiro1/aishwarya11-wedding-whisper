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

/** 4.3 Welcome */
export function WelcomeSection() {
  const c = useCountdown(wedding.date);
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-end overflow-hidden px-6 pb-14 text-center">
      <img
        src={wedding.welcome.heroImage}
        alt={`${wedding.couple.partnerA} and ${wedding.couple.partnerB} at their venue`}
        width={1088}
        height={1632}
        className="animate-drift absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/50 to-background" />

      <div className="relative w-full max-w-sm">
        <Reveal>
          <p className="text-[0.66rem] uppercase tracking-[0.36em] text-muted-foreground">
            {wedding.welcome.headline}
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="mt-4 font-display text-[3rem] leading-[1.05] text-foreground">
            {wedding.couple.partnerA}
            <span className="block text-2xl text-accent">and</span>
            {wedding.couple.partnerB}
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <Ornament className="mx-auto mt-5" />
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-muted-foreground">
            {wedding.dateLabel} · {wedding.city}
          </p>
        </Reveal>

        {wedding.welcome.countdown && (
          <Reveal delay={420}>
            <div className="mt-8 grid grid-cols-4 gap-2">
              {[
                ["Days", c.days],
                ["Hrs", c.hours],
                ["Min", c.minutes],
                ["Sec", c.seconds],
              ].map(([label, value]) => (
                <div key={label as string} className="keepsake-card px-1 py-3">
                  <p className="font-display text-2xl text-foreground">{String(value).padStart(2, "0")}</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <ChevronDown className="animate-nudge mx-auto mt-10 h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}

/** 4.4 Event / Schedule */
export function EventSection() {
  const [day, setDay] = useState(0);
  const active = wedding.days[day];

  function addToCalendar() {
    const dt = new Date(wedding.date);
    const stamp = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${stamp(dt)}`,
      `DTEND:${stamp(new Date(dt.getTime() + 6 * 3600 * 1000))}`,
      `SUMMARY:${wedding.couple.partnerA} & ${wedding.couple.partnerB} — Wedding`,
      `LOCATION:${wedding.travel.venueName}, ${wedding.travel.address}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="What to expect" title="Order of the Day" />
      </Reveal>

      <Reveal delay={120}>
        <div className="mx-auto mt-8 flex max-w-sm gap-2 rounded-full border border-border bg-card p-1">
          {wedding.days.map((d, i) => (
            <button
              key={d.label}
              onClick={() => setDay(i)}
              className={`flex-1 rounded-full px-3 py-2 text-xs tracking-wide transition-colors ${
                i === day ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="relative mx-auto mt-10 max-w-sm pl-7">
        <div className="absolute bottom-2 left-[7px] top-2 w-px bg-border" />
        {active.events.map((e, i) => {
          const Icon = ICONS[e.icon] ?? Gem;
          return (
            <Reveal key={`${active.label}-${e.title}`} delay={i * 90}>
              <div className="relative pb-8">
                <span className="absolute -left-7 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-accent bg-background">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">{e.time}</p>
                <h3 className="mt-1 flex items-center gap-2 font-display text-xl text-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  {e.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                {"location" in e && e.location && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {e.location}
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <button
          onClick={addToCalendar}
          className="mx-auto mt-2 flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-foreground"
        >
          <CalendarPlus className="h-3.5 w-3.5" /> Add to calendar
        </button>
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
            src={photos[open].src}
            alt={photos[open].caption}
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
