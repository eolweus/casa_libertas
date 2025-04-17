"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

type Product = {
  id: string
  title: string
  price: string
  image: string
  href: string
}

interface ProductSliderProps {
  products: Product[]
  autoScroll?: boolean
  scrollSpeed?: number
  title?: string
}

export default function ProductSlider({ products, autoScroll = true, scrollSpeed = 30, title }: ProductSliderProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [clonedProducts, setClonedProducts] = useState<Product[]>([])

  // Clone products to create a seamless loop
  useEffect(() => {
    // Create a duplicate set of products for seamless looping
    setClonedProducts([...products, ...products])
  }, [products])

  // Handle automatic scrolling
  useEffect(() => {
    if (!autoScroll || isHovered || !containerRef.current || !scrollerRef.current) return

    const container = containerRef.current
    const scroller = scrollerRef.current
    const scrollWidth = scroller.scrollWidth / 2 // Half because we duplicated the items

    let animationId: number
    let startTime: number | null = null
    let currentPosition = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      // Calculate new position based on elapsed time and speed
      currentPosition = ((elapsed * scrollSpeed) / 1000) % scrollWidth

      // Apply the scroll position
      container.scrollLeft = currentPosition

      // If we've scrolled past the first set of items, reset to beginning of second set
      if (currentPosition >= scrollWidth) {
        currentPosition = 0
        startTime = timestamp
        container.scrollLeft = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [autoScroll, isHovered, scrollSpeed, clonedProducts])

  return (
    <div className="relative py-12">
      {title && <h2 className="text-2xl font-light tracking-wider text-center mb-8">{title}</h2>}

      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div ref={scrollerRef} className="flex gap-6 px-4 pb-4">
          {clonedProducts.map((product, index) => (
            <Link key={`${product.id}-${index}`} href={product.href} className="flex-none w-64 group">
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
  )
}
