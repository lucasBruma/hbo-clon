/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'secondary': '#d3d3d3',
        'tertiary': '#837b88',
        'btn': '#2d2a31',
        'btn-hover': '#242120',
        'bg-dark': '#050211',
        'bg-very-dark': '#03010a'
      }
    },
  },
  plugins: [],
}
