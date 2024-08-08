import { DetailedHTMLProps, HTMLAttributes } from "react";

export type ScreenSize = "" | "sm:" | "md:" | "xl:" | "2xl:";

export type Column = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Display = "flex" | "block" | "";

export type Direction = "col" | "col-reverse" | "row" | "row-reverse";

export type Colors = "light" | "grey" | "dark" | "primary" | "transparent";

export type ColumnStyles = { [key in ScreenSize]?: Column };

export type Alignment =
  | "center"
  | "stretch"
  | "between"
  | "end"
  | "start"
  | "around";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  pb?: { [key in ScreenSize]?: number };
  pt?: { [key in ScreenSize]?: number };
};

export type ExpandProps = HTMLAttributes<HTMLDivElement> & {
  mb?: { [key in ScreenSize]?: number };
  mt?: { [key in ScreenSize]?: number };
};

export type ButtonWrapperProps = HTMLAttributes<HTMLDivElement> & {
  align?: { [key in ScreenSize]?: Alignment };
  justify?: { [key in ScreenSize]?: Alignment };
  direction?: { [key in ScreenSize]?: Direction };
};

export type GridProps = HTMLAttributes<HTMLDivElement> & {
  rowGap?: { [key in ScreenSize]?: Column };
  colGap?: { [key in ScreenSize]?: Column };
  display?: { [key in ScreenSize]?: Display };
  justify?: { [key in ScreenSize]?: Alignment };
  align?: { [key in ScreenSize]?: Alignment };
  direction?: { [key in ScreenSize]?: Direction };
};

export type ColumnProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  columns?: { [key in ScreenSize]?: Column };
  offsets?: { [key in ScreenSize]?: Column };
  display?: { [key in ScreenSize]?: Display };
  align?: { [key in ScreenSize]?: Alignment };
  justify?: { [key in ScreenSize]?: Alignment };
};

export const stickStyles = {
  "": "w-full self-start sticky -top-[1px] z-10",
  "sm:": "sm:w-full sm:self-start sm:sticky sm:-top-[1px] sm:z-10",
  "md:": "md:w-full md:self-start md:sticky md:-top-[1px] md:z-10",
  "lg:": "lg:w-full lg:self-start lg:sticky lg:-top-[1px] lg:z-10",
  "xl:": "xl:w-full xl:self-start xl:sticky xl:-top-[1px] xl:z-10",
  "2xl:": "2xl:w-full 2xl:self-start 2xl:sticky 2xl:-top-[1px] 2xl:z-10",
};

export const directionStyles = {
  col: "flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col",
  row: "flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row",
  "col-reverse":
    "flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-col-reverse xl:flex-col-reverse 2xl:flex-col-reverse",
  "row-reverse":
    "flex-row-reverse sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse",
};

export const columnStyles = {
  0: "basis-0 sm:basis-0 md:basis-0 lg:basis-0 xl:basis-0 2xl:basis-0",
  1: "basis-1/12 sm:basis-1/12 md:basis-1/12 lg:basis-1/12 xl:basis-1/12 2xl:basis-1/12",
  2: "basis-2/12 sm:basis-2/12 md:basis-2/12 lg:basis-2/12 xl:basis-2/12 2xl:basis-2/12",
  3: "basis-3/12 sm:basis-3/12 md:basis-3/12 lg:basis-3/12 xl:basis-3/12 2xl:basis-3/12",
  4: "basis-4/12 sm:basis-4/12 md:basis-4/12 lg:basis-4/12 xl:basis-4/12 2xl:basis-4/12",
  5: "basis-5/12 sm:basis-5/12 md:basis-5/12 lg:basis-5/12 xl:basis-5/12 2xl:basis-5/12",
  6: "basis-6/12 sm:basis-6/12 md:basis-6/12 lg:basis-6/12 xl:basis-6/12 2xl:basis-6/12",
  7: "basis-7/12 sm:basis-7/12 md:basis-7/12 lg:basis-7/12 xl:basis-7/12 2xl:basis-7/12",
  8: "basis-8/12 sm:basis-8/12 md:basis-8/12 lg:basis-8/12 xl:basis-8/12 2xl:basis-8/12",
  9: "basis-9/12 sm:basis-9/12 md:basis-9/12 lg:basis-9/12 xl:basis-9/12 2xl:basis-9/12",
  10: "basis-10/12 sm:basis-10/12 md:basis-10/12 lg:basis-10/12 xl:basis-10/12 2xl:basis-10/12",
  11: "basis-11/12 sm:basis-11/12 md:basis-11/12 lg:basis-11/12 xl:basis-11/12 2xl:basis-11/12",
  12: "basis-full sm:basis-full md:basis-full lg:basis-full xl:basis-full 2xl:basis-full",
};

export const widthStyles = {
  0: "max-w-[0%] sm:max-w-[0%] md:max-w-[0%] lg:max-w-[0%] xl:max-w-[0%] 2xl:max-w-[0%]",
  1: "max-w-[8.33%] sm:max-w-[8.33%] md:max-w-[8.33%] lg:max-w-[8.33%] xl:max-w-[8.33%] 2xl:max-w-[8.33%]",
  2: "max-w-[16.67%] sm:max-w-[16.67%] md:max-w-[16.67%] lg:max-w-[16.67%] xl:max-w-[16.67%] 2xl:max-w-[16.67%]",
  3: "max-w-[25%] sm:max-w-[25%] md:max-w-[25%] lg:max-w-[25%] xl:max-w-[25%] 2xl:max-w-[25%]",
  4: "max-w-[33.33] sm:max-w-[33.33] md:max-w-[33.33] lg:max-w-[33.33] xl:max-w-[33.33] 2xl:max-w-[33.33]",
  5: "max-w-[41.67%] sm:max-w-[41.67%] md:max-w-[41.67%] lg:max-w-[41.67%] xl:max-w-[41.67%] 2xl:max-w-[41.67%]",
  6: "max-w-[50%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[50%]",
  7: "max-w-[58.33%] sm:max-w-[58.33%] md:max-w-[58.33%] lg:max-w-[58.33%] xl:max-w-[58.33%] 2xl:max-w-[58.33%]",
  8: "max-w-[66.67%] sm:max-w-[66.67%] md:max-w-[66.67%] lg:max-w-[66.67%] xl:max-w-[66.67%] 2xl:max-w-[66.67%]",
  9: "max-w-[75%] sm:max-w-[75%] md:max-w-[75%] lg:max-w-[75%] xl:max-w-[75%] 2xl:max-w-[75%]",
  10: "max-w-[83.33%] sm:max-w-[83.33%] md:max-w-[83.33%] lg:max-w-[83.33%] xl:max-w-[83.33%] 2xl:max-w-[83.33%]",
  11: "max-w-[91.67%] sm:max-w-[91.67%] md:max-w-[91.67%] lg:max-w-[91.67%] xl:max-w-[91.67%] 2xl:max-w-[91.67%]",
  12: "max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%]",
};

export const offsetStyles = {
  0: "ml-[0%] sm:ml-[0%] md:ml-[0%] lg:ml-[0%] xl:ml-[0%] 2xl:ml-[0%]",
  1: "ml-[8.33%] sm:ml-[8.33%] md:ml-[8.33%] lg:ml-[8.33%] xl:ml-[8.33%] 2xl:ml-[8.33%]",
  2: "ml-[16.67%] sm:ml-[16.67%] md:ml-[16.67%] lg:ml-[16.67%] xl:ml-[16.67%] 2xl:ml-[16.67%]",
  3: "ml-[25%] sm:ml-[25%] md:ml-[25%] lg:ml-[25%] xl:ml-[25%] 2xl:ml-[25%]",
  4: "ml-[33.33%] sm:ml-[33.33%] md:ml-[33.33%] lg:ml-[33.33%] xl:ml-[33.33%] 2xl:ml-[33.33%]",
  5: "ml-[41.67%] sm:ml-[41.67%] md:ml-[41.67%] lg:ml-[41.67%] xl:ml-[41.67%] 2xl:ml-[41.67%]",
  6: "ml-[50%] sm:ml-[50%] md:ml-[50%] lg:ml-[50%] xl:ml-[50%] 2xl:ml-[50%]",
  7: "ml-[58.33%] sm:ml-[58.33%] md:ml-[58.33%] lg:ml-[58.33%] xl:ml-[58.33%] 2xl:ml-[58.33%]",
  8: "ml-[66.67%] sm:ml-[66.67%] md:ml-[66.67%] lg:ml-[66.67%] xl:ml-[66.67%] 2xl:ml-[66.67%]",
  9: "ml-[75%] sm:ml-[75%] md:ml-[75%] lg:ml-[75%] xl:ml-[75%] 2xl:ml-[75%]",
  10: "ml-[83.33%] sm:ml-[83.33%] md:ml-[83.33%] lg:ml-[83.33%] xl:ml-[83.33%] 2xl:ml-[83.33%]",
  11: "ml-[91.67%] sm:ml-[91.67%] md:ml-[91.67%] lg:ml-[91.67%] xl:ml-[91.67%] 2xl:ml-[91.67%]",
  12: "ml-[100%] sm:ml-[100%] md:ml-[100%] lg:ml-[100%] xl:ml-[100%] 2xl:ml-[100%]",
};

