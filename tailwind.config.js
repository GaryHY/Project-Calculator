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
        blackground: '#292D36',
        touche: '#413F42',
        fullblack: '#272931',
        lightGrey: '#EEEFEF',
        darkGrey: '#8C9396',
        darkRose: '#C85C5D',
        cyan: '#2596BE',
      },
    },
  },
  plugins: [],
}
