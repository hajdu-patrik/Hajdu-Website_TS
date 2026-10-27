import Link from "next/link";
import clsx from "clsx";
import { CodeXml, Mail, MapPin, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Facebook, Github, Linkedin } from "@/components/icons/BrandIcons";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { OpeningHoursList } from "@/components/OpeningHours";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company, managers, navItems, siteAuthor } from "@/content/site";

function ColumnTitle({ icon, children }: Readonly<{ icon: ReactNode; children: ReactNode }>) {
  return (
    <h3 className="label-caps flex items-center justify-center gap-2 md:justify-start">
      <span className="text-brand">{icon}</span>
      {children}
    </h3>
  );
}

const managerLink =
  "inline-flex min-h-6 max-w-full items-center py-1 text-xs break-all text-ink-muted transition-colors duration-200 hover:text-brand";

export function SiteFooter() {
  return (
    <footer aria-labelledby="footer-heading" className="border-t border-line bg-white pt-12 pb-8 sm:pt-16">
      <h2 id="footer-heading" className="sr-only">
        Lábléc és kapcsolati adatok
      </h2>

      <Container className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-12">
        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-black tracking-tighter text-brand uppercase">{company.name}</h3>
          <p className="text-sm leading-relaxed text-ink-muted">
            Megbízható közműépítési megoldások több mint két évtizede. Ivóvíz, csatorna és mélyépítés mesterfokon.
          </p>
          <div className="flex justify-center gap-3 md:justify-start">
            <Button
              variant="icon"
              href={company.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kövessen minket Facebookon"
            >
              <Facebook size={20} />
            </Button>
            <Button variant="icon" href={`mailto:${company.email}`} aria-label="Írjon nekünk e-mailt">
              <Mail size={20} />
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left lg:pl-8">
          <ColumnTitle icon={<MapPin size={14} />}>Telephelyünk</ColumnTitle>
          <address className="text-sm font-bold text-ink not-italic">
            {company.address.postalCode} {company.address.city}, <br /> {company.address.street}
          </address>
          <OpeningHoursList variant="compact" className="mx-auto w-full max-w-72 text-left md:mx-0" />
        </div>

        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left lg:pl-12">
          <ColumnTitle icon={<Users size={14} />}>Ügyvezetés</ColumnTitle>
          <ul className="mx-auto max-w-72 space-y-4 text-left md:mx-0">
            {managers.map((manager, index) => (
              <li
                key={manager.email}
                className={clsx("flex flex-col items-start border-l-2 pl-4", index === 0 ? "border-brand" : "border-slate-300")}
              >
                <p className="text-sm font-black text-ink">{manager.name}</p>
                <a href={`mailto:${manager.email}`} className={managerLink}>
                  {manager.email}
                </a>
                <a href={manager.phone.href} className={managerLink}>
                  {manager.phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-sm space-y-6 text-center md:text-left">
          <ColumnTitle icon={<CodeXml size={14} />}>Oldalkészítő</ColumnTitle>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Button
              variant="dark"
              size="sm"
              href={siteAuthor.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-56 gap-3 md:justify-start"
            >
              <Github size={16} />
              GitHub profil
              <span className="sr-only"> ({siteAuthor.name})</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={siteAuthor.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-56 gap-3 md:justify-start"
            >
              <Linkedin size={16} />
              LinkedIn profil
              <span className="sr-only"> ({siteAuthor.name})</span>
            </Button>
          </div>
        </div>
      </Container>

      <Container className="mt-14 md:mt-16">
        <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-100 pt-8 text-xs font-bold tracking-button text-ink-subtle uppercase md:flex-row md:gap-4">
          <p>
            &copy; {new Date().getFullYear()} {company.name}
          </p>
          <nav aria-label="Lábléc navigáció">
            <ul className="flex flex-wrap justify-center gap-x-5 sm:gap-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center transition-colors duration-200 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      <ScrollToTop />
    </footer>
  );
}
