import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import FeaturedActivities from '@/components/sections/FeaturedActivities'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'

export const metadata: Metadata = {
  title: "TeamSync Pro - Build Stronger Teams Through Shared Experiences",
  description: "Transform your team through innovative team building activities and events. Create lasting bonds and drive success together.",
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <FeaturedActivities />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
    </main>
  )
}
