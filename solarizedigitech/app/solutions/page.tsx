import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI & Data Analytics',
      description: 'Transform data into actionable intelligence with machine learning and advanced analytics.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&q=80',
      href: '/solutions/ai-analytics',
      tag: 'ARTIFICIAL INTELLIGENCE'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scale with confidence through enterprise cloud infrastructure and migration services.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      href: '/solutions/cloud',
      tag: 'CLOUD INFRASTRUCTURE'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Empower your enterprise with robust ERP, CRM, and custom software solutions.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
      href: '/solutions/enterprise',
      tag: 'ENTERPRISE SOFTWARE'
    },
    {
      title: 'IoT & Digital Engineering',
      description: 'Connect and innovate with smart systems and digital engineering solutions.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
      href: '/solutions/iot',
      tag: 'INTERNET OF THINGS'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom text-center">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-6 font-semibold">
            OUR SOLUTIONS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
            Comprehensive <span className="font-semibold">Digital Transformation</span> Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end solutions tailored to your business needs, from AI-powered analytics to cloud infrastructure and beyond.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Link href={solution.href} className="group block relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs font-medium uppercase tracking-wider">
                      {solution.tag}
                    </span>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                    <span className="font-semibold">{solution.title.split(' ')[0]}</span> {solution.title.split(' ').slice(1).join(' ')}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-gray-900 font-medium group hover:gap-4 transition-all"
                  >
                    Learn More
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
              Delivering <span className="font-semibold">Measurable Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">7+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-gray-900 mb-2">30+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Enterprise Clients</div>
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
            Ready to <span className="font-semibold">Transform Your Business?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our solutions can drive your digital transformation journey.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
