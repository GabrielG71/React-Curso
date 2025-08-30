import React from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { TextVariants } from "./text";

export const InputTextVariants = cva(
  "border-b border-solid border-gray-200 focus:border-pink-300 bg-transparent outline-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

interface InputTextProps
  extends VariantProps<typeof InputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      className={cx(
        InputTextVariants({ size, disabled }),
        TextVariants(),
        className
      )}
      {...props}
    />
  );
}
