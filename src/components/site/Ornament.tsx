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
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
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
      <Ornament className="mx-auto mt-2" />
    </header>
  );
}
