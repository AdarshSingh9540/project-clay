import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { LOGO_URL } from '@/constant'

export default function Footer() {
  return (
    <footer  className="bg-black-200 text-white py-16">
      <div className="container mx-auto px-6 lg:w-[1122px]">
        <div className="flex flex-col space-y-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="mb-4 md:mb-0">
              <div className="relative w-32 h-14">
                <img
                  src={LOGO_URL}
                  alt="Project Clay"
                  className="object-contain w-28 h-full"
                />
              </div>
            </Link>
            <Link 
              href="https://www.linkedin.com/company/project-clay/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cream-50 p-0.5 rounded-sm text-black"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-black-200" />
            </Link>
          </div>
          <nav className="flex  space-x-8">
            <Link 
              href="/meet-your-mentors" 
              className="text-gray-100 hover:text-white transition-colors hover:underline"
            >
              Mentors
            </Link>
            <Link 
              href="#faqs" 
              className="text-gray-100 hover:text-white transition-colors hover:underline"
            >
              FAQs
            </Link>
            <Link 
              href="#formcomponent" 
              className="text-gray-100 hover:text-white transition-colors hover:underline"
            >
              Register now
            </Link>
          </nav>
          <div className="pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-200 ">
              © 2024 Project Clay
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

