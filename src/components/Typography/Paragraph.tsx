"use client";
import { mergeClasses } from "@/helpers/mergeClasses";
import { ParagraphProps, alignments, colors } from "./types";

export function Paragraph({
  children,
  size,
  color,
  alignment,
  className,
}: ParagraphProps) {
  const styles = ["text-base whitespace-pre-line"];
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
    <p className={mergeClasses(styles.join(" "), className)}>{children}</p>
  );
}
