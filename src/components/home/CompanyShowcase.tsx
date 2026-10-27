import { MarqueeTrack } from "@/components/home/MarqueeTrack";
import { Container } from "@/components/ui/Container";

export type CompanyLink = Readonly<{ name: string; url: string }>;

type CompanyShowcaseProps = Readonly<{
  id: string;
  title: string;
  companies: readonly CompanyLink[];
  /** Seconds for one loop of the scrolling row. */
  duration: number;
}>;

export function CompanyShowcase({ id, title, companies, duration }: CompanyShowcaseProps) {
  return (
    <section aria-labelledby={id} className="overflow-hidden border-y border-line bg-white py-16 sm:py-24">
      <Container className="mb-8 sm:mb-10">
        <h2 id={id} className="eyebrow text-center sm:text-sm">
          {title}
        </h2>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center sm:mt-5 sm:gap-x-5">
          {companies.map((company) => (
            <li key={company.name}>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center text-sm font-bold text-ink-muted transition-colors duration-200 hover:text-brand"
              >
                {company.name}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <MarqueeTrack names={companies.map((company) => company.name)} duration={duration} />
    </section>
  );
}
