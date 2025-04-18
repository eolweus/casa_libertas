"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type ButtonLink = {
  label: string;
  href: string;
};

interface HeroSectionProps {
  type: "image" | "video";
  src: string;
  title?: string;
  subtitle?: string;
  buttons?: ButtonLink[];
  height?: string;
  objectPosition?: string;
}

export default function HeroSection({
  type,
  src,
  title,
  subtitle,
  buttons = [],
  height = "100vh",
  objectPosition = "center",
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height }}>
      {type === "image" ? (
        <div className="absolute inset-0">
          <Image
            src={src || "/placeholder.svg"}
            alt={title || "Hero image"}
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectPosition }}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      ) : (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="absolute inset-0 bg-black/20"></div>

      {/* Updated positioning to align content lower */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white pb-24 md:pb-32">
        <div className="max-w-4xl px-4">
          {title && (
            <h2 className="mb-4 text-3xl font-light tracking-wider md:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mb-8 text-base font-light md:text-lg lg:text-xl">
              {subtitle}
            </p>
          )}
          {buttons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className="inline-flex items-center border border-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
