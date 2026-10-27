import Image from "next/image";
import clsx from "clsx";

export type Photo = Readonly<{ src: string; alt: string }>;

const layouts = {
  /** Landscape tiles in a 1/2/3 column grid. */
  tiles: {
    grid: "grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3",
    item: "h-64 rounded-3xl border border-line bg-slate-200 sm:h-72",
    frame: "",
    sizes: "(min-width: 1024px) 363px, (min-width: 768px) 50vw, 100vw",
  },
  /** Square photos with a light frame, three per row from `md`. */
  framed: {
    grid: "grid-cols-1 gap-6 md:grid-cols-3",
    item: "aspect-square rounded-4xl border border-line bg-linear-to-br from-white via-slate-50 to-cyan-50/35 p-2",
    frame: "rounded-3xl border border-line/80",
    sizes: "(min-width: 1200px) 330px, (min-width: 768px) 30vw, 100vw",
  },
} as const;

type PhotoGridProps = Readonly<{
  photos: readonly Photo[];
  layout: keyof typeof layouts;
}>;

export function PhotoGrid({ photos, layout }: PhotoGridProps) {
  const style = layouts[layout];

  return (
    <ul className={clsx("grid", style.grid)}>
      {photos.map((photo) => (
        <li
          key={photo.src}
          className={clsx(
            "group relative overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md",
            style.item,
          )}
        >
          <div className={clsx("relative size-full overflow-hidden", style.frame)}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={style.sizes}
              className="object-cover transition-transform duration-700 group-hover:scale-102"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
