import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, TrendingUp, Lightbulb, ArrowRight, Calendar, Clock } from 'lucide-react'

export default function InsightsPage() {
  const caseStudies = [
    {
      category: 'AI & Analytics',
      title: 'Transforming Customer Experience with Predictive Analytics',
      description: 'How a leading retail chain increased sales by 40% using AI-powered customer insights and personalized recommendations.',
      industry: 'Retail',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      readTime: '8 min read',
      date: 'Jan 15, 2026',
    },
    {
      category: 'Cloud Solutions',
      title: 'Seamless Cloud Migration for Global Enterprise',
      description: 'A multinational corporation achieved 99.99% uptime and 60% cost reduction through strategic cloud migration.',
      industry: 'Corporate',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      readTime: '10 min read',
      date: 'Jan 10, 2026',
    },
    {
      category: 'IoT',
      title: 'Smart Manufacturing: Industry 4.0 Success Story',
      description: 'Manufacturing plant reduced downtime by 70% with IoT-enabled predictive maintenance and real-time monitoring.',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
      readTime: '12 min read',
      date: 'Jan 5, 2026',
    },
    {
      category: 'Healthcare',
      title: 'Revolutionizing Patient Care with Digital Health Platform',
      description: 'Healthcare provider improved patient satisfaction by 35% through integrated telemedicine and EHR solutions.',
      industry: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      readTime: '9 min read',
      date: 'Dec 28, 2025',
    },
    {
      category: 'Enterprise Solutions',
      title: 'ERP Implementation Drives Operational Excellence',
      description: 'Mid-sized enterprise streamlined operations and achieved 45% productivity improvement with custom ERP solution.',
      industry: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      readTime: '11 min read',
      date: 'Dec 20, 2025',
    },
    {
      category: 'Hospitality',
      title: 'Enhancing Guest Experience with Smart Hotel Technology',
      description: 'Boutique hotel chain increased bookings by 50% with mobile check-in and IoT-enabled room controls.',
      industry: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      readTime: '7 min read',
      date: 'Dec 15, 2025',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom text-center">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-6 font-semibold">
            INSIGHTS & PERSPECTIVES
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight max-w-4xl mx-auto">
            Our Latest <span className="font-semibold">Thinking</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore real-world case studies, industry insights, and thought leadership on digital transformation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
              All Insights
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors border border-gray-300">
              Case Studies
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors border border-gray-300">
              Articles
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors border border-gray-300">
              Whitepapers
            </button>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-8 font-semibold">FEATURED</p>
          <Link href="/contact" className="group block">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                  alt="Featured Story"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs font-medium uppercase tracking-wider">
                  Digital Transformation
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Article · February 1, 2026</p>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  The Future of <span className="font-semibold">Enterprise AI</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Discover how artificial intelligence is reshaping business operations and creating new opportunities for innovation across industries.
                </p>
                <div className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              <span className="font-semibold">Case Studies</span> & Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href="/contact"
                className="group block bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-gray-900">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 text-xs font-medium uppercase tracking-wider">
                    {study.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wider">
                    <span>{study.date}</span>
                    <span>·</span>
                    <span>{study.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-gray-900 font-medium text-sm group-hover:gap-4 transition-all">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Stay <span className="font-semibold">Informed</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive insights, case studies, and digital transformation tips.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
