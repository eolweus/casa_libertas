import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  image: string;
  title: string;
  href: string;
  buttonText?: string;
}

export default function CategoryCard({
  image,
  title,
  href,
  buttonText = "SHOP NOW",
}: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-8 py-6">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "1/1.2" }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="h-20 flex items-center justify-center mt-6">
          <h3 className="text-2xl font-light tracking-widest text-center">
            {title}
          </h3>
        </div>
        <Link
          href={href}
          className="inline-block text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors border border-black px-8 py-3 mt-2"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
