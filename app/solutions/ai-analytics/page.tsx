import Link from 'next/link'
import Image from 'next/image'
import { Brain, TrendingUp, Target, Zap, Database, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

export default function AIAnalyticsPage() {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, classification, and recommendation systems.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends, customer behavior, and market dynamics with advanced statistical models.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and visual quality inspection systems.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Natural Language Processing',
      description: 'Sentiment analysis, chatbots, document processing, and text analytics.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Big Data Analytics',
      description: 'Process and analyze massive datasets with distributed computing frameworks.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Interactive dashboards and real-time reporting for data-driven decisions.',
    },
  ]

  const useCases = [
    'Customer churn prediction and retention strategies',
    'Dynamic pricing optimization',
    'Fraud detection and risk management',
    'Supply chain optimization',
    'Demand forecasting',
    'Personalized recommendation engines',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-32">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">
                AI & DATA ANALYTICS
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6 leading-tight">
                Transform Data into<br className="hidden sm:block" />
                <span className="font-semibold">Actionable Intelligence</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Leverage artificial intelligence and advanced analytics to unlock insights, automate processes, and drive strategic decision-making across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white text-sm md:text-base font-medium rounded-full hover:bg-gray-800 transition-colors">
                  Get Started
                </Link>
                <Link href="#capabilities" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-gray-900 text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&q=80"
                alt="AI & Data Analytics"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="mb-10 md:mb-16">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">CAPABILITIES</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6">
              Our AI & Analytics <span className="font-semibold">Expertise</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Comprehensive solutions spanning the entire AI/ML lifecycle from data preparation to model deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-900 text-white mb-5 md:mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="AI Applications"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                REAL-WORLD APPLICATIONS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Delivering <span className="font-semibold">Measurable Impact</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI solutions deliver tangible business value across various use cases:
              </p>
              <ul className="space-y-4 mb-8">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Avg. prediction accuracy improvement</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Reduction in operational costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">SUCCESS STORY</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6">
              How We <span className="font-semibold">Transformed</span> Retail Operations
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  Increased Sales by 40% with AI-Powered Customer Insights
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A leading retail chain leveraged our predictive analytics solution to transform their customer experience, resulting in significant revenue growth and improved retention.
                </p>
                <div className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-4 transition-all">
                  Read Case Study
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6">
            Ready to <span className="font-semibold">Harness AI?</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            Let's discuss how our AI and analytics solutions can transform your business operations.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
