import React, { ForwardedRef, forwardRef } from "react";
import { LinkBase, LinkBaseProps } from "./LinkBase";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import { ButtonBaseProps } from "./ButtonBase";
import { mergeClasses } from "@/helpers/mergeClasses";

type LinkButtonProps = ButtonBaseProps &
  LinkBaseProps & {
    variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
    color?: "blue" | "black" | "white" | "black-blue" | "white-blue";
    leftIcon?: boolean;
    rightIcon?: boolean;
    isDisabled?: boolean;
    href?: string;
    openInNewTab?: boolean;
    children?: React.ReactNode;
    className?: string;
  };

const baseClasses =
  "font-heading group inline-flex items-center text-base rounded-lg leading-6 relative whitespace-nowrap cursor-pointer";

const variantClasses = {
  primary: {
    blue: "text-primary-blue transition duration-150 ease-out hover:text-primary-blue-hover focus-visible:ring-primary-blue",
    black:
      "text-primary-black transition duration-150 ease-out hover:text-primary-black-hover focus-visible:ring-primary-black",
    white:
      "text-primary-white transition duration-150 ease-out hover:text-primary-white-hover focus-visible:ring-primaryWhite",
    "black-blue":
      "text-primary-black transition duration-150 ease-out hover:text-primary-blue focus-visible:ring-primary-blue",
    "white-blue":
      "text-white transition duration-150 ease-out hover:text-primary-blue focus-visible:ring-primary-blue",
  },
  secondary: {
    blue: "text-primary-blue transition duration-150 ease-out hover:underline focus-visible:ring-primary-blue",
    black:
      "text-primary-black transition duration-150 ease-out hover:underline focus-visible:ring-primary-black",
    white:
      "text-white transition duration-150 ease-out hover:underline focus-visible:ring-primaryWhite",
    "black-blue":
      "text-primary-black transition duration-150 ease-out hover:text-primary-blue hover:underline focus-visible:ring-primary-blue",
    "white-blue":
      "text-white transition duration-150 ease-out hover:text-primary-blue hover:underline focus-visible:ring-primary-blue",
  },
  tertiary: {
    blue: "text-primary-blue transition duration-150 ease-out hover:underline focus-visible:ring-primary-blue",
    black:
      "text-primary-black transition duration-150 ease-out hover:underline focus-visible:ring-primary-black",
    white:
      "text-white transition duration-150 ease-out hover:underline focus-visible:ring-primaryWhite",
    "black-blue":
      "text-primary-black transition duration-150 ease-out hover:text-primary-blue hover:underline focus-visible:ring-primary-blue",
    "white-blue":
      "text-white transition duration-150 ease-out hover:text-primary-blue hover:underline focus-visible:ring-primary-blue",
  },
  quaternary: {
    blue: "text-primary-blue underline transition duration-150 ease-out hover:text-primary-blue-hover focus-visible:ring-primary-blue",
    black:
      "text-primary-black underline transition duration-150 ease-out hover:text-primary-black-hover focus-visible:ring-primary-black",
    white:
      "text-white underline transition duration-150 ease-out hover:text-primaryWhite-hover focus-visible:ring-primaryWhite",
    "black-blue":
      "text-primary-black underline transition duration-150 ease-out hover:text-primary-blue focus-visible:ring-primary-blue",
    "white-blue":
      "text-white underline transition duration-150 ease-out hover:text-primary-blue focus-visible:ring-primary-blue",
  },
  quinary: {
    blue: "text-primary-blue transition duration-150 ease-out hover:text-primary-blue-hover focus-visible:ring-primary-blue",
    black:
      "text-primary-black transition duration-150 ease-out hover:text-primary-black-hover focus-visible:ring-primary-black",
    white:
      "text-white transition duration-150 ease-out hover:text-primaryWhite-hover focus-visible:ring-primaryWhite",
    "black-blue":
      "text-primary-black transition duration-150 ease-out hover:text-primary-blue focus-visible:ring-primary-blue",
    "white-blue":
      "text-white transition duration-150 ease-out hover:text-primary-blue focus-visible:ring-primary-blue",
  },
};

const chevronClasses = {
  chevronRight: "ml-2 transition-all duration-150 ease-out",
  chevronRightHover: "group-hover:transform group-hover:translate-x-0.5",
  chevronLeft: "mr-2 transition-all duration-150 ease-out",
  chevronLeftHover: "group-hover:transform group-hover:-translate-x-0.5",
};

function getDisabledClasses(isDisabled: boolean) {
  return isDisabled
    ? "cursor-not-allowed opacity-50"
    : "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
}

export const LinkButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  LinkButtonProps
>(
  (
    {
      variant = "primary",
      color = "blue",
      leftIcon = false,
      rightIcon = false,
      isDisabled = false,
      href,
      openInNewTab = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const buttonClasses = mergeClasses(
      baseClasses,
      variantClasses[variant][
        color as keyof (typeof variantClasses)[typeof variant]
      ],
      getDisabledClasses(isDisabled),
      className
    );

    const leftChevronClasses = mergeClasses(
      chevronClasses.chevronLeft,
      chevronClasses.chevronLeftHover
    );

    const rightChevronClasses = mergeClasses(
      chevronClasses.chevronRight,
      chevronClasses.chevronRightHover
    );

    const content = (
      <>
        {leftIcon && (
          <ChevronLeftIcon size={"16px"} className={leftChevronClasses} />
        )}
        {children && <span className="text-inherit">{children}</span>}
        {rightIcon && (
          <ChevronRightIcon size={"16px"} className={rightChevronClasses} />
        )}
      </>
    );

    return (
      <LinkBase
        href={href}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        openInNewTab={openInNewTab}
        disabled={isDisabled}
        className={buttonClasses}
        {...props}
      >
        {content}
      </LinkBase>
    );
  }
);

LinkButton.displayName = "LinkButton";
