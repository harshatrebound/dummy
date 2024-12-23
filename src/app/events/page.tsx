'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const events = [
  {
    id: 1,
    title: "Virtual Team Building Workshop",
    date: "2024-01-15",
    time: "14:00-16:00",
    type: "Virtual",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?auto=format&fit=crop&q=80",
    description: "Join us for an engaging virtual workshop focused on team collaboration and communication.",
    capacity: "50 participants",
    price: "$299",
  },
  {
    id: 2,
    title: "Leadership Summit 2024",
    date: "2024-02-01",
    time: "09:00-17:00",
    type: "In-Person",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    description: "A full-day immersive experience designed to develop and enhance leadership skills.",
    capacity: "100 participants",
    price: "$599",
  },
  {
    id: 3,
    title: "Outdoor Adventure Challenge",
    date: "2024-02-15",
    time: "10:00-15:00",
    type: "Outdoor",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    description: "Challenge your team with exciting outdoor activities and team-building exercises.",
    capacity: "30 participants",
    price: "$449",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredEvents = selectedType
    ? events.filter(event => event.type === selectedType)
    : events

  return (
    <div className="min-h-screen bg-surface-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Upcoming Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-surface-600"
          >
            Join our transformative team building events and workshops
          </motion.p>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedType('Virtual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === 'Virtual'
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
              }`}
            >
              Virtual
            </button>
            <button
              onClick={() => setSelectedType('In-Person')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === 'In-Person'
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
              }`}
            >
              In-Person
            </button>
            <button
              onClick={() => setSelectedType('Outdoor')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === 'Outdoor'
                  ? 'bg-primary-600 text-white'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200'
              }`}
            >
              Outdoor
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="group bg-surface-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-surface-50/90 backdrop-blur-sm text-surface-900 px-3 py-1 rounded-full text-sm font-medium">
                  {event.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-surface-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date} • {event.time}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-surface-600 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-surface-500">
                    {event.capacity}
                  </span>
                  <span className="font-semibold text-surface-900">
                    {event.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 