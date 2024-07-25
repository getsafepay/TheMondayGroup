import { mergeClasses } from "@/helpers/mergeClasses";
import { ColumnProps, ScreenSize } from "./types";
import { forwardRef } from "react";

function truncateDecimalsIfWhole(num: number): number {
  return num % 1 === 0 ? Math.trunc(num) : +num.toFixed(2);
}

function normalizeBasis(num: number): string {
  if (num === 12) return "full";
  return `${num}/12`;
}

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ children, columns, offsets, display, align, justify, className }, ref) => {
    const styles = ["w-full px-3 max-w-full flex-none md:flex-1"];
    if (columns) {
      Object.keys(columns).forEach((key) => {
        const column = columns[key as ScreenSize] ?? 0;
        const maxW = (column / 12) * 100;
        styles.push(key + "basis-" + normalizeBasis(column));
        styles.push(key + "max-w-[" + truncateDecimalsIfWhole(maxW) + "%]");
      });
    }
    if (offsets) {
      Object.keys(offsets).forEach((key) => {
        const ml = ((offsets[key as ScreenSize] ?? 0) / 12) * 100;
        styles.push(key + "ml-[" + truncateDecimalsIfWhole(ml) + "%]");
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

    return (
      <div ref={ref} className={mergeClasses(styles.join(" "), className)}>
        {children}
      </div>
    );
  }
);
