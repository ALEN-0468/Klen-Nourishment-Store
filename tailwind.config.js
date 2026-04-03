/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.js"], // This tells Tailwind to scan your HTML for classes
  theme: {
    extend: {
      colors: {
        // ADD YOUR KLEN COLORS HERE
        'primary': '#006B1B', 
        'secondary': '#151d15',
        'surface': '#FFFBFE',
        'surface-container': '#F3F4F6',
        'on-surface': '#1C1B1F',
        'on-surface-variant': '#49454F',
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'], // Or whatever font you used
      },
    },
  },
  plugins: [],
}