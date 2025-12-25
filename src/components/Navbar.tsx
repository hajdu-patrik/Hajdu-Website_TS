"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const isHomePage = pathname === "/" || pathname === "";

      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          globalThis.history.pushState(null, "", href);
        }
      }
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: "Főoldal", href: "/" },
    { name: "Rólunk", href: "/rolunk" },
    { name: "Termékek", href: "/termekek" },
    { name: "Pályázatok", href: "/palyazatok" },
    { name: "Kapcsolat", href: "/#kapcsolat" },
  ];

  return (
    <nav className="relative bg-cream dark:bg-dark-bg border-b border-gray-100 dark:border-gray-800 h-24 flex items-center z-[50]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative w-64 h-32 md:w-70 md:h-40 transition-transform group-hover:scale-105">
              <Image 
                src="/Logo.webp"
                alt="Hajdú Közmű Kft. Logó"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-600 dark:text-gray-300 hover:text-blue-600 font-semibold uppercase text-sm tracking-widest"
            >
              {item.name}
            </Link>
          ))}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-slate-800 dark:text-yellow-400">
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden p-2 text-slate-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full h-[calc(100vh-6rem)] bg-cream dark:bg-dark-bg z-[100] flex flex-col items-center justify-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-3xl font-bold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}