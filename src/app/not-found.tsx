import type { Metadata } from "next";
import { ArrowLeft, CircleAlert, UsersRound } from "lucide-react";
import { ErrorPageCard } from "@/components/errors/ErrorPageCard";

export const metadata: Metadata = {
  title: "404 | Nincs ilyen oldal",
  description: "A keresett oldal nem található a hajdu.hu webhelyen.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <ErrorPageCard
      label="Nincs ilyen oldal"
      code="404"
      title="Ez az oldal nem található."
      description="A keresett tartalom valószínűleg átkerült, átneveződött vagy már nem elérhető ezen az útvonalon."
      icon={CircleAlert}
      primaryAction={{ label: "Vissza a főoldalra", href: "/", icon: <ArrowLeft size={18} /> }}
      secondaryAction={{ label: "Kapcsolat", href: "/kapcsolat", icon: <UsersRound size={18} /> }}
    />
  );
}
