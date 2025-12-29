interface PricingSectionProps {
  onOpenModal: (tier: string) => void
}

const pricingTiers = [
  {
    name: 'Pro',
    subtitle: 'For serious developers',
    originalPrice: '$55/mo',
    price: '$29',
    priceUnit: '/mo',
    description: 'Everything you need',
    features: [
      'Unlimited projects',
      'Unlimited requests',
      'All body types & auth',
      'OpenAPI export',
      'Priority support',
    ],
    discount: '47% OFF',
    cardClass: 'pricing-card-glow-pro',
    buttonClass: 'primary',
    textGlow: true,
  },
  {
    name: 'Team',
    subtitle: 'For teams shipping fast',
    originalPrice: '$99/user',
    price: '$79',
    priceUnit: '/user',
    description: 'Collaborate & scale',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Shared workspaces',
      'Admin dashboard',
      'Priority onboarding',
    ],
    discount: '20% OFF',
    badge: 'BEST FOR TEAMS',
    cardClass: 'pricing-card-rainbow',
    buttonClass: 'primary',
  },
  {
    name: 'Enterprise',
    subtitle: '10+ users',
    price: 'Custom',
    priceSize: 'small',
    description: 'For large organizations',
    features: [
      'Everything in Team',
      'SSO & security',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
    ],
    buttonClass: 'secondary',
    buttonText: 'CONTACT US',
  },
]

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  return (
    <section 
      id="pricing" 
      className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto"
      style={{
        background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.03), transparent)'
      }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          PRE-LAUNCH PRICING
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4">
          Lock In Your Price. Forever.
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          Pre-launch pricing ends when we launch. Join now.
        </p>
      </div>

      {/* Urgency Banner */}
      <div className="text-center mb-10">
        <div className="inline-block p-5 bg-red-500/10 border border-red-500/30 rounded-xl max-w-[500px]">
          <p className="font-orbitron text-sm text-accent-rose tracking-wider">
            🔥 Only <span className="font-black">247</span> spots left at this price
          </p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto mt-[60px]">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-[20px] p-8 text-center transition-all duration-400 ${tier.cardClass || 'bg-[rgba(15,10,30,0.6)] border border-border-subtle'}`}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary rounded-full font-orbitron text-[10px] font-semibold">
                {tier.badge}
              </div>
            )}

            {/* Discount Tag */}
            {tier.discount && (
              <div className="absolute top-5 right-5 px-2.5 py-1 bg-accent-rose rounded-md font-orbitron text-[10px] font-bold z-10">
                {tier.discount}
              </div>
            )}

            {/* Name */}
            <div className={`font-orbitron text-lg font-semibold mb-2 ${tier.textGlow ? 'text-glow-gradient' : ''}`}>
              {tier.name}
            </div>

            {/* Subtitle */}
            <div className="text-sm text-text-muted mb-2">
              {tier.subtitle}
            </div>

            {/* Original Price */}
            {tier.originalPrice && (
              <div className="text-lg text-text-muted line-through">
                {tier.originalPrice}
              </div>
            )}

            {/* Price */}
            <div className={`font-orbitron font-black mb-2 ${tier.textGlow ? 'text-glow-gradient' : ''} ${tier.priceSize === 'small' ? 'text-4xl' : 'text-5xl'}`}>
              {tier.price}
              {tier.priceUnit && (
                <span className="text-base font-normal text-text-muted">{tier.priceUnit}</span>
              )}
            </div>

            {/* Description */}
            <div className="text-sm text-text-muted mb-8">
              {tier.description}
            </div>

            {/* Features */}
            <div className="text-left mb-8">
              {tier.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-2.5 text-sm text-text-secondary border-b border-border-subtle last:border-b-0"
                >
                  <span className="text-accent-emerald">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              onClick={() => onOpenModal(tier.name)}
              className={`w-full py-4 rounded-xl font-orbitron text-xs font-semibold tracking-[2px] transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)] ${
                tier.buttonClass === 'primary'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-none'
                  : 'bg-transparent border border-border-glow text-text-primary'
              }`}
            >
              {tier.buttonText || 'JOIN WAITLIST'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
