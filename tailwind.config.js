/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      rotate: {
        '-25': '-25deg'
      },
      margin: {
        '26': '6.5rem'
      }
    },
  },
  plugins: [],
}

