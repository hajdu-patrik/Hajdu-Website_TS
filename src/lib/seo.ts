import type { Metadata } from "next";

export const siteName = "Hajdú Közmű Kft.";
export const siteUrl = "https://hajdu.hu";
export const defaultOgImage = "/Og-image.webp";
export const companyDescription =
  "Hajdú Közmű Kft. közműépítés, ivóvízellátás, csatornázás, mélyépítés és fagymentes kerti csap megoldások Budapesten és környékén, több mint 21 év szakmai tapasztalattal.";

export const brandVariants = [
  "Hajdu",
  "Hajdú",
  "Hajdú Közmű Kft.",
  "Hajdu Közmű Kft.",
  "Hajdu Közmu Kft.",
  "Hajdu Kozmu Kft.",
];

export const sharedKeywords = Array.from(
  new Set([
    ...brandVariants,
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
  ]),
);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  openGraphType?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
  imageAlt = `${siteName} - ${title}`,
  noIndex = false,
  openGraphType = "website",
}: CreatePageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const mergedKeywords = Array.from(new Set([...sharedKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical,
      languages: {
        "x-default": canonical,
        "hu-HU": canonical,
      },
    },
    category: "közműépítés és vízellátás",
    classification: "közműépítés, csatornázás, fagymentes kerti csap",
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: openGraphType,
      locale: "hu_HU",
      url: canonical,
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [absoluteUrl(image)],
    },
    other: {
      "geo.region": "HU-BU",
      "geo.placename": "Budapest",
      "geo.position": "47.56114309354124;19.040089953624864",
      ICBM: "47.56114309354124, 19.040089953624864",
    },
  };
}

export function createBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}