/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'inknut-antiqua': ['"Inknut Antiqua"', 'serif'],
        'cormorant': ['"Cormorant"', 'serif'],
        'zhi-mang-xing': ['"Zhi Mang Xing"', 'cursive']
      }
    },
  },
  plugins: [],
}

