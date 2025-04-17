"use client";

import { useState, useEffect } from "react";
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
  image?: {
    src: string;
    alt: string;
  };
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
        image: {
          src: "https://images.unsplash.com/photo-1582224998893-dd454978a35c?q=80&w=1587&auto=format&fit=crop",
          alt: "Our Heritage",
        },
      },
      {
        title: "CRAFTMANSHIP",
        items: [{ name: "Our Artisans", href: "#" }],
        image: {
          src: "https://images.unsplash.com/photo-1635663044663-b0817bee1404?q=80&w=1587&auto=format&fit=crop",
          alt: "Artisan Craftsmanship",
        },
      },
      {
        title: "VISIT THE SHOWROOM",
        items: [{ name: "Locations", href: "#" }],
        image: {
          src: "https://images.unsplash.com/photo-1600607688960-e095b8862286?q=80&w=1587&auto=format&fit=crop",
          alt: "Showroom Interior",
        },
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
      src: "https://images.unsplash.com/photo-1713897564450-7e7d82ddc4c3?q=80&w=1587&auto=format&fit=crop",
      alt: "Polo Event",
      caption: "DISCOVER THE WORLD OF LIBERTAS",
    },
  },
};

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  const handleMouseEnter = (item: string) => {
    setActiveMenu(item);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Check if scrolled past 100vh
      setIsPastHero(currentScrollY > viewportHeight);

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      // Always show header at top of page
      if (currentScrollY <= 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    // Initial check
    controlHeader();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${activeMenu || isPastHero ? "bg-white" : "bg-transparent"}`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className={`text-sm hover:opacity-70 ${
                activeMenu || isPastHero ? "text-black" : "text-white"
              }`}
            >
              <MapPin className="h-5 w-5" />
              <span className="sr-only">Store Locator</span>
            </Link>
            <Link
              href="#"
              className={`text-sm hover:opacity-70 ${
                activeMenu || isPastHero ? "text-black" : "text-white"
              }`}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-block">
              <h1
                className={`text-2xl font-light tracking-widest ${
                  activeMenu || isPastHero ? "text-black" : "text-white"
                }`}
              >
                CASA LIBERTAS
              </h1>
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button
              className={`text-sm hover:opacity-70 ${
                activeMenu || isPastHero ? "text-black" : "text-white"
              }`}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link
              href="#"
              className={`text-sm hover:opacity-70 ${
                activeMenu || isPastHero ? "text-black" : "text-white"
              }`}
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
            <Link
              href="#"
              className={`text-sm hover:opacity-70 ${
                activeMenu || isPastHero ? "text-black" : "text-white"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping Bag</span>
            </Link>
          </div>
        </div>

        {/* Menu items */}
        <div
          className="flex justify-center space-x-6 py-4 text-sm tracking-wider"
          onMouseLeave={handleMouseLeave}
        >
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
            >
              <Link
                href={item.href}
                className={`hover:opacity-70 ${
                  activeMenu === item.name
                    ? "border-b border-black text-black"
                    : activeMenu || isPastHero
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
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Categories */}
                {activeMenu === "THE HOUSE" ? (
                  <div
                    className="absolute left-0 right-0 bg-white transition-opacity duration-300"
                    onMouseEnter={() => setActiveMenu("THE HOUSE")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="max-w-7xl mx-auto px-4 py-12">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Heritage */}
                        <div className="space-y-4">
                          <div className="aspect-[5/6] overflow-hidden max-w-[200px] mx-auto">
                            <img
                              src="https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&q=80&w=800"
                              alt="Heritage craftsmanship"
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <h2 className="text-xl font-light text-center">
                            Heritage
                          </h2>
                        </div>

                        {/* Craftsmanship */}
                        <div className="space-y-4">
                          <div className="aspect-[5/6] overflow-hidden max-w-[200px] mx-auto">
                            <img
                              src="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&q=80&w=800"
                              alt="Artisan workshop"
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <h2 className="text-xl font-light text-center">
                            Craftsmanship
                          </h2>
                        </div>

                        {/* Showroom */}
                        <div className="space-y-4">
                          <div className="aspect-[5/6] overflow-hidden max-w-[200px] mx-auto">
                            <img
                              src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80&w=800"
                              alt="Luxury showroom"
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <h2 className="text-xl font-light text-center">
                            Visit Our Showroom
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                      {menuData[activeMenu].categories.map((category, idx) => (
                        <div key={idx} className="space-y-4">
                          <h3 className="font-bold text-sm tracking-wider uppercase">
                            {category.title}
                          </h3>
                          <ul className="space-y-4">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="text-sm hover:text-gray-500 uppercase"
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
                        <div className="relative h-[450px] w-full overflow-hidden">
                          <Image
                            src={
                              menuData[activeMenu].featuredImage!.src ||
                              "/placeholder.svg"
                            }
                            alt={menuData[activeMenu].featuredImage!.alt}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-sm font-medium tracking-wider">
                              {menuData[activeMenu].featuredImage!.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
