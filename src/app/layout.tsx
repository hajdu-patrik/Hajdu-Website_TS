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
  title: "Hajdú Közmű Kft.",
  description: "Vízellátás, csatornázás és mélyépítés garanciával.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-[#020617] dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-500`}
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
        >
          <Navbar />
          
          <main className="flex-grow">
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