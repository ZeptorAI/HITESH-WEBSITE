/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#141414',
        'surface-2': '#1A1A1A',
        border: '#1F1F1F',
        'border-2': '#2A2A2A',
        gold: '#D4AF37',
        'gold-dark': '#B8932E',
        'gold-light': '#E5C158',
        red: '#DC2626',
        'red-dark': '#991B1B',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A1A1AA',
        'text-muted': '#71717A',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
