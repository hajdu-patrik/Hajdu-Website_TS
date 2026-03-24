import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function HomeContactSection() {
  return (
    <section
      aria-labelledby="contact-cta-title"
      className="relative px-4 py-16 sm:px-6 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {/* BALOLDAL: TEXT + CTA */}
          <div className="space-y-6 lg:col-span-2 xl:col-span-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0001f9]">Gyors elérhetőség</span>
              <h2 id="contact-cta-title" className="mt-2 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                Írjon vagy hívjon minket – szívesen segítünk!
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Kérdésével kapcsolatban, vagy termékeink iránt érdeklődve forduljon hozzánk bizalommal. Az ügyvezetők közvetlenül
              segítenek Önnek, és célzott ajánlatot készítünk.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+36209294317"
                className="btn-primary"
              >
                <Phone size={16} /> Hívjon most
              </a>
              <Link
                href="/kapcsolat"
                className="btn-secondary"
              >
                Teljes elérhetőségek
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* JOBBOLDAL: INFO KÁRTYÁK */}
          <div className="space-y-4">
            <a
              href="tel:+36209294317"
              className="group info-item-link"
            >
              <span className="rounded-xl bg-[#0001f9]/10 p-2 text-[#0001f9]">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Telefon</span>
                <span className="mt-1 block text-sm font-bold text-slate-800 group-hover:text-[#0001f9]">+36 20 929 4317</span>
              </span>
            </a>

            <a
              href="mailto:hajdu@hajdu.hu"
              className="group info-item-link"
            >
              <span className="rounded-xl bg-[#0001f9]/10 p-2 text-[#0001f9]">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-400">E-mail</span>
                <span className="mt-1 block text-sm font-bold text-slate-800 group-hover:text-[#0001f9]">hajdu@hajdu.hu</span>
              </span>
            </a>

            <article className="info-item-static">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-[#0001f9]/10 p-2 text-[#0001f9]">
                  <MapPin size={18} />
                </span>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Telephelyünk</span>
                  <p className="mt-1 break-words text-sm font-bold text-slate-800">1033 Budapest, Csikós u. 13-15.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
