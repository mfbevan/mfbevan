import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-xl", {
  variants: {
    variant: {
      h1: "lg: scroll-m-20 text-4xl text-5xl font-extrabold tracking-tight",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      // p: "leading-7",
      p: "text-md",
    },
    effect: {
      default: "",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      tiny: "text-xs text-muted-foreground",
      removePMargin: "[&:not(:first-child)]:mt-0",
    },
  },
  defaultVariants: {
    variant: "p",
    effect: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, effect, ...props }, ref) => {
    const Comp = variant || "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, effect, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "H1";

export { Typography, typographyVariants };
