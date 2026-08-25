export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 24"
      aria-hidden="true"
      className={`h-5 w-40 text-accent ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M2 12h48" />
      <path d="M110 12h48" />
      <path d="M80 4c-6 3-9 5-9 8s3 5 9 8c6-3 9-5 9-8s-3-5-9-8z" />
      <path d="M62 12c3-4 6-5 9-4M98 12c-3-4-6-5-9-4" />
    </svg>
  );
}

/** Joined Hands & Interlocking Rings Motif for Wishing Wall */
export function JoinedHandsOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 36"
      aria-hidden="true"
      className={`h-8 w-52 text-[#4d684f]/85 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left divider line with leaf swirl */}
      <path d="M 8 18 H 58" />
      <path d="M 28 18 C 34 13, 40 13, 46 18 C 40 23, 34 23, 28 18 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M 52 14 Q 57 18 52 22" />

      {/* Right divider line with leaf swirl */}
      <path d="M 142 18 H 192" />
      <path d="M 154 18 C 160 13, 166 13, 172 18 C 166 23, 160 23, 154 18 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M 148 14 Q 143 18 148 22" />

      {/* Center Motif: Joined Hands & Ring / Heart Emblem */}
      {/* Left wrist & reaching hand */}
      <path d="M 64 23 Q 72 20, 82 18 T 92 17" />
      <path d="M 66 26 Q 74 23, 84 21 T 92 20" />

      {/* Center Interlocking Rings & Floating Heart */}
      <circle cx="95" cy="18" r="5" strokeWidth="1.2" />
      <circle cx="105" cy="18" r="5" strokeWidth="1.2" />
      {/* Top delicate heart */}
      <path d="M 100 10 C 97.5 7, 94 8, 94 11 C 94 13.8, 100 16, 100 16 C 100 16, 106 13.8, 106 11 C 106 8, 102.5 7, 100 10 Z" fill="currentColor" fillOpacity="0.22" strokeWidth="1.1" />

      {/* Right wrist & reaching hand */}
      <path d="M 136 23 Q 128 20, 118 18 T 108 17" />
      <path d="M 134 26 Q 126 23, 116 21 T 108 20" />
    </svg>
  );
}

