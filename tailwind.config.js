/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blueBox: '#16202D',
        blue1: '#3B6491',
        greenButton: '#4C6B22',
        darkGreen: '#42533B',
        grayComment: '#3E4956',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          'background-color': '#1B2838',
          color: 'white',
        },
      },
    ],
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
}
