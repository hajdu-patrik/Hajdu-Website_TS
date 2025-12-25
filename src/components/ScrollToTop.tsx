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
            bg-blue-600/90 dark:bg-blue-500/20 
            backdrop-blur-md
            border border-blue-400/30 dark:border-blue-400/20
            text-white dark:text-blue-400 
            rounded-2xl 
            shadow-[0_0_20px_rgba(37,99,235,0.3)] 
            hover:bg-blue-700 dark:hover:bg-blue-500/30 
            hover:scale-110 active:scale-95
            transition-all duration-300 group"
          aria-label="Vissza a tetejére"
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