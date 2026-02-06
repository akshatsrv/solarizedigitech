export default function StatsSection() {
  const stats = [
    { number: '500+', label: 'Projects Completed', sublabel: 'Across multiple industries' },
    { number: '200+', label: 'Enterprise Clients', sublabel: 'Global Fortune 500 companies' },
    { number: '98%', label: 'Client Satisfaction', sublabel: 'Consistently high ratings' },
    { number: '15+', label: 'Years Experience', sublabel: 'Industry expertise' },
  ]

  return (
    <section className="section-padding gradient-primary">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-accent-300 mb-3">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-white/70">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
