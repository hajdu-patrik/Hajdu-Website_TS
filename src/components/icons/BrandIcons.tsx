/**
 * Local icon components that keep pixel- and markup-identical output across
 * the lucide-react 1.x upgrade.
 *
 * Two kinds of drift were found when comparing lucide-react@0.577.0's
 * rendered <svg> output against @1.x for every icon this site imports:
 *
 * 1. Brand/social-logo icons (Github, Linkedin, Facebook) and "Waves" were
 *    removed / redrawn with different path data in 1.x - no in-package
 *    replacement renders the same pixels.
 * 2. lucide-react 1.x's icon factory now bakes a CSS class for every known
 *    alias of an icon (e.g. importing "CheckCircle" - an alias of the
 *    canonical "CircleCheckBig" - now also renders a "lucide-check-circle"
 *    class that 0.577 never emitted, and vice versa: "Clock3" lost its old
 *    "lucide-clock3" class). These classes carry no styling in this project,
 *    but they are still a markup change, so every affected icon this site
 *    imports is reproduced here too, byte-for-byte as lucide-react@0.577.0
 *    rendered it.
 *
 * All path/attribute data below is copied from lucide-react@0.577.0
 * (https://lucide.dev), which is licensed under the ISC License:
 *
 *   ISC License
 *
 *   Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as
 *   part of Feather (MIT). All other copyright (c) for Lucide are held by
 *   Lucide Contributors 2026.
 *
 *   Permission to use, copy, modify, and/or distribute this software for any
 *   purpose with or without fee is hereby granted, provided that the above
 *   copyright notice and this permission notice appear in all copies.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 *   WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 *   MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 *   ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 *   WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 *   ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 *   OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import { createElement, forwardRef } from "react";
import type { IconNode, LucideProps } from "lucide-react";

function mergeClassNames(...classes: Array<string | undefined>): string {
  return classes
    .filter((value, index, array) => Boolean(value) && value!.trim() !== "" && array.indexOf(value) === index)
    .join(" ")
    .trim();
}

function hasA11yProp(props: object): boolean {
  return Object.keys(props).some((prop) => prop.startsWith("aria-") || prop === "role" || prop === "title");
}

/**
 * Reproduces lucide-react@0.577.0's own icon factory (createLucideIcon.js
 * plus its shared Icon.js component): same root attributes, same
 * conditional aria-hidden, same size/color/strokeWidth semantics, same prop
 * pass-through. `classNames` is the exact "lucide-<x>" suffix list
 * 0.577.0 rendered for this icon (usually one entry; occasionally two, e.g.
 * "clock3"/"clock-3" - a quirk of 0.577's own kebab-casing of icon names
 * that carry a digit, preserved here verbatim rather than re-derived).
 */
function createLocalIcon(classNames: string | readonly string[], iconNode: IconNode) {
  const names = Array.isArray(classNames) ? classNames : [classNames as string];
  const Component = forwardRef<SVGSVGElement, LucideProps>(function LocalIcon(
    { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className, children, ...rest },
    ref
  ) {
    return createElement(
      "svg",
      {
        ref,
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: mergeClassNames("lucide", ...names.map((n) => `lucide-${n}`), className),
        ...(!children && !hasA11yProp(rest) && { "aria-hidden": "true" }),
        ...rest,
      },
      [
        ...iconNode.map(([tag, attrs], index) => createElement(tag, { key: index, ...attrs })),
        ...(Array.isArray(children) ? children : children ? [children] : []),
      ]
    );
  });
  Component.displayName = names[0].charAt(0).toUpperCase() + names[0].slice(1);
  return Component;
}

// --- brand / social-logo icons: fully removed in lucide-react 1.x ---

export const Github = createLocalIcon("github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2" }],
]);

export const Linkedin = createLocalIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9" }],
  ["circle", { cx: "4", cy: "4", r: "2" }],
]);

export const Facebook = createLocalIcon("facebook", [
  ["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }],
]);

// --- "Waves" was redrawn with different path data in lucide-react 1.x ---

export const Waves = createLocalIcon("waves", [
  ["path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
  ["path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
  ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
]);

// --- icons whose lucide-react 1.x class list gained or lost alias classes
//     (path data itself is unchanged; kept here only so the rendered class
//     attribute stays byte-identical) ---

const HouseIcon = createLocalIcon("house", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    },
  ],
]);
// lucide-react's own "house" icon file is shared by both the "Home" and
// "House" export names (0.577's class depended only on the icon file's own
// registered name, not on the alias imported) - so this site's two call
// sites (Home in error.tsx/global-error.tsx, House in rolunk/page.tsx) both
// point at the same local component.
export const Home = HouseIcon;
export const House = HouseIcon;

export const AlertOctagon = createLocalIcon("octagon-alert", [
  ["path", { d: "M12 16h.01" }],
  ["path", { d: "M12 8v4" }],
  [
    "path",
    {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
    },
  ],
]);

export const AlertTriangle = createLocalIcon("triangle-alert", [
  [
    "path",
    { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" },
  ],
  ["path", { d: "M12 9v4" }],
  ["path", { d: "M12 17h.01" }],
]);

const CircleQuestionMarkIcon = createLocalIcon("circle-question-mark", [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
  ["path", { d: "M12 17h.01" }],
]);
// same reasoning as Home/House above: CircleHelp and CircleQuestionMark are
// two export names for the same underlying 0.577 icon file.
export const CircleHelp = CircleQuestionMarkIcon;
export const CircleQuestionMark = CircleQuestionMarkIcon;

export const Clock3 = createLocalIcon(["clock3", "clock-3"], [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 6v6h4" }],
]);

export const SquareArrowOutUpRight = createLocalIcon("square-arrow-out-up-right", [
  ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }],
  ["path", { d: "m21 3-9 9" }],
  ["path", { d: "M15 3h6v6" }],
]);

export const PlugZap = createLocalIcon("plug-zap", [
  ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
  ["path", { d: "m2 22 3-3" }],
  ["path", { d: "M7.5 13.5 10 11" }],
  ["path", { d: "M10.5 16.5 13 14" }],
  ["path", { d: "m18 3-4 4h6l-4 4" }],
]);

export const AlertCircle = createLocalIcon("circle-alert", [
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }],
]);

export const UsersRound = createLocalIcon("users-round", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0" }],
  ["circle", { cx: "10", cy: "8", r: "5" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }],
]);

export const Code2 = createLocalIcon("code-xml", [
  ["path", { d: "m18 16 4-4-4-4" }],
  ["path", { d: "m6 8-4 4 4 4" }],
  ["path", { d: "m14.5 4-5 16" }],
]);

export const CheckCircle = createLocalIcon("circle-check-big", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }],
  ["path", { d: "m9 11 3 3L22 4" }],
]);