/** Feather Quill Line-Art Icon for Letter-Writing Textarea */
export function FeatherQuillIcon({ className = "h-5 w-5 text-[#4d684f]/60" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Feather vane outline */}
      <path d="M 20 3 C 14 3, 7 8, 5 16 C 8 15.2, 12.5 15, 16.5 11 C 18.5 9, 20 6, 20 3 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Feather rachis / pen shaft */}
      <path d="M 19 4 L 4 19 L 2 22 L 5 20 L 11 14" />
      {/* Feather barb hatching */}
      <path d="M 15 7 Q 11 8.2, 8.5 12" />
      <path d="M 17.5 5.2 Q 14 7, 11.5 10" />
      {/* Ink nib detail */}
      <circle cx="2.5" cy="21.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

/** Brass Pin / Thread Motif for Pinned Wish Card Look */
export function CardPinMotif({ className = "h-5 w-5 text-[#b88636]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="5.5" r="3" fill="#d4af37" fillOpacity="0.45" stroke="#b88636" strokeWidth="1.2" />
      <circle cx="10" cy="5.5" r="1.1" fill="#b88636" />
      <path d="M 10 8.5 V 14" stroke="#4d684f" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

/** Mini Heart & Twin Leaf Floral Icon for Guest Name */
export function HeartFlowerIcon({ className = "h-4 w-4 text-[#4d684f]/80" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 10 5.5 C 8.5 3.2, 5.5 4.2, 5.5 6.8 C 5.5 9.5, 10 12.5, 10 12.5 C 10 12.5, 14.5 9.5, 14.5 6.8 C 14.5 4.2, 11.5 3.2, 10 5.5 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M 10 12.5 V 16.5" />
      <path d="M 10 13.8 Q 7.2 13.5, 6.5 15.2" />
      <path d="M 10 14.8 Q 12.8 14.5, 13.5 16.2" />
    </svg>
  );
}

/** Wax Seal Stamp Icon for Note Card Corner */
export function WaxSealStampIcon({ className = "h-5 w-5 text-[#b88636]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" fill="#b88636" fillOpacity="0.12" stroke="#b88636" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="6" stroke="#b88636" strokeWidth="0.9" strokeDasharray="2 1" />
      <path d="M 9.5 14.2 L 11 9.8 L 12.5 14.2 M 10 12.5 H 12" stroke="#b88636" strokeWidth="1" />
    </svg>
  );
}

/** Floating Bird in Flight Line-Art Accent */
export function BirdMotif({ className = "h-8 w-8 text-[#4d684f]/25" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 4 18 C 10 12, 14 10, 18 14 C 22 10, 26 12, 28 16 C 24 16, 20 18, 18 22 C 14 18, 10 19, 4 18 Z" fill="currentColor" fillOpacity="0.08" />
      <path d="M 18 14 Q 22 7, 27 5 Q 24 11, 22 15" />
      <path d="M 15 15 Q 10 10, 6 9 Q 10 14, 12 16" />
    </svg>
  );
}

/** Floating Leaf Sprig Line-Art Accent */
export function LeafSprigMotif({ className = "h-10 w-10 text-[#4d684f]/25" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 6 30 Q 16 22, 30 6" />
      <path d="M 12 24 C 8 20, 9 16, 14 18 C 19 20, 16 24, 12 24 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 18 18 C 16 12, 20 10, 22 15 C 24 20, 20 20, 18 18 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 22 14 C 20 8, 24 7, 26 11 C 28 15, 24 15, 22 14 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M 26 10 Q 28 4, 31 5 Q 31 8, 28 11" />
    </svg>
  );
}

/** Fully Developed Transparent Line-Art Corner Dove Motif */
export function CornerDoveMotif({ className = "h-14 w-14 text-[#4d684f]/40" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Dove Body & Tail feathers */}
      <path d="M 12 28 C 6 26, 4 22, 2 24 C 5 28, 9 30, 14 30 C 22 30, 28 26, 32 20 C 36 14, 40 12, 44 14 C 42 17, 38 20, 34 22 C 28 26, 22 32, 14 30 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Upper Wing */}
      <path d="M 24 22 C 20 12, 24 4, 34 2 C 30 9, 28 14, 28 20 C 26 21, 25 21, 24 22 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M 28 6 Q 24 12, 26 18" />
      <path d="M 31 4 Q 27 10, 29 16" />
      {/* Lower Wing */}
      <path d="M 22 25 C 18 30, 16 38, 22 44 C 22 38, 24 32, 26 27 Z" fill="currentColor" fillOpacity="0.08" />
      {/* Head, Beak & Olive Branch */}
      <path d="M 44 14 Q 46 12, 47 13 Q 45 15, 43 16" />
      <circle cx="41" cy="12.5" r="0.9" fill="currentColor" />
      {/* Olive Sprig in Beak */}
      <path d="M 46 13 Q 48 10, 47 7" strokeWidth="0.9" />
      <path d="M 47 9 C 45 7, 43 8, 45 10 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="0.8" />
      <path d="M 47 7 C 48 5, 46 4, 46 6 Z" fill="currentColor" fillOpacity="0.25" strokeWidth="0.8" />
    </svg>
  );
}

/** Floating Heart Line-Art Accent */
export function FloatingHeartMotif({ className = "h-6 w-6 text-[#b88636]/30" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 12 6 C 10 3, 6 4.2, 6 7.5 C 6 11, 12 15, 12 15 C 12 15, 18 11, 18 7.5 C 18 4.2, 14 3, 12 6 Z" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}

/** Olive Line Ribbon & Bow Divider Ornament */
export function RibbonBowDivider({ className = "h-7 w-48 text-[#4d684f]/70" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M 10 16 H 70" />
      <path d="M 30 16 C 36 11, 44 11, 50 16 C 44 21, 36 21, 30 16 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M 130 16 H 190" />
      <path d="M 150 16 C 156 11, 164 11, 170 16 C 164 21, 156 21, 150 16 Z" fill="currentColor" fillOpacity="0.15" />

      {/* Center Ribbon Bow Loops */}
      <path d="M 100 16 C 92 8, 80 10, 84 17 C 88 22, 98 17, 100 16 Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M 100 16 C 108 8, 120 10, 116 17 C 112 22, 102 17, 100 16 Z" fill="currentColor" fillOpacity="0.2" />
      <circle cx="100" cy="16" r="2" fill="currentColor" />

      {/* Ribbon Tails */}
      <path d="M 98 17 Q 92 25, 86 29" />
      <path d="M 102 17 Q 108 25, 114 29" />
    </svg>
  );
}

/** Expanded Wide Olive-Line Floral Ribbon Opening Divider for RSVP Section:
 * Prominent Mandap Canopy + Joined Hands & Kalash Emblem + Consistent Olive-Line Sparkle Rays
 */
export function RsvpOpeningSceneMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 65"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-16 w-full max-w-md text-[#4d684f] ${className}`}
      aria-hidden="true"
    >
      {/* FAR LEFT FLORAL TENDRIL & MINI FLOWER BLOSSOMS (0 - 132) */}
      <path d="M 6 38 Q 45 38, 132 38" strokeWidth="1.2" />
      {/* Far Left End Swirl & Leaf Bud */}
      <path d="M 6 38 C 14 30, 22 32, 18 40 C 14 46, 8 42, 12 38 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.1" />
      {/* Left 5-Petal Mini Flower Blossom #1 at x=35 */}
      <circle cx="35" cy="38" r="1.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.3" />
      <circle cx="35" cy="33" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="35" cy="43" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="30" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="40" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      {/* Left Olive Leaves */}
      <path d="M 58 38 C 50 30, 54 26, 62 31 C 68 36, 64 38, 58 38 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M 84 38 C 76 30, 80 26, 88 31 C 94 36, 90 38, 84 38 Z" fill="currentColor" fillOpacity="0.18" />
      {/* Left 5-Petal Mini Flower Blossom #2 at x=108 */}
      <circle cx="108" cy="38" r="1.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.3" />
      <circle cx="108" cy="33" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="108" cy="43" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="103" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="113" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />

      {/* FAR RIGHT FLORAL TENDRIL & MINI FLOWER BLOSSOMS (228 - 354) */}
      <path d="M 228 38 Q 315 38, 354 38" strokeWidth="1.2" />
      {/* Far Right End Swirl & Leaf Bud */}
      <path d="M 354 38 C 346 30, 338 32, 342 40 C 346 46, 352 42, 348 38 Z" fill="currentColor" fillOpacity="0.15" strokeWidth="1.1" />
      {/* Right 5-Petal Mini Flower Blossom #1 at x=325 */}
      <circle cx="325" cy="38" r="1.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.3" />
      <circle cx="325" cy="33" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="325" cy="43" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="320" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="330" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      {/* Right Olive Leaves */}
      <path d="M 302 38 C 310 30, 306 26, 298 31 C 292 36, 296 38, 302 38 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M 276 38 C 284 30, 280 26, 272 31 C 266 36, 270 38, 276 38 Z" fill="currentColor" fillOpacity="0.18" />
      {/* Right 5-Petal Mini Flower Blossom #2 at x=252 */}
      <circle cx="252" cy="38" r="1.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.3" />
      <circle cx="252" cy="33" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="252" cy="43" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="247" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />
      <circle cx="257" cy="38" r="2" stroke="currentColor" strokeWidth="0.9" fill="currentColor" fillOpacity="0.15" />

      {/* PROMINENT RECOGNIZABLE WEDDING MANDAP & JOINED HANDS / KALASH CENTERPIECE (135 - 225) */}
      {/* Mandap Pillars */}
      <path d="M 148 56 V 38 H 152 V 56" strokeWidth="1.1" fill="#faf6ef" fillOpacity="0.7" />
      <path d="M 208 56 V 38 H 212 V 56" strokeWidth="1.1" fill="#faf6ef" fillOpacity="0.7" />
      {/* Mandap Base Platform */}
      <path d="M 142 56 H 218" strokeWidth="1.3" />

      {/* Royal Mandap Curved Canopy Dome */}
      <path d="M 146 38 Q 180 18, 214 38" strokeWidth="1.3" fill="#faf6ef" fillOpacity="0.8" />
      <path d="M 146 38 C 160 44, 200 44, 214 38" strokeWidth="1.1" />

      {/* Hanging Garland Loops under Mandap Dome */}
      <path d="M 152 40 Q 160 46, 168 40 Q 176 46, 184 40 Q 192 46, 200 40 Q 208 46, 212 40" strokeWidth="1" strokeDasharray="2 1.5" />

      {/* Sacred Kalash / Joined-Hands Vessel at Center of Mandap */}
      <path d="M 174 56 C 173 50, 172 46, 176 44 H 184 C 188 46, 187 50, 186 56 Z" strokeWidth="1.1" fill="#faf6ef" />
      <path d="M 174 44 C 176 40, 184 40, 186 44" strokeWidth="1" />
      <path d="M 180 34 L 176 40 H 184 Z" fill="#b88636" fillOpacity="0.25" stroke="#b88636" strokeWidth="1" />

      {/* Interlocking Rings Emblem over Mandap Dome Peak */}
      <circle cx="176" cy="18" r="4" stroke="#b88636" strokeWidth="1.2" fill="none" />
      <circle cx="184" cy="18" r="4" stroke="#b88636" strokeWidth="1.2" fill="none" />

      {/* CONSISTENT OLIVE-LINE FLOATING SPARKS & HEARTS (MATCHING SITE LINEWORK STROKE & WEIGHT) */}
      {/* Center Floating Heart */}
      <path d="M 180 7 C 177.5 4, 174 5, 174 8 C 174 10.8, 180 13, 180 13 C 180 13, 186 10.8, 186 8 C 186 5, 182.5 4, 180 7 Z" fill="#b88636" fillOpacity="0.25" stroke="#b88636" strokeWidth="1.1" />

      {/* Consistent Olive-Line Sparkle Cross Rays (Left & Right) */}
      {/* Left Sparkle Star at x=138, y=14 */}
      <path d="M 138 9 V 19" stroke="#4d684f" strokeWidth="1.1" />
      <path d="M 133 14 H 143" stroke="#4d684f" strokeWidth="1.1" />
      <path d="M 135 11 L 141 17" stroke="#4d684f" strokeWidth="0.9" />

      {/* Right Sparkle Star at x=222, y=14 */}
      <path d="M 222 9 V 19" stroke="#4d684f" strokeWidth="1.1" />
      <path d="M 217 14 H 227" stroke="#4d684f" strokeWidth="1.1" />
      <path d="M 219 11 L 225 17" stroke="#4d684f" strokeWidth="0.9" />

      {/* Additional Subtle Olive Line Rays Top Center */}
      <path d="M 180 2 V 4" stroke="#b88636" strokeWidth="1.1" />
      <path d="M 162 10 L 165 12" stroke="#4d684f" strokeWidth="1" />
      <path d="M 198 10 L 195 12" stroke="#4d684f" strokeWidth="1" />
    </svg>
  );
}

/** Vertical Organic Connective Olive Branch between Invitation Card & Journey Illustration:
 * Graceful vertical olive stem with leaves and gold olives, replacing the dashed thread
 */
export function ConnectiveOliveBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-24 w-12 text-[#4d684f] ${className}`}
      aria-hidden="true"
    >
      {/* Main Organic Vertical Stem */}
      <path
        d="M 25 0 Q 18 25, 26 50 T 25 100"
        stroke="#4d684f"
        strokeWidth="1.3"
      />

      {/* Top Left Leaf */}
      <path d="M 23 18 C 14 14, 8 16, 10 22 C 14 24, 20 22, 23 18 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
      {/* Top Right Leaf */}
      <path d="M 24 28 C 33 24, 39 26, 37 32 C 33 34, 27 32, 24 28 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />

      {/* Upper Left Gold Accent Olive Fruit */}
      <circle cx="16" cy="38" r="2.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.35" />

      {/* Middle Left Leaf */}
      <path d="M 23 48 C 13 44, 7 48, 10 54 C 15 56, 20 52, 23 48 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
      {/* Middle Right Leaf */}
      <path d="M 26 58 C 36 54, 42 58, 39 64 C 34 66, 28 62, 26 58 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />

      {/* Lower Right Gold Accent Olive Fruit */}
      <circle cx="33" cy="68" r="2.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.35" />

      {/* Lower Left Leaf */}
      <path d="M 25 78 C 15 74, 9 78, 12 84 C 17 86, 22 82, 25 78 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
      {/* Lower Right Leaf */}
      <path d="M 25 88 C 34 84, 40 88, 37 94 C 32 96, 27 92, 25 88 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
    </svg>
  );
}

/** Backward compatibility alias for ConnectiveOliveBranch */
export function JourneyThreadConnector({ className = "" }: { className?: string }) {
  return <ConnectiveOliveBranch className={className} />;
}

/** Vertical Organic Olive Palm Branch Connector between Travel Cards:
 * Continuous olive stem with delicate palm leaves and gold accent buds connecting travel cards
 */
export function TravelJourneyConnector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 140"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-36 w-14 text-[#4d684f] ${className}`}
      aria-hidden="true"
    >
      {/* Main Organic Vertical Curved Stem */}
      <path
        d="M 25 0 Q 34 35, 23 70 T 25 140"
        stroke="#4d684f"
        strokeWidth="1.3"
      />

      {/* Palm Leaf 1 (Top Left) */}
      <path d="M 24 16 C 14 11, 8 13, 10 19 C 14 21, 20 19, 24 16 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
      {/* Palm Leaf 2 (Top Right) */}
      <path d="M 26 26 C 36 21, 42 23, 40 29 C 35 31, 29 29, 26 26 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />

      {/* Gold Accent Bud 1 (Mid-Upper Left) */}
      <circle cx="15" cy="38" r="2.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.35" />

      {/* Palm Leaf 3 (Mid-Upper Left) */}
      <path d="M 23 48 C 13 43, 7 47, 10 53 C 15 55, 20 51, 23 48 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
      {/* Palm Leaf 4 (Center Right) */}
      <path d="M 24 62 C 34 57, 41 61, 38 67 C 33 69, 27 65, 24 62 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />

      {/* Gold Accent Bud 2 (Center Right) */}
      <circle cx="35" cy="74" r="2.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.35" />

      {/* Palm Leaf 5 (Mid-Lower Left) */}
      <path d="M 24 86 C 14 81, 8 85, 11 91 C 16 93, 21 89, 24 86 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
      {/* Palm Leaf 6 (Lower Right) */}
      <path d="M 25 102 C 35 97, 41 101, 38 107 C 33 109, 27 105, 25 102 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />

      {/* Gold Accent Bud 3 (Lower Left) */}
      <circle cx="15" cy="116" r="2.5" stroke="#b88636" strokeWidth="1.1" fill="#b88636" fillOpacity="0.35" />

      {/* Palm Leaf 7 (Bottom Left) */}
      <path d="M 25 124 C 15 119, 9 123, 12 129 C 17 131, 22 127, 25 124 Z" fill="#4d684f" fillOpacity="0.25" stroke="#4d684f" strokeWidth="1" />
    </svg>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  className = "",
  customOrnament,
}: {
  eyebrow?: string;
  title: string;
  className?: string;
  customOrnament?: React.ReactNode;
}) {
  return (
    <header className={`flex flex-col items-center text-center ${className}`}>
      {eyebrow && (
        <p className="text-[0.66rem] uppercase tracking-[0.32em] text-accent/90 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 font-script text-5xl md:text-6xl text-primary font-normal leading-tight tracking-wide">
        {title}
      </h2>
      {customOrnament ?? <Ornament className="mx-auto mt-2" />}
    </header>
  );
}

