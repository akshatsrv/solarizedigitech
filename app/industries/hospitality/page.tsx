import Link from 'next/link'
import Image from 'next/image'
import { Smartphone, Wifi, TrendingUp, Users, Star, Hotel, CheckCircle, ArrowRight } from 'lucide-react'

export default function HospitalityPage() {
  const solutions = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Smart Guest Experience',
      description: 'Mobile check-in/out, digital room keys, and personalized guest services through intuitive apps.',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'IoT-Enabled Rooms',
      description: 'Smart room controls for lighting, temperature, and entertainment to enhance guest comfort.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Management',
      description: 'AI-powered dynamic pricing and demand forecasting to maximize occupancy and revenue.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest Analytics',
      description: 'Data-driven insights into guest preferences and behavior to deliver personalized experiences.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Reputation Management',
      description: 'Monitor and respond to reviews across platforms to maintain a stellar online reputation.',
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: 'Property Management',
      description: 'Integrated PMS solutions to streamline operations from reservations to housekeeping.',
    },
  ]

  const benefits = [
    'Enhanced guest satisfaction and loyalty',
    'Increased operational efficiency',
    'Higher revenue per available room (RevPAR)',
    'Reduced operational costs',
    'Improved staff productivity',
    'Better resource allocation and management',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                HOSPITALITY INDUSTRY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Elevate <span className="font-semibold">Guest Experiences</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your hospitality business with innovative digital solutions that enhance guest satisfaction and streamline operations.
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
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
                alt="Hospitality"
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
              Digital <span className="font-semibold">Transformation</span> for Hospitality
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive solutions tailored for hotels, resorts, and hospitality businesses.
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
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80"
                alt="Hotel Experience"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                BENEFITS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Drive <span className="font-semibold">Business Growth</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our hospitality solutions deliver measurable benefits:
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
                  <div className="text-4xl font-light text-gray-900 mb-1">35%</div>
                  <div className="text-sm text-gray-600">Guest satisfaction increase</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">25%</div>
                  <div className="text-sm text-gray-600">Cost reduction</div>
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
              Boutique Hotel <span className="font-semibold">Transformation</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  50% Booking Increase with Smart Hotel Technology
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a boutique hotel chain transformed guest experiences with mobile check-in and IoT-enabled room controls.
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
            Ready to <span className="font-semibold">Transform Your Business?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our solutions can enhance guest experiences and drive operational excellence.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
