import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from "react";
import { mergeClasses } from "@/helpers/mergeClasses";
import { ButtonBase } from "./ButtonBase";

interface IconButtonProps {
  variant?: "primary" | "secondary";
  color?: "green" | "black" | "white" | "ghost" | "hulk";
  leftSlot?: ReactElement;
  rightSlot?: ReactElement;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

const baseClasses =
  "inline-flex items-center font-semibold text-lg leading-6 rounded-lg relative justify-center h-12 w-12";

const variantClasses = {
  primary: {
    green:
      "bg-primary-blue text-palette-white border-transparent hover:bg-primary-blue-hover focus-visible:ring-primary-blue",
    black:
      "bg-primary-black text-palette-white border-transparent hover:bg-primary-black-hover focus-visible:ring-primary-black",
    white:
      "bg-white text-primary-black border-transparent hover:bg-primaryWhite-hover focus-visible:ring-primary-black",
    ghost:
      "bg-transparent text-primary-grey border-transparent hover:text-primary-blue focus-visible:ring-primary-blue",
    hulk: "bg-transparent text-primary-black border-transparent hover:text-primary-blue focus-visible:ring-primary-blue",
  },
  secondary: {
    green:
      "bg-transparent text-primary-blue border-secondaryGreenBorder hover:bg-primary-blue hover:text-palette-white focus-visible:ring-primary-blue",
    black:
      "bg-transparent text-primary-black border-secondaryBlackBorder hover:bg-primary-black hover:text-palette-white focus-visible:ring-primary-black",
    white:
      "bg-transparent text-palette-white border-secondaryWhiteBorder hover:bg-white hover:text-primary-black focus-visible:ring-primary-black",
  },
};

const beforeClasses =
  'before:content-[""] before:border before:border-transparent before:rounded-lg before:absolute before:inset-0 before:-m-1.5';

function getDisabledClasses(isDisabled: boolean) {
  return isDisabled
    ? "cursor-not-allowed opacity-50"
    : "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
}

function isIconElement(element: ReactElement) {
  if (React.isValidElement(element)) {
    // @ts-ignore React Portal did not have `displayName` prop, but it is a valid element
    return element.type?.displayName?.endsWith("Icon") ?? false;
  }
  return false;
}

function getIconProps(element: ReactElement, classNames: string) {
  return {
    ...element.props,
    className: mergeClasses(classNames, element.props.className),
  };
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = "primary",
      color = "green",
      leftSlot,
      rightSlot,
      icon,
      isDisabled = false,
      ...props
    },
    ref
  ) => {
    const isLeftSlotIcon = leftSlot && isIconElement(leftSlot);
    const isRightSlotIcon = rightSlot && isIconElement(rightSlot);
    const iconClasses = mergeClasses(
      isLeftSlotIcon || isRightSlotIcon ? "mr-2" : "",
      "opacity-60"
    );

    const buttonClasses = mergeClasses(
      baseClasses,
      beforeClasses,
      variantClasses[variant][
        color as keyof (typeof variantClasses)[typeof variant]
      ], // Type assertion here
      getDisabledClasses(isDisabled),
      isDisabled && "cursor-default opacity-80 pointer-event-none"
    );

    const content = (
      <>
        {isLeftSlotIcon
          ? cloneElement(leftSlot, getIconProps(leftSlot, iconClasses))
          : leftSlot}
        {isRightSlotIcon
          ? cloneElement(rightSlot, getIconProps(rightSlot, iconClasses))
          : rightSlot}
      </>
    );

    return (
      <ButtonBase
        className={buttonClasses}
        disabled={isDisabled}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        {...props}
      >
        {content}
      </ButtonBase>
    );
  }
);

IconButton.displayName = "IconButton";
