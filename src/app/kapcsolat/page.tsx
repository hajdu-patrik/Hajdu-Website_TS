import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone, SquareArrowOutUpRight } from "lucide-react";
import clsx from "clsx";
import { OpeningHoursList } from "@/components/OpeningHours";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { ContactItem, Panel } from "@/components/ui/Card";
import { PageShell } from "@/components/ui/Container";
import { PageHeader, SectionHeading } from "@/components/ui/Heading";
import { company, managers } from "@/content/site";
import { createPageJsonLd, createPageMetadata } from "@/lib/seo";

const description =
  "Lépjen kapcsolatba a Hajdú Közmű Kft. csapatával. Telephely, ügyvezetői elérhetőségek, nyitvatartás és Google térkép egy helyen.";

export const metadata: Metadata = createPageMetadata({
  title: "Kapcsolat és elérhetőségek",
  description,
  path: "/kapcsolat",
  keywords: ["Hajdú Közmű Kft kapcsolat", "Hajdu kozmu kapcsolat", "Csikós utca 13-15", "közműépítés elérhetőség"],
});

const contactLink =
  "inline-flex min-h-8 max-w-full items-center text-sm font-bold break-all text-ink-muted transition-colors duration-200 hover:text-brand";

export default function KapcsolatPage() {
  return (
    <PageShell>
      <JsonLd
        data={createPageJsonLd({
          type: "ContactPage",
          path: "/kapcsolat",
          name: "Kapcsolat | Hajdú Közmű Kft.",
          description,
          breadcrumb: "Kapcsolat",
        })}
      />
      <PageHeader title="Kapcsolat" description="Elérhetőségeink, nyitvatartás és telephelyünk térképpel." />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <Panel aria-labelledby="main-contacts-title">
          <SectionHeading id="main-contacts-title" size="sm" title="Fő elérhetőségek" />
          <ul className="mt-6 space-y-4">
            <li>
              <ContactItem icon={Mail} label="E-mail" value={company.email} href={`mailto:${company.email}`} />
            </li>
            <li>
              <ContactItem icon={Phone} label="Telefon" value={company.phone.display} href={company.phone.href} />
            </li>
            <li>
              <ContactItem icon={MapPin} label="Telephely" value={company.address.full} />
            </li>
          </ul>

          <div className="mt-8 rounded-2xl border border-line bg-white/85 p-5 shadow-sm">
            <h3 className="label-caps flex items-center gap-2">
              <Clock3 size={14} className="text-brand" />
              Nyitvatartás
            </h3>
            <OpeningHoursList className="mt-4" />
          </div>
        </Panel>

        <Panel aria-labelledby="map-title" className="xl:col-span-2">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
            <SectionHeading id="map-title" size="sm" title="Térkép és útvonal" />
            <Button size="sm" href={company.mapUrl} target="_blank" rel="noopener noreferrer">
              Megnyitás térképen
              <SquareArrowOutUpRight size={13} />
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line bg-slate-100 shadow-sm">
            <iframe
              title={`${company.name} térkép`}
              src={company.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full sm:h-100 lg:h-125"
            />
          </div>
        </Panel>
      </div>

      <Panel aria-labelledby="managers-title" className="mt-10 sm:mt-12">
        <SectionHeading id="managers-title" size="sm" title="Ügyvezetés közvetlen elérhetőségei" />
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {managers.map((manager, index) => (
            <li
              key={manager.email}
              className={clsx(
                "rounded-2xl border bg-white/85 p-5 shadow-sm",
                index === 0 ? "border-brand/30" : "border-line",
              )}
            >
              <h3 className="text-lg font-black text-ink">{manager.name}</h3>
              <div className="mt-3 flex flex-col items-start gap-1">
                <a href={`mailto:${manager.email}`} className={contactLink}>
                  {manager.email}
                </a>
                <a href={manager.phone.href} className={contactLink}>
                  {manager.phone.display}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </PageShell>
  );
}
