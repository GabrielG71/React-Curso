import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const CardVariants = cva("", {
  variants: {
    size: {
      none: "",
      md: "p-5",
    },
  },
  defaultVariants: {
    size: "none",
  },
});

interface CardProps
  extends VariantProps<typeof CardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  className,
  size,
  children,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: CardVariants({ size, className }),
      ...props,
    },
    children
  );
}
