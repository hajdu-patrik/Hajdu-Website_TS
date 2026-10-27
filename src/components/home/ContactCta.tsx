import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactItem } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/site";

export function ContactCta() {
  return (
    <section aria-labelledby="contact-cta-title" className="relative py-16 sm:py-32">
      <Container className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
        <div className="space-y-6 lg:col-span-2">
          <div>
            <p className="eyebrow">Gyors elérhetőség</p>
            <h2
              id="contact-cta-title"
              className="mt-2 text-3xl leading-tight font-black text-ink sm:text-4xl md:text-5xl"
            >
              Írjon vagy hívjon minket – szívesen segítünk!
            </h2>
          </div>
          <p className="lead max-w-2xl">
            Kérdésével kapcsolatban, vagy termékeink iránt érdeklődve forduljon hozzánk bizalommal. Az ügyvezetők
            közvetlenül segítenek Önnek, és célzott ajánlatot készítünk.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={company.phone.href}>
              <Phone size={16} />
              Hívjon most
            </Button>
            <Button variant="secondary" href="/kapcsolat">
              Teljes elérhetőségek
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        <ul className="space-y-4">
          <li>
            <ContactItem icon={Phone} label="Telefon" value={company.phone.display} href={company.phone.href} />
          </li>
          <li>
            <ContactItem icon={Mail} label="E-mail" value={company.email} href={`mailto:${company.email}`} />
          </li>
          <li>
            <ContactItem icon={MapPin} label="Telephelyünk" value={company.address.full} />
          </li>
        </ul>
      </Container>
    </section>
  );
}
