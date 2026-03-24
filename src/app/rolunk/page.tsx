import type { Metadata } from "next";
import {
  CloudRain,
  Construction,
  Droplets,
  Factory,
  Flame,
  Gauge,
  House,
  Mountain,
  Plane,
  PlugZap,
  Route,
  Shield,
  ShieldCheck,
  TowerControl,
  Warehouse,
  Waves,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import JsonLdScript from "@/components/seo/JsonLdScript";
import { createBreadcrumbJsonLd, createPageMetadata, siteUrl } from "@/lib/seo";

type ActivityItem = Readonly<{
  text: string;
  icon: LucideIcon;
}>;

const activities: ReadonlyArray<ActivityItem> = [
  { text: "Ivóvíz- és tűzi vezetékek tervezése, kivitelezése, fenntartása.", icon: Droplets },
  { text: "Tűzi vízvezetékek tervezése, kivitelezése, fenntartása.", icon: Flame },
  {
    text: "Szennyvízcsatorna hálózatok tervezése (gravitációs, nyomott), kivitelezése, fenntartása.",
    icon: Waves,
  },
  { text: "Vizes árkok, vízmosások, patakmedrek rendezése, átépítése, fenntartása.", icon: Mountain },
  { text: "Gabion és Reno rendszerek kiépítése (gátak, támfalak).", icon: Shield },
  { text: "Nyomásfokozó gépházak rekonstrukciója, építése.", icon: Gauge },
  { text: "Víztározó medencék rekonstrukciója, építése.", icon: Warehouse },
  { text: "Víztornyok rekonstrukciója, építése.", icon: TowerControl },
  { text: "Szennyvízátemelő gépházak rekonstrukciója, építése.", icon: Factory },
  { text: "Szennyvíztelepek rekonstrukciója, építése.", icon: Construction },
  {
    text: "Víz- és szennyvízátemelők, valamint hálózatok karbantartása, javítása, üzemeltetése.",
    icon: Wrench,
  },
  { text: "Aszfalt- és térburkolatú utak építése.", icon: Route },
  { text: "Hidakon végzett csővezeték-rekonstrukciós munkák.", icon: Workflow },
  { text: "Hidak, felüljárók felújítása, építése.", icon: Construction },
  { text: "Tűzvédelmi szerelvények felülvizsgálata, dokumentálása.", icon: ShieldCheck },
  { text: "Lakás- és locsolási célú mellékvízmérő szerelések.", icon: House },
  { text: "Regisztrált szerelőként víz- és csatornabekötés kivitelezése.", icon: PlugZap },
  {
    text: "Csapadékcsatorna hálózatok tervezése (nyílt és zárt rendszerű kialakításban), kivitelezése, fenntartása.",
    icon: CloudRain,
  },
  {
    text: "Stratégiailag fontos létesítmények területén végzett munkák (erőművek, nemzetközi repülőtér, gyógyszeripar, információs hivatal).",
    icon: Plane,
  },
];

const galleryImages = [
  "Közműépítési helyszín előkészítése és földmunka",
  "Csatornázási kivitelezési munkafázis közelről",
  "Ivóvízellátási rendszerhez kapcsolódó szerelési munka",
  "Munkagép és kivitelezői csapat terepi környezetben",
  "Helyreállítási és mélyépítési feladat a projekt végén",
  "Referencia munkaterület a Hajdú Közmű Kft. kivitelezésében",
];

const highlightedActivities = activities.slice(0, 9);
const remainingActivities = activities.slice(9);
const highlightedGalleryImages = galleryImages.slice(0, 3);
const remainingGalleryImages = galleryImages.slice(3);

const activityAccentStyles = [
  {
    bar: "from-[#0001f9]/80 via-cyan-300 to-[#0001f9]/80",
    iconWrap: "border-[#0001f9]/20 bg-[#0001f9]/10",
    iconColor: "text-[#0001f9]",
    hoverBorder: "hover:border-[#0001f9]/40",
    hoverText: "group-hover:text-[#0001f9]",
  },
  {
    bar: "from-cyan-500/80 via-sky-300 to-cyan-500/80",
    iconWrap: "border-cyan-500/20 bg-cyan-500/10",
    iconColor: "text-cyan-700",
    hoverBorder: "hover:border-cyan-500/40",
    hoverText: "group-hover:text-cyan-700",
  },
  {
    bar: "from-teal-500/80 via-emerald-300 to-teal-500/80",
    iconWrap: "border-teal-500/20 bg-teal-500/10",
    iconColor: "text-teal-700",
    hoverBorder: "hover:border-teal-500/40",
    hoverText: "group-hover:text-teal-700",
  },
  {
    bar: "from-amber-500/80 via-orange-300 to-amber-500/80",
    iconWrap: "border-amber-500/20 bg-amber-500/10",
    iconColor: "text-amber-700",
    hoverBorder: "hover:border-amber-500/40",
    hoverText: "group-hover:text-amber-700",
  },
] as const;

type ActivityGridProps = Readonly<{
  items: ReadonlyArray<ActivityItem>;
}>;

function ActivityGrid({ items }: ActivityGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const accent = activityAccentStyles[index % activityAccentStyles.length];
        const Icon = item.icon;

        return (
          <article
            key={item.text}
            className={`group card-soft relative overflow-hidden ${accent.hoverBorder}`}
          >
            <div
              className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent.bar} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="flex items-start gap-4">
              <div className={`mt-0.5 shrink-0 rounded-xl border p-2.5 ${accent.iconWrap} ${accent.iconColor}`}>
                <Icon size={20} />
              </div>
              <span className={`text-base font-bold leading-relaxed text-slate-700 transition-colors duration-300 ${accent.hoverText}`}>
                {item.text}
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}

type GalleryGridProps = Readonly<{
  images: ReadonlyArray<string>;
  startIndex?: number;
}>;

function GalleryGrid({ images, startIndex = 0 }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {images.map((alt, index) => (
        <article
          key={alt}
          className="surface-gradient group relative aspect-square overflow-hidden rounded-[2rem] border border-slate-200 p-2 shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-slate-200/80">
            <Image
              src={`/rolunk/FotovalogatasMunkainkrol${startIndex + index + 1}.webp`}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="media-image-hover"
            />
          </div>
        </article>
      ))}
    </div>
  );
}

