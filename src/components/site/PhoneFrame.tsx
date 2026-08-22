import type { ReactNode } from "react";
import desktopBg from "@/assets/desktop-bg.jpg";

/**
 * 5. Desktop-specific layout — constrained to a mobile-width viewport inside a device bezel.
 * Below 1024px it renders bare.
 * Controlled `scrollable` prop allows locking scroll during gate/video stages.
 */
export function PhoneFrame({
  children,
  scrollable = true,
}: {
  children: ReactNode;
  scrollable?: boolean;
}) {
  return (
    <div
      className="lg:fixed lg:inset-0 lg:flex lg:items-center lg:justify-center lg:bg-cover lg:bg-center"
      style={{ ["--phone-bg" as string]: `url(${desktopBg})` }}
    >
      <div
        className="hidden lg:absolute lg:inset-0 lg:block lg:bg-cover lg:bg-center"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />
      {/* Outer Premium Titanium Smartphone Mockup Frame */}
      <div className="lg:relative lg:h-[89vh] lg:max-h-[890px] lg:w-[412px] lg:rounded-[3rem] lg:bg-gradient-to-br lg:from-[#585c63] lg:via-[#303338] lg:to-[#18191c] lg:p-[5px] lg:shadow-[0_35px_90px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_2px_rgba(255,255,255,0.25)]">
        {/* Left Side Volume Keys */}
        <div className="hidden lg:block absolute -left-[3px] top-[120px] w-[3px] h-8 rounded-l-[2px] bg-gradient-to-b from-[#505359] to-[#282a2e]" />
        <div className="hidden lg:block absolute -left-[3px] top-[165px] w-[3px] h-8 rounded-l-[2px] bg-gradient-to-b from-[#505359] to-[#282a2e]" />
        
        {/* Right Side Power Key */}
        <div className="hidden lg:block absolute -right-[3px] top-[145px] w-[3px] h-12 rounded-r-[2px] bg-gradient-to-b from-[#505359] to-[#282a2e]" />

        {/* Inner Highlight Ring & Screen Shell */}
        <div className="relative h-full w-full lg:rounded-[2.7rem] lg:border lg:border-white/15 lg:bg-[#0b0c0e] lg:overflow-hidden">
          {/* Top Decorative Pill Cutout ("Dynamic Island Style") */}
          <div className="hidden lg:flex pointer-events-none absolute top-2.5 left-1/2 -translate-x-1/2 z-50 h-4.5 w-22 items-center justify-between rounded-full bg-black px-2 shadow-[inset_0_0_2px_rgba(255,255,255,0.15)]">
            <div className="h-2 w-2 rounded-full bg-[#0c141f] ring-1 ring-white/10" />
            <div className="flex items-center space-x-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#0a121a]" />
              <div className="h-2 w-2 rounded-full bg-[#060c14] ring-1 ring-white/10" />
            </div>
          </div>

          {/* Live Mobile Screen Area */}
          <div
            className={`no-scrollbar h-full w-full lg:transform-gpu lg:rounded-[2.6rem] lg:bg-background ${
              scrollable ? "lg:overflow-y-auto lg:overscroll-contain" : "lg:overflow-hidden"
            }`}
          >
            {children}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="hidden lg:block pointer-events-none absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-32 rounded-full bg-white/45 z-50" />
        </div>
      </div>
    </div>
  );
}
