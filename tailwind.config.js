/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFAF3',
          100: '#FBF5E6',
          200: '#F7EBCC',
          300: '#F3E1B3',
          400: '#EFD799',
          500: '#EBCD80',
          600: '#D4B973',
          700: '#A68E59',
          800: '#7D6A42',
          900: '#53462C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};