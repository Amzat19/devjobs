/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgHeader': "url('/src/assets/Triangle.png')",
        'mobileBg': "url('/src/assets/mobileBg.png')"
      },
      colors: {
        'violet': '#5964E0',
        'lightGray': '#F4F6F8',
        'darkGray': '#6E8098',
        'hoverViolet': '#939BF4',
        'darkModeText': '#FFF',
        'darkModeBg': '#121721',
        'darkModeElemBg': '#19202D'
      },
      gridTemplateColumns: {
        'filtersDesktop': '35% 30% 35%',
        'filtersTablet': '31% 32% 37%',
        'filtersMobile': '60% 20% 20%'
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
