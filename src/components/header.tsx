"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Search, ShoppingBag, User } from "lucide-react";

type MenuCategory = {
  title: string;
  items: {
    name: string;
    href: string;
    subItems?: { name: string; href: string }[];
  }[];
};

type MenuProps = {
  categories: MenuCategory[];
  featuredImage?: {
    src: string;
    alt: string;
    caption: string;
  };
};

const menuItems = [
  { name: "ARTBUCKLES", href: "#" },
  { name: "ARTJEWELRY", href: "#" },
  { name: "ARTBAGS", href: "#" },
  { name: "THE HOUSE", href: "#" },
  { name: "OUR WORLD", href: "#" },
];

const menuData: Record<string, MenuProps> = {
  ARTBUCKLES: {
    categories: [
      {
        title: "FEATURED",
        items: [
          {
            name: "New Collection",
            href: "#",
          },
          {
            name: "Wild Horse ArtBuckle",
            href: "#",
          },
          {
            name: "Horseshoe Artbuckle",
            href: "#",
          },
          {
            name: "Elephants ArtBuckle",
            href: "#",
          },
        ],
      },
      {
        title: "COLLECTIONS",
        items: [
          { name: "Equus", href: "#" },
          { name: "Wild", href: "#" },
          { name: "Palm Beach", href: "#" },
          { name: "Eye on Nature", href: "#" },
        ],
      },
      {
        title: "CATEGORIES",
        items: [
          { name: "Sterling Silver", href: "#" },
          { name: "Vermeil Gold", href: "#" },
        ],
      },
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1664286074240-d7059e004dff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "ArtBuckles Collection",
      caption: "DISCOVER OUR SIGNATURE ARTBUCKLES",
    },
  },
  ARTJEWELRY: {
    categories: [
      {
        title: "CATEGORIES",
        items: [
          { name: "Earrings", href: "#" },
          { name: "Bracelets & Cuffs", href: "#" },
          { name: "Charms", href: "#" },
          { name: "Other", href: "#" },
        ],
      },
      {
        title: "COLLECTIONS",
        items: [{ name: "Equus", href: "#" }],
      },
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1587&auto=format&fit=crop",
      alt: "ArtJewelry Collection",
      caption: "EXPLORE OUR ARTJEWELRY COLLECTION",
    },
  },
  ARTBAGS: {
    categories: [
      {
        title: "OUR BAGS",
        items: [
          { name: "Palermo", href: "#" },
          { name: "Cowboy", href: "#" },
        ],
      },
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1587&auto=format&fit=crop",
      alt: "ArtBags Collection",
      caption: "DISCOVER OUR LUXURY ARTBAGS",
    },
  },
  "THE HOUSE": {
    categories: [
      {
        title: "OUR STORY",
        items: [{ name: "Heritage", href: "#" }],
      },
      {
        title: "CRAFTMANSHIP",
        items: [{ name: "Our Artisans", href: "#" }],
      },
      {
        title: "VISIT THE SHOWROOM",
        items: [{ name: "Locations", href: "#" }],
      },
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1524313284042-b0c3c3d08aca?q=80&w=1587&auto=format&fit=crop",
      alt: "Our Showroom",
      caption: "EXPERIENCE OUR CRAFTSMANSHIP FIRSTHAND",
    },
  },
  "OUR WORLD": {
    categories: [
      {
        title: "LIBERTAS LIVING",
        items: [
          { name: "Women in Polo", href: "#" },
          { name: "Real Escuela", href: "#" },
          { name: "Asociación Argentina de Polo", href: "#" },
        ],
      },
      {
        title: "THE JOURNAL",
        items: [
          { name: "USPA X Casa Libertas", href: "#" },
          { name: "Brindis Equestre", href: "#" },
          { name: "Art & Buckle Workshop", href: "#" },
        ],
      },
    ],
    featuredImage: {
      src: "https://images.unsplash.com/photo-1585760656355-fef034b35371?q=80&w=1587&auto=format&fit=crop",
      alt: "Polo Event",
      caption: "DISCOVER THE WORLD OF LIBERTAS",
    },
  },
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (item: string) => {
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="w-full relative">
        {/* Logo and icons row */}
        <div className="flex items-center justify-between py-6 relative z-30 bg-black/30 backdrop-blur-sm text-white px-4">
          {/* Left icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:text-gray-300">
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Store Locator</span>
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl font-light tracking-widest">
                CASA LIBERTAS
              </h1>
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button className="text-sm hover:text-gray-300">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link href="#" className="text-sm hover:text-gray-300">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping Bag</span>
            </Link>
          </div>
        </div>

        {/* Menu navigation */}
        <div
          className="relative z-20 text-white"
          onMouseLeave={handleMouseLeave}
        >
          <nav className="bg-transparent px-4">
            <ul className="flex justify-center gap-8 py-4 text-xs font-light tracking-widest">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`hover:text-gray-300 transition-colors duration-300 ${
                      activeMenu === item.name ? "border-b border-white" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mega menu dropdown - only visible when a menu item is being hovered */}
          {activeMenu && menuData[activeMenu] && (
            <div
              className="absolute left-0 right-0 top-full w-screen bg-black/70 backdrop-blur-md text-white border-t border-gray-700 shadow-md transition-all duration-300"
              onMouseEnter={() => setActiveMenu(activeMenu)}
            >
              <div className="w-full py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-none">
                  {/* Categories */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuData[activeMenu].categories.map((category, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        <h3 className="font-medium text-xs tracking-wider">
                          {category.title}
                        </h3>
                        <ul className="flex flex-col gap-4">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                className="text-xs hover:text-gray-300 transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Featured image */}
                  {menuData[activeMenu].featuredImage && (
                    <div className="md:col-span-2">
                      <div className="relative h-[300px] w-full overflow-hidden">
                        <Image
                          src={
                            menuData[activeMenu].featuredImage!.src ||
                            "/placeholder.svg"
                          }
                          alt={menuData[activeMenu].featuredImage!.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-4 text-xs font-medium tracking-wider">
                        {menuData[activeMenu].featuredImage!.caption}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
