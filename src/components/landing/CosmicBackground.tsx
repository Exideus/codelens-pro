import { useEffect, useRef } from 'react'

export default function CosmicBackground() {
  const starsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!starsRef.current) return
    
    // Generate 80 stars
    const starsContainer = starsRef.current
    starsContainer.innerHTML = ''
    
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'absolute w-0.5 h-0.5 bg-white rounded-full opacity-30 animate-twinkle'
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 3}s`
      starsContainer.appendChild(star)
    }
  }, [])

  return (
    <>
      {/* Cosmic gradient background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 60% 80%, rgba(34, 211, 238, 0.06) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Stars container */}
      <div 
        ref={starsRef}
        className="fixed inset-0 z-[1] pointer-events-none"
      />
      
      {/* Grid overlay */}
      <div 
        className="fixed inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />
    </>
  )
}
