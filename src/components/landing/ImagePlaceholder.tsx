interface ImagePlaceholderProps {
  number: number
}

export default function ImagePlaceholder({ number }: ImagePlaceholderProps) {
  return (
    <div className="relative z-10 py-[60px] px-10 max-w-[1200px] mx-auto">
      <div 
        className="w-full h-[400px] rounded-[20px] flex flex-col items-center justify-center gap-4 border-2 border-dashed border-border-glow"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))'
        }}
      >
        <div className="text-5xl opacity-50">🖼️</div>
        <div className="font-orbitron text-sm tracking-[2px] text-text-muted">
          IMAGE PLACEHOLDER #{number}
        </div>
        <div className="text-xs text-text-muted opacity-60">
          Recommended: 1200 x 400px
        </div>
      </div>
    </div>
  )
}
