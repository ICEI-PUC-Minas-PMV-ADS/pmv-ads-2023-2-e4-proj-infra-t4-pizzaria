/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './index/html'
  ],
  theme: {
    extend: {
      colors: {
        'orange-test': '#F55529',
        'pizzaria' : "#EEE8E8",
        'reservetion': '#3B3534'
      },
      textColor: {
        'orange-test': '#F55529',
      },
      height: {
        '70vh': '70vh',
      },
      minWidth: {
        '50': '200px',
      }
    },
  },
  plugins: [],
}

