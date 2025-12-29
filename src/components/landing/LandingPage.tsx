import { useState } from 'react'

// Background
import CosmicBackground from './CosmicBackground'

// Sections - IN EXAKTER REIHENFOLGE WIE HTML
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import BleedingSection from './BleedingSection'
import WhoForSection from './WhoForSection'
import BoomStatement from './BoomStatement'
import ImagePlaceholder from './ImagePlaceholder'
import ROICalculator from './ROICalculator'
import DayInLifeSection from './DayInLifeSection'
import CodeStatementVisual from './CodeStatementVisual'
import PillarsSection from './PillarsSection'
import ObjectionsSection from './ObjectionsSection'
import ValueStackSection from './ValueStackSection'
import TestimonialsSection from './TestimonialsSection'
import GuaranteeSection from './GuaranteeSection'
import ComparisonSection from './ComparisonSection'
import LosingSectionCTA from './LosingSectionCTA'
import PricingSection from './PricingSection'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

// Modal
import WaitlistModal from './WaitlistModal'

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | undefined>()

  const openModal = (tier?: string) => {
    setSelectedTier(tier)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTier(undefined)
  }

  return (
    <>
      {/* Background Elements */}
      <CosmicBackground />

      {/* Modal */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preselectedTier={selectedTier}
      />

      {/* Page Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation onOpenModal={openModal} />

        {/* 1. Hero */}
        <HeroSection onOpenModal={openModal} />

        {/* 2. Bleeding Money */}
        <BleedingSection />

        {/* 3. Who Is This For */}
        <WhoForSection />

        {/* 4. Boom #1 */}
        <BoomStatement text="Every minute you spend deciphering code is a minute you're NOT shipping." />

        {/* 5. Image Placeholder #1 */}
        <ImagePlaceholder number={1} />

        {/* 6. ROI Calculator */}
        <ROICalculator />

        {/* 7. Boom #2 */}
        <BoomStatement
          text="You're paying senior developers $150/hour to explain code to juniors. CodeLens does it in seconds. For $29/month."
          small
        />

        {/* 8. Day in the Life */}
        <DayInLifeSection />

        {/* 9. Code Statement Visual */}
        <CodeStatementVisual />

        {/* 10. Three Pillars (Temple) */}
        <PillarsSection />

        {/* 11. Boom #3 */}
        <BoomStatement text="Documentation? You'll never write it manually again." small />

        {/* 12. Image Placeholder #3 */}
        <ImagePlaceholder number={3} />

        {/* 13. Objections */}
        <ObjectionsSection />

        {/* 14. Boom #4 */}
        <BoomStatement text="Your ego isn't shipping features. Your tools are." />

        {/* 15. Image Placeholder #4 */}
        <ImagePlaceholder number={4} />

        {/* 16. Value Stack */}
        <ValueStackSection />

        {/* 17. Testimonials */}
        <TestimonialsSection />

        {/* 18. Image Placeholder #5 */}
        <ImagePlaceholder number={5} />

        {/* 19. Guarantee */}
        <GuaranteeSection />

        {/* 20. Comparison Table */}
        <ComparisonSection />

        {/* 21. Boom #5 */}
        <BoomStatement text="Stop duct-taping 5 tools together. Use one that actually works." />

        {/* 22. Losing Section CTA */}
        <LosingSectionCTA onOpenModal={openModal} />

        {/* 23. Pricing */}
        <PricingSection onOpenModal={openModal} />

        {/* 24. FAQ */}
        <FAQSection />

        {/* 25. Contact */}
        <ContactSection />

        {/* 26. Footer */}
        <Footer />
      </div>
    </>
  )
}
