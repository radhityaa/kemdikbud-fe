/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '3rem'
    },
    extend: {
      colors: {
        'blue-dark': '#23489E',
        'blue-primary': '#1275BC'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

