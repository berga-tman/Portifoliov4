import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";

import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/context/LanguageContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
