// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#D87D4A',
        'primary-light': '#FBAF85',
        'black-light': '#101010',
        'grey': '#F1F1F1',
        'grey-light': '#FAFAFA',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}