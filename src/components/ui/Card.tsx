import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { accents, type Accent } from "@/components/ui/accents";

const badgeSizes = {
  sm: { box: "rounded-xl p-2", icon: 18 },
  md: { box: "rounded-xl p-2.5", icon: 20 },
  lg: { box: "rounded-2xl p-3.5 sm:p-4", icon: 32 },
} as const;

type IconBadgeProps = Readonly<{
  icon: LucideIcon;
  accent?: Accent;
  tone?: "tint" | "solid";
  size?: keyof typeof badgeSizes;
  className?: string;
}>;

export function IconBadge({ icon: Icon, accent = "brand", tone = "tint", size = "md", className }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={clsx(
        "inline-flex shrink-0 items-center justify-center border",
        badgeSizes[size].box,
        tone === "solid" ? "border-brand/20 bg-brand text-white shadow-md" : accents[accent].badge,
        className,
      )}
    >
      <Icon size={badgeSizes[size].icon} />
    </span>
  );
}

type FeatureCardProps = Readonly<{
  icon: LucideIcon;
  accent: Accent;
  title: ReactNode;
  titleAs?: "p" | "h2" | "h3";
  size?: "md" | "lg";
  as?: "article" | "li" | "div";
  /** Optional body text under the icon row. */
  children?: ReactNode;
}>;

/** A white card with an accent icon, a hover bar and short text. */
export function FeatureCard({
  icon,
  accent,
  title,
  titleAs: Title = "p",
  size = "md",
  as: Tag = "article",
  children,
}: FeatureCardProps) {
  const style = accents[accent];
  const large = size === "lg";

  return (
    <Tag
      className={clsx(
        "group relative overflow-hidden border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
        large ? "rounded-3xl p-5 sm:p-8" : "rounded-2xl p-5",
        style.hoverBorder,
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          style.bar,
        )}
      />
      <div className={clsx("flex gap-4", large ? "items-center" : "items-start")}>
        <IconBadge icon={icon} accent={accent} />
        <Title
          className={clsx(
            "transition-colors duration-300",
            style.hoverText,
            large ? "text-lg font-black text-ink sm:text-xl" : "pt-1.5 text-sm leading-relaxed font-bold text-ink-soft sm:pt-1 sm:text-base",
          )}
        >
          {title}
        </Title>
      </div>
      {children ? <div className="mt-4 text-base leading-relaxed text-ink-muted">{children}</div> : null}
    </Tag>
  );
}

type ContactItemProps = Readonly<{
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  href?: string;
}>;

/** An icon, a small caps label and a value; a link card when `href` is given. */
export function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <IconBadge icon={icon} size="sm" />
      <span className="min-w-0">
        <span className="label-caps block">{label}</span>
        <span className="mt-1 block text-sm font-bold break-words text-ink transition-colors group-hover:text-brand">
          {value}
        </span>
      </span>
    </>
  );
  const base = "flex items-start gap-4 rounded-2xl border border-line bg-white/80 px-5 py-4 shadow-sm";

  if (!href) {
    return <div className={base}>{content}</div>;
  }

  return (
    <a
      href={href}
      className={clsx(
        base,
        "group transition duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:bg-white hover:shadow-md",
      )}
    >
      {content}
    </a>
  );
}

type PanelProps = HTMLAttributes<HTMLElement> &
  Readonly<{
    as?: "section" | "article" | "div";
  }>;

/** A large rounded surface with a soft gradient and two decorative glows. */
export function Panel({ as: Tag = "section", className, children, ...props }: PanelProps) {
  return (
    <Tag
      className={clsx(
        "relative overflow-hidden rounded-4xl border border-line bg-linear-to-br from-white via-slate-50 to-cyan-50/40 p-5 shadow-sm sm:p-6 md:p-8",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-12 size-28 rounded-full bg-cyan-200/40 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-12 size-32 rounded-full bg-blue-200/35 blur-3xl"
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
