'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-20 lg:py-32">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-600 mb-3 md:mb-4 font-semibold">
              GET IN TOUCH
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 md:mb-8 leading-tight">
              Let's Start Your <span className="font-semibold">Digital Transformation</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Connect with our experts to discuss how we can help transform your business with innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                Send Us a <span className="font-semibold">Message</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="bg-gray-50 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-gray-900 mx-auto mb-4" />
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We've received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-analytics">AI & Data Analytics</option>
                      <option value="digital-signage">Digital Signage</option>
                      <option value="led-solutions">LED Solutions</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="iot-engineering">IoT & Engineering</option>
                      <option value="av-it-services">Audio-Visual & IT Services</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                Contact <span className="font-semibold">Information</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Reach out to us through any of the following channels. We're here to help!
              </p>

              <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      Sharjah Media City (Shams), Al Messaned,<br />
                      Al Bataeh, Sharjah,<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                    <a href="mailto:sales@solarizedigitech.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      sales@solarizedigitech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                    <a href="tel:+971564871647" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +971 56 487 1647
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-5 md:mb-6">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2.5 md:space-y-3 text-sm md:text-base text-gray-600">
                  <div className="flex justify-between">
                    <span>Sunday - Thursday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-gray-900">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200 text-sm">
                    <span className="text-gray-500">UAE Standard Time (GST/UTC+4)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
