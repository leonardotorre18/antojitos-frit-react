/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'secondFont': 'belgium',
        'mainFont': ['Roboto', 'san-serif']
      },
      colors: {
        'secondColor': '#FFAC01'
      }
    },
  },
  plugins: [],
}

