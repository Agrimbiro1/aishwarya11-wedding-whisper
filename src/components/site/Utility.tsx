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

/** 4.10 Contact */
export function ContactSection() {
  return (
    <section className="px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Questions?" title="Get in Touch" />
      </Reveal>
      <div className="mx-auto mt-8 max-w-sm space-y-3">
        {wedding.contacts.map((c, i) => (
          <Reveal key={c.phone} delay={i * 80}>
            <div className="keepsake-card flex items-center justify-between gap-3 p-4">
              <div>
                <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.24em] text-accent">{c.role}</p>
                <p className="font-display text-xl text-foreground font-normal tracking-wide">{c.name}</p>
                <p className="font-sans text-sm text-muted-foreground/90">{c.phone}</p>
              </div>
              <div className="flex gap-2">
                <a href={`tel:${c.phone}`} aria-label={`Call ${c.name}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                  <Phone className="h-4 w-4 text-foreground" />
                </a>
                {c.whatsapp && (
                  <a
                    href={`https://wa.me/${c.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp ${c.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
                  >
                    <MessageCircle className="h-4 w-4 text-foreground" />
                  </a>
                )}
                {"email" in c && c.email && (
                  <a href={`mailto:${c.email}`} aria-label={`Email ${c.name}`} className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                    <Mail className="h-4 w-4 text-foreground" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
