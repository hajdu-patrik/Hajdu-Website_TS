import type { Metadata } from "next";
import NotFoundClient from "@/components/errors/NotFoundClient";

export const metadata: Metadata = {
  title: "404 | Nincs ilyen oldal",
  description: "A keresett oldal nem található a hajdu.hu webhelyen.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}