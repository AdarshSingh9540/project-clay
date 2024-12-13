import { Profiles } from "../meet-mentors/type"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface ProfileCardProps {
  profile: Profiles
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const profileSlug = profile.name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link 
      href={`/meet-your-mentors/${profileSlug}`} 
      target="_blank"
      className="block transition-transform "
    >
      <Card className="overflow-hidden lg:h-[640px] lg:w-[280px] border-gray-500 border-2">
        <CardContent className="p-0">
          <div className="aspect-square relative lg:p-6 ">
            <div className="overflow-hidden h-full w-full relative ">
              <Image
                src={profile.imageUrl}
                alt={profile.name}
                fill
                className="object-cover p-2 lg:p-0 rounded-lg"
              />
            </div>
          </div>
          <div className="p-2 lg:p-6 space-y-6">
            <div className="space-y-2 h-20">
              <h3 className="font-semibold text-xl">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.title}</p>
            </div>
            <p className="text-base h-16">{profile.institution}</p>
            <div className="h-24 lg:h-28 lg:px-4 relative w-[9rem] lg:w-[10rem] aspect-square lg:py-2">
              <Image
                src={profile.logoUrl}
                alt={`${profile.institution} logo`}
                fill
                className="pl-12"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
