import type { Metadata, Viewport } from "next";
import { company, openingHours, siteUrl, yearsOfExperience } from "@/content/site";

export const siteName = company.name;

export const homeTitle = `${siteName} | Fagymentes kerti csap, közműépítés és csatornázás`;

const companyDescription =
  `Hajdú Közmű Kft. közműépítés, ivóvízellátás, csatornázás, mélyépítés és fagymentes kerti csap megoldások Budapesten és környékén, több mint ${yearsOfExperience} év szakmai tapasztalattal.`;

const brandVariants = ["Hajdu", "Hajdú", "Hajdu Közmű Kft.", "Hajdu Közmu Kft.", "Hajdu Kozmu Kft."];

const services = [
  "közműépítés",
  "ivóvízellátás",
  "csatornázás",
  "szennyvízcsatornázás",
  "csapadékcsatornázás",
  "mélyépítés",
  "fagymentes kerti csap",
];

const sharedKeywords = [
  ...brandVariants,
  siteName,
  "hajdu.hu",
  "fagymenteskerticsap.hu",
  "fagymentes kerti csap",
  "fagymentes csap",
  "közmű",
  "kozmu",
  "közműépítés",
  "vízellátás",
  "csőtörés",
  "csotores",
  "cső",
  "csatorna",
  "ivóvízellátás",
  "csatornázás",
  "szennyvízcsatornázás",
  "csapadékcsatornázás",
  "mélyépítés",
  "Budapest",
  "Pest vármegye",
];

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}

type OgImage = Readonly<{ path: string; alt: string }>;

/** Every Open Graph image is a 1200x630 JPEG under public/og/. */
export const ogImages = {
  default: { path: "/og/hajdu-kozmu.jpg", alt: "Hajdú Közmű Kft. logó és szolgáltatások" },
  home: { path: "/og/fooldal.jpg", alt: "Hajdú Közmű Kft. közműépítési projekt referencia" },
  about: { path: "/og/rolunk.jpg", alt: "Hajdú Közmű Kft. közműépítési referenciafotó" },
  products: { path: "/og/termekek.jpg", alt: "Fagymentes kerti csap termék a Hajdú Közmű Kft. kínálatából" },
  grants: {
    path: "/og/palyazatok.jpg",
    alt: "Széchenyi 2020 tájékoztató tábla a Hajdú Közmű Kft. technológiai megújulásáról",
  },
} as const satisfies Record<string, OgImage>;

function socialMetadata(title: string, description: string, url: string, image: OgImage) {
  return {
    openGraph: {
      type: "website",
      locale: "hu_HU",
      siteName,
      url,
      title,
      description,
      images: [{ url: image.path, width: 1200, height: 630, alt: image.alt, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.path, alt: image.alt }],
    },
  } satisfies Metadata;
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: homeTitle, template: `%s | ${siteName}` },
  description: companyDescription,
  applicationName: siteName,
  keywords: sharedKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...socialMetadata(homeTitle, companyDescription, absoluteUrl("/"), ogImages.default),
  other: {
    "geo.region": "HU-BU",
    "geo.placename": company.address.city,
    "geo.position": `${company.geo.latitude};${company.geo.longitude}`,
    ICBM: `${company.geo.latitude}, ${company.geo.longitude}`,
  },
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

type PageMetadataOptions = Readonly<{
  /** Shown before the " | Hajdú Közmű Kft." suffix, unless `absoluteTitle` is set. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogImage?: OgImage;
}>;

export function createPageMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  keywords = [],
  ogImage = ogImages.default,
}: PageMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteName}`;
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: Array.from(new Set([...sharedKeywords, ...keywords])),
    alternates: { canonical: url },
    ...socialMetadata(fullTitle, description, url, ogImage),
  };
}

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": organizationId,
      name: siteName,
      alternateName: brandVariants,
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/Logo.webp"), width: 960, height: 242 },
      image: absoluteUrl(ogImages.default.path),
      description: companyDescription,
      email: company.email,
      telephone: company.phone.e164,
      foundingDate: String(company.foundingYear),
      areaServed: [
        { "@type": "City", name: "Budapest" },
        { "@type": "AdministrativeArea", name: "Pest vármegye" },
      ],
      knowsAbout: services,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        postalCode: company.address.postalCode,
        addressCountry: company.address.countryCode,
      },
      geo: { "@type": "GeoCoordinates", ...company.geo },
      openingHoursSpecification: openingHours
        .filter((entry) => entry.days.length > 0)
        .map((entry) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: entry.days,
          opens: entry.opens,
          closes: entry.closes,
        })),
      sameAs: [company.facebookUrl],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Szolgáltatások és termékek",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Közműépítés és csatornázás" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ivóvízellátás és mélyépítés" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fagymentes kerti csap" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: siteName,
      url: absoluteUrl("/"),
      description: companyDescription,
      inLanguage: "hu-HU",
      publisher: { "@id": organizationId },
    },
  ],
};

type PageJsonLdOptions = Readonly<{
  type?: "WebPage" | "AboutPage" | "CollectionPage" | "ContactPage" | "FAQPage";
  path: string;
  name: string;
  description: string;
  /** The current page's crumb; "Főoldal" is always prepended. Omit on the home page. */
  breadcrumb?: string;
  /** Extra properties for the WebPage node, e.g. `mainEntity` on the FAQ page. */
  page?: Record<string, unknown>;
  /** Additional nodes for the graph, e.g. a product list. */
  nodes?: ReadonlyArray<Record<string, unknown>>;
}>;

export function createPageJsonLd({
  type = "WebPage",
  path,
  name,
  description,
  breadcrumb,
  page,
  nodes = [],
}: PageJsonLdOptions) {
  const url = absoluteUrl(path);
  const breadcrumbId = `${url}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "hu-HU",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
        ...(breadcrumb ? { breadcrumb: { "@id": breadcrumbId } } : {}),
        ...page,
      },
      ...(breadcrumb
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": breadcrumbId,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Főoldal", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: breadcrumb, item: url },
              ],
            },
          ]
        : []),
      ...nodes,
    ],
  };
}

