/** Colour accents for icon badges and cards; the full class strings stay here so Tailwind can see them. */
export const accents = {
  brand: {
    badge: "border-brand/20 bg-brand/10 text-brand",
    bar: "from-brand/80 via-cyan-300 to-brand/80",
    hoverBorder: "hover:border-brand/40",
    hoverText: "group-hover:text-brand",
  },
  cyan: {
    badge: "border-cyan-500/20 bg-cyan-500/10 text-cyan-700",
    bar: "from-cyan-500/80 via-sky-300 to-cyan-500/80",
    hoverBorder: "hover:border-cyan-500/40",
    hoverText: "group-hover:text-cyan-700",
  },
  teal: {
    badge: "border-teal-500/20 bg-teal-500/10 text-teal-700",
    bar: "from-teal-500/80 via-emerald-300 to-teal-500/80",
    hoverBorder: "hover:border-teal-500/40",
    hoverText: "group-hover:text-teal-700",
  },
  amber: {
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-700",
    bar: "from-amber-500/80 via-orange-300 to-amber-500/80",
    hoverBorder: "hover:border-amber-500/40",
    hoverText: "group-hover:text-amber-700",
  },
} as const;

export type Accent = keyof typeof accents;

const accentCycle: readonly Accent[] = ["brand", "cyan", "teal", "amber"];

/** Cycles through the accents so neighbouring cards differ. */
export function accentAt(index: number): Accent {
  return accentCycle[index % accentCycle.length];
}
