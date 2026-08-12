/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cirql: {
          darkest: '#081c15',
          deep: '#113123',
          dark: '#1b4332',
          forest: '#2d6a4f',
          medium: '#40916c',
          sage: '#52b788',
          light: '#74c69d',
          soft: '#95d5b2',
          pale: '#b7e4c7',
          mint: '#d8f3dc',
          ice: '#eafaf1',
          cream: '#f8faf7',
          accent: '#10b981',
          neon: '#34d399',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(18, 56, 38, 0.08)',
        'glow': '0 0 25px rgba(52, 211, 153, 0.3)',
        'glow-lg': '0 0 45px rgba(45, 106, 79, 0.4)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.04), 0 4px 12px -2px rgba(0, 0, 0, 0.02)',
        'premium': '0 20px 40px -15px rgba(18, 56, 38, 0.07), 0 0 1px 1px rgba(18, 56, 38, 0.05)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        wave: {
          '0%': { transform: 'translateX(0) scaleY(1)' },
          '50%': { transform: 'translateX(-2%) scaleY(1.05)' },
          '100%': { transform: 'translateX(0) scaleY(1)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        wave: 'wave 12s ease-in-out infinite',
        scanline: 'scanline 2.5s linear infinite',
      }
    },
  },
  plugins: [],
}
