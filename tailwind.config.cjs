/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // daisyui: {
  //   // themes: ['winter', 'dark'],
  // },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
