"use client";

import { useSyncExternalStore } from "react";
import clsx from "clsx";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER_PX = 400;

function subscribe(onChange: () => void) {
  globalThis.addEventListener("scroll", onChange, { passive: true });
  return () => globalThis.removeEventListener("scroll", onChange);
}

const isPastThreshold = () => globalThis.scrollY > SHOW_AFTER_PX;
const isPastThresholdOnServer = () => false;

/** Jumps to `#top` (the body), so keyboard focus restarts at the top of the page as well. */
export function ScrollToTop() {
  const isVisible = useSyncExternalStore(subscribe, isPastThreshold, isPastThresholdOnServer);

  return (
    <a
      href="#top"
      aria-label="Vissza az oldal tetejére"
      className={clsx(
        "fixed right-4 bottom-5 z-40 inline-flex items-center justify-center rounded-2xl border border-brand/30 bg-brand p-3 text-white shadow-lg shadow-brand/10 transition-[opacity,translate,visibility,background-color] duration-300 hover:bg-brand-hover sm:right-8 sm:bottom-8 sm:p-4",
        isVisible ? "visible translate-y-0 opacity-100" : "invisible translate-y-5 opacity-0",
      )}
    >
      <ChevronUp size={28} strokeWidth={3} />
    </a>
  );
}
