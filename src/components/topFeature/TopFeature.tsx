"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cards } from "./feature"
import { cn } from "@/lib/utils"

export default function TopFeature() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-black-200">
      <main className="relative w-full max-w-5xl mx-auto text-center text-2xl py-10">
        <div
          id="stack"
          className="relative"
          style={{
            height:
              typeof window !== "undefined" && window.innerWidth < 640
                ? `${cards.length * 100}vh`
                : "auto",
          }}
        >
          {cards.map((card, index) => (
            <FeatureCard key={index} card={card} index={index} scrollY={scrollY} />
          ))}
        </div>
      </main>
    </div>
  )
}

type CardProps = {
  card: { image: string; heading: string; content: string }
  index: number
  scrollY: number
}

function FeatureCard({ card, index, scrollY }: CardProps) {
  const offset = scrollY - index * 500
  const rotate = index % 2 === 0 ? 1 : -1
  const translateY = Math.max(0, 50 - offset * 0.3)

  return (
    <Card
      className={cn(
        "sticky top-[20vh] transition-all duration-300 ease-in-out mx-auto overflow-hidden bg-black-300 w-[85%] max-w-[900px] p-7 flex justify-center items-center gap-12 border border-[rgba(255,255,255,0.1)] rounded-2xl",
        { "z-[1]": index === cards.length - 1 }
      )}
      style={{
        zIndex: index + 1,
        transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
      }}
    >
      <CardContent className="p-0 w-full">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          <div className="flex flex-col gap-2">
            <ImageSection image={card.image} />
            <div className="text-left px-3">
              <h3 className="text-xl font-bold text-cream-50 mb-1">{card.heading}</h3>
              <p className="text-base text-[rgba(250,243,229,0.5)] leading-[1.6]">
                {card.content}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center w-full gap-12">
          {index % 2 === 0 ? (
            <>
              <ImageSection image={card.image} />
              <ContentSection heading={card.heading} content={card.content} />
            </>
          ) : (
            <>
              <ContentSection heading={card.heading} content={card.content} />
              <ImageSection image={card.image} />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function ImageSection({ image }: { image: string }) {
  return (
    <div className="flex justify-center items-center flex-shrink-0 object-cover sm:w-[400px] sm:h-[200px] lg:h-[340px]">
      <img
        src={image}
        alt="Card illustration"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  )
}

function ContentSection({ heading, content }: { heading: string; content: string }) {
  return (
    <div className="flex-1 text-left">
      <h3 className="text-lg lg:text-xl font-bold text-cream-50 mb-4">{heading}</h3>
      <p className="text-base lg:text-lg text-[rgba(250,243,229,0.5)]">{content}</p>
    </div>
  )
}
