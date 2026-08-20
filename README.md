# Wedding Whisper

Digital Yesh — Product Requirements Document

Digital Wedding Invitation Microsite Platform

Version 1.0 · Draft for internal review

1. Overview & Problem Statement

Couples planning weddings today send guests a scattered mix of paper invites, WhatsApp forwards, and spreadsheet-based RSVP tracking. This is slow, hard to update, unmemorable, and gives couples no visibility into who has actually seen the invite, who's coming, or what questions guests have.

Digital Yesh is a product that lets a couple generate a single, shareable link that opens a premium, animation-led, mobile-first wedding microsite. The site tells the story of their wedding — who, when, where, what to expect — and lets guests RSVP, leave a wish, and get all logistics (schedule, travel, stay, contacts) in one place, all opened from a link dropped straight into a WhatsApp or SMS thread.

The core product bet: the opening moment must feel like receiving a physical, precious invitation — not like loading a web page — and everything after that must be effortless to scroll through on a phone with one thumb.

Digital Yesh is two connected products:

A guest-facing microsite (the 11-section experience below).

A couple-facing admin dashboard where the couple fills in content once and the site is generated/updated automatically.

2. Target Users

User Description Primary Need The Couple (Admin/Owner) Getting married, tech-comfortable but not technical. Usually one partner does most of the setup. A beautiful site they can set up in an evening without a designer or developer, and edit anytime details change. Guests Wide age range (18–75+), overwhelmingly opening the link on a phone from a chat app. Varying tech comfort. Instantly understand "whose wedding, when, where, do I need to do anything" — and be able to RSVP in under a minute. Wedding Planner / Family Coordinator (secondary) Sometimes manages the dashboard on behalf of the couple, especially for logistics-heavy sections (Travel & Stay). Ability to be given access to update specific sections without owning the whole account.

3. Goals & Success Metrics

Product goals

Make the invitation itself feel like a memorable moment, not a form.

Get guests through the entire scroll experience on mobile without confusion or dead ends.

Replace spreadsheet RSVP tracking entirely for the couple.

Make setup fast enough that a non-technical couple can complete it in one sitting.

Success metrics (v1)

Metric Target Invitation open rate (link click → "Open Invitation" tap) > 85% Full scroll-through rate (guests who reach Thank You section) > 60% RSVP completion rate among guests who open the invite > 70% Average couple setup time (account creation → link shareable) < 90 minutes Mobile session share of total traffic ~95% (matches expected usage) Wishing Wall participation rate > 25% of RSVP'd guests Page load time to Opening Animation start < 2s on 4G

4. Full Feature Breakdown — The 11 Sections

Each section below specifies: Purpose, UI Elements / Fields, Interactions & Animation, and Admin Customization.

4.1 Opening Animation

Purpose: The very first thing a guest sees after the link loads. Sets tone and signals "this is a special, crafted thing," while the rest of the experience preloads behind it.

UI Elements

Full-screen, branded loading/opening canvas (no browser chrome distractions — status bar only)

Couple's monogram or initials (auto-generated from names, or custom-uploaded)

