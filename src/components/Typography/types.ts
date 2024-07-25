import { HTMLAttributes } from "react";

export type Size = "" | "xs" | "sm" | "md" | "lg" | "xl";
export type Color = "default" | "white" | "grey" | "primary" | "danger";
export type Alignment = "left" | "center" | "right";
export type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingSizes =
  | "heading-xs"
  | "heading-sm"
  | "heading-base"
  | "heading-lg"
  | "heading-xl"
  | "heading-2xl"
  | "heading-3xl"
  | "heading-4xl"
  | "heading-xl"
  | "heading-5xl";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  tag: Headings;
  size?: string;
  color?: Color;
  alignment?: Alignment;
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  size?: string;
  color?: Color;
  alignment?: Alignment;
};

export type FontStyles = {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
};

export const colors = {
  default: "text-primary-black",
  primary: "text-primary-blue",
  white: "text-primary-white",
  grey: "text-secondary-grey",
  danger: "text-palette-red3",
};

export const alignments = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};
