/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Verde': '#008055',
      },
      fontFamily: {
        'hind-madurai': ['"Hind Madurai"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
