import FormComponent from "./form/Form"
import Feature from "./feature/Feature"
import Testimonials from "./testinomial/Testinomial"
import FAQS from "./faqs/FAQS"
import FramerComponent from "./framer/FramerMotion"
import MentorsCarousel from "./mentors/Mentors"
import TopFeature from "./topFeature/TopFeature"
import HeroSection from "./hero/hero"
import LearningSection from "./learn-anything-and-everything/LearnAnythingComponent"
import University from "./university/university"
import MentorMarquee from "./mentormarquee/mentormarquee"
import YoutubeSection from "./video-component/VideoComponent"

export default function HomePage() {
  return (
    <div className="bg-cream-1000">
      <HeroSection />
      <University />
      <YoutubeSection />
      <MentorMarquee />
      <MentorsCarousel />
      <TopFeature />
      <FramerComponent />
      <FormComponent />
      <Feature />
      <Testimonials />
      <FAQS />
      <FramerComponent/>
      <LearningSection />
    </div>
  )
}
