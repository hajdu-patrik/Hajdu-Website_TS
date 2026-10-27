"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navItems } from "@/content/site";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Elsődleges navigáció" className="hidden lg:block">
      <ul className="flex items-center gap-6 xl:gap-8">
        {navItems.map((item) => {
          const isCurrent = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={clsx(
                  "relative inline-flex min-h-11 items-center text-xs font-bold tracking-label uppercase transition-colors duration-200 hover:text-brand",
                  isCurrent
                    ? "text-brand after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:rounded-full after:bg-brand"
                    : "text-ink-muted",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
