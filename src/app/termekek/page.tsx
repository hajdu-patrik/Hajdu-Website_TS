import type { Metadata } from "next";
import { ProductCard, type Product } from "@/components/products/ProductCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageShell } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Heading";
import { absoluteUrl, createPageJsonLd, createPageMetadata, ogImages } from "@/lib/seo";

const description =
  "Fagymentes kerti csap és kézi szivattyú a Hajdú Közmű Kft. kínálatából. Ha a hajdu.hu vagy fagymenteskerticsap.hu kulcsszóra keres, itt részletes termékinformációt és ajánlatkérési lehetőséget talál.";

const products: readonly Product[] = [
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
  description,
  path: "/termekek",
  ogImage: ogImages.products,
  keywords: [
    "fagymentes kerti csap ár nélkül",
    "fagymentes kerti csap ajánlatkérés",
    "hajdu.hu termékek",
    "fagymenteskerticsap.hu",
    "kézi szivattyú",
  ],
});

const jsonLd = createPageJsonLd({
  type: "CollectionPage",
  path: "/termekek",
  name: "Termékeink | Hajdú Közmű Kft.",
  description,
  breadcrumb: "Termékek",
  nodes: [
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl("/termekek")}#products`,
      name: "Fagymentes kerti csap és vízellátási termékek",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          description: product.description,
          image: absoluteUrl(product.image),
          url: absoluteUrl(`/termekek#${product.id}`),
        },
      })),
    },
  ],
});

export default function TermekekPage() {
  return (
    <PageShell>
      <JsonLd data={jsonLd} />
      <PageHeader
        title="Termékeink"
        description="Prémium minőségű alkatrészek és berendezések a vízellátás szolgálatában."
      />
      <div className="product-grid grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} isLcp={index === 0} />
        ))}
      </div>
    </PageShell>
  );
}
