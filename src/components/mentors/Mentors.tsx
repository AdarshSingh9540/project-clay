"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { collegeMentors, passionMentors } from "./mentordata"

export default function MentorsCarousel() {
  const [activeTab, setActiveTab] = useState<"college" | "passion">("college")

  const mentors = activeTab === "college" ? collegeMentors : passionMentors
  const displayMentors = [...mentors, ...mentors]

  return (
    <div className="w-full bg-black-200 text-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-semibold text-cream-50">
            Top mentors
          </h2>
          <p className="text-sm lg:text-lg text-opacity-50 text-cream-50">
            Adulting 101 from people who&apos;ve been there, done that.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-2 lg:space-x-4 mb-8">
          <button
            className={`px-2 lg:px-7 py-2 lg:py-3 rounded-full text-cream-100 font-semibold border transition-colors ${
              activeTab === "college"
                ? "text-yellow-300 border-yellow-300"
                : "text-white border-white"
            }`}
            onClick={() => setActiveTab("college")}
          >
            College Mentors
          </button>
          <button
            className={`px-2 lg:px-7 py-2 text-cream-100 lg:py-3 rounded-full font-semibold border transition-colors ${
              activeTab === "passion"
                ? "text-yellow-300 border-yellow-300"
                : "text-white border-white"
            }`}
            onClick={() => setActiveTab("passion")}
          >
            Passion Project Mentors
          </button>
        </div>

        <div className="w-full overflow-hidden lg:blur-black">
          <div className="flex animate-scroll space-x-6">
            {displayMentors.map((mentor, index) => (
              <Card
                key={index}
                className="flex-shrink-0 lg:w-64 bg-cream-50 rounded-2xl border-2 border-black-100 p-4 flex flex-col items-center space-y-2 lg:space-y-4"
              >
                <div className="w-52 lg:h-52 border-2 border-black-200 rounded-xl overflow-hidden">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="lg:w-full lg:h-full object-cover h-48 w-52"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {mentor.name}
                  </h3>
                  <p className="text-sm text-gray-700">{mentor.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
