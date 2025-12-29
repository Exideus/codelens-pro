# CodeLens Pro Landing Page

Production-ready React landing page for CodeLens Pro.

## Tech Stack

- **Framework:** Vite + React 18
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Routing:** react-router-dom
- **Fonts:** Orbitron, Rajdhani, JetBrains Mono (Google Fonts)

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── landing/
│       ├── LandingPage.tsx        # Main page component
│       ├── CosmicBackground.tsx   # Animated background
│       ├── Navigation.tsx         # Fixed header nav
│       ├── HeroSection.tsx        # Hero with code window
│       ├── BleedingSection.tsx    # "Bleeding Money" section
│       ├── WhoForSection.tsx      # 3 persona cards
│       ├── BoomStatement.tsx      # Bold statement component
│       ├── ImagePlaceholder.tsx   # Placeholder for images
│       ├── ROICalculator.tsx      # Interactive calculator
│       ├── DayInLifeSection.tsx   # Before/After comparison
│       ├── CodeStatementVisual.tsx # Code snippet visual
│       ├── PillarsSection.tsx     # Temple with 3 columns
│       ├── ObjectionsSection.tsx  # Objection handling
│       ├── ValueStackSection.tsx  # Value stack list
│       ├── PricingSection.tsx     # 3-tier pricing
│       ├── FAQSection.tsx         # Accordion FAQ
│       ├── ContactSection.tsx     # Contact info
│       ├── Footer.tsx             # Footer
│       └── WaitlistModal.tsx      # Waitlist signup modal
├── lib/
│   └── utils.ts                   # Utility functions
├── styles/
│   └── globals.css                # Global styles + Tailwind
├── App.tsx                        # Router setup
└── main.tsx                       # Entry point
```

## Deployment (Vercel)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Features

- ✅ Cosmic animated background with stars
- ✅ Fixed navigation with language switcher
- ✅ Hero section with code window visual
- ✅ ROI Calculator with live calculations
- ✅ Day in the Life comparison cards
- ✅ Greek temple "Three Pillars" section
- ✅ 3-tier pricing with animated borders
- ✅ FAQ accordion
- ✅ Waitlist modal with form validation
- ✅ Fully responsive design
- ✅ TypeScript strict mode
- ✅ Tailwind CSS with custom config
