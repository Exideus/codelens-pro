export default function Footer() {
  return (
    <footer className="relative z-10 py-[60px] px-10 border-t border-border-subtle text-center">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center font-orbitron text-sm font-black shadow-[0_0_30px_rgba(99,102,241,0.5)]">
          CL
        </div>
        <span className="font-orbitron text-lg font-bold tracking-[3px] bg-gradient-to-r from-text-primary to-primary-glow bg-clip-text text-transparent">
          CODELENS PRO
        </span>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-8 mb-6 flex-wrap">
        <a href="#features" className="text-text-muted text-sm hover:text-text-primary transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-text-muted text-sm hover:text-text-primary transition-colors">
          Pricing
        </a>
        <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
          Documentation
        </a>
        <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
          Blog
        </a>
        <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
          Contact
        </a>
      </div>

      {/* Copyright */}
      <p className="text-[13px] text-text-muted">
        © 2025 CodeLens Pro. All rights reserved.
      </p>
    </footer>
  )
}
