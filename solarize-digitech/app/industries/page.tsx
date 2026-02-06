import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Hospitality',
      description: 'Elevate guest experiences with innovative digital solutions for hotels, resorts, and hospitality businesses.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      href: '/industries/hospitality',
      tag: 'HOTELS & RESORTS'
    },
    {
      title: 'Retail',
      description: 'Transform retail experiences with omnichannel solutions, e-commerce platforms, and customer analytics.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
      href: '/industries/retail',
      tag: 'RETAIL & E-COMMERCE'
    },
    {
      title: 'Healthcare',
      description: 'Improve patient care with secure, compliant technology solutions for healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
      href: '/industries/healthcare',
      tag: 'HEALTHCARE & MEDICAL'
    },
    {
      title: 'Corporate',
      description: 'Empower your workforce with modern digital workplace solutions and collaboration tools.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      href: '/industries/corporate',
      tag: 'CORPORATE ENTERPRISE'
    },
    {
      title: 'Manufacturing',
      description: 'Optimize operations with Industry 4.0 technologies, IoT, and smart manufacturing solutions.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
      href: '/industries/manufacturing',
      tag: 'MANUFACTURING & INDUSTRIAL'
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom text-center">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-6 font-semibold">
            INDUSTRIES WE SERVE
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
            Tailored Solutions for <span className="font-semibold">Every Industry</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep industry expertise combined with cutting-edge technology to deliver transformative solutions that address your unique challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Link href={industry.href} className="group block relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs font-medium uppercase tracking-wider">
                      {industry.tag}
                    </span>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                    <span className="font-semibold">{industry.title}</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {industry.description}
                  </p>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-gray-900 font-medium group hover:gap-4 transition-all"
                  >
                    Explore Solutions
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Proven <span className="font-semibold">Industry Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">7+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">97%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to <span className="font-semibold">Transform Your Industry?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can drive your digital transformation journey.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
