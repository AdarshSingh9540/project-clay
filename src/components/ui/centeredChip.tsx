import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type Props = {
  label: string
  images: string[] // Array of image URLs
  className?: string
} & ComponentProps<"div">

const CenteredChip = ({ images, className, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={cn(
        // TODO: try less to use [] values, eg. use text-8 instead, it maintains the overall consistency of spaces on the website
        "absolute top-12 left-1/2 transform -translate-x-1/2 flex items-center px-4 py-2 w-[440px] h-[52px] rounded-full border border-gray-300 bg-white shadow-md",
        className
      )}
    >
      {/* Profile Images */}
      <div className="flex -space-x-3">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Profile ${index + 1}`}
            className="w-10 h-10 rounded-full border border-white"
          />
        ))}
      </div>

      <div className="flex gap-4 items-center pl-4">
        <p className="text-[#083E32] text-[14px] font-">
          Trusted by <span className="font-semibold">5000+</span> students from{" "}
          <span className="font-semibold">30+</span> countries
        </p>
      </div>
    </div>
  )
}

export default CenteredChip
