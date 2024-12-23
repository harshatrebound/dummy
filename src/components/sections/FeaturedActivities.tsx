'use client'

import Image from 'next/image'
import Link from 'next/link'

const activities = [
  {
    id: 1,
    title: "Virtual Team Building",
    description: "Connect remote teams with engaging online activities and games.",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80",
    category: "Virtual",
    duration: "1-2 hours",
    participants: "5-500",
  },
  {
    id: 2,
    title: "Outdoor Adventure Challenge",
    description: "Build trust and leadership through exciting outdoor challenges.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    category: "Outdoor",
    duration: "4-6 hours",
    participants: "10-50",
  },
  {
    id: 3,
    title: "Culinary Team Building",
    description: "Cook, create, and collaborate in team-based culinary challenges.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
    category: "Indoor",
    duration: "2-3 hours",
    participants: "8-30",
  },
]

const FeaturedActivities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Team Building Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our most successful team building experiences, perfect for any team size and industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Link 
              href={`/activities/${activity.id}`} 
              key={activity.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {activity.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activity.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {activity.participants}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/activities"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Activities
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedActivities 