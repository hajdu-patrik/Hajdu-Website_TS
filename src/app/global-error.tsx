"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import ErrorPageCard from "@/components/errors/ErrorPageCard";

type GlobalErrorProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Unhandled global error:", error);
  }, [error]);

  useEffect(() => {
    const previousTitle = document.title;
    const previousMeta = document.querySelector('meta[name="robots"]');
    const previousMetaContent = previousMeta?.getAttribute("content") ?? null;

    document.title = "500 | Kritikus szerverhiba";

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
    <html lang="hu">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <ErrorPageCard
          label="Kritikus hiba"
          code="500"
          title="Váratlan rendszerhiba történt."
          description="A weboldal egy kritikus hibába futott. Frissítsd az oldalt, vagy próbáld újra néhány pillanat múlva."
          hint={error.digest ? `Hibaazonosító: ${error.digest}` : "Ha a hiba ismétlődik, kérlek vedd fel velünk a kapcsolatot."}
          visual={<AlertTriangle size={72} strokeWidth={1.9} />}
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
      </body>
    </html>
  );
}