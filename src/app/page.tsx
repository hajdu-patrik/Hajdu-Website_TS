"use client";

import { useEffect } from "react";
import { CheckCircle, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const advantages = [
    "Minden technikusunk képzett és tanúsított.",
    "Teljes körű elégedettségi garanciát vállalunk.",
    "Kettő generáció és több mint 20 éves tapasztalat.",
    "Ivóvízellátás, szenny- és csapadékcsatornázás."
  ];

  const projects = [1, 2, 3, 4, 5, 6];

  const partners = [
    { name: "Szebeton Zrt.", url: "https://szebeton.hu" },
    { name: "DT Közmű Kft.", url: "https://dtkozmu.hu" },
    { name: "Terra Metal Kft.", url: "https://terrametal.hu" },
  ];

  useEffect(() => {
    const handleInitialScroll = () => {
      const hash = globalThis.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    };

    handleInitialScroll();
    globalThis.addEventListener("hashchange", handleInitialScroll);
    return () => globalThis.removeEventListener("hashchange", handleInitialScroll);
  }, []);

  return (
    <main>
      {/* HERO SECTION - Új márkaszínekkel (Blue & Cyan) */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center py-24 px-6 
        bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
        
        {/* HÁTTÉR RAGYOGÁS: Cián (#00ffff) glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] 
            bg-[#00ffff]/10 dark:bg-[#00ffff]/15 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
              Hajdú Közmű Kft.
            </h1>
            {/* Tagline Királykék/Cián színben */}
            <p className="text-[#0001f9] dark:text-[#00ffff] text-xl font-bold uppercase tracking-[0.4em] mb-10">
              Garantált elégedettség
            </p>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
              Minden projektet a megérdemelt tisztelettel kezelünk. <br />
              <span className="font-semibold text-[#0001f9] dark:text-[#00ffff]/80">Közműépítés mesterfokon.</span>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {advantages.map((text) => (
              <div key={text} className="group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300
                bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-[#00ffff]/20 shadow-md dark:shadow-[#00ffff]/5">
                {/* Ikonok a márkaszínekben */}
                <div className="p-2 bg-[#0001f9]/10 dark:bg-[#00ffff]/20 rounded-lg text-[#0001f9] dark:text-[#00ffff]">
                  <CheckCircle size={24} />
                </div>
                <span className="font-bold text-base text-slate-800 dark:text-slate-100">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNEREINK - Infinity Slider */}
      <section className="py-16 bg-white dark:bg-[#020617] border-y border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0001f9] dark:text-[#00ffff] text-center">
            Akikkel együtt dolgozunk
          </h2>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex whitespace-nowrap gap-12 md:gap-24 items-center py-4"
            animate={{ x: [0, -1032] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-4xl font-black text-slate-300 dark:text-slate-700 uppercase tracking-tighter hover:text-[#0001f9] dark:hover:text-[#00ffff] transition-all duration-300 cursor-pointer select-none no-underline"
              >
                {partner.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJEKTEK GALÉRIA */}
      <section className="pt-32 pb-44 px-6 bg-white dark:bg-[#020617] transition-colors duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter uppercase">
            Legutóbbi projektek
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Betekintés legutóbbi munkáinkból.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((num) => (
              <div key={num} className="relative h-72 rounded-3xl overflow-hidden shadow-2xl group bg-slate-200 dark:bg-slate-800 border border-slate-100 dark:border-slate-800">
                <Image src={`/projektek/LegutobbiProjektek${num}.webp`} alt={`Referencia munka ${num}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" draggable="false" />
                {/* Márkakék/Cián overlay hoverre */}
                <div className="absolute inset-0 bg-[#0001f9]/10 dark:bg-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉRKÉP */}
      <section className="w-full h-[450px] overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.3417182387116!2d19.03750551323127!3d47.561139371065536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d97597c972f9%3A0x26f72e1a36a085dc!2sBudapest%2C%20Csik%C3%B3s%20u.%2013%2C%201033!5e0!3m2!1shu!2shu!4v1766756980136!5m2!1shu!2shu" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Hajdú Közmű Kft. budapesti telephelye"
        />
      </section>
    </main>
  );
}