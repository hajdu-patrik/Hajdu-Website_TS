"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // GÖRGETÉS TILTÁSA:
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup funkció, ha a komponens megsemmisülne
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsOpen(false); 
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const isHomePage = pathname === "/" || pathname === "";

      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          globalThis.history.pushState(null, "", href);
        }
      }
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Főoldal", href: "/" },
    { name: "Rólunk", href: "/rolunk" },
    { name: "Termékek", href: "/termekek" },
    { name: "Pályázatok", href: "/palyazatok" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-24 flex items-center z-[100] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative z-[130]" onClick={() => setIsOpen(false)}>
          <div className="relative w-40 h-10 md:w-56 md:h-16">
            <Image 
              src="/Logo.webp"
              alt="Hajdú Közmű Logo" 
              fill 
              className="object-contain object-left dark:brightness-110" 
              priority 
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-slate-600 dark:text-slate-300 hover:text-[#0001f9] dark:hover:text-[#00ffff] font-bold uppercase text-xs tracking-[0.2em] transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-800 dark:text-yellow-400 hover:scale-110 transition-all"
          >
            {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
          </button>
        </div>

        {/* MOBIL HAMBURGER GOMB */}
        <button 
          className="lg:hidden relative z-[130] p-2 text-slate-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* MOBIL MENÜ OVERLAY ANIMÁCIÓVAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-white dark:bg-slate-900 z-[120] lg:hidden overflow-hidden flex flex-col"
          >
            <div className="flex flex-col items-center justify-center flex-grow gap-8 px-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white hover:text-[#0001f9] dark:hover:text-[#00ffff]"
                >
                  {item.name}
                </Link>
              ))}

              <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 my-4" />

              {/* Mobil Téma Váltó */}
              <button 
                onClick={toggleTheme}
                className="flex items-center gap-4 px-10 py-5 bg-slate-900 dark:bg-slate-800 rounded-2xl w-full max-w-xs justify-center font-black uppercase text-sm tracking-widest shadow-lg active:scale-95 transition-all text-slate-100"
              >
                {mounted && (
                  <>
                    {theme === "dark" ? <Sun className="text-yellow-400" /> : <Moon className="text-[#00ffff]" />}
                    <span className="text-slate-100">{theme === "dark" ? "Világos Mód" : "Sötét Mód"}</span>
                  </>
                )}
              </button>

              <button 
                onClick={() => setIsOpen(false)}
                className="mt-8 flex items-center gap-2 text-slate-400 font-bold uppercase text-xs tracking-[0.3em] hover:text-red-500 transition-colors"
              >
                <X size={16} /> Csak kilépés
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}