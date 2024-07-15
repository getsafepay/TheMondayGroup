import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import GlobalProvider from "./global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THE MONDAY GROUP",
  description: "THE MONDAY GROUP APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <GlobalProvider>
    <html lang="en">
      <NextTopLoader />
      <body className={inter.className}>{children}</body>
    </html>
    // </GlobalProvider>
  );
}
