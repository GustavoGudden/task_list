/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          600: '#004B89',
          950: '#012F54',
        },
      },
    },
  },
  plugins: [],
};
