"use client";

import { useEffect } from "react";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeProjectsSection from "@/components/home/HomeProjectsSection";
import HomeContactSection from "@/components/home/HomeContactSection";
import ScrollingCompaniesSection from "@/components/home/ScrollingCompaniesSection";
import type { CompanyLink, ProjectItem } from "@/components/home/home.types";

type HomePageClientProps = Readonly<{
  advantages: readonly string[];
  suppliers: ReadonlyArray<CompanyLink>;
  mainClients: ReadonlyArray<CompanyLink>;
  projects: ReadonlyArray<ProjectItem>;
}>;

export default function HomePageClient({
  advantages,
  suppliers,
  mainClients,
  projects,
}: HomePageClientProps) {
  useEffect(() => {
    const handleInitialScroll = () => {
      const hash = globalThis.location.hash;
      if (!hash) {
        return;
      }

      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    };

    handleInitialScroll();
    globalThis.addEventListener("hashchange", handleInitialScroll);
    return () => globalThis.removeEventListener("hashchange", handleInitialScroll);
  }, []);

  return (
    <>
      <HomeHeroSection advantages={advantages} />

      <ScrollingCompaniesSection
        title="Főbb beszállítóink"
        companies={suppliers}
        animationDuration={30}
      />

      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

        <HomeProjectsSection projects={projects} />
        <HomeContactSection />
      </div>

      <ScrollingCompaniesSection
        title="Főbb megrendelőink"
        companies={mainClients}
        animationDuration={42}
      />
    </>
  );
}