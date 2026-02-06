import Link from 'next/link'
import Image from 'next/image'
import { Award, Target, Users, TrendingUp, Globe, Lightbulb, Monitor, Cpu, Cloud, Smartphone, Wrench, Mail, MapPin, Phone } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication and shared success.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, maintaining the highest standards of professionalism.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Impact',
      description: 'We focus on creating meaningful, measurable outcomes that drive real business transformation.',
    },
  ]

  const stats = [
    { number: '7+', label: 'Years Experience' },
    { number: '30+', label: 'Enterprise Clients' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '97%', label: 'Success Rate' },
  ]

  const capabilities = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'AI & Data Analytics',
      description: 'Transform data into intelligence with machine learning and advanced analytics.',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Digital Signage',
      description: 'Comprehensive digital signage solutions for indoor and outdoor applications.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions across industries.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'LED Solutions',
      description: 'Indoor and outdoor LED display solutions for maximum visibility.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT & Engineering',
      description: 'Smart systems and connected innovation for modern enterprises.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Audio-Visual & IT',
      description: 'Complete AV and IT services with service-based SLAs.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-32">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">
              ABOUT US
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 md:mb-8 leading-tight">
              We are <span className="font-semibold">Solarize Digitech</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              We are consistently expanding and improving our Digital Signage and AI & Data Analytics capabilities, earning a reputation for fostering enduring business connections with our clients. Our steadfast commitment to excellence has enabled us to forge lasting relationships with both partners and customers.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our extensive expertise encompasses AI & Data Analytics, Digital Transformation, Digital Signage, Outdoor/Indoor LED solutions, IoT & Engineering, and a diverse range of Audio-Visual and IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">
                OUR COMMITMENT
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6">
                Driving <span className="font-semibold">Digital Excellence</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Our Technical Support and Content Development team is responsible for addressing installation errors, user concerns, and any technical issues that may impede customer utilization of our products and services. This team plays a pivotal role in assisting customers in utilizing our products more efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Enduring Business Connections</h3>
                    <p className="text-gray-600">Building lasting relationships with partners and customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Service-Based SLAs</h3>
                    <p className="text-gray-600">Comprehensive service level agreements for peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">OUR CAPABILITIES</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-4 md:mb-6">
              Comprehensive <span className="font-semibold">Solutions & Services</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From digital signage to home automation, we deliver a full spectrum of digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
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

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="mb-10 md:mb-16 text-center">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">OUR VALUES</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              What <span className="font-semibold">Drives Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="mb-8 md:mb-12 text-center">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">BY THE NUMBERS</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Our <span className="font-semibold">Track Record</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-semibold">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Contact <span className="font-semibold">Our Team</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team is ready to assist you with all your digital transformation needs. Reach out to us today.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">Sharjah Media City (Shams), Al Messaned,<br />Al Bataeh, Sharjah, United Arab Emirates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <a href="mailto:sales@solarizedigitech.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      sales@solarizedigitech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+971564871647" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +971 56 487 1647
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
                alt="Sharjah UAE"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 md:mb-6">
            Ready to <span className="font-semibold">Transform Your Business?</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals and drive meaningful business outcomes.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
