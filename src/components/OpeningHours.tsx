import clsx from "clsx";
import { openingHours } from "@/content/site";

type OpeningHoursListProps = Readonly<{
  /** `compact` uses the abbreviated day names of the footer. */
  variant?: "compact" | "full";
  className?: string;
}>;

export function OpeningHoursList({ variant = "full", className }: OpeningHoursListProps) {
  const compact = variant === "compact";

  return (
    <dl className={clsx(compact ? "space-y-2 text-xs" : "space-y-2.5 text-sm", "text-ink-muted", className)}>
      {openingHours.map((entry) => {
        const closed = entry.days.length === 0;

        return (
          <div
            key={entry.label}
            className={clsx(
              "flex justify-between gap-4 border-b last:border-b-0 last:pb-0",
              compact ? "border-slate-100 pb-1" : "border-line pb-2.5",
            )}
          >
            <dt>{compact ? `${entry.shortLabel}:` : entry.label}</dt>
            <dd className={clsx("whitespace-nowrap", closed ? "text-brand" : "text-ink", (closed || !compact) && "font-bold")}>
              {entry.hours}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