export const displayStyles = {
  flex: "flex sm:flex md:flex lg:flex xl:flex 2xl:flex",
  block: "block sm:block md:block lg:block xl:block 2xl:block",
};

export const justifyStyles = {
  center:
    "justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center 2xl:justify-center",
  stretch:
    "justify-stretch sm:justify-stretch md:justify-stretch lg:justify-stretch xl:justify-stretch 2xl:justify-stretch",
  between:
    "justify-between sm:justify-between md:justify-between lg:justify-between xl:justify-between 2xl:justify-between",
  end: "justify-end sm:justify-end md:justify-end lg:justify-end xl:justify-end 2xl:justify-end",
  start:
    "justify-start sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start",
  around:
    "justify-around sm:justify-around md:justify-around lg:justify-around xl:justify-around 2xl:justify-around",
};

export const alignStyles = {
  center:
    "items-center sm:items-center md:items-center lg:items-center xl:items-center 2xl:items-center",
  stretch:
    "items-stretch sm:items-stretch md:items-stretch lg:items-stretch xl:items-stretch 2xl:items-stretch",
  between:
    "items-between sm:items-between md:items-between lg:items-between xl:items-between 2xl:items-between",
  end: "items-end sm:items-end md:items-end lg:items-end xl:items-end 2xl:items-end",
  start:
    "items-start sm:items-start md:items-start lg:items-start xl:items-start 2xl:items-start",
  around:
    "items-around sm:items-around md:items-around lg:items-around xl:items-around 2xl:items-around",
};

export const colGapStyles: { [key: number]: string } = {
  0: "gap-x-0 sm:gap-x-0 md:gap-x-0 lg:gap-x-0 xl:gap-x-0 2xl:gap-x-0",
  0.5: "gap-x-0.5 sm:gap-x-0.5 md:gap-x-0.5 lg:gap-x-0.5 xl:gap-x-0.5 2xl:gap-x-0.5",
  1: "gap-x-1 sm:gap-x-1 md:gap-x-1 lg:gap-x-1 xl:gap-x-1 2xl:gap-x-1",
  1.5: "gap-x-1.5 sm:gap-x-1.5 md:gap-x-1.5 lg:gap-x-1.5 xl:gap-x-1.5 2xl:gap-x-1.5",
  2: "gap-x-2 sm:gap-x-2 md:gap-x-2 lg:gap-x-2 xl:gap-x-2 2xl:gap-x-2",
  2.5: "gap-x-2.5 sm:gap-x-2.5 md:gap-x-2.5 lg:gap-x-2.5 xl:gap-x-2.5 2xl:gap-x-2.5",
  3: "gap-x-3 sm:gap-x-3 md:gap-x-3 lg:gap-x-3 xl:gap-x-3 2xl:gap-x-3",
  3.5: "gap-x-3.5 sm:gap-x-3.5 md:gap-x-3.5 lg:gap-x-3.5 xl:gap-x-3.5 2xl:gap-x-3.5",
  4: "gap-x-4 sm:gap-x-4 md:gap-x-4 lg:gap-x-4 xl:gap-x-4 2xl:gap-x-4",
  5: "gap-x-5 sm:gap-x-5 md:gap-x-5 lg:gap-x-5 xl:gap-x-5 2xl:gap-x-5",
  6: "gap-x-6 sm:gap-x-6 md:gap-x-6 lg:gap-x-6 xl:gap-x-6 2xl:gap-x-6",
  7: "gap-x-7 sm:gap-x-7 md:gap-x-7 lg:gap-x-7 xl:gap-x-7 2xl:gap-x-7",
  8: "gap-x-8 sm:gap-x-8 md:gap-x-8 lg:gap-x-8 xl:gap-x-8 2xl:gap-x-8",
  9: "gap-x-9 sm:gap-x-9 md:gap-x-9 lg:gap-x-9 xl:gap-x-9 2xl:gap-x-9",
  10: "gap-x-10 sm:gap-x-10 md:gap-x-10 lg:gap-x-10 xl:gap-x-10 2xl:gap-x-10",
  11: "gap-x-11 sm:gap-x-11 md:gap-x-11 lg:gap-x-11 xl:gap-x-11 2xl:gap-x-11",
  12: "gap-x-12 sm:gap-x-12 md:gap-x-12 lg:gap-x-12 xl:gap-x-12 2xl:gap-x-12",
  14: "gap-x-14 sm:gap-x-14 md:gap-x-14 lg:gap-x-14 xl:gap-x-14 2xl:gap-x-14",
  16: "gap-x-16 sm:gap-x-16 md:gap-x-16 lg:gap-x-16 xl:gap-x-16 2xl:gap-x-16",
  20: "gap-x-20 sm:gap-x-20 md:gap-x-20 lg:gap-x-20 xl:gap-x-20 2xl:gap-x-20",
  24: "gap-x-24 sm:gap-x-24 md:gap-x-24 lg:gap-x-24 xl:gap-x-24 2xl:gap-x-24",
  28: "gap-x-28 sm:gap-x-28 md:gap-x-28 lg:gap-x-28 xl:gap-x-28 2xl:gap-x-28",
  32: "gap-x-32 sm:gap-x-32 md:gap-x-32 lg:gap-x-32 xl:gap-x-32 2xl:gap-x-32",
  36: "gap-x-36 sm:gap-x-36 md:gap-x-36 lg:gap-x-36 xl:gap-x-36 2xl:gap-x-36",
  40: "gap-x-40 sm:gap-x-40 md:gap-x-40 lg:gap-x-40 xl:gap-x-40 2xl:gap-x-40",
  44: "gap-x-44 sm:gap-x-44 md:gap-x-44 lg:gap-x-44 xl:gap-x-44 2xl:gap-x-44",
  48: "gap-x-48 sm:gap-x-48 md:gap-x-48 lg:gap-x-48 xl:gap-x-48 2xl:gap-x-48",
  52: "gap-x-52 sm:gap-x-52 md:gap-x-52 lg:gap-x-52 xl:gap-x-52 2xl:gap-x-52",
  56: "gap-x-56 sm:gap-x-56 md:gap-x-56 lg:gap-x-56 xl:gap-x-56 2xl:gap-x-56",
  60: "gap-x-60 sm:gap-x-60 md:gap-x-60 lg:gap-x-60 xl:gap-x-60 2xl:gap-x-60",
  64: "gap-x-64 sm:gap-x-64 md:gap-x-64 lg:gap-x-64 xl:gap-x-64 2xl:gap-x-64",
  72: "gap-x-72 sm:gap-x-72 md:gap-x-72 lg:gap-x-72 xl:gap-x-72 2xl:gap-x-72",
  80: "gap-x-80 sm:gap-x-80 md:gap-x-80 lg:gap-x-80 xl:gap-x-80 2xl:gap-x-80",
  96: "gap-x-96 sm:gap-x-96 md:gap-x-96 lg:gap-x-96 xl:gap-x-96 2xl:gap-x-96",
};

