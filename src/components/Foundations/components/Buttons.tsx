import { mergeClasses } from "@/helpers/mergeClasses";
import { ButtonWrapperProps, ScreenSize } from "./types";

export function ButtonWrapper({
  children,
  align,
  justify,
  direction,
  className,
}: ButtonWrapperProps) {
  const styles = [
    "flex items-start gap-3 md:gap-3 flex-col md:items-center md:flex-row",
  ];

  if (align) {
    Object.keys(align).forEach((key) => {
      styles.push(key + "items-" + align[key as ScreenSize]);
    });
  }

  if (justify) {
    Object.keys(justify).forEach((key) => {
      styles.push(key + "justify-" + justify[key as ScreenSize]);
    });
  }

  if (direction) {
    Object.keys(direction).forEach((key) => {
      styles.push(key + "flex-" + direction[key as ScreenSize]);
    });
  }

  return (
    <div className={mergeClasses(styles.join(" "), className)}>{children}</div>
  );
}
