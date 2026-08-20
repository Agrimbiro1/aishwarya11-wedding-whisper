import { MapPin, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Ornament";

/** 4.9 Travel & Stay */
export function TravelSection() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(wedding.travel.mapsQuery)}`;
  return (
    <section className="px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="Getting there" title="Travel & Stay" />
      </Reveal>

      <Reveal delay={100}>
        <div className="keepsake-card mx-auto mt-8 max-w-sm p-5">
          <h3 className="font-display text-xl text-foreground">{wedding.travel.venueName}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{wedding.travel.address}</p>
          <a
            href={maps}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground"
          >
            <MapPin className="h-3.5 w-3.5" /> Open in Google Maps
          </a>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{wedding.travel.transport}</p>
        </div>
      </Reveal>

      <div className="mx-auto mt-6 max-w-sm space-y-4">
        {wedding.travel.hotels.map((h, i) => (
          <Reveal key={h.name} delay={i * 90}>
            <div className="keepsake-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-display text-lg text-foreground">{h.name}</h4>
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-accent">{h.distance}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Code <span className="tracking-[0.16em] text-foreground">{h.code}</span>
              </p>
              <a
                href={h.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-accent underline underline-offset-4"
              >
                View hotel <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
          {wedding.travel.tips}
        </p>
      </Reveal>
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
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-accent">{c.role}</p>
                <p className="font-display text-lg text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.phone}</p>
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
