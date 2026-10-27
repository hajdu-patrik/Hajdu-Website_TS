import clsx from "clsx";
import type { ReactNode } from "react";

type PageHeaderProps = Readonly<{
  title: string;
  description?: ReactNode;
}>;

/** The h1 and intro line at the top of every inner page. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <h1 className="text-4xl font-black tracking-tight break-words text-ink uppercase sm:text-5xl md:text-6xl">
        {title}
      </h1>
      {description ? <p className="lead mt-6">{description}</p> : null}
    </header>
  );
}

const titleSizes = {
  lg: "text-3xl sm:text-4xl",
  md: "text-2xl sm:text-3xl",
  sm: "text-xl sm:text-2xl",
} as const;

type SectionHeadingProps = Readonly<{
  title: ReactNode;
  id?: string;
  as?: "h2" | "h3";
  size?: keyof typeof titleSizes;
  eyebrow?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}>;

/** A section title with an optional eyebrow above and a lead paragraph below. */
export function SectionHeading({
  title,
  id,
  as: Tag = "h2",
  size = "lg",
  eyebrow,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={clsx(centered && "text-center", className)}>
      {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
      <Tag id={id} className={clsx("font-black tracking-tight break-words text-ink uppercase", titleSizes[size])}>
        {title}
      </Tag>
      {description ? <p className={clsx("lead mt-4 max-w-3xl", centered && "mx-auto")}>{description}</p> : null}
    </div>
  );
}
