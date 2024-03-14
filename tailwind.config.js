/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        custom: '1280px',
      },
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
