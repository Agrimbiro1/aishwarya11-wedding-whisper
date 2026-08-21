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
      <div className="lg:relative lg:h-[88vh] lg:max-h-[880px] lg:w-[404px] lg:rounded-[3rem] lg:border lg:border-border/60 lg:bg-ink lg:p-3 lg:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]">
        <div
          className={`no-scrollbar h-full w-full lg:transform-gpu lg:rounded-[2.3rem] lg:bg-background ${
            scrollable ? "lg:overflow-y-auto lg:overscroll-contain" : "lg:overflow-hidden"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
