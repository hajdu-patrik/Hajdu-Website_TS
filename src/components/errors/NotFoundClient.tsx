"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowLeft, UsersRound } from "lucide-react";
import ErrorPageCard from "@/components/errors/ErrorPageCard";

export default function NotFoundClient() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (countdown <= 0) {
      router.replace("/");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <ErrorPageCard
      label="Nincs ilyen oldal"
      code="404"
      title="Ez az oldal nem található."
      description="A keresett tartalom valószínűleg átkerült, átneveződött vagy már nem elérhető ezen az útvonalon."
      hint="Néhány másodperc múlva automatikusan visszaviszünk a főoldalra."
      visual={<AlertCircle size={72} strokeWidth={1.9} />}
      countdown={countdown}
      primaryAction={{
        label: "Vissza a főoldalra",
        href: "/",
        icon: <ArrowLeft size={18} />,
      }}
      secondaryAction={{
        label: "Kapcsolat",
        href: "/kapcsolat",
        icon: <UsersRound size={18} />,
      }}
    />
  );
}