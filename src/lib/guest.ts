import { useState, useEffect } from "react";

const GUEST_STORAGE_KEY = "wedding_whisper_guest_name";

/**
 * Gets the current global guest name.
 * Priority:
 * 1. URL Query Parameter (`?guest=...` or `?name=...`)
 * 2. LocalStorage saved guest name
 * 3. Default fallback ("Honored Guest")
 */
export function getGuestName(): string {
  if (typeof window !== "undefined") {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlGuest = urlParams.get("guest") || urlParams.get("name");
      if (urlGuest && urlGuest.trim()) {
        const decoded = decodeURIComponent(urlGuest.trim());
        localStorage.setItem(GUEST_STORAGE_KEY, decoded);
        return decoded;
      }

      const stored = localStorage.getItem(GUEST_STORAGE_KEY);
      if (stored && stored.trim()) {
        return stored.trim();
      }
    } catch {
      // Fallback if localStorage or URL fails
    }
  }
  return "Honored Guest";
}

/**
 * Formats guest name for warm salutations (e.g. "Dearest Priya" or "Dearest Guest").
 * Prevents repetitive prefixes like "Dearest Dearest Guest".
 */
export function formatGuestSalutation(name: string): string {
  const trimmed = name.trim();
  if (!trimmed || trimmed === "Honored Guest" || trimmed === "Guest") {
    return "Dearest Guest";
  }
  if (trimmed.toLowerCase().startsWith("dearest")) {
    return trimmed;
  }
  return `Dearest ${trimmed}`;
}

/**
 * Sets the global guest name in localStorage & triggers custom event for reactivity.
 */
export function setGuestName(name: string): void {
  if (typeof window !== "undefined") {
    try {
      const trimmed = name.trim();
      if (trimmed) {
        localStorage.setItem(GUEST_STORAGE_KEY, trimmed);
        window.dispatchEvent(new CustomEvent("guest_name_updated", { detail: trimmed }));
      }
    } catch {
      // Ignore storage errors
    }
  }
}

/**
 * Custom React Hook to subscribe to the global guest name.
 */
export function useGuestName(): [string, (name: string) => void] {
  const [name, setNameState] = useState<string>(getGuestName);

  useEffect(() => {
    // Sync on mount
    setNameState(getGuestName());

    function handleUpdate(e: Event) {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setNameState(customEvent.detail);
      } else {
        setNameState(getGuestName());
      }
    }

    window.addEventListener("guest_name_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);
    return () => {
      window.removeEventListener("guest_name_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const updateGuestName = (newName: string) => {
    setGuestName(newName);
    setNameState(newName);
  };

  return [name, updateGuestName];
}
