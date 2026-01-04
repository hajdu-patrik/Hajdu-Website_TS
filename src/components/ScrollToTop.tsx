"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const toggleVisibility = () => {
      if (globalThis.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    globalThis.addEventListener("scroll", toggleVisibility);
    return () => globalThis.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          // INTERAKTÍV ANIMÁCIÓK: Emelkedés és nagyítás hoverre
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[100] p-4 
              bg-[#0606ff] dark:bg-[#00ffff]/10 
              backdrop-blur-md
              border border-[#0606ff]/30 dark:border-[#00ffff]/40
              text-white dark:text-[#00ffff] 
              rounded-2xl 
              transition-colors duration-300
              /* DINAMIKUS ÁRNYÉK: Kék világos módban, Cián ragyogás sötétben */
              shadow-xl shadow-[#0606ff]/20 
              dark:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
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