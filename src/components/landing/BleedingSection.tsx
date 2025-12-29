export default function BleedingSection() {
  return (
    <section 
      className="relative z-10 text-center py-[120px] px-10"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(244, 63, 94, 0.05), transparent)'
      }}
    >
      <h2 className="font-orbitron text-[clamp(32px,6vw,64px)] font-black text-accent-rose mb-8 italic drop-shadow-[0_0_60px_rgba(244,63,94,0.4)]">
        You're Bleeding Money Every Single Day.
      </h2>
      <p className="text-xl text-text-secondary max-w-[800px] mx-auto leading-relaxed">
        Every new developer that joins your team costs you weeks of lost productivity. They're drowning in unfamiliar code, guessing API parameters, and begging senior devs for help. Meanwhile, your competitors are shipping.
      </p>
    </section>
  )
}
