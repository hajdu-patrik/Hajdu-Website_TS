import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteJsonLd } from "@/lib/seo";
import { inter } from "./fonts";
import "./globals.css";

export { rootMetadata as metadata, rootViewport as viewport } from "@/lib/seo";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="hu" className={inter.variable} data-scroll-behavior="smooth">
      <body id="top" className="flex min-h-screen flex-col">
        <JsonLd data={siteJsonLd} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-brand focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Ugrás a fő tartalomra
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="grow outline-none">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
