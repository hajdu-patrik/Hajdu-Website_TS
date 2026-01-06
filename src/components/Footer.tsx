"use client";

import Link from "next/link";
import { Facebook, MapPin, Users, Code2, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const facebookPage = "https://www.facebook.com/p/Hajdú-Közmű-Kft-100063708745631";
  const emailAddress = "mailto:hajdu@hajdu.hu";
  const githubUrl = "https://github.com/hajdu-patrik";
  const linkedinUrl = "https://www.linkedin.com/in/hajdu-patrik/";

  return (
    <footer className="bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-500" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Lábléc és Kapcsolati adatok</h2>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. OSZLOP: CÉGINFÓ & KAPCSOLAT GOMBOK */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black uppercase tracking-tighter text-[#0606ff] dark:text-[#00ffff]">
            Hajdú Közmű Kft.
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Megbízható közműépítési megoldások több mint két évtizede. Ivóvíz, csatorna és mélyépítés mesterfokon.
          </p>
          <div className="flex gap-4">
            {/* Facebook Gomb */}
            <a href={facebookPage}
               target="_blank"
               rel="noopener noreferrer" 
               className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-[#0606ff] dark:text-[#00ffff] hover:scale-110 transition-all shadow-sm"
               aria-label="Kövessen minket Facebookon">
              <Facebook size={20} />
            </a>
            {/* Email Gomb */}
            <a href={emailAddress}
               target="_blank" 
               className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-[#0606ff] dark:text-[#00ffff] hover:scale-110 transition-all shadow-sm"
               aria-label="Írjon nekünk e-mailt">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* 2. OSZLOP: TELEPHELY */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
            <MapPin size={14} className="text-[#0606ff] dark:text-[#00ffff]" /> Telephelyünk
          </h4>
          <address className="not-italic text-sm font-bold text-slate-800 dark:text-slate-200">
            1033 Budapest, <br /> Csikós u. 13-15.
          </address>
          <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
              <span>H - Cs:</span> <span className="text-slate-900 dark:text-slate-100">07:00 - 16:00</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1">
              <span>Péntek:</span> <span className="text-slate-900 dark:text-slate-100">07:00 - 15:00</span>
            </div>
            <div className="flex justify-between">
              <span>Szo - V:</span> <span className="font-bold text-[#0606ff] dark:text-[#00ffff]">Zárva</span>
            </div>
          </div>
        </div>

        {/* 3. OSZLOP: ÜGYVEZETŐK */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
            <Users size={14} className="text-[#0606ff] dark:text-[#00ffff]" /> Ügyvezetés
          </h4>
          <div className="space-y-4">
            <div className="border-l-2 border-[#0606ff] dark:border-[#00ffff] pl-4">
              <p className="text-sm font-black text-slate-900 dark:text-white">Hajdú Zsolt</p>
              <a href="mailto:hajdu.zsolt@hajdu.hu" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#0606ff] dark:hover:text-[#00ffff] block transition-colors">hajdu.zsolt@hajdu.hu</a>
              <a href="tel:+36209294317" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#0606ff] dark:hover:text-[#00ffff] block transition-colors">+36 20 929 4317</a>
            </div>
            <div className="border-l-2 border-slate-300 dark:border-slate-700 pl-4">
              <p className="text-sm font-black text-slate-900 dark:text-white">Hajdú Tamás</p>
              <a href="mailto:hajdu.tamas@hajdu.hu" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#0606ff] dark:hover:text-[#00ffff] block transition-colors">hajdu.tamas@hajdu.hu</a>
              <a href="tel:+36209293964" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#0606ff] dark:hover:text-[#00ffff] block transition-colors">+36 20 929 3964</a>
            </div>
          </div>
        </div>

        {/* 4. OSZLOP: OLDALKÉSZÍTŐ */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
            <Code2 size={14} className="text-[#0606ff] dark:text-[#00ffff]" /> Oldalkészítő
          </h4>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-5 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-inner">
            <p className="text-sm font-black text-slate-900 dark:text-white mb-4">Hajdú Patrik</p>
            
            <div className="flex flex-col gap-3">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-tighter bg-slate-900 dark:bg-[#00ffff] text-white dark:text-slate-950 px-4 py-2.5 rounded-xl hover:scale-105 transition-all shadow-md group"
              >
                <Github size={16} className="group-hover:rotate-12 transition-transform" />
                GitHub profil
              </a>

              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-tighter bg-[#0606ff] dark:bg-slate-800 text-white dark:text-[#00ffff] px-4 py-2.5 rounded-xl border border-[#0606ff] dark:border-slate-700 hover:scale-105 transition-all shadow-md group"
              >
                <Linkedin size={16} className="group-hover:-rotate-12 transition-transform" />
                LinkedIn profil
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <p>© {new Date().getFullYear()} Hajdú Közmű Kft.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">Főoldal</Link>
          <Link href="/rolunk" className="hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">Rólunk</Link>
          <Link href="/termekek" className="hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">Termékek</Link>
          <Link href="/palyazatok" className="hover:text-[#0606ff] dark:hover:text-[#00ffff] transition-colors">Pályázatok</Link>
        </div>
      </div>
    </footer>
  );
}