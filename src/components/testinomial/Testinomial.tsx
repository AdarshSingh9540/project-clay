"use client"

import { testimonials } from "./data"

export default function Testimonials() {
  return (
    <div className="py-24 bg-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  )
}

const Header = () => (
  <div className="flex flex-col items-center mb-10">
    <div className="flex gap-4">
      <div
        className="w-6 lg:w-8 h-6 lg:h-8 relative -top-3 lg:-top-3 flex justify-start items-start"
        dangerouslySetInnerHTML={{
          __html: `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 37" width="36" height="36">
            <path d="M 27.5 24 C 27.5 24 10.863 17.495 5 5.5" fill="transparent" stroke-width="3" stroke="rgb(0, 0, 0)" stroke-linecap="round"/>
            <path d="M 15 12 C 15 12 3.908 7.781 0 0" transform="translate(7.567 23.943) rotate(-27 7.5 6)" fill="transparent" stroke-width="3" stroke="rgb(0, 0, 0)" stroke-linecap="round"/>
            <path d="M 33.5 16 C 33.5 16 27.5 11.683 27.5 3" fill="transparent" stroke-width="3" stroke="rgb(0, 0, 0)" stroke-linecap="round"/>
          </svg>
        `,
        }}
      />
      <h2 className="text-lg lg:text-2xl font-semibold">Do not believe us.</h2>
    </div>
    <h1 className="text-2xl lg:text-4xl md:text-5xl font-bold text-center">
      Believe them
    </h1>
  </div>
)

type Testimonial = {
  text: string
  image: string
  name: string
}

type TestimonialCarouselProps = {
  testimonials: Testimonial[]
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => (
  <div className="overflow-hidden relative testimonial-blur">
    <div className="flex gap-6 animate-scroll relative z-0">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
)

type TestimonialCardProps = {
  testimonial: Testimonial
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 ">
    <div className="bg-white p-8 rounded-2xl h-auto flex flex-col shadow-sm border border-slate-900 bg-white-back">
      <p className="flex-grow text-gray-800 mb-6">{testimonial.text}</p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium text-gray-900">{testimonial.name}</span>
      </div>
    </div>
  </div>
)
