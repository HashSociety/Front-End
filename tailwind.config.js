/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background": "#0F121B",
        "primary": "#437EFF",
        "content-bg": "#010613",
      }
    },
    
  }, 
  plugins: [],
}