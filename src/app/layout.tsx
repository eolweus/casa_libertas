import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { Heart, MapPin, Search, ShoppingBag, User } from "lucide-react";
import MegaMenu from "@/components/mega-menu";

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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top announcement bar */}
          <div className="bg-pink-500 py-2 text-center text-xs text-white">
            <p>Complimentary shipping on all orders</p>
          </div>

          {/* Header */}
          <header className="bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between py-4">
                {/* Left icons */}
                <div className="flex items-center space-x-4">
                  <Link href="#" className="text-sm hover:text-gray-500">
                    <MapPin className="h-5 w-5" />
                    <span className="sr-only">Store Locator</span>
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-500">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Link>
                </div>

                {/* Logo */}
                <div className="text-center">
                  <Link href="/" className="inline-block">
                    <h1 className="text-2xl font-light tracking-widest">
                      BUCCELLATI
                    </h1>
                  </Link>
                </div>

                {/* Right icons */}
                <div className="flex items-center space-x-4">
                  <button className="text-sm hover:text-gray-500">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </button>
                  <Link href="#" className="text-sm hover:text-gray-500">
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Wishlist</span>
                  </Link>
                  <Link href="#" className="text-sm hover:text-gray-500">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Shopping Bag</span>
                  </Link>
                </div>
              </div>

              {/* Mega Menu */}
              <MegaMenu />
            </div>
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
