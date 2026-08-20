import type { ReactNode } from "react";
import desktopBg from "@/assets/desktop-bg.jpg";

/**
 * 5. Desktop-specific layout — the exact same component tree, constrained to a
 * mobile-width viewport inside a device bezel. Below 1024px it renders bare.
 * The scroll container is transformed on desktop so `fixed` children (e.g. the
 * music toggle) are contained by the phone frame instead of the browser.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="lg:fixed lg:inset-0 lg:flex lg:items-center lg:justify-center lg:bg-cover lg:bg-center"
      style={{ ["--phone-bg" as string]: `url(${desktopBg})` }}
    >
      <div className="hidden lg:absolute lg:inset-0 lg:block lg:bg-cover lg:bg-center" style={{ backgroundImage: `url(${desktopBg})` }} />
      <div className="lg:relative lg:h-[88vh] lg:max-h-[880px] lg:w-[404px] lg:rounded-[3rem] lg:border lg:border-border/60 lg:bg-ink lg:p-3 lg:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]">
        <div className="no-scrollbar h-full w-full lg:transform-gpu lg:overflow-y-auto lg:overscroll-contain lg:rounded-[2.3rem] lg:bg-background">
          {children}
        </div>
      </div>
    </div>
  );
}
