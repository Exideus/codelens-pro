const withoutItems = [
  { time: '9:00 AM', task: 'Clone repo, stare at folders' },
  { time: '10:00 AM', task: 'Ask senior dev "where is X?"' },
  { time: '11:00 AM', task: 'Senior dev is in meetings' },
  { time: '1:00 PM', task: 'Still searching for API endpoints' },
  { time: '3:00 PM', task: 'Found endpoint, wrong parameters' },
  { time: '5:00 PM', task: 'Zero code shipped' },
]

const withItems = [
  { time: '9:00 AM', task: 'Drop codebase into CodeLens' },
  { time: '9:05 AM', task: 'Full architecture overview ready' },
  { time: '9:30 AM', task: 'All 47 API endpoints discovered' },
  { time: '10:00 AM', task: 'Testing APIs with generated payloads' },
  { time: '1:00 PM', task: 'First feature in progress' },
  { time: '5:00 PM', task: 'First PR submitted', emoji: '🎉' },
]

export default function DayInLifeSection() {
  return (
    <section className="relative z-10 py-[120px] px-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="text-center mb-[60px]">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          DAY IN THE LIFE
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4 italic">
          New Developer Joins Your Team
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          See the difference CodeLens makes
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto mt-[60px]">
        {/* Without CodeLens */}
        <div className="bg-[rgba(15,10,30,0.6)] rounded-[20px] p-10 border-2 border-accent-rose/30">
          <div className="flex items-center gap-3 font-orbitron text-base font-bold tracking-[2px] mb-[30px] text-accent-rose">
            ❌ WITHOUT CODELENS
          </div>
          <div>
            {withoutItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 py-4 border-b border-border-subtle last:border-b-0"
              >
                <span className="font-mono text-[13px] text-text-muted min-w-[70px]">
                  {item.time}
                </span>
                <span className="text-[15px] text-text-secondary">
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* With CodeLens */}
        <div className="bg-[rgba(15,10,30,0.6)] rounded-[20px] p-10 border-2 border-accent-emerald/30">
          <div className="flex items-center gap-3 font-orbitron text-base font-bold tracking-[2px] mb-[30px] text-accent-emerald">
            ✅ WITH CODELENS
          </div>
          <div>
            {withItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 py-4 border-b border-border-subtle last:border-b-0"
              >
                <span className="font-mono text-[13px] text-text-muted min-w-[70px]">
                  {item.time}
                </span>
                <span className="text-[15px] text-text-secondary">
                  {item.task}
                  {item.emoji && <span className="ml-2">{item.emoji}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
