"use client";

import Image from "next/image";
import { Award, Percent } from "lucide-react";

export default function PalyazatokPage() {
  return (
    <main className="min-h-screen pt-30 pb-24 md:pb-50 px-6 bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-16 text-center uppercase tracking-tighter text-slate-900 dark:text-white">Pályázatok</h1>
        
        <div className="bg-white dark:bg-slate-800/40 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-[#00ffff]/10 flex flex-col">
          
          <div className="relative w-full h-80 md:h-[450px]">
            <Image src="/palyazatok/Palyazat.webp" alt="Pályázati gép" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
               <span className="bg-[#0606ff] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Sikeres projekt</span>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="space-y-2">
                <span className="text-[#0606ff] dark:text-[#00ffff] font-bold text-sm uppercase tracking-widest">Projekt címe</span>
                <p className="text-2xl md:text-3xl font-black leading-tight text-slate-800 dark:text-white">Hajdú Közmű Kft. technológiai megújulása</p>
              </div>
              <div className="space-y-1 md:text-right shrink-0">
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Kedvezményezett</span>
                  <p className="font-black text-xl text-slate-700 dark:text-slate-200">Hajdú Közmű Kft.</p>
              </div>
            </div>

            {/* Támogatás összege */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl flex items-center gap-5 border border-slate-200 dark:border-slate-700/50">
                <div className="p-4 bg-[#0606ff] dark:bg-[#00ffff] text-white dark:text-slate-950 rounded-2xl shadow-lg dark:shadow-[#00ffff]/30">
                   <Award size={32} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Támogatás összege</span>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">9.600.000 Ft</p>
                </div>
              </div>

              {/* Támogatás mértéke */}
              <div className="p-6 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl flex items-center gap-5 border border-slate-200 dark:border-slate-700/50">
                <div className="p-4 bg-[#0606ff]/90 dark:bg-[#00ffff]/90 text-white dark:text-slate-950 rounded-2xl shadow-lg dark:shadow-[#00ffff]/30">
                   <Percent size={32} />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase font-bold">Támogatás mértéke</span>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">70%</p>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white border-l-4 border-[#0606ff] dark:border-[#00ffff] pl-4">A projekt tartalma</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                A pályázat keretén belül beszerzett modern eszközök üzembiztosak, mérsékelten környezetszennyezőek és alacsony üzemeltetési költséggel rendelkeznek...
              </p>
            </div>

            <div className="pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row justify-between gap-4 text-sm font-mono text-slate-500">
              <div>Azonosító: <span className="font-bold text-[#0606ff] dark:text-[#00ffff]">VEKOP-1.2.6-20-2020-01551</span></div>
              <div>Befejezés: <span className="font-bold text-slate-700 dark:text-slate-200">2021.10.27</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}