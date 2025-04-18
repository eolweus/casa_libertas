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
  const isJumpingRef = useRef(false);
  const lastScrollLeftRef = useRef(0);

  // Clone products to create a seamless loop
  useEffect(() => {
    if (products.length === 0) return;
    setClonedProducts([...products, ...products, ...products]);
    isInitializedRef.current = false;
  }, [products]);

  // Handle initial positioning
  useEffect(() => {
    if (
      !containerRef.current ||
      !scrollerRef.current ||
      products.length === 0 ||
      isInitializedRef.current
    ) {
      return;
    }

    // Wait for DOM to be ready with cloned products
    setTimeout(() => {
      if (!containerRef.current || !scrollerRef.current) return;

      const container = containerRef.current;
      const scroller = scrollerRef.current;

      if (scroller.scrollWidth > 0) {
        const singleSetWidth = scroller.scrollWidth / 3;
        container.scrollLeft = singleSetWidth;
        lastScrollLeftRef.current = singleSetWidth;
        isInitializedRef.current = true;
      }
    }, 100);
  }, [clonedProducts, products.length]);

  // Handle infinite scrolling
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current || products.length === 0)
      return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const singleSetWidth = scroller.scrollWidth / 3;

    // Initialize to the third set instead of the middle set
    if (isInitializedRef.current === false && scroller.scrollWidth > 0) {
      container.scrollLeft = singleSetWidth * 2; // Start at the third set
      lastScrollLeftRef.current = singleSetWidth * 2;
      isInitializedRef.current = true;
    }

    let scrollAnimationId: number | null = null;

    // Function to check and handle infinite scrolling
    const checkAndUpdateScroll = () => {
      if (isJumpingRef.current) return;

      const currentScrollLeft = container.scrollLeft;

      // Reverse the logic - check first set when scrolling forward
      if (currentScrollLeft <= singleSetWidth - 5) {
        isJumpingRef.current = true;
        container.scrollLeft = currentScrollLeft + singleSetWidth;
        isJumpingRef.current = false;
      }
      // Check third set when scrolling backward
      else if (currentScrollLeft >= singleSetWidth * 2 - 5) {
        isJumpingRef.current = true;
        container.scrollLeft = currentScrollLeft - singleSetWidth;
        isJumpingRef.current = false;
      }

      lastScrollLeftRef.current = container.scrollLeft;
    };

    // Setup auto scrolling with requestAnimationFrame for smoother performance
    const scrollAnimation = () => {
      if (!isHovered && !isJumpingRef.current && container) {
        // Move the scroll position forward
        container.scrollLeft += scrollSpeed / 60;

        // Check if we need to loop back
        checkAndUpdateScroll();
      }

      // Continue the animation
      scrollAnimationId = requestAnimationFrame(scrollAnimation);
    };

    // Start auto-scrolling with requestAnimationFrame
    if (autoScroll) {
      scrollAnimationId = requestAnimationFrame(scrollAnimation);
    }

    // Setup scroll event listener for manual scrolling
    container.addEventListener("scroll", checkAndUpdateScroll, {
      passive: true,
    });

    // Cleanup
    return () => {
      container.removeEventListener("scroll", checkAndUpdateScroll);
      if (scrollAnimationId) {
        cancelAnimationFrame(scrollAnimationId);
      }
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };
  }, [autoScroll, scrollSpeed, isHovered, clonedProducts, products.length]);

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
              <h3 className="text-base font-light mb-1 text-center">
                {product.title}
              </h3>
              <p className="text-sm text-gray-700 text-center">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