export const metadata: Metadata = createPageMetadata({
  title: "Rólunk és referenciáink",
  description:
    "Ismerje meg a Hajdú Közmű Kft. történetét, közműépítési és csatornázási referenciáit. A Hajdu és Hajdú néven ismert cég Budapest ivóvízellátási és mélyépítési projektjeiben szerzett több évtizedes tapasztalatot.",
  path: "/rolunk",
  image: "/rolunk/FotovalogatasMunkainkrol1.webp",
  imageAlt: "Hajdú Közmű Kft. közműépítési referenciafotó",
  keywords: [
    "Hajdú Közmű Kft rólunk",
    "Hajdu közmű referencia",
    "közműépítés referencia",
    "csatornázás referenciák",
  ],
});

export default function RolunkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${siteUrl}/rolunk#webpage`,
        "@type": "AboutPage",
        "name": "Rólunk | Hajdú Közmű Kft.",
        "url": `${siteUrl}/rolunk`,
        "description": metadata.description,
        "inLanguage": "hu-HU",
        "about": {
          "@id": `${siteUrl}#organization`,
        },
        "breadcrumb": {
          "@id": `${siteUrl}/rolunk#breadcrumb`,
        },
      },
      {
        "@id": `${siteUrl}/rolunk#breadcrumb`,
        ...createBreadcrumbJsonLd([
          { name: "Főoldal", path: "/" },
          { name: "Rólunk", path: "/rolunk" },
        ]),
      },
    ],
  };

  return (
    <>
      <JsonLdScript id="rolunk-jsonld" data={jsonLd} />
      <main className="page-shell">
        <div className="page-container">
          <section aria-labelledby="rolunk-title" className="page-intro">
            <h1 id="rolunk-title" className="page-title">
              Rólunk
            </h1>
            <p className="page-subtitle">
              Vállalkozásunk 2004-ben alakult. Alapítóink Budapest ivóvízellátásában és csatornázásában szereztek több
              évtizedes szakmai tapasztalatot.
            </p>
          </section>

          <section aria-labelledby="activities-title">
            <div className="mb-10 text-left">
              <h2 id="activities-title" className="text-2xl font-black uppercase tracking-widest text-slate-900">
                Tevékenységi körünk
              </h2>
              <p className="mt-4 max-w-5xl text-lg leading-relaxed text-slate-600">
                A legfontosabb szakterületeinket és referenciaképeinket egy áttekinthető, blokkos szerkezetben mutatjuk
                be.
              </p>
            </div>

            <ActivityGrid items={highlightedActivities} />

            <div className="surface-panel-highlight mt-10 sm:mt-12">
              <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-blue-200/35 blur-3xl" />

              <div className="relative z-10 mb-6 text-left">
                <h3 id="gallery-title" className="text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl md:text-4xl">
                  Fotóválogatás munkáinkról
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Referenciaképeink a Hajdú Közmű Kft. mindennapi munkáját mutatják be a közműépítés, csatornázás,
                  vízellátás és helyreállítás területeiről.
                </p>
              </div>

              <div className="relative z-10">
                <GalleryGrid images={highlightedGalleryImages} />
              </div>
            </div>

            <div className="mt-10 sm:mt-12">
              <h3 className="mb-6 text-lg font-black uppercase tracking-widest text-slate-500 sm:text-xl">További szakterületeink</h3>
              <ActivityGrid items={remainingActivities} />
            </div>

            <div className="surface-panel-highlight mt-10 sm:mt-12">
              <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full bg-blue-200/35 blur-3xl" />

              <div className="relative z-10 mb-6 text-left">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 sm:text-3xl md:text-4xl">
                  További referenciaképek
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Referenciaképeink a Hajdú Közmű Kft. mindennapi munkáját mutatják be a közműépítés, csatornázás,
                  vízellátás és helyreállítás területeiről.
                </p>
              </div>

              <div className="relative z-10">
                <GalleryGrid images={remainingGalleryImages} startIndex={3} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}