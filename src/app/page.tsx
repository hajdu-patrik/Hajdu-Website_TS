import type { Metadata } from "next";
import HomePageClient from "@/components/home/HomePageClient";
import JsonLdScript from "@/components/seo/JsonLdScript";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
  siteName,
  siteUrl,
} from "@/lib/seo";

const advantages = [
  "Több mint 20 év tapasztalat közműépítésben, vízellátásban és csatornázásban.",
  "Budapest és környéke ivóvíz-, szennyvíz- és csapadékvíz-projektjeihez igazodó kivitelezés.",
  "Fagymentes kerti csap és vízvételi megoldások közvetlen szakmai háttérrel.",
  "Gyors ajánlatadás, átlátható kommunikáció és gyakorlati tereptapasztalat.",
];

const serviceHighlights = [
  {
    title: "Közműépítés és csatornázás",
    description:
      "Szennyvíz- és csapadékcsatorna hálózatok kivitelezése, rekonstrukciója és kapcsolódó mélyépítési munkák.",
  },
  {
    title: "Ivóvízellátás és nyomóvezetékek",
    description:
      "Ivóvíz- és tűzivíz-vezetékek kivitelezése, felújítása, tereprendezéssel és helyreállítással együtt.",
  },
  {
    title: "Fagymentes kerti csap",
    description:
      "Télálló, kültéri vízvételi pontokhoz készülő fagymentes kerti csap és kapcsolódó termékek ajánlatkéréssel.",
  },
];

const suppliers = [
  { name: "Szebeton Zrt.", url: "https://szebeton.hu" },
  { name: "DT Közmű Kft.", url: "https://dtkozmu.hu" },
  { name: "Terra Metal Kft.", url: "https://terrametal.hu" },
  { name: "SW Umwelttechnik Kft.", url: "https://www.sw-umwelttechnik.hu" },
  { name: "Wilo Kft.", url: "https://wilo.com/hu/hu/" },
  { name: "Sikla Kft.", url: "https://www.sikla.hu" },
  { name: "BG-Graspointner Kft.", url: "https://www.bg-graspointner.com/hu-hu" },
];

const mainClients = [
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

const projects = [
  {
    src: "/projektek/LegutobbiProjektek1.webp",
    alt: "Csatornázási kivitelezés földmunkával és nehézgépekkel",
  },
  {
    src: "/projektek/LegutobbiProjektek2.webp",
    alt: "Közműépítési referencia munkaterület Budapest környékén",
  },
  {
    src: "/projektek/LegutobbiProjektek3.webp",
    alt: "Ivóvízellátási hálózat kivitelezése terepi környezetben",
  },
  {
    src: "/projektek/LegutobbiProjektek4.webp",
    alt: "Mélyépítési és közműépítési munkafolyamat a helyszínen",
  },
  {
    src: "/projektek/LegutobbiProjektek5.webp",
    alt: "Szennyvízcsatornázási kivitelezés gépparkkal",
  },
  {
    src: "/projektek/LegutobbiProjektek6.webp",
    alt: "Készülő közműhálózati referencia projekt",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Hajdú Közmű Kft.",
  description:
    "A Hajdú Közmű Kft. közműépítés, csatornázás, ivóvízellátás és fagymentes kerti csap megoldásokat kínál Budapesten. Ha Hajdu, Hajdú, hajdu.hu vagy fagymenteskerticsap.hu kifejezésre keres, itt megtalálja a fontos információkat.",
  path: "/",
  image: "/projektek/LegutobbiProjektek1.webp",
  imageAlt: "Hajdú Közmű Kft. közműépítési projekt referencia",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}/#webpage`,
        "@type": "WebPage",
        "name": `${siteName} - Fagymentes kerti csap, közműépítés és csatornázás`,
        "url": siteUrl,
        "description": metadata.description,
        "inLanguage": "hu-HU",
        "isPartOf": {
          "@id": `${siteUrl}#website`,
        },
        "about": {
          "@id": `${siteUrl}#organization`,
        },
        "breadcrumb": {
          "@id": `${siteUrl}/#breadcrumb`,
        },
      },
      {
        "@id": `${siteUrl}/#services`,
        "@type": "ItemList",
        "name": "Kiemelt szolgáltatások",
        "itemListElement": serviceHighlights.map((service, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "provider": {
              "@id": `${siteUrl}#organization`,
            },
            "url": absoluteUrl(index === 2 ? "/termekek#fagymentes-kerti-csap" : "/"),
          },
        })),
      },
      {
        "@id": `${siteUrl}/#breadcrumb`,
        ...createBreadcrumbJsonLd([{ name: "Főoldal", path: "/" }]),
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="home-jsonld" data={jsonLd} />
      <HomePageClient
        advantages={advantages}
        suppliers={suppliers}
        mainClients={mainClients}
        projects={projects}
      />
    </>
  );
}