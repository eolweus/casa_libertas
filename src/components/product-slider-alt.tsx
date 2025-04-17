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

export default function ProductSliderAlt({ products, autoScroll = true, scrollSpeed = 1, title }: ProductSliderProps) {
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Double the products for seamless looping
  const doubledProducts = [...products, ...products]

  useEffect(() => {
    if (!autoScroll || isHovered || !sliderRef.current) return

    let animationId: number
    let position = 0
    const itemWidth = 272 // width + gap (256 + 16)
    const totalWidth = products.length * itemWidth

    const step = () => {
      if (!sliderRef.current) return

      position += scrollSpeed

      // Reset position when we've scrolled through the first set of products
      if (position >= totalWidth) {
        position = 0
      }

      sliderRef.current.style.transform = `translateX(-${position}px)`
      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [autoScroll, isHovered, products.length, scrollSpeed])

  return (
    <div className="relative py-12 overflow-hidden">
      {title && <h2 className="text-2xl font-light tracking-wider text-center mb-8">{title}</h2>}

      <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div
          ref={sliderRef}
          className="flex gap-4 px-4 transition-transform duration-100"
          style={{ willChange: "transform" }}
        >
          {doubledProducts.map((product, index) => (
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
