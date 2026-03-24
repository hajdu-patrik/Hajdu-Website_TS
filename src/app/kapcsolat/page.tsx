import type { Metadata } from "next";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  SquareArrowOutUpRight,
} from "lucide-react";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { createBreadcrumbJsonLd, createPageMetadata, siteUrl } from "@/lib/seo";

const mapEmbedUrl = "https://www.google.com/maps?q=1033+Budapest,+Csik%C3%B3s+u.+13-15&output=embed";
const mapExternalUrl = "https://www.google.com/maps/search/?api=1&query=1033+Budapest,+Csik%C3%B3s+u.+13-15";

const officeHours = [
  { day: "Hétfő - Csütörtök", value: "07:00 - 16:00" },
  { day: "Péntek", value: "07:00 - 15:00" },
  { day: "Szombat - Vasárnap", value: "Zárva" },
] as const;

const managers = [
  {
    name: "Hajdú Zsolt",
    email: "hajdu.zsolt@hajdu.hu",
    phone: "+36 20 929 4317",
    hrefPhone: "tel:+36209294317",
    hrefEmail: "mailto:hajdu.zsolt@hajdu.hu",
  },
  {
    name: "Hajdú Tamás",
    email: "hajdu.tamas@hajdu.hu",
    phone: "+36 20 929 3964",
    hrefPhone: "tel:+36209293964",
    hrefEmail: "mailto:hajdu.tamas@hajdu.hu",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Kapcsolat és elérhetőségek",
  description:
    "Lépjen kapcsolatba a Hajdú Közmű Kft. csapatával. Telephely, ügyvezetői elérhetőségek, nyitvatartás és Google térkép egy helyen.",
  path: "/kapcsolat",
  image: "/Og-image.webp",
  imageAlt: "Kapcsolatfelvétel a Hajdú Közmű Kft.-vel",
  keywords: [
    "Hajdú Közmű Kft kapcsolat",
    "Hajdu kozmu kapcsolat",
    "Csikós utca 13-15",
    "közműépítés elérhetőség",
  ],
});

export default function KapcsolatPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}/kapcsolat#webpage`,
        "@type": "ContactPage",
        "name": "Kapcsolat | Hajdú Közmű Kft.",
        "url": `${siteUrl}/kapcsolat`,
        "description": metadata.description,
        "inLanguage": "hu-HU",
        "about": {
          "@id": `${siteUrl}#organization`,
        },
        "breadcrumb": {
          "@id": `${siteUrl}/kapcsolat#breadcrumb`,
        },
      },
      {
        "@id": `${siteUrl}/kapcsolat#breadcrumb`,
        ...createBreadcrumbJsonLd([
          { name: "Főoldal", path: "/" },
          { name: "Kapcsolat", path: "/kapcsolat" },
        ]),
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="kapcsolat-jsonld" data={jsonLd} />
      <main className="page-shell">
        <div className="page-container">
          <section aria-labelledby="kapcsolat-title" className="page-intro sm:mb-14">
            <h1 id="kapcsolat-title" className="page-title">
              Kapcsolat
            </h1>
            <p className="page-subtitle">
              Elérhetőségeink, nyitvatartás és telephelyünk térképpel.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-8 xl:grid-cols-3" aria-label="Kapcsolati adatok és térkép">
            <article className="surface-gradient surface-glass relative overflow-hidden rounded-[2rem] border border-slate-200 p-6 shadow-sm sm:p-8 xl:col-span-1">
              <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-blue-200/35 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 sm:text-2xl">Fő elérhetőségek</h2>

                <div className="mt-6 space-y-4">
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

                  <div className="info-item-static">
                    <span className="rounded-xl bg-[#0001f9]/10 p-2 text-[#0001f9]">
                      <MapPin size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Telephely</span>
                      <span className="mt-1 block break-words text-sm font-bold text-slate-800">1033 Budapest, Csikós u. 13-15.</span>
                    </span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white/85 p-5 shadow-sm">
                  <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    <Clock3 size={14} className="text-[#0001f9]" /> Nyitvatartás
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                    {officeHours.map((item) => (
                      <li key={item.day} className="flex justify-between gap-4 border-b border-slate-200/90 pb-2.5 last:border-b-0 last:pb-0">
                        <span>{item.day}</span>
                        <span className="font-bold text-slate-800">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="surface-gradient surface-glass relative overflow-hidden rounded-[2rem] border border-slate-200 p-4 shadow-sm sm:p-6 xl:col-span-2">
              <div className="pointer-events-none absolute -left-20 -top-20 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl" />

              <div className="relative z-10 mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
                <h2 className="text-xl font-black uppercase tracking-tight text-slate-900 sm:text-2xl">Térkép és útvonal</h2>
                <a
                  href={mapExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary rounded-full px-4 py-2.5"
                >
                  Megnyitás térképen
                  <SquareArrowOutUpRight size={13} />
                </a>
              </div>

              <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <iframe
                  title="Hajdú Közmű Kft. térkép"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[320px] w-full sm:h-[400px] lg:h-[500px]"
                />
              </div>
            </article>
          </section>

          <section className="surface-gradient surface-glass relative mt-10 overflow-hidden rounded-[2rem] border border-slate-200 p-6 shadow-sm sm:mt-12 sm:p-8" aria-labelledby="ugyvezetes-title">
            <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-blue-200/35 blur-3xl" />

            <div className="relative z-10">
              <h2 id="ugyvezetes-title" className="text-xl font-black uppercase tracking-tight text-slate-900 sm:text-2xl">
                Ügyvezetés közvetlen elérhetőségei
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {managers.map((manager, index) => (
                  <article key={manager.email} className={`rounded-2xl border bg-white/85 p-5 shadow-sm ${index === 0 ? "border-[#0001f9]/30" : "border-slate-200/90"}`}>
                    <p className="text-lg font-black text-slate-900">{manager.name}</p>
                    <div className="mt-4 space-y-2.5">
                      <a href={manager.hrefEmail} className="block break-all text-sm font-bold text-slate-600 transition-colors duration-200 hover:text-[#0001f9] focus-visible:text-[#0001f9]">
                        {manager.email}
                      </a>
                      <a href={manager.hrefPhone} className="block break-all text-sm font-bold text-slate-600 transition-colors duration-200 hover:text-[#0001f9] focus-visible:text-[#0001f9]">
                        {manager.phone}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
