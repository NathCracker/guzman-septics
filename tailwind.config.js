const { SERVER_FILES_MANIFEST } = require('next/dist/shared/lib/constants')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'guzmans-bg': "url('/images/guzmansepticbackground.jpg')",
        'septic-cleaning': "url('/images/SepticCleaning.jpg')",
      }
    },
    fontFamily:{
      'custom': ['Nunito', 'sans-serif'],
      'lobster': ['Lobster', 'cursive']
    }
  },
  plugins: [],
}
