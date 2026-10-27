import type { Metadata } from "next";
import { CircleQuestionMark } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { FeatureCard } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Heading";
import { accentAt } from "@/components/ui/accents";
import { createPageJsonLd, createPageMetadata } from "@/lib/seo";

const description =
  "A Hajdú Közmű Kft. gyakori kérdései: céginformációk, tapasztalat, közműépítési munkatípusok és ajánlatkéréshez kapcsolódó válaszok egy helyen.";

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

export const metadata: Metadata = createPageMetadata({
  title: "Gyakori kérdések",
  description,
  path: "/gyakori-kerdesek",
  keywords: ["gyakori kérdések hajdu", "hajdú közmű gyik", "közműépítés kérdések", "fagymentes kerti csap gyik"],
});

const jsonLd = createPageJsonLd({
  type: "FAQPage",
  path: "/gyakori-kerdesek",
  name: "Gyakori kérdések | Hajdú Közmű Kft.",
  description,
  breadcrumb: "Gyakori kérdések",
  page: {
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
});

export default function GyakoriKerdesekPage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        title="Gyakori kérdések"
        description="A legfontosabb tudnivalók cégünkről, tapasztalatunkról és a leggyakoribb keresésekről."
      />
      <div className="space-y-5">
        {faqItems.map((item, index) => (
          <FeatureCard
            key={item.question}
            icon={CircleQuestionMark}
            accent={accentAt(index)}
            title={item.question}
            titleAs="h2"
            size="lg"
          >
            <p>{item.answer}</p>
          </FeatureCard>
        ))}
      </div>
    </PageShell>
  );
}
