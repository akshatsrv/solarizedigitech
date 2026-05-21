import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full card-hover group-hover:border-accent-500 transition-all">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-500 to-accent-400 text-white mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary-500 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center text-secondary-500 font-semibold group-hover:text-accent-500 transition-colors">
          <span>Learn More</span>
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
