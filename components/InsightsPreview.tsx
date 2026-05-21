import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function InsightsPreview() {
  const insights = [
    {
      category: 'AI & Analytics',
      title: 'How Machine Learning is Transforming Retail Analytics',
      excerpt: 'Discover how leading retailers are leveraging ML to predict customer behavior and optimize inventory management.',
      date: 'Feb 1, 2026',
      readTime: '8 min read',
      image: '🤖',
    },
    {
      category: 'Cloud Solutions',
      title: 'The Future of Multi-Cloud Strategy',
      excerpt: 'Exploring best practices for managing workloads across multiple cloud providers for maximum flexibility.',
      date: 'Jan 28, 2026',
      readTime: '6 min read',
      image: '☁️',
    },
    {
      category: 'IoT',
      title: 'Industrial IoT: Driving Manufacturing Excellence',
      excerpt: 'How connected devices and real-time data are revolutionizing factory operations and predictive maintenance.',
      date: 'Jan 25, 2026',
      readTime: '7 min read',
      image: '🏭',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary-500 font-semibold uppercase tracking-wider text-sm">Latest Insights</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-500 mt-4 mb-6">
            Thought Leadership & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest perspectives on digital transformation and technology trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden card-hover border border-gray-200 hover:border-accent-500 transition-all group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-8xl">
                {insight.image}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-600 rounded-full text-sm font-semibold mb-4">
                  {insight.category}
                </span>
                <h3 className="text-xl font-bold text-primary-500 mb-3 group-hover:text-accent-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{insight.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {insight.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {insight.readTime}
                    </span>
                  </div>
                </div>
                <Link
                  href="/insights"
                  className="mt-4 inline-flex items-center text-secondary-500 font-semibold hover:text-accent-500 transition-colors group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/insights" className="btn-outline">
            View All Insights
          </Link>
        </div>
      </div>
    </section>
  )
}
