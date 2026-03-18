import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D17',
          900: '#0D1929',
          800: '#1B2A4A',
          700: '#243860',
          600: '#2E4A7A',
        },
        brand: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#E6C547',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#9A7D0A',
        },
        orange: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#E6C547',
          500: '#D4AF37',
          600: '#B8960C',
          700: '#9A7D0A',
          800: '#7C6408',
          900: '#5C4A06',
        },
        gold: '#D4AF37',
        primary: '#1B2A4A',
        accent: {
          red:  '#DC2626',
          gold: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
