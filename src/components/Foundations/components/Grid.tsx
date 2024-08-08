import { mergeClasses } from "@/helpers/mergeClasses";
import { GridProps, ScreenSize } from "./types";

export function Grid({
  children,
  rowGap,
  colGap,
  display,
  justify,
  align,
  direction,
  className,
}: GridProps) {
  const styles = ["flex flex-wrap mx-auto max-w-[1584px] w-full"];

  if (rowGap) {
    Object.keys(rowGap).forEach((key) => {
      styles.push(key + "gap-y-" + rowGap[key as ScreenSize]);
    });
  }
  if (colGap) {
    Object.keys(colGap).forEach((key) => {
      styles.push(key + "gap-x-" + colGap[key as ScreenSize]);
    });
  }
  if (display) {
    Object.keys(display).forEach((key) => {
      styles.push(key + display[key as ScreenSize]);
    });
  }
  if (justify) {
    Object.keys(justify).forEach((key) => {
      styles.push(key + "justify-" + justify[key as ScreenSize]);
    });
  }
  if (align) {
    Object.keys(align).forEach((key) => {
      styles.push(key + "items-" + align[key as ScreenSize]);
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
