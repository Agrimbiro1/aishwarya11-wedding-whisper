import { useState, useEffect, useRef } from "react";
import { Check, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { useGuestName, formatGuestSalutation } from "@/lib/guest";
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
  RsvpOpeningSceneMotif,
  JourneyThreadConnector,
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
        const card = cards[idx];
        const container = scrollRef.current;
        const targetLeft = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
        container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
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
  const [isAccepted, setIsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleAccept() {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsAccepted(true);
    }, 500);
  }

  function handleRevert() {
    setIsAccepted(false);
  }

  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Background Texture & Scattered Mid-Section Standalone Motifs */}
      <div className="pointer-events-none absolute top-8 left-6 opacity-30">
        <LeafSprigMotif className="h-10 w-10 -rotate-45 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute bottom-12 right-6 opacity-30">
        <BirdMotif className="h-8 w-8 rotate-12 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute top-14 right-10 opacity-25">
        <CornerDoveMotif className="h-12 w-12 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute bottom-24 left-8 opacity-20">
        <FloatingHeartMotif className="h-6 w-6 text-[#b88636]" />
      </div>

      {/* Mid-Section Standalone Motifs for Depth & Consistency */}
      <div className="pointer-events-none absolute top-1/3 left-8 opacity-25">
        <BirdMotif className="h-7 w-7 -rotate-12 text-[#4d684f]" />
      </div>
      <div className="pointer-events-none absolute top-1/2 right-8 opacity-20">
        <FloatingHeartMotif className="h-7 w-7 rotate-12 text-[#b88636]" />
      </div>
      <div className="pointer-events-none absolute top-28 right-1/4 opacity-20">
        <LeafSprigMotif className="h-8 w-8 rotate-45 text-[#4d684f]" />
      </div>

      {/* Confetti Dot Accents */}
      <div className="pointer-events-none absolute top-1/4 left-1/5 h-1.5 w-1.5 rounded-full bg-[#4d684f]/25" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-1.5 w-1.5 rounded-full bg-[#b88636]/30" />
      <div className="pointer-events-none absolute bottom-1/3 left-1/3 h-1.5 w-1.5 rounded-full bg-[#4d684f]/25" />

      {/* 1 & 2. Top Header Accent & Expanded Ornamental Divider */}
      <Reveal>
        <SectionTitle
          eyebrow={wedding.rsvp.deadlineLabel}
          title="We Hope You Can Make It"
          customOrnament={<RsvpOpeningSceneMotif className="mx-auto mt-2" />}
        />
      </Reveal>

      {/* Main Invitation Card Container — Elevated Double-Line Gold Border */}
      <Reveal delay={100}>
        <div className="relative mx-auto mt-8 max-w-sm rounded-2xl border-2 border-[#b88636]/60 bg-[#fcfaf5] p-1 shadow-lg backdrop-blur-sm">
          {/* Inner Frame */}
          <div className="relative rounded-xl border border-[#b88636]/40 bg-[#faf6ef]/90 p-7 text-center overflow-hidden">
            {/* Unified Continuous Background Watermark Scene */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2 opacity-15 mix-blend-multiply">
              <img
                src="/assets/udaipur_rsvp_journey.svg"
                alt=""
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Ornate Gold Corner Flourishes */}
            <svg className="pointer-events-none absolute top-1.5 left-1.5 h-6 w-6 text-[#b88636]/80" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M 3 14 V 5 C 3 3.895 3.895 3 5 3 H 14" />
              <path d="M 7 10 V 7 H 10" />
              <circle cx="5" cy="5" r="1.2" fill="currentColor" fillOpacity="0.5" />
              <path d="M 12 3 C 8 3 3 8 3 12" strokeDasharray="1.5 1.5" />
            </svg>
            <svg className="pointer-events-none absolute top-1.5 right-1.5 h-6 w-6 text-[#b88636]/80" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M 29 14 V 5 C 29 3.895 28.105 3 27 3 H 18" />
              <path d="M 25 10 V 7 H 22" />
              <circle cx="27" cy="5" r="1.2" fill="currentColor" fillOpacity="0.5" />
              <path d="M 20 3 C 24 3 29 8 29 12" strokeDasharray="1.5 1.5" />
            </svg>
            <svg className="pointer-events-none absolute bottom-1.5 left-1.5 h-6 w-6 text-[#b88636]/80" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M 3 18 V 27 C 3 28.105 3.895 29 5 29 H 14" />
              <path d="M 7 22 V 25 H 10" />
              <circle cx="5" cy="27" r="1.2" fill="currentColor" fillOpacity="0.5" />
              <path d="M 12 29 C 8 29 3 24 3 20" strokeDasharray="1.5 1.5" />
            </svg>
            <svg className="pointer-events-none absolute bottom-1.5 right-1.5 h-6 w-6 text-[#b88636]/80" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M 29 18 V 27 C 29 28.105 28.105 29 27 29 H 18" />
              <path d="M 25 22 V 25 H 22" />
              <circle cx="27" cy="27" r="1.2" fill="currentColor" fillOpacity="0.5" />
              <path d="M 20 29 C 24 29 29 24 29 20" strokeDasharray="1.5 1.5" />
            </svg>

          {isAccepted ? (
            /* Personalised Thank You State */
            <div className="relative z-10 space-y-4 py-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#b88636]/40 bg-[#b88636]/10 text-[#b88636]">
                <WaxSealStampIcon className="h-7 w-7" />
              </div>

              <div className="space-y-1">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.26em] text-[#b88636]">RSVP Confirmed</p>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  Thank you, {guestName}!
                </h3>
              </div>

              <p className="font-serif italic text-sm leading-relaxed text-[#3d543e]">
                "Your presence is our greatest gift. We cannot wait to celebrate with you in Udaipur!"
              </p>

              {/* 5. Revert Option with Gentle Flower/Envelope Icon */}
              <div className="pt-3 border-t border-[#b88636]/20">
                <button
                  onClick={handleRevert}
                  className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#4d684f] transition-all hover:text-[#b88636] hover:underline underline-offset-4"
                >
                  <HeartFlowerIcon className="h-3.5 w-3.5 text-[#4d684f]" />
                  <span>Revert RSVP</span>
                </button>
              </div>
            </div>
          ) : (
            /* Original State with Joyfully Accept Button */
            <div className="relative z-10 space-y-5 py-2">
              {/* BUG FIX Verification: Clean Salutation Format */}
              <div className="space-y-1.5">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.28em] text-[#4d684f]">
                  Personal Invitation
                </p>
                <p className="font-display text-xl font-medium text-foreground">
                  <strong className="font-semibold text-[#4d684f]">{formatGuestSalutation(guestName)}</strong>,
                </p>
                <p className="font-serif italic text-xs leading-relaxed text-muted-foreground">
                  Your presence is warmly requested at {wedding.couple.partnerA} & {wedding.couple.partnerB}'s wedding.
                </p>
              </div>

              {/* 4. Joyfully Accept Button & Refined Single-Line Olive Ink Accents */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {/* Left Leaf Sprig */}
                <svg className="h-4 w-5 text-[#4d684f]/70" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  <path d="M 22 8 Q 12 8, 2 8" />
                  <path d="M 14 8 C 10 5, 8 4, 10 2 C 12 5, 15 7, 14 8 Z" fill="currentColor" fillOpacity="0.25" />
                  <path d="M 8 8 C 4 11, 2 12, 4 14 C 6 11, 9 9, 8 8 Z" fill="currentColor" fillOpacity="0.25" />
                </svg>

                <button
                  onClick={handleAccept}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 rounded-full bg-[#4d684f] px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-md transition-all hover:bg-[#3d543e] active:scale-95 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                  ) : (
                    <span>Joyfully Accept</span>
                  )}
                </button>

                {/* Right Leaf Sprig */}
                <svg className="h-4 w-5 text-[#4d684f]/70" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
                  <path d="M 2 8 Q 12 8, 22 8" />
                  <path d="M 10 8 C 14 5, 16 4, 14 2 C 12 5, 9 7, 10 8 Z" fill="currentColor" fillOpacity="0.25" />
                  <path d="M 16 8 C 20 11, 22 12, 20 14 C 18 11, 15 9, 16 8 Z" fill="currentColor" fillOpacity="0.25" />
                </svg>
              </div>
            </div>
          )}
          </div>
        </div>
      </Reveal>

      {/* Visual Color-Thread Continuity Connector ("Invitation -> Your Journey to Us") */}
      <Reveal delay={150}>
        <div className="flex justify-center -mt-6 -mb-6 relative z-20 pointer-events-none">
          <JourneyThreadConnector />
        </div>
      </Reveal>

      {/* Standalone Detailed "Journey to Udaipur Wedding" Vector Illustration Asset (Directly on Page Background, NO Box/Card) */}
      <Reveal delay={200}>
        <div className="mx-auto mt-2 max-w-sm text-center">
          <img
            src="/assets/udaipur_rsvp_journey.svg"
            alt="Journey to Udaipur Wedding"
            className="mx-auto h-auto w-full max-w-[300px] pointer-events-none select-none"
          />
          <p className="mt-3 font-serif italic text-xs text-[#4d684f]">
            "A celebratory journey through Udaipur to Aanya & Rahul's wedding mandap."
          </p>
        </div>
      </Reveal>
    </section>
  );
}
