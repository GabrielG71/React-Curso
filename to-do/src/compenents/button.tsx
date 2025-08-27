import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import Text from "./text";

export const ButtonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2",
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-200",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opcaity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-500",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-400",
    },
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof ButtonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconCompponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={ButtonVariants({ variant, size, disabled, className })}
      {...props}
    >
      {IconCompponent && (
        <Icon
          svg={IconCompponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
