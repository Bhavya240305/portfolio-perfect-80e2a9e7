import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  children,
  className,
  containerClassName,
  id,
  first = false,
  divider = true,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  first?: boolean;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative",
        divider && !first && "section-divider",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
