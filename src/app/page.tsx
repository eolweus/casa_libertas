import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero section */}
        <section className="relative">
          <div className="relative h-[100vh] w-full">
            <Image
              // src="/placeholder.svg?height=1080&width=1920"
              src="https://images.unsplash.com/photo-1664286074240-d7059e004dff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury jewelry collection"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider mb-4">
                TIMELESS ELEGANCE
              </h2>
              <p className="text-lg md:text-xl font-light mb-8 max-w-xl px-4">
                Discover our new collection of handcrafted masterpieces
              </p>
              <Link
                href="#"
                className="inline-flex items-center border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors"
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>
        </section>

        {/* Featured categories */}
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

        {/* Heritage section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px]">
                <Image
                  src="/placeholder.svg?height=1000&width=800&text=Craftsmanship"
                  alt="Jewelry craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-lg">
                <h2 className="text-3xl font-light tracking-wider mb-6">
                  OUR HERITAGE
                </h2>
                <p className="text-gray-600 mb-6">
                  Since 1919, our master artisans have been creating exquisite
                  jewelry pieces that embody Italian excellence and timeless
                  beauty. Each creation is meticulously handcrafted using
                  ancient goldsmithing techniques passed down through
                  generations.
                </p>
                <p className="text-gray-600 mb-8">
                  Our distinctive style, characterized by intricate engravings
                  and delicate textures, has made our pieces instantly
                  recognizable and eternally coveted by connoisseurs worldwide.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-colors"
                >
                  DISCOVER OUR STORY
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured product */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-light mb-12 tracking-wider">
              FEATURED CREATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-light tracking-wider mb-4">
                  OPERA TULLE NECKLACE
                </h3>
                <p className="text-gray-600 mb-6">
                  A masterpiece of goldsmithing, this necklace showcases our
                  signature honeycomb technique. Each gold thread is delicately
                  woven to create an ethereal tulle effect, adorned with
                  brilliant-cut diamonds that catch the light with every
                  movement.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-colors"
                >
                  DISCOVER
                </Link>
              </div>
              <div className="relative h-[600px] order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=1200&width=800&text=Featured+Product"
                  alt="Opera Tulle Necklace"
                  fill
                  className="object-cover"
                />
              </div>
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
