'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Solution {
  id: number
  title: string
  subtitle: string
  category: string
  image: string
  href: string
}

const solutions: Solution[] = [
  {
    id: 1,
    title: 'Transform Data into Intelligence',
    subtitle: 'AI & Data Analytics',
    category: 'ARTIFICIAL INTELLIGENCE',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80',
    href: '/solutions/ai-analytics'
  },
  {
    id: 2,
    title: 'Indoor & Outdoor LED Solutions',
    subtitle: 'LED Displays',
    category: 'DIGITAL SIGNAGE',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    href: '/solutions'
  },
  {
    id: 3,
    title: 'The Digital Transformation That Could Revolutionize Your Business',
    subtitle: 'End-to-end digital transformation solutions across industries',
    category: 'DIGITAL TRANSFORMATION',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
    href: '/solutions'
  },
  {
    id: 4,
    title: 'Enterprise Cloud Infrastructure',
    subtitle: 'Cloud Solutions',
    category: 'CLOUD INFRASTRUCTURE',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    href: '/solutions/cloud'
  },
  {
    id: 5,
    title: 'Connected Innovation',
    subtitle: 'IoT & Engineering',
    category: 'IOT SOLUTIONS',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    href: '/solutions/iot'
  },
  {
    id: 6,
    title: 'Audio-Visual & IT Services',
    subtitle: 'Complete AV/IT Solutions',
    category: 'ENTERPRISE SERVICES',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    href: '/solutions'
  }
]

export default function SolutionsCarousel() {
  const [featuredIndex, setFeaturedIndex] = useState(2)

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % solutions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setFeaturedIndex((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setFeaturedIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  const goToSlide = (index: number) => {
    setFeaturedIndex(index)
  }

  // Get the 5 visible cards centered around the featured index
  const getVisibleSolutions = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      const index = (featuredIndex + i + solutions.length) % solutions.length
      visible.push({ ...solutions[index], position: i })
    }
    return visible
  }

  const visibleSolutions = getVisibleSolutions()

  return (
    <div className="w-full relative">
      {/* Navigation Arrows - Outside the carousel */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-colors z-50 border-2 border-gray-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-100 transition-colors z-50 border-2 border-gray-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-900" />
      </button>

      {/* Carousel */}
      <div className="px-4 md:px-16 lg:px-24">
        <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6">
          {visibleSolutions.map((solution, index) => {
            const isFeatured = solution.position === 0

            return (
              <div
                key={`${solution.id}-${index}`}
                onClick={(e) => {
                  if (!isFeatured) {
                    e.preventDefault()
                    const actualIndex = (featuredIndex + solution.position + solutions.length) % solutions.length
                    goToSlide(actualIndex)
                  }
                }}
                className={`group relative overflow-hidden rounded-lg bg-gray-900 flex-shrink-0 transition-all duration-500 ${
                  isFeatured
                    ? 'w-64 md:w-80 lg:w-96 h-96 md:h-[28rem] lg:h-[32rem] cursor-pointer'
                    : 'w-32 md:w-48 lg:w-56 h-48 md:h-64 lg:h-80 cursor-pointer hover:scale-105'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {isFeatured ? (
                  <Link href={solution.href} className="absolute inset-0 z-20">
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-white/90 backdrop-blur-sm rounded text-gray-900 text-xs font-medium mb-3 md:mb-4 uppercase tracking-wider">
                        {solution.category}
                      </span>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 md:mb-3 leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">{solution.subtitle}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="absolute inset-0 flex items-end p-3 md:p-4 z-20">
                    <div>
                      <p className="text-white text-xs md:text-sm font-medium mb-1">{solution.subtitle}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              featuredIndex === index
                ? 'w-8 h-2 bg-gray-900 rounded-full'
                : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
