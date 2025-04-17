"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

type CarouselItem = {
  image: string
  title: string
  subtitle?: string
  link: string
}

interface ProductCarouselProps {
  items: CarouselItem[]
  autoplay?: boolean
  interval?: number
}

export default function ProductCarousel({ items, autoplay = false, interval = 5000 }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    if (autoplay && !isHovering) {
      autoplayTimerRef.current = setInterval(nextSlide, interval)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [autoplay, interval, isHovering])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0">
            <div className="relative h-full w-full">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Fixed text overlay */}
      <div className="absolute inset-x-0 bottom-16 flex flex-col items-center justify-end p-8 text-center text-white pointer-events-none">
        <div className="max-w-md">
          <Link href={items[currentIndex].link} className="group inline-block pointer-events-auto">
            <h3 className="text-xl font-light tracking-wider mb-2 hover:opacity-80 transition-opacity">
              {items[currentIndex].title}
              <span className="block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
            </h3>
          </Link>
          {items[currentIndex].subtitle && <p className="text-sm mt-2">{items[currentIndex].subtitle}</p>}
        </div>
      </div>

      {/* Circular indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative flex items-center justify-center h-6 w-6"
          >
            {/* Inner dot */}
            <span
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white" : "bg-white/50 group-hover:bg-white/70"
              }`}
            />

            {/* Outer circle for current slide */}
            {currentIndex === index && (
              <span className="absolute inset-0 border border-white rounded-full animate-ping-once" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
