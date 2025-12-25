"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 transition-colors duration-500">
      <div className="text-center max-w-lg w-full">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex justify-center mb-12">
          <div className="p-8 bg-red-100 dark:bg-red-900/20 rounded-[2.5rem] shadow-xl shadow-red-500/10">
            <AlertCircle size={80} className="text-red-600 dark:text-red-500" />
          </div>
        </motion.div>

        <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-700 dark:text-slate-300">Hoppá! Eltévedtél a hálózatban.</h2>
        
        <div className="bg-white dark:bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-700 mb-12 shadow-lg">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Visszairányítás ennyi idő múlva:</p>
          <AnimatePresence mode="wait">
            <motion.span key={countdown} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className="text-6xl font-black text-blue-600 dark:text-blue-400 block">
              {countdown}
            </motion.span>
          </AnimatePresence>
        </div>

        <Link href="/" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-600/30">
          <ArrowLeft size={24} /> Vissza a főoldalra
        </Link>
      </div>
    </main>
  );
}