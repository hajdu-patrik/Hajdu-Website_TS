import type { Metadata } from "next";
import Image from "next/image";
import { Award, Percent, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { IconBadge } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Heading";
import { createPageJsonLd, createPageMetadata, ogImages } from "@/lib/seo";

const description =
  "A Hajdú Közmű Kft. pályázati projektjeinek bemutatása. A technológiai megújulás támogatja a közműépítési, csatornázási és vízellátási munkák hatékonyságát és minőségét.";

const projectHighlights = [
  "A technológiai fejlesztés gyorsabb és üzembiztosabb kivitelezést tett lehetővé.",
  "A beszerzett eszközök csökkentették az üzemeltetési költségeket és a meghibásodási kockázatot.",
  "A projekt a Hajdú Közmű Kft. közműépítési és csatornázási munkáinak hatékonyságát növelte.",
];

export const metadata: Metadata = createPageMetadata({
  title: "Pályázatok és technológiai megújulás",
  description,
  path: "/palyazatok",
  ogImage: ogImages.grants,
  keywords: ["Hajdú Közmű Kft pályázat", "technológiai megújulás", "VEKOP-1.2.6-20-2020-01551"],
});

function StatTile({ icon, label, value }: Readonly<{ icon: LucideIcon; label: string; value: string }>) {
  return (
    <div className="flex items-center gap-4 rounded-3xl border border-line bg-white/85 p-5 shadow-sm sm:gap-5 sm:p-6">
      <IconBadge icon={icon} tone="solid" size="lg" />
      <div className="min-w-0 flex-1">
        <p className="label-caps">{label}</p>
        <p className="text-base leading-tight font-black break-words text-ink sm:text-xl md:text-2xl">{value}</p>
      </div>
    </div>
  );
}

function SubHeading({ id, children }: Readonly<{ id: string; children: ReactNode }>) {
  return (
    <h3
      id={id}
      className="mb-4 flex items-center gap-3 text-xl font-bold text-ink before:size-2 before:shrink-0 before:rounded-full before:bg-brand"
    >
      {children}
    </h3>
  );
}

export default function PalyazatokPage() {
  return (
    <PageShell>
      <JsonLd
        data={createPageJsonLd({
          path: "/palyazatok",
          name: "Pályázatok | Hajdú Közmű Kft.",
          description,
          breadcrumb: "Pályázatok",
        })}
      />
      <PageHeader
        title="Pályázatok"
        description="Pályázati projektjeink fő adatai, támogatási részletei és a technológiai fejlesztés eredményei."
      />

      <article
        aria-labelledby="project-title"
        className="overflow-hidden rounded-4xl border border-line bg-white shadow-sm"
      >
        <div className="relative h-72 w-full border-b border-line bg-white sm:h-80 md:h-112">
          <Image
            src="/palyazatok/Palyazat.webp"
            alt="Széchenyi 2020 tájékoztató tábla: Hajdú Közmű Kft. technológiai megújulása, 9,6 millió forint vissza nem térítendő támogatás"
            fill
            sizes="(min-width: 768px) 632px, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-contain"
          />
          <span className="absolute bottom-5 left-5 rounded-full bg-brand px-4 py-1 text-xs font-bold tracking-widest text-white uppercase sm:bottom-8 sm:left-8">
            Sikeres projekt
          </span>
        </div>

        <div className="space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
            <div className="space-y-2">
              <p className="eyebrow">Projekt címe</p>
              <h2 id="project-title" className="text-2xl leading-tight font-black text-ink md:text-3xl">
                Hajdú Közmű Kft. technológiai megújulása
              </h2>
            </div>
            <div className="shrink-0 space-y-1 md:text-right">
              <p className="label-caps">Kedvezményezett</p>
              <p className="text-xl font-black text-ink-soft">Hajdú Közmű Kft.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <StatTile icon={Award} label="Támogatás összege" value="9.600.000 Ft" />
            <StatTile icon={Percent} label="Támogatás mértéke" value="70%" />
          </div>

          <section aria-labelledby="project-content-title">
            <SubHeading id="project-content-title">A projekt tartalma</SubHeading>
            <div className="lead space-y-5">
              <p>
                A pályázat keretében beszerzett modern eszközök üzembiztos, mérsékelten környezetszennyező és alacsony
                üzemeltetési költséggel működő technológiát hoztak a vállalkozás mindennapi munkájába. Ez a fejlesztés
                közvetlenül támogatta a Hajdú Közmű Kft. közműépítési, csatornázási és vízellátási projektjeinek
                gyorsabb és pontosabb kiszolgálását.
              </p>
              <p>
                A technológiai megújulás célja az volt, hogy a cég stabilabban, hatékonyabban és magasabb műszaki
                színvonalon tudjon részt venni a kivitelezésekben. A fejlesztés nem csupán a belső működést erősítette,
                hanem hozzájárult a megrendelői igények gyorsabb teljesítéséhez és a munkaterületi biztonság
                növeléséhez is.
              </p>
            </div>
          </section>

          <section aria-labelledby="project-results-title">
            <SubHeading id="project-results-title">Fő eredmények</SubHeading>
            <ul className="space-y-3.5">
              {projectHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-line bg-white px-4 py-4 text-base font-bold text-ink-soft shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-8 font-mono text-sm text-ink-subtle sm:flex-row">
            <p>
              Azonosító: <span className="font-bold break-all text-brand">VEKOP-1.2.6-20-2020-01551</span>
            </p>
            <p>
              Befejezés: <span className="font-bold text-ink-soft">2021.10.27</span>
            </p>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
