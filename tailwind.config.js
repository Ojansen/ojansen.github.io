/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "white": "#FFF",
      "violet": "#5D45CB",
      "blue": "#4364CE",
      "black": "#000",
    },
    extend: {
      backgroundImage:{
        "business-card": "url('./assets/business_card.png')",
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
