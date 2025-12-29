interface BoomStatementProps {
  text: string
  small?: boolean
}

export default function BoomStatement({ text, small = false }: BoomStatementProps) {
  return (
    <section className="relative z-10 text-center py-[120px] px-10 max-w-[1200px] mx-auto">
      <p 
        className={`font-orbitron font-black leading-[1.2] bg-gradient-to-br from-text-primary via-primary-glow to-accent-cyan bg-clip-text text-transparent ${
          small 
            ? 'text-[clamp(24px,4vw,42px)]' 
            : 'text-[clamp(28px,5vw,56px)]'
        }`}
      >
        {text}
      </p>
    </section>
  )
}
