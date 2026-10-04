import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import type { CompanyLink } from "@/components/home/home.types";

type ScrollingCompaniesSectionProps = Readonly<{
  title: string;
  companies: ReadonlyArray<CompanyLink>;
  animationDuration: number;
}>;

export default function ScrollingCompaniesSection({
  title,
  companies,
  animationDuration,
}: ScrollingCompaniesSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isAnimated = !prefersReducedMotion;
  const isRunning = isAnimated && !isPaused && !isHovered;

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16 transition-colors duration-500 sm:py-24">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:mb-10 sm:px-6">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.24em] text-brand sm:text-sm sm:tracking-[0.3em]">
          {title}
        </h2>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center sm:mt-5 sm:gap-x-5">
          {companies.map((company) => (
            <li key={company.name}>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center text-sm font-bold text-slate-600 transition-colors duration-200 hover:text-brand focus-visible:text-brand"
              >
                {company.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        aria-hidden="true"
        className="relative flex overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-40" />

        <div
          className={`flex w-max items-center gap-8 whitespace-nowrap py-4 sm:gap-12 md:gap-24 ${
            isAnimated ? "marquee-track" : ""
          }`}
          style={
            isAnimated
              ? {
                  animationDuration: `${animationDuration}s`,
                  animationPlayState: isRunning ? "running" : "paused",
                }
              : undefined
          }
        >
          {[...companies, ...companies].map((company, index) => (
            <span
              key={`${company.name}-${index}`}
              className="select-none text-xl font-black uppercase tracking-tighter text-slate-500 no-underline sm:text-2xl md:text-4xl"
            >
              {company.name}
            </span>
          ))}
        </div>
      </div>

      {isAnimated ? (
        <div className="mx-auto mt-2 flex max-w-7xl justify-end px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setIsPaused((value) => !value)}
            aria-pressed={isPaused}
            aria-label={isPaused ? "Animáció indítása" : "Animáció megállítása"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors duration-200 hover:border-brand/40 hover:text-brand focus-visible:border-brand/40 focus-visible:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {isPaused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button>
        </div>
      ) : null}
    </section>
  );
}
