import { mergeClasses } from "@/helpers/mergeClasses";
import { Colors } from "./types";

export function Divider({ color }: { color: Colors }) {
  let styles = [];
  switch (color) {
    case "light":
      styles.push("border-b-palette-white");
      break;
    case "grey":
      styles.push("border-b-palette-grey3");
      break;
    case "dark":
      styles.push("border-b-palette-black");
      break;
    case "primary":
      styles.push("border-b-palette-blue4");
      break;
  }

  return (
    <hr
      className={mergeClasses(
        styles.join(" "),
        "w-full m-0 border-t-0 border-b"
      )}
    />
  );
}
