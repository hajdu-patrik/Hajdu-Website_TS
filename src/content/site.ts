export const siteUrl = "https://hajdu.hu";

export const company = {
  name: "Hajdú Közmű Kft.",
  foundingYear: 2004,
  email: "hajdu@hajdu.hu",
  phone: { display: "+36 20 929 4317", href: "tel:+36209294317", e164: "+36209294317" },
  address: {
    street: "Csikós u. 13-15.",
    city: "Budapest",
    postalCode: "1033",
    countryCode: "HU",
    full: "1033 Budapest, Csikós u. 13-15.",
  },
  geo: { latitude: 47.56114309354124, longitude: 19.040089953624864 },
  facebookUrl: "https://www.facebook.com/p/Hajdú-Közmű-Kft-100063708745631",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=1033+Budapest,+Csik%C3%B3s+u.+13-15",
  mapEmbedUrl: "https://www.google.com/maps?q=1033+Budapest,+Csik%C3%B3s+u.+13-15&output=embed",
} as const;

/** Whole years completed in every month of the build year, so "több mint N év" stays true until the next deploy. */
export const yearsOfExperience = new Date().getFullYear() - company.foundingYear - 1;

type OpeningHours = Readonly<{
  shortLabel: string;
  label: string;
  hours: string;
  /** schema.org day names, empty for closed days. */
  days: readonly string[];
  opens?: string;
  closes?: string;
}>;

export const openingHours: readonly OpeningHours[] = [
  {
    shortLabel: "H - Cs",
    label: "Hétfő - Csütörtök",
    hours: "07:00 - 16:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "07:00",
    closes: "16:00",
  },
  { shortLabel: "Péntek", label: "Péntek", hours: "07:00 - 15:00", days: ["Friday"], opens: "07:00", closes: "15:00" },
  { shortLabel: "Szo - V", label: "Szombat - Vasárnap", hours: "Zárva", days: [] },
];

type Manager = Readonly<{
  name: string;
  email: string;
  phone: { display: string; href: string };
}>;

export const managers: readonly Manager[] = [
  { name: "Hajdú Zsolt", email: "hajdu.zsolt@hajdu.hu", phone: { display: "+36 20 929 4317", href: "tel:+36209294317" } },
  { name: "Hajdú Tamás", email: "hajdu.tamas@hajdu.hu", phone: { display: "+36 20 929 3964", href: "tel:+36209293964" } },
];

/** Offer requests from the product page go to the first manager. */
export const quoteEmail = managers[0].email;

export const siteAuthor = {
  name: "Hajdú Patrik",
  githubUrl: "https://github.com/hajdu-patrik",
  linkedinUrl: "https://www.linkedin.com/in/hajdu-patrik/",
} as const;

type NavItem = Readonly<{ label: string; href: string }>;

/** Every public route, in menu order. The header, footer and sitemap all read this list. */
export const navItems: readonly NavItem[] = [
  { label: "Főoldal", href: "/" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Termékek", href: "/termekek" },
  { label: "Pályázatok", href: "/palyazatok" },
  { label: "GYIK", href: "/gyakori-kerdesek" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];
