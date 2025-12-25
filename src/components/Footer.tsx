import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-sm text-slate-400">
          Copyright ©2026 Hajdú Közmű Kft. | Minden jog fenntartva.
        </p>
        
        <a 
          href="https://github.com/hajdu-patrik" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group px-4 py-2 rounded-lg hover:bg-slate-800"
        >
          <Github size={24} />
          <div className="flex flex-col items-start">
             <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400">Fejlesztő</span>
             <span className="text-sm">hajdu-patrik</span>
          </div>
        </a>
      </div>
    </footer>
  );
}