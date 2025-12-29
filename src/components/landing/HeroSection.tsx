interface HeroSectionProps {
  onOpenModal: (tier?: string) => void
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center pt-[120px] px-10 pb-[100px]">
      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-primary/10 border border-border-glow rounded-full mb-8 animate-float">
        <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse-dot" />
        <span className="font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow">
          EARLY ACCESS BETA — DEVELOPER INTELLIGENCE PLATFORM
        </span>
      </div>

      {/* Title */}
      <h1 className="font-orbitron text-[clamp(36px,7vw,72px)] font-black leading-[1.1] mb-6">
        Master Any Codebase.
        <br />
        <span className="bg-gradient-to-br from-primary-glow via-accent-cyan to-secondary bg-clip-text text-transparent">
          In Minutes.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[clamp(18px,2.5vw,24px)] text-text-secondary max-w-[850px] mb-12 leading-relaxed">
        Drop any codebase. <strong className="text-primary-glow">CodeLens discovers every API endpoint instantly.</strong> Test with auto-generated payloads. Export documentation automatically. Whether you're a freelancer inheriting legacy code or a team onboarding new developers — <strong className="text-primary-glow">stop wasting time.</strong>
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mb-[60px]">
        <button
          onClick={() => onOpenModal('Pro')}
          className="px-[52px] py-5 bg-gradient-to-br from-primary to-secondary rounded-xl text-white font-orbitron text-sm font-bold tracking-[2px] hover:translate-y-[-3px] hover:shadow-[0_20px_60px_rgba(99,102,241,0.5)] transition-all relative overflow-hidden group"
        >
          <span className="relative z-10">JOIN WAITLIST</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
        </button>
        <button className="px-[52px] py-5 bg-transparent border-2 border-border-glow rounded-xl text-text-primary font-orbitron text-sm font-semibold tracking-[2px] hover:border-primary hover:bg-primary/10 transition-all">
          WATCH DEMO
        </button>
      </div>

      {/* Code Window Visual */}
      <div className="relative w-full max-w-[1000px]">
        <div 
          className="bg-[rgba(15,10,30,0.9)] border border-border-glow rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_100px_rgba(99,102,241,0.2)] hover:scale-[1.02] transition-transform duration-500"
          style={{ 
            transform: 'perspective(1000px) rotateX(5deg)',
          }}
        >
          {/* Window Header */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-black/30 border-b border-border-subtle">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            <span className="flex-1 text-center font-mono text-xs text-text-muted">
              routes/users.py — CodeLens Pro
            </span>
          </div>

          {/* Window Content */}
          <div className="p-6 font-mono text-[13px] leading-8">
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">24</span>
              <span><span className="text-[#fbbf24]">@router.get</span>(<span className="text-[#86efac]">"/api/users"</span>)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">25</span>
              <span><span className="text-[#c084fc]">async def</span> <span className="text-[#60a5fa]">get_users</span>(</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">26</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;page: <span className="text-[#f9a8d4]">int</span> = <span className="text-[#86efac]">1</span>,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">27</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;limit: <span className="text-[#f9a8d4]">int</span> = <span className="text-[#86efac]">10</span></span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">28</span>
              <span>):</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">29</span>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c084fc]">return</span> await db.users.find()
                <span className="inline-block w-2.5 h-[18px] bg-primary animate-blink ml-1" />
              </span>
            </div>
          </div>
        </div>

        {/* CodeLens Overlay */}
        <div className="absolute top-5 -right-5 bg-[rgba(15,10,30,0.95)] border border-accent-cyan/30 rounded-xl p-4 max-w-[280px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] hidden md:block">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-6 h-6 bg-gradient-to-br from-accent-cyan to-secondary rounded-md flex items-center justify-center text-xs">
              CL
            </div>
            <span className="font-orbitron text-[10px] font-semibold tracking-wider text-accent-cyan">
              CODELENS DISCOVERED
            </span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            Found <strong className="text-accent-emerald font-mono">GET /api/users</strong> — supports pagination. Ready to test →
          </p>
        </div>
      </div>
    </section>
  )
}
