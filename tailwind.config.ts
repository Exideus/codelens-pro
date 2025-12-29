import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Main backgrounds
        'bg-deep': '#030308',
        'bg-surface': 'rgba(15, 10, 30, 0.85)',
        'bg-card': 'rgba(25, 20, 50, 0.6)',
        
        // Borders
        'border-glow': 'rgba(99, 102, 241, 0.3)',
        'border-subtle': 'rgba(255, 255, 255, 0.06)',
        
        // Primary colors
        'primary': '#6366f1',
        'primary-glow': '#818cf8',
        'secondary': '#a855f7',
        
        // Accent colors
        'accent-cyan': '#22d3ee',
        'accent-emerald': '#10b981',
        'accent-amber': '#f59e0b',
        'accent-rose': '#f43f5e',
        
        // Text colors
        'text-primary': '#f8fafc',
        'text-secondary': 'rgba(248, 250, 252, 0.7)',
        'text-muted': 'rgba(248, 250, 252, 0.4)',
        
        // Marble colors (for temple)
        'marble-light': '#e8e4df',
        'marble-mid': '#d4cfc8',
        'marble-dark': '#a39e97',
        'marble-shadow': '#6b6660',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'glow-rotate': 'glow-rotate 8s linear infinite',
        'rainbow-move': 'rainbow-move 6s linear infinite',
        'text-glow': 'text-glow 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'glow-rotate': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'rainbow-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '300% 50%' },
        },
        'text-glow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
        '300': '300% 100%',
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}

export default config
