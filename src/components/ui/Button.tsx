import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/**
 * The button styles used across the site, in one place.
 * The class names are the existing component classes from globals.css, so the look is unchanged.
 */
export const buttonVariants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  wide: "btn-primary-wide",
  social: "social-icon-button",
  profilePrimary: "profile-link-button profile-link-button-primary",
  profileBrand: "profile-link-button profile-link-button-brand",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

type ButtonBaseProps = Readonly<{
  variant: ButtonVariant;
  className?: string;
  children: ReactNode;
}>;

type ButtonAsLinkProps = ButtonBaseProps &
  Readonly<{ href: string }> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButtonProps = ButtonBaseProps &
  Readonly<{ href?: never }> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({ variant, className, children, ...rest }: ButtonAsLinkProps | ButtonAsButtonProps) {
  const finalClassName = className ? `${buttonVariants[variant]} ${className}` : buttonVariants[variant];

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as ButtonAsLinkProps;

    // Internal routes use the client-side navigation, everything else stays a plain link.
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={finalClassName} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={finalClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButtonProps;

  return (
    <button type={type} className={finalClassName} {...buttonProps}>
      {children}
    </button>
  );
}
