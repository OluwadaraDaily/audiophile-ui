// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    screens: {
      'sm': '340px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#D87D4A',
        'primary-light': '#FBAF85',
        'black-light': '#101010',
        'grey': '#F1F1F1',
        'grey-light': '#FAFAFA',
        'active-grey': '#979797',
        'danger': '#CD2C2C',
        'input-grey': '#cfcfcf',
      }
    },
    backgroundImage: {
      'zx7-speaker': "url('/src/assets/img/speakers/zx7-speaker-lg.png')",
      'zx7-speaker-sm': "url('/src/assets/img/speakers/zx7-speaker-sm.png')",
      'zx7-speaker-md': "url('/src/assets/img/speakers/zx7-speaker-md.png')",
      'yx1-earphone': "url('/src/assets/img/earphones/yx1-earphones-lg.png')",
      'yx1-earphone-sm': "url('/src/assets/img/earphones/yx1-earphones-sm.png')",
      'yx1-earphone-md': "url('/src/assets/img/earphones/yx1-earphones-md.png')",

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}