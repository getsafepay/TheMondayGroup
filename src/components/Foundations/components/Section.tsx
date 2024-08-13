import { mergeClasses } from "@/helpers/mergeClasses";
import { HTMLAttributes } from "react";
import { Colors, ScreenSize, stickStyles } from "./types";

type Spacing = {
  pt?: boolean;
  pb?: boolean;
};

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  bg: Colors;
  withMedia?: boolean;
  sticky?: { [key in ScreenSize]?: boolean };
} & Spacing;

export function Section({
  children,
  className,
  bg,
  withMedia,
  sticky,
  pt,
  pb,
}: SectionProps) {
  let styles = [];
  switch (bg) {
    case "light":
      styles.push("bg-white");
      break;
    case "grey":
      styles.push("bg-primary-grey");
      break;
    case "dark":
      styles.push("bg-primary-black");
      break;
    case "primary":
      styles.push("bg-primary-blue");
      break;
    case "transparent":
      styles.push("bg-transparent");
      break;
  }

  if (withMedia) {
    styles.push("min-h-[192px]");
  }

  if (pt) {
    styles.push("pt-12 md:pt-24");
  }
  if (pb) {
    styles.push("pb-12 md:pb-24");
  }
  if (sticky) {
    Object.keys(sticky).forEach((key) => {
      if (sticky[key as ScreenSize]) {
        styles.push(stickStyles[key as ScreenSize]);
      }
    });
  }

  return (
    <section className={mergeClasses(styles.join(" "), className)}>
      {children}
    </section>
  );
}
