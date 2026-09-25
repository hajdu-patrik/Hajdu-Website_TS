# Custom Website for Hajdú Közmű Kft.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
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

* **Semantic Color Architecture:** Implemented a light-only visual system using CSS variables and tuned "soft-contrast" palettes (`bg-slate-50`) to reduce eye strain while maintaining brand integrity.
* **High-Fidelity Animations:** Integrated `framer-motion` for hardware-accelerated transitions. Features include an "Infinite Loop" partner slider and animated enter/exit transitions (`AnimatePresence`) for the mobile menu and the scroll-to-top button.
* **Performance-First Assets:** Utilized Next.js `next/image` for automatic AVIF/WebP conversion and lazy-loading, significantly improving Largest Contentful Paint (LCP) scores.
* **Responsive Fluid Layouts:** Engineered a grid-based system that adapts from mobile-first views to wide-screen desktop monitors using Tailwind CSS v4's modern utility engine.
* **Accessible Navigation:** Hash-aware scroll logic smoothly scrolls to in-page anchors (e.g. `/#referenciak`) on load and on hash changes, ensuring consistent UX regardless of the entry point, and a skip link (`#main-content`) lets keyboard users bypass the navigation.

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router Architecture)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly typed for enterprise-grade reliability)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Atomic CSS approach)
* **Motion Engine:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **CI/CD:** [Vercel](https://vercel.com/) (Automated builds & deployments)

---

## ⚠️ Important Notice: Project Status

This repository is published **for portfolio and demonstration purposes only**.

This was a private, commercial project developed for a specific client. The intellectual property and all rights to the code belong to the client.

**This is not an open-source project.** You are strictly prohibited from copying, distributing, modifying, or using this code for any academic, commercial, or personal projects. Please see the `LICENSE.md` file for a detailed breakdown of these restrictions.

---

## 📦 Deployment

This project is configured for automated deployment via **Vercel**.
Any push to the `main` branch automatically triggers a new build and deployment.

| Environment | Status |
| :--- | :--- |
| **Production** | [![Vercel App](https://img.shields.io/badge/Visit-Live_App-success?style=for-the-badge&logo=vercel)](https://hajdu.hu) |

---

## 📄 License

Copyright (c) Hajdú Patrik Zsolt. All rights reserved.

Proprietary, commissioned work published for demonstration and portfolio purposes only. No rights to use, copy, modify or distribute it are granted. See [LICENSE.md](LICENSE.md) for the full terms.
