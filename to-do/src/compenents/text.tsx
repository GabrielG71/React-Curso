import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const TextVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
    defaultVariant: {
      variant: "body-md",
    },
  },
});

interface TextProps extends VariantProps<typeof TextVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: TextVariants({ variant, className }),
      ...props,
    },
    children
  );
}
