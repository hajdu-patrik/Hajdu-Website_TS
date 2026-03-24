"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { uiMotion } from "@/lib/motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const frame = globalThis.requestAnimationFrame(() => setMounted(true));

    const toggleVisibility = () => {
      if (globalThis.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    globalThis.addEventListener("scroll", toggleVisibility);
    return () => {
      globalThis.cancelAnimationFrame(frame);
      globalThis.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const frame = globalThis.requestAnimationFrame(() => {
      setIsMobileMenuOpen(document.body.classList.contains("mobile-menu-open"));
    });

    const handleMobileMenuStateChange = () => {
      setIsMobileMenuOpen(document.body.classList.contains("mobile-menu-open"));
    };

    globalThis.addEventListener("mobile-menu-state-change", handleMobileMenuStateChange);

    return () => {
      globalThis.cancelAnimationFrame(frame);
      globalThis.removeEventListener("mobile-menu-state-change", handleMobileMenuStateChange);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && !isMobileMenuOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: uiMotion.duration.normal, ease: uiMotion.easeStandard }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-4 z-[100] rounded-2xl border border-[#0001f9]/30 bg-[#0001f9] p-3 text-white shadow-lg shadow-[#0001f9]/10 backdrop-blur-md transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0001f9] focus-visible:ring-offset-2 sm:bottom-8 sm:right-8 sm:p-4"
          aria-label="Vissza az oldal tetejére"
        >
          <ChevronUp 
            size={28} 
            strokeWidth={3} 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}