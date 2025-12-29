import { useState } from 'react'

interface NavigationProps {
  onOpenModal: (tier?: string) => void
}

export default function Navigation({ onOpenModal }: NavigationProps) {
  const [activeLang, setActiveLang] = useState('en')

  const languages = ['EN', 'ES', 'DE']

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] px-10 py-4 flex justify-between items-center bg-bg-deep/80 backdrop-blur-[20px] border-b border-border-subtle">
      {/* Logo */}
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center font-orbitron font-black text-base shadow-[0_0_30px_rgba(99,102,241,0.5)]">
          CL
        </div>
        <span className="font-orbitron text-[22px] font-bold tracking-[3px] bg-gradient-to-r from-text-primary to-primary-glow bg-clip-text text-transparent">
          CODELENS
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
          Features
        </a>
        <a href="#comparison" className="text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
          Compare
        </a>
        <a href="#pricing" className="text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
          Pricing
        </a>
        <a href="#" className="text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
          Docs
        </a>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="flex bg-white/[0.03] border border-border-glow rounded-lg overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang.toLowerCase())}
              className={`px-3 py-2 font-orbitron text-[10px] font-semibold transition-all ${
                activeLang === lang.toLowerCase()
                  ? 'text-primary-glow bg-primary/15'
                  : 'text-text-muted bg-transparent'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onOpenModal('Pro')}
          className="px-6 py-2.5 bg-gradient-to-br from-primary to-secondary rounded-lg text-white font-orbitron text-xs font-semibold tracking-[2px] hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)] transition-all"
        >
          JOIN WAITLIST
        </button>
      </div>
    </nav>
  )
}
