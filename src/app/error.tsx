"use client";

import { useEffect } from "react";
import { AlertOctagon, Home, RefreshCw } from "lucide-react";
import ErrorPageCard from "@/components/errors/ErrorPageCard";

type ErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function RouteError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  useEffect(() => {
    const previousTitle = document.title;
    const previousMeta = document.querySelector('meta[name="robots"]');
    const previousMetaContent = previousMeta?.getAttribute("content") ?? null;

    document.title = "500 | Szerverhiba";

    let robotsMeta = previousMeta;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex,follow");

    return () => {
      document.title = previousTitle;

      if (previousMeta) {
        if (previousMetaContent === null) {
          previousMeta.removeAttribute("content");
        } else {
          previousMeta.setAttribute("content", previousMetaContent);
        }
      } else {
        robotsMeta?.remove();
      }
    };
  }, []);

  return (
    <ErrorPageCard
      label="Szerverhiba"
      code="500"
      title="A tartalom most nem tölthető be."
      description="Szerveroldali hiba történt az oldal betöltése közben. Kérlek próbáld újra egy pillanat múlva."
      hint={error.digest ? `Hibaazonosító: ${error.digest}` : "Ha a hiba tartósan fennáll, kérlek jelezd nekünk."}
      visual={<AlertOctagon size={72} strokeWidth={1.9} />}
      primaryAction={{
        label: "Újrapróbálás",
        onClick: reset,
        icon: <RefreshCw size={18} />,
      }}
      secondaryAction={{
        label: "Főoldal",
        href: "/",
        icon: <Home size={18} />,
      }}
    />
  );
}