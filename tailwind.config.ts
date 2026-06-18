import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        swish: {
          green: '#2BDE73',
          cream: '#FAFAF7',
          beige: '#E8E0D0',
          beigedark: '#D4C9B0',
          charcoal: '#1A1A1A',
          charcoalmid: '#2D2D2D',
          darkgreen: '#1B3D2B',
        },
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
