'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button'

const navigation = [
  { name: 'Activities', href: '/activities' },
  { name: 'Events', href: '/events' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-neutral-900/80 backdrop-blur-xl border-b border-neutral-800'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link 
            href="/" 
            className="relative z-10 text-2xl font-display font-semibold text-white"
          >
            TeamSync Pro
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-brand-400'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-400 to-brand-500"
                    animate
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:text-white backdrop-blur-sm"
            >
              Sign In
            </Button>
            <Button 
              size="sm"
              className="bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-10 md:hidden p-2 -mr-2 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-neutral-900/95 backdrop-blur-xl" />
            <nav className="relative pt-24 px-6">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-brand-400 bg-brand-500/10'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 flex flex-col space-y-3">
                  <Button 
                    variant="outline" 
                    fullWidth
                    className="border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:text-white"
                  >
                    Sign In
                  </Button>
                  <Button 
                    fullWidth
                    className="bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header 