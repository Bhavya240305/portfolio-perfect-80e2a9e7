import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-5 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[88rem] 2xl:px-14",
        className
      )}
    >
      {children}
    </div>
  );
}
