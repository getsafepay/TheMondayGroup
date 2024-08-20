import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "blue-mid-gradient": "#214BFF",
        "blue-last-gradient": "#183A8C",
        "TMG-blue": "#00117e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        slideDownAndFade: {
          "0%": {
            opacity: "0",
            transform: "translateY(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideRightAndFade: {
          "0%": {
            opacity: "0",
            transform: "translateX(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideLeftAndFade: {
          "0%": {
            opacity: "0",
            transform: "translateX(-8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideUpAndFade: {
          "0%": {
            opacity: "0",
            transform: "translateY(-8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUpAndFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(16px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        line1Enter: {
          "0%": {
            transform: "translateY(0) rotate(0)",
          },
          "50%": {
            transform: "translateY(6px) rotate(0)",
          },
          "100%": {
            transform: "translateY(6px) rotate(45deg)",
          },
        },
        line1Leave: {
          "0%": {
            transform: "translateY(6px) rotate(45deg)",
          },
          "50%": {
            transform: "translateY(6px) rotate(0)",
          },
          "100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
        },
        line2Enter: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        line2Leave: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        line3Enter: {
          "0%": {
            transform: "translateY(0) rotate(0)",
          },
          "50%": {
            transform: "translateY(-6px) rotate(0)",
          },
          "100%": {
            transform: "translateY(-6px) rotate(-45deg)",
          },
        },
        line3Leave: {
          "0%": {
            transform: "translateY(-6px) rotate(-45deg)",
          },
          "50%": {
            transform: "translateY(-6px) rotate(0)",
          },
          "100%": {
            transform: "translateY(0) rotate(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out",
        fadeOut: "fadeOut 0.15s ease-in",
        slideDownAndFade: "slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade: "slideLeftAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFadeIn: "slideUpAndFadeIn 0.25s ease-out",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
