import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

type ErrorAction = Readonly<{ label: string; icon: ReactNode }> &
  ({ href: string; onClick?: never } | { onClick: () => void; href?: never });

type ErrorPageCardProps = Readonly<{
  label: string;
  code: string;
  title: string;
  description: string;
  hint?: string;
  icon: LucideIcon;
  primaryAction: ErrorAction;
  secondaryAction?: ErrorAction;
}>;

function ActionButton({ action, variant }: Readonly<{ action: ErrorAction; variant: "primary" | "secondary" }>) {
  const content = (
    <>
      {action.icon}
      {action.label}
    </>
  );
  const className = "w-full gap-3 sm:w-auto";

  return action.href ? (
    <Button variant={variant} size="lg" href={action.href} className={className}>
      {content}
    </Button>
  ) : (
    <Button variant={variant} size="lg" onClick={action.onClick} className={className}>
      {content}
    </Button>
  );
}

/** Shared layout of the 404 page and the error boundaries. */
export function ErrorPageCard({
  label,
  code,
  title,
  description,
  hint,
  icon: Icon,
  primaryAction,
  secondaryAction,
}: ErrorPageCardProps) {
  return (
    <section
      aria-labelledby="error-page-title"
      className="error-backdrop relative isolate flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16"
    >
      <div aria-hidden="true" className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 -left-24 size-72 animate-float rounded-full bg-cyan-300/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        style={{ animationDelay: "-6s" }}
        className="pointer-events-none absolute right-0 -bottom-16 size-80 animate-float rounded-full bg-indigo-300/30 blur-3xl"
      />

      <div className="relative w-full max-w-3xl animate-fade-up overflow-hidden rounded-4xl border border-white/75 bg-white/85 p-6 text-center shadow-elevated backdrop-blur-2xl sm:p-8 md:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-r from-cyan-200/70 via-white/0 to-indigo-200/70"
        />

        <div className="relative mx-auto mb-7 inline-flex rounded-3xl border border-line bg-white p-4 text-brand shadow-xl shadow-brand/10 sm:mb-8 sm:p-5">
          <Icon size={72} strokeWidth={1.9} />
        </div>

        <p className="label-caps relative mb-2">{label}</p>
        <p className="relative mb-2 text-5xl leading-none font-black tracking-tight text-brand sm:text-6xl md:text-8xl">
          {code}
        </p>
        <h1 id="error-page-title" className="relative mb-4 text-xl font-bold text-ink sm:text-2xl md:text-4xl">
          {title}
        </h1>
        <p className="relative mx-auto max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base md:text-lg">
          {description}
        </p>
        {hint ? <p className="relative mx-auto mt-4 max-w-2xl text-sm text-ink-subtle">{hint}</p> : null}

        <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ActionButton action={primaryAction} variant="primary" />
          {secondaryAction ? <ActionButton action={secondaryAction} variant="secondary" /> : null}
        </div>
      </div>
    </section>
  );
}
