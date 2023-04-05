/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#6c63ff',
      'focus': '#514b93',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'lightgray': '#f9fbfa',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'scarlet': '#FF2400',
  },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}

