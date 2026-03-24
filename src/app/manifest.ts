import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hajdú Közmű Kft. | Fagymentes kerti csap és közműépítés",
    short_name: "Hajdú Közmű",
    description:
      "Közműépítés, csatornázás, ivóvízellátás és fagymentes kerti csap megoldások a Hajdú Közmű Kft. kínálatában.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0001f9",
    lang: "hu-HU",
    categories: ["business", "construction", "utilities"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}