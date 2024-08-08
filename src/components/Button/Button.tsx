import React, {
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from "react";
import { mergeClasses } from "@/helpers/mergeClasses";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { LinkBase, LinkBaseProps } from "./LinkBase";

type ButtonProps = ButtonBaseProps &
  LinkBaseProps & {
    variant?: "primary" | "secondary";
    color?: "blue" | "black" | "white" | "grey";
    leftSlot?: ReactElement;
    rightSlot?: ReactElement;
    iconPosition?: "left" | "right";
    icon?: React.ReactNode;
    href?: string;
    openInNewTab?: boolean;
    children: React.ReactNode;
    isDisabled?: boolean;
  };

const baseClasses =
  "font-heading inline-flex items-center justify-center border leading-6 rounded-lg relative h-12 px-6 transition-all";

const variantClasses = {
  primary: {
    blue: "bg-primary-blue text-palette-white border-transparent hover:bg-primary-blue-hover focus-visible:ring-primary-blue",
    black:
      "bg-primary-black text-palette-white border-transparent hover:bg-primary-black-hover focus-visible:ring-primary-black",
    white:
      "bg-white text-primary-black border-transparent hover:bg-primaryWhiteHover focus-visible:ring-primary-black",
    grey: "bg-primaryGrey text-gray-500 border-transparent hover:bg-primaryGreyHover focus-visible:ring-primaryGrey",
  },
  secondary: {
    blue: "bg-transparent text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-palette-white focus-visible:ring-primary-blue",
    black:
      "bg-transparent text-primary-black border-primary-black hover:bg-primary-black hover:text-palette-white focus-visible:ring-primary-black",
    white:
      "bg-transparent text-palette-white border-primary-white hover:bg-white hover:text-primary-black focus-visible:ring-primary-black",
  },
};

const beforeClasses =
  'before:content-[""] before:border before:border-transparent before:rounded-lg before:absolute before:inset-0 before:-m-1.5';

function getDisabledClasses(isDisabled: boolean) {
  return isDisabled
    ? "cursor-not-allowed opacity-50"
    : "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
}

function getIconClasses(iconPosition: "left" | "right" | undefined) {
  return iconPosition === "left" ? "mr-2" : "ml-2";
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

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = "primary",
      color = "blue",
      leftSlot,
      rightSlot,
      iconPosition,
      icon,
      href,
      className,
      openInNewTab = false,
      isDisabled = false,
      ...props
    },
    ref
  ) => {
    const isLeftSlotIcon = leftSlot && isIconElement(leftSlot);
    const isRightSlotIcon = rightSlot && isIconElement(rightSlot);
    const iconClasses = mergeClasses(
      isLeftSlotIcon || isRightSlotIcon ? getIconClasses(iconPosition) : "",
      "opacity-60"
    );

    const isSingleIconButton = (leftSlot || rightSlot) && !children;

    const buttonClasses = mergeClasses(
      baseClasses,
      beforeClasses,
      variantClasses[variant][
        color as keyof (typeof variantClasses)[typeof variant]
      ], // Type assertion here
      getDisabledClasses(isDisabled),
      isSingleIconButton && "px-0 w-10 justify-center items-center",
      isDisabled && "cursor-default opacity-80 pointer-event-none",
      className
    );

    const content = (
      <>
        {isLeftSlotIcon
          ? cloneElement(leftSlot, getIconProps(leftSlot, iconClasses))
          : leftSlot}
        {children && (
          <span className="flex self-center text-inherit leading-none">
            {children}
          </span>
        )}
        {isRightSlotIcon
          ? cloneElement(rightSlot, getIconProps(rightSlot, iconClasses))
          : rightSlot}
      </>
    );

    if (href) {
      return (
        <LinkBase
          href={href}
          className={buttonClasses}
          disabled={isDisabled}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          openInNewTab={openInNewTab}
          {...props}
        >
          {content}
        </LinkBase>
      );
    } else {
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
  }
);

Button.displayName = "Button";
