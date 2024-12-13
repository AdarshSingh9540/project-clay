"use client"

import { useState } from "react"
import { ProfileCard } from "@/components/meet-mentors/profile-card"
import { profiles } from "@/components/meet-mentors/data"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import { SearchBar } from "@/components/SearchBar"

const ITEMS_PER_PAGE = 8

export function Profile() {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const showMoreItems = () => {
    setVisibleItems((prev) => Math.min(prev + ITEMS_PER_PAGE, profiles.length))
  }

  const filteredProfiles = profiles.filter((profile) => {
    if (!profile || !profile.name) return false;
    const searchTerm = searchQuery.toLowerCase()
    return (
      profile.name.toLowerCase().includes(searchTerm) ||
      (profile.title && profile.title.toLowerCase().includes(searchTerm)) ||
      (profile.institution && profile.institution.toLowerCase().includes(searchTerm))
    )
  })

  const hasMoreItems = visibleItems < filteredProfiles.length

  return (
    <div id="profiles" className="bg-gradient-to-b from-[#FFFDF8] to-[#FBF2E5]">
      <div className="container bg-gradient-to-b from-[#FFFDF8] to-[#FBF2E5] mx-auto p-4 space-y-6 max-w-4xl py-16">
        <div className="flex justify-start">
          <button
            className="w-14 h-14 bg-cream-500 rounded-full flex items-center justify-center shadow-md border-2"
            aria-label="Search Icon"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <SearchBar
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSearch={setSearchQuery}
          profiles={profiles}
        />

        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${
            isSearchOpen ? "bg-black pointer-events-none opacity-30" : ""
          }`}
        >
          {filteredProfiles.slice(0, visibleItems).map((profile) => (
            profile && <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        {hasMoreItems && !isSearchOpen && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreItems}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 border border-slate-950 font-semibold"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

