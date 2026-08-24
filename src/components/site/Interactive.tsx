import { useState, useEffect, useRef } from "react";
import { Check, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { useGuestName } from "@/lib/guest";
import {
  SectionTitle,
  JoinedHandsOrnament,
  FeatherQuillIcon,
  CardPinMotif,
  HeartFlowerIcon,
  WaxSealStampIcon,
  BirdMotif,
  LeafSprigMotif,
  CornerDoveMotif,
  FloatingHeartMotif,
  RibbonBowDivider,
} from "./Ornament";

type Wish = { id: string; name: string; message: string; at: string };

const SEED: Wish[] = [
  { id: "1", name: "Meera", message: "So happy for you both. Cannot wait to dance at the sangeet!", at: "2 days ago" },
  { id: "2", name: "Dev & Ruchi", message: "Wishing you a lifetime of quiet mornings and loud celebrations.", at: "5 days ago" },
  { id: "3", name: "Karan & Ananya", message: "May your love grow stronger with every passing day!", at: "6 days ago" },
];

/** 4.7 Wishing Wall */
export function WishingWallSection() {
  const [wishes, setWishes] = useState<Wish[]>(SEED);
  const [guestName] = useGuestName();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [justPinnedId, setJustPinnedId] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll wish cards every 3.5 seconds unless user hovers or interacts
  useEffect(() => {
    if (wishes.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % wishes.length;
        scrollToCard(next);
        return next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [wishes.length, isPaused]);

  function scrollToCard(idx: number) {
    if (scrollRef.current) {
      const cards = scrollRef.current.querySelectorAll<HTMLElement>(".wish-card");
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }

  function handlePrev() {
    setIsPaused(true);
    const next = currentIndex === 0 ? wishes.length - 1 : currentIndex - 1;
    setCurrentIndex(next);
    scrollToCard(next);
  }

  function handleNext() {
    setIsPaused(true);
    const next = (currentIndex + 1) % wishes.length;
    setCurrentIndex(next);
    scrollToCard(next);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      setError("Please write a short wish for the couple.");
      return;
    }
    setError("");
    const newId = crypto.randomUUID();
    const newWish = { id: newId, name: guestName, message: message.trim(), at: "just now" };
    setWishes((w) => [newWish, ...w]);
    setMessage("");
    setJustPinnedId(newId);
    setCurrentIndex(0);
    setTimeout(() => scrollToCard(0), 100);
    setTimeout(() => setJustPinnedId(null), 2500);
  }

  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Developed Corner Olive-Line Dove Illustrations */}
      <div className="pointer-events-none absolute top-4 left-3 md:left-8 opacity-40">
        <CornerDoveMotif className="h-16 w-16 -rotate-12 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute top-4 right-3 md:right-8 opacity-40">
        <CornerDoveMotif className="h-16 w-16 scale-x-[-1] rotate-12 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 opacity-35">
        <CornerDoveMotif className="h-14 w-14 rotate-45 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 opacity-35">
        <CornerDoveMotif className="h-14 w-14 scale-x-[-1] -rotate-45 text-[#4d684f]" />
      </div>

      {/* Floating Hearts & Feather Motifs Floating in Background */}
      <div className="pointer-events-none absolute top-1/4 left-10 opacity-25 animate-float-petal-1">
        <FloatingHeartMotif className="h-5 w-5 text-[#b88636]" />
      </div>
      <div className="pointer-events-none absolute top-1/3 right-12 opacity-25 animate-float-petal-2">
        <FeatherQuillIcon className="h-6 w-6 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 opacity-20 animate-float-petal-3">
        <FloatingHeartMotif className="h-4 w-4 text-[#b88636]" />
      </div>
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 opacity-20 animate-float-petal-1">
        <LeafSprigMotif className="h-8 w-8 text-[#4d684f]" />
      </div>

      <Reveal>
        <SectionTitle
          eyebrow="A digital guestbook"
          title="Wishing Wall"
          customOrnament={<JoinedHandsOrnament className="mx-auto mt-2" />}
        />
      </Reveal>

      <Reveal delay={100}>
        {/* Form Container — "Writing Desk & Parchment Paper" Aesthetic */}
        <div className="relative mx-auto mt-8 max-w-md rounded-2xl border-2 border-[#b88636]/40 bg-[#fcfaf5] p-6 shadow-md backdrop-blur-sm">
          {/* Parchment Fine Paper-Grain Background Texture Overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(#d8ceba_0.7px,transparent_0.7px)] [background-size:12px_12px] opacity-30" />

          {/* Inset Inner Fine Gold Foil Trim */}
          <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#b88636]/25" />

          {/* Writing Desk Leather/Paper Corner Flourishes */}
          <svg className="pointer-events-none absolute top-2 left-2 h-4.5 w-4.5 text-[#b88636]/75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M 2 10 V 4 C 2 3 3 2 4 2 H 10" />
            <path d="M 5 7 V 5 H 7" />
          </svg>
          <svg className="pointer-events-none absolute top-2 right-2 h-4.5 w-4.5 text-[#b88636]/75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M 22 10 V 4 C 22 3 21 2 20 2 H 14" />
            <path d="M 19 7 V 5 H 17" />
          </svg>
          <svg className="pointer-events-none absolute bottom-2 left-2 h-4.5 w-4.5 text-[#b88636]/75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M 2 14 V 20 C 2 21 3 22 4 22 H 10" />
            <path d="M 5 17 V 19 H 7" />
          </svg>
          <svg className="pointer-events-none absolute bottom-2 right-2 h-4.5 w-4.5 text-[#b88636]/75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M 22 14 V 20 C 22 21 21 22 20 22 H 14" />
            <path d="M 19 17 V 19 H 17" />
          </svg>

          <form onSubmit={submit} className="relative z-10 space-y-3.5">
            {/* Writing Desk Personalization Header Tag */}
            <div className="flex items-center justify-between border-b border-[#b88636]/25 pb-2.5 pt-0.5">
              <div className="flex items-center gap-1.5 text-xs text-[#4d684f]">
                <HeartFlowerIcon className="h-3.5 w-3.5 shrink-0 text-[#b88636]" />
                <span className="font-display">Writing Desk &bull; Posting as <strong className="font-semibold text-foreground">{guestName}</strong></span>
              </div>
              <span className="text-[0.56rem] font-medium uppercase tracking-[0.22em] text-[#b88636] bg-[#b88636]/10 px-2 py-0.5 rounded-full border border-[#b88636]/30">Personalized</span>
            </div>

            {/* Writing Desk Stationary Textarea Container */}
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 300))}
                placeholder={`Write a heartfelt note for ${wedding.couple.partnerA} & ${wedding.couple.partnerB}...`}
                rows={3.5}
                className="w-full resize-none rounded-lg border border-[#4d684f]/30 bg-[#ffffff]/90 pr-10 pl-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-[#4d684f] focus:ring-1 focus:ring-[#4d684f]/20 shadow-inner"
              />
              {/* Letter-Writing Feather Quill Pen Icon */}
              <div className="pointer-events-none absolute top-3 right-3 text-[#4d684f]/70 transition-opacity">
                <FeatherQuillIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              {/* Decorative Italic Secondary Character Counter */}
              <div className="flex items-center gap-1.5 font-serif italic text-xs text-[#b88636]">
                <span className="font-sans font-semibold not-italic text-[#4d684f]">{message.length}</span>
                <span className="text-[#b88636]/60">/</span>
                <span className="tracking-wide text-[#b88636]/90">300 chars</span>
              </div>

              {/* Send Wish Button Flanked with Small Decorative Leaf Sprigs */}
              <div className="flex items-center gap-1.5">
                {/* Left Leaf Sprig */}
                <svg className="h-4 w-5 text-[#4d684f]/60" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  <path d="M 22 8 Q 12 8, 2 8" />
                  <path d="M 14 8 C 10 5, 8 4, 10 2 C 12 5, 15 7, 14 8 Z" fill="currentColor" fillOpacity="0.25" />
                  <path d="M 8 8 C 4 11, 2 12, 4 14 C 6 11, 9 9, 8 8 Z" fill="currentColor" fillOpacity="0.25" />
                </svg>

                <button className="rounded-full bg-[#4d684f] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-all hover:bg-[#3d543e] active:scale-95">
                  Send wish
                </button>

                {/* Right Leaf Sprig */}
                <svg className="h-4 w-5 text-[#4d684f]/60" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  <path d="M 2 8 Q 12 8, 22 8" />
                  <path d="M 10 8 C 14 5, 16 4, 14 2 C 12 5, 9 7, 10 8 Z" fill="currentColor" fillOpacity="0.25" />
                  <path d="M 16 8 C 20 11, 22 12, 20 14 C 18 11, 15 9, 16 8 Z" fill="currentColor" fillOpacity="0.25" />
                </svg>
              </div>
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
          </form>
        </div>
      </Reveal>

      {/* Decorative Ribbon Bow Section Divider between Form & Notice Board */}
      <Reveal delay={150}>
        <RibbonBowDivider className="mx-auto my-6 h-7 w-48 text-[#4d684f]/70" />
      </Reveal>

      {/* Notice-Board Block — "Pinned Cork & Woven Linen Board" Aesthetic */}
      <div
        className="relative mx-auto max-w-2xl rounded-2xl border-4 border-[#8c734b]/50 bg-[#e8dbc4] p-5 md:p-7 shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Brass Wall Mounting Pin Eyelets at Top Left & Right */}
        <div className="pointer-events-none absolute -top-3.5 left-8 z-20 flex items-center gap-1">
          <div className="h-4 w-4 rounded-full border-2 border-[#b88636] bg-[#7c6742] shadow-sm flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-[#faf6f0]" />
          </div>
        </div>
        <div className="pointer-events-none absolute -top-3.5 right-8 z-20 flex items-center gap-1">
          <div className="h-4 w-4 rounded-full border-2 border-[#b88636] bg-[#7c6742] shadow-sm flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-[#faf6f0]" />
          </div>
        </div>

        {/* Hanging Cork Twine Threads Behind Cards */}
        <div className="pointer-events-none absolute inset-x-8 top-1.5 bottom-8 z-0 opacity-25">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="#7c6742" strokeWidth="0.8" strokeDasharray="3 2">
            <path d="M 5 0 Q 50 15, 95 0" />
            <path d="M 5 25 Q 50 40, 95 25" />
          </svg>
        </div>
        {/* Brass Wall Mounting Pin Eyelets at Top Left & Right */}
        <div className="pointer-events-none absolute -top-3.5 left-8 z-20 flex items-center gap-1">
          <div className="h-4 w-4 rounded-full border-2 border-[#b88636] bg-[#7c6742] shadow-sm flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-[#faf6f0]" />
          </div>
        </div>
        <div className="pointer-events-none absolute -top-3.5 right-8 z-20 flex items-center gap-1">
          <div className="h-4 w-4 rounded-full border-2 border-[#b88636] bg-[#7c6742] shadow-sm flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-[#faf6f0]" />
          </div>
        </div>

        {/* Distinct Cork & Burlap Stipple Pattern Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(#7c6742_1.2px,transparent_1.2px)] [background-size:9px_9px] opacity-35" />

        {/* Inner Wooden Cork Bevel Border Line */}
        <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#7c6742]/30 shadow-inner" />

        {/* Board Top Header Banner Tag with Navigation Controls */}
        <div className="relative z-10 mb-2 flex items-center justify-between border-b border-[#7c6742]/30 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b88636] shadow-sm" />
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#5c4a2d]">
              Keepsake Cork Notice Board
            </p>
          </div>

          {/* Interactive Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Wish"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#4d684f]/35 bg-[#faf6f0] text-[#4d684f] shadow-sm transition-all hover:bg-[#4d684f] hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Wish"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#4d684f]/35 bg-[#faf6f0] text-[#4d684f] shadow-sm transition-all hover:bg-[#4d684f] hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Pinned Scrapbook Wish Cards Carousel (Auto-Scrollable & Drag-scrollable) */}
        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pt-5 pb-4 px-1 scroll-smooth"
        >
          {wishes.length === 0 && (
            <div className="relative mx-auto my-3 w-[85vw] max-w-[320px] rounded-xl border border-[#4d684f]/35 bg-[#faf6f0] p-6 text-center shadow-sm">
              <div className="pointer-events-none absolute inset-1.5 rounded-lg border border-[#4d684f]/20" />
              <FeatherQuillIcon className="mx-auto h-7 w-7 text-[#4d684f]/70" />
              <p className="mt-2 font-display text-base font-medium text-foreground">The Notice Board is Empty</p>
              <p className="mt-1 font-serif text-xs italic text-muted-foreground">
                Be the first to post a wish for the couple above!
              </p>
            </div>
          )}
          {wishes.map((w, idx) => {
            const isJustPinned = w.id === justPinnedId;
            const rotationClass =
              idx % 3 === 0
                ? "-rotate-1.5 translate-y-1"
                : idx % 3 === 1
                ? "rotate-1 -translate-y-1"
                : "rotate-2 translate-y-1.5";

            const isActive = idx === currentIndex;

            return (
              <div
                key={w.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  scrollToCard(idx);
                }}
                className={`wish-card relative w-[74vw] max-w-[260px] shrink-0 snap-center cursor-pointer rounded-xl border bg-[#faf6f0] p-5 shadow-md transition-all duration-300 ${
                  isJustPinned ? "animate-pin-card-drop animate-olive-ripple border-[#4d684f] z-30 ring-2 ring-[#4d684f]/50" : ""
                } ${
                  isActive
                    ? "border-[#4d684f]/70 ring-1 ring-[#4d684f]/30 z-10 scale-[1.02]"
                    : "border-[#4d684f]/35 opacity-95 hover:opacity-100"
                } ${rotationClass}`}
              >
                {/* Brass Push-Pin Motif at Top Center with Pin Tap Animation */}
                <div className={`pointer-events-none absolute -top-3.5 left-1/2 z-20 -translate-x-1/2 ${isJustPinned ? "animate-pin-tap" : ""}`}>
                  <CardPinMotif className="h-6 w-6 text-[#b88636] drop-shadow-sm" />
                </div>

                {/* Inset Inner Accent Line */}
                <div className="pointer-events-none absolute inset-1.5 rounded-lg border border-[#4d684f]/20" />

                {/* Corner Flourishes */}
                <svg className="pointer-events-none absolute top-1.5 left-1.5 h-3.5 w-3.5 text-[#4d684f]/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M 2 8 V 3 H 7" />
                </svg>
                <svg className="pointer-events-none absolute top-1.5 right-1.5 h-3.5 w-3.5 text-[#4d684f]/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M 22 8 V 3 H 17" />
                </svg>
                <svg className="pointer-events-none absolute bottom-1.5 left-1.5 h-3.5 w-3.5 text-[#4d684f]/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M 2 16 V 21 H 7" />
                </svg>
                <svg className="pointer-events-none absolute bottom-1.5 right-1.5 h-3.5 w-3.5 text-[#4d684f]/45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M 22 16 V 21 H 17" />
                </svg>

                {/* Top Corner Wax Seal Stamp Accent */}
                <div className="pointer-events-none absolute top-3 right-3 text-[#b88636]/70">
                  <WaxSealStampIcon className="h-4.5 w-4.5" />
                </div>

                {/* Guest Name paired with Heart & Twin Leaf Motif */}
                <div className="flex items-center gap-1.5 pr-6">
                  <HeartFlowerIcon className="h-4 w-4 shrink-0 text-[#4d684f]/85" />
                  <p className="font-display text-lg font-medium text-foreground tracking-wide">{w.name}</p>
                </div>

                {/* Wish Message in Warm Note Card Typography */}
                <p className="mt-2 text-sm leading-relaxed text-[#3d543e]/90 font-serif italic">
                  "{w.message}"
                </p>

                {/* Timestamp Stamp */}
                <div className="mt-4 flex items-center justify-between border-t border-[#4d684f]/15 pt-2">
                  <span className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[#4d684f]/75">
                    {w.at}
                  </span>
                  <span className="text-[0.6rem] font-script text-[#b88636]">with love</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Bottom Olive Green & Gold Pagination Dots */}
        <div className="relative z-10 mt-1 flex items-center justify-center gap-1.5 pt-2">
          {wishes.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex(dotIdx);
                scrollToCard(dotIdx);
              }}
              aria-label={`Go to wish ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? "w-6 bg-[#b88636] ring-2 ring-[#b88636]/30 shadow-sm"
                  : "w-2 bg-[#4d684f]/40 hover:bg-[#4d684f]/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** 4.8 RSVP */
export function RsvpSection() {
  const [guestName] = useGuestName();
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({ name: guestName, contact: "", guests: "0", diet: "", note: "" });
  const [errors, setErrors] = useState<{ attending?: string; name?: string; contact?: string }>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  function set(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: { attending?: string; name?: string; contact?: string } = {};
    if (!attending) next["attending"] = "Please let us know if you can make it.";
    if (!form.name.trim()) next["name"] = "Your name is required.";
    if (!form.contact.trim()) next["contact"] = "A phone or email is required.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setState("sending");
    setTimeout(() => setState("done"), 800);
  }

  const field = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent";

  return (
    <section className="paper px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow={wedding.rsvp.deadlineLabel} title="We Hope You Can Make It" />
      </Reveal>

      {state === "done" ? (
        <Reveal>
          <div className="keepsake-card mx-auto mt-8 max-w-sm p-8 text-center">
            <Check className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-3 font-display text-2xl text-foreground">Thank you, {form.name.split(" ")[0]}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {attending === "yes"
                ? "Your RSVP is in — we can't wait to celebrate with you."
                : "We'll miss you, but thank you for letting us know."}
            </p>
            <button
              onClick={() => setState("idle")}
              className="mt-5 text-xs uppercase tracking-[0.18em] text-accent underline underline-offset-4"
            >
              Edit response
            </button>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={100}>
          <form onSubmit={submit} className="keepsake-card mx-auto mt-8 max-w-sm space-y-4 p-5">
            <div className="grid grid-cols-2 gap-2">
              {(["yes", "no"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setAttending(v);
                    setErrors((e) => ({ ...e, attending: "" }));
                  }}
                  className={`rounded-lg border px-3 py-3 text-xs uppercase tracking-[0.16em] transition-colors ${
                    attending === v ? "border-accent bg-secondary text-foreground" : "border-input text-muted-foreground"
                  }`}
                >
                  {v === "yes" ? "Joyfully accepts" : "Regretfully declines"}
                </button>
              ))}
            </div>
            {errors["attending"] && <p className="text-xs text-destructive">{errors["attending"]}</p>}

            <div>
              <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" className={field} />
              {errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}
            </div>
            <div>
              <input value={form.contact} onChange={(e) => set("contact", e.target.value)} placeholder="Phone or email" className={field} />
              {errors["contact"] && <p className="mt-1 text-xs text-destructive">{errors["contact"]}</p>}
            </div>

            {attending === "yes" && (
              <>
                {wedding.rsvp.allowPlusOnes && (
                  <label className="block text-xs text-muted-foreground">
                    Guests joining you
                    <select value={form.guests} onChange={(e) => set("guests", e.target.value)} className={`${field} mt-1`}>
                      {["0", "1", "2", "3"].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
                <input value={form.diet} onChange={(e) => set("diet", e.target.value)} placeholder="Dietary requirements (optional)" className={field} />
              </>
            )}

            <textarea
              value={form.note}
              onChange={(e) => set("note", e.target.value)}
              rows={2}
              placeholder="A note for the couple (optional)"
              className={`${field} resize-none`}
            />

            <button
              disabled={state === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground disabled:opacity-70"
            >
              {state === "sending" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              Send RSVP
            </button>
          </form>
        </Reveal>
      )}
    </section>
  );
}
