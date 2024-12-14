/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'inknut-antiqua': ['"Inknut Antiqua"', 'serif'],
      }
    },
  },
  plugins: [],
}

