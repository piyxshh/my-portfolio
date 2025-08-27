// tailwind.config.ts
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
        'dark-bg': '#121212',
        'light-text': '#E0E0E0',
        'accent': '#00BFFF', // Deep Sky Blue - a nice accent
      },
    },
  },
  plugins: [],
}
export default config