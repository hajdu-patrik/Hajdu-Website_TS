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
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center py-24 px-6 
        bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-500">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] 
            bg-blue-400/10 dark:bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
              Hajdú Közmű Kft.
            </h1>
            <p className="text-blue-600 dark:text-blue-400 text-xl font-bold uppercase tracking-[0.4em] mb-10">
              Garantált elégedettség
            </p>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
              Minden projektet a megérdemelt tisztelettel kezelünk. <br />
              <span className="font-semibold text-blue-600 dark:text-blue-400/80">Közműépítés mesterfokon.</span>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {advantages.map((text) => (
              <div key={text} className="group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300
                bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-md dark:shadow-2xl">
                <div className="p-2 bg-blue-100 dark:bg-blue-600/20 rounded-lg text-blue-600 dark:text-blue-400">
                  <CheckCircle size={24} />
                </div>
                <span className="font-bold text-base text-slate-800 dark:text-slate-100">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNEREINK - INFINITY SLIDER */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 text-center">
            Akikkel együtt dolgozunk
          </h2>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* A mozgó sáv */}
          <motion.div 
            className="flex whitespace-nowrap gap-12 md:gap-24 items-center py-4"
            animate={{ 
              x: [0, -1032]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Triplázott lista a végtelenített hatáshoz */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <a 
                key={index} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-4xl font-black text-slate-300 dark:text-slate-700 uppercase tracking-tighter hover:text-blue-600 dark:hover:text-blue-500 transition-all duration-300 cursor-pointer select-none no-underline"
              >
                {partner.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJEKTEK GALÉRIA */}
      <section className="py-32 px-6 bg-cream dark:bg-dark-bg transition-colors duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tighter uppercase">
            Legutóbbi projektek
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Betekintés legutóbbi munkáinkból, ahol a precizitás és a minőség találkozik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((num) => (
              <div 
                key={num} 
                className="relative h-72 rounded-3xl overflow-hidden shadow-2xl group bg-slate-200 dark:bg-slate-800 border border-slate-100 dark:border-slate-800"
              >
                <Image 
                  src={`/projektek/LegutobbiProjektek${num}.webp`} 
                  alt={`Referencia munka ${num}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
            
      {/* KAPCSOLAT */}
      <section id="kapcsolat" className="py-24 px-6 transition-colors duration-500
        bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-20 text-center uppercase tracking-tighter text-slate-800 dark:text-white"
          >
            Kapcsolat
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-10 flex items-center gap-4 text-blue-600 dark:text-blue-400">
                <MapPin size={40} /> Telephelyünk
              </h3>
              <p className="text-2xl mb-12 text-blue-800 dark:text-blue-200 font-bold">1033 Budapest, Csikós u. 13-15.</p>
              <div className="space-y-4 max-w-md">
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-600 dark:text-slate-400">Hétfő - Csütörtök</span>
                  <span className="font-bold">07:00 - 16:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-slate-600 dark:text-slate-400">Péntek</span>
                  <span className="font-bold">07:00 - 15:00</span>
                </div>
                <div className="flex justify-between pb-2 text-slate-400 dark:text-slate-500">
                  <span>Szombat - Vasárnap</span>
                  <span>Zárva</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start w-full">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-500 dark:text-white">
                Ügyvezetőink
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {/* Hajdú Zsolt */}
                <div className="group p-5 bg-white dark:bg-slate-800/40 rounded-2xl border-t-4 border-blue-600 flex flex-col items-center text-center transition-all hover:shadow-xl shadow-md">
                  <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3">Hajdú Zsolt</h4>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hajdu.zsolt@ghajdu.hu" className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">
                      <Mail size={16} /> hajdu.zsolt@hajdu.hu
                    </a>
                    <a href="tel:+36209294317" className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">
                      <Phone size={16} /> +36 20 929 4317
                    </a>
                  </div>
                </div>
                {/* Hajdú Tamás */}
                <div className="group p-5 bg-white dark:bg-slate-800/40 rounded-2xl border-t-4 border-slate-400 dark:border-slate-600 flex flex-col items-center text-center transition-all hover:shadow-xl shadow-md">
                  <h4 className="text-lg font-black text-slate-900 dark:text-slate-300 mb-3">Hajdú Tamás</h4>
                  <div className="flex flex-col gap-2">
                    <a href="mailto:hajdu.tamas@ghajdu.hu" className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">
                      <Mail size={16} /> hajdu.tamas@hajdu.hu
                    </a>
                    <a href="tel:+36209293964" className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">
                      <Phone size={16} /> +36 20 929 3964
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.3032768560384!2d19.04353457688229!3d47.54245649175225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d9600f7b020b%3A0xc665191d9272338b!2zQnVkYXBlc3QsIENzaWvDs3MgdTEzLCAxMDMz!5e0!3m2!1shu!2shu!4v1735122150000!5m2!1shu!2shu"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hajdú Közmű Kft. budapesti telephelye"
          className="opacity-90 grayscale hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180 transition-all duration-700"
        ></iframe>
      </section>
    </main>
  );
}