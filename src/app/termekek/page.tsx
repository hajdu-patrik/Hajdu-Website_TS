import type { Metadata } from "next";
import TermekekGrid from "@/features/termekek/components/TermekekGrid";
import JsonLdScript from "@/components/seo/JsonLdScript";
import {
  absoluteUrl,
  createBreadcrumbJsonLd,
  createPageMetadata,
  siteName,
  siteUrl,
} from "@/lib/seo";

const products = [
  {
    id: "fagymentes-kerti-csap",
    title: "Fagymentes kerti csap",
    kicker: "Kiemelt termék",
    description:
      "Erőteljes öntöttvas csaptest, sárgaréz vízkifolyóval és rozsdaálló csapszárral. Megbízható kültéri vízvételi megoldás, amely ellenáll a téli fagyoknak is.",
    image: "/termekek/FagymentesKertiCsapTermekNoBg.webp",
    alt: "Fagymentes kerti csap termékfotó kültéri vízvételi ponthoz",
    emailSubject: "Érdeklődés: Fagymentes kerti csap",
    features: [
      "Télálló, kültéri használatra tervezett konstrukció",
      "Erős öntöttvas csaptest és rozsdaálló alkatrészek",
      "Kertes házakhoz, udvarokhoz és üzemi környezethez is alkalmas",
    ],
  },
  {
    id: "kezi-szivattyu",
    title: "Manuális kézi szivattyú",
    kicker: "Vízvételi megoldás áram nélkül",
    description:
      "Erős öntöttvas testtel és rozsdaálló csapszárral rendelkező kézi szivattyú. Jó választás olyan helyekre, ahol nincs elektromos áram, de fontos a biztos vízvétel.",
    image: "/termekek/FagymentesKertiKutTermekNoBg.webp",
    alt: "Manuális kézi szivattyú termékfotó kültéri vízvételhez",
    emailSubject: "Érdeklődés: Manuális kézi szivattyú",
    features: [
      "Stabil, hosszú élettartamú öntöttvas kivitel",
      "Áramfüggetlen használat, egyszerű karbantartás",
      "Kerti, udvari vagy ipari segéd-vízvételi pontokhoz is használható",
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Fagymentes kerti csap és vízellátási termékek",
  description:
    "Fagymentes kerti csap és kézi szivattyú a Hajdú Közmű Kft. kínálatából. Ha a hajdu.hu vagy fagymenteskerticsap.hu kulcsszóra keres, itt részletes termékinformációt és ajánlatkérési lehetőséget talál.",
  path: "/termekek",
  image: "/termekek/FagymentesKertiCsapTermekNoBg.webp",
  imageAlt: "Fagymentes kerti csap termék a Hajdú Közmű Kft. kínálatából",
  keywords: [
    "fagymentes kerti csap ár nélkül",
    "fagymentes kerti csap ajánlatkérés",
    "hajdu.hu termékek",
    "fagymenteskerticsap.hu",
    "kézi szivattyú",
  ],
});

export default function TermekekPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}/termekek#webpage`,
        "@type": "CollectionPage",
        "name": "Termékeink | Hajdú Közmű Kft.",
        "url": `${siteUrl}/termekek`,
        "description": metadata.description,
        "inLanguage": "hu-HU",
        "breadcrumb": {
          "@id": `${siteUrl}/termekek#breadcrumb`,
        },
      },
      {
        "@id": `${siteUrl}/termekek#products`,
        "@type": "ItemList",
        "name": "Fagymentes kerti csap és vízellátási termékek",
        "itemListElement": products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/termekek#${product.id}`),
          item: {
            "@type": "Product",
            name: product.title,
            description: product.description,
            image: absoluteUrl(product.image),
            brand: {
              "@type": "Brand",
              name: siteName,
            },
            manufacturer: {
              "@id": `${siteUrl}#organization`,
            },
          },
        })),
      },
      {
        "@id": `${siteUrl}/termekek#breadcrumb`,
        ...createBreadcrumbJsonLd([
          { name: "Főoldal", path: "/" },
          { name: "Termékek", path: "/termekek" },
        ]),
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="termekek-jsonld" data={jsonLd} />
      <main className="page-shell">
        <div className="page-container">
          <section aria-labelledby="termekek-title" className="page-intro">
            <h1 id="termekek-title" className="page-title text-center">
              Termékeink
            </h1>
            <p className="page-subtitle">
              Prémium minőségű alkatrészek és berendezések a vízellátás szolgálatában.
            </p>
          </section>

          <TermekekGrid products={products} />
        </div>
      </main>
    </>
  );
}