export const rowGapStyles: { [key: number]: string } = {
  0: "gap-y-0 sm:gap-y-0 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 2xl:gap-y-0",
  0.5: "gap-y-0.5 sm:gap-y-0.5 md:gap-y-0.5 lg:gap-y-0.5 xl:gap-y-0.5 2xl:gap-y-0.5",
  1: "gap-y-1 sm:gap-y-1 md:gap-y-1 lg:gap-y-1 xl:gap-y-1 2xl:gap-y-1",
  1.5: "gap-y-1.5 sm:gap-y-1.5 md:gap-y-1.5 lg:gap-y-1.5 xl:gap-y-1.5 2xl:gap-y-1.5",
  2: "gap-y-2 sm:gap-y-2 md:gap-y-2 lg:gap-y-2 xl:gap-y-2 2xl:gap-y-2",
  2.5: "gap-y-2.5 sm:gap-y-2.5 md:gap-y-2.5 lg:gap-y-2.5 xl:gap-y-2.5 2xl:gap-y-2.5",
  3: "gap-y-3 sm:gap-y-3 md:gap-y-3 lg:gap-y-3 xl:gap-y-3 2xl:gap-y-3",
  3.5: "gap-y-3.5 sm:gap-y-3.5 md:gap-y-3.5 lg:gap-y-3.5 xl:gap-y-3.5 2xl:gap-y-3.5",
  4: "gap-y-4 sm:gap-y-4 md:gap-y-4 lg:gap-y-4 xl:gap-y-4 2xl:gap-y-4",
  5: "gap-y-5 sm:gap-y-5 md:gap-y-5 lg:gap-y-5 xl:gap-y-5 2xl:gap-y-5",
  6: "gap-y-6 sm:gap-y-6 md:gap-y-6 lg:gap-y-6 xl:gap-y-6 2xl:gap-y-6",
  7: "gap-y-7 sm:gap-y-7 md:gap-y-7 lg:gap-y-7 xl:gap-y-7 2xl:gap-y-7",
  8: "gap-y-8 sm:gap-y-8 md:gap-y-8 lg:gap-y-8 xl:gap-y-8 2xl:gap-y-8",
  9: "gap-y-9 sm:gap-y-9 md:gap-y-9 lg:gap-y-9 xl:gap-y-9 2xl:gap-y-9",
  10: "gap-y-10 sm:gap-y-10 md:gap-y-10 lg:gap-y-10 xl:gap-y-10 2xl:gap-y-10",
  11: "gap-y-11 sm:gap-y-11 md:gap-y-11 lg:gap-y-11 xl:gap-y-11 2xl:gap-y-11",
  12: "gap-y-12 sm:gap-y-12 md:gap-y-12 lg:gap-y-12 xl:gap-y-12 2xl:gap-y-12",
  14: "gap-y-14 sm:gap-y-14 md:gap-y-14 lg:gap-y-14 xl:gap-y-14 2xl:gap-y-14",
  16: "gap-y-16 sm:gap-y-16 md:gap-y-16 lg:gap-y-16 xl:gap-y-16 2xl:gap-y-16",
  20: "gap-y-20 sm:gap-y-20 md:gap-y-20 lg:gap-y-20 xl:gap-y-20 2xl:gap-y-20",
  24: "gap-y-24 sm:gap-y-24 md:gap-y-24 lg:gap-y-24 xl:gap-y-24 2xl:gap-y-24",
  28: "gap-y-28 sm:gap-y-28 md:gap-y-28 lg:gap-y-28 xl:gap-y-28 2xl:gap-y-28",
  32: "gap-y-32 sm:gap-y-32 md:gap-y-32 lg:gap-y-32 xl:gap-y-32 2xl:gap-y-32",
  36: "gap-y-36 sm:gap-y-36 md:gap-y-36 lg:gap-y-36 xl:gap-y-36 2xl:gap-y-36",
  40: "gap-y-40 sm:gap-y-40 md:gap-y-40 lg:gap-y-40 xl:gap-y-40 2xl:gap-y-40",
  44: "gap-y-44 sm:gap-y-44 md:gap-y-44 lg:gap-y-44 xl:gap-y-44 2xl:gap-y-44",
  48: "gap-y-48 sm:gap-y-48 md:gap-y-48 lg:gap-y-48 xl:gap-y-48 2xl:gap-y-48",
  52: "gap-y-52 sm:gap-y-52 md:gap-y-52 lg:gap-y-52 xl:gap-y-52 2xl:gap-y-52",
  56: "gap-y-56 sm:gap-y-56 md:gap-y-56 lg:gap-y-56 xl:gap-y-56 2xl:gap-y-56",
  60: "gap-y-60 sm:gap-y-60 md:gap-y-60 lg:gap-y-60 xl:gap-y-60 2xl:gap-y-60",
  64: "gap-y-64 sm:gap-y-64 md:gap-y-64 lg:gap-y-64 xl:gap-y-64 2xl:gap-y-64",
  72: "gap-y-72 sm:gap-y-72 md:gap-y-72 lg:gap-y-72 xl:gap-y-72 2xl:gap-y-72",
  80: "gap-y-80 sm:gap-y-80 md:gap-y-80 lg:gap-y-80 xl:gap-y-80 2xl:gap-y-80",
  96: "gap-y-96 sm:gap-y-96 md:gap-y-96 lg:gap-y-96 xl:gap-y-96 2xl:gap-y-96",
};

export const mlStyles: { [key: number]: string } = {
  0: "ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0",
  0.5: "ml-0.5 sm:ml-0.5 md:ml-0.5 lg:ml-0.5 xl:ml-0.5 2xl:ml-0.5",
  1: "ml-1 sm:ml-1 md:ml-1 lg:ml-1 xl:ml-1 2xl:ml-1",
  1.5: "ml-1.5 sm:ml-1.5 md:ml-1.5 lg:ml-1.5 xl:ml-1.5 2xl:ml-1.5",
  2: "ml-2 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2 2xl:ml-2",
  2.5: "ml-2.5 sm:ml-2.5 md:ml-2.5 lg:ml-2.5 xl:ml-2.5 2xl:ml-2.5",
  3: "ml-3 sm:ml-3 md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3",
  3.5: "ml-3.5 sm:ml-3.5 md:ml-3.5 lg:ml-3.5 xl:ml-3.5 2xl:ml-3.5",
  4: "ml-4 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 2xl:ml-4",
  5: "ml-5 sm:ml-5 md:ml-5 lg:ml-5 xl:ml-5 2xl:ml-5",
  6: "ml-6 sm:ml-6 md:ml-6 lg:ml-6 xl:ml-6 2xl:ml-6",
  7: "ml-7 sm:ml-7 md:ml-7 lg:ml-7 xl:ml-7 2xl:ml-7",
  8: "ml-8 sm:ml-8 md:ml-8 lg:ml-8 xl:ml-8 2xl:ml-8",
  9: "ml-9 sm:ml-9 md:ml-9 lg:ml-9 xl:ml-9 2xl:ml-9",
  10: "ml-10 sm:ml-10 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-10",
  11: "ml-11 sm:ml-11 md:ml-11 lg:ml-11 xl:ml-11 2xl:ml-11",
  12: "ml-12 sm:ml-12 md:ml-12 lg:ml-12 xl:ml-12 2xl:ml-12",
  14: "ml-14 sm:ml-14 md:ml-14 lg:ml-14 xl:ml-14 2xl:ml-14",
  16: "ml-16 sm:ml-16 md:ml-16 lg:ml-16 xl:ml-16 2xl:ml-16",
  20: "ml-20 sm:ml-20 md:ml-20 lg:ml-20 xl:ml-20 2xl:ml-20",
  24: "ml-24 sm:ml-24 md:ml-24 lg:ml-24 xl:ml-24 2xl:ml-24",
  28: "ml-28 sm:ml-28 md:ml-28 lg:ml-28 xl:ml-28 2xl:ml-28",
  32: "ml-32 sm:ml-32 md:ml-32 lg:ml-32 xl:ml-32 2xl:ml-32",
  36: "ml-36 sm:ml-36 md:ml-36 lg:ml-36 xl:ml-36 2xl:ml-36",
  40: "ml-40 sm:ml-40 md:ml-40 lg:ml-40 xl:ml-40 2xl:ml-40",
  44: "ml-44 sm:ml-44 md:ml-44 lg:ml-44 xl:ml-44 2xl:ml-44",
  48: "ml-48 sm:ml-48 md:ml-48 lg:ml-48 xl:ml-48 2xl:ml-48",
  52: "ml-52 sm:ml-52 md:ml-52 lg:ml-52 xl:ml-52 2xl:ml-52",
  56: "ml-56 sm:ml-56 md:ml-56 lg:ml-56 xl:ml-56 2xl:ml-56",
  60: "ml-60 sm:ml-60 md:ml-60 lg:ml-60 xl:ml-60 2xl:ml-60",
  64: "ml-64 sm:ml-64 md:ml-64 lg:ml-64 xl:ml-64 2xl:ml-64",
  72: "ml-72 sm:ml-72 md:ml-72 lg:ml-72 xl:ml-72 2xl:ml-72",
  80: "ml-80 sm:ml-80 md:ml-80 lg:ml-80 xl:ml-80 2xl:ml-80",
  96: "ml-96 sm:ml-96 md:ml-96 lg:ml-96 xl:ml-96 2xl:ml-96",
};

