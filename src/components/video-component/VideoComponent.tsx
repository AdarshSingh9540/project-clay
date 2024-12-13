"use client"
import { useState } from "react"

const YoutubeSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "NDshenC3Wsw" // YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <section
      className="w-full flex flex-col items-center px-5 lg:px-0 py-12 box-border bg-cream-50"
      style={{
        textAlign: "center",
        color: "#083E32",
      }}
    >
      <div
        className="flex flex-col items-center w-full px-8"
        style={{
          flexDirection: "column",
        }}
      >
        <h2
          className="font-semibold text-xl lg:text-2xl mb-2 "
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}
        >
          Looking to apply to Harvard?
        </h2>
        <p
          className=" text-lg lg:text-xl mb-4 lg:mb-6"
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            lineHeight: 0.9,
          }}
        >
          A Harvard student will guide you through the whole process.
        </p>
        <h2
          className="font-semibold text-xl lg:text-2xl  mt-2"
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
          }}
        >
          Have the next big idea?
        </h2>
        <p
          className=" text-lg lg:text-xl mb-4 lg:mb-6"
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            lineHeight: 1.2,
          }}
        >
          A Shark Tank founder will help you bring it to life.
        </p>
        <p
          className=" text-lg lg:text-xl mb-4 lg:mb-6"
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            lineHeight: 1.2,
          }}
        >
          Our mentors are students at your dream universities, <br />
          and young professionals at India’s top startups.
        </p>
      </div>
      <div
        className="w-full max-w-3xl mt-10 relative group"
        style={{
          cursor: isPlaying ? "default" : "pointer",
          borderRadius: "10px",
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <img
              src={thumbnailUrl}
              alt="YouTube Thumbnail"
              className="w-full h-full object-cover"
              style={{
                display: "block",
              }}
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="opacity-80 rounded-xl group-hover:bg-red-600 transition-all duration-300 ease-in-out bg-black-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="50"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
          ></iframe>
        )}
      </div>
    </section>
  )
}

export default YoutubeSection
