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
import { JsonLd } from "@/components/seo/JsonLd";
import { FeatureCard, Panel } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/Container";
import { PageHeader, SectionHeading } from "@/components/ui/Heading";
import { PhotoGrid, type Photo } from "@/components/ui/PhotoGrid";
import { accentAt } from "@/components/ui/accents";
import { createPageJsonLd, createPageMetadata, ogImages } from "@/lib/seo";

const description =
  "Ismerje meg a Hajdú Közmű Kft. történetét, közműépítési és csatornázási referenciáit. A Hajdu és Hajdú néven ismert cég Budapest ivóvízellátási és mélyépítési projektjeiben szerzett több évtizedes tapasztalatot.";

type Activity = Readonly<{ text: string; icon: LucideIcon }>;

const activities: readonly Activity[] = [
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

const galleryPhotos: readonly Photo[] = [
  "Közműépítési helyszín előkészítése és földmunka",
  "Csatornázási kivitelezési munkafázis közelről",
  "Ivóvízellátási rendszerhez kapcsolódó szerelési munka",
  "Munkagép és kivitelezői csapat terepi környezetben",
  "Helyreállítási és mélyépítési feladat a projekt végén",
  "Referencia munkaterület a Hajdú Közmű Kft. kivitelezésében",
].map((alt, index) => ({ src: `/rolunk/FotovalogatasMunkainkrol${index + 1}.webp`, alt }));

const galleryDescription =
  "Referenciaképeink a Hajdú Közmű Kft. mindennapi munkáját mutatják be a közműépítés, csatornázás, vízellátás és helyreállítás területeiről.";

export const metadata: Metadata = createPageMetadata({
  title: "Rólunk és referenciáink",
  description,
  path: "/rolunk",
  ogImage: ogImages.about,
  keywords: ["Hajdú Közmű Kft rólunk", "Hajdu közmű referencia", "közműépítés referencia", "csatornázás referenciák"],
});

function ActivityGrid({ items }: Readonly<{ items: readonly Activity[] }>) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <FeatureCard key={item.text} as="li" icon={item.icon} accent={accentAt(index)} title={item.text} />
      ))}
    </ul>
  );
}

function GalleryPanel({ id, title, photos }: Readonly<{ id: string; title: string; photos: readonly Photo[] }>) {
  return (
    <Panel aria-labelledby={id} className="mt-10 sm:mt-12">
      <SectionHeading as="h3" id={id} size="md" title={title} description={galleryDescription} className="mb-6" />
      <PhotoGrid photos={photos} layout="framed" />
    </Panel>
  );
}

export default function RolunkPage() {
  return (
    <PageShell>
      <JsonLd
        data={createPageJsonLd({
          type: "AboutPage",
          path: "/rolunk",
          name: "Rólunk | Hajdú Közmű Kft.",
          description,
          breadcrumb: "Rólunk",
        })}
      />
      <PageHeader
        title="Rólunk"
        description="Vállalkozásunk 2004-ben alakult. Alapítóink Budapest ivóvízellátásában és csatornázásában szereztek több évtizedes szakmai tapasztalatot."
      />

      <section aria-labelledby="activities-title">
        <SectionHeading
          id="activities-title"
          title="Tevékenységi körünk"
          description="A legfontosabb szakterületeinket és referenciaképeinket egy áttekinthető, blokkos szerkezetben mutatjuk be."
          className="mb-10"
        />
        <ActivityGrid items={activities.slice(0, 9)} />

        <GalleryPanel id="gallery-title" title="Fotóválogatás munkáinkról" photos={galleryPhotos.slice(0, 3)} />

        <div className="mt-10 sm:mt-12">
          <h3 className="mb-6 text-lg font-black tracking-widest text-ink-subtle uppercase sm:text-xl">
            További szakterületeink
          </h3>
          <ActivityGrid items={activities.slice(9)} />
        </div>

        <GalleryPanel id="more-gallery-title" title="További referenciaképek" photos={galleryPhotos.slice(3)} />
      </section>
    </PageShell>
  );
}
