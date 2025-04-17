import React from "react"

interface SplitContainerProps {
  children: React.ReactNode
  height?: string
  reverse?: boolean
}

export default function SplitContainer({ children, height = "80vh", reverse = false }: SplitContainerProps) {
  // Ensure we have exactly two children
  const childrenArray = React.Children.toArray(children)

  if (childrenArray.length !== 2) {
    console.error("SplitContainer must have exactly two children")
    return null
  }

  return (
    <section className="w-full" style={{ height }}>
      <div className={`flex h-full flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="h-1/2 w-full md:h-full md:w-1/2">{childrenArray[0]}</div>
        <div className="h-1/2 w-full md:h-full md:w-1/2">{childrenArray[1]}</div>
      </div>
    </section>
  )
}
