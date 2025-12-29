export default function CodeStatementVisual() {
  return (
    <div className="relative z-10 py-[60px] px-10 max-w-[1200px] mx-auto">
      <div className="relative max-w-[700px] mx-auto">
        {/* Code Window */}
        <div className="bg-[rgba(15,10,30,0.9)] border border-border-glow rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_100px_rgba(99,102,241,0.2)] hover:scale-[1.02] transition-transform duration-500">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-5 py-3.5 bg-black/30 border-b border-border-subtle">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            <span className="flex-1 text-center font-mono text-xs text-text-muted">
              productivity.ts — Your Team
            </span>
          </div>

          {/* Window Content */}
          <div className="p-6 font-mono text-[13px] leading-8">
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">1</span>
              <span><span className="text-[#c084fc]">const</span> <span className="text-[#f9a8d4]">onboardingTime</span> = {'{'}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">2</span>
              <span>&nbsp;&nbsp;<span className="text-[#86efac]">before</span>: <span className="text-[#86efac]">"2 weeks"</span>,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">3</span>
              <span>&nbsp;&nbsp;<span className="text-[#86efac]">after</span>: <span className="text-[#86efac]">"2 hours"</span>,</span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">4</span>
              <span>&nbsp;&nbsp;<span className="text-[#60a5fa]">savings</span>: <span className="text-[#fbbf24]">() =&gt;</span> <span className="text-[#86efac]">"∞"</span></span>
            </div>
            <div className="flex gap-4">
              <span className="text-text-muted min-w-[30px] text-right">5</span>
              <span>{'};'}</span>
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className="absolute -top-5 -right-[30px] bg-[rgba(15,10,30,0.95)] border border-accent-cyan/30 rounded-xl p-4 max-w-[260px] shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          style={{
            // Arrow
          }}
        >
          <div 
            className="absolute left-[-20px] top-[30px] w-0 h-0"
            style={{
              borderWidth: '10px',
              borderStyle: 'solid',
              borderColor: 'transparent rgba(34, 211, 238, 0.3) transparent transparent',
            }}
          />
          <div className="flex items-center gap-2 mb-2.5">
            <div className="w-6 h-6 bg-gradient-to-br from-accent-cyan to-secondary rounded-md flex items-center justify-center text-xs">
              💡
            </div>
            <span className="font-orbitron text-[10px] font-semibold tracking-wider text-accent-amber">
              THE MATH IS SIMPLE
            </span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed">
            2 weeks → 2 hours.
            <br />
            <strong className="text-accent-emerald">That's 98% faster.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
