import { useState, useEffect } from 'react'
import { formatCurrency } from '@/lib/utils'

export default function ROICalculator() {
  const [devCount, setDevCount] = useState(5)
  const [hourlyRate, setHourlyRate] = useState(75)
  const [hoursWasted, setHoursWasted] = useState(8)

  const [weeklyLoss, setWeeklyLoss] = useState(0)
  const [monthlyLoss, setMonthlyLoss] = useState(0)
  const [yearlyLoss, setYearlyLoss] = useState(0)
  const [yearlySavings, setYearlySavings] = useState(0)
  const [roiMultiple, setRoiMultiple] = useState(0)

  useEffect(() => {
    const weekly = devCount * hourlyRate * hoursWasted
    const monthly = weekly * 4
    const yearly = weekly * 52
    const savings = yearly * 0.8
    const roi = Math.round(savings / (29 * 12))

    setWeeklyLoss(weekly)
    setMonthlyLoss(monthly)
    setYearlyLoss(yearly)
    setYearlySavings(savings)
    setRoiMultiple(roi)
  }, [devCount, hourlyRate, hoursWasted])

  return (
    <section 
      className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(239, 68, 68, 0.03), transparent)'
      }}
    >
      {/* Header */}
      <div className="text-center mb-[60px]">
        <h2 className="font-orbitron text-[clamp(28px,5vw,48px)] font-bold mb-4 text-accent-rose">
          How Much Are You Losing?
        </h2>
        <p className="text-lg text-text-secondary max-w-[700px] mx-auto">
          Drag the sliders. See the real cost of slow code comprehension.
        </p>
      </div>

      {/* Calculator */}
      <div className="max-w-[900px] mx-auto bg-[rgba(15,10,30,0.8)] border border-border-glow rounded-3xl p-[50px]">
        {/* Slider: Dev Count */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-base text-text-secondary">Developers on your team</span>
            <span className="font-orbitron text-2xl font-bold text-primary-glow">{devCount}</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={devCount}
            onChange={(e) => setDevCount(Number(e.target.value))}
            className="calc-slider"
          />
        </div>

        {/* Slider: Hourly Rate */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-base text-text-secondary">Average hourly rate ($)</span>
            <span className="font-orbitron text-2xl font-bold text-primary-glow">${hourlyRate}</span>
          </div>
          <input
            type="range"
            min="25"
            max="250"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="calc-slider"
          />
        </div>

        {/* Slider: Hours Wasted */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-base text-text-secondary">Hours/week spent understanding code</span>
            <span className="font-orbitron text-2xl font-bold text-primary-glow">{hoursWasted}</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={hoursWasted}
            onChange={(e) => setHoursWasted(Number(e.target.value))}
            className="calc-slider"
          />
        </div>

        {/* Divider */}
        <div className="h-px bg-border-subtle my-10" />

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-10">
          <div className="text-center p-[30px_20px] bg-red-500/5 border border-red-500/20 rounded-2xl">
            <div className="font-orbitron text-4xl font-black text-accent-rose mb-2">
              {formatCurrency(weeklyLoss)}
            </div>
            <div className="text-sm text-text-secondary">Lost per WEEK</div>
          </div>
          <div className="text-center p-[30px_20px] bg-red-500/5 border border-red-500/20 rounded-2xl">
            <div className="font-orbitron text-4xl font-black text-accent-rose mb-2">
              {formatCurrency(monthlyLoss)}
            </div>
            <div className="text-sm text-text-secondary">Lost per MONTH</div>
          </div>
          <div className="text-center p-[30px_20px] bg-red-500/5 border border-red-500/20 rounded-2xl">
            <div className="font-orbitron text-4xl font-black text-accent-rose mb-2">
              {formatCurrency(yearlyLoss)}
            </div>
            <div className="text-sm text-text-secondary">Lost per YEAR</div>
          </div>
        </div>

        {/* Savings */}
        <div 
          className="text-center p-10 rounded-2xl border-2"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))',
            borderColor: 'rgba(16, 185, 129, 0.3)'
          }}
        >
          <div className="text-base text-text-secondary mb-2">
            With CodeLens (80% time saved), you save:
          </div>
          <div className="font-orbitron text-[56px] font-black text-accent-emerald">
            {formatCurrency(yearlySavings)}/year
          </div>
          <div className="text-sm text-text-muted mt-2">
            That's <span className="text-accent-emerald font-bold">{roiMultiple.toLocaleString()}x</span> return on a Pro subscription
          </div>
        </div>
      </div>
    </section>
  )
}
