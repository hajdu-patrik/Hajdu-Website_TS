import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hajdu.hu"),
  title: {
    default: "Hajdú Közmű Kft. | Vízellátás és Csatornázás",
    template: "%s | Hajdú Közmű Kft.",
  },
  description: "Profi közműépítés, ivóvízellátás, szennyvízcsatornázás és mélyépítés Budapesten és környékén több mint 20 év tapasztalattal.",
  keywords: ["közműépítés", "vízellátás", "csatornázás", "mélyépítés", "Hajdú Közmű", "Budapest", "vízvezeték szerelés"],
  authors: [{ name: "Hajdú Közmű Kft." }],
  creator: "Hajdú Közmű Kft.",
  publisher: "Hajdú Közmű Kft.",
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
    url: "https://hajdu.hu",
    siteName: "Hajdú Közmű Kft.",
    title: "Hajdú Közmű Kft. - Közműépítés Mesterfokon",
    description: "Vízellátás, csatornázás és mélyépítés garanciával. Ismerje meg professzionális szolgáltatásainkat!",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Hajdú Közmű Kft. Logo és Géppark",
      },
    ],
  },
  // X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Hajdú Közmű Kft. - Közműépítés Mesterfokon",
    description: "Profi vízellátás és csatornázás Budapesten.",
    images: ["/Og-image.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hajdú Közmű Kft.",
    "image": "https://hajdu.hu/logo.webp",
    "@id": "https://hajdu.hu",
    "url": "https://hajdu.hu",
    "telephone": "+36209294317",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Csikós u. 13-15.",
      "addressLocality": "Budapest",
      "postalCode": "1033",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.56114309354124, 
      "longitude": 19.040089953624864
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "07:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "www.facebook.com/p/Hajdú-Közmű-Kft-100063708745631"
    ]
  };

  return (
    <html lang="hu" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-500`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main id="main-content" className="flex-grow focus:outline-none">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}