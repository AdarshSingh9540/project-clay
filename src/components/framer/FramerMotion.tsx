"use client"
import React from 'react';

const ScrollingText = () => {
  const textItems = [
    "Any passion, any college. We're here for you.",
    "Mentorship That Goes Above and Beyond",
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <div className="inline-block whitespace-nowrap scroll-container p-4 bg-green-200">
        {[...textItems, ...textItems, ...textItems].map((text, index) => (
          <span
          key={index}
          className="text-yellow-100 lg:text-2xl  px-6 font-semibold "
        >
          {text}
        </span>
        ))}
      </div>
      <style jsx>{`
        .scroll-container {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 15s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollingText;