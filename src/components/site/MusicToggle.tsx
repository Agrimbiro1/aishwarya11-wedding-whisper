import { Music, VolumeX } from "lucide-react";

export function MusicToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={on ? "Mute music" : "Play music"}
      className="fixed bottom-5 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/45 bg-black/65 text-amber-100 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-black/80 hover:border-amber-200/60 active:scale-95"
    >
      {on ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
}
