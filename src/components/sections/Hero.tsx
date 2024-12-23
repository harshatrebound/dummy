'use client'

import Image from 'next/image'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/80 to-neutral-900/90 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium bg-gradient-to-r from-brand-400 to-brand-500 text-transparent bg-clip-text">
              Revolutionizing Team Building
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-tight md:leading-tight lg:leading-tight mb-6 bg-gradient-to-b from-white to-white/70 text-transparent bg-clip-text">
            Transform Your Team,{' '}
            <span className="bg-gradient-to-r from-brand-400 to-brand-500 text-transparent bg-clip-text">
              Elevate Performance
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
            Experience next-generation team building with AI-powered activities, real-time analytics, and personalized growth tracking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:text-white backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '10K+', label: 'Active Teams' },
              { value: '98%', label: 'Success Rate' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl font-display font-semibold bg-gradient-to-r from-brand-400 to-brand-500 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
      <div className="absolute -top-48 left-0 right-0 h-64 bg-gradient-to-b from-neutral-900 to-transparent pointer-events-none" />
    </div>
  )
}

export default Hero 