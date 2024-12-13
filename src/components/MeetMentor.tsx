import { Profile } from "./meet-mentors/profile"
import Feature from "./feature/Feature"
import MeetMentorForm from "./meet-mentor-form/MeetMentorForm"
import HeroSection from "./meet-mentors/hero"

export default function MeetMentor() {
  return (
    <div>
      <HeroSection />
      <Profile />
      <MeetMentorForm />
      <Feature />
    </div>
  )
}
