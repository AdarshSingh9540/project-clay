'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const universityLogos = [
  "https://framerusercontent.com/images/FAV8nJ5EsJI24DSvcWcWSLxmtM.png?scale-down-to=1024",
  "https://framerusercontent.com/images/OsyJ4nmTu9A46lZoiOab1MxRPc.png?scale-down-to=1024",
  "https://framerusercontent.com/images/6x9V5gSro9htKMoNMD0HOGYz1Po.webp",
  "https://framerusercontent.com/images/0Fc2XOYCUx3yQ2utyS8FFMRjUYc.png?scale-down-to=1024",
  "https://framerusercontent.com/images/xKoj4251AxwjMG4uDtBeGc2ZFUE.png",
  "https://framerusercontent.com/images/6wfKmGIHgHfxl5abx9HReI5Tb10.png",
  "https://framerusercontent.com/images/BTK455O1d3VMGdsWT6LqKUnoVz0.png?scale-down-to=512",
  "https://framerusercontent.com/images/9XMPw2o0O5pQt071BhpbHvr0gY.png?scale-down-to=1024",
]

export default function University() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const animate = () => {
    setScrollPosition((prevPosition) => {
      const newPosition = prevPosition + 0.5
      if (newPosition >= containerRef.current!.scrollWidth / 2) {
        return 0
      }
      return newPosition
    })
    requestAnimationFrame(animate)
  }

  return (
    <div className="w-full overflow-hidden bg-cream-500 py-3 border-t border-b  ">
      <div 
        ref={containerRef}
        className="flex 3xl:px-96"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          width: `${universityLogos.length * 200}px`, 
        }}
      >
        {[...universityLogos, ...universityLogos,...universityLogos].map((logo, index) => (
          <div
            key={index}
            className="flex h-16 w-48 flex-shrink-0 items-center justify-center mx-2 "
          >
            <Image
              src={logo}
              alt={`University Logo ${index + 1}`}
              width={120}
              height={64}
              className="h-auto w-auto max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

