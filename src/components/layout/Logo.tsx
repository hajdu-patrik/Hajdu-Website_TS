import Image from "next/image";
import Link from "next/link";
import { company } from "@/content/site";

export function Logo() {
  return (
    <Link href="/" aria-label={`${company.name} főoldal`} className="block w-36 shrink-0 sm:w-40 md:w-52">
      <Image
        src="/Logo.webp"
        alt={`${company.name} logó`}
        width={960}
        height={242}
        sizes="(min-width: 768px) 208px, (min-width: 640px) 160px, 144px"
        loading="eager"
        className="h-auto w-full"
      />
    </Link>
  );
}
