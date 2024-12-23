'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: "Essential",
    price: {
      monthly: 999,
      annual: 899,
    },
    description: "Perfect for small teams starting their journey.",
    features: [
      "Up to 20 participants",
      "5 virtual team activities",
      "Basic analytics",
      "Email support",
      "Activity customization",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: {
      monthly: 1999,
      annual: 1799,
    },
    description: "Ideal for growing companies with multiple teams.",
    features: [
      "Up to 100 participants",
      "15 virtual team activities",
      "Advanced analytics",
      "Priority support",
      "Custom branding",
      "Dedicated success manager",
      "Team assessment tools",
    ],
    cta: "Try Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: {
      monthly: 3999,
      annual: 3599,
    },
    description: "Comprehensive solution for large organizations.",
    features: [
      "Unlimited participants",
      "All virtual team activities",
      "Enterprise analytics",
      "24/7 premium support",
      "Custom activity development",
      "Multi-team management",
      "API access",
      "SSO integration",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Flexible plans designed to meet your team&apos;s unique needs.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-lg ${!isAnnual ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-blue-100 transition-colors"
                aria-label="Toggle billing period"
              >
                <motion.div
                  className="absolute w-6 h-6 bg-blue-600 rounded-full top-1"
                  animate={{ left: isAnnual ? '2rem' : '0.25rem' }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                Annual
                <span className="ml-2 text-sm text-green-600 font-medium">Save 10%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-50 to-white border-2 border-blue-600 shadow-xl'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      ${((isAnnual ? plan.price.annual : plan.price.monthly) / 100).toFixed(2)}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-green-600 text-sm mt-2">
                      Save ${(((plan.price.monthly - plan.price.annual) * 12) / 100).toFixed(2)} annually
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing 