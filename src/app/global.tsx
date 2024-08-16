"use client";
import localFont from "next/font/local";
import { Fira_Code, Raleway } from "next/font/google";
import { css, Global } from "@emotion/react";

export const headingFont = Raleway({
  // src: "../../assets/fonts/raleway/Raleway-VariableFont_wght.ttf",
  display: "swap",
  // variable: "--font-soehne-halbfett",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const monospaceFont = Fira_Code({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export const bodyFont = Raleway({
  // src: "../../assets/fonts/raleway/Raleway-VariableFont_wght.ttf",
  display: "swap",
  // variable: "--font-soehne-leicht",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Global
        styles={[
          css({
            "html, body, kbd, input, select": {
              fontFamily: bodyFont.style.fontFamily,
            },
            "h1,h2,h3,h4,h5,h6,.font-heading": {
              fontFamily: headingFont.style.fontFamily,
            },
            "code, pre, table.diff": {
              fontFamily: monospaceFont.style.fontFamily,
            },
          }),
        ]}
      />
      {children}
    </html>
  );
}
