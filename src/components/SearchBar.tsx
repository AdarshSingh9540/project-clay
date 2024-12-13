import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Profiles } from "@/components/meet-mentors/type"

interface SearchBarProps {
  isOpen: boolean
  onClose: () => void
  onSearch: (query: string) => void
  profiles: Profiles[]
}

export function SearchBar({
  isOpen,
  onClose,
  onSearch,
  profiles,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const filteredProfiles = profiles.filter((profile) => {
    const searchTerm = searchQuery.toLowerCase()
    return (
      profile.name.toLowerCase().includes(searchTerm) ||
      profile.title.toLowerCase().includes(searchTerm) ||
      profile.institution.toLowerCase().includes(searchTerm)
    )
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-48">
      <div className="absolute inset-0 bg-black/50" />

      <div ref={containerRef} className="relative w-full max-w-md px-4 z-50">
        <div className="relative">
          <Input
            type="text"
            placeholder="Browse mentors"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              onSearch(e.target.value)
            }}
            className="w-full h-14 pl-14 pr-12 rounded-xl border-2 bg-white shadow-lg border-none outline-none"
            autoFocus
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <button
            onClick={() => {
              onClose()
              setSearchQuery("")
              onSearch("")
            }}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border max-h-80 sm:max-h-96 overflow-y-auto">
              {filteredProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  onClick={() => {
                    // Generate the slug from the profile name and navigate to the profile page
                    const slug = profile.name.toLowerCase().replace(/\s+/g, '-')
                    router.push(`/meet-your-mentors/${slug}`)
                    onClose()
                  }}
                >
                  <div className="font-medium">
                    {profile.name} - {profile.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {profile.institution}
                  </div>
                </div>
              ))}
              {filteredProfiles.length === 0 && (
                <div className="p-4 text-center text-gray-500">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
