import { Music, VolumeX } from "lucide-react";

export function MusicToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={on ? "Mute music" : "Play music"}
      className="fixed bottom-5 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-sm backdrop-blur transition-transform active:scale-95"
    >
      {on ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
}
