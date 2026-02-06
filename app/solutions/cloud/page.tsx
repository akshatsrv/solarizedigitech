import Link from 'next/link'
import Image from 'next/image'
import { Cloud, Server, Shield, Zap, Globe, Database, CheckCircle, ArrowRight } from 'lucide-react'

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and data to AWS, Azure, or Google Cloud Platform.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using Terraform and CloudFormation.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security architecture, compliance, and data protection strategies.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'DevOps & CI/CD',
      description: 'Continuous integration and deployment pipelines for rapid, reliable releases.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize workloads across multiple cloud providers for maximum flexibility.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cloud-Native Development',
      description: 'Build scalable microservices and containerized applications using Kubernetes.',
    },
  ]

  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    '99.99% uptime SLA',
    'Automated scaling and high availability',
    'Enterprise-grade security and compliance',
    'Pay-as-you-go pricing model',
    '24/7 monitoring and support',
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                CLOUD SOLUTIONS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Scale with<br />
                <span className="font-semibold">Cloud Confidence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enterprise cloud infrastructure and migration services that power your digital operations with scalability, security, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
                  Get Started
                </Link>
                <Link href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-50 transition-colors">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="Cloud Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Our Cloud <span className="font-semibold">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Comprehensive cloud services across AWS, Azure, and Google Cloud Platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                WHY CLOUD
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Transform Your <span className="font-semibold">Infrastructure</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cloud migration delivers measurable benefits across cost, performance, and scalability:
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
                  <div className="text-4xl font-light text-gray-900 mb-1">60%</div>
                  <div className="text-sm text-gray-600">Cost reduction on average</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">99.99%</div>
                  <div className="text-sm text-gray-600">Uptime guarantee</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                alt="Cloud Infrastructure"
                fill
                className="object-cover"
              />
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
              Global Enterprise <span className="font-semibold">Cloud Migration</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  99.99% Uptime & 60% Cost Reduction Through Strategic Cloud Migration
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a multinational corporation successfully migrated their entire infrastructure to the cloud, achieving unprecedented reliability and cost savings.
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
            Ready to <span className="font-semibold">Move to the Cloud?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our cloud solutions can transform your infrastructure and operations.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
