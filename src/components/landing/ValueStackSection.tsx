const valueItems = [
  {
    icon: '🎯',
    title: 'Instant Codebase Mapping',
    description: 'Complete architecture overview, dependency graphs, file relationships. What consultants charge thousands for — in minutes.',
    price: '$2,500/mo',
  },
  {
    icon: '⚡',
    title: 'Auto API Discovery & Testing',
    description: 'Every endpoint found automatically. Full Postman-like testing with zero setup. Payloads generated from your actual code.',
    price: '$1,800/mo',
  },
  {
    icon: '📜',
    title: 'Automatic Documentation',
    description: 'OpenAPI 3.0, README files, Swagger UI — all generated automatically. Always accurate, always up-to-date.',
    price: '$1,200/mo',
  },
  {
    icon: '💬',
    title: 'Interactive Code Q&A',
    description: 'Ask questions about the codebase in plain English. Get answers with direct links to the relevant code.',
    price: '$1,500/mo',
  },
  {
    icon: '🚀',
    title: 'Team Productivity Multiplier',
    description: 'New devs productive in hours. Seniors stop answering the same questions. Everyone ships faster.',
    price: '$3,000/mo',
  },
  {
    icon: '🔌',
    title: 'Multi-Framework Support',
    description: 'Express, FastAPI, Django, Flask, Spring Boot, NestJS, Laravel, Rails — CodeLens understands them all.',
    price: '$800/mo',
  },
]

export default function ValueStackSection() {
  return (
    <section 
      className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.03), transparent)'
      }}
    >
      {/* Headline - .value-headline */}
      <h2 className="font-orbitron text-[clamp(28px,4vw,42px)] font-bold text-center mb-[60px]">
        Here's Everything You're Getting
      </h2>

      {/* Value Items - .value-items */}
      <div className="max-w-[900px] mx-auto">
        {valueItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-[30px] p-[30px] bg-[rgba(15,10,30,0.5)] border border-border-subtle rounded-2xl mb-5 transition-all hover:border-border-glow hover:translate-x-[10px]"
          >
            {/* Icon - .value-icon */}
            <div className="w-[60px] h-[60px] bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-[28px] flex-shrink-0">
              {item.icon}
            </div>

            {/* Content - .value-content */}
            <div className="flex-1 text-center sm:text-left">
              <div className="font-orbitron text-lg font-semibold mb-2">
                {item.title}
              </div>
              <div className="text-[15px] text-text-secondary leading-relaxed">
                {item.description}
              </div>
            </div>

            {/* Price - .value-price */}
            <div className="font-orbitron text-2xl font-bold text-accent-emerald text-right min-w-[120px]">
              {item.price}
            </div>
          </div>
        ))}

        {/* Total - .value-total */}
        <div 
          className="flex flex-col sm:flex-row justify-between items-center gap-4 p-10 rounded-2xl border-2 border-primary mt-10"
          style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))'
          }}
        >
          <div className="font-orbitron text-2xl font-bold">
            Total Value:
          </div>
          <div className="font-orbitron text-5xl font-black text-accent-emerald">
            $10,800/mo
          </div>
        </div>
      </div>
    </section>
  )
}
