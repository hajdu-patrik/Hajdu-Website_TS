"use client";

import { useEffect } from "react";
import { House, OctagonAlert, RefreshCw } from "lucide-react";
import { ErrorPageCard } from "@/components/errors/ErrorPageCard";

type ErrorPageProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

export default function RouteError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <>
      <title>500 | Szerverhiba</title>
      <meta name="robots" content="noindex" />
      <ErrorPageCard
        label="Szerverhiba"
        code="500"
        title="A tartalom most nem tölthető be."
        description="Szerveroldali hiba történt az oldal betöltése közben. Kérlek próbáld újra egy pillanat múlva."
        hint={error.digest ? `Hibaazonosító: ${error.digest}` : "Ha a hiba tartósan fennáll, kérlek jelezd nekünk."}
        icon={OctagonAlert}
        primaryAction={{ label: "Újrapróbálás", onClick: reset, icon: <RefreshCw size={18} /> }}
        secondaryAction={{ label: "Főoldal", href: "/", icon: <House size={18} /> }}
      />
    </>
  );
}
