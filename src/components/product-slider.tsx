"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  href: string;
};

interface ProductSliderProps {
  products: Product[];
  autoScroll?: boolean;
  scrollSpeed?: number;
  title?: string;
}

export default function ProductSlider({
  products,
  autoScroll = true,
  scrollSpeed = 30,
  title,
}: ProductSliderProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [clonedProducts, setClonedProducts] = useState<Product[]>([]);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isInitializedRef = useRef(false);

  // Clone products to create a seamless loop - use three sets for smooth transition
  useEffect(() => {
    setClonedProducts([...products, ...products, ...products]);
    // Reset the initialization flag when products change
    isInitializedRef.current = false;
  }, [products]);

  // Handle initial positioning - separate from animation
  useEffect(() => {
    if (
      !containerRef.current ||
      !scrollerRef.current ||
      isInitializedRef.current
    )
      return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;

    // Only set this once after products are loaded and DOM is ready
    if (scroller.scrollWidth > 0) {
      const singleSetWidth = scroller.scrollWidth / 3;
      container.scrollLeft = singleSetWidth;
      isInitializedRef.current = true;
    }
  }, [clonedProducts]);

  // Setup and handle the scrolling
  useEffect(() => {
    if (!autoScroll || !containerRef.current || !scrollerRef.current) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const singleSetWidth = scroller.scrollWidth / 3; // One third because we have three sets

    // Calculate step size based on scrollSpeed (pixels per tick)
    const stepSize = scrollSpeed / 60;

    // Setup the interval for scrolling
    const startScrolling = () => {
      // Clear any existing interval
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }

      // Create new interval that runs at 60fps (16.7ms)
      scrollIntervalRef.current = setInterval(() => {
        if (isHovered || !container) return; // Don't move while hovering

        // Get current scroll position
        let currentPosition = container.scrollLeft;

        // Increment position by the step size
        currentPosition += stepSize;

        // If we approach the end of the middle set, jump back to the same position in the first set
        if (currentPosition >= singleSetWidth * 2) {
          currentPosition = currentPosition - singleSetWidth;
          // Apply jump immediately - this happens so fast it's invisible to the user
          container.scrollLeft = currentPosition;
        } else {
          // Normal smooth scrolling
          container.scrollLeft = currentPosition;
        }
      }, 16.7); // ~60fps
    };

    // Start the scrolling
    startScrolling();

    // Cleanup on unmount or when dependencies change
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };
  }, [autoScroll, isHovered, scrollSpeed, clonedProducts]);

  return (
    <div className="relative py-12">
      {title && (
        <h2 className="text-2xl font-light tracking-wider text-center mb-8">
          {title}
        </h2>
      )}

      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div ref={scrollerRef} className="flex gap-6 px-4 pb-4">
          {clonedProducts.map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              href={product.href}
              className="flex-none w-64 group"
            >
              <div className="relative h-80 w-full overflow-hidden mb-3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base font-light mb-1">{product.title}</h3>
              <p className="text-sm text-gray-700">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
