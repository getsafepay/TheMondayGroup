import { mergeClasses } from "@/helpers/mergeClasses";
import { ContainerProps, ScreenSize } from "./types";
import { forwardRef } from "react";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, pb, pt }, ref) => {
    const styles = [
      // small screens
      "w-[calc(100%-24px)] min-w-[270px] max-w-[1944px] px-0 mx-3",
      // medium screens
      "md:w-[calc(100%-48px)] md:px-9 md:mx-6",
      // xl screens
      "xl:w-[calc(100%-48px)] xl:px-[84px] xl:mx-6",
      // 2xl screens
      "2xl:mx-auto",
    ];

    if (pt) {
      Object.keys(pt).forEach((key) => {
        styles.push(key + "pt-" + pt[key as ScreenSize]);
      });
    }

    if (pb) {
      Object.keys(pb).forEach((key) => {
        styles.push(key + "pb-" + pb[key as ScreenSize]);
      });
    }

    return (
      <div ref={ref} className={mergeClasses(styles.join(" "), className)}>
        {children}
      </div>
    );
  }
);
