import Link from 'next/link'
import Image from 'next/image'
import { Factory, Cpu, TrendingUp, Workflow, Shield, Eye, CheckCircle, ArrowRight } from 'lucide-react'

export default function ManufacturingPage() {
  const solutions = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Industry 4.0 Solutions',
      description: 'Smart manufacturing systems with IoT sensors, automation, and real-time monitoring capabilities.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Quality Control & Inspection',
      description: 'AI-powered visual inspection systems for defect detection and quality assurance.',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Production Optimization',
      description: 'Advanced analytics and machine learning for production planning and efficiency improvements.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Predictive Maintenance',
      description: 'IoT-enabled predictive maintenance to minimize downtime and extend equipment lifespan.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Supply Chain Management',
      description: 'End-to-end visibility and optimization of supply chain operations and logistics.',
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical assets for simulation, testing, and optimization.',
    },
  ]

  const benefits = [
    'Increased production efficiency and throughput',
    'Reduced operational costs and waste',
    'Improved product quality and consistency',
    'Minimized equipment downtime',
    'Enhanced supply chain visibility',
    'Better inventory management and planning',
  ]

  const technologies = [
    { icon: <Cpu className="w-8 h-8" />, title: 'IoT & Sensors', description: 'Real-time data collection' },
    { icon: <Eye className="w-8 h-8" />, title: 'AI & ML', description: 'Predictive analytics' },
    { icon: <Factory className="w-8 h-8" />, title: 'Automation', description: 'Robotic processes' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Big Data', description: 'Data-driven decisions' },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                MANUFACTURING INDUSTRY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Optimize with <span className="font-semibold">Industry 4.0</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your manufacturing operations with smart technology, IoT, and AI to drive efficiency and competitive advantage.
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
                alt="Manufacturing"
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
              Smart <span className="font-semibold">Manufacturing</span> Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Advanced technology solutions for modern manufacturing operations and Industry 4.0 transformation.
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
                src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&q=80"
                alt="Smart Manufacturing"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                BENEFITS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Revolutionize <span className="font-semibold">Manufacturing</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our manufacturing solutions deliver significant benefits:
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
                  <div className="text-sm text-gray-600">Production efficiency increase</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Reduced downtime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">INDUSTRY 4.0</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Cutting-Edge <span className="font-semibold">Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Leverage modern technologies to transform your manufacturing operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white mb-4 mx-auto">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">SUCCESS STORY</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Manufacturing <span className="font-semibold">Excellence</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  40% Efficiency Gain with Smart Manufacturing Solutions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a leading manufacturer implemented Industry 4.0 technologies to optimize production and reduce downtime.
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
            Ready to <span className="font-semibold">Embrace Industry 4.0?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our smart manufacturing solutions can optimize your production operations.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
