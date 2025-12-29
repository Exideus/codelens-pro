import { useState, useEffect } from 'react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  preselectedTier?: string
}

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'ES', name: 'Spain' },
  { code: 'IT', name: 'Italy' },
  { code: 'PT', name: 'Portugal' },
  { code: 'AT', name: 'Austria' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'BE', name: 'Belgium' },
  { code: 'SE', name: 'Sweden' },
  { code: 'NO', name: 'Norway' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'PL', name: 'Poland' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'IE', name: 'Ireland' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'JP', name: 'Japan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'SG', name: 'Singapore' },
  { code: 'IN', name: 'India' },
  { code: 'BR', name: 'Brazil' },
  { code: 'MX', name: 'Mexico' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CL', name: 'Chile' },
  { code: 'CO', name: 'Colombia' },
  { code: 'IL', name: 'Israel' },
  { code: 'AE', name: 'UAE' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'EG', name: 'Egypt' },
  { code: 'PH', name: 'Philippines' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'TH', name: 'Thailand' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'CN', name: 'China' },
  { code: 'RU', name: 'Russia' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'RO', name: 'Romania' },
  { code: 'HU', name: 'Hungary' },
  { code: 'GR', name: 'Greece' },
  { code: 'TR', name: 'Turkey' },
  { code: 'OTHER', name: 'Other' },
]

export default function WaitlistModal({ isOpen, onClose, preselectedTier }: WaitlistModalProps) {
  const [selectedTier, setSelectedTier] = useState(preselectedTier?.toLowerCase() || 'pro')
  const [showTeamSize, setShowTeamSize] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(2847)

  useEffect(() => {
    if (preselectedTier) {
      setSelectedTier(preselectedTier.toLowerCase())
    }
  }, [preselectedTier])

  useEffect(() => {
    setShowTeamSize(selectedTier === 'team' || selectedTier === 'enterprise')
  }, [selectedTier])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setWaitlistCount((prev) => prev + 1)
  }

  const handleClose = () => {
    setIsSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-[10px] z-[2000] flex items-center justify-center p-5"
      onClick={handleClose}
    >
      <div
        className="bg-[rgba(15,10,30,0.98)] border border-primary/30 rounded-3xl p-[50px] max-w-[500px] w-full relative shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_100px_rgba(99,102,241,0.2)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-10 h-10 bg-white/5 border border-border-subtle rounded-full flex items-center justify-center text-text-muted text-2xl hover:bg-white/10 hover:text-text-primary transition-all"
        >
          ×
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <h2 className="font-orbitron text-[28px] font-bold text-center mb-2">
              Join the Waitlist
            </h2>
            <p className="text-base text-text-secondary text-center mb-8">
              Select your plan and secure your spot
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Tier Selector */}
              <div className="mb-5">
                <label className="block text-sm text-text-secondary font-semibold mb-2">
                  Which plan interests you? *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'pro', name: 'Pro', price: '$29/mo', desc: 'Serious developers' },
                    { value: 'team', name: 'Team', price: '$79/user', desc: 'Teams shipping fast' },
                    { value: 'enterprise', name: 'Enterprise', price: 'Custom', desc: '10+ users' },
                  ].map((tier) => (
                    <label key={tier.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="tier"
                        value={tier.value}
                        checked={selectedTier === tier.value}
                        onChange={(e) => setSelectedTier(e.target.value)}
                        className="hidden"
                      />
                      <div
                        className={`flex flex-col items-center p-5 bg-white/[0.03] border-2 rounded-xl transition-all ${
                          selectedTier === tier.value
                            ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                            : 'border-border-subtle hover:border-primary/50'
                        }`}
                      >
                        <span className="font-orbitron text-sm font-bold">{tier.name}</span>
                        <span className="font-orbitron text-lg font-black text-primary-glow">{tier.price}</span>
                        <span className="text-[11px] text-text-muted">{tier.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Team Size (conditional) */}
              {showTeamSize && (
                <div className="mb-5">
                  <label className="block text-sm text-text-secondary font-semibold mb-2">
                    How many team members? *
                  </label>
                  <select className="form-select w-full px-4 py-4 bg-white/[0.03] border border-border-subtle rounded-xl text-text-primary font-rajdhani text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all" required>
                    <option value="">Select...</option>
                    {selectedTier === 'team' ? (
                      <>
                        <option value="3">3 users</option>
                        <option value="4">4 users</option>
                        <option value="5">5 users</option>
                        <option value="6">6 users</option>
                        <option value="7">7 users</option>
                        <option value="8">8 users</option>
                        <option value="9">9 users</option>
                      </>
                    ) : (
                      <>
                        <option value="10-20">10-20 users</option>
                        <option value="21-50">21-50 users</option>
                        <option value="51-100">51-100 users</option>
                        <option value="100+">100+ users</option>
                      </>
                    )}
                  </select>
                </div>
              )}

              {/* Email */}
              <div className="mb-5">
                <label className="block text-sm text-text-secondary font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-4 bg-white/[0.03] border border-border-subtle rounded-xl text-text-primary font-rajdhani text-base placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all"
                />
              </div>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-sm text-text-secondary font-semibold mb-2">
                  Name <span className="text-text-muted font-normal text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-4 bg-white/[0.03] border border-border-subtle rounded-xl text-text-primary font-rajdhani text-base placeholder:text-text-muted focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all"
                />
              </div>

              {/* Developer Type & Experience */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm text-text-secondary font-semibold mb-2">
                    Developer Type *
                  </label>
                  <select className="form-select w-full px-4 py-4 bg-white/[0.03] border border-border-subtle rounded-xl text-text-primary font-rajdhani text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all" required>
                    <option value="">Select...</option>
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                    <option value="fullstack">Fullstack</option>
                    <option value="devops">DevOps</option>
                    <option value="mobile">Mobile</option>
                    <option value="data">Data/ML</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary font-semibold mb-2">
                    Experience *
                  </label>
                  <select className="form-select w-full px-4 py-4 bg-white/[0.03] border border-border-subtle rounded-xl text-text-primary font-rajdhani text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all" required>
                    <option value="">Select...</option>
                    <option value="junior">Junior (0-2 yrs)</option>
                    <option value="mid">Mid (3-5 yrs)</option>
                    <option value="senior">Senior (6-10 yrs)</option>
                    <option value="lead">Lead (10+ yrs)</option>
                  </select>
                </div>
              </div>

              {/* Country */}
              <div className="mb-5">
                <label className="block text-sm text-text-secondary font-semibold mb-2">
                  Country *
                </label>
                <select className="form-select w-full px-4 py-4 bg-white/[0.03] border border-border-subtle rounded-xl text-text-primary font-rajdhani text-base focus:outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all" required>
                  <option value="">Select...</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-orbitron text-sm font-bold tracking-[2px] hover:translate-y-[-2px] hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)] transition-all mt-4"
              >
                JOIN WAITLIST
              </button>
            </form>

            {/* Count */}
            <p className="text-center mt-6 text-sm text-text-muted">
              <span className="text-accent-emerald font-bold">{waitlistCount.toLocaleString()}</span> developers already on the list
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-10">
            <div className="text-[80px] mb-6">🎉</div>
            <h3 className="font-orbitron text-[28px] font-bold text-accent-emerald mb-4">
              You're on the list!
            </h3>
            <p className="text-base text-text-secondary leading-relaxed">
              We'll notify you as soon as CodeLens Pro launches. Get ready to master any codebase in minutes.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
