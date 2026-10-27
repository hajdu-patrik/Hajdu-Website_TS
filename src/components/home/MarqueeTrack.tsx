"use client";

import { useState, type CSSProperties } from "react";
import clsx from "clsx";
import { Pause, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";

type MarqueeTrackProps = Readonly<{
  names: readonly string[];
  /** Seconds for one full loop. */
  duration: number;
}>;

/**
 * Decorative scrolling row of company names. The accessible list lives next to it, so the row is
 * hidden from assistive technology; it pauses on hover, on the toggle and for reduced motion.
 */
export function MarqueeTrack({ names, duration }: MarqueeTrackProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <div aria-hidden="true" className="group relative flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent md:w-40" />

        <div
          style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
          className={clsx(
            "flex w-max animate-marquee items-center gap-8 py-4 whitespace-nowrap group-hover:animation-paused motion-reduce:animate-none sm:gap-12 md:gap-24",
            isPaused && "animation-paused",
          )}
        >
          {[...names, ...names].map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="text-xl font-black tracking-tighter text-ink-subtle uppercase sm:text-2xl md:text-4xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <Container className="mt-2 flex justify-end motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setIsPaused((paused) => !paused)}
          aria-pressed={isPaused}
          aria-label="Animáció megállítása"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-white text-ink-subtle shadow-sm transition-colors duration-200 hover:border-brand/40 hover:text-brand"
        >
          {isPaused ? <Play size={18} /> : <Pause size={18} />}
        </button>
      </Container>
    </>
  );
}
