import clsx from "clsx";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLElement> &
  Readonly<{
    as?: "div" | "section" | "header" | "footer" | "article";
  }>;

/** The site-wide content column: 72rem of content plus the side gutter. */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return <Tag className={clsx("mx-auto box-content max-w-6xl px-4 sm:px-6", className)} {...props} />;
}

/** Content column with the vertical rhythm shared by every inner page. */
export function PageShell({ className, ...props }: ContainerProps) {
  return <Container className={clsx("pt-24 pb-20 sm:pt-32 sm:pb-24 md:pb-40", className)} {...props} />;
}
