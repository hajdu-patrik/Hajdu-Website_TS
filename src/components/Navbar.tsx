"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { uiMotion } from "@/lib/motion";

export default function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const pathname = usePathname();
  const isOpen = openPath !== null && openPath === pathname;

  // GÖRGETÉS TILTÁSA:
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
    }
    globalThis.dispatchEvent(new Event("mobile-menu-state-change"));

    // Cleanup funkció, ha a komponens megsemmisülne
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-open");
      globalThis.dispatchEvent(new Event("mobile-menu-state-change"));
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
      }
    };

    globalThis.addEventListener("keydown", handleEscape);
    return () => globalThis.removeEventListener("keydown", handleEscape);
  }, []);

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
    setOpenPath(null);
  };

  const menuItems = [
    { name: "Főoldal", href: "/" },
    { name: "Rólunk", href: "/rolunk" },
    { name: "Termékek", href: "/termekek" },
    { name: "Pályázatok", href: "/palyazatok" },
    { name: "GYIK", href: "/gyakori-kerdesek" },
    { name: "Kapcsolat", href: "/kapcsolat" },
  ];

  const isActivePath = (href: string) => pathname === href;

  return (
    <nav
      aria-label="Elsődleges navigáció"
      className="sticky top-0 z-[100] flex h-20 w-full items-center border-b border-slate-200/80 bg-white/95 backdrop-blur-xl transition-colors duration-500 sm:h-24"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        
        <Link href="/" className="relative z-[130]" onClick={() => setOpenPath(null)} aria-label="Hajdú Közmű Kft. főoldal">
          <div className="relative w-36 sm:w-40 md:w-52">
            <Image 
              src="/Logo.webp"
              alt="Hajdú Közmű Kft. logó" 
              width={224}
              height={64}
              sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, 208px"
              className="h-auto w-full object-contain object-left" 
              priority 
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActivePath(item.href) ? "page" : undefined}
                  className={`font-bold uppercase text-[11px] tracking-[0.16em] transition-colors duration-200 focus-visible:text-[#0001f9] xl:text-xs xl:tracking-[0.2em] ${
                    isActivePath(item.href)
                      ? "text-[#0001f9]"
                      : "text-slate-600 hover:text-[#0001f9]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button 
          type="button"
          className="relative z-[130] rounded-xl p-2 text-slate-900 transition-colors duration-200 hover:bg-slate-100 focus-visible:bg-slate-100 lg:hidden"
          onClick={() => setOpenPath(isOpen ? null : (pathname ?? "/"))}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Mobil menü bezárása" : "Mobil menü megnyitása"}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: uiMotion.duration.normal, ease: uiMotion.easeStandard }}
            className="fixed inset-0 z-[120] flex h-screen w-full flex-col overflow-y-auto bg-white px-6 pb-10 pt-28 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigáció"
          >
            <div className="flex flex-grow flex-col items-center justify-center gap-7">
              <ul className="flex flex-col items-center gap-7">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      onClick={(e) => handleNavClick(e, item.href)}
                      aria-current={isActivePath(item.href) ? "page" : undefined}
                      className="text-2xl font-black uppercase tracking-tight text-slate-900 transition-colors duration-200 hover:text-[#0001f9] focus-visible:text-[#0001f9] sm:text-3xl"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}