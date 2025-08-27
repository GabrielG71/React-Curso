import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const BadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-300",
        secondary: "bg-pink-300",
      },
      size: {
        sm: "py-0.5 px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const BadgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-700",
      secondary: "text-pink-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof BadgeVariants> {}

export default function Badge({
  variant,
  size,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={BadgeVariants({ variant, size, className })} {...props}>
      <Text className={BadgeTextVariants({ variant })}>{children}</Text>
    </div>
  );
}
