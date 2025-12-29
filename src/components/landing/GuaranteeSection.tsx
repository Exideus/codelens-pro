export default function GuaranteeSection() {
  return (
    <section className="relative z-10 py-[100px] px-10 max-w-[1400px] mx-auto text-center">
      <div 
        className="max-w-[800px] mx-auto p-[60px] rounded-3xl border-2"
        style={{
          background: 'rgba(16, 185, 129, 0.05)',
          borderColor: 'rgba(16, 185, 129, 0.3)',
        }}
      >
        <div className="text-[64px] mb-6">🛡️</div>
        <h3 className="font-orbitron text-[28px] font-bold text-accent-emerald mb-4">
          30-Day Money-Back Guarantee
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed">
          CodeLens Pro is launching in <strong className="text-primary-glow">Early Access Beta</strong>. We stand for quality — if it doesn't save you at least 10 hours in the first month, we'll refund every penny. No questions. No hassle. Zero risk. Your feedback shapes the product.
        </p>
      </div>
    </section>
  )
}