export const mtStyles: { [key: number]: string } = {
  0: "mt-0 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0",
  0.5: "mt-0.5 sm:mt-0.5 md:mt-0.5 lg:mt-0.5 xl:mt-0.5 2xl:mt-0.5",
  1: "mt-1 sm:mt-1 md:mt-1 lg:mt-1 xl:mt-1 2xl:mt-1",
  1.5: "mt-1.5 sm:mt-1.5 md:mt-1.5 lg:mt-1.5 xl:mt-1.5 2xl:mt-1.5",
  2: "mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-2",
  2.5: "mt-2.5 sm:mt-2.5 md:mt-2.5 lg:mt-2.5 xl:mt-2.5 2xl:mt-2.5",
  3: "mt-3 sm:mt-3 md:mt-3 lg:mt-3 xl:mt-3 2xl:mt-3",
  3.5: "mt-3.5 sm:mt-3.5 md:mt-3.5 lg:mt-3.5 xl:mt-3.5 2xl:mt-3.5",
  4: "mt-4 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4",
  5: "mt-5 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5",
  6: "mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6",
  7: "mt-7 sm:mt-7 md:mt-7 lg:mt-7 xl:mt-7 2xl:mt-7",
  8: "mt-8 sm:mt-8 md:mt-8 lg:mt-8 xl:mt-8 2xl:mt-8",
  9: "mt-9 sm:mt-9 md:mt-9 lg:mt-9 xl:mt-9 2xl:mt-9",
  10: "mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10",
  11: "mt-11 sm:mt-11 md:mt-11 lg:mt-11 xl:mt-11 2xl:mt-11",
  12: "mt-12 sm:mt-12 md:mt-12 lg:mt-12 xl:mt-12 2xl:mt-12",
  14: "mt-14 sm:mt-14 md:mt-14 lg:mt-14 xl:mt-14 2xl:mt-14",
  16: "mt-16 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-16",
  20: "mt-20 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20",
  24: "mt-24 sm:mt-24 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24",
  28: "mt-28 sm:mt-28 md:mt-28 lg:mt-28 xl:mt-28 2xl:mt-28",
  32: "mt-32 sm:mt-32 md:mt-32 lg:mt-32 xl:mt-32 2xl:mt-32",
  36: "mt-36 sm:mt-36 md:mt-36 lg:mt-36 xl:mt-36 2xl:mt-36",
  40: "mt-40 sm:mt-40 md:mt-40 lg:mt-40 xl:mt-40 2xl:mt-40",
  44: "mt-44 sm:mt-44 md:mt-44 lg:mt-44 xl:mt-44 2xl:mt-44",
  48: "mt-48 sm:mt-48 md:mt-48 lg:mt-48 xl:mt-48 2xl:mt-48",
  52: "mt-52 sm:mt-52 md:mt-52 lg:mt-52 xl:mt-52 2xl:mt-52",
  56: "mt-56 sm:mt-56 md:mt-56 lg:mt-56 xl:mt-56 2xl:mt-56",
  60: "mt-60 sm:mt-60 md:mt-60 lg:mt-60 xl:mt-60 2xl:mt-60",
  64: "mt-64 sm:mt-64 md:mt-64 lg:mt-64 xl:mt-64 2xl:mt-64",
  72: "mt-72 sm:mt-72 md:mt-72 lg:mt-72 xl:mt-72 2xl:mt-72",
  80: "mt-80 sm:mt-80 md:mt-80 lg:mt-80 xl:mt-80 2xl:mt-80",
  96: "mt-96 sm:mt-96 md:mt-96 lg:mt-96 xl:mt-96 2xl:mt-96",
};

export const mrStyles: { [key: number]: string } = {
  0: "mr-0 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0",
  0.5: "mr-0.5 sm:mr-0.5 md:mr-0.5 lg:mr-0.5 xl:mr-0.5 2xl:mr-0.5",
  1: "mr-1 sm:mr-1 md:mr-1 lg:mr-1 xl:mr-1 2xl:mr-1",
  1.5: "mr-1.5 sm:mr-1.5 md:mr-1.5 lg:mr-1.5 xl:mr-1.5 2xl:mr-1.5",
  2: "mr-2 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-2 2xl:mr-2",
  2.5: "mr-2.5 sm:mr-2.5 md:mr-2.5 lg:mr-2.5 xl:mr-2.5 2xl:mr-2.5",
  3: "mr-3 sm:mr-3 md:mr-3 lg:mr-3 xl:mr-3 2xl:mr-3",
  3.5: "mr-3.5 sm:mr-3.5 md:mr-3.5 lg:mr-3.5 xl:mr-3.5 2xl:mr-3.5",
  4: "mr-4 sm:mr-4 md:mr-4 lg:mr-4 xl:mr-4 2xl:mr-4",
  5: "mr-5 sm:mr-5 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5",
  6: "mr-6 sm:mr-6 md:mr-6 lg:mr-6 xl:mr-6 2xl:mr-6",
  7: "mr-7 sm:mr-7 md:mr-7 lg:mr-7 xl:mr-7 2xl:mr-7",
  8: "mr-8 sm:mr-8 md:mr-8 lg:mr-8 xl:mr-8 2xl:mr-8",
  9: "mr-9 sm:mr-9 md:mr-9 lg:mr-9 xl:mr-9 2xl:mr-9",
  10: "mr-10 sm:mr-10 md:mr-10 lg:mr-10 xl:mr-10 2xl:mr-10",
  11: "mr-11 sm:mr-11 md:mr-11 lg:mr-11 xl:mr-11 2xl:mr-11",
  12: "mr-12 sm:mr-12 md:mr-12 lg:mr-12 xl:mr-12 2xl:mr-12",
  14: "mr-14 sm:mr-14 md:mr-14 lg:mr-14 xl:mr-14 2xl:mr-14",
  16: "mr-16 sm:mr-16 md:mr-16 lg:mr-16 xl:mr-16 2xl:mr-16",
  20: "mr-20 sm:mr-20 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20",
  24: "mr-24 sm:mr-24 md:mr-24 lg:mr-24 xl:mr-24 2xl:mr-24",
  28: "mr-28 sm:mr-28 md:mr-28 lg:mr-28 xl:mr-28 2xl:mr-28",
  32: "mr-32 sm:mr-32 md:mr-32 lg:mr-32 xl:mr-32 2xl:mr-32",
  36: "mr-36 sm:mr-36 md:mr-36 lg:mr-36 xl:mr-36 2xl:mr-36",
  40: "mr-40 sm:mr-40 md:mr-40 lg:mr-40 xl:mr-40 2xl:mr-40",
  44: "mr-44 sm:mr-44 md:mr-44 lg:mr-44 xl:mr-44 2xl:mr-44",
  48: "mr-48 sm:mr-48 md:mr-48 lg:mr-48 xl:mr-48 2xl:mr-48",
  52: "mr-52 sm:mr-52 md:mr-52 lg:mr-52 xl:mr-52 2xl:mr-52",
  56: "mr-56 sm:mr-56 md:mr-56 lg:mr-56 xl:mr-56 2xl:mr-56",
  60: "mr-60 sm:mr-60 md:mr-60 lg:mr-60 xl:mr-60 2xl:mr-60",
  64: "mr-64 sm:mr-64 md:mr-64 lg:mr-64 xl:mr-64 2xl:mr-64",
  72: "mr-72 sm:mr-72 md:mr-72 lg:mr-72 xl:mr-72 2xl:mr-72",
  80: "mr-80 sm:mr-80 md:mr-80 lg:mr-80 xl:mr-80 2xl:mr-80",
  96: "mr-96 sm:mr-96 md:mr-96 lg:mr-96 xl:mr-96 2xl:mr-96",
};

