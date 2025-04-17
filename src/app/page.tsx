import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import SplitContainer from "@/components/split-container";
import CollectionLink from "@/components/collection-link";
import ProductSlider from "@/components/product-slider";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import "@/styles/scrollbar-hide.css";

// Sample data for the product slider
const featuredProducts = [
  {
    id: "1",
    title: "Opera Diamond Necklace",
    price: "$12,500",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1587&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "2",
    title: "Macri Emerald Bracelet",
    price: "$8,900",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1587&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "3",
    title: "Rombi Ruby Earrings",
    price: "$6,750",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1587&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "4",
    title: "Tulle Gold Ring",
    price: "$4,200",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1587&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "5",
    title: "Macri Pearl Pendant",
    price: "$7,300",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1587&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "6",
    title: "Opera Sapphire Cuff",
    price: "$9,800",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1587&auto=format&fit=crop",
    href: "#",
  },
];

// Sample data for the carousel
const jewelryCarouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1587&auto=format&fit=crop",
    title: "MACRI COLLECTION",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1587&auto=format&fit=crop",
    title: "OPERA COLLECTION",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1587&auto=format&fit=crop",
    title: "ROMBI COLLECTION",
    link: "#",
  },
];

const watchesCarouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=1587&auto=format&fit=crop",
    title: "MACRI WATCHES",
    subtitle: "Precision craftsmanship",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=1587&auto=format&fit=crop",
    title: "OPERA WATCHES",
    subtitle: "Timeless design",
    link: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1587&auto=format&fit=crop",
    title: "ROMBI WATCHES",
    subtitle: "Elegance on your wrist",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero section */}
        <HeroSection
          type="image"
          src="https://images.unsplash.com/photo-1664286074240-d7059e004dff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="TIMELESS ELEGANCE"
          subtitle="Discover our new collection of handcrafted masterpieces"
          buttons={[
            { label: "Explore Collection", href: "#" },
            { label: "Our Heritage", href: "#" },
          ]}
        />

        {/* Product Slider */}
        <ProductSlider
          products={featuredProducts}
          title="FEATURED PIECES"
          autoScroll={true}
        />

        {/* Split section with image and carousel */}
        <SplitContainer height="80vh">
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1587&auto=format&fit=crop"
              alt="Luxury jewelry"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Link
                href="#"
                className="border border-white bg-black/30 px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
              >
                DISCOVER JEWELRY
              </Link>
            </div>
          </div>
          <ProductCarousel items={jewelryCarouselItems} />
        </SplitContainer>

        {/* Split section with carousel then image */}
        <SplitContainer height="80vh" reverse={true}>
          <div className="relative h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1587&auto=format&fit=crop"
              alt="Luxury watches"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Link
                href="#"
                className="border border-white bg-black/30 px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
              >
                DISCOVER WATCHES
              </Link>
            </div>
          </div>
          <ProductCarousel items={watchesCarouselItems} />
        </SplitContainer>

        {/* Split section with two subsections - one with minimal style, one with default */}
        <SplitContainer height="80vh">
          <CollectionLink
            image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1587&auto=format&fit=crop"
            title="BRIDAL COLLECTION"
            href="#"
            minimal={true}
            subtitle="Timeless elegance for your special day"
          />
          <CollectionLink
            image="https://images.unsplash.com/photo-1589674781759-c21c37956a44?q=80&w=1587&auto=format&fit=crop"
            title="HIGH JEWELRY"
            href="#"
          />
        </SplitContainer>

        {/* Featured categories - keeping this section from the previous design */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-light mb-12 tracking-wider">
              ICONIC COLLECTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Necklaces", "Rings", "Bracelets"].map((category) => (
                <div key={category} className="group relative">
                  <div className="relative h-[400px] w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=800&width=600&text=${category}`}
                      alt={category}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-light tracking-wider">
                      {category.toUpperCase()}
                    </h3>
                    <Link
                      href="#"
                      className="mt-2 inline-flex items-center text-sm hover:underline"
                    >
                      Discover <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-xl text-center">
            <h2 className="text-2xl font-light tracking-wider mb-4">
              JOIN OUR WORLD
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive updates on our latest collections and
              exclusive events.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-4">CUSTOMER CARE</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Care & Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">ABOUT</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Our Heritage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Craftsmanship
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">LEGAL</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">FIND A BOUTIQUE</h3>
              <p className="text-sm text-gray-600 mb-4">
                Visit us in one of our boutiques worldwide to experience our
                creations in person.
              </p>
              <Link
                href="#"
                className="text-sm border-b border-black pb-1 hover:text-gray-600"
              >
                Store Locator
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Luxury Jewelry. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-gray-500 hover:text-black">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-black">
                  <span className="sr-only">Pinterest</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
