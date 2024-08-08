import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import GlobalProvider from "./global";
import { Layout } from "@/components/Layout";

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
    <GlobalProvider>
      <body className="overscroll-y-none">
        <NextTopLoader />
        <Layout>{children}</Layout>
      </body>
    </GlobalProvider>
  );
}