export const mbStyles: { [key: number]: string } = {
  0: "mb-0 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0",
  0.5: "mb-0.5 sm:mb-0.5 md:mb-0.5 lg:mb-0.5 xl:mb-0.5 2xl:mb-0.5",
  1: "mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-1",
  1.5: "mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-1.5 xl:mb-1.5 2xl:mb-1.5",
  2: "mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2",
  2.5: "mb-2.5 sm:mb-2.5 md:mb-2.5 lg:mb-2.5 xl:mb-2.5 2xl:mb-2.5",
  3: "mb-3 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3",
  3.5: "mb-3.5 sm:mb-3.5 md:mb-3.5 lg:mb-3.5 xl:mb-3.5 2xl:mb-3.5",
  4: "mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4",
  5: "mb-5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-5 2xl:mb-5",
  6: "mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6",
  7: "mb-7 sm:mb-7 md:mb-7 lg:mb-7 xl:mb-7 2xl:mb-7",
  8: "mb-8 sm:mb-8 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8",
  9: "mb-9 sm:mb-9 md:mb-9 lg:mb-9 xl:mb-9 2xl:mb-9",
  10: "mb-10 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10 2xl:mb-10",
  11: "mb-11 sm:mb-11 md:mb-11 lg:mb-11 xl:mb-11 2xl:mb-11",
  12: "mb-12 sm:mb-12 md:mb-12 lg:mb-12 xl:mb-12 2xl:mb-12",
  14: "mb-14 sm:mb-14 md:mb-14 lg:mb-14 xl:mb-14 2xl:mb-14",
  16: "mb-16 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-16 2xl:mb-16",
  20: "mb-20 sm:mb-20 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20",
  24: "mb-24 sm:mb-24 md:mb-24 lg:mb-24 xl:mb-24 2xl:mb-24",
  28: "mb-28 sm:mb-28 md:mb-28 lg:mb-28 xl:mb-28 2xl:mb-28",
  32: "mb-32 sm:mb-32 md:mb-32 lg:mb-32 xl:mb-32 2xl:mb-32",
  36: "mb-36 sm:mb-36 md:mb-36 lg:mb-36 xl:mb-36 2xl:mb-36",
  40: "mb-40 sm:mb-40 md:mb-40 lg:mb-40 xl:mb-40 2xl:mb-40",
  44: "mb-44 sm:mb-44 md:mb-44 lg:mb-44 xl:mb-44 2xl:mb-44",
  48: "mb-48 sm:mb-48 md:mb-48 lg:mb-48 xl:mb-48 2xl:mb-48",
  52: "mb-52 sm:mb-52 md:mb-52 lg:mb-52 xl:mb-52 2xl:mb-52",
  56: "mb-56 sm:mb-56 md:mb-56 lg:mb-56 xl:mb-56 2xl:mb-56",
  60: "mb-60 sm:mb-60 md:mb-60 lg:mb-60 xl:mb-60 2xl:mb-60",
  64: "mb-64 sm:mb-64 md:mb-64 lg:mb-64 xl:mb-64 2xl:mb-64",
  72: "mb-72 sm:mb-72 md:mb-72 lg:mb-72 xl:mb-72 2xl:mb-72",
  80: "mb-80 sm:mb-80 md:mb-80 lg:mb-80 xl:mb-80 2xl:mb-80",
  96: "mb-96 sm:mb-96 md:mb-96 lg:mb-96 xl:mb-96 2xl:mb-96",
};

export const myStyles: { [key: number]: string } = {
  0: "my-0 sm:my-0 md:my-0 lg:my-0 xl:my-0 2xl:my-0",
  0.5: "my-0.5 sm:my-0.5 md:my-0.5 lg:my-0.5 xl:my-0.5 2xl:my-0.5",
  1: "my-1 sm:my-1 md:my-1 lg:my-1 xl:my-1 2xl:my-1",
  1.5: "my-1.5 sm:my-1.5 md:my-1.5 lg:my-1.5 xl:my-1.5 2xl:my-1.5",
  2: "my-2 sm:my-2 md:my-2 lg:my-2 xl:my-2 2xl:my-2",
  2.5: "my-2.5 sm:my-2.5 md:my-2.5 lg:my-2.5 xl:my-2.5 2xl:my-2.5",
  3: "my-3 sm:my-3 md:my-3 lg:my-3 xl:my-3 2xl:my-3",
  3.5: "my-3.5 sm:my-3.5 md:my-3.5 lg:my-3.5 xl:my-3.5 2xl:my-3.5",
  4: "my-4 sm:my-4 md:my-4 lg:my-4 xl:my-4 2xl:my-4",
  5: "my-5 sm:my-5 md:my-5 lg:my-5 xl:my-5 2xl:my-5",
  6: "my-6 sm:my-6 md:my-6 lg:my-6 xl:my-6 2xl:my-6",
  7: "my-7 sm:my-7 md:my-7 lg:my-7 xl:my-7 2xl:my-7",
  8: "my-8 sm:my-8 md:my-8 lg:my-8 xl:my-8 2xl:my-8",
  9: "my-9 sm:my-9 md:my-9 lg:my-9 xl:my-9 2xl:my-9",
  10: "my-10 sm:my-10 md:my-10 lg:my-10 xl:my-10 2xl:my-10",
  11: "my-11 sm:my-11 md:my-11 lg:my-11 xl:my-11 2xl:my-11",
  12: "my-12 sm:my-12 md:my-12 lg:my-12 xl:my-12 2xl:my-12",
  14: "my-14 sm:my-14 md:my-14 lg:my-14 xl:my-14 2xl:my-14",
  16: "my-16 sm:my-16 md:my-16 lg:my-16 xl:my-16 2xl:my-16",
  20: "my-20 sm:my-20 md:my-20 lg:my-20 xl:my-20 2xl:my-20",
  24: "my-24 sm:my-24 md:my-24 lg:my-24 xl:my-24 2xl:my-24",
  28: "my-28 sm:my-28 md:my-28 lg:my-28 xl:my-28 2xl:my-28",
  32: "my-32 sm:my-32 md:my-32 lg:my-32 xl:my-32 2xl:my-32",
  36: "my-36 sm:my-36 md:my-36 lg:my-36 xl:my-36 2xl:my-36",
  40: "my-40 sm:my-40 md:my-40 lg:my-40 xl:my-40 2xl:my-40",
  44: "my-44 sm:my-44 md:my-44 lg:my-44 xl:my-44 2xl:my-44",
  48: "my-48 sm:my-48 md:my-48 lg:my-48 xl:my-48 2xl:my-48",
  52: "my-52 sm:my-52 md:my-52 lg:my-52 xl:my-52 2xl:my-52",
  56: "my-56 sm:my-56 md:my-56 lg:my-56 xl:my-56 2xl:my-56",
  60: "my-60 sm:my-60 md:my-60 lg:my-60 xl:my-60 2xl:my-60",
  64: "my-64 sm:my-64 md:my-64 lg:my-64 xl:my-64 2xl:my-64",
  72: "my-72 sm:my-72 md:my-72 lg:my-72 xl:my-72 2xl:my-72",
  80: "my-80 sm:my-80 md:my-80 lg:my-80 xl:my-80 2xl:my-80",
  96: "my-96 sm:my-96 md:my-96 lg:my-96 xl:my-96 2xl:my-96",
};

export const mxStyles: { [key: number]: string } = {
  0: "mx-0 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0",
  0.5: "mx-0.5 sm:mx-0.5 md:mx-0.5 lg:mx-0.5 xl:mx-0.5 2xl:mx-0.5",
  1: "mx-1 sm:mx-1 md:mx-1 lg:mx-1 xl:mx-1 2xl:mx-1",
  1.5: "mx-1.5 sm:mx-1.5 md:mx-1.5 lg:mx-1.5 xl:mx-1.5 2xl:mx-1.5",
  2: "mx-2 sm:mx-2 md:mx-2 lg:mx-2 xl:mx-2 2xl:mx-2",
  2.5: "mx-2.5 sm:mx-2.5 md:mx-2.5 lg:mx-2.5 xl:mx-2.5 2xl:mx-2.5",
  3: "mx-3 sm:mx-3 md:mx-3 lg:mx-3 xl:mx-3 2xl:mx-3",
  3.5: "mx-3.5 sm:mx-3.5 md:mx-3.5 lg:mx-3.5 xl:mx-3.5 2xl:mx-3.5",
  4: "mx-4 sm:mx-4 md:mx-4 lg:mx-4 xl:mx-4 2xl:mx-4",
  5: "mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5 2xl:mx-5",
  6: "mx-6 sm:mx-6 md:mx-6 lg:mx-6 xl:mx-6 2xl:mx-6",
  7: "mx-7 sm:mx-7 md:mx-7 lg:mx-7 xl:mx-7 2xl:mx-7",
  8: "mx-8 sm:mx-8 md:mx-8 lg:mx-8 xl:mx-8 2xl:mx-8",
  9: "mx-9 sm:mx-9 md:mx-9 lg:mx-9 xl:mx-9 2xl:mx-9",
  10: "mx-10 sm:mx-10 md:mx-10 lg:mx-10 xl:mx-10 2xl:mx-10",
  11: "mx-11 sm:mx-11 md:mx-11 lg:mx-11 xl:mx-11 2xl:mx-11",
  12: "mx-12 sm:mx-12 md:mx-12 lg:mx-12 xl:mx-12 2xl:mx-12",
  14: "mx-14 sm:mx-14 md:mx-14 lg:mx-14 xl:mx-14 2xl:mx-14",
  16: "mx-16 sm:mx-16 md:mx-16 lg:mx-16 xl:mx-16 2xl:mx-16",
  20: "mx-20 sm:mx-20 md:mx-20 lg:mx-20 xl:mx-20 2xl:mx-20",
  24: "mx-24 sm:mx-24 md:mx-24 lg:mx-24 xl:mx-24 2xl:mx-24",
  28: "mx-28 sm:mx-28 md:mx-28 lg:mx-28 xl:mx-28 2xl:mx-28",
  32: "mx-32 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-32 2xl:mx-32",
  36: "mx-36 sm:mx-36 md:mx-36 lg:mx-36 xl:mx-36 2xl:mx-36",
  40: "mx-40 sm:mx-40 md:mx-40 lg:mx-40 xl:mx-40 2xl:mx-40",
  44: "mx-44 sm:mx-44 md:mx-44 lg:mx-44 xl:mx-44 2xl:mx-44",
  48: "mx-48 sm:mx-48 md:mx-48 lg:mx-48 xl:mx-48 2xl:mx-48",
  52: "mx-52 sm:mx-52 md:mx-52 lg:mx-52 xl:mx-52 2xl:mx-52",
  56: "mx-56 sm:mx-56 md:mx-56 lg:mx-56 xl:mx-56 2xl:mx-56",
  60: "mx-60 sm:mx-60 md:mx-60 lg:mx-60 xl:mx-60 2xl:mx-60",
  64: "mx-64 sm:mx-64 md:mx-64 lg:mx-64 xl:mx-64 2xl:mx-64",
  72: "mx-72 sm:mx-72 md:mx-72 lg:mx-72 xl:mx-72 2xl:mx-72",
  80: "mx-80 sm:mx-80 md:mx-80 lg:mx-80 xl:mx-80 2xl:mx-80",
  96: "mx-96 sm:mx-96 md:mx-96 lg:mx-96 xl:mx-96 2xl:mx-96",
};

