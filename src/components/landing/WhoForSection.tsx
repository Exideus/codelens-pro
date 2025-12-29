const personas = [
  {
    icon: '🧑‍💻',
    title: 'Freelancers & Contractors',
    description: 'Client hands you a codebase with zero documentation. You need to understand it NOW, not next week. CodeLens maps the entire architecture in minutes.',
    pain: '"I spend 3 days just figuring out what the hell this code does before I can change anything."',
  },
  {
    icon: '👥',
    title: 'Teams & Tech Leads',
    description: "New developer joins. Instead of days of hand-holding and Slack questions, they're productive in hours. Your seniors ship features, not explanations.",
    pain: "\"Every new hire costs me days of a senior dev's time just for onboarding.\"",
  },
  {
    icon: '🏆',
    title: 'Senior Developers',
    description: "You know code. But even you waste hours exploring unfamiliar repos, grepping through folders, reverse-engineering APIs. Stop. Let CodeLens do the boring part.",
    pain: '"I\'m too good to waste time on code archaeology. I should be building."',
  },
]

export default function WhoForSection() {
  return (
    <section className="relative z-10 text-center py-[100px] px-10 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-[60px]">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          WHO IS THIS FOR
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4">
          Built For Every Developer
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          Whether you're solo or leading a team of 50
        </p>
      </div>

      {/* Persona Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-[60px]">
        {personas.map((persona, index) => (
          <div
            key={index}
            className="bg-[rgba(15,10,30,0.6)] border border-border-subtle rounded-2xl p-10 text-left hover:border-border-glow hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="text-5xl mb-5">{persona.icon}</div>
            <h3 className="font-orbitron text-xl font-bold mb-3 text-primary-glow">
              {persona.title}
            </h3>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-5">
              {persona.description}
            </p>
            <p className="text-[13px] text-accent-rose italic p-3 bg-red-500/5 border-l-[3px] border-accent-rose rounded-r-lg">
              {persona.pain}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
