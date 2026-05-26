import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/10 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.18em]",
        outline:
          "border-border/25 bg-card/30 px-4 py-2.5 text-sm text-foreground sm:px-5 sm:py-3",
        chip: "border-primary/25 bg-transparent px-3 py-1.5 text-xs text-primary sm:text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
