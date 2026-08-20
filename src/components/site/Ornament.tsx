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

export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <header className="flex flex-col items-center text-center">
      {eyebrow && (
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-[2rem] leading-tight text-foreground">
        {title}
      </h2>
      <Ornament className="mt-3" />
    </header>
  );
}
