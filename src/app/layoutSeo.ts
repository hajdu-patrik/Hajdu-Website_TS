import type { Metadata, Viewport } from "next";
import {
  absoluteUrl,
  brandVariants,
  companyDescription,
  defaultOgImage,
  sharedKeywords,
  siteName,
  siteUrl,
} from "@/lib/seo";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hajdú Közmű Kft. | Fagymentes kerti csap, közműépítés és csatornázás",
    template: "%s | Hajdú Közmű Kft.",
  },
  description: companyDescription,
  applicationName: siteName,
  keywords: sharedKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: siteUrl,
    languages: {
      "x-default": siteUrl,
      "hu-HU": siteUrl,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "közműépítés és vízellátás",
  classification: "közműépítés, csatornázás, fagymentes kerti csap",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: siteUrl,
    siteName,
    title: `${siteName} - Fagymentes kerti csap, közműépítés és csatornázás`,
    description: companyDescription,
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: `${siteName} logó és szolgáltatások`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Fagymentes kerti csap és közműépítés`,
    description: companyDescription,
    images: [absoluteUrl(defaultOgImage)],
  },
  other: {
    "geo.region": "HU-BU",
    "geo.placename": "Budapest",
    "geo.position": "47.56114309354124;19.040089953624864",
    ICBM: "47.56114309354124, 19.040089953624864",
  },
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${siteUrl}#organization`,
      "@type": ["Organization", "LocalBusiness"],
      name: siteName,
      alternateName: brandVariants,
      url: siteUrl,
      logo: absoluteUrl("/Logo.webp"),
      image: absoluteUrl(defaultOgImage),
      description: companyDescription,
      email: "hajdu@hajdu.hu",
      telephone: "+36209294317",
      foundingDate: "2004",
      areaServed: [
        {
          "@type": "City",
          name: "Budapest",
        },
        {
          "@type": "AdministrativeArea",
          name: "Pest vármegye",
        },
      ],
      knowsAbout: sharedKeywords,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Csikós u. 13-15.",
        addressLocality: "Budapest",
        postalCode: "1033",
        addressCountry: "HU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.56114309354124,
        longitude: 19.040089953624864,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "07:00",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "07:00",
          closes: "15:00",
        },
      ],
      sameAs: ["https://www.facebook.com/p/Hajdú-Közmű-Kft-100063708745631"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Szolgáltatások és termékek",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Közműépítés és csatornázás",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ivóvízellátás és mélyépítés",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Fagymentes kerti csap",
            },
          },
        ],
      },
    },
    {
      "@id": `${siteUrl}#website`,
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      description: companyDescription,
      inLanguage: "hu-HU",
      publisher: {
        "@id": `${siteUrl}#organization`,
      },
    },
  ],
};
