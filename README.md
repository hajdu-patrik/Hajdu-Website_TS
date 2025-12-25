![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)

# Hajdú Közmű Kft. | Corporate Web Engineering

This repository contains the source code for the official corporate platform of **Hajdú Közmű Kft.**, a leading firm specializing in utility construction and water management infrastructure. 

The project was engineered to bridge the gap between heavy industrial expertise and modern digital aesthetics, ensuring a high-performance, accessible, and visually striking user experience.

---

## 🚀 Live Production

**The application is deployed and accessible at:**
👉 **[https://hajdu.hu](https://hajdu.hu)**

---

## ✨ Key Engineering Features

* **Semantic Theme Architecture:** Implemented a robust Dark/Light mode toggle using CSS variables and `next-themes`. The Light mode was specifically tuned with "soft-contrast" palettes (`bg-slate-50`) to reduce eye strain while maintaining brand integrity.
* **High-Fidelity Animations:** Integrated `framer-motion` for hardware-accelerated transitions. Features include an "Infinite Loop" partner slider and staggered entrance animations for section headers.
* **Performance-First Assets:** Utilized Next.js `next/image` for automatic WebP conversion and lazy-loading, significantly improving Largest Contentful Paint (LCP) scores.
* **Responsive Fluid Layouts:** Engineered a grid-based system that adapts from mobile-first views to wide-screen desktop monitors using Tailwind CSS v4's modern utility engine.
* **Accessible Navigation:** Custom hook-based scroll logic to handle internal anchor links (`#contact`) across multiple pages, ensuring consistent UX regardless of the entry point.

---

## 🛠️ Technology Stack


* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router Architecture)
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
