/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        fullblack: '#272931',
        lightGrey: '#EEEFEF',
        darkGrey: '#8C9396',
        darkRose: '#C85C5D',
      },
    },
  },
  plugins: [],
}
