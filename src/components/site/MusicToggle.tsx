import { useEffect, useRef, useState } from "react";
import { Music, VolumeX, Volume1, Volume2, Upload, Settings, X, Check, Disc, RefreshCw, Youtube, AlertCircle } from "lucide-react";
import { raabtaAudioEngine } from "@/utils/RaabtaAudioEngine";
import defaultMusicUrl from "@/assets/default_music.mp3";

interface MusicToggleProps {
  on: boolean;
  onToggle: () => void;
  audioSrc?: string;
}

const STORAGE_KEY_CUSTOM_URL = "wedding_custom_raabta_mp3_url";
const STORAGE_KEY_CUSTOM_TITLE = "wedding_custom_raabta_mp3_title";

// Persistent HTMLAudioElement instance outside React re-render cycles
let globalAudioInstance: HTMLAudioElement | null = null;

function getOrCreateAudioElement(src: string): HTMLAudioElement {
  if (!globalAudioInstance) {
    globalAudioInstance = new Audio(src);
    globalAudioInstance.loop = true;
    globalAudioInstance.volume = 0.7;

    // Enforce looping at the 55-second mark as requested
    globalAudioInstance.ontimeupdate = () => {
      if (globalAudioInstance && globalAudioInstance.currentTime >= 55) {
        globalAudioInstance.currentTime = 0;
      }
    };
  }
  return globalAudioInstance;
}

/** Extract 11-character YouTube video ID from any YouTube video/music/shorts URL */
function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : null;
}

/** Extract Spotify Track ID from link */
function extractSpotifyTrackId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?track\/([a-zA-Z0-9]+)/);
  return match && match[1] ? match[1] : null;
}

/** Format clean audio filename from web URL path */
function extractAudioTitleFromUrl(url: string): string {
  try {
    const cleanUrl = url.split("?")[0]!.split("#")[0]!;
    const filename = cleanUrl.substring(cleanUrl.lastIndexOf("/") + 1);
    if (filename && filename.length > 2) {
      const titleWithoutExt = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      return titleWithoutExt.replace(/\b\w/g, (l) => l.toUpperCase());
    }
  } catch {}
  return "Custom Audio Stream";
}

/** Check if link is SoundCloud */
function isSoundCloudUrl(url: string): boolean {
  return Boolean(url && url.includes("soundcloud.com"));
}

/** Auto-convert Google Drive, Dropbox & cloud share links to raw direct audio stream URLs */
function normalizeAudioUrl(url: string): string {
  let cleaned = url.trim();

  // Handle Google Drive share URLs:
  const gdriveMatch =
    cleaned.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    cleaned.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);
  if (gdriveMatch && gdriveMatch[1]) {
    return `https://docs.google.com/uc?export=download&id=${gdriveMatch[1]}`;
  }

  // Handle Dropbox share URLs:
  if (cleaned.includes("dropbox.com")) {
    cleaned = cleaned.replace("?dl=0", "?raw=1").replace("&dl=0", "&raw=1");
    if (!cleaned.includes("raw=1") && !cleaned.includes("dl=1")) {
      cleaned += (cleaned.includes("?") ? "&" : "?") + "raw=1";
    }
    return cleaned;
  }

  return cleaned;
}

/** Synchronous initial audio state reader to prevent race conditions on page refresh */
function getInitialAudioState() {
  try {
    const savedUrl = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY_CUSTOM_URL) : null;
    const savedTitle = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY_CUSTOM_TITLE) : null;

    if (savedUrl) {
      const ytId = extractYouTubeId(savedUrl);
      const spotifyId = extractSpotifyTrackId(savedUrl);
      const isSc = isSoundCloudUrl(savedUrl);

      let songName = savedTitle || "Custom Audio";
      if (spotifyId && !savedTitle) songName = "Spotify Audio Track";
      else if (ytId && !savedTitle) songName = "YouTube Music Track";
      else if (isSc && !savedTitle) songName = "SoundCloud Track";
      else if (!savedTitle) songName = extractAudioTitleFromUrl(savedUrl);

      return {
        url: savedUrl,
        title: songName,
        ytId,
        spotifyId,
        soundCloudUrl: isSc ? savedUrl : null,
      };
    }
  } catch {}

  return {
    url: null,
    title: "Kehte Hain Khuda Ne • Raabta",
    ytId: null,
    spotifyId: null,
    soundCloudUrl: null,
  };
}

