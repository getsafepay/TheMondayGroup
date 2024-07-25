import { mergeClasses } from "@/helpers/mergeClasses";

export function BurgerIcon({ active }: { active: boolean }) {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="transition-colors"
    >
      <path
        className={mergeClasses(
          "transform-box origin-center",
          active
            ? "animate-[line1Enter_0.3s_ease-in_forwards]"
            : "animate-[line1Leave_0.3s_ease-in_forwards]"
        )}
        d="M1 1H19"
      ></path>
      <path
        className={
          active
            ? "delay-150 animate-[line2Enter_0.05s_ease-in_forwards]"
            : "animate-[line2Leave_0.05s_ease-in_forwards]"
        }
        d="M1 8H19"
      ></path>
      <path
        className={mergeClasses(
          "transform-box origin-center",
          active
            ? "animate-[line3Enter_0.3s_ease-in_forwards]"
            : "animate-[line3Leave_0.3s_ease-in_forwards]"
        )}
        d="M1 15H19"
      ></path>
    </svg>
  );
}
