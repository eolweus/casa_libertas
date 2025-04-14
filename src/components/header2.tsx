"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, MapPin, Search, ShoppingBag, User } from "lucide-react"

type MenuCategory = {
  title: string
  items: { name: string; href: string }[]
}

type MenuProps = {
  categories: MenuCategory[]
  featuredImage?: {
    src: string
    alt: string
    caption: string
  }
}

const menuItems = [
  { name: "HIGH JEWELLERY", href: "#" },
  { name: "JEWELLERY", href: "#" },
  { name: "WATCHES", href: "#" },
  { name: "BRIDAL", href: "#" },
  { name: "SILVER", href: "#" },
  { name: "GIFTS", href: "#" },
  { name: "THE MAISON", href: "#" },
  { name: "NEWS", href: "#" },
  { name: "RETROSPECTIVES", href: "#" },
]

const menuData: Record<string, MenuProps> = {
  "HIGH JEWELLERY": {
    categories: [
      {
        title: "COLLECTIONS",
        items: [
          { name: "UNICA", href: "#" },
          { name: "MACRI", href: "#" },
          { name: "OPERA", href: "#" },
          { name: "ROMBI", href: "#" },
          { name: "TULLE", href: "#" },
          { name: "ORNATINO", href: "#" },
        ],
      },
    ],
    featuredImage: {
      src: "/placeholder.svg?height=600&width=800&text=High+Jewellery",
      alt: "High Jewellery Collection",
      caption: "DISCOVER THE HIGH JEWELLERY COLLECTION",
    },
  },
  WATCHES: {
    categories: [
      {
        title: "WATCHES",
        items: [
          { name: "FOR HER", href: "#" },
          { name: "FOR HIM", href: "#" },
        ],
      },
    ],
    featuredImage: {
      src: "/placeholder.svg?height=600&width=800&text=Watches",
      alt: "Macri Watches",
      caption: "DISCOVER THE MACRI WATCHES",
    },
  },
  JEWELLERY: {
    categories: [
      {
        title: "COLLECTIONS",
        items: [
          { name: "NECKLACES", href: "#" },
          { name: "BRACELETS", href: "#" },
          { name: "RINGS", href: "#" },
          { name: "EARRINGS", href: "#" },
        ],
      },
    ],
    featuredImage: {
      src: "/placeholder.svg?height=600&width=800&text=Jewellery",
      alt: "Jewellery Collection",
      caption: "DISCOVER THE JEWELLERY COLLECTION",
    },
  },
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleMouseEnter = (item: string) => {
    setActiveMenu(item)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        activeMenu ? "bg-white" : "bg-transparent"
      }`}
      
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left icons */}
          <div className="flex items-center space-x-4">
            <Link href="#" className={`text-sm hover:opacity-70 ${activeMenu ? "text-black" : "text-white"}`}>
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Store Locator</span>
            </Link>
            <Link href="#" className={`text-sm hover:opacity-70 ${activeMenu ? "text-black" : "text-white"}`}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1 className={`text-2xl font-light tracking-widest ${activeMenu ? "text-black" : "text-white"}`}>
                BUCCELLATI
              </h1>
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button className={`text-sm hover:opacity-70 ${activeMenu ? "text-black" : "text-white"}`}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link href="#" className={`text-sm hover:opacity-70 ${activeMenu ? "text-black" : "text-white"}`}>
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
            <Link href="#" className={`text-sm hover:opacity-70 ${activeMenu ? "text-black" : "text-white"}`}>
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping Bag</span>
            </Link>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex justify-center space-x-6 py-4 text-sm tracking-wider"
        onMouseLeave={handleMouseLeave}
        >
          {menuItems.map((item) => (
            <div key={item.name} className="relative" onMouseEnter={() => handleMouseEnter(item.name)}>
              <Link
                href={item.href}
                className={`hover:opacity-70 ${
                  activeMenu === item.name
                    ? "border-b border-black text-black"
                    : activeMenu
                      ? "text-black"
                      : "text-white"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Mega menu dropdown */}
        {activeMenu && menuData[activeMenu] && (
          <div
            className="w-full transition-opacity duration-300"
            onMouseEnter={() => setActiveMenu(activeMenu)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Categories */}
                {menuData[activeMenu].categories.map((category, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="font-medium text-sm tracking-wider">{category.title}</h3>
                    <ul className="space-y-4">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link href={item.href} className="text-sm hover:text-gray-500">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Featured image */}
                {menuData[activeMenu].featuredImage && (
                  <div className="md:col-span-2">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={menuData[activeMenu].featuredImage!.src || "/placeholder.svg"}
                        alt={menuData[activeMenu].featuredImage!.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-sm font-medium tracking-wider">
                      {menuData[activeMenu].featuredImage!.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
