/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/assets/bg.png')"
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'Avenir': ['Avenir', 'serif'],
        'Montserrat': ['Montserrat', 'serif'],
        'Sofia': ['Sofia Sans Semi Condensed', 'sans-serif'],
        'Lexend': ['Lexend', 'serif']
      },
      colors: {
        'textWhite': '#D9D9D9',
        'border-green': 'rgba(37, 164, 88, 0.65)'
      }
    },
  },
  plugins: [],
}
