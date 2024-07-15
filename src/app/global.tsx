"use client";
import localFont from "next/font/local";
import { Fira_Code } from "next/font/google";
import { css, Global } from "@emotion/react";

export const headingFont = localFont({
  src: "../../assets/fonts/sohne/soehne-web-halbfett.woff2",
  display: "swap",
  variable: "--font-soehne-halbfett",
});

export const monospaceFont = Fira_Code({
  weight: ["400", "500"],
  display: "swap",
  subsets: ["latin"],
});

export const bodyFont = localFont({
  src: "../../assets/fonts/sohne/soehne-web-leicht.woff2",
  display: "swap",
  variable: "--font-soehne-leicht",
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Global
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
      /> */}
      {children}
    </>
  );
}
