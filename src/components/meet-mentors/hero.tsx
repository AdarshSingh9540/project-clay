"use client"

import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"
import { heroData } from "./herodata"
import { useEffect, useState } from "react"
import { SearchBar } from "../SearchBar"
import { profiles } from "./data"
import { motion } from "framer-motion"
import GridPattern from "../ui/grid-pattern"

type Card = {
  image: string
  text: string
  bgStyle: { background: string }
  rotate: string
  xOffset: number
  yOffset: number
}

type HeroData = {
  trustedBy: {
    text: string
    images: string[]
  }
  title: string
  subtitle: string
  cards: {
    left: Card[]
    right: Card[]
  }
}

const HeroSection = () => {
  const { trustedBy, cards }: HeroData = heroData
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const leftCardStyle: React.CSSProperties = isSmallScreen
    ? {
        transform: "rotate(-20deg)",
        position: "relative",
        left: "150px",
        marginTop: "-410px",
      }
    : {
        transform: "rotate(-14deg)",
        position: "relative",
        left: "220px",
        marginTop: "-550px",
      }

  const rightCardStyle: React.CSSProperties = isSmallScreen
    ? {
        transform: "rotate(24deg)",
        position: "relative",
        right: "130px",
        marginTop: "-220px",
      }
    : {
        transform: "rotate(8deg)",
        position: "relative",
        right: "250px",
        marginTop: "-550px",
      }

  const renderCards = (cardList: Card[]) =>
    cardList.map((card, index) => (
      <div
        key={`card-${index}`}
        className="absolute rounded-2xl h-80 w-52 shadow-lg flex flex-col p-3 border border-gray-800"
        style={{
          ...card.bgStyle,
          transform: `translate(${card.xOffset}px, ${card.yOffset}px) rotate(${card.rotate})`,
        }}
      >
        <div
          className="flex-1 rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundColor: "lightgray",
          }}
        ></div>
        {/* Text */}
        <div className="flex flex-col items-start pt-3 text-gray-900 font-poppins text-m font-medium ">
          {card.text}
        </div>
      </div>
    ))

  return (
    <div className="relative bg-cream-400 w-full overflow-hidden py-14 lg:py-32 px-8 h-[700px] lg:h-[90vh] ">
     <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        strokeDasharray={"0 0"}
        className="hidden lg:block absolute inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
      />
      <div className="flex flex-col items-center justify-center gap-16 mt-16 lg:mt-0">
       
        <div className="relative flex flex-row items-center justify-between w-full max-w-7xl">
   
          <div
            className="relative flex flex-col items-center space-y-4 3xl:pt-[1500px]"
            style={leftCardStyle}
          >
            {renderCards(cards.left)}
          </div>

    
          <motion.div
            className="flex flex-col items-center text-center max-w-2xl 3xl:pt-[500px]" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute w-80 lg:w-[480px] h-14  left-1/2 transform -translate-x-1/2 flex items-center gap-1 lg:gap-2 px-2 lg:px-6 lg:py-2 shadow border border-gray-200 rounded-full bg-cream-100">
              <div className="hidden lg:block">
                <div className="flex -space-x-3">
                  {trustedBy.images.map((src, index) => (
                    <Image
                      key={`trusted-by-image-${index}`}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      src={src}
                      alt={`User ${index + 1}`}
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm font-poppins  text-green-200 px-1 ">
                Trusted by{" "}
                <span className="font-semibold text-green-200">5000+</span>{" "}
                students from <span className="font-semibold text-green-200">30+ </span> countries
              </p>
            </div>
            {/* Title */}
            <motion.h1
              className="text-4xl lg:text-7xl font-bold font-poppins tracking-tighter text-transparent bg-clip-text mt-20"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgb(0, 2, 0) 64%, rgb(110, 110, 110) 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Browse <br className="lg:hidden" /> mentors
            </motion.h1>
            {/* Subtitle */}
            <motion.div
              className="mt-3 lg:mt-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-sm lg:text-lg font-herosubtitle text-green-200">
                Traditional college counselling is out of touch and expensive.{" "}
                <span className="lg:hidden">
                  Learning new skills is hard. We take a different approach.
                </span>
              </p>
              <p className="text-sm lg:text-lg font-herosubtitle text-green-200 hidden lg:block">
                Learning new skills is hard. We take a different approach.
              </p>
            </motion.div>
            {/* Buttons */}
            <motion.div
              className="flex items-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                className="w-14 h-14 bg-cream-500 rounded-full flex items-center justify-center  border-2"
                aria-label="Search Icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-6 h-6 text-gray-700" />
              </button>

              <a
                href="#formcomponent"
                className="bg-black-100 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out text-cream-100 py-3 px-8 rounded-full flex items-center gap-3 font-semibold shadow-md group"
                style={{
                  borderRadius: "39px",
                }}
              >
                <span className="group-hover:scale-x-110 group-hover:scale-y-105 transition-transform duration-300">
                  Register now
                </span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <div
            className=" relative flex flex-col items-center space-y-12 3xl:pt-[1500px] "
            style={rightCardStyle}
          >
            {renderCards(cards.right)}
          </div>

          {isSearchOpen && (
            <SearchBar
              isOpen={isSearchOpen}
              onClose={() => setIsSearchOpen(false)}
              onSearch={(query) => console.log(query)}
              profiles={profiles}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection