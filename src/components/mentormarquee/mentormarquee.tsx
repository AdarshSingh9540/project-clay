"use client"
import { useRef, useEffect } from "react"

const mentorTexts = [
  "Learn from near-peer mentors.",
  "Get real insights from those who've been there, done that.",
  "Learn from near-peer mentors.",
  "Get real insights from those who've been there, done that.",
  "Learn from near-peer mentors.",
  "Get real insights from those who've been there, done that.",
  "Learn from near-peer mentors.",
  "Get real insights from those who've been there, done that.",
]

export default function MentorMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const scrollWidth = container.scrollWidth
      container.style.setProperty('--scroll-width', `${scrollWidth}px`)
    }
  }, [])

  return (
    <div className="relative w-full h-12 sm:h-16 md:h-20 bg-black-100 flex items-center overflow-hidden">
      {/* Left and Right Gradient Overlays */}
      <div className="absolute top-0 left-0 h-full w-24 sm:w-32 md:w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-24 sm:w-32 md:w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Content */}
      <div 
        ref={containerRef}
        className="flex whitespace-nowrap animate-marquee"
      >
        {[...mentorTexts, ...mentorTexts].map((text, index) => (
          <span
            key={index}
            className="text-yellow-300 text-sm sm:text-lg md:text-2xl font-semibold inline-flex items-center px-4 sm:px-6 md:px-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

