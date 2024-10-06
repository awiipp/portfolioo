/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        platypi: ['Platypi'],
        quicksand: ['Quicksand'],
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
};
