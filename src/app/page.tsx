import HeroSection from "@/components/hero-section";
import ProductCarousel from "@/components/product-carousel";
import SplitContainer from "@/components/split-container";
import CollectionLink from "@/components/collection-link";
import ProductSlider from "@/components/product-slider";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsletter";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import "@/styles/scrollbar-hide.css";
import CategoryCard from "@/components/ui/category-card";

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
        <SplitContainer height="90vh">
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
        <SplitContainer height="90vh">
          <div className="relative h-full w-full">
            {/* <Image
              src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1587&auto=format&fit=crop"
              alt="Luxury watches"
              fill
              className="object-cover"
            />
            <div></div>
            <div className="absolute inset-0 flex items-end justify-center mb-12 ">
              <Link
                href="#"
                className="border border-white bg-black/30 px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
              >
                DISCOVER WATCHES
              </Link>
            </div> */}

            <HeroSection
              type="image"
              src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=1587&auto=format&fit=crop"
              buttons={[{ label: "Discover Watches", href: "#" }]}
              objectPosition="bottom"
              height="100%"
            />
          </div>
          <ProductCarousel items={watchesCarouselItems} />
        </SplitContainer>

        {/* Split section with two subsections - one with minimal style, one with default */}
        <SplitContainer height="90vh">
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
        <section className="py-24">
          <div className="mx-auto px-4 flex flex-col md:flex-row justify-center gap-3 max-w-5xl">
            <div className="md:w-1/2 flex-shrink-0 max-w-lg mx-auto">
              <CategoryCard
                image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1587&auto=format&fit=crop"
                title="EQUUS COLLECTION"
                href="#"
                buttonText="SHOP NOW"
              />
            </div>
            <div className="md:w-1/2 flex-shrink-0 max-w-lg mx-auto">
              <CategoryCard
                image="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1587&auto=format&fit=crop"
                title="PALM BEACH COLLECTION"
                href="#"
                buttonText="SHOP NOW"
              />
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
