"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

type RevolvingItem = {
  text: string
  href: string
}

interface RevolvingBarProps {
  items: RevolvingItem[]
  speed?: number
  backgroundColor?: string
  textColor?: string
  separator?: string
  className?: string
}

export default function RevolvingBar({
  items,
  speed = 30,
  backgroundColor = "black",
  textColor = "white",
  separator = "•",
  className = "",
}: RevolvingBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const itemsWithSeparator = items.map((item, i) => ({
    ...item,
    key: `item-${i}`,
  }))

  useEffect(() => {
    if (!scrollRef.current || !contentRef.current) return

    // Clone the content to create a seamless loop
    const scrollContent = scrollRef.current
    const content = contentRef.current
    const contentWidth = content.offsetWidth

    // Create a clone of the content
    const clone = content.cloneNode(true) as HTMLDivElement
    scrollContent.appendChild(clone)

    // Set up the animation
    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      if (!scrollContent) return

      scrollPosition += speed / 60 // Adjust speed based on 60fps

      // Reset position when first set of content is scrolled out of view
      if (scrollPosition >= contentWidth) {
        scrollPosition = 0
      }

      scrollContent.style.transform = `translateX(-${scrollPosition}px)`
      animationId = requestAnimationFrame(scroll)
    }

    // Start the animation
    animationId = requestAnimationFrame(scroll)

    // Pause animation when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationId = requestAnimationFrame(scroll)
        } else {
          cancelAnimationFrame(animationId)
        }
      },
      { threshold: 0 },
    )

    observer.observe(scrollContent)

    // Clean up
    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [speed])

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} style={{ backgroundColor }}>
      <div ref={scrollRef} className="inline-block">
        <div ref={contentRef} className="inline-flex items-center">
          {itemsWithSeparator.map((item, index) => (
            <div key={item.key} className="flex items-center">
              <Link
                href={item.href}
                className={`px-4 py-2 text-sm uppercase tracking-wider hover:opacity-70 transition-opacity`}
                style={{ color: textColor }}
              >
                {item.text}
              </Link>
              {index < items.length - 1 && (
                <span className="mx-2 text-xs" style={{ color: textColor }}>
                  {separator}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
