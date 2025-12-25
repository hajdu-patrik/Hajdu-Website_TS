import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // Importálás ellenőrzése
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hajdú Közmű Kft.",
  description: "Vízellátás, csatornázás és mélyépítés garanciával.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} bg-cream text-slate-900 dark:bg-dark-bg dark:text-cream min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          
          {/* EZT ELLENŐRIZD: Itt kell lennie, nem a page.tsx-ben! */}
          <ScrollToTop /> 
          
        </ThemeProvider>
      </body>
    </html>
  );
}