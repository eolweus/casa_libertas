import Image from "next/image"
import Link from "next/link"

interface CollectionLinkProps {
  image: string
  title: string
  href: string
  minimal?: boolean
  subtitle?: string
}

export default function CollectionLink({ image, title, href, minimal = false, subtitle }: CollectionLinkProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />

      {minimal ? (
        // Minimal style with animated underline (like carousel)
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center text-white">
          <div className="max-w-md px-4">
            <Link href={href} className="inline-block group">
              <h3 className="text-xl font-light tracking-wider mb-2 hover:opacity-80 transition-opacity">
                {title}
                <span className="block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
              </h3>
            </Link>
            {subtitle && <p className="text-sm mt-2">{subtitle}</p>}
          </div>
        </div>
      ) : (
        // Default style with button
        <div className="absolute inset-0 flex items-end justify-center bg-black/20 pb-16">
          <Link
            href={href}
            className="border border-white bg-black/30 px-8 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
          >
            {title}
          </Link>
        </div>
      )}
    </div>
  )
}
