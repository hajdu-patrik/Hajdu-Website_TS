# Custom Website for Hajdú Közmű Kft.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=flat)
![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)

This repository contains the source code for the official corporate platform of **Hajdú Közmű Kft.**, a leading firm specializing in utility construction and water management infrastructure.

The project was engineered to bridge the gap between heavy industrial expertise and modern digital aesthetics, ensuring a high-performance, accessible, and visually striking user experience.

---

## 🚀 Live Production

**The application is deployed and accessible at:**
👉 **[https://hajdu.hu](https://hajdu.hu)**

---

## ✨ Key Engineering Features

* **Design System:** Colour, typography, shadow and motion tokens live in Tailwind CSS v4's `@theme` (`src/app/globals.css`), and shared components (container, headings, cards, buttons, photo grid) give every page the same visual language from 320 px phones to wide desktops.
* **Server-First Rendering:** Every page is a statically prerendered React Server Component. Only the navigation, the back-to-top link and the company marquee's pause toggle ship client-side JavaScript, and all animations are plain CSS.
* **Performance-First Assets:** Photos are stored as WebP at most 1600 px wide and served through `next/image` as AVIF/WebP with accurate `sizes` hints. Only the above-the-fold image loads eagerly. Inter is self-hosted with `font-display: swap`, and static images are cached for a year.
* **Accessibility (WCAG 2.2 AA):** A skip link, proper landmarks and heading order, visible focus styles, and touch targets of at least 24 px (44 px for buttons and navigation). The mobile menu is a native modal `<dialog>` that traps focus, closes on Escape and returns focus to its toggle, and every animation honours `prefers-reduced-motion`.
* **Search Engine Optimization:** One module (`src/lib/seo.ts`) generates titles, canonical URLs, 1200×630 Open Graph and Twitter cards, and JSON-LD structured data (business, website, breadcrumbs, FAQ and product list). The sitemap, `robots.txt` and the web manifest are derived from the same company data in `src/content/site.ts`.
* **Security Headers:** A Content Security Policy plus HSTS, frame, referrer and permissions policies are set in `next.config.ts`.

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React 19 Server Components)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly typed for enterprise-grade reliability)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Design tokens with `@theme`)
* **Icons:** [Lucide React](https://lucide.dev/)
* **CI/CD:** [Vercel](https://vercel.com/) (Automated builds & deployments, Web Analytics, Speed Insights)

---

## ⚠️ Important Notice: Project Status

This repository is published **for portfolio and demonstration purposes only**.

This was a private, commercial project developed for a specific client. The intellectual property and all rights to the code belong to the client.

**This is not an open-source project.** You are strictly prohibited from copying, distributing, modifying, or using this code for any academic, commercial, or personal projects. Please see the `LICENSE.md` file for a detailed breakdown of these restrictions.

---

## 📦 Deployment

This project is configured for automated deployment via **Vercel**.
Any push to the `main` branch automatically triggers a new build and deployment.

Files in `public/` are served with a one-year immutable cache, so a replaced image must get a new file name to reach returning visitors.

| Environment | Status |
| :--- | :--- |
| **Production** | [![Vercel App](https://img.shields.io/badge/Visit-Live_App-success?style=for-the-badge&logo=vercel)](https://hajdu.hu) |

---

## 📄 License

Copyright (c) Hajdú Patrik Zsolt. All rights reserved.

Proprietary, commissioned work published for demonstration and portfolio purposes only. No rights to use, copy, modify or distribute it are granted. See [LICENSE.md](LICENSE.md) for the full terms.
