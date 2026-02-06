import Link from 'next/link'
import Image from 'next/image'
import { Cpu, Wifi, Zap, Shield, Activity, BarChart3, CheckCircle, ArrowRight } from 'lucide-react'

export default function IoTPage() {
  const capabilities = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT Platform Development',
      description: 'Custom IoT platforms for device management, data collection, and real-time analytics.',
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Sensor Integration',
      description: 'Connect and integrate diverse sensors and devices into unified ecosystems.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Real-Time Monitoring',
      description: 'Live dashboards and alerts for continuous operational visibility.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Edge Computing',
      description: 'Process data at the edge for faster response times and reduced latency.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Industrial IoT',
      description: 'Smart manufacturing and Industry 4.0 solutions for operational excellence.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights for predictive maintenance and optimization.',
    },
  ]

  const useCases = [
    'Smart factory automation and monitoring',
    'Predictive maintenance and asset tracking',
    'Energy management and optimization',
    'Supply chain and logistics tracking',
    'Building automation and smart cities',
    'Connected product development',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                IOT & DIGITAL ENGINEERING
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Connected<br />
                <span className="font-semibold">Innovation</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Smart systems and digital engineering solutions that enable real-time monitoring, control, and data-driven decision making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                  Get Started
                </Link>
                <Link href="#capabilities" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
                alt="IoT Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">CAPABILITIES</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Our IoT <span className="font-semibold">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              End-to-end IoT solutions from device connectivity to data analytics and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80"
                alt="IoT Applications"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                APPLICATIONS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Driving <span className="font-semibold">Operational Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                IoT solutions that deliver real-time insights and automation:
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
                  <div className="text-4xl font-light text-gray-900 mb-1">70%</div>
                  <div className="text-sm text-gray-600">Reduction in downtime</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">45%</div>
                  <div className="text-sm text-gray-600">Efficiency improvement</div>
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
              Manufacturing <span className="font-semibold">Transformation</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  70% Downtime Reduction with IoT Predictive Maintenance
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a manufacturing plant leveraged IoT sensors and predictive analytics to dramatically reduce equipment failures and improve operational efficiency.
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
            Ready to <span className="font-semibold">Connect Your Operations?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how IoT and digital engineering can transform your business.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
