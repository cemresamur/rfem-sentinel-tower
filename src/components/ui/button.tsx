import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "relative overflow-hidden bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--primary-navy))] to-[hsl(var(--primary))] text-primary-foreground font-semibold tracking-wide border-2 border-transparent hover:border-[hsl(var(--glow-neon))] hover:shadow-[0_0_30px_hsl(var(--glow-neon)),inset_0_0_20px_hsl(var(--glow-neon)/0.2)] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        destructive: "relative overflow-hidden bg-gradient-to-r from-red-900 to-destructive text-destructive-foreground font-semibold border-2 border-transparent hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300",
        outline: "border-2 border-primary/40 bg-background/50 backdrop-blur-sm text-foreground font-semibold hover:border-[hsl(var(--glow-neon))] hover:shadow-[0_0_20px_hsl(var(--glow-neon)/0.5),inset_0_0_15px_hsl(var(--glow-neon)/0.1)] hover:bg-primary/5 transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-2 border-transparent hover:border-primary/30 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground border-2 border-transparent hover:border-primary/20 transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
