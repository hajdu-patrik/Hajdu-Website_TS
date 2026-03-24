import Link from "next/link";
import { ArrowRight, CheckCircle, CircleQuestionMark } from "lucide-react";

type HomeHeroSectionProps = Readonly<{
  advantages: readonly string[];
}>;

const advantageAccentStyles = [
  {
    bar: "from-[#0001f9]/80 via-cyan-300 to-[#0001f9]/80",
    iconWrap: "border-[#0001f9]/20 bg-[#0001f9]/10",
    iconColor: "text-[#0001f9]",
    hoverBorder: "hover:border-[#0001f9]/40",
    hoverText: "group-hover:text-[#0001f9]",
  },
  {
    bar: "from-cyan-500/80 via-sky-300 to-cyan-500/80",
    iconWrap: "border-cyan-500/20 bg-cyan-500/10",
    iconColor: "text-cyan-700",
    hoverBorder: "hover:border-cyan-500/40",
    hoverText: "group-hover:text-cyan-700",
  },
  {
    bar: "from-teal-500/80 via-emerald-300 to-teal-500/80",
    iconWrap: "border-teal-500/20 bg-teal-500/10",
    iconColor: "text-teal-700",
    hoverBorder: "hover:border-teal-500/40",
    hoverText: "group-hover:text-teal-700",
  },
  {
    bar: "from-amber-500/80 via-orange-300 to-amber-500/80",
    iconWrap: "border-amber-500/20 bg-amber-500/10",
    iconColor: "text-amber-700",
    hoverBorder: "hover:border-amber-500/40",
    hoverText: "group-hover:text-amber-700",
  },
] as const;

export default function HomeHeroSection({ advantages }: HomeHeroSectionProps) {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative flex min-h-[70vh] items-center overflow-hidden bg-slate-50 px-4 py-16 text-slate-900 transition-colors duration-500 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ffff]/10 blur-[110px] sm:h-[500px] sm:w-[800px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h1
            id="home-hero-title"
            className="mb-4 text-4xl font-black tracking-tighter sm:mb-6 sm:text-6xl lg:text-8xl"
          >
            Hajdú Közmű Kft.
          </h1>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.16em] text-[#0001f9] sm:mb-10 sm:text-xl sm:tracking-[0.35em]">
            Garantált elégedettség
          </p>
          <p className="mx-auto mb-12 max-w-3xl text-lg font-light leading-relaxed text-slate-600 sm:mb-16 sm:text-xl">
            <span className="block">Minden projektet a megérdemelt tisztelettel kezelünk.</span>
            <span className="block font-semibold text-[#0001f9]">Közműépítés mesterfokon.</span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/termekek"
              className="btn-primary w-full gap-3 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.2em]"
            >
              Fagymentes kerti csap
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/gyakori-kerdesek"
              className="btn-secondary w-full gap-3 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.2em]"
            >
              GYIK
              <CircleQuestionMark size={18} />
            </Link>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 text-left sm:gap-6 md:grid-cols-2">
          {advantages.map((text, index) => {
            const accent = advantageAccentStyles[index % advantageAccentStyles.length];

            return (
              <article
                key={text}
                className={`group card-soft relative overflow-hidden sm:p-6 ${accent.hoverBorder}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`rounded-xl border p-2 ${accent.iconWrap} ${accent.iconColor}`}>
                    <CheckCircle size={24} />
                  </div>
                  <span
                    className={`text-sm font-bold text-slate-800 transition-colors duration-300 sm:text-base ${accent.hoverText}`}
                  >
                    {text}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
