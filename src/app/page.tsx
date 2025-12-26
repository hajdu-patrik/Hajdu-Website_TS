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
            <p className="text-[#0606ff] dark:text-[#00ffff] text-xl font-bold uppercase tracking-[0.4em] mb-10">
              Garantált elégedettség
            </p>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
              Minden projektet a megérdemelt tisztelettel kezelünk. <br />
              <span className="font-semibold text-[#0606ff] dark:text-[#00ffff]/80">Közműépítés mesterfokon.</span>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {advantages.map((text) => (
              <div key={text} className="group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300
                bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-[#00ffff]/20 shadow-md dark:shadow-[#00ffff]/5">
                {/* Ikonok a márkaszínekben */}
                <div className="p-2 bg-[#0606ff]/10 dark:bg-[#00ffff]/20 rounded-lg text-[#0606ff] dark:text-[#00ffff]">
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
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#0606ff] dark:text-[#00ffff] text-center">
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
                className="text-2xl md:text-4xl font-black text-slate-300 dark:text-slate-700 uppercase tracking-tighter hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-all duration-300 cursor-pointer select-none no-underline"
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
                <div className="absolute inset-0 bg-[#0606ff]/10 dark:bg-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
            
      {/* KAPCSOLAT */}
      <section id="kapcsolat" className="pt-24 pb-30 px-6 transition-colors duration-500 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-20 text-center uppercase tracking-tighter text-slate-800 dark:text-white">
            Kapcsolat
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* TELEPHELY */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              <h3 className="text-3xl font-bold mb-10 flex items-center justify-center lg:justify-start gap-4 text-[#0606ff] dark:text-[#00ffff] w-full">
                <MapPin size={40} className="shrink-0" /> Telephelyünk
              </h3>
              <p className="text-2xl mb-12 text-[#0666ff] dark:text-blue-200 font-bold">1033 Budapest, Csikós u. 13-15.</p>
              <div className="space-y-4 w-full max-w-md mx-auto lg:mx-0 bg-slate-50 dark:bg-slate-800/20 p-7 rounded-2xl border border-1.5 border-slate-200 dark:border-slate-800">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-3"><span className="text-slate-600 dark:text-slate-400 font-medium">Hétfő - Csütörtök</span><span className="font-bold text-[#0606ff] dark:text-white">07:00 - 16:00</span></div>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2"><span className="text-slate-600 dark:text-slate-400 font-medium">Péntek</span><span className="font-bold text-[#0606ff] dark:text-white">07:00 - 15:00</span></div>
                <div className="flex justify-between pb-2 text-slate-400 dark:text-slate-500"><span className="font-medium">Szombat - Vasárnap</span><span className="font-bold uppercase tracking-widest text-xs">Zárva</span></div>
              </div>
            </div>

            {/* ÜGYVEZETŐK */}
            <div className="flex flex-col items-center lg:items-start w-full mt-10 lg:mt-0">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-widest text-slate-500 dark:text-white text-center lg:text-left w-full">Ügyvezetőink</h3>
              <div className="grid grid-cols-1 gap-6 w-full max-w-md mx-auto lg:mx-0">
                {/* Hajdú Zsolt */}
                <div className="group p-4 bg-white dark:bg-slate-800/40 rounded-3xl border-l-8 border-[#00ffff] flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:shadow-2xl shadow-lg">
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4">Hajdú Zsolt</h4>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:hajdu.zsolt@hajdu.hu" className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">
                      <Mail size={18} className="text-[#0606ff] dark:text-[#00ffff]" /> <span className="font-medium">hajdu.zsolt@hajdu.hu</span>
                    </a>
                    <a href="tel:+36209294317" className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">
                      <Phone size={18} className="text-[#0606ff] dark:text-[#00ffff]" /> <span className="font-medium">+36 20 929 4317</span>
                    </a>
                  </div>
                </div>
                {/* Hajdú Tamás */}
                <div className="group p-4 bg-white dark:bg-slate-800/40 rounded-3xl border-l-8 border-slate-400 dark:border-slate-600 flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:shadow-2xl shadow-lg">
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4">Hajdú Tamás</h4>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:hajdu.tamas@hajdu.hu" className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">
                      <Mail size={18} className="text-slate-400 dark:text-slate-300" /> <span className="font-medium">hajdu.tamas@hajdu.hu</span>
                    </a>
                    <a href="tel:+36209293964" className="flex items-center justify-center lg:justify-start gap-3 hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">
                      <Phone size={18} className="text-slate-400 dark:text-slate-300" /> <span className="font-medium">+36 20 929 3964</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TÉRKÉP */}
      <section className="w-full h-[450px] overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.3032768560384!2d19.04353457688229!3d47.54245649175225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9600f7b020b%3A0xc665191d9272338b!2zQnVkYXBlc3QsIENzaWvDs3MgdTEzLCAxMDMz!5e0!3m2!1shu!2shu!4v1735122150000!5m2!1shu!2shu" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hajdú Közmű Kft. budapesti telephelye"
          className="opacity-90 grayscale hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-700">
        </iframe>
      </section>
    </main>
  );
}