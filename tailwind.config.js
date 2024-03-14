/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        custom: '1280px',
      },
    },
    colors: {
      primary: '#ff5201',
      white: '#fff',
      gray: '0xA69999',
      black: '#000000',
    },
    container: {
      center: true,
    },
    fontFamily: {
      exo: ['Exo\\ 2', 'sans-serif'],
    },
  },
  plugins: [],
};
