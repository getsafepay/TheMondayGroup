import React, { ForwardedRef, forwardRef } from "react";
import { mergeClasses } from "@/helpers/mergeClasses";
import { ButtonBase } from "./ButtonBase";
interface NavigationButtonProps {
  variant?: "secondary" | "tertiary" | "tertiary-small";
  isActive?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const baseClasses =
  "font-heading inline-flex items-center text-primary-black leading-6 relative transition-shadow";

const variantClasses = {
  secondary: {
    base: 'focus-visible:ring-primary-blue align-top h-12 before:content-[""] before:absolute before:border-2 before:border-transparent before:rounded-md before:bottom-0.5 before:top-0.5 before:-left-1 before:-right-1',
    active:
      "shadow-[inset_0_-3px] shadow-primary-blue hover:shadow-[inset_0_-3px] hover:shadow-primary-blue",
    hover: "hover:shadow-[inset_0_-3px] hover:shadow-primary-grey",
    focus: "focus-visible:shadow-[inset_0_-3px_#83dfa8]",
  },
  tertiary: {
    base: 'py-3 px-6 w-full before:content-[""] before:absolute before:border-2 before:border-transparent before:rounded-md before:bottom-0 before:top-0 before:left-0 before:right-0',
    active:
      "shadow-[inset_3px_0] shadow-primary-blue hover:shadow-[inset_3px_0] hover:shadow-primary-blue",
    hover: "hover:shadow-[inset_3px_0] hover:shadow-primary-grey",
    focus: "focus-visible:shadow-[inset_3px_0_#83dfa8]",
  },
  "tertiary-small": {
    base: 'text-sm font-normal leading-6 py-0 px-3 before:content-[""] before:absolute before:border-2 before:border-transparent before:rounded-md before:bottom-0 before:top-0 before:left-0 before:right-0',
    active:
      "shadow-[inset_3px_0] shadow-primary-blue hover:shadow-[inset_3px_0] hover:shadow-primary-blue",
    hover: "hover:shadow-[inset_3px_0] hover:shadow-primary-grey",
    focus: "focus-visible:shadow-[inset_3px_0_#83dfa8]",
  },
};

function getDisabledClasses(isDisabled: boolean) {
  return isDisabled
    ? "cursor-not-allowed opacity-50"
    : "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
}

export const NavigationButton = forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(
  (
    {
      variant = "secondary",
      isActive = false,
      isDisabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const variantClass = variantClasses[variant];

    const buttonClasses = mergeClasses(
      baseClasses,
      variantClass.base,
      !isDisabled && variantClass.hover,
      isActive && variantClass.active,
      getDisabledClasses(isDisabled),
      className
    );

    return (
      <ButtonBase
        ref={ref as ForwardedRef<HTMLButtonElement>}
        disabled={isDisabled}
        className={buttonClasses}
        {...props}
      >
        {children}
      </ButtonBase>
    );
  }
);

NavigationButton.displayName = "NavigationButton";
