import React from "react"
import { steps } from "./Step"

interface StepCardProps {
  title: string
  description: string
  image: string
  gradient: string
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  image,
  gradient,
}) => (
  <div
    style={{ background: gradient }}
    className="flex flex-col  text-start p-6 border-2 border-slate-900 rounded-2xl shadow-md w-72 h-[450px]"
  >
    <img
      src={image}
      alt={title}
      className="w-64 h-64 mb-4 border-2 border-slate-900 rounded-2xl"
    />
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
)

const Feature = () => {
  return (
    <div className="flex  lg:flex-row flex-col justify-center items-center gap-6 py-10">
      {steps.map((step, index) => (
        <StepCard
          key={index}
          title={step.title}
          description={step.description}
          image={step.image}
          gradient={step.gradient}
        />
      ))}
    </div>
  )
}

export default Feature