export const pxStyles: { [key: number]: string } = {
  0: "px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0",
  0.5: "px-0.5 sm:px-0.5 md:px-0.5 lg:px-0.5 xl:px-0.5 2xl:px-0.5",
  1: "px-1 sm:px-1 md:px-1 lg:px-1 xl:px-1 2xl:px-1",
  1.5: "px-1.5 sm:px-1.5 md:px-1.5 lg:px-1.5 xl:px-1.5 2xl:px-1.5",
  2: "px-2 sm:px-2 md:px-2 lg:px-2 xl:px-2 2xl:px-2",
  2.5: "px-2.5 sm:px-2.5 md:px-2.5 lg:px-2.5 xl:px-2.5 2xl:px-2.5",
  3: "px-3 sm:px-3 md:px-3 lg:px-3 xl:px-3 2xl:px-3",
  3.5: "px-3.5 sm:px-3.5 md:px-3.5 lg:px-3.5 xl:px-3.5 2xl:px-3.5",
  4: "px-4 sm:px-4 md:px-4 lg:px-4 xl:px-4 2xl:px-4",
  5: "px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 2xl:px-5",
  6: "px-6 sm:px-6 md:px-6 lg:px-6 xl:px-6 2xl:px-6",
  7: "px-7 sm:px-7 md:px-7 lg:px-7 xl:px-7 2xl:px-7",
  8: "px-8 sm:px-8 md:px-8 lg:px-8 xl:px-8 2xl:px-8",
  9: "px-9 sm:px-9 md:px-9 lg:px-9 xl:px-9 2xl:px-9",
  10: "px-10 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10",
  11: "px-11 sm:px-11 md:px-11 lg:px-11 xl:px-11 2xl:px-11",
  12: "px-12 sm:px-12 md:px-12 lg:px-12 xl:px-12 2xl:px-12",
  14: "px-14 sm:px-14 md:px-14 lg:px-14 xl:px-14 2xl:px-14",
  16: "px-16 sm:px-16 md:px-16 lg:px-16 xl:px-16 2xl:px-16",
  20: "px-20 sm:px-20 md:px-20 lg:px-20 xl:px-20 2xl:px-20",
  24: "px-24 sm:px-24 md:px-24 lg:px-24 xl:px-24 2xl:px-24",
  28: "px-28 sm:px-28 md:px-28 lg:px-28 xl:px-28 2xl:px-28",
  32: "px-32 sm:px-32 md:px-32 lg:px-32 xl:px-32 2xl:px-32",
  36: "px-36 sm:px-36 md:px-36 lg:px-36 xl:px-36 2xl:px-36",
  40: "px-40 sm:px-40 md:px-40 lg:px-40 xl:px-40 2xl:px-40",
  44: "px-44 sm:px-44 md:px-44 lg:px-44 xl:px-44 2xl:px-44",
  48: "px-48 sm:px-48 md:px-48 lg:px-48 xl:px-48 2xl:px-48",
  52: "px-52 sm:px-52 md:px-52 lg:px-52 xl:px-52 2xl:px-52",
  56: "px-56 sm:px-56 md:px-56 lg:px-56 xl:px-56 2xl:px-56",
  60: "px-60 sm:px-60 md:px-60 lg:px-60 xl:px-60 2xl:px-60",
  64: "px-64 sm:px-64 md:px-64 lg:px-64 xl:px-64 2xl:px-64",
  72: "px-72 sm:px-72 md:px-72 lg:px-72 xl:px-72 2xl:px-72",
  80: "px-80 sm:px-80 md:px-80 lg:px-80 xl:px-80 2xl:px-80",
  96: "px-96 sm:px-96 md:px-96 lg:px-96 xl:px-96 2xl:px-96",
};

export const pyStyles: { [key: number]: string } = {
  0: "py-0 sm:py-0 md:py-0 lg:py-0 xl:py-0 2xl:py-0",
  0.5: "py-0.5 sm:py-0.5 md:py-0.5 lg:py-0.5 xl:py-0.5 2xl:py-0.5",
  1: "py-1 sm:py-1 md:py-1 lg:py-1 xl:py-1 2xl:py-1",
  1.5: "py-1.5 sm:py-1.5 md:py-1.5 lg:py-1.5 xl:py-1.5 2xl:py-1.5",
  2: "py-2 sm:py-2 md:py-2 lg:py-2 xl:py-2 2xl:py-2",
  2.5: "py-2.5 sm:py-2.5 md:py-2.5 lg:py-2.5 xl:py-2.5 2xl:py-2.5",
  3: "py-3 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-3",
  3.5: "py-3.5 sm:py-3.5 md:py-3.5 lg:py-3.5 xl:py-3.5 2xl:py-3.5",
  4: "py-4 sm:py-4 md:py-4 lg:py-4 xl:py-4 2xl:py-4",
  5: "py-5 sm:py-5 md:py-5 lg:py-5 xl:py-5 2xl:py-5",
  6: "py-6 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-6",
  7: "py-7 sm:py-7 md:py-7 lg:py-7 xl:py-7 2xl:py-7",
  8: "py-8 sm:py-8 md:py-8 lg:py-8 xl:py-8 2xl:py-8",
  9: "py-9 sm:py-9 md:py-9 lg:py-9 xl:py-9 2xl:py-9",
  10: "py-10 sm:py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10",
  11: "py-11 sm:py-11 md:py-11 lg:py-11 xl:py-11 2xl:py-11",
  12: "py-12 sm:py-12 md:py-12 lg:py-12 xl:py-12 2xl:py-12",
  14: "py-14 sm:py-14 md:py-14 lg:py-14 xl:py-14 2xl:py-14",
  16: "py-16 sm:py-16 md:py-16 lg:py-16 xl:py-16 2xl:py-16",
  20: "py-20 sm:py-20 md:py-20 lg:py-20 xl:py-20 2xl:py-20",
  24: "py-24 sm:py-24 md:py-24 lg:py-24 xl:py-24 2xl:py-24",
  28: "py-28 sm:py-28 md:py-28 lg:py-28 xl:py-28 2xl:py-28",
  32: "py-32 sm:py-32 md:py-32 lg:py-32 xl:py-32 2xl:py-32",
  36: "py-36 sm:py-36 md:py-36 lg:py-36 xl:py-36 2xl:py-36",
  40: "py-40 sm:py-40 md:py-40 lg:py-40 xl:py-40 2xl:py-40",
  44: "py-44 sm:py-44 md:py-44 lg:py-44 xl:py-44 2xl:py-44",
  48: "py-48 sm:py-48 md:py-48 lg:py-48 xl:py-48 2xl:py-48",
  52: "py-52 sm:py-52 md:py-52 lg:py-52 xl:py-52 2xl:py-52",
  56: "py-56 sm:py-56 md:py-56 lg:py-56 xl:py-56 2xl:py-56",
  60: "py-60 sm:py-60 md:py-60 lg:py-60 xl:py-60 2xl:py-60",
  64: "py-64 sm:py-64 md:py-64 lg:py-64 xl:py-64 2xl:py-64",
  72: "py-72 sm:py-72 md:py-72 lg:py-72 xl:py-72 2xl:py-72",
  80: "py-80 sm:py-80 md:py-80 lg:py-80 xl:py-80 2xl:py-80",
  96: "py-96 sm:py-96 md:py-96 lg:py-96 xl:py-96 2xl:py-96",
};

