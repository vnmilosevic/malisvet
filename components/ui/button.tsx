import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--forest-700)] px-5 py-3 text-white shadow-[0_15px_30px_rgba(33,55,37,0.22)] hover:bg-[color:var(--forest-800)]",
        outline:
          "border border-[color:var(--sand-300)] bg-white/10 px-5 py-3 text-[color:var(--stone-900)] backdrop-blur hover:bg-white/20",
        ghost:
          "px-4 py-2 text-[color:var(--stone-900)] hover:bg-[color:var(--sand-100)]",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-6 py-4 text-base",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
