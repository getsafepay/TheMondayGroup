import { mergeClasses } from "@/helpers/mergeClasses";
import { ExpandProps, ScreenSize } from "./types";

export function Expand({ children, mb, mt, className }: ExpandProps) {
  const styles = ["w-full h-full"];
  if (mb) {
    Object.keys(mb).forEach((key) => {
      styles.push(key + "mb-" + mb[key as ScreenSize]);
    });
  }
  if (mt) {
    Object.keys(mt).forEach((key) => {
      styles.push(key + "mt-" + mt[key as ScreenSize]);
    });
  }
  return (
    <div className={mergeClasses(styles.join(" "), className)}>{children}</div>
  );
}
