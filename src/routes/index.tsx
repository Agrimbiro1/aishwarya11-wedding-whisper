import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { wedding } from "@/data/wedding";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import { CurtainOpeningAnimation, InvitationGate, GardenGateSaveTheDateTransition } from "@/components/site/Opening";
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

type Stage = "gate" | "save-the-date" | "site";

function Invitation() {
  const [stage, setStage] = useState<Stage>("gate");
  const [showCurtain, setShowCurtain] = useState(true);
  const [music, setMusic] = useState(false);

  useEffect(() => {
    if (stage !== "site") {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [stage]);

  function handleCurtainDone() {
    setShowCurtain(false);
  }

  function handleOpenGate() {
    // When guest taps "OPEN INVITATION", transition into Save-The-Date blooming flower transition
    setStage("save-the-date");
  }

  function handleSaveTheDateDone() {
    // When Save-The-Date blooming flower transition finishes (~5.8s), enter site & enable music
    setStage("site");
    setMusic(true);
  }

  const isSite = stage === "site";

  return (
    <PhoneFrame scrollable={isSite}>
      <main
        className={`relative bg-background ${
          isSite ? "min-h-[100svh]" : "h-[100svh] overflow-hidden touch-none"
        }`}
      >
        {/* Invitation Gate Card rendered underneath curtain */}
        {stage === "gate" && <InvitationGate onOpen={handleOpenGate} />}

        {/* Curtain-Opening Entrance Overlay (plays automatically on initial page load) */}
        {stage === "gate" && showCurtain && (
          <CurtainOpeningAnimation onDone={handleCurtainDone} />
        )}

        {/* Garden-Gate Save The Date Transition (plays immediately after tapping "OPEN INVITATION") */}
        {stage === "save-the-date" && (
          <GardenGateSaveTheDateTransition onDone={handleSaveTheDateDone} />
        )}

        {isSite && (
          <>
            <WelcomeSection />
            <EventSection />
            {wedding.sections.gallery && <GallerySection />}
            {wedding.sections.family && <FamilySection />}
            {wedding.sections.wishes && <WishingWallSection />}
            {wedding.sections.rsvp && <RsvpSection />}
            {wedding.sections.travel && <TravelSection />}
            {wedding.sections.contact && <ContactSection />}
            <ThankYouSection />
            <MusicToggle on={music} onToggle={() => setMusic((m) => !m)} />
          </>
        )}
      </main>
    </PhoneFrame>
  );
}
