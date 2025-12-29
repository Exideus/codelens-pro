import { useState } from 'react'

const faqItems = [
  {
    question: 'What frameworks does CodeLens support?',
    answer: 'CodeLens supports <strong>all major frameworks</strong>: Express, FastAPI, Django, Flask, Spring Boot, NestJS, Laravel, Rails, ASP.NET, and more. If your framework uses decorators, annotations, or route definitions, CodeLens will find them. We\'re adding new frameworks every month.',
  },
  {
    question: 'Is my code secure? Do you store it?',
    answer: '<strong>Your code never leaves your machine.</strong> CodeLens runs 100% locally. We don\'t upload, store, or process your code on any server. Zero telemetry on your actual code. Your intellectual property stays yours.',
  },
  {
    question: 'How is this different from just using Postman?',
    answer: 'Postman is great — if you already know all your endpoints. <strong>CodeLens discovers them automatically</strong> from your actual code. No manual entry. No guessing parameters. No outdated collections. Plus, you get codebase understanding and auto-documentation. It\'s Postman + Sourcegraph + ReadMe in one tool.',
  },
  {
    question: "I'm a senior developer. Isn't this for juniors?",
    answer: 'The best developers use the best tools. You don\'t write assembly code — <strong>why manually explore folders?</strong> Even 10x devs spend hours on new codebases. CodeLens gives you that time back. Our heaviest users are senior engineers and CTOs who value their time.',
  },
  {
    question: 'What happens after the beta?',
    answer: 'Pre-launch pricing is <strong>locked forever</strong> for early adopters. When we launch publicly, prices go up to $55/mo (Pro) and $99/user (Team). Join the waitlist now, and you\'ll keep your discounted rate for life.',
  },
  {
    question: 'Can I use it offline?',
    answer: '<strong>Yes.</strong> CodeLens works completely offline. No internet required for code analysis, API discovery, or documentation generation. Perfect for air-gapped environments, secure networks, or when you\'re on a plane.',
  },
  {
    question: 'How fast is the analysis?',
    answer: 'Most codebases are analyzed in <strong>under 60 seconds</strong>. A typical 50,000 line project? About 30 seconds. We\'ve tested on repos with 500,000+ lines — still under 3 minutes. The bottleneck is your disk speed, not CodeLens.',
  },
  {
    question: "What if it doesn't work for my codebase?",
    answer: '<strong>30-day money-back guarantee.</strong> If CodeLens doesn\'t save you at least 10 hours in the first month, we\'ll refund every penny. No questions, no hassle. We\'re that confident.',
  },
  {
    question: 'Do you offer team discounts?',
    answer: 'Our Team plan ($79/user) already includes <strong>20% off</strong> during pre-launch. For Enterprise (10+ users), we offer custom pricing with additional volume discounts. Contact us for a tailored quote.',
  },
  {
    question: 'Can I export the documentation?',
    answer: '<strong>Absolutely.</strong> Export to OpenAPI 3.0 (YAML/JSON), Markdown, HTML, or directly to Swagger UI. Use it in your existing documentation pipeline, import to Postman, or host it anywhere. Your docs, your format.',
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative z-10 py-[120px] px-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="text-center mb-[60px]">
        <span className="inline-block px-6 py-2.5 bg-primary/10 border border-border-glow rounded-full font-orbitron text-[11px] font-semibold tracking-[2px] text-primary-glow mb-6">
          QUESTIONS & ANSWERS
        </span>
        <h2 className="font-orbitron text-[clamp(32px,5vw,52px)] font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
          Everything you need to know about CodeLens Pro
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="max-w-[900px] mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`bg-[rgba(15,10,30,0.6)] border border-border-subtle rounded-2xl overflow-hidden transition-all hover:border-border-glow ${
              activeIndex === index ? 'border-border-glow' : ''
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className="font-orbitron text-[15px] font-semibold text-text-primary pr-4">
                {item.question}
              </h3>
              <span
                className={`w-8 h-8 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary-glow text-xl transition-transform ${
                  activeIndex === index ? 'rotate-45 bg-primary text-white' : ''
                }`}
              >
                +
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-400 ${
                activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div
                className="px-7 pb-6 text-[15px] text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
