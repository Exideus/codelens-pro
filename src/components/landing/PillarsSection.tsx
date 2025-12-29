const pillars = [
  {
    type: 'understand',
    icon: '🎯',
    title: 'UNDERSTAND',
    tagline: 'INSTANT CLARITY',
    description: 'Drop any codebase. Get a complete map in minutes. No more folder diving.',
    features: [
      'Any folder, repo, or zip',
      'Architecture in minutes',
      'Interactive Q&A',
      'Dependency mapping',
    ],
    color: 'cyan', // --accent-cyan: #22d3ee
  },
  {
    type: 'test',
    icon: '⚡',
    title: 'TEST',
    tagline: 'API TESTING',
    description: 'Full API testing. CodeLens finds every endpoint. You just click send.',
    features: [
      'Auto-discover endpoints',
      'Generate payloads',
      'JSON, Form, Auth',
      'Source code links',
    ],
    badge: '⚡ LIKE POSTMAN, BUT SMARTER',
    color: 'orange', // #ff6c37
  },
  {
    type: 'document',
    icon: '📜',
    title: 'DOCUMENT',
    tagline: 'AUTO-DOCS',
    description: 'OpenAPI specs, README files, beautiful docs. All automatic.',
    features: [
      'OpenAPI 3.0 export',
      'Auto README',
      'Swagger UI',
      'MD, HTML, YAML',
    ],
    color: 'purple', // --secondary: #a855f7
  },
]

function getIconStyle(color: string): React.CSSProperties {
  if (color === 'cyan') {
    return {
      background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(34, 211, 238, 0.05))',
      boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)',
    }
  }
  if (color === 'orange') {
    return {
      background: 'linear-gradient(135deg, rgba(255, 108, 55, 0.3), rgba(255, 108, 55, 0.1))',
      boxShadow: '0 0 30px rgba(255, 108, 55, 0.4)',
    }
  }
  // purple
  return {
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(168, 85, 247, 0.05))',
    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
  }
}

function getTitleColor(color: string): string {
  if (color === 'cyan') return '#22d3ee'
  if (color === 'orange') return '#ff6c37'
  return '#a855f7'
}

export default function PillarsSection() {
  return (
    <section id="features" className="relative z-10 py-[140px] px-10 max-w-[1400px] mx-auto">
      {/* Header - .section-header */}
      <div className="text-center mb-20">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          THE THREE PILLARS
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4">
          One Platform. Complete Mastery.
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          Stop switching between tools. CodeLens unifies everything.
        </p>
      </div>

      {/* Temple - .temple */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* Temple Roof - .temple-roof */}
        <div className="relative h-20 mb-[-2px]">
          {/* Pediment - .pediment */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1100px]">
            {/* Pediment Triangle - .pediment-triangle */}
            <div 
              className="w-full h-20"
              style={{
                background: 'linear-gradient(180deg, #e8e4df 0%, #d4cfc8 100%)',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </div>

        {/* Entablature - .entablature */}
        <div 
          className="h-10 rounded-t"
          style={{
            background: 'linear-gradient(180deg, #e8e4df 0%, #d4cfc8 50%, #a39e97 100%)',
            boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
          }}
        />

        {/* Columns Container - .columns-container */}
        <div 
          className="flex flex-col lg:flex-row justify-around px-10 gap-[100px] lg:gap-0"
          style={{
            background: 'linear-gradient(180deg, rgba(15, 10, 30, 0.3) 0%, transparent 100%)',
          }}
        >
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center flex-1 max-w-[320px] mx-auto lg:mx-0">
              {/* Capital - .column-capital */}
              <div className="w-[140px] h-[50px] relative z-[2]">
                {/* Volute - .capital-volute */}
                <div 
                  className="absolute w-full h-[25px] top-0 rounded-t-[50px]"
                  style={{
                    background: 'linear-gradient(180deg, #e8e4df 0%, #d4cfc8 100%)',
                  }}
                >
                  {/* Left Scroll */}
                  <div 
                    className="absolute w-[30px] h-[30px] rounded-full top-[5px] left-[-5px]"
                    style={{
                      background: 'linear-gradient(135deg, #e8e4df, #a39e97)',
                      boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.3)',
                    }}
                  />
                  {/* Right Scroll */}
                  <div 
                    className="absolute w-[30px] h-[30px] rounded-full top-[5px] right-[-5px]"
                    style={{
                      background: 'linear-gradient(135deg, #e8e4df, #a39e97)',
                      boxShadow: 'inset 3px 3px 6px rgba(0,0,0,0.3)',
                    }}
                  />
                </div>
                {/* Neck - .capital-neck */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110px] h-[25px]"
                  style={{
                    background: 'linear-gradient(180deg, #d4cfc8 0%, #e8e4df 50%, #d4cfc8 100%)',
                  }}
                />
              </div>

              {/* Shaft - .column-shaft */}
              <div 
                className="w-[100px] min-h-[500px] relative"
                style={{
                  background: 'linear-gradient(90deg, #6b6660 0%, #a39e97 10%, #d4cfc8 25%, #e8e4df 50%, #d4cfc8 75%, #a39e97 90%, #6b6660 100%)',
                  boxShadow: '10px 0 30px rgba(0,0,0,0.3), -10px 0 30px rgba(0,0,0,0.3)',
                }}
              >
                {/* Flutes */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(0,0,0,0.1) 8px, rgba(0,0,0,0.1) 9px, transparent 9px, transparent 17px)',
                  }}
                />

                {/* Content - .column-content - ABSOLUT POSITIONIERT */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] text-center p-[30px] rounded-2xl border border-border-glow z-10"
                  style={{
                    background: 'rgba(3, 3, 8, 0.95)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Icon - .column-icon */}
                  <div 
                    className="w-[70px] h-[70px] mx-auto mb-5 rounded-full flex items-center justify-center text-[32px]"
                    style={getIconStyle(pillar.color)}
                  >
                    {pillar.icon}
                  </div>

                  {/* Title - .column-title */}
                  <h3 
                    className="font-orbitron text-xl font-bold mb-1.5 tracking-[2px]"
                    style={{ color: getTitleColor(pillar.color) }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Tagline - .column-tagline */}
                  <p className="font-orbitron text-[9px] tracking-[2px] text-text-muted mb-4">
                    {pillar.tagline}
                  </p>

                  {/* Description - .column-desc */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Features - .column-features */}
                  <div className="text-left">
                    {pillar.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 py-2 text-xs text-text-secondary border-b border-border-subtle last:border-b-0"
                      >
                        <span className="text-accent-emerald">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Badge - .postman-badge */}
                  {pillar.badge && (
                    <div 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[20px] mt-4 font-orbitron text-[9px] tracking-wider"
                      style={{
                        background: 'rgba(255, 108, 55, 0.1)',
                        border: '1px solid rgba(255, 108, 55, 0.3)',
                        color: '#ff6c37',
                      }}
                    >
                      {pillar.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Base - .column-base */}
              <div className="w-[130px] h-10 relative">
                {/* Torus - .base-torus */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[15px] rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #e8e4df 0%, #d4cfc8 50%, #a39e97 100%)',
                  }}
                />
                {/* Plinth - .base-plinth */}
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130px] h-5"
                  style={{
                    background: 'linear-gradient(180deg, #d4cfc8 0%, #a39e97 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Temple Base - .temple-base */}
        <div 
          className="h-[30px] mt-[-2px]"
          style={{
            background: 'linear-gradient(180deg, #a39e97 0%, #6b6660 100%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          }}
        />
      </div>
    </section>
  )
}
