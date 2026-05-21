import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Smartphone, BarChart3, Users, Zap, Package, CheckCircle, ArrowRight } from 'lucide-react'

export default function RetailPage() {
  const solutions = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-commerce Platforms',
      description: 'Build powerful online stores with seamless shopping experiences and secure payment processing.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Omnichannel Solutions',
      description: 'Unify online and offline experiences for consistent customer journeys across all touchpoints.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Customer Analytics',
      description: 'Gain deep insights into customer behavior, preferences, and buying patterns to drive sales.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personalization Engine',
      description: 'Deliver tailored product recommendations and marketing messages to each customer.',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated replenishment across all channels.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Point of Sale Systems',
      description: 'Modern POS solutions with integrated payment processing and customer management.',
    },
  ]

  const benefits = [
    'Increased sales and revenue growth',
    'Enhanced customer engagement and loyalty',
    'Improved inventory turnover',
    'Reduced operational costs',
    'Better demand forecasting',
    'Streamlined supply chain operations',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                RETAIL INDUSTRY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Transform <span className="font-semibold">Retail Experiences</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Drive sales and customer satisfaction with innovative digital solutions that enhance every touchpoint of the retail journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                  Get Started
                </Link>
                <Link href="#solutions" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Explore Solutions
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
                alt="Retail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">SOLUTIONS</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Digital <span className="font-semibold">Transformation</span> for Retail
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive solutions for modern retail businesses to thrive in competitive markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                alt="Retail Experience"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                BENEFITS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Accelerate <span className="font-semibold">Retail Growth</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our retail solutions deliver measurable benefits:
              </p>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Increase in online sales</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">30%</div>
                  <div className="text-sm text-gray-600">Higher retention rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">SUCCESS STORY</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Fashion Retail <span className="font-semibold">Digital Success</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  40% Sales Growth with Omnichannel Integration
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a leading fashion retailer unified their online and offline channels to deliver seamless customer experiences.
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to <span className="font-semibold">Transform Your Retail Business?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our solutions can boost your sales and enhance customer experiences.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
