import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-bold tracking-wider uppercase transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-tech",
  {
    variants: {
      variant: {
        default: "border-primary/50 bg-gradient-to-r from-navy to-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--glow-primary)/0.5)] hover:shadow-[0_0_25px_hsl(var(--glow-neon)/0.7)] hover:border-glow-neon",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-destructive/50 bg-gradient-to-r from-red-900 to-destructive text-destructive-foreground shadow-[0_0_15px_rgba(239,68,68,0.5)]",
        outline: "text-foreground border-primary/40 shadow-[0_0_10px_hsl(var(--glow-primary)/0.3)] hover:border-glow-neon hover:shadow-[0_0_20px_hsl(var(--glow-neon)/0.6)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
