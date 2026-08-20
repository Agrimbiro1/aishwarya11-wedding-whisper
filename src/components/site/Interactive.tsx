import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { wedding } from "@/data/wedding";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Ornament";

type Wish = { id: string; name: string; message: string; at: string };

const SEED: Wish[] = [
  { id: "1", name: "Meera", message: "So happy for you both. Cannot wait to dance at the sangeet!", at: "2 days ago" },
  { id: "2", name: "Dev & Ruchi", message: "Wishing you a lifetime of quiet mornings and loud celebrations.", at: "5 days ago" },
];

/** 4.7 Wishing Wall */
export function WishingWallSection() {
  const [wishes, setWishes] = useState<Wish[]>(SEED);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please add your name and a short message.");
      return;
    }
    setError("");
    setWishes((w) => [{ id: crypto.randomUUID(), name: name.trim(), message: message.trim(), at: "just now" }, ...w]);
    setName("");
    setMessage("");
  }

  return (
    <section className="px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow="A digital guestbook" title="Wishing Wall" />
      </Reveal>

      <Reveal delay={100}>
        <form onSubmit={submit} className="keepsake-card mx-auto mt-8 max-w-sm space-y-3 p-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 300))}
            placeholder="Leave a wish for the couple"
            rows={3}
            className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] text-muted-foreground">{message.length}/300</span>
            <button className="rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-[0.18em] text-primary-foreground">
              Send wish
            </button>
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
        </form>
      </Reveal>

      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
        {wishes.length === 0 && (
          <p className="w-full text-center text-sm text-muted-foreground">Be the first to leave a wish.</p>
        )}
        {wishes.map((w) => (
          <div key={w.id} className="keepsake-card w-[72vw] max-w-[260px] shrink-0 snap-center p-4">
            <p className="font-display text-lg text-foreground">{w.name}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.message}</p>
            <p className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground/70">{w.at}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** 4.8 RSVP */
export function RsvpSection() {
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);
  const [form, setForm] = useState({ name: "", contact: "", guests: "0", diet: "", note: "" });
  const [errors, setErrors] = useState<{ attending?: string; name?: string; contact?: string }>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  function set(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: { attending?: string; name?: string; contact?: string } = {};
    if (!attending) next["attending"] = "Please let us know if you can make it.";
    if (!form.name.trim()) next["name"] = "Your name is required.";
    if (!form.contact.trim()) next["contact"] = "A phone or email is required.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setState("sending");
    setTimeout(() => setState("done"), 800);
  }

  const field = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent";

  return (
    <section className="paper px-6 py-20">
      <Reveal>
        <SectionTitle eyebrow={wedding.rsvp.deadlineLabel} title="We Hope You Can Make It" />
      </Reveal>

      {state === "done" ? (
        <Reveal>
          <div className="keepsake-card mx-auto mt-8 max-w-sm p-8 text-center">
            <Check className="mx-auto h-8 w-8 text-primary" />
            <h3 className="mt-3 font-display text-2xl text-foreground">Thank you, {form.name.split(" ")[0]}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {attending === "yes"
                ? "Your RSVP is in — we can't wait to celebrate with you."
                : "We'll miss you, but thank you for letting us know."}
            </p>
            <button
              onClick={() => setState("idle")}
              className="mt-5 text-xs uppercase tracking-[0.18em] text-accent underline underline-offset-4"
            >
              Edit response
            </button>
          </div>
        </Reveal>
      ) : (
        <Reveal delay={100}>
          <form onSubmit={submit} className="keepsake-card mx-auto mt-8 max-w-sm space-y-4 p-5">
            <div className="grid grid-cols-2 gap-2">
              {(["yes", "no"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    setAttending(v);
                    setErrors((e) => ({ ...e, attending: "" }));
                  }}
                  className={`rounded-lg border px-3 py-3 text-xs uppercase tracking-[0.16em] transition-colors ${
                    attending === v ? "border-accent bg-secondary text-foreground" : "border-input text-muted-foreground"
                  }`}
                >
                  {v === "yes" ? "Joyfully accepts" : "Regretfully declines"}
                </button>
              ))}
            </div>
            {errors["attending"] && <p className="text-xs text-destructive">{errors["attending"]}</p>}

            <div>
              <input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Full name" className={field} />
              {errors["name"] && <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>}
            </div>
            <div>
              <input value={form.contact} onChange={(e) => set("contact", e.target.value)} placeholder="Phone or email" className={field} />
              {errors["contact"] && <p className="mt-1 text-xs text-destructive">{errors["contact"]}</p>}
            </div>

            {attending === "yes" && (
              <>
                {wedding.rsvp.allowPlusOnes && (
                  <label className="block text-xs text-muted-foreground">
                    Guests joining you
                    <select value={form.guests} onChange={(e) => set("guests", e.target.value)} className={`${field} mt-1`}>
                      {["0", "1", "2", "3"].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </label>
                )}
                <input value={form.diet} onChange={(e) => set("diet", e.target.value)} placeholder="Dietary requirements (optional)" className={field} />
              </>
            )}

            <textarea
              value={form.note}
              onChange={(e) => set("note", e.target.value)}
              rows={2}
              placeholder="A note for the couple (optional)"
              className={`${field} resize-none`}
            />

            <button
              disabled={state === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground disabled:opacity-70"
            >
              {state === "sending" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              Send RSVP
            </button>
          </form>
        </Reveal>
      )}
    </section>
  );
}
