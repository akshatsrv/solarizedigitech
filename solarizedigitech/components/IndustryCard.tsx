import Link from 'next/link'

interface IndustryCardProps {
  emoji: string
  title: string
  description: string
  href: string
}

export default function IndustryCard({ emoji, title, description, href }: IndustryCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl p-6 text-center card-hover border border-gray-200 group-hover:border-secondary-500 transition-all h-full">
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">
          {emoji}
        </div>
        <h3 className="text-xl font-bold text-primary-500 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  )
}
