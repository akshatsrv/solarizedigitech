import Link from 'next/link'
import Image from 'next/image'
import { Briefcase, Users, TrendingUp, Workflow, Cloud, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export default function CorporatePage() {
  const solutions = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration Tools',
      description: 'Unified communication and collaboration platforms to connect teams across locations.',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and business processes to boost productivity and efficiency.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Business Analytics',
      description: 'Real-time dashboards and insights for data-driven decision making at all levels.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Digital Workplace',
      description: 'Modern, cloud-based work environments that enable remote and hybrid work models.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions to protect corporate data and intellectual property.',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'HR & Talent Management',
      description: 'Digital solutions for recruitment, onboarding, performance management, and employee engagement.',
    },
  ]

  const benefits = [
    'Enhanced employee productivity and collaboration',
    'Reduced operational costs and overheads',
    'Improved decision-making with real-time insights',
    'Better employee engagement and retention',
    'Streamlined business processes',
    'Increased agility and innovation capacity',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                CORPORATE SOLUTIONS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Transform <span className="font-semibold">Workplace Productivity</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empower your workforce with modern digital tools that enhance collaboration, streamline operations, and drive business growth.
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
                alt="Corporate"
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
              Corporate <span className="font-semibold">Digital Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive technology solutions designed to modernize corporate operations and empower employees.
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
                alt="Corporate Workplace"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                BENEFITS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Drive <span className="font-semibold">Corporate Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our corporate solutions deliver measurable benefits:
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
                  <div className="text-sm text-gray-600">Productivity increase</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">30%</div>
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
              Corporate <span className="font-semibold">Digital Transformation</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  35% Productivity Boost Through Digital Workplace Transformation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a global corporation enhanced collaboration and streamlined operations with modern digital workplace solutions.
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
            Ready to <span className="font-semibold">Transform Your Corporate Operations?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our solutions can enhance productivity and drive corporate excellence.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
