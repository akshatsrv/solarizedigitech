'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    name: 'Solutions',
    href: '/solutions',
    submenu: [
      { name: 'AI & Data Analytics', href: '/solutions/ai-analytics' },
      { name: 'Cloud Solutions', href: '/solutions/cloud' },
      { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { name: 'IoT & Digital Engineering', href: '/solutions/iot' },
      { name: 'Digital Signage', href: '/solutions/digital-signage' },
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    submenu: [
      { name: 'Hospitality', href: '/industries/hospitality' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Corporate', href: '/industries/corporate' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
    ]
  },
  { name: 'Insights', href: '/insights' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Solarize DigiTech"
              width={240}
              height={80}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-secondary-500 font-medium transition-colors"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in-down">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-accent-50 hover:text-accent-500 transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in-down">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-gray-700 hover:text-secondary-500 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-accent-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 text-center btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
