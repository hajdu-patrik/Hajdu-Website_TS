import Link from "next/link";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const variantClasses = {
  primary: "rounded-2xl bg-brand text-white shadow-md shadow-brand/10 hover:bg-brand-hover",
  secondary: "rounded-2xl border border-line bg-white/80 text-ink hover:border-brand/40 hover:text-brand",
  dark: "rounded-2xl bg-ink text-white shadow-md hover:bg-slate-800",
} as const;

const sizeClasses = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-4 text-xs",
  lg: "px-6 py-4 text-xs sm:px-7 sm:text-sm",
} as const;

type ButtonVariant = keyof typeof variantClasses | "icon";
type ButtonSize = keyof typeof sizeClasses;

type ButtonStyleProps = Readonly<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}>;

type ButtonAsLinkProps = ButtonStyleProps &
  Readonly<{ href: string }> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButtonProps = ButtonStyleProps &
  Readonly<{ href?: never }> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

function buttonClassName({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: Omit<ButtonStyleProps, "children">): string {
  if (variant === "icon") {
    return clsx(
      "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-slate-100 text-brand shadow-sm transition duration-200 hover:scale-105 hover:border-brand/30 hover:bg-white",
      className,
    );
  }

  return clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 text-center font-black tracking-button uppercase transition duration-200 hover:scale-102",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}

/** Renders a Next.js link for internal paths, a plain anchor for other URLs and a <button> without `href`. */
export function Button(props: ButtonAsLinkProps | ButtonAsButtonProps) {
  const { variant, size, fullWidth, className, children, ...rest } = props;
  const classes = buttonClassName({ variant, size, fullWidth, className });

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as Omit<ButtonAsLinkProps, keyof ButtonStyleProps>;

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButtonProps, keyof ButtonStyleProps>;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
