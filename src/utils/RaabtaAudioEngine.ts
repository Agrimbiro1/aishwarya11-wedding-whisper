/**
 * Polyphonic Warm Acoustic & Piano Harmony Engine for "Kehte Hain Khuda Ne Is Jahan Mein Sabhi Ke Liye" (Raabta)
 */
class RaabtaAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private volume = 0.7;

  private readonly FREQS: Record<string, number> = {
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
  };

  // "Kehte hain khuda ne is jahan mein sabhi ke liye..."
  // Score structure: [Lead Note, [Chord Notes], Duration in Beats]
  private readonly SCORE: [string, string[], number][] = [
    // Verse 1: "Kehte hain khuda ne"
    ["E4", ["C3", "G3", "C4"], 0.75],
    ["E4", [], 0.25],
    ["G4", [], 0.5],
    ["E4", ["C3", "E3"], 0.5],
    ["D4", [], 0.5],
    ["C4", [], 0.5],

    // "is jahan mein sabhi ke liye"
    ["D4", ["G3", "B3", "D4"], 0.75],
    ["E4", [], 0.25],
    ["G4", [], 0.5],
    ["A4", ["G3", "D4"], 0.5],
    ["G4", [], 0.5],
    ["E4", [], 0.5],
    ["D4", [], 1.0],

    // "kisi na kisi ko hai banaya har kisi ke liye"
    ["E4", ["A3", "C4", "E4"], 0.75],
    ["E4", [], 0.25],
    ["G4", [], 0.5],
    ["E4", ["A3", "E4"], 0.5],
    ["D4", [], 0.5],
    ["C4", [], 0.5],

    ["C4", ["F3", "A3", "C4"], 0.5],
    ["D4", [], 0.5],
    ["E4", [], 0.5],
    ["D4", [], 0.5],
    ["C4", ["C3", "G3", "C4"], 1.5],

    // Chorus: "Tera milna hai us rab ka ishaara..."
    ["G4", ["C3", "G3", "C4"], 0.75],
    ["A4", [], 0.25],
    ["C5", [], 0.75],
    ["C5", [], 0.25],
    ["B4", ["G3", "B3"], 0.5],
    ["A4", [], 0.5],

    ["G4", ["G3", "D4"], 0.75],
    ["A4", [], 0.25],
    ["C5", [], 0.75],
    ["C5", [], 0.25],
    ["B4", ["G3", "D4"], 0.5],
    ["A4", [], 1.0],

    ["F4", ["F3", "A3", "C4"], 0.5],
    ["G4", [], 0.5],
    ["A4", [], 0.5],
    ["G4", [], 0.5],
    ["F4", [], 0.5],
    ["E4", ["C3", "E3", "G3"], 1.5],
  ];

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.isPlaying = true;
      this.playLoop();
    } catch {
      // AudioContext autoplay restriction fallback
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
      this.masterGain = null;
    }
  }

  private playLoop() {
    if (!this.isPlaying || !this.ctx) return;

    let stepIndex = 0;
    const tempoBpm = 80;
    const beatSec = 60 / tempoBpm;

    const tick = () => {
      if (!this.isPlaying || !this.ctx) return;

      const [leadNote, chordNotes, durationBeats] = this.SCORE[stepIndex % this.SCORE.length]!;

      if (leadNote && this.FREQS[leadNote]) {
        this.playLeadNote(this.FREQS[leadNote]!, durationBeats * beatSec);
      }

      if (chordNotes && chordNotes.length > 0) {
        chordNotes.forEach((n) => {
          if (this.FREQS[n]) {
            this.playChordNote(this.FREQS[n]!, durationBeats * beatSec * 1.5);
          }
        });
      }

      stepIndex++;
      const nextDelayMs = durationBeats * beatSec * 1000;
      this.timerId = window.setTimeout(tick, nextDelayMs);
    };

    tick();
  }

  private playLeadNote(freq: number, duration: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, now);

    const osc2 = this.ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(0.6, duration * 1.4));

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1800, now);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(filter);
    filter.connect(this.masterGain || this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration * 1.5);
    osc2.stop(now + duration * 1.5);
  }

  private playChordNote(freq: number, duration: number) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.07, now + 0.12);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + Math.max(1.0, duration));

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, now);

    osc.connect(gain);
    gain.connect(filter);
    filter.connect(this.masterGain || this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }
}

export const raabtaAudioEngine = new RaabtaAudioEngine();
