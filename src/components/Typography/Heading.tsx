"use client";
import { mergeClasses } from "@/helpers/mergeClasses";
import { HeadingProps, alignments, colors } from "./types";

export function Heading({
  children,
  tag: Wrapper,
  size,
  color,
  alignment,
  className,
}: HeadingProps) {
  const styles = ["leading-10"];
  if (size) {
    styles.push(size);
  }

  if (color) {
    styles.push(colors[color]);
  }

  if (alignment) {
    styles.push(alignments[alignment]);
  }

  return (
    <Wrapper className={mergeClasses(styles.join(" "), className)}>
      {children}
    </Wrapper>
  );
}
