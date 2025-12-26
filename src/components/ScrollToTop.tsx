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
          onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[100] p-4 
              bg-brand-blue dark:bg-brand-cyan/20 
              backdrop-blur-md
              border border-brand-blue/30 dark:border-brand-cyan/50
              text-white dark:text-brand-cyan 
              rounded-2xl 
              shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          >
          <ChevronUp 
            size={28} 
            strokeWidth={3} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}