import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6 sm:h-24">
        <Logo />
        <DesktopNav />
        <MobileMenu logo={<Logo />} />
      </Container>
    </header>
  );
}
