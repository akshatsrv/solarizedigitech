import Link from 'next/link'
import Image from 'next/image'
import { Building2, Users, Workflow, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react'

export default function EnterpriseSolutionsPage() {
  const capabilities = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise Resource Planning',
      description: 'Integrated ERP systems to streamline business processes, improve efficiency, and enable data-driven decisions.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Relationship Management',
      description: 'Comprehensive CRM solutions to manage customer interactions, sales pipelines, and enhance customer satisfaction.',
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Business Process Automation',
      description: 'Automate repetitive tasks and workflows to increase productivity and reduce operational costs.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management & Integration',
      description: 'Seamless integration of disparate systems and centralized data management for unified business insights.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance frameworks to protect your business assets.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, scalable platforms without disrupting operations.',
    },
  ]

  const benefits = [
    'Improved operational efficiency and productivity',
    'Real-time visibility across all business functions',
    'Enhanced collaboration and communication',
    'Reduced operational costs and manual errors',
    'Scalable solutions that grow with your business',
    'Better customer experiences and satisfaction',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                ENTERPRISE SOLUTIONS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Empower Your<br />
                <span className="font-semibold">Enterprise</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Custom enterprise software, ERP, and CRM solutions designed to streamline operations and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                  Request Demo
                </Link>
                <Link href="#capabilities" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Explore Solutions
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                alt="Enterprise Solutions"
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
              Our Enterprise <span className="font-semibold">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              End-to-end enterprise solutions that transform your business operations and drive digital excellence.
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80"
                alt="Enterprise Operations"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                BENEFITS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Transform Your <span className="font-semibold">Operations</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our enterprise solutions deliver measurable benefits that drive competitive advantage:
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
                  <div className="text-4xl font-light text-gray-900 mb-1">45%</div>
                  <div className="text-sm text-gray-600">Productivity increase</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Fewer manual processes</div>
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
              ERP Implementation <span className="font-semibold">Success</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  45% Productivity Improvement Through Custom ERP Solution
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a mid-sized enterprise streamlined operations and achieved significant productivity gains with our tailored ERP implementation.
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
            Ready to <span className="font-semibold">Modernize Your Enterprise?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our enterprise solutions can transform your business operations and drive growth.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
