// Homepage - Solarize DigiTech
import Link from 'next/link'
import Image from 'next/image'
import { Brain, Cloud, Building2, Cpu, TrendingUp, Users, Award, Target, ArrowRight } from 'lucide-react'
import SolutionsCarousel from '@/components/SolutionsCarousel'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-4 md:mb-6 font-medium">
              WELCOME TO SOLARIZE DIGITECH
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Revolutionize Your Enterprise with<br className="hidden sm:block" />
              Intelligent Digital Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* Solutions Carousel */}
      <section className="py-12 md:py-16 bg-white">
        <SolutionsCarousel />
      </section>

      {/* Industries Spotlight */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom px-4">
          <div className="mb-8 md:mb-12 text-center">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-3 md:mb-4 font-medium">INDUSTRY EXPERTISE</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
              Delivering Impact Across <span className="font-semibold">Key Industries</span>
            </h2>
          </div>

          <div className="grid gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Healthcare */}
            <Link href="/industries/healthcare" className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                alt="Healthcare Industry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <h3 className="text-sm md:text-base font-medium text-white">Healthcare</h3>
              </div>
            </Link>

            {/* Manufacturing */}
            <Link href="/industries/manufacturing" className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
                alt="Manufacturing Industry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <h3 className="text-sm md:text-base font-medium text-white">Manufacturing</h3>
              </div>
            </Link>

            {/* Retail */}
            <Link href="/industries/retail" className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
                alt="Retail Industry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <h3 className="text-sm md:text-base font-medium text-white">Retail</h3>
              </div>
            </Link>

            {/* Hospitality */}
            <Link href="/industries/hospitality" className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80"
                alt="Hospitality Industry"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <h3 className="text-sm md:text-base font-medium text-white">Hospitality</h3>
              </div>
            </Link>

            {/* Corporate */}
            <Link href="/industries/corporate" className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                alt="Corporate Solutions"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <h3 className="text-sm md:text-base font-medium text-white">Corporate</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="mb-8 md:mb-12 text-center">
            <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-3 md:mb-4 font-medium">INSIGHTS & PERSPECTIVES</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900">
              Our Latest <span className="font-semibold">Thinking</span>
            </h2>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Link href="/insights" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-900 mb-3 md:mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Article"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">ARTICLE</p>
              <h3 className="text-base md:text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                The Future of Enterprise AI: Key Trends for 2026
              </h3>
            </Link>

            <Link href="/insights" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-900 mb-3 md:mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                  alt="Article"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">CASE STUDY</p>
              <h3 className="text-base md:text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                Reducing Cloud Costs by 60% for a Global Retailer
              </h3>
            </Link>

            <Link href="/insights" className="group">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-900 mb-3 md:mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80"
                  alt="Article"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">WHITEPAPER</p>
              <h3 className="text-base md:text-lg font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                Manufacturing Excellence Through IoT Analytics
              </h3>
            </Link>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/insights" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border border-gray-900 text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="container-custom text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 md:mb-8">
            Ready to <span className="font-semibold">Transform Your Business?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white text-sm md:text-base font-medium rounded-full hover:bg-gray-800 transition-colors">
              Schedule Consultation
            </Link>
            <Link href="/insights" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border border-gray-900 text-gray-900 text-sm md:text-base font-medium rounded-full hover:bg-gray-50 transition-colors">
              Explore Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
