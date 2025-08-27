import React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

export const ButtonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer transition group",
  {
    variants: {
      variant: {
        primary: "bg-green-300 hover:bg-green-700",
        secondary: "bg-pink-300 hover:bg-pink-700",
        terciary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

export const ButtonIconIconVariants = cva("", {
  variants: {
    variant: {
      primary: "fill-white",
      secondary: "fill-pink-400 group-hover:fill-white",
      terciary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface ButtonIconProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof ButtonIconVariants> {
  icon?: React.ComponentProps<typeof Icon>;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={ButtonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        svg={icon}
        className={ButtonIconIconVariants({
          variant,
          size,
        })}
      ></Icon>
    </button>
  );
}