export const ptStyles: { [key: number]: string } = {
  0: "pt-0 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0",
  0.5: "pt-0.5 sm:pt-0.5 md:pt-0.5 lg:pt-0.5 xl:pt-0.5 2xl:pt-0.5",
  1: "pt-1 sm:pt-1 md:pt-1 lg:pt-1 xl:pt-1 2xl:pt-1",
  1.5: "pt-1.5 sm:pt-1.5 md:pt-1.5 lg:pt-1.5 xl:pt-1.5 2xl:pt-1.5",
  2: "pt-2 sm:pt-2 md:pt-2 lg:pt-2 xl:pt-2 2xl:pt-2",
  2.5: "pt-2.5 sm:pt-2.5 md:pt-2.5 lg:pt-2.5 xl:pt-2.5 2xl:pt-2.5",
  3: "pt-3 sm:pt-3 md:pt-3 lg:pt-3 xl:pt-3 2xl:pt-3",
  3.5: "pt-3.5 sm:pt-3.5 md:pt-3.5 lg:pt-3.5 xl:pt-3.5 2xl:pt-3.5",
  4: "pt-4 sm:pt-4 md:pt-4 lg:pt-4 xl:pt-4 2xl:pt-4",
  5: "pt-5 sm:pt-5 md:pt-5 lg:pt-5 xl:pt-5 2xl:pt-5",
  6: "pt-6 sm:pt-6 md:pt-6 lg:pt-6 xl:pt-6 2xl:pt-6",
  7: "pt-7 sm:pt-7 md:pt-7 lg:pt-7 xl:pt-7 2xl:pt-7",
  8: "pt-8 sm:pt-8 md:pt-8 lg:pt-8 xl:pt-8 2xl:pt-8",
  9: "pt-9 sm:pt-9 md:pt-9 lg:pt-9 xl:pt-9 2xl:pt-9",
  10: "pt-10 sm:pt-10 md:pt-10 lg:pt-10 xl:pt-10 2xl:pt-10",
  11: "pt-11 sm:pt-11 md:pt-11 lg:pt-11 xl:pt-11 2xl:pt-11",
  12: "pt-12 sm:pt-12 md:pt-12 lg:pt-12 xl:pt-12 2xl:pt-12",
  14: "pt-14 sm:pt-14 md:pt-14 lg:pt-14 xl:pt-14 2xl:pt-14",
  16: "pt-16 sm:pt-16 md:pt-16 lg:pt-16 xl:pt-16 2xl:pt-16",
  20: "pt-20 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-20 2xl:pt-20",
  24: "pt-24 sm:pt-24 md:pt-24 lg:pt-24 xl:pt-24 2xl:pt-24",
  28: "pt-28 sm:pt-28 md:pt-28 lg:pt-28 xl:pt-28 2xl:pt-28",
  32: "pt-32 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-32",
  36: "pt-36 sm:pt-36 md:pt-36 lg:pt-36 xl:pt-36 2xl:pt-36",
  40: "pt-40 sm:pt-40 md:pt-40 lg:pt-40 xl:pt-40 2xl:pt-40",
  44: "pt-44 sm:pt-44 md:pt-44 lg:pt-44 xl:pt-44 2xl:pt-44",
  48: "pt-48 sm:pt-48 md:pt-48 lg:pt-48 xl:pt-48 2xl:pt-48",
  52: "pt-52 sm:pt-52 md:pt-52 lg:pt-52 xl:pt-52 2xl:pt-52",
  56: "pt-56 sm:pt-56 md:pt-56 lg:pt-56 xl:pt-56 2xl:pt-56",
  60: "pt-60 sm:pt-60 md:pt-60 lg:pt-60 xl:pt-60 2xl:pt-60",
  64: "pt-64 sm:pt-64 md:pt-64 lg:pt-64 xl:pt-64 2xl:pt-64",
  72: "pt-72 sm:pt-72 md:pt-72 lg:pt-72 xl:pt-72 2xl:pt-72",
  80: "pt-80 sm:pt-80 md:pt-80 lg:pt-80 xl:pt-80 2xl:pt-80",
  96: "pt-96 sm:pt-96 md:pt-96 lg:pt-96 xl:pt-96 2xl:pt-96",
};

export const prStyles: { [key: number]: string } = {
  0: "pr-0 sm:pr-0 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0",
  0.5: "pr-0.5 sm:pr-0.5 md:pr-0.5 lg:pr-0.5 xl:pr-0.5 2xl:pr-0.5",
  1: "pr-1 sm:pr-1 md:pr-1 lg:pr-1 xl:pr-1 2xl:pr-1",
  1.5: "pr-1.5 sm:pr-1.5 md:pr-1.5 lg:pr-1.5 xl:pr-1.5 2xl:pr-1.5",
  2: "pr-2 sm:pr-2 md:pr-2 lg:pr-2 xl:pr-2 2xl:pr-2",
  2.5: "pr-2.5 sm:pr-2.5 md:pr-2.5 lg:pr-2.5 xl:pr-2.5 2xl:pr-2.5",
  3: "pr-3 sm:pr-3 md:pr-3 lg:pr-3 xl:pr-3 2xl:pr-3",
  3.5: "pr-3.5 sm:pr-3.5 md:pr-3.5 lg:pr-3.5 xl:pr-3.5 2xl:pr-3.5",
  4: "pr-4 sm:pr-4 md:pr-4 lg:pr-4 xl:pr-4 2xl:pr-4",
  5: "pr-5 sm:pr-5 md:pr-5 lg:pr-5 xl:pr-5 2xl:pr-5",
  6: "pr-6 sm:pr-6 md:pr-6 lg:pr-6 xl:pr-6 2xl:pr-6",
  7: "pr-7 sm:pr-7 md:pr-7 lg:pr-7 xl:pr-7 2xl:pr-7",
  8: "pr-8 sm:pr-8 md:pr-8 lg:pr-8 xl:pr-8 2xl:pr-8",
  9: "pr-9 sm:pr-9 md:pr-9 lg:pr-9 xl:pr-9 2xl:pr-9",
  10: "pr-10 sm:pr-10 md:pr-10 lg:pr-10 xl:pr-10 2xl:pr-10",
  11: "pr-11 sm:pr-11 md:pr-11 lg:pr-11 xl:pr-11 2xl:pr-11",
  12: "pr-12 sm:pr-12 md:pr-12 lg:pr-12 xl:pr-12 2xl:pr-12",
  14: "pr-14 sm:pr-14 md:pr-14 lg:pr-14 xl:pr-14 2xl:pr-14",
  16: "pr-16 sm:pr-16 md:pr-16 lg:pr-16 xl:pr-16 2xl:pr-16",
  20: "pr-20 sm:pr-20 md:pr-20 lg:pr-20 xl:pr-20 2xl:pr-20",
  24: "pr-24 sm:pr-24 md:pr-24 lg:pr-24 xl:pr-24 2xl:pr-24",
  28: "pr-28 sm:pr-28 md:pr-28 lg:pr-28 xl:pr-28 2xl:pr-28",
  32: "pr-32 sm:pr-32 md:pr-32 lg:pr-32 xl:pr-32 2xl:pr-32",
  36: "pr-36 sm:pr-36 md:pr-36 lg:pr-36 xl:pr-36 2xl:pr-36",
  40: "pr-40 sm:pr-40 md:pr-40 lg:pr-40 xl:pr-40 2xl:pr-40",
  44: "pr-44 sm:pr-44 md:pr-44 lg:pr-44 xl:pr-44 2xl:pr-44",
  48: "pr-48 sm:pr-48 md:pr-48 lg:pr-48 xl:pr-48 2xl:pr-48",
  52: "pr-52 sm:pr-52 md:pr-52 lg:pr-52 xl:pr-52 2xl:pr-52",
  56: "pr-56 sm:pr-56 md:pr-56 lg:pr-56 xl:pr-56 2xl:pr-56",
  60: "pr-60 sm:pr-60 md:pr-60 lg:pr-60 xl:pr-60 2xl:pr-60",
  64: "pr-64 sm:pr-64 md:pr-64 lg:pr-64 xl:pr-64 2xl:pr-64",
  72: "pr-72 sm:pr-72 md:pr-72 lg:pr-72 xl:pr-72 2xl:pr-72",
  80: "pr-80 sm:pr-80 md:pr-80 lg:pr-80 xl:pr-80 2xl:pr-80",
  96: "pr-96 sm:pr-96 md:pr-96 lg:pr-96 xl:pr-96 2xl:pr-96",
};

