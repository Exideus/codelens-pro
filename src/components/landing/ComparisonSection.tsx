type CellValue = 'check' | 'cross' | 'partial'

interface ComparisonRow {
  capability: string
  codelens: CellValue
  postman: CellValue
  cursor: CellValue
  sourcegraph: CellValue
  highlight?: boolean
}

const comparisonData: ComparisonRow[] = [
  {
    capability: 'Understand any codebase instantly',
    codelens: 'check',
    postman: 'cross',
    cursor: 'partial',
    sourcegraph: 'check',
  },
  {
    capability: 'Auto-discover ALL API endpoints',
    codelens: 'check',
    postman: 'cross',
    cursor: 'cross',
    sourcegraph: 'cross',
  },
  {
    capability: 'Full API testing suite',
    codelens: 'check',
    postman: 'check',
    cursor: 'cross',
    sourcegraph: 'cross',
  },
  {
    capability: 'Auto-generate test payloads',
    codelens: 'check',
    postman: 'partial',
    cursor: 'cross',
    sourcegraph: 'cross',
  },
  {
    capability: 'Generate OpenAPI docs',
    codelens: 'check',
    postman: 'partial',
    cursor: 'cross',
    sourcegraph: 'cross',
  },
  {
    capability: 'All three in ONE tool',
    codelens: 'check',
    postman: 'cross',
    cursor: 'cross',
    sourcegraph: 'cross',
    highlight: true,
  },
]

function CellIcon({ value }: { value: CellValue }) {
  if (value === 'check') return <span className="text-accent-emerald text-xl">✓</span>
  if (value === 'cross') return <span className="text-text-muted">✗</span>
  if (value === 'partial') return <span className="text-accent-amber">◐</span>
  return null
}

export default function ComparisonSection() {
  return (
    <section 
      id="comparison"
      className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.02), transparent)'
      }}
    >
      {/* Header */}
      <div className="text-center mb-[60px]">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          THE COMPETITION
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4">
          Why Not Just Use...
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          We get asked this a lot. Here's the honest answer.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="max-w-[950px] mx-auto bg-[rgba(15,10,30,0.8)] border border-border-glow rounded-[20px] overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-5 bg-primary/10 border-b border-border-subtle">
          <div className="p-5 flex items-center font-orbitron text-[11px] font-semibold tracking-wider text-primary-glow">
            Capability
          </div>
          <div className="p-5 flex items-center justify-center font-orbitron text-[11px] font-semibold tracking-wider text-primary-glow">
            CodeLens
          </div>
          <div className="p-5 flex items-center justify-center font-orbitron text-[11px] font-semibold tracking-wider text-primary-glow">
            Postman
          </div>
          <div className="p-5 flex items-center justify-center font-orbitron text-[11px] font-semibold tracking-wider text-primary-glow">
            Cursor
          </div>
          <div className="p-5 flex items-center justify-center font-orbitron text-[11px] font-semibold tracking-wider text-primary-glow">
            Sourcegraph
          </div>
        </div>

        {/* Data Rows */}
        {comparisonData.map((row, index) => (
          <div 
            key={index}
            className={`grid grid-cols-5 border-b border-border-subtle last:border-b-0 ${
              row.highlight ? 'bg-primary/5' : ''
            }`}
          >
            <div className={`p-5 flex items-center text-sm ${
              row.highlight ? 'text-primary-glow font-semibold' : 'text-text-secondary'
            }`}>
              {row.capability}
            </div>
            <div className="p-5 flex items-center justify-center">
              <CellIcon value={row.codelens} />
            </div>
            <div className="p-5 flex items-center justify-center">
              <CellIcon value={row.postman} />
            </div>
            <div className="p-5 flex items-center justify-center">
              <CellIcon value={row.cursor} />
            </div>
            <div className="p-5 flex items-center justify-center">
              <CellIcon value={row.sourcegraph} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
