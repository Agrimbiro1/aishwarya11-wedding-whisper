import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { wedding } from "@/data/wedding";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import { OpeningAnimation, InvitationGate } from "@/components/site/Opening";
import { MusicToggle } from "@/components/site/MusicToggle";
import {
  WelcomeSection,
  EventSection,
  GallerySection,
  FamilySection,
  ThankYouSection,
} from "@/components/site/Sections";
import { WishingWallSection, RsvpSection } from "@/components/site/Interactive";
import { TravelSection, ContactSection } from "@/components/site/Utility";

const title = `${wedding.couple.partnerA} & ${wedding.couple.partnerB} — ${wedding.dateLabel}`;
const description = `You're invited to the wedding of ${wedding.couple.partnerA} and ${wedding.couple.partnerB} in ${wedding.city}. Schedule, travel, stay and RSVP in one place.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

type Stage = "opening" | "gate" | "site";

function Invitation() {
  const [stage, setStage] = useState<Stage>("opening");
  const [music, setMusic] = useState(false);
  const seen = useRef(false);

  useEffect(() => {
    seen.current = sessionStorage.getItem("dy-opened") === "1";
    if (seen.current) setStage("site");
  }, []);

  function openSite() {
    sessionStorage.setItem("dy-opened", "1");
    setStage("site");
    setMusic(true);
  }

  return (
    <PhoneFrame>
      <main className="relative min-h-[100svh] bg-background">
        <WelcomeSection />
        <EventSection />
        {wedding.sections.gallery && <GallerySection />}
        {wedding.sections.family && <FamilySection />}
        {wedding.sections.wishes && <WishingWallSection />}
        {wedding.sections.rsvp && <RsvpSection />}
        {wedding.sections.travel && <TravelSection />}
        {wedding.sections.contact && <ContactSection />}
        <ThankYouSection />

        {stage === "site" && <MusicToggle on={music} onToggle={() => setMusic((m) => !m)} />}
        {stage === "gate" && <InvitationGate onOpen={openSite} />}
        {stage === "opening" && (
          <OpeningAnimation fast={seen.current} onDone={() => setStage(seen.current ? "site" : "gate")} />
        )}
      </main>
    </PhoneFrame>
  );
}
