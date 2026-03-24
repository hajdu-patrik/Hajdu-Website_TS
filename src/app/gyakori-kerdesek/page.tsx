import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { createBreadcrumbJsonLd, createPageMetadata, siteUrl } from "@/lib/seo";

const faqItems = [
  {
    question: "Milyen szerepkörökben dolgoztunk az elmúlt években?",
    answer:
      "20+ éves gyakorlattal rendelkezünk fővállalkozói, generálvállalkozói és alvállalkozói kivitelezések területén, komplex közműrendszer-feladatokkal.",
  },
  {
    question: "Milyen kiemelt referenciáink vannak?",
    answer:
      "Minősített vállalkozóként dolgozunk a Fővárosi Vízművek Zrt. és az FCSM Zrt. számára, és több mint 10 éve végzünk vízhálózati hibajavításokat a Budapest Liszt Ferenc repülőtéren.",
  },
  {
    question: "Milyen típusú infrastruktúra-projektekben veszünk részt?",
    answer:
      "Ivóvíz- és szennyvízhálózatok építése mellett közlekedési és vasúti beruházásokhoz kapcsolódó közműkiváltási, vízelvezetési és rekonstrukciós feladatokat is végzünk.",
  },
  {
    question: "Milyen műszaki háttérrel dolgozunk?",
    answer:
      "Tapasztalt munkairányítói csapatunk mellett megfelelő darabszámú és kiváló minőségű gépjármű- és munkagéppark támogatja a folyamatos kivitelezést.",
  },
  {
    question: "Milyen különleges termékforgalmazói jogosultsággal rendelkezünk?",
    answer:
      "Kizárólagos forgalmazói vagyunk az amerikai Clayton Mark cég egész évben használható, fagymentes kerti csap termékeinek.",
  },
  {
    question: "Milyen területen vállalunk kivitelezést?",
    answer:
      "Elsősorban Budapest és környéke a fő működési terület, de a konkrét projekt műszaki tartalmától függően egyedi egyeztetés alapján más helyszínek is szóba jöhetnek.",
  },
];

const faqAccentStyles = [
  {
    bar: "from-[#0001f9]/80 via-cyan-300 to-[#0001f9]/80",
    iconWrap: "border-[#0001f9]/20 bg-[#0001f9]/10",
    iconColor: "text-[#0001f9]",
    hoverBorder: "hover:border-[#0001f9]/40",
    hoverTitle: "group-hover:text-[#0001f9]",
  },
  {
    bar: "from-cyan-500/80 via-sky-300 to-cyan-500/80",
    iconWrap: "border-cyan-500/20 bg-cyan-500/10",
    iconColor: "text-cyan-600",
    hoverBorder: "hover:border-cyan-500/40",
    hoverTitle: "group-hover:text-cyan-700",
  },
  {
    bar: "from-teal-500/80 via-emerald-300 to-teal-500/80",
    iconWrap: "border-teal-500/20 bg-teal-500/10",
    iconColor: "text-teal-600",
    hoverBorder: "hover:border-teal-500/40",
    hoverTitle: "group-hover:text-teal-700",
  },
  {
    bar: "from-sky-600/80 via-cyan-300 to-sky-600/80",
    iconWrap: "border-sky-600/20 bg-sky-600/10",
    iconColor: "text-sky-700",
    hoverBorder: "hover:border-sky-600/40",
    hoverTitle: "group-hover:text-sky-700",
  },
  {
    bar: "from-emerald-500/80 via-lime-300 to-emerald-500/80",
    iconWrap: "border-emerald-500/20 bg-emerald-500/10",
    iconColor: "text-emerald-700",
    hoverBorder: "hover:border-emerald-500/40",
    hoverTitle: "group-hover:text-emerald-700",
  },
  {
    bar: "from-amber-500/80 via-orange-300 to-amber-500/80",
    iconWrap: "border-amber-500/20 bg-amber-500/10",
    iconColor: "text-amber-700",
    hoverBorder: "hover:border-amber-500/40",
    hoverTitle: "group-hover:text-amber-700",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Gyakori kérdések",
  description:
    "A Hajdú Közmű Kft. gyakori kérdései: céginformációk, tapasztalat, közműépítési munkatípusok és ajánlatkéréshez kapcsolódó válaszok egy helyen.",
  path: "/gyakori-kerdesek",
  image: "/Og-image.webp",
  imageAlt: "Gyakori kérdések és válaszok a Hajdú Közmű Kft.-ről",
  keywords: [
    "gyakori kérdések hajdu",
    "hajdú közmű gyik",
    "közműépítés kérdések",
    "fagymentes kerti csap gyik",
  ],
});

export default function GyakoriKerdesekPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}/gyakori-kerdesek#webpage`,
        "@type": "FAQPage",
        "name": "Gyakori kérdések | Hajdú Közmű Kft.",
        "url": `${siteUrl}/gyakori-kerdesek`,
        "description": metadata.description,
        "inLanguage": "hu-HU",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
        "breadcrumb": {
          "@id": `${siteUrl}/gyakori-kerdesek#breadcrumb`,
        },
      },
      {
        "@id": `${siteUrl}/gyakori-kerdesek#breadcrumb`,
        ...createBreadcrumbJsonLd([
          { name: "Főoldal", path: "/" },
          { name: "Gyakori kérdések", path: "/gyakori-kerdesek" },
        ]),
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="faq-jsonld" data={jsonLd} />
      <main className="page-shell">
        <div className="page-container">
          <section aria-labelledby="faq-title" className="page-intro">
            <h1 id="faq-title" className="page-title">
                Gyakori kérdések
            </h1>
            <p className="page-subtitle">
                A legfontosabb tudnivalók cégünkről, tapasztalatunkról és a leggyakoribb keresésekről.
            </p>
          </section>
          
          <section aria-labelledby="faq-list-title">
            <h2 id="faq-list-title" className="sr-only">
              Gyakori kérdések listája
            </h2>
            <div className="space-y-5">
              {faqItems.map((item, index) => {
                const accent = faqAccentStyles[index % faqAccentStyles.length];

                return (
                  <article
                    key={item.question}
                    className={`group card-soft relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] sm:p-8 ${accent.hoverBorder}`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div
                          className={`shrink-0 rounded-xl border p-2.5 transition-colors duration-300 ${accent.iconWrap} ${accent.iconColor}`}
                        >
                          <CircleHelp size={24} />
                        </div>
                        <h3
                          className={`text-lg font-black text-slate-900 transition-colors duration-300 sm:text-xl ${accent.hoverTitle}`}
                        >
                          {item.question}
                        </h3>
                      </div>
                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}