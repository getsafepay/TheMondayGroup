import { extendTailwindMerge, twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
type AdditionalClassGroupIds = "icon";

export const mergeClasses = extendTailwindMerge<AdditionalClassGroupIds>({
  extend: {
    classGroups: {
      icon: [{ icon: ["xs", "sm", "md", "lg", "xl", "2xl"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
