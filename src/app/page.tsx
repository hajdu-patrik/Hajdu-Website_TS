import type { Metadata } from "next";
import { CompanyShowcase, type CompanyLink } from "@/components/home/CompanyShowcase";
import { ContactCta } from "@/components/home/ContactCta";
import { HomeHero } from "@/components/home/HomeHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Heading";
import { PhotoGrid, type Photo } from "@/components/ui/PhotoGrid";
import { createPageJsonLd, createPageMetadata, homeTitle, ogImages } from "@/lib/seo";

const description =
  "A Hajdú Közmű Kft. közműépítés, csatornázás, ivóvízellátás és fagymentes kerti csap megoldásokat kínál Budapesten. Ha Hajdu, Hajdú, hajdu.hu vagy fagymenteskerticsap.hu kifejezésre keres, itt megtalálja a fontos információkat.";

const advantages = [
  "Több mint 20 év tapasztalat közműépítésben, vízellátásban és csatornázásban.",
  "Budapest és környéke ivóvíz-, szennyvíz- és csapadékvíz-projektjeihez igazodó kivitelezés.",
  "Fagymentes kerti csap és vízvételi megoldások közvetlen szakmai háttérrel.",
  "Gyors ajánlatadás, átlátható kommunikáció és gyakorlati tereptapasztalat.",
];

const suppliers: readonly CompanyLink[] = [
  { name: "Szebeton Zrt.", url: "https://szebeton.hu" },
  { name: "DT Közmű Kft.", url: "https://dtkozmu.hu" },
  { name: "Terra Metal Kft.", url: "https://terrametal.hu" },
  { name: "SW Umwelttechnik Kft.", url: "https://www.sw-umwelttechnik.hu" },
  { name: "Wilo Kft.", url: "https://wilo.com/hu/hu/" },
  { name: "Sikla Kft.", url: "https://www.sikla.hu" },
  { name: "BG-Graspointner Kft.", url: "https://www.bg-graspointner.com/hu-hu" },
];

const mainClients: readonly CompanyLink[] = [
  { name: "KÉSZ Zrt.", url: "https://www.keszgroup.com" },
  { name: "COLAS Zrt.", url: "https://colas.hu" },
  { name: "A-Híd Zrt.", url: "https://www.ahid.hu" },
  { name: "Belfry Kft.", url: "https://belfrygroup.eu/hu/" },
  { name: "Laky Zrt.", url: "https://www.laki.hu" },
  { name: "DVM Group", url: "https://dvmgroup.com" },
  { name: "AVICO Műszaki Iroda", url: "https://avicogroup.hu" },
  { name: "Főkert Zrt.", url: "https://fokert.budapestikozmuvek.hu" },
  { name: "Várkapitányság", url: "https://varkapitanysag.hu" },
  { name: "FCSM Zrt.", url: "https://www.fcsm.hu" },
  { name: "Airport Facility Management Kft.", url: "https://future-fm.hu" },
  { name: "Kiving Kft.", url: "https://www.kiving.hu" },
  { name: "Market Zrt.", url: "https://www.market.hu" },
  { name: "West Hungária Bau Kft.", url: "https://whb.hu" },
];

const projects: readonly Photo[] = [
  { src: "/projektek/LegutobbiProjektek1.webp", alt: "Csatornázási kivitelezés földmunkával és nehézgépekkel" },
  { src: "/projektek/LegutobbiProjektek2.webp", alt: "Közműépítési referencia munkaterület Budapest környékén" },
  { src: "/projektek/LegutobbiProjektek3.webp", alt: "Ivóvízellátási hálózat kivitelezése terepi környezetben" },
  { src: "/projektek/LegutobbiProjektek4.webp", alt: "Mélyépítési és közműépítési munkafolyamat a helyszínen" },
  { src: "/projektek/LegutobbiProjektek5.webp", alt: "Szennyvízcsatornázási kivitelezés gépparkkal" },
  { src: "/projektek/LegutobbiProjektek6.webp", alt: "Készülő közműhálózati referencia projekt" },
];

export const metadata: Metadata = createPageMetadata({
  title: homeTitle,
  absoluteTitle: true,
  description,
  path: "/",
  ogImage: ogImages.home,
  keywords: [
    "fagymentes kerti csap hajdu",
    "hajdu.hu",
    "fagymenteskerticsap.hu",
    "Hajdú Közmű Kft.",
    "közműépítés Budapest",
    "csatornázás Budapest",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={createPageJsonLd({ path: "/", name: homeTitle, description })} />
      <HomeHero advantages={advantages} />
      <CompanyShowcase id="suppliers-title" title="Főbb beszállítóink" companies={suppliers} duration={30} />

      <div className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-cyan-50/30">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 -left-20 size-96 rounded-full bg-cyan-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-10 size-96 rounded-full bg-blue-200/30 blur-3xl"
        />

        <section id="referenciak" aria-labelledby="projects-title" className="relative py-16 sm:py-32">
          <Container>
            <SectionHeading
              id="projects-title"
              title="Legutóbbi projektek"
              description="Közműépítés, csatornázás és vízellátási munkáinkból adunk rövid betekintést."
              align="center"
              className="mb-12 sm:mb-16"
            />
            <PhotoGrid photos={projects} layout="tiles" />
          </Container>
        </section>

        <ContactCta />
      </div>

      <CompanyShowcase id="clients-title" title="Főbb megrendelőink" companies={mainClients} duration={42} />
    </>
  );
}
