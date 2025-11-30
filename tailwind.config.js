/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6', // purple
        'primary-dark': '#5B21B6',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  extend: {
  animation: {
    "spin-slow": "spin 6s linear infinite",
  },
},
  plugins: [],
}
