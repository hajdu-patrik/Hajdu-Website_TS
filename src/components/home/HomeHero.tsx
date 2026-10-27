import { ArrowRight, CircleCheckBig, CircleQuestionMark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { accentAt } from "@/components/ui/accents";
import { company } from "@/content/site";

type HomeHeroProps = Readonly<{
  advantages: readonly string[];
}>;

export function HomeHero({ advantages }: HomeHeroProps) {
  return (
    <section aria-labelledby="home-hero-title" className="relative overflow-hidden py-16 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-90 w-170 -translate-1/2 rounded-full bg-brand-cyan/10 blur-glow sm:h-125 sm:w-200"
      />

      <Container className="relative">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <h1 id="home-hero-title" className="mb-4 text-4xl font-black tracking-tighter sm:mb-6 sm:text-6xl lg:text-8xl">
            {company.name}
          </h1>
          <p className="eyebrow mb-8 sm:mb-10 sm:text-xl">Garantált elégedettség</p>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed font-light text-ink-muted sm:text-xl">
            <span className="block">Minden projektet a megérdemelt tisztelettel kezelünk.</span>
            <span className="block font-semibold text-brand">Közműépítés mesterfokon.</span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
            <Button size="lg" href="/termekek" className="w-full gap-3 sm:w-auto">
              Fagymentes kerti csap
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" href="/gyakori-kerdesek" className="w-full gap-3 sm:w-auto">
              GYIK
              <CircleQuestionMark size={18} />
            </Button>
          </div>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {advantages.map((text, index) => (
            <FeatureCard key={text} as="li" icon={CircleCheckBig} accent={accentAt(index)} title={text} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
