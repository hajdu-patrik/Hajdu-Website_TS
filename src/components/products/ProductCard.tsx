import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { quoteEmail } from "@/content/site";

export type Product = Readonly<{
  id: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  alt: string;
  emailSubject: string;
  features: readonly string[];
}>;

type ProductCardProps = Readonly<{
  product: Product;
  /** The first card's photo is the page's largest above-the-fold image. */
  isLcp?: boolean;
}>;

/** Must sit inside a `.product-grid`, which highlights the featured card (see globals.css). */
export function ProductCard({ product, isLcp = false }: ProductCardProps) {
  const titleId = `${product.id}-title`;

  return (
    <section
      id={product.id}
      aria-labelledby={titleId}
      className="product-card group mx-auto flex h-full w-full max-w-xl flex-col rounded-4xl border bg-white p-4 transition duration-300 lg:max-w-none"
    >
      <div className="relative mb-6 h-72 shrink-0 overflow-hidden rounded-3xl bg-slate-100 sm:mb-8 sm:h-96 lg:h-120">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 640px) 544px, 100vw"
          loading={isLcp ? "eager" : "lazy"}
          fetchPriority={isLcp ? "high" : undefined}
          className="object-contain p-4 transition-transform duration-700 group-focus-within:scale-102 group-hover:scale-102 sm:p-6"
        />
      </div>

      <div className="flex grow flex-col px-2 pb-2 text-center sm:px-6 sm:pb-6">
        <p className="eyebrow">{product.kicker}</p>
        <h2 id={titleId} className="mt-4 mb-4 text-2xl font-black tracking-tight text-ink uppercase sm:text-3xl">
          {product.title}
        </h2>
        <p className="lead mb-7 sm:mb-8">{product.description}</p>

        <ul className="mb-8 space-y-3 text-left sm:mb-10">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="rounded-2xl border border-line bg-slate-50 px-4 py-4 text-sm font-bold text-ink-soft"
            >
              {feature}
            </li>
          ))}
        </ul>

        <Button
          size="lg"
          fullWidth
          href={`mailto:${quoteEmail}?subject=${encodeURIComponent(product.emailSubject)}`}
          className="mt-auto"
        >
          Ajánlatot kérek
          <span className="sr-only">: {product.title}</span>
        </Button>
      </div>
    </section>
  );
}
