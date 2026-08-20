import type { ReactNode } from "react";
import desktopBg from "@/assets/desktop-bg.jpg";

/**
 * 5. Desktop-specific layout — same component tree, constrained to a
 * mobile-width viewport inside a device bezel. Mobile/tablet render bare.
 */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="lg:hidden">{children}</div>

      <div
        className="fixed inset-0 hidden items-center justify-center bg-cover bg-center lg:flex"
        style={{ backgroundImage: `url(${desktopBg})` }}
      >
        <div className="relative h-[86vh] max-h-[860px] w-[400px] rounded-[3rem] border border-border bg-ink p-3 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]">
          <div className="absolute left-1/2 top-4 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-ink" />
          <div className="no-scrollbar h-full w-full overflow-y-auto overscroll-contain rounded-[2.3rem] bg-background">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