export const pbStyles: { [key: number]: string } = {
  0: "pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0",
  0.5: "pb-0.5 sm:pb-0.5 md:pb-0.5 lg:pb-0.5 xl:pb-0.5 2xl:pb-0.5",
  1: "pb-1 sm:pb-1 md:pb-1 lg:pb-1 xl:pb-1 2xl:pb-1",
  1.5: "pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-1.5 xl:pb-1.5 2xl:pb-1.5",
  2: "pb-2 sm:pb-2 md:pb-2 lg:pb-2 xl:pb-2 2xl:pb-2",
  2.5: "pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-2.5 xl:pb-2.5 2xl:pb-2.5",
  3: "pb-3 sm:pb-3 md:pb-3 lg:pb-3 xl:pb-3 2xl:pb-3",
  3.5: "pb-3.5 sm:pb-3.5 md:pb-3.5 lg:pb-3.5 xl:pb-3.5 2xl:pb-3.5",
  4: "pb-4 sm:pb-4 md:pb-4 lg:pb-4 xl:pb-4 2xl:pb-4",
  5: "pb-5 sm:pb-5 md:pb-5 lg:pb-5 xl:pb-5 2xl:pb-5",
  6: "pb-6 sm:pb-6 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6",
  7: "pb-7 sm:pb-7 md:pb-7 lg:pb-7 xl:pb-7 2xl:pb-7",
  8: "pb-8 sm:pb-8 md:pb-8 lg:pb-8 xl:pb-8 2xl:pb-8",
  9: "pb-9 sm:pb-9 md:pb-9 lg:pb-9 xl:pb-9 2xl:pb-9",
  10: "pb-10 sm:pb-10 md:pb-10 lg:pb-10 xl:pb-10 2xl:pb-10",
  11: "pb-11 sm:pb-11 md:pb-11 lg:pb-11 xl:pb-11 2xl:pb-11",
  12: "pb-12 sm:pb-12 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12",
  14: "pb-14 sm:pb-14 md:pb-14 lg:pb-14 xl:pb-14 2xl:pb-14",
  16: "pb-16 sm:pb-16 md:pb-16 lg:pb-16 xl:pb-16 2xl:pb-16",
  20: "pb-20 sm:pb-20 md:pb-20 lg:pb-20 xl:pb-20 2xl:pb-20",
  24: "pb-24 sm:pb-24 md:pb-24 lg:pb-24 xl:pb-24 2xl:pb-24",
  28: "pb-28 sm:pb-28 md:pb-28 lg:pb-28 xl:pb-28 2xl:pb-28",
  32: "pb-32 sm:pb-32 md:pb-32 lg:pb-32 xl:pb-32 2xl:pb-32",
  36: "pb-36 sm:pb-36 md:pb-36 lg:pb-36 xl:pb-36 2xl:pb-36",
  40: "pb-40 sm:pb-40 md:pb-40 lg:pb-40 xl:pb-40 2xl:pb-40",
  44: "pb-44 sm:pb-44 md:pb-44 lg:pb-44 xl:pb-44 2xl:pb-44",
  48: "pb-48 sm:pb-48 md:pb-48 lg:pb-48 xl:pb-48 2xl:pb-48",
  52: "pb-52 sm:pb-52 md:pb-52 lg:pb-52 xl:pb-52 2xl:pb-52",
  56: "pb-56 sm:pb-56 md:pb-56 lg:pb-56 xl:pb-56 2xl:pb-56",
  60: "pb-60 sm:pb-60 md:pb-60 lg:pb-60 xl:pb-60 2xl:pb-60",
  64: "pb-64 sm:pb-64 md:pb-64 lg:pb-64 xl:pb-64 2xl:pb-64",
  72: "pb-72 sm:pb-72 md:pb-72 lg:pb-72 xl:pb-72 2xl:pb-72",
  80: "pb-80 sm:pb-80 md:pb-80 lg:pb-80 xl:pb-80 2xl:pb-80",
  96: "pb-96 sm:pb-96 md:pb-96 lg:pb-96 xl:pb-96 2xl:pb-96",
};

export const plStyles: { [key: number]: string } = {
  0: "pl-0 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0",
  0.5: "pl-0.5 sm:pl-0.5 md:pl-0.5 lg:pl-0.5 xl:pl-0.5 2xl:pl-0.5",
  1: "pl-1 sm:pl-1 md:pl-1 lg:pl-1 xl:pl-1 2xl:pl-1",
  1.5: "pl-1.5 sm:pl-1.5 md:pl-1.5 lg:pl-1.5 xl:pl-1.5 2xl:pl-1.5",
  2: "pl-2 sm:pl-2 md:pl-2 lg:pl-2 xl:pl-2 2xl:pl-2",
  2.5: "pl-2.5 sm:pl-2.5 md:pl-2.5 lg:pl-2.5 xl:pl-2.5 2xl:pl-2.5",
  3: "pl-3 sm:pl-3 md:pl-3 lg:pl-3 xl:pl-3 2xl:pl-3",
  3.5: "pl-3.5 sm:pl-3.5 md:pl-3.5 lg:pl-3.5 xl:pl-3.5 2xl:pl-3.5",
  4: "pl-4 sm:pl-4 md:pl-4 lg:pl-4 xl:pl-4 2xl:pl-4",
  5: "pl-5 sm:pl-5 md:pl-5 lg:pl-5 xl:pl-5 2xl:pl-5",
  6: "pl-6 sm:pl-6 md:pl-6 lg:pl-6 xl:pl-6 2xl:pl-6",
  7: "pl-7 sm:pl-7 md:pl-7 lg:pl-7 xl:pl-7 2xl:pl-7",
  8: "pl-8 sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8 2xl:pl-8",
  9: "pl-9 sm:pl-9 md:pl-9 lg:pl-9 xl:pl-9 2xl:pl-9",
  10: "pl-10 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 2xl:pl-10",
  11: "pl-11 sm:pl-11 md:pl-11 lg:pl-11 xl:pl-11 2xl:pl-11",
  12: "pl-12 sm:pl-12 md:pl-12 lg:pl-12 xl:pl-12 2xl:pl-12",
  14: "pl-14 sm:pl-14 md:pl-14 lg:pl-14 xl:pl-14 2xl:pl-14",
  16: "pl-16 sm:pl-16 md:pl-16 lg:pl-16 xl:pl-16 2xl:pl-16",
  20: "pl-20 sm:pl-20 md:pl-20 lg:pl-20 xl:pl-20 2xl:pl-20",
  24: "pl-24 sm:pl-24 md:pl-24 lg:pl-24 xl:pl-24 2xl:pl-24",
  28: "pl-28 sm:pl-28 md:pl-28 lg:pl-28 xl:pl-28 2xl:pl-28",
  32: "pl-32 sm:pl-32 md:pl-32 lg:pl-32 xl:pl-32 2xl:pl-32",
  36: "pl-36 sm:pl-36 md:pl-36 lg:pl-36 xl:pl-36 2xl:pl-36",
  40: "pl-40 sm:pl-40 md:pl-40 lg:pl-40 xl:pl-40 2xl:pl-40",
  44: "pl-44 sm:pl-44 md:pl-44 lg:pl-44 xl:pl-44 2xl:pl-44",
  48: "pl-48 sm:pl-48 md:pl-48 lg:pl-48 xl:pl-48 2xl:pl-48",
  52: "pl-52 sm:pl-52 md:pl-52 lg:pl-52 xl:pl-52 2xl:pl-52",
  56: "pl-56 sm:pl-56 md:pl-56 lg:pl-56 xl:pl-56 2xl:pl-56",
  60: "pl-60 sm:pl-60 md:pl-60 lg:pl-60 xl:pl-60 2xl:pl-60",
  64: "pl-64 sm:pl-64 md:pl-64 lg:pl-64 xl:pl-64 2xl:pl-64",
  72: "pl-72 sm:pl-72 md:pl-72 lg:pl-72 xl:pl-72 2xl:pl-72",
  80: "pl-80 sm:pl-80 md:pl-80 lg:pl-80 xl:pl-80 2xl:pl-80",
  96: "pl-96 sm:pl-96 md:pl-96 lg:pl-96 xl:pl-96 2xl:pl-96",
};
