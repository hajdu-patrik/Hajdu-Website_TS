"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { uiMotion } from "@/lib/motion";

type ErrorAction = Readonly<{
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}>;

type ErrorPageCardProps = Readonly<{
  label?: string;
  code: string;
  title: string;
  description: string;
  hint?: string;
  visual: ReactNode;
  countdown?: number;
  primaryAction: ErrorAction;
  secondaryAction?: ErrorAction;
}>;

type ActionButtonProps = Readonly<{
  action: ErrorAction;
  variant: "primary" | "secondary";
}>;

function ActionButton({ action, variant }: ActionButtonProps) {
  const baseClassName =
    "w-full gap-3 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0001f9] focus-visible:ring-offset-2";

  const variantClassName = variant === "primary" ? "btn-primary" : "btn-secondary";

  const content = (
    <>
      {action.icon}
      <span>{action.label}</span>
    </>
  );

  if (action.href) {
    return (
      <Link href={action.href} className={`${baseClassName} ${variantClassName}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={`${baseClassName} ${variantClassName}`}>
      {content}
    </button>
  );
}

export default function ErrorPageCard({
  label,
  code,
  title,
  description,
  hint,
  visual,
  countdown,
  primaryAction,
  secondaryAction,
}: ErrorPageCardProps) {
  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(0,1,249,0.15),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] px-4 py-12 sm:px-6 sm:py-16"
      aria-labelledby="error-page-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:40px_40px]"
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: uiMotion.duration.float, repeat: Infinity, ease: uiMotion.easeSoft }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 right-0 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
        transition={{ duration: uiMotion.duration.float, repeat: Infinity, ease: uiMotion.easeSoft, delay: 0.8 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: uiMotion.duration.reveal, ease: uiMotion.easeStandard }}
        className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/75 bg-white/85 p-6 text-center shadow-[0_28px_90px_-40px_rgba(2,2,68,0.65)] backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-8 md:p-12"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-cyan-200/70 via-white/0 to-indigo-200/70" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          className="relative mx-auto mb-7 inline-flex rounded-[1.3rem] border border-slate-200/90 bg-white p-4 shadow-xl shadow-[#0001f9]/10 sm:mb-8 sm:rounded-[1.5rem] sm:p-5"
        >
          <div className="text-[#0001f9]">{visual}</div>
        </motion.div>

        {label ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
        ) : null}

        <p className="mb-2 bg-gradient-to-r from-[#0001f9] to-cyan-500 bg-clip-text text-5xl font-black leading-none tracking-tight text-transparent sm:text-6xl md:text-8xl">
          {code}
        </p>
        <h1 id="error-page-title" className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl md:text-4xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">{description}</p>

        {hint ? <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500">{hint}</p> : null}

        {typeof countdown === "number" ? (
          <div className="mx-auto mt-8 w-full max-w-sm rounded-2xl border border-slate-200/90 bg-slate-100/80 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Automatikus visszairányítás</p>
            <AnimatePresence mode="wait">
              <motion.span
                key={countdown}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                className="block text-4xl font-black text-[#0001f9] sm:text-5xl"
                aria-live="polite"
              >
                {countdown}
              </motion.span>
            </AnimatePresence>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ActionButton action={primaryAction} variant="primary" />
          {secondaryAction ? <ActionButton action={secondaryAction} variant="secondary" /> : null}
        </div>
      </motion.div>
    </section>
  );
}