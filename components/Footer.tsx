import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold inline-block mb-4">
              Solarize Digitech
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming businesses through innovative digital solutions. We empower organizations with AI, Cloud, IoT, and Enterprise technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/ai-analytics" className="text-gray-400 hover:text-accent-500 transition-colors">AI & Data Analytics</Link></li>
              <li><Link href="/solutions/cloud" className="text-gray-400 hover:text-accent-500 transition-colors">Cloud Solutions</Link></li>
              <li><Link href="/solutions/enterprise" className="text-gray-400 hover:text-accent-500 transition-colors">Enterprise Solutions</Link></li>
              <li><Link href="/solutions/iot" className="text-gray-400 hover:text-accent-500 transition-colors">IoT & Digital Engineering</Link></li>
              <li><Link href="/solutions/digital-signage" className="text-gray-400 hover:text-accent-500 transition-colors">Digital Signage</Link></li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              <li><Link href="/industries/hospitality" className="text-gray-400 hover:text-accent-500 transition-colors">Hospitality</Link></li>
              <li><Link href="/industries/retail" className="text-gray-400 hover:text-accent-500 transition-colors">Retail</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-400 hover:text-accent-500 transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/corporate" className="text-gray-400 hover:text-accent-500 transition-colors">Corporate</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-400 hover:text-accent-500 transition-colors">Manufacturing</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-accent-500 transition-colors">About Us</Link></li>
              <li><Link href="/insights" className="text-gray-400 hover:text-accent-500 transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-accent-500 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-accent-500 transition-colors">Careers</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-accent-500 transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Solarize Digitech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-accent-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent-500 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-accent-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
