import type { Metadata } from "next";
import Image from "next/image";
import { Award, Percent } from "lucide-react";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { createBreadcrumbJsonLd, createPageMetadata, siteUrl } from "@/lib/seo";

const projectHighlights = [
  "A technológiai fejlesztés gyorsabb és üzembiztosabb kivitelezést tett lehetővé.",
  "A beszerzett eszközök csökkentették az üzemeltetési költségeket és a meghibásodási kockázatot.",
  "A projekt a Hajdú Közmű Kft. közműépítési és csatornázási munkáinak hatékonyságát növelte.",
];

export const metadata: Metadata = createPageMetadata({
  title: "Pályázatok és technológiai megújulás",
  description:
    "A Hajdú Közmű Kft. pályázati projektjeinek bemutatása. A technológiai megújulás támogatja a közműépítési, csatornázási és vízellátási munkák hatékonyságát és minőségét.",
  path: "/palyazatok",
  image: "/palyazatok/Palyazat.webp",
  imageAlt: "Pályázati projekt keretében használt munkagép",
  keywords: [
    "Hajdú Közmű Kft pályázat",
    "technológiai megújulás",
    "VEKOP-1.2.6-20-2020-01551",
  ],
});

export default function PalyazatokPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}/palyazatok#webpage`,
        "@type": "WebPage",
        "name": "Pályázatok | Hajdú Közmű Kft.",
        "url": `${siteUrl}/palyazatok`,
        "description": metadata.description,
        "inLanguage": "hu-HU",
        "breadcrumb": {
          "@id": `${siteUrl}/palyazatok#breadcrumb`,
        },
      },
      {
        "@id": `${siteUrl}/palyazatok#breadcrumb`,
        ...createBreadcrumbJsonLd([
          { name: "Főoldal", path: "/" },
          { name: "Pályázatok", path: "/palyazatok" },
        ]),
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="palyazatok-jsonld" data={jsonLd} />
      <main className="page-shell">
        <div className="page-container">
          <section aria-labelledby="palyazatok-title" className="page-intro">
            <h1 id="palyazatok-title" className="page-title">
              Pályázatok
            </h1>
            <p className="page-subtitle">
              Pályázati projektjeink fő adatai, támogatási részletei és a technológiai fejlesztés eredményei.
            </p>
          </section>
          
          <article className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="relative h-80 w-full bg-slate-100 md:h-[450px]">
              <Image
                src="/palyazatok/Palyazat.webp"
                alt="Pályázati projekt keretében használt gép"
                fill
                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 3rem), 1152px"
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-[#0001f9] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Sikeres projekt
                </span>
              </div>
            </div>

            <div className="space-y-8 p-5 sm:space-y-10 sm:p-8 md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                <div className="space-y-2">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#0001f9]">
                    Projekt címe
                  </span>
                  <p className="text-2xl font-black leading-tight text-slate-800 md:text-3xl">
                    Hajdú Közmű Kft. technológiai megújulása
                  </p>
                </div>
                <div className="shrink-0 space-y-1 md:text-right">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Kedvezményezett
                  </span>
                  <p className="text-xl font-black text-slate-700">Hajdú Közmű Kft.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="metric-tile">
                  <div className="rounded-2xl border border-[#0001f9]/20 bg-[#0001f9] p-3.5 text-white shadow-md sm:p-4">
                    <Award size={32} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                      Támogatás összege
                    </span>
                    <p className="break-words [overflow-wrap:anywhere] text-base font-black leading-tight text-slate-900 sm:text-xl md:text-2xl">9.600.000 Ft</p>
                  </div>
                </div>

                <div className="metric-tile">
                  <div className="rounded-2xl border border-[#0001f9]/20 bg-[#0001f9] p-3.5 text-white shadow-md sm:p-4">
                    <Percent size={32} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-[0.1em] text-slate-500">
                      Támogatás mértéke
                    </span>
                    <p className="break-words [overflow-wrap:anywhere] text-base font-black leading-tight text-slate-900 sm:text-xl md:text-2xl">70%</p>
                  </div>
                </div>
              </div>

              <section aria-labelledby="project-content-title">
                <h2
                  id="project-content-title"
                  className="mb-4 border-l-4 border-[#0001f9] pl-4 text-xl font-bold text-slate-800"
                >
                  A projekt tartalma
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                  <p>
                    A pályázat keretében beszerzett modern eszközök üzembiztos, mérsékelten
                    környezetszennyező és alacsony üzemeltetési költséggel működő technológiát hoztak a
                    vállalkozás mindennapi munkájába. Ez a fejlesztés közvetlenül támogatta a Hajdú Közmű
                    Kft. közműépítési, csatornázási és vízellátási projektjeinek gyorsabb és pontosabb
                    kiszolgálását.
                  </p>
                  <p>
                    A technológiai megújulás célja az volt, hogy a cég stabilabban, hatékonyabban és
                    magasabb műszaki színvonalon tudjon részt venni a kivitelezésekben. A fejlesztés nem
                    csupán a belső működést erősítette, hanem hozzájárult a megrendelői igények gyorsabb
                    teljesítéséhez és a munkaterületi biztonság növeléséhez is.
                  </p>
                </div>
              </section>

              <section aria-labelledby="project-results-title">
                <h2
                  id="project-results-title"
                  className="mb-4 border-l-4 border-[#0001f9] pl-4 text-xl font-bold text-slate-800"
                >
                  Fő eredmények
                </h2>
                <ul className="space-y-3.5">
                  {projectHighlights.map((item) => (
                    <li key={item} className="feature-pill border-slate-200/90 bg-white/90 text-base text-slate-700 shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-8 text-sm font-mono text-slate-500 sm:flex-row">
                <div>
                  Azonosító: <span className="font-bold text-[#0001f9]">VEKOP-1.2.6-20-2020-01551</span>
                </div>
                <div>
                  Befejezés: <span className="font-bold text-slate-700">2021.10.27</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}