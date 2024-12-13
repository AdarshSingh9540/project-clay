import Image from "next/image"
import { Profiles } from "@/components/meet-mentors/type"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import GridPattern from "./ui/grid-pattern"
import { Profile } from "./meet-mentors/profile"
import Feature from "./feature/Feature"

interface MentorProfileProps {
  profile: Profiles
}

export default function MentorProfile({ profile }: MentorProfileProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDF8] to-[#FBF2E5] ">
        <GridPattern
             width={80}
             height={80}
             x={-1}
             y={-1}
             strokeDasharray={"0 0"}
               className="hidden lg:block absolute inset-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        />
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl  ">
      <Header/>
        <div className="bg-[#f7f5f0] rounded-2xl p-6 md:p-8 border  border-gray-200 shadow-md my-12 ">
          <div className="grid md:grid-cols-[240px,1fr] gap-6 md:gap-8 p-6" >
            <div>
              <Image
                src={profile.imageUrl}
                alt={profile.name}
                width={240}
                height={240}
                className="rounded-xl w-full aspect-square object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">{profile.name}</h2>
                <div className="flex flex-wrap items-center gap-2 text-slate-400 text-sm">
                  <span>{profile.title}</span>
                  <span className="hidden md:inline">|</span>
                  <span>{profile.institution}</span>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p>{profile.bio}</p>
                </div>
              </div>
              
              <div className="flex flex-row items-start md:items-center justify-between gap-4 mt-6">
                <Image
                  src={profile.logoUrl}
                  alt={profile.institution}
                  width={60}
                  height={24}
                  className="object-contain"
                />
                {/* <Button 
                  className="bg-black bg-gray-800 text-white rounded-full px-6 py-6"
                >
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Profile />
      <Feature />
    </div>
  )
}

const Header = () => (
    <div className="flex flex-col items-center pt-24 ">
      <div className="flex flex-col justify-center items-center text-center">
      <div className="flex gap-1 lg:gap-4">
        <div
          className="lg:w-8 h-10 lg:h-8 relative -top-4 lg:-top-3 flex justify-start items-start"
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
        <h2 className="text-lg lg:text-2xl ">find the <span className="font-bold">Master Shifu</span> <br className="lg:hidden" /> to your <span className="font-bold ">Kungfu Panda</span> </h2>
      </div>
      <h1 className="text-2xl  md:text-5xl font-extrabold text-center ml-8">
      in 3 easy steps
      </h1>
      </div>
    </div>
  )
  