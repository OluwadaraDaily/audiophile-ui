// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'primary': '#D87D4A',
        'primary-light': '#FBAF85',
        'black-light': '#101010',
        'grey': '#F1F1F1',
        'grey-light': '#FAFAFA',
        'danger': '#CD2C2C',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}