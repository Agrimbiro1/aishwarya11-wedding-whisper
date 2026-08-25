import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { SectionTitle, TravelJourneyConnector } from "./Ornament";

interface TravelCardProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badge?: {
    text: string;
    icon?: React.ReactNode;
  };
  illustrationSrc: string;
  illustrationAlt: string;
  illustrationMaxWidth?: string;
  description: string;
  actionButton?: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  };
  secondaryText?: string;
}

/** Shared reusable Travel Card component sitting directly on page background (no card wrapper) */
function TravelCard({
  eyebrow,
  title,
  subtitle,
  badge,
  illustrationSrc,
  illustrationAlt,
  illustrationMaxWidth = "max-w-[310px]",
  description,
  actionButton,
  secondaryText,
}: TravelCardProps) {
  return (
    <div className="relative text-center overflow-hidden py-3">
      {/* Header & Eyebrow / Badge */}
      <div className="flex items-center justify-between gap-2">
        <div className="text-left">
          {eyebrow && (
            <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.26em] text-accent">
              {eyebrow}
            </p>
          )}
          <h3 className="font-display text-2xl md:text-3xl text-foreground font-normal tracking-wide">
            {title}
          </h3>
        </div>

        {badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-2.5 py-0.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-accent/90 bg-transparent shrink-0">
            {badge.icon}
            {badge.text}
          </span>
        )}
      </div>

      {subtitle && (
        <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.18em] text-accent text-left">
          {subtitle}
        </p>
      )}

      {/* Large Full-Bleed Line-Art Illustration with Soft Edge Fade (Sitting directly on page canvas) */}
      <div className="my-3 illustration-edge-bleed">
        <img
          src={illustrationSrc}
          alt={illustrationAlt}
          className={`mx-auto h-auto w-full ${illustrationMaxWidth} pointer-events-none select-none opacity-90 transition-opacity duration-300 hover:opacity-100`}
        />
      </div>

      {/* Body Description Text (Warm Taupe / Muted Gray Token) */}
      <p className="font-sans text-sm leading-relaxed text-muted-foreground/90 text-left">
        {description}
      </p>

      {/* Action Button */}
      {actionButton && (
        <div className="mt-5 text-center">
          <a
            href={actionButton.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4d684f] px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white shadow-md transition-all hover:bg-[#3d543e] active:scale-95"
          >
            {actionButton.icon}
            {actionButton.label}
          </a>
        </div>
      )}

      {secondaryText && (
        <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground/90 text-center">
          {secondaryText}
        </p>
      )}
    </div>
  );
}

