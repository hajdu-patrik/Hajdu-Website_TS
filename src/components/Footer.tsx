"use client";

import Link from "next/link";
import { MapPin, Users, Code2, Mail, Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const facebookPage = "https://www.facebook.com/p/Hajdú-Közmű-Kft-100063708745631";
  const emailAddress = "mailto:hajdu@hajdu.hu";
  const githubUrl = "https://github.com/hajdu-patrik";
  const linkedinUrl = "https://www.linkedin.com/in/hajdu-patrik/";

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 transition-colors duration-500 sm:pt-16" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Lábléc és Kapcsolati adatok</h2>
      
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-4 sm:px-6 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">

        {/* 1. OSZLOP: CÉGINFÓ & KAPCSOLAT GOMBOK */}
        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-black uppercase tracking-tighter text-[#0606ff]">
            Hajdú Közmű Kft.
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Megbízható közműépítési megoldások több mint két évtizede. Ivóvíz, csatorna és mélyépítés mesterfokon.
          </p>
          <div className="flex justify-center gap-3 md:justify-start">
            {/* Facebook Gomb */}
            <a href={facebookPage}
               target="_blank"
               rel="noopener noreferrer" 
              className="social-icon-button"
               aria-label="Kövessen minket Facebookon">
              <Facebook size={20} />
            </a>
            {/* Email Gomb */}
            <a href={emailAddress}
              className="social-icon-button"
               aria-label="Írjon nekünk e-mailt">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* 2. OSZLOP: TELEPHELY */}
        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left lg:pl-8">
          <h4 className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:justify-start">
            <MapPin size={14} className="text-[#0606ff]" /> Telephelyünk
          </h4>
          <address className="not-italic text-sm font-bold text-slate-800">
            1033 Budapest, <br /> Csikós u. 13-15.
          </address>
          <div className="mx-auto w-full max-w-[18rem] space-y-2 text-xs text-slate-600 md:mx-0">
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>H - Cs:</span> <span className="text-slate-900">07:00 - 16:00</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>Péntek:</span> <span className="text-slate-900">07:00 - 15:00</span>
            </div>
            <div className="flex justify-between">
              <span>Szo - V:</span> <span className="font-bold text-[#0606ff]">Zárva</span>
            </div>
          </div>
        </div>

        {/* 3. OSZLOP: ÜGYVEZETŐK */}
        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left lg:pl-12">
          <h4 className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:justify-start">
            <Users size={14} className="text-[#0606ff]" /> Ügyvezetés
          </h4>
          <div className="mx-auto max-w-[18rem] space-y-4 text-left md:mx-0">
            <div className="border-l-2 border-[#0606ff] pl-4">
              <p className="text-sm font-black text-slate-900">Hajdú Zsolt</p>
              <a href="mailto:hajdu.zsolt@hajdu.hu" className="inline-flex min-h-6 items-center py-1 text-xs text-slate-600 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">hajdu.zsolt@hajdu.hu</a>
              <a href="tel:+36209294317" className="inline-flex min-h-6 items-center py-1 text-xs text-slate-600 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">+36 20 929 4317</a>
            </div>
            <div className="border-l-2 border-slate-300 pl-4">
              <p className="text-sm font-black text-slate-900">Hajdú Tamás</p>
              <a href="mailto:hajdu.tamas@hajdu.hu" className="inline-flex min-h-6 items-center py-1 text-xs text-slate-600 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">hajdu.tamas@hajdu.hu</a>
              <a href="tel:+36209293964" className="inline-flex min-h-6 items-center py-1 text-xs text-slate-600 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">+36 20 929 3964</a>
            </div>
          </div>
        </div>

        {/* 4. OSZLOP: OLDALKÉSZÍTŐ */}
        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left">
          <h4 className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:justify-start">
            <Code2 size={14} className="text-[#0606ff]" /> Oldalkészítő
          </h4>
          <div>
            <div className="flex flex-col gap-3">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Hajdú Patrik GitHub profilja"
              className="group profile-link-button profile-link-button-primary"
            >
              <Github size={16} className="group-hover:rotate-12 transition-transform" />
              GitHub profil
            </a>

            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Hajdú Patrik LinkedIn profilja"
              className="group profile-link-button profile-link-button-brand"
            >
              <Linkedin size={16} className="group-hover:-rotate-12 transition-transform" />
              LinkedIn profil
            </a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-14 flex flex-col items-center justify-between gap-5 border-t border-slate-100 px-4 pt-8 text-xs font-bold uppercase tracking-[0.14em] text-slate-500 sm:px-6 md:mt-16 md:flex-row md:gap-4">
        <p>&copy; {new Date().getFullYear()} Hajdú Közmű Kft.</p>
        <nav aria-label="Lábléc navigáció">
          <ul className="list-none flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6">
            <li><Link href="/" className="inline-flex min-h-6 items-center py-1 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">Főoldal</Link></li>
            <li><Link href="/rolunk" className="inline-flex min-h-6 items-center py-1 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">Rólunk</Link></li>
            <li><Link href="/termekek" className="inline-flex min-h-6 items-center py-1 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">Termékek</Link></li>
            <li><Link href="/palyazatok" className="inline-flex min-h-6 items-center py-1 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">Pályázatok</Link></li>
            <li><Link href="/gyakori-kerdesek" className="inline-flex min-h-6 items-center py-1 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">GYIK</Link></li>
            <li><Link href="/kapcsolat" className="inline-flex min-h-6 items-center py-1 transition-colors duration-200 hover:text-[#0606ff] focus-visible:text-[#0606ff]">Kapcsolat</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}