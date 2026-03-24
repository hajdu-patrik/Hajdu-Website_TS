import Image from "next/image";
import type { ProjectItem } from "@/components/home/home.types";

type HomeProjectsSectionProps = Readonly<{
  projects: ReadonlyArray<ProjectItem>;
}>;

export default function HomeProjectsSection({ projects }: HomeProjectsSectionProps) {
  return (
    <section
      id="referenciak"
      aria-labelledby="projects-title"
      className="relative px-4 py-16 transition-colors duration-500 sm:px-6 sm:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2
          id="projects-title"
          className="text-3xl font-black uppercase tracking-tighter text-slate-900 sm:text-4xl"
        >
          Legutóbbi projektek
        </h2>
        <p className="mx-auto mb-12 mt-4 max-w-2xl text-base text-slate-600 sm:mb-16 sm:text-lg">
          Közműépítés, csatornázás és vízellátási munkáinkból adunk rövid betekintést.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.src}
              className="group relative h-64 overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md sm:h-72"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="media-image-hover"
                draggable="false"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
