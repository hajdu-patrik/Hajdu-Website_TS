"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/site";

const DESKTOP_QUERY = "(min-width: 1024px)";

type MobileMenuProps = Readonly<{
  logo: ReactNode;
}>;

/**
 * Full-screen navigation for small screens, built on a modal <dialog>: the browser traps focus,
 * closes it on Escape and returns focus to the toggle button.
 */
export function MobileMenu({ logo }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  useEffect(() => {
    const desktop = globalThis.matchMedia(DESKTOP_QUERY);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) dialogRef.current?.close();
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const open = () => {
    dialogRef.current?.showModal();
    closeButtonRef.current?.focus();
    setIsOpen(true);
  };

  const close = () => dialogRef.current?.close();

  // A link to the page that is already open does not change the pathname, so close explicitly.
  const closeOnLinkClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target instanceof Element && event.target.closest("a")) close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Mobil menü megnyitása"
        className="inline-flex size-12 items-center justify-center rounded-xl text-ink transition-colors duration-200 hover:bg-slate-100 lg:hidden"
      >
        <Menu size={32} />
      </button>

      <dialog
        id="mobile-menu"
        ref={dialogRef}
        aria-label="Mobil menü"
        onClose={() => setIsOpen(false)}
        onClick={closeOnLinkClick}
        className={clsx(
          "m-0 size-full max-h-none max-w-none overflow-y-auto bg-white text-ink open:flex open:flex-col lg:hidden",
          "-translate-y-5 opacity-0 transition-[opacity,translate,overlay,display] transition-discrete duration-300 ease-out",
          "open:translate-y-0 open:opacity-100 starting:open:-translate-y-5 starting:open:opacity-0",
        )}
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-4 sm:h-24 sm:px-6">
          {logo}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Mobil menü bezárása"
            className="inline-flex size-12 items-center justify-center rounded-xl text-ink transition-colors duration-200 hover:bg-slate-100"
          >
            <X size={32} />
          </button>
        </div>

        <nav aria-label="Elsődleges navigáció" className="flex grow items-center justify-center px-6 pt-4 pb-24">
          <ul className="flex flex-col items-center gap-3">
            {navItems.map((item) => {
              const isCurrent = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={clsx(
                      "relative inline-flex min-h-14 items-center text-2xl font-black tracking-tight uppercase transition-colors duration-200 hover:text-brand sm:text-3xl",
                      isCurrent &&
                        "text-brand after:absolute after:inset-x-0 after:bottom-2 after:h-1 after:rounded-full after:bg-brand",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </dialog>
    </>
  );
}
