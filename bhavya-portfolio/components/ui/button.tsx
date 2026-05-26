import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [@media(hover:hover)]:hover:enabled:scale-[1.02] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "cta-primary",
        outline:
          "border border-border/25 bg-card/40 text-foreground backdrop-blur [@media(hover:hover)]:hover:border-primary/30 [@media(hover:hover)]:hover:bg-card/70",
        ghost:
          "text-foreground/90 [@media(hover:hover)]:hover:bg-card/40",
        secondary:
          "border border-border/20 bg-card/50 text-foreground backdrop-blur [@media(hover:hover)]:hover:border-border/35 [@media(hover:hover)]:hover:bg-card/70",
      },
      size: {
        default: "min-h-11 px-6 py-2.5 sm:px-8",
        sm: "min-h-10 px-4 py-2 text-xs sm:text-sm",
        lg: "min-h-12 px-8 py-3.5 text-base sm:min-h-[3.25rem] sm:px-10",
        icon: "h-11 w-11 shrink-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
