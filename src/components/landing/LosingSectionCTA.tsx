interface LosingSectionCTAProps {
  onOpenModal: (tier?: string) => void
}

export default function LosingSectionCTA({ onOpenModal }: LosingSectionCTAProps) {
  return (
    <section 
      className="relative z-10 text-center py-[140px] px-10"
      style={{
        background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.03), transparent)'
      }}
    >
      <h2 className="font-orbitron text-[clamp(32px,6vw,56px)] font-black mb-6 italic">
        Stop Losing Weeks to Onboarding.
      </h2>
      <p className="text-xl text-text-secondary max-w-[700px] mx-auto mb-12 leading-relaxed">
        Every day you wait is another day of lost productivity, frustrated developers, and wasted money. Join the waitlist today.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <button
          onClick={() => onOpenModal('Pro')}
          className="px-[52px] py-5 bg-gradient-to-br from-primary to-secondary rounded-xl text-white font-orbitron text-sm font-bold tracking-[2px] hover:translate-y-[-3px] hover:shadow-[0_20px_60px_rgba(99,102,241,0.5)] transition-all"
        >
          JOIN WAITLIST NOW
        </button>
        <button className="px-[52px] py-5 bg-transparent border-2 border-border-glow rounded-xl text-text-primary font-orbitron text-sm font-semibold tracking-[2px] hover:border-primary hover:bg-primary/10 transition-all">
          BOOK A DEMO
        </button>
      </div>
    </section>
  )
}