Subtle motion element (this is the couple's "signature moment" — e.g. a sealing wax stamp forming, a monogram tracing itself, a soft light bloom) — visual style is chosen by the couple from a small set of opening motifs, not literally an envelope-only mechanic

Minimal progress indicator (spinner or thin progress bar) while assets load

Interactions / Animation

Triggers automatically the instant the guest lands on the URL — no tap required to start it

Duration: 1.5–3 seconds minimum (even if assets load faster, to preserve the "moment"); caps at ~5 seconds max wait before auto-advancing regardless of load state

Ends with a transition (fade, wipe, or soft zoom — motif-dependent) directly into the Invitation Section; no jarring cut

Runs once per session; if a guest refreshes or returns within the same session, a lighter/faster version (or skip) is used so repeat visits aren't annoying

Includes a silent audio-unlock interaction opportunity (see Welcome Section) so background music can legally auto-enable on the next tap, per mobile browser autoplay restrictions

Admin Customization

Choose opening motif from a curated set (e.g., 3–5 templates at launch)

Upload/confirm monogram or initials

Choose accent color / theme (ties into global theme selection, see §10)

4.2 Invitation Section

Purpose: The gatekeeper screen. A static, elegant landing card that confirms to the guest "you're in the right place" and requires one deliberate tap before anything else on the site is reachable. This is the single most important conversion moment — it must load instantly and be unambiguous.

UI Elements

Couple's names (large, elegant typographic treatment)

Wedding date

Optional short line (e.g. venue city, or a single welcoming phrase — couple-authored, max ~60 characters)

Decorative static illustration/frame (couple-selected theme art — botanical, minimal line art, or other theme options; illustrated frame is thematically similar to organic wavy-edge card styling, not video-game skeuomorphism)

Primary CTA button: "Open Invitation"

Small ambient background motion is allowed (e.g. slow-drifting light texture) but no scroll, no interactive content besides the CTA

Interactions / Animation

Nothing on this screen is scrollable or tappable except the "Open Invitation" CTA

On tap: CTA triggers an opening transition (matches the theme motif — e.g., a card/seal opening, a soft reveal wipe) that leads directly into the Welcome Section

This tap is also the point where background music (if configured) begins, satisfying browser autoplay-after-interaction requirements

This section is technically part of the same route as Welcome — it's not a separate loading page; the transition should feel continuous, not like a second page load

State is remembered per-session: if a guest scrolls down and later refreshes, they should NOT be forced to re-tap Open Invitation within the same session (configurable — some couples may prefer guests always land on this gate)

Admin Customization

Couple names (auto-pulled from account setup, editable)

Date (auto-pulled, editable)

Optional welcome phrase (free text, character-limited)

Theme/illustration selection (from theme library)

Toggle: "always show gate on revisit" vs "remember guest chose to open"

4.3 Welcome Section

Purpose: The emotional hero moment — the first thing guests see once "inside" the site. Establishes names, date, and visual tone before any logistics.

UI Elements

Large couple names (hero typography)

"We're getting married" style headline (editable text, not hardcoded copy)

Wedding date, prominently displayed

Hero background image or illustration (photo of venue, couple photo, or illustrated scene — couple's choice)

Optional live countdown (days / hours / minutes / seconds until the wedding)

Music toggle control (small persistent icon, mute/unmute background music — present from this section onward across the whole site)

Scroll-down affordance (subtle animated chevron or hint text indicating there's more below)

Interactions / Animation

Hero content fades/slides in on entry (staggered: image → names → date)

Background may have gentle parallax or slow zoom (Ken Burns-style) if a photo is used

Countdown numbers tick live if enabled

Music toggle persists (sticky, small, unobtrusive) as the guest scrolls through the rest of the site

Section transitions to Event Section via normal scroll (no more forced taps after this point)

Admin Customization

Headline text (editable, with sensible default)

Hero image/illustration upload or theme-provided art

Toggle countdown on/off

Upload background music track (optional) + toggle whether it autoplays after Invitation tap

4.4 Event Section

Purpose: Communicate the full schedule of the wedding day(s) — what's happening, when, and where within the venue — so guests know what to expect and when to show up.

UI Elements

Section header ("Schedule," "Order of the Day," or couple-custom label)

Repeatable event cards/timeline items, each with:

Time (start, optional end time)

Event title (e.g. "Ceremony," "Cocktail Hour," "Reception Dinner," "Send-off")

Short description (1–3 sentences)

Optional icon per event type (ceremony, drinks, dinner, dancing, etc. — from an icon set)

Optional per-event location note if it differs from main venue

Support for multiple days (e.g. Mehndi/Sangeet/Ceremony/Reception as separate days) via day-tabs or stacked day-labeled groups

Interactions / Animation

Vertical timeline with connecting line, items reveal on scroll (fade/slide up as each enters viewport)

If multi-day: tap-to-switch day tabs at top of section, with the timeline content transitioning between days

Optional "Add to Calendar" action per event or for the whole day (generates .ics)

Admin Customization

Add/remove/reorder events freely

Per event: time, title, description, icon selection, optional location override

Add/remove days (single-day vs multi-day toggle)

Reorder days

4.5 Gallery Section

Purpose: Let the couple share photos — a visual "about us" moment that adds warmth and personality between logistics-heavy sections.

UI Elements

Section header (e.g. "Our Story," "Gallery" — couple-editable)

Photo grid or swipeable carousel of couple photos

Optional short caption per photo or per small photo set (e.g. "Where it began," "The proposal")

Optional lightbox/full-screen tap-to-expand view

Interactions / Animation

Images lazy-load as the section scrolls into view (performance-critical given mobile/photo-heavy nature)

Horizontal swipe carousel (touch-friendly, snap-to-image) as the primary mobile pattern; grid as an alternate layout option

Tap opens full-screen viewer with swipe-to-navigate and pinch-to-zoom

Subtle fade/scale-in as each photo enters view

Admin Customization

Upload multiple photos (with recommended aspect ratio/size guidance in the dashboard)

Reorder photos (drag-and-drop)

Optional caption per photo

Choose layout style: carousel vs grid

Set a cover/lead photo

4.6 Family Section

Purpose: Introduce both families — a traditional and emotionally important element in most wedding cultures, especially where parents are formally acknowledged as hosts.

UI Elements

Section header (e.g. "Our Families," "With the Blessings Of")

Two family blocks (couple's side / partner's side), each with:

Parents' names

Optional relationship label (e.g. "Parents of the Bride")

Optional short note/message per side (1–3 sentences — a blessing, welcome note, or family detail)

Optional family photo per side

Interactions / Animation

Two-column on wider viewports, stacked vertically on mobile (side by side is rare on narrow phones — default to stacked with a clear visual divider)

Simple fade-in per block as it scrolls into view

No complex interaction required — this is a calm, respectful, low-motion section by design

Admin Customization

Names, relationship labels, and notes for both sides (independently editable — supports cases where only one side wants to add a note, or where family structures don't fit a strict two-column mold, e.g. blended families)

Optional photo upload per side

Toggle section visibility entirely (some couples may skip this)

4.7 Wishing Wall Section

Purpose: Let guests leave a message/wish for the couple that other guests (and the couple) can see — a digital guestbook, and a moment of guest participation before the more transactional RSVP section.

UI Elements

Section header ("Wishing Wall," "Leave Your Wishes")

Input form:

Guest name (required, short text)

Message (required, textarea, character-limited e.g. 300 chars)

Submit button

Display feed of submitted wishes (name + message, timestamp optional), shown as cards or a scrollable list

Empty state copy if no wishes yet ("Be the first to leave a wish")

Interactions / Animation

Submitting posts the wish immediately into the visible feed (optimistic UI) with a small confirmation animation (e.g. card gently drops into the wall)

Feed scrolls independently within the section (horizontal card scroll) or paginates/loads-more on vertical scroll, depending on volume

New wishes appear at the top (or couple can choose chronological order)

Admin Customization

Toggle: require moderation approval before a wish appears publicly, vs. show instantly

Ability to hide/delete individual wishes from the dashboard

Toggle section on/off entirely

Edit section header/subtext

4.8 RSVP Section

Purpose: Capture guest attendance and related logistics data in a single form. (Exact field list to be finalized separately per the brief, but the structural spec below reflects the standard v1 field set based on the sections requested.)

UI Elements

Section header ("RSVP," "We Hope You Can Make It")

Form fields (v1 baseline — confirmed set to be refined):

Attendance: Yes / No (required, radio or toggle)

Full name (required)

Contact phone or email (required)

Number/details of companions or plus-ones (if allowed for that guest) — e.g. adult/child counts with names

Dietary requirements / allergies (optional free text)

Optional message to the couple (free text)

Submit button ("Send RSVP")

Post-submit confirmation state (thank-you message replacing or overlaying the form)

Interactions / Animation

Form fields reveal progressively as attendance is selected (e.g. "No" collapses irrelevant fields like dietary requirements)

Inline validation (required field errors shown immediately, not only on submit)

Submission shows a loading state on the button, then transitions to a confirmation message/animation

If a guest already RSVP'd (returning via the same link/session or a personalized link), the form can pre-fill or show "you've already responded" with an edit option

Admin Customization

Toggle which fields are required/optional/hidden (e.g. some couples won't collect dietary info)

Set a plus-one/companion allowance globally or per guest (ties into guest list management, see §9)

Set RSVP deadline date (displayed to guest, and can close the form after)

View/export all responses in the dashboard (see §9)

4.9 Travel & Stay Section

Purpose: Give guests everything they need to physically get to the wedding and find a place to stay — critical for destination or out-of-town weddings.

UI Elements

Section header ("Travel & Stay," "Getting There")

Transport block:

Venue address with "Open in Google Maps" button

General transport guidance (free text — e.g. driving directions, parking notes, shuttle info)

Optional shuttle service details (times, pickup points)

Accommodation block:

Repeatable hotel/stay cards, each with:

Hotel name

Short description

Distance from venue

Optional discount code or booking note

"View Hotel" link (external URL)

Optional general tips text block (e.g. "book early," "prices rise closer to the date")

Interactions / Animation

Map button opens native maps app (deep link) or Google Maps web

Hotel cards in a vertical stack or swipeable carousel, consistent with Gallery's carousel pattern for visual rhythm

Simple fade/slide-in on scroll, no complex motion — this is a reference/utility section, clarity over decoration

Admin Customization

Edit venue address (auto-generates the maps link)

Free-text transport guidance and shuttle details

Add/remove/reorder hotel cards, each with name, description, distance, discount code, and external booking URL

Add/edit general travel tips text

4.10 Contact Section

Purpose: Give guests a direct, low-friction way to reach the couple or a designated organizer with questions — reduces guests texting the couple's personal numbers ad hoc.

UI Elements

Section header ("Contact Us," "Get in Touch")

One or more contact cards, each with:

Name/role label (e.g. "Bride," "Groom," "Wedding Coordinator")

Phone number

WhatsApp quick-link button

Email (optional)

Optional short note ("Reach out to us anytime with questions")

Interactions / Animation

WhatsApp button deep-links directly into a chat (wa.me link) with the number

Phone number tap triggers native dialer (tel: link)

Email tap triggers native mail client (mailto: link)

Minimal animation — this is a purely functional utility section

Admin Customization

Add/remove/reorder contact entries

Per entry: name/role label, phone, WhatsApp toggle, email

Toggle section visibility

4.11 Thank You Section

Purpose: A graceful closing moment that signals the end of the scroll experience and leaves guests with a warm final impression.

UI Elements

Couple names + date (echoing the Welcome Section for narrative bookend)

Closing message (editable — e.g. a thank-you note from the couple)

Optional closing illustration/photo

Small platform attribution footer (e.g. "Made with Digital Yesh")

Interactions / Animation

Gentle fade-in as the final section is reached — signals "you've reached the end"

No further scroll affordance shown (this is clearly the last section)

Background music (if enabled) may fade out gently here rather than cut abruptly, if the guest reaches the very bottom

Admin Customization

Closing message text

Optional closing photo/illustration

Toggle platform attribution (subject to plan tier, if applicable — flagged as an open question in §12)

5. Desktop-Specific Layout Spec

Desktop is a secondary, "showcase" experience — not a redesign. The guest-facing content and interaction logic are identical to mobile; only the outer chrome changes.

Layout behavior

On viewports above the mobile breakpoint, the page background becomes a full-bleed custom background image (couple/theme-provided, decorative — e.g. botanical or venue imagery), centered and covering the full browser viewport.

A phone mockup frame (device bezel graphic) is centered on the page, vertically and horizontally.

The actual mobile site renders live inside the phone mockup's screen area — same DOM/components as the mobile experience, constrained to a fixed mobile-width viewport (e.g. 375–414px wide) inside the frame, with its own independent scroll.

The rest of the desktop viewport (outside the phone frame) shows only the decorative background — no additional desktop-only navigation, content blocks, or marketing copy.

Music toggle, scroll behavior, and all interactions inside the phone frame behave exactly as they do on a real mobile device.

Responsive breakpoints (baseline, to be refined with design)

Breakpoint Range Behavior Mobile up to 767px Full-width native mobile experience, no phone frame Tablet 768px–1023px Treated as mobile experience (full width), phone-frame chrome not yet applied — avoids an awkward mid-size mockup Desktop 1024px and above Background image + centered phone mockup with site rendered inside

Technical notes

The phone-mockup rendering should reuse the mobile component tree directly (e.g., an iframe or a fixed-width container), not a separately maintained desktop build — this guarantees "exact same mobile layout" as required.

Background image is couple/theme-selectable but has a sensible default per theme.

Desktop view should still support keyboard/mouse scroll within the phone-frame area, and clicking outside the frame should do nothing (no accidental navigation).

6. User Flow

6.1 Couple Setup Flow

Couple creates a Digital Yesh account (email/phone signup)

Chooses a theme/visual style (drives illustration set, color palette, default opening motif)

Enters core details: names, wedding date, optional headline/welcome phrase

Fills in each of the 11 sections via the dashboard, section by section, with live preview

Sections can be filled in any order and saved incrementally (draft state)

Each section can be individually toggled visible/hidden if not applicable (e.g. no Family section)

Uploads photos (Gallery, Hero, Family, Thank You) with in-dashboard cropping/guidance

Sets up guest list (optional at this stage — needed for personalized RSVP tracking, see §9)

Previews the full site live (mobile preview + desktop preview with phone mockup)

Publishes the site — generates a shareable link (and optionally a QR code)

Shares link via WhatsApp/SMS/email to guests

Monitors RSVP and Wishing Wall activity in the dashboard as responses come in; edits content anytime (changes reflect live, no republish step needed)

6.2 Guest Viewing Flow

Guest receives a link via WhatsApp/SMS/other channel, taps it

Opening Animation plays automatically while assets preload

Invitation Section appears (gated landing) — guest taps "Open Invitation"

Transition into Welcome Section (music begins if enabled)

Guest scrolls freely through: Event → Gallery → Family → Wishing Wall → RSVP → Travel & Stay → Contact → Thank You

At Wishing Wall, guest may optionally leave a message

At RSVP, guest submits attendance and details; sees confirmation

Guest can revisit the link anytime afterward (e.g. to re-check schedule or travel info); Invitation gate may or may not re-trigger depending on the "remember guest" setting (§4.2)

7. Design/UX Notes

Visual style direction

Illustrated/decorative style takes cues from soft, organic botanical line art and wavy, hand-drawn card-frame shapes rather than sharp geometric or corporate UI conventions — the product should feel closer to a keepsake than a form.

Multiple theme options should be offered at launch (not a single fixed look), each pairing a color palette, illustration set, and opening motif — but all themes follow the same structural section order and interaction patterns defined in this document.

Generous whitespace and restrained color palettes (muted, natural tones — sage, cream, dusty rose, gold accents as an illustrative example direction, not a mandate) read as premium; avoid saturated, "app-like" UI colors.

Typography direction

Pairing of one elegant serif or script display face (for names, headlines, section titles) with one clean, highly legible sans-serif for body copy, form labels, and functional text — mobile legibility of body text takes priority over decorative fonts at small sizes.

Avoid script fonts for anything functional (form fields, buttons, error states) — reserve decorative type strictly for names/headlines.

Animation principles

Motion should feel organic and unhurried — fades, soft slides, gentle scale — never abrupt cuts or bouncy/playful easing that undercuts the emotional tone.

Every section transitions in as the guest scrolls to it (not all-at-once on page load) to keep the experience feeling paced and intentional.

Animation must never block interaction — a guest should always be able to scroll past an in-progress animation without getting stuck, except at the single deliberate gate (Invitation Section's "Open Invitation" tap).

Performance discipline: with 95% mobile traffic and photo-heavy sections, animations must be lightweight (CSS/transform-based, lazy-loaded assets) — a beautiful site that stutters on a mid-range Android phone fails the core promise.

8. Admin/Couple Dashboard Requirements

Core capabilities

Account creation and login (couple owns one site per active wedding project; support for inviting a co-owner, e.g. both partners with edit access)

Section-by-section content editor for all 11 sections, matching the field lists in §4, with autosave/draft state

Live preview pane (mobile view + desktop "phone mockup" view) reflecting changes in real time

Media library for uploading/managing photos used across Hero, Gallery, Family, Thank You

Theme selector (palette, illustration set, opening motif) with preview

Publish/link management: generate shareable URL, optional QR code export, ability to view link click analytics (opens, RSVP conversion — ties to §3 metrics)

Guest list management: add guests individually or via bulk import (CSV), track invited vs. responded, optionally generate personalized links per guest/household (supports pre-filled names and per-guest plus-one allowances referenced in §4.8)

RSVP data view: table of all responses (name, attendance, companions, dietary notes, message), with export (CSV) and search/filter

Wishing Wall moderation: view all wishes, approve/reject if moderation is enabled, delete individual entries

Section visibility toggles (hide any of the 11 sections that don't apply, except Invitation/Welcome which are structurally required)

Access control: ability to grant limited edit access to a third party (e.g. planner) scoped to specific sections (flagged as v1-desirable, see Open Questions)

9. Assumptions & Open Questions

Assumptions

Each couple account corresponds to exactly one wedding site in v1 (no multi-event/multi-site management per account needed at launch).

Guests do not need their own accounts/logins — the experience is fully link-based and anonymous unless personalized links are used.

Personalized/per-guest links are a desirable but not strictly mandatory v1 feature; the RSVP form must work correctly even via a single shared link with all guests manually entering their own name.

Background music is licensed/uploaded by the couple (product does not provide a licensed music library in v1) — legal responsibility for uploaded audio sits with the couple, subject to platform terms.

One primary language per site in v1 (no multi-language toggle) — to be confirmed.

Open questions

Do we need per-guest personalized RSVP links at launch, or is a shared link with manual name entry sufficient for v1?

Is there a payment/registry component expected anywhere in the flow (the reference material hinted at a gift/bank-transfer pattern), or is that explicitly excluded per the "do not invent extra sections" instruction? (Currently treated as out of scope — flagged here for confirmation since it appeared adjacent to Travel & Stay in reference material.)

Should platform attribution in the Thank You footer be removable, and if so, is that tied to a paid plan tier?

What is the expected guest list scale (dozens vs. many hundreds) — this affects Wishing Wall pagination strategy and RSVP dashboard performance needs.

Should planners/family members get scoped dashboard access in v1, or is single-owner (plus one co-owner) access sufficient at launch?

Is a QR code export required at launch for physical/print use cases (e.g. printed save-the-dates linking to the digital site)?

10. Out of Scope (v1)

Gift registry / payment collection functionality

Multi-language / localization support

Guest-side accounts or login system

Multiple simultaneous wedding sites per couple account

In-app licensed music library (couple must supply their own track)

Live chat or real-time messaging between guests and couple within the site

Native mobile apps (product is a responsive web experience only)

Analytics beyond basic open/RSVP conversion tracking (no deep guest behavior analytics in v1)

Third-party planner/vendor marketplace integrations

Any sections beyond the 11 specified in this document

End of PRD.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/436f837d-7df9-4e12-9898-88c1a8a7132e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
