import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
  large = false,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  large?: boolean;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        large ? "glass-card-lg" : "glass-card",
        interactive && "glass-card-interactive",
        className
      )}
    >
      {children}
    </div>
  );
}
