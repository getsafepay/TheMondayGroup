import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
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
  plugins: [],
};
export default config;
