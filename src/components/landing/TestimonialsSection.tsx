const testimonials = [
  {
    stars: 5,
    text: "I'm a senior dev with 12 years experience. I thought this was for beginners. Then I tried it on a legacy Django project. Saved me 2 days. Now I use it on every new project.",
    initials: 'MK',
    name: 'Marcus K.',
    role: 'Senior Developer, 12 YOE',
  },
  {
    stars: 5,
    text: "As a freelancer, I inherit garbage code constantly. CodeLens is like having X-ray vision. I can quote projects faster because I actually know what I'm getting into.",
    initials: 'SL',
    name: 'Sarah L.',
    role: 'Freelance Full-Stack Dev',
  },
  {
    stars: 5,
    text: "Our new hires used to take 2 weeks to be useful. Now they're submitting PRs on day 2. This isn't exaggeration — it's just math.",
    initials: 'JR',
    name: 'James R.',
    role: 'Engineering Lead',
  },
]

export default function TestimonialsSection() {
  return (
    <section 
      className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.02), transparent)'
      }}
    >
      {/* Header */}
      <div className="text-center mb-[60px]">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          FROM REAL DEVELOPERS
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold">
          They Were Skeptical Too
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[rgba(15,10,30,0.6)] border border-border-subtle rounded-2xl p-[30px]"
          >
            {/* Stars */}
            <div className="text-[#fbbf24] text-lg mb-4">
              {'★'.repeat(testimonial.stars)}
            </div>

            {/* Text */}
            <p className="text-[15px] text-text-secondary leading-relaxed mb-5 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-lg">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-[15px]">{testimonial.name}</div>
                <div className="text-xs text-text-muted">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
