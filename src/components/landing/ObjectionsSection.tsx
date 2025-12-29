const objections = [
  {
    myth: '"This is for juniors, not for me"',
    truth: "Even 10x developers waste hours exploring new repos. The difference? Smart developers use tools to skip the boring parts. You don't type machine code — why manually explore every folder?",
  },
  {
    myth: '"I already use Postman"',
    truth: 'Great. How long did it take to set up that collection? CodeLens discovers ALL endpoints in seconds — from the actual code. No manual typing. No guessing parameters.',
  },
  {
    myth: '"I can figure out code myself"',
    truth: "Of course you can. The question is: should you? Every hour spent on code archaeology is an hour not spent building features. Time is the one thing you can't get back.",
  },
  {
    myth: '"These tools are unreliable"',
    truth: "CodeLens reads your actual code. It's not guessing — it's parsing real files, real decorators, real function signatures. What it shows you is what's in your codebase.",
  },
]

export default function ObjectionsSection() {
  return (
    <section 
      className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.02), transparent)'
      }}
    >
      {/* Header - .section-header */}
      <div className="text-center mb-[60px]">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          REAL TALK
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4">
          What You're Probably Thinking
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          Let's address the elephant in the room
        </p>
      </div>

      {/* Grid - .objection-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] max-w-[1100px] mx-auto mt-[60px]">
        {objections.map((objection, index) => (
          <div
            key={index}
            className="bg-[rgba(15,10,30,0.6)] border border-border-subtle rounded-2xl p-[30px]"
          >
            {/* Myth - .objection-myth */}
            <div className="flex items-center gap-3 mb-4">
              {/* .myth-x */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-accent-rose font-bold flex-shrink-0 bg-[rgba(239,68,68,0.2)]">
                ✗
              </div>
              {/* .myth-text - MIT LINE-THROUGH */}
              <span className="text-base text-text-muted line-through">
                {objection.myth}
              </span>
            </div>

            {/* Truth - .objection-truth */}
            <div className="flex items-start gap-3">
              {/* .truth-check */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-accent-emerald font-bold flex-shrink-0 bg-[rgba(16,185,129,0.2)]">
                ✓
              </div>
              {/* .truth-text */}
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {objection.truth}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
