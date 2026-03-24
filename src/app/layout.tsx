import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { rootJsonLd } from "@/app/layoutSeo";

const inter = Inter({ subsets: ["latin"], preload: false });

export { rootMetadata as metadata, rootViewport as viewport } from "@/app/layoutSeo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <JsonLdScript id="root-jsonld" data={rootJsonLd} />
      </head>
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-colors duration-500`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-[#0001f9] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Ugrás a fő tartalomra
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}