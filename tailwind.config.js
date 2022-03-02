const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...colors,
    },
    extend: {},
  },
  plugins: [],
};
