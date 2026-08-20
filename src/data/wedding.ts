import hero from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

/**
 * Single source of content for the guest microsite.
 * In the full product this object is produced by the couple dashboard.
 */
export const wedding = {
  couple: { partnerA: "Aanya", partnerB: "Rehan", monogram: "A&R" },
  date: "2026-12-12T16:30:00+05:30",
  dateLabel: "Saturday, 12 December 2026",
  city: "Udaipur, Rajasthan",
  invitationLine: "Two families, one celebration — by the lake in Udaipur.",
  welcome: {
    headline: "We're getting married",
    heroImage: hero,
    countdown: true,
  },
  sections: {
    gallery: true,
    family: true,
    wishes: true,
    rsvp: true,
    travel: true,
    contact: true,
  },
  days: [
    {
      label: "Mehndi & Sangeet",
      dateLabel: "Fri, 11 Dec",
      events: [
        { time: "16:00", title: "Mehndi", icon: "flower", desc: "Henna, chai and quiet corners in the courtyard garden." },
        { time: "19:30", title: "Sangeet", icon: "music", desc: "Songs, speeches and questionable choreography from both sides." },
      ],
    },
    {
      label: "Wedding Day",
      dateLabel: "Sat, 12 Dec",
      events: [
        { time: "16:30", title: "Ceremony", icon: "rings", desc: "Please be seated by 16:15. The mandap is by the water.", location: "Lakeside Lawn" },
        { time: "18:00", title: "Cocktail Hour", icon: "drinks", desc: "Drinks and snacks while we finish the photographs." },
        { time: "20:00", title: "Reception Dinner", icon: "dinner", desc: "Dinner is served under the courtyard lights." },
        { time: "22:30", title: "Dancing & Send-off", icon: "dance", desc: "Stay as long as your feet allow." },
      ],
    },
  ],
  gallery: {
    title: "Our Story",
    photos: [
      { src: gallery1, caption: "Where it began" },
      { src: gallery2, caption: "The proposal" },
      { src: gallery3, caption: "Planning the table" },
      { src: gallery4, caption: "Us, mostly laughing" },
    ],
  },
  families: [
    {
      label: "Parents of the Bride",
      names: "Mr. Vikram & Mrs. Leela Sharma",
      note: "With joy in our hearts, we welcome you to share this day with our family.",
    },
    {
      label: "Parents of the Groom",
      names: "Mr. Imran & Mrs. Farah Qureshi",
      note: "Your blessings mean everything to us. Thank you for standing with our children.",
    },
  ],
  rsvp: { deadlineLabel: "Please respond by 1 November 2026", allowPlusOnes: true },
  travel: {
    venueName: "Jag Niwas Courtyard",
    address: "Lake Palace Road, Udaipur, Rajasthan 313001",
    mapsQuery: "Lake Palace Road, Udaipur, Rajasthan 313001",
    transport:
      "Udaipur (UDR) airport is 45 minutes from the venue. Shuttles run from the two hotels below at 15:15 and 15:45 on the wedding day. Parking is available at the north gate.",
    hotels: [
      { name: "The Lily Haveli", desc: "Heritage rooms overlooking the lake.", distance: "5 min walk", code: "AANYAREHAN10", url: "https://example.com" },
      { name: "Amara Residency", desc: "Comfortable, modern and family friendly.", distance: "10 min drive", code: "YESH2026", url: "https://example.com" },
    ],
    tips: "December evenings are cool by the water — bring a shawl. Book early, rooms in the old city fill up fast.",
  },
  contacts: [
    { role: "Bride", name: "Aanya", phone: "+919876543210", whatsapp: true, email: "aanya@example.com" },
    { role: "Groom", name: "Rehan", phone: "+919876543211", whatsapp: true },
    { role: "Wedding Coordinator", name: "Priya Nair", phone: "+919876543212", whatsapp: true, email: "priya@example.com" },
  ],
  thankYou: {
    message:
      "Thank you for being part of our story. Whether you travel far or watch from home, your love is what makes this day ours.",
    attribution: true,
  },
} as const;

export type Wedding = typeof wedding;
