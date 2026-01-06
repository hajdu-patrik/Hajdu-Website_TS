"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function RolunkPage() {
  const activities = [
    "Ivóvíz és tűzi vezetékek tervezése, kivitelezése",
    "Szennyvízcsatorna hálózatok tervezése és építése",
    "Hidak felújítása és csővezeték rekonstrukció",
    "Vizes árkok, patak medrek rendezése",
    "Aszfalt és térburkolatú utak építése"
  ];

  return (
    <main className="min-h-screen pt-30 pb-24 md:pb-50 px-6 bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase text-center md:text-left">Rólunk</h1>
        
        <div className="mb-20 space-y-6">
          <p className="text-2xl font-bold text-[#0001f9] dark:text-[#00ffff]">Hajdú Közmű Kft.</p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic border-l-4 border-[#0001f9] dark:border-[#00ffff] pl-6">
            Vállalkozásunk 2004-ben alakult. Alapítóink Budapest ivóvízellátásában és csatornázásában szereztek több évtizedes szakmai tapasztalatot.
          </p>
        </div>

        <h2 className="text-2xl font-black mb-8 uppercase tracking-widest text-slate-500">Tevékenységi körünk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {activities.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white dark:bg-slate-800/40 backdrop-blur-md p-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm">
              <CheckCircle2 className="text-[#0001f9] dark:text-[#00ffff] shrink-0" size={24} />
              <span className="text-base font-bold text-slate-700 dark:text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-black mb-12 uppercase text-center tracking-tighter">Fotóválogatás munkáinkról</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 group">
                <Image 
                  src={`/rolunk/FotovalogatasMunkainkrol${i}.webp`} 
                  alt={`Munkafolyamat ${i}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-[#0001f9]/10 dark:bg-[#00ffff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}