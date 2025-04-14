import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { LocatorEnabler } from "@/lib/_locatorEnabler";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Jewelry | Timeless Elegance",
  description: "Discover our collection of handcrafted luxury jewelry pieces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
