"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ArrowRight, Menu, X } from "lucide-react"
import { LOGO_URL } from "@/constant"
import { SearchBar } from "@/components/SearchBar"
import { profiles } from "@/components/meet-mentors/data"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black-200 border-b border-[rgba(250,243,229,0.1)] p-4 z-50">
        <div className="container mx-auto flex items-center justify-between lg:px-40 lg:w-full xl:w-[1400px]">
          <Link href="/" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Logo" className="h-8 lg:h-12 w-auto" />
          </Link>

          <div className="block lg:hidden">
            <button
              className="text-gray-200 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={32} strokeWidth={2} />
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-400 text-gray-200 border-[rgba(250,243,229,0.1)] hover:bg-[#2A2A2A] rounded-full h-10 w-10"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={32} strokeWidth={3} />
            </Button>

            <Link href="/meet-your-mentors" className="">
              <Button
                variant="outline"

                className="bg-gray-400 text-gray-200 border-[rgba(250,243,229,0.1)] hover:bg-[#707070] hover:text-gray-200 rounded-full px-5 py-2 h-10 font-semibold"
              >
                Browse mentors
              </Button>
            </Link>
            <Link href="#formcomponent">
  <Button
    className="bg-cream-500 text-green-600 hover:bg-yellow-300 rounded-full px-6 py-2 h-10 font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    Register now
    <ArrowRight className="ml-1 h-8 w-8" />
  </Button>
</Link>

          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-black-200 text-gray-200 p-6 z-40 flex flex-col items-center gap-6">
            <button
              className="absolute top-4 right-4 text-gray-200 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} strokeWidth={3} />
            </button>

            <div className="flex flex-col items-center mt-10 gap-6">
              <Button
                variant="outline"
                size="icon"
                className="bg-gray-400 text-gray-200 border-[rgba(250,243,229,0.1)] hover:bg-[#2A2A2A] rounded-full h-10 w-10"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={32} strokeWidth={3} />
              </Button>

              <Link href="/meet-your-mentors">
                <Button
                  variant="outline"
        
                  className="bg-gray-400 text-gray-200 border-[rgba(250,243,229,0.1)] hover:bg-[#707070] hover:text-gray-200 rounded-full px-6 py-3 text-lg font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Browse mentors
                </Button>
              </Link>
              <Link href="#formcomponent">
                <Button
    
                  className="bg-cream-500 text-green-600 transition-all duration-300 ease-in-out  rounded-full px-6 py-3 text-lg hover:bg-yellow-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={(query) => console.log(query)}
        profiles={profiles}
        
      />
    </>
  )
}

export default Navbar
