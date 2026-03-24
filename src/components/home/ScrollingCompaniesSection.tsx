import { motion } from "framer-motion";
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
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16 transition-colors duration-500 sm:py-24">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:mb-10 sm:px-6">
        <h2 className="text-center text-xs font-bold uppercase tracking-[0.24em] text-[#0001f9] sm:text-sm sm:tracking-[0.3em]">
          {title}
        </h2>
        <ul className="sr-only">
          {companies.map((company) => (
            <li key={company.name}>{company.name}</li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="relative flex overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent md:w-40" />

        <motion.div
          className="flex w-max items-center gap-8 whitespace-nowrap py-4 sm:gap-12 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((company, index) => (
            <a
              key={`${company.name}-${index}`}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="select-none text-xl font-black uppercase tracking-tighter text-slate-300 no-underline transition-all duration-300 hover:text-[#0001f9] sm:text-2xl md:text-4xl"
            >
              {company.name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
