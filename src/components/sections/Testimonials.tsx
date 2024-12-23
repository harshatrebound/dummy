'use client'

import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "The most innovative team building experience we&apos;ve ever had. It transformed how our teams collaborate.",
    author: "Sarah Chen",
    role: "Head of Innovation, TechCorp",
    company_logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    quote: "Exceptional attention to detail. Every activity was perfectly tailored to our company culture.",
    author: "Michael Torres",
    role: "CEO, Future Dynamics",
    company_logo: "https://images.unsplash.com/photo-1611162616305-c69b3037c7ff?auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    quote: "The virtual team building sessions kept our global teams connected like never before.",
    author: "Emma Watson",
    role: "Global HR Director, InnovateCo",
    company_logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80",
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies transforming their teams with our innovative approach.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3">
                          <div className="relative w-24 h-24 mx-auto md:mx-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="mt-6 text-center md:text-left">
                            <h4 className="font-bold text-lg">{testimonial.author}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="w-full md:w-2/3">
                          <svg className="w-12 h-12 text-blue-100 mb-6" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="text-xl md:text-2xl leading-relaxed mb-6">
                            {testimonial.quote}
                          </p>
                          <div className="relative w-24 h-12">
                            <Image
                              src={testimonial.company_logo}
                              alt="Company logo"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg text-gray-800 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 