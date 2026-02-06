import Link from 'next/link'
import Image from 'next/image'
import { Heart, FileText, Shield, Users, Activity, Smartphone, CheckCircle, ArrowRight } from 'lucide-react'

export default function HealthcarePage() {
  const solutions = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Electronic Health Records',
      description: 'Secure, HIPAA-compliant EHR systems for seamless patient data management and care coordination.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Telemedicine Platforms',
      description: 'Enable virtual consultations and remote patient monitoring for accessible healthcare delivery.',
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Patient Monitoring Systems',
      description: 'Real-time vital signs tracking and alerts for proactive patient care management.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Patient Engagement',
      description: 'Mobile apps and portals for appointment scheduling, prescription refills, and health tracking.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Healthcare Analytics',
      description: 'AI-powered insights for clinical decision support, predictive diagnostics, and population health.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Practice Management',
      description: 'Integrated solutions for billing, scheduling, and revenue cycle management.',
    },
  ]

  const benefits = [
    'Improved patient outcomes and satisfaction',
    'Enhanced care coordination and collaboration',
    'Reduced medical errors and adverse events',
    'Increased operational efficiency',
    'Better regulatory compliance',
    'Lower healthcare delivery costs',
  ]

  const compliance = [
    'HIPAA Compliant',
    'HL7/FHIR Standards',
    'SOC 2 Certified',
    'GDPR Ready'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                HEALTHCARE INDUSTRY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Improve <span className="font-semibold">Patient Care</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform healthcare delivery with secure, compliant technology solutions that enhance patient outcomes and streamline operations.
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
                alt="Healthcare"
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
              Digital <span className="font-semibold">Healthcare</span> Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Innovative technology designed to improve patient care and healthcare operational efficiency.
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
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80"
                alt="Healthcare Technology"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                BENEFITS
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Transform <span className="font-semibold">Healthcare Delivery</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our healthcare solutions deliver measurable benefits:
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
                  <div className="text-4xl font-light text-gray-900 mb-1">30%</div>
                  <div className="text-sm text-gray-600">Patient satisfaction increase</div>
                </div>
                <div className="border-l-2 border-gray-900 pl-6">
                  <div className="text-4xl font-light text-gray-900 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Reduced admin tasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">SECURITY & COMPLIANCE</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Highest <span className="font-semibold">Standards</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              We prioritize patient data security and maintain the highest compliance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <Shield className="w-12 h-12 mx-auto mb-4 text-gray-900" />
                <h3 className="text-lg font-medium text-gray-900">{item}</h3>
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
              Healthcare <span className="font-semibold">Digital Transformation</span>
            </h2>
          </div>

          <Link href="/insights" className="group block">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&q=80"
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                  30% Improvement in Patient Satisfaction Through EHR Implementation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  How a regional hospital network improved patient care and operational efficiency with our comprehensive EHR solution.
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
            Ready to <span className="font-semibold">Transform Healthcare Delivery?</span>
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how our solutions can improve patient care and streamline your healthcare operations.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
