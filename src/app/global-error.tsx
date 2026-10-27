"use client";

import { useEffect } from "react";
import { House, RefreshCw, TriangleAlert } from "lucide-react";
import { ErrorPageCard } from "@/components/errors/ErrorPageCard";
import { inter } from "./fonts";
import "./globals.css";

type GlobalErrorProps = Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>;

/** Replaces the root layout when it fails, so it renders its own <html> and <body>. */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Unhandled global error:", error);
  }, [error]);

  return (
    <html lang="hu" className={inter.variable}>
      <body>
        <title>500 | Kritikus szerverhiba</title>
        <meta name="robots" content="noindex" />
        <main>
          <ErrorPageCard
            label="Kritikus hiba"
            code="500"
            title="Váratlan rendszerhiba történt."
            description="A weboldal egy kritikus hibába futott. Frissítsd az oldalt, vagy próbáld újra néhány pillanat múlva."
            hint={
              error.digest
                ? `Hibaazonosító: ${error.digest}`
                : "Ha a hiba ismétlődik, kérlek vedd fel velünk a kapcsolatot."
            }
            icon={TriangleAlert}
            primaryAction={{ label: "Újrapróbálás", onClick: reset, icon: <RefreshCw size={18} /> }}
            secondaryAction={{ label: "Főoldal", href: "/", icon: <House size={18} /> }}
          />
        </main>
      </body>
    </html>
  );
}
