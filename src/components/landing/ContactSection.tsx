export default function ContactSection() {
  return (
    <section 
      className="relative z-10 py-[120px] px-10"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.03))'
      }}
    >
      <div className="max-w-[700px] mx-auto text-center bg-[rgba(15,10,30,0.6)] border border-border-glow rounded-3xl p-[60px_40px]">
        <div className="text-[64px] mb-6">💬</div>
        <h2 className="font-orbitron text-[28px] font-bold mb-4">
          Still Got Questions?
        </h2>
        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
          We're developers too. We get it. Reach out and we'll help you figure out if CodeLens is right for your team.
        </p>
        
        {/* Email */}
        <a
          href="mailto:hello@codelens.dev"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border border-border-glow rounded-xl font-mono text-lg text-primary-glow hover:bg-primary/20 hover:translate-y-[-2px] transition-all"
        >
          📧 hello@codelens.dev
        </a>

        {/* Socials */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#"
            className="w-12 h-12 bg-white/[0.03] border border-border-subtle rounded-full flex items-center justify-center text-text-muted text-xl hover:border-primary hover:text-primary-glow hover:bg-primary/10 transition-all"
            title="Twitter"
          >
            𝕏
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/[0.03] border border-border-subtle rounded-full flex items-center justify-center text-text-muted text-xl hover:border-primary hover:text-primary-glow hover:bg-primary/10 transition-all"
            title="GitHub"
          >
            ⌘
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/[0.03] border border-border-subtle rounded-full flex items-center justify-center text-text-muted text-xl hover:border-primary hover:text-primary-glow hover:bg-primary/10 transition-all"
            title="Discord"
          >
            💬
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-white/[0.03] border border-border-subtle rounded-full flex items-center justify-center text-text-muted text-xl hover:border-primary hover:text-primary-glow hover:bg-primary/10 transition-all"
            title="LinkedIn"
          >
            in
          </a>
        </div>
      </div>
    </section>
  )
}