export function MusicToggle({ on, onToggle, audioSrc = defaultMusicUrl }: MusicToggleProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Read initial audio state synchronously before first render
  const [initialAudioState] = useState(() => getInitialAudioState());

  const [showModal, setShowModal] = useState(false);
  const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(initialAudioState.url);
  const [inputUrlText, setInputUrlText] = useState("");
  const [songName, setSongName] = useState(initialAudioState.title);

  // Volume state (0.0 to 1.0)
  const [volume, setVolume] = useState(0.7);

  const [ytVideoId, setYtVideoId] = useState<string | null>(initialAudioState.ytId);
  const [spotifyTrackId, setSpotifyTrackId] = useState<string | null>(initialAudioState.spotifyId);
  const [soundCloudUrl, setSoundCloudUrl] = useState<string | null>(initialAudioState.soundCloudUrl);

  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState(true);
  const [audioError, setAudioError] = useState<string | null>(null);

  const activeSrc = customAudioUrl ? normalizeAudioUrl(customAudioUrl) : audioSrc;

  // Function to update volume across all audio engines
  function updateVolume(newVol: number) {
    const clamped = Math.max(0, Math.min(1, Math.round(newVol * 10) / 10));
    setVolume(clamped);

    // 1. Update HTML5 Audio Element Volume
    if (globalAudioInstance) {
      globalAudioInstance.volume = clamped;
    }

    // 2. Update Synth Engine Volume
    raabtaAudioEngine.setVolume(clamped);

    // 3. Update YouTube Iframe Volume via postMessage
    if (ytVideoId) {
      try {
        const iframe = document.getElementById("yt-bg-audio-player") as HTMLIFrameElement;
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage(
            JSON.stringify({
              event: "command",
              func: "setVolume",
              args: [Math.round(clamped * 100)],
            }),
            "*"
          );
        }
      } catch {}
    }
  }

  // React to 'on' state changes or 'activeSrc' changes for standard HTML5 Audio
  useEffect(() => {
    raabtaAudioEngine.setVolume(volume);

    // If using iframe embeds (YouTube / Spotify / SoundCloud), pause standard audio element immediately
    if (ytVideoId || spotifyTrackId || soundCloudUrl) {
      if (globalAudioInstance) {
        globalAudioInstance.pause();
        globalAudioInstance.currentTime = 0;
      }
      raabtaAudioEngine.stop();
      return;
    }

    const audio = getOrCreateAudioElement(activeSrc);
    audio.volume = volume;

    // Attach 55-second loop handler to guarantee 55-second cutoff & restart
    audio.ontimeupdate = () => {
      if (audio && audio.currentTime >= 55) {
        audio.currentTime = 0;
      }
    };

    if (on) {
      if (audio.src !== activeSrc && !audio.src.endsWith(activeSrc)) {
        audio.pause();
        audio.src = activeSrc;
        audio.load();
      }

      audio
        .play()
        .then(() => {
          setAudioError(null);
          raabtaAudioEngine.stop();
        })
        .catch((err) => {
          console.warn("Audio play error, falling back to acoustic synth engine:", err);
          raabtaAudioEngine.start();
        });
    } else {
      audio.pause();
      raabtaAudioEngine.stop();
    }
  }, [on, activeSrc, ytVideoId, spotifyTrackId, soundCloudUrl, volume]);

  function handleVolumeUp(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    updateVolume(volume + 0.1);
  }

  function handleVolumeDown(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    updateVolume(volume - 0.1);
  }

  function changeAndPlayAudioSource(rawUrl: string, title: string) {
    setAudioError(null);
    setSongName(title);

    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM_URL, rawUrl);
      localStorage.setItem(STORAGE_KEY_CUSTOM_TITLE, title);
    } catch {}

    // Ensure all other audio sources are completely stopped first
    if (globalAudioInstance) {
      globalAudioInstance.pause();
      globalAudioInstance.currentTime = 0;
    }
    raabtaAudioEngine.stop();

    // 1. Check if link is a Spotify Link
    const extractedSpotifyId = extractSpotifyTrackId(rawUrl);
    if (extractedSpotifyId) {
      setSpotifyTrackId(extractedSpotifyId);
      setShowSpotifyEmbed(true);
      setYtVideoId(null);
      setSoundCloudUrl(null);
      setCustomAudioUrl(rawUrl);

      if (!on) onToggle();
      setShowModal(false);
      return;
    }

    // 2. Check if link is a YouTube Link
    const extractedYtId = extractYouTubeId(rawUrl);
    if (extractedYtId) {
      setYtVideoId(extractedYtId);
      setSpotifyTrackId(null);
      setSoundCloudUrl(null);
      setCustomAudioUrl(rawUrl);

      if (!on) onToggle();
      setShowModal(false);
      return;
    }

    // 3. Check if link is SoundCloud
    if (isSoundCloudUrl(rawUrl)) {
      setSoundCloudUrl(rawUrl);
      setYtVideoId(null);
      setSpotifyTrackId(null);
      setCustomAudioUrl(rawUrl);

      if (!on) onToggle();
      setShowModal(false);
      return;
    }

    // 4. Otherwise, handle as standard Audio stream (Google Drive / Dropbox / Direct MP3)
    setYtVideoId(null);
    setSpotifyTrackId(null);
    setSoundCloudUrl(null);

    const url = normalizeAudioUrl(rawUrl);
    setCustomAudioUrl(url);

    const audio = getOrCreateAudioElement(url);
    audio.volume = volume;
    audio.pause();
    audio.src = url;
    audio.load();
    audio.currentTime = 0;

    if (!on) {
      onToggle();
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setAudioError(null);
          raabtaAudioEngine.stop();
        })
        .catch((err) => {
          console.warn("Audio play error for URL:", url, err);
          setAudioError("Streaming audio... if it's blocked, try YouTube, Spotify, Google Drive, or Upload MP3!");
          raabtaAudioEngine.start();
        });
    }

    setShowModal(false);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setYtVideoId(null);
      setSpotifyTrackId(null);
      setSoundCloudUrl(null);

      const blobUrl = URL.createObjectURL(file);
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      const formattedTitle = cleanName.replace(/\b\w/g, (l) => l.toUpperCase());

      changeAndPlayAudioSource(blobUrl, formattedTitle);

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target?.result as string;
        if (base64Data) {
          try {
            localStorage.setItem(STORAGE_KEY_CUSTOM_URL, base64Data);
            localStorage.setItem(STORAGE_KEY_CUSTOM_TITLE, formattedTitle);
          } catch {}
        }
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSaveUrl() {
    if (inputUrlText.trim()) {
      const rawUrl = inputUrlText.trim();
      const spotifyId = extractSpotifyTrackId(rawUrl);
      const ytId = extractYouTubeId(rawUrl);

      let derivedTitle = extractAudioTitleFromUrl(rawUrl);
      if (spotifyId) {
        derivedTitle = "Spotify Audio Track";
      } else if (ytId) {
        derivedTitle = "YouTube Music Track";
      }

      changeAndPlayAudioSource(rawUrl, derivedTitle);
    }
  }

  function handleResetToDefault() {
    try {
      localStorage.removeItem(STORAGE_KEY_CUSTOM_URL);
      localStorage.removeItem(STORAGE_KEY_CUSTOM_TITLE);
    } catch {}

    setYtVideoId(null);
    setSpotifyTrackId(null);
    setSoundCloudUrl(null);
    setCustomAudioUrl(null);
    setSongName("Kehte Hain Khuda Ne • Raabta");
    setAudioError(null);

    const audio = getOrCreateAudioElement(audioSrc);
    audio.volume = volume;
    audio.pause();
    audio.src = audioSrc;
    audio.load();

    if (on) {
      audio
        .play()
        .then(() => {
          raabtaAudioEngine.stop();
        })
        .catch(() => {
          raabtaAudioEngine.start();
        });
    }

    setShowModal(false);
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        accept="audio/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Hidden YouTube Background Audio Player Iframe */}
      {ytVideoId && on && (
        <iframe
          key={ytVideoId}
          id="yt-bg-audio-player"
          className="pointer-events-none fixed -top-[9999px] -left-[9999px] h-1 w-1 opacity-0"
          src={`https://www.youtube-nocookie.com/embed/${ytVideoId}?autoplay=1&loop=1&playlist=${ytVideoId}&enablejsapi=1&controls=0&mute=0`}
          allow="autoplay"
          title="Background YouTube Audio Player"
        />
      )}

      {/* Spotify Embed Player Card */}
      {spotifyTrackId && on && showSpotifyEmbed && (
        <div className="fixed bottom-24 right-5 z-[9999] max-w-xs rounded-2xl border border-amber-200/40 bg-black/90 p-2 shadow-2xl backdrop-blur-md animate-fade-in">
          <div className="flex items-center justify-between px-2 pb-1.5 text-xs text-amber-100">
            <span className="flex items-center gap-1.5 font-medium text-[0.68rem] text-emerald-400">
              <Disc className="h-3.5 w-3.5 animate-spin" /> Spotify Player
            </span>
            <button
              onClick={() => setShowSpotifyEmbed(false)}
              className="rounded-full p-0.5 text-amber-200/60 hover:text-amber-100"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <iframe
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
            width="280"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-xl"
            title="Spotify Audio Player"
          />
        </div>
      )}

      {/* SoundCloud Embed Player Card */}
      {soundCloudUrl && on && (
        <iframe
          className="pointer-events-none fixed -top-[9999px] -left-[9999px] h-1 w-1 opacity-0"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(soundCloudUrl)}&auto_play=true`}
          allow="autoplay"
          title="SoundCloud Audio Player"
        />
      )}

      {/* Permanently Sticky Control Badge in Bottom-Right Corner (Never hides centered date, stays fixed on scroll) */}
      <div className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end gap-1.5 animate-fade-in pointer-events-auto">
        {/* Main Floating Round Play/Mute Button */}
        <button
          onClick={onToggle}
          aria-label={on ? "Mute music" : "Play Kehte Hain Khuda Ne (Raabta)"}
          title={on ? "Mute music" : "Play Kehte Hain Khuda Ne (Raabta)"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/50 bg-black/90 text-amber-100 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-black hover:scale-105 active:scale-95 group cursor-pointer"
        >
          {on ? (
            <Music className="h-4 w-4 text-amber-200 group-hover:scale-110 transition-transform" />
          ) : (
            <VolumeX className="h-4 w-4 text-amber-100/70 group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Compact Vertical Song Tag & Settings Click Target */}
        {on && (
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1.5 rounded-full border border-amber-200/35 bg-black/85 px-2.5 py-1 backdrop-blur-md shadow-xl text-amber-100 transition-all hover:bg-black/95 hover:border-amber-200/60 text-[0.6rem] font-medium tracking-wider uppercase cursor-pointer"
          >
            <Settings className="h-3 w-3 text-amber-300 shrink-0" />
            <span className="max-w-[85px] truncate text-[0.58rem]">{songName}</span>
          </button>
        )}
      </div>

      {/* Audio Setup & Volume Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-3xl border border-amber-200/40 bg-[#161412] p-6 text-amber-100 shadow-2xl text-left">
            <div className="flex items-center justify-between border-b border-amber-200/20 pb-3">
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-amber-300" />
                <h3 className="font-display text-lg text-amber-100">Universal Music Settings</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full p-1 text-amber-200/60 hover:bg-amber-200/10 hover:text-amber-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Currently Active Song & Volume Controls */}
            <div className="mt-3 rounded-2xl border border-amber-200/30 bg-black/60 p-3.5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Disc className="h-5 w-5 text-amber-300 animate-spin shrink-0" style={{ animationDuration: "3s" }} />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[0.58rem] uppercase tracking-[0.2em] font-medium text-amber-300/80">
                    CURRENTLY PLAYING
                  </span>
                  <span className="text-xs font-medium text-amber-100 truncate mt-0.5">
                    {songName}
                  </span>
                </div>
              </div>

              {/* Volume Slider & Controls inside Modal */}
              <div className="border-t border-amber-200/15 pt-2.5 flex items-center justify-between">
                <span className="text-[0.65rem] uppercase tracking-wider text-amber-200/70 font-medium flex items-center gap-1">
                  <Volume2 className="h-3.5 w-3.5 text-amber-300" /> Volume Level:
                </span>
                <div className="flex items-center gap-2 bg-black/80 border border-amber-200/30 rounded-full px-2.5 py-1">
                  <button
                    type="button"
                    onClick={handleVolumeDown}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-amber-200/90 hover:bg-amber-200/20 active:scale-90 transition-all cursor-pointer"
                  >
                    <Volume1 className="h-3 w-3" />
                  </button>
                  <span className="text-xs font-mono font-medium text-amber-300 w-8 text-center select-none">
                    {Math.round(volume * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={handleVolumeUp}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-amber-200/90 hover:bg-amber-200/20 active:scale-90 transition-all cursor-pointer"
                  >
                    <Volume2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-amber-200/80 font-sans">
              Paste <strong>ANY song link from ANY platform</strong> (YouTube, Spotify, Gaana, SoundCloud, Apple Music, Google Drive):
            </p>

            {audioError && (
              <div className="mt-2.5 flex items-start gap-2 text-[0.7rem] text-rose-300 bg-rose-950/50 border border-rose-500/40 rounded-xl p-2.5 font-sans leading-relaxed">
                <AlertCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{audioError}</span>
              </div>
            )}

            {/* Option A: Paste Universal Music Link */}
            <div className="mt-4">
              <label className="text-[0.68rem] uppercase tracking-wider text-amber-200/80 font-medium block mb-1">
                Paste Song Link (YouTube, Spotify, SoundCloud, etc.):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="https://music.youtube.com/watch?v=... or Spotify link"
                  value={inputUrlText}
                  onChange={(e) => setInputUrlText(e.target.value)}
                  className="flex-1 rounded-xl border border-amber-200/30 bg-black/50 px-3 py-2 text-xs text-amber-100 focus:border-amber-300 focus:outline-hidden placeholder:text-amber-200/30"
                />
                <button
                  onClick={handleSaveUrl}
                  className="rounded-xl border border-amber-300/40 bg-amber-400/20 px-3.5 py-2 text-xs font-medium text-amber-200 hover:bg-amber-400/30 flex items-center justify-center gap-1 shrink-0"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Play</span>
                </button>
              </div>

              {/* Supported Platforms Pill Bar */}
              <div className="mt-2 flex flex-wrap gap-1.5 text-[0.6rem] text-amber-200/70">
                <span className="rounded-md bg-red-950/60 border border-red-500/30 px-1.5 py-0.5 text-red-300">YouTube</span>
                <span className="rounded-md bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 text-emerald-300">Spotify</span>
                <span className="rounded-md bg-orange-950/60 border border-orange-500/30 px-1.5 py-0.5 text-orange-300">SoundCloud</span>
                <span className="rounded-md bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 text-amber-300">Google Drive</span>
              </div>
            </div>

            {/* Option B: Upload Local MP3 File */}
            <div className="mt-4 border-t border-amber-200/15 pt-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2.5 rounded-2xl border border-amber-300/40 bg-amber-400/15 py-2.5 px-4 text-xs uppercase tracking-wider text-amber-100 font-medium hover:bg-amber-400/25 transition-all shadow-xs"
              >
                <Upload className="h-4 w-4 text-amber-300" />
                <span>Or Upload MP3 / Audio File</span>
              </button>
            </div>

            {/* Project Folder Path Hint */}
            <div className="mt-4 rounded-2xl border border-amber-200/15 bg-black/40 p-3 text-[0.68rem] text-amber-200/70 leading-normal">
              💡 <strong>Project File Tip:</strong> Place your MP3 file in:
              <br />
              <code className="text-amber-300 font-mono text-[0.65rem] block mt-1 bg-black/60 px-2 py-1 rounded-md">
                public/audio/raabta.mp3
              </code>
            </div>

            {(customAudioUrl || ytVideoId || spotifyTrackId || soundCloudUrl) && (
              <button
                onClick={handleResetToDefault}
                className="mt-4 flex items-center justify-center gap-1.5 w-full text-center text-[0.68rem] text-amber-300/60 hover:text-amber-300 underline"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Reset to default audio</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
