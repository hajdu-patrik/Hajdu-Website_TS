"use client";

import { useState } from "react";
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  alt: string;
  emailSubject: string;
  features: string[];
};

type TermekekGridProps = Readonly<{
  products: readonly Product[];
}>;

export default function TermekekGrid({ products }: TermekekGridProps) {
  const defaultProductId = products[0]?.id;
  const [activeProductId, setActiveProductId] = useState(defaultProductId);

  if (!defaultProductId) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-12">
      {products.map((product) => {
        const isActive = activeProductId === product.id;

        return (
          <section
            key={product.id}
            id={product.id}
            aria-labelledby={`${product.id}-title`}
            onMouseEnter={() => setActiveProductId(product.id)}
            onMouseLeave={() => setActiveProductId(defaultProductId)}
            onFocus={() => setActiveProductId(product.id)}
            onBlur={() => setActiveProductId(defaultProductId)}
            className={`group product-card ${
              isActive ? "border-[#0001f9] shadow-2xl" : "border-slate-200"
            }`}
          >
            <div className="relative mb-6 h-80 shrink-0 overflow-hidden rounded-[1.6rem] bg-slate-100 sm:mb-8 sm:h-[26rem] sm:rounded-[2rem] lg:h-[30rem]">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className={`media-image ${isActive ? "scale-[1.02]" : "scale-100"}`}
                draggable="false"
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-grow flex-col px-4 pb-4 sm:px-6 sm:pb-6">
              <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-[#0001f9] sm:text-xs sm:tracking-[0.3em]">
                {product.kicker}
              </p>
              <h2
                id={`${product.id}-title`}
                className="mb-4 mt-4 text-center text-2xl font-black uppercase tracking-tight text-slate-800 sm:text-3xl"
              >
                {product.title}
              </h2>
              <p className="mb-7 text-center text-base leading-relaxed text-slate-600 sm:mb-8 sm:text-lg">
                {product.description}
              </p>

              <ul className="mb-8 space-y-3 text-left sm:mb-10">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className={`feature-pill ${
                      isActive
                        ? "border-slate-200 bg-slate-100 text-slate-800"
                        : "border-slate-200/80 bg-slate-50 text-slate-700"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a
                  href={`mailto:hajdu.zsolt@hajdu.hu?subject=${encodeURIComponent(product.emailSubject)}`}
                  aria-label={`${product.title} ajánlatkérés e-mailben`}
                  className="btn-primary-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0001f9] focus-visible:ring-offset-2"
                >
                  Ajánlatot kérek
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
