import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Product type for type safety
type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
};

// Featured collections data
const collections = [
  {
    name: "OPERA COLLECTION",
    description: "Inspired by the elegance of classic opera houses",
    imageSrc: "/placeholder.svg?width=800&height=600&text=Opera+Collection",
    href: "#",
  },
  {
    name: "MACRI COLLECTION",
    description: "The artistry of hand-engraved gold",
    imageSrc: "/placeholder.svg?width=800&height=600&text=Macri+Collection",
    href: "#",
  },
  {
    name: "ROMBI COLLECTION",
    description: "Geometric perfection in precious metals",
    imageSrc: "/placeholder.svg?width=800&height=600&text=Rombi+Collection",
    href: "#",
  },
];

// New arrivals data
const newArrivals: Product[] = [
  {
    id: "1",
    name: "Macri Diamond Bracelet",
    description: "18k yellow gold with diamonds",
    price: "$24,800",
    imageSrc: "/placeholder.svg?width=600&height=600&text=Macri+Bracelet",
  },
  {
    id: "2",
    name: "Opera Pearl Necklace",
    description: "18k white gold with cultured pearls",
    price: "$18,500",
    imageSrc: "/placeholder.svg?width=600&height=600&text=Opera+Necklace",
  },
  {
    id: "3",
    name: "Rombi Diamond Ring",
    description: "Platinum with brilliant-cut diamonds",
    price: "$12,750",
    imageSrc: "/placeholder.svg?width=600&height=600&text=Rombi+Ring",
  },
  {
    id: "4",
    name: "Tulle Diamond Earrings",
    description: "18k rose gold with diamonds",
    price: "$16,900",
    imageSrc: "/placeholder.svg?width=600&height=600&text=Tulle+Earrings",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?width=1920&height=1080&text=Spring+Collection+2025"
          alt="Spring Collection 2025"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6">
              SPRING COLLECTION 2025
            </h1>
            <p className="text-lg md:text-xl mb-8 tracking-wide">
              Discover the radiance of our newest creations, where timeless
              craftsmanship meets modern elegance
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explore the Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Featured collections */}
      <section className="py-16 md:py-24 container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light tracking-wider mb-4">
            OUR COLLECTIONS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each piece is handcrafted by our master artisans, continuing a
            legacy of excellence and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link href={collection.href} key={index} className="group block">
              <div className="overflow-hidden mb-4">
                <Image
                  src={collection.imageSrc}
                  alt={collection.name}
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-light tracking-wider mb-2">
                {collection.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {collection.description}
              </p>
              <span className="text-sm font-medium inline-flex items-center text-primary">
                Discover <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light tracking-wider mb-4">
                NEW ARRIVALS
              </h2>
              <p className="text-muted-foreground max-w-xl">
                The latest additions to our exquisite collections
              </p>
            </div>
            <Link
              href="#"
              className="text-sm font-medium inline-flex items-center text-primary"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <Card
                key={product.id}
                className="border-none shadow-sm overflow-hidden bg-card"
              >
                <div className="overflow-hidden">
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[300px] hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-light tracking-wide text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {product.description}
                  </p>
                  <p className="font-medium text-primary">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story section */}
      <section className="py-16 md:py-24 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?width=800&height=1000&text=Our+Legacy"
              alt="Our Legacy"
              width={800}
              height={1000}
              className="object-cover w-full h-[500px] md:h-[600px]"
            />
          </div>
          <div className="max-w-lg">
            <h2 className="text-3xl font-light tracking-wider mb-6">
              OUR LEGACY
            </h2>
            <p className="text-muted-foreground mb-6">
              For over a century, our maison has been dedicated to creating
              jewelry of exceptional craftsmanship and timeless beauty. Each
              creation embodies the perfect balance between tradition and
              innovation.
            </p>
            <p className="text-muted-foreground mb-8">
              Our master artisans continue to use techniques passed down through
              generations, ensuring that every piece is a work of art that will
              be treasured for lifetimes to come.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Discover Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Footer banner */}
      <section className="bg-accent text-accent-foreground">
        <div className="container py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6">
            EXPERIENCE LUXURY
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Visit one of our boutiques to experience our collections firsthand
            and receive personalized service from our experts.
          </p>
          <Button variant="secondary" size="lg">
            Find a Boutique
          </Button>
        </div>
      </section>
    </div>
  );
}
