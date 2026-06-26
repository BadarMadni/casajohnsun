import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'desert-black': '#0B0B0B',
        'bronze-gold': '#C7A15A',
        'travertine': '#D9D0C3',
        'warm-stone': '#A79A8E',
        'white-oak': '#BB9B74',
      },
      fontFamily: {
        heading: ['var(--font-cinzel)', 'Georgia', 'serif'],
        body: ['var(--font-montserrat)', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.3em',
        wide: '0.2em',
        widest: '0.4em',
      },
    },
  },
  plugins: [],
}
export default config
