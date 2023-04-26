/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gelap': '#111111',
        'terang': '#f6f6f6',
      },
      fontFamily: {
        'rubik': ['rubik', 'sans-serif'],
        'rubik-italic': ['rubik-italic', 'sans-serif'],
        'rubik-bold': ['rubik-bold', 'sans-serif'],
        'rubik-bold-italic': ['rubik-bold-italic', 'sans-serif'],
        'rubik-semibold': ['rubik-semibold', 'sans-serif'],
        'rubik-semibold-italic': ['rubik-semibold-italic', 'sans-serif'],
        'rubik-medium': ['rubik-medium', 'sans-serif'],
        'rubik-medium-italic': ['rubik-medium-italic', 'sans-serif'],
        'rubik-black': ['rubik-black', 'sans-serif'],
        'rubik-black-italic': ['rubik-black-italic', 'sans-serif'],
        'rubik-extrabold': ['rubik-extrabold', 'sans-serif'],
        'rubik-extrabold-italic': ['rubik-extrabold-italic', 'sans-serif'],
        'rubik-light': ['rubik-light', 'sans-serif'],
        'rubik-light-italic': ['rubik-light-italic', 'sans-serif'],
        'rubik-extralight': ['rubik-extralight', 'sans-serif'],
        'rubik-extralight-italic': ['rubik-extralight-italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