/** 4.9 Travel & Stay */
export function TravelSection() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.travel.mapsQuery)}`;

  return (
    <section className="px-6 py-20 relative overflow-hidden">
      <Reveal>
        <SectionTitle eyebrow="Getting There" title="Travel & Stay" />
      </Reveal>

      {/* 1st Block: Wedding Venue Block ("Jag Niwas Courtyard") */}
      <Reveal delay={100}>
        <div className="mx-auto mt-10 max-w-sm">
          <TravelCard
            eyebrow="Wedding Venue"
            title={wedding.travel.venueName}
            illustrationSrc="/assets/travel_palace_art.svg"
            illustrationAlt="Udaipur Palace & Haveli Courtyard"
            illustrationMaxWidth="max-w-[320px]"
            description={wedding.travel.address}
            actionButton={{
              href: maps,
              label: "Open in Google Maps",
              icon: <MapPin className="h-3.5 w-3.5" />,
            }}
            secondaryText={wedding.travel.transport}
          />
        </div>
      </Reveal>

      {/* Journey Olive Palm Connector 1: Venue Block -> By Air Block */}
      <Reveal delay={140}>
        <div className="flex justify-center my-4 relative z-20 pointer-events-none">
          <TravelJourneyConnector />
        </div>
      </Reveal>

      {/* 2nd & 3rd Blocks: By Air and By Rail */}
      <div className="mx-auto max-w-sm">
        {/* 2nd Block: By Air */}
        <Reveal delay={180}>
          <TravelCard
            title={wedding.travel.byAir.title}
            subtitle={wedding.travel.byAir.name}
            badge={{
              text: wedding.travel.byAir.distance,
              icon: <Clock className="h-3 w-3 stroke-[1.8] text-accent" />,
            }}
            illustrationSrc="/assets/travel_air_art.svg"
            illustrationAlt="Airplane in Flight Scene"
            illustrationMaxWidth="max-w-[310px]"
            description={wedding.travel.byAir.desc}
          />
        </Reveal>

        {/* Journey Olive Palm Connector 2: By Air Block -> By Rail Block */}
        <Reveal delay={220}>
          <div className="flex justify-center my-4 relative z-20 pointer-events-none">
            <TravelJourneyConnector className="rotate-180" />
          </div>
        </Reveal>

        {/* 3rd Block: By Rail */}
        <Reveal delay={260}>
          <TravelCard
            title={wedding.travel.byRail.title}
            subtitle={wedding.travel.byRail.name}
            badge={{
              text: wedding.travel.byRail.distance,
              icon: <Clock className="h-3 w-3 stroke-[1.8] text-accent" />,
            }}
            illustrationSrc="/assets/travel_rail_art.svg"
            illustrationAlt="Passenger Train on Tracks Scene"
            illustrationMaxWidth="max-w-[310px]"
            description={wedding.travel.byRail.desc}
          />
        </Reveal>
      </div>
    </section>
  );
}

/** Delicate line-art flower motif for Bride */
function BrideFlowerIcon({ className = "h-3.5 w-3.5 text-accent" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 7.5C10.5 4 7 4.5 7 7.5C7 10.5 12 14 12 14C12 14 17 10.5 17 7.5C17 4.5 13.5 4 12 7.5Z" fill="currentColor" fillOpacity="0.25" />
      <path d="M12 14C10.5 17.5 7 17 7 14C7 11 12 7.5 12 7.5C12 7.5 17 11 17 14C17 17 13.5 17.5 12 14Z" fill="currentColor" fillOpacity="0.25" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    </svg>
  );
}

/** Stately line-art olive laurel leaf for Groom */
function GroomLeafIcon({ className = "h-3.5 w-3.5 text-[#4d684f]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21C12 21 6 16 6 10C6 5.5 9 3 12 3C15 3 18 5.5 18 10C18 16 12 21 12 21Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12 3V21" strokeWidth="1.2" />
      <path d="M12 8L8 12M12 13L16 9M12 16L9 18" />
    </svg>
  );
}

/** Crisp professional concierge compass icon for Coordinator */
function CoordinatorBadgeIcon({ className = "h-3.5 w-3.5 text-muted-foreground" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

/** 4.10 Contact */
export function ContactSection() {
  return (
    <section className="px-6 py-20 relative overflow-hidden">
      <Reveal>
        <SectionTitle eyebrow="Questions?" title="Get in Touch" />
      </Reveal>

      {/* Large Standalone Thin Olive Line-Art Illustration (Confusion -> Reassurance Scene) */}
      <Reveal delay={60}>
        <div className="mx-auto my-6 max-w-[320px] illustration-edge-bleed pointer-events-none select-none">
          <img
            src="/assets/contact_help_art.png"
            alt="Guest question and helpful host line-art scene"
            className="mx-auto h-auto w-full opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-6 max-w-sm space-y-3.5">
        {wedding.contacts.map((c, i) => {
          const isBride = c.role.toLowerCase() === "bride";
          const isGroom = c.role.toLowerCase() === "groom";
          const isCoordinator = !isBride && !isGroom;

          return (
            <Reveal key={c.phone} delay={i * 80}>
              <div
                className={`flex items-center justify-between gap-3 p-4.5 rounded-2xl transition-all duration-300 ${
                  isBride
                    ? "bg-gradient-to-r from-[#fdfbf7] via-[#faf6f0] to-[#f7f2ea] border border-amber-300/50 shadow-[0_4px_20px_-6px_rgba(184,134,54,0.12)]"
                    : isGroom
                    ? "bg-gradient-to-r from-[#f9faf7] via-[#f5f7f3] to-[#eff2ec] border border-emerald-800/20 shadow-[0_4px_20px_-6px_rgba(77,104,79,0.12)]"
                    : "bg-[#f8f7f4] border border-border/80 shadow-2xs"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5">
                    {isBride && <BrideFlowerIcon className="h-3.5 w-3.5 text-accent" />}
                    {isGroom && <GroomLeafIcon className="h-3.5 w-3.5 text-primary" />}
                    {isCoordinator && <CoordinatorBadgeIcon className="h-3.5 w-3.5 text-muted-foreground/80" />}
                    <p
                      className={`font-sans text-[0.66rem] font-medium uppercase tracking-[0.24em] ${
                        isBride ? "text-accent" : isGroom ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {c.role}
                    </p>
                  </div>

                  <p className="font-display text-xl text-foreground font-normal tracking-wide mt-0.5">
                    {c.name}
                  </p>

                  <p className="font-sans text-xs text-muted-foreground/85 mt-0.5">
                    {c.phone}
                  </p>
                </div>

                <div className="flex gap-2">
                  <a
                    href={`tel:${c.phone}`}
                    aria-label={`Call ${c.name}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-2xs transition-all hover:scale-105 active:scale-95 ${
                      isBride
                        ? "border-[#b88636]/40 bg-[#fdfaf3] text-[#b88636] hover:bg-[#f7eedf] hover:border-[#b88636]/65"
                        : isGroom
                        ? "border-[#4d684f]/40 bg-[#fdfaf3] text-[#4d684f] hover:bg-[#edf2ea] hover:border-[#4d684f]/65"
                        : "border-[#4d684f]/30 bg-[#fbf8f2] text-[#4d684f]/90 hover:bg-[#f3ece0] hover:border-[#4d684f]/50"
                    }`}
                  >
                    <Phone className="h-3.5 w-3.5 stroke-[1.8]" />
                  </a>

                  {c.whatsapp && (
                    <a
                      href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`WhatsApp ${c.name}`}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-2xs transition-all hover:scale-105 active:scale-95 ${
                        isBride
                          ? "border-[#b88636]/40 bg-[#fdfaf3] text-[#b88636] hover:bg-[#f7eedf] hover:border-[#b88636]/65"
                          : isGroom
                          ? "border-[#4d684f]/40 bg-[#fdfaf3] text-[#4d684f] hover:bg-[#edf2ea] hover:border-[#4d684f]/65"
                          : "border-[#4d684f]/30 bg-[#fbf8f2] text-[#4d684f]/90 hover:bg-[#f3ece0] hover:border-[#4d684f]/50"
                      }`}
                    >
                      <MessageCircle className="h-3.5 w-3.5 stroke-[1.8]" />
                    </a>
                  )}

                  {"email" in c && c.email && (
                    <a
                      href={`mailto:${c.email}`}
                      aria-label={`Email ${c.name}`}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-2xs transition-all hover:scale-105 active:scale-95 ${
                        isBride
                          ? "border-[#b88636]/40 bg-[#fdfaf3] text-[#b88636] hover:bg-[#f7eedf] hover:border-[#b88636]/65"
                          : isGroom
                          ? "border-[#4d684f]/40 bg-[#fdfaf3] text-[#4d684f] hover:bg-[#edf2ea] hover:border-[#4d684f]/65"
                          : "border-[#4d684f]/30 bg-[#fbf8f2] text-[#4d684f]/90 hover:bg-[#f3ece0] hover:border-[#4d684f]/50"
                      }`}
                    >
                      <Mail className="h-3.5 w-3.5 stroke-[1.8]" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
