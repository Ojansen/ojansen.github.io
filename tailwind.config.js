/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      "white": "#FFF",
      "black": "#1f1f1f",
      "violet": "#5D45CB",
      "blue": "#4364CE",
      "green": "#20D430",
    },
    extend: {
      backgroundImage:{
        "business-card": "url('./assets/business_card.png')",
        "material-design": "url('./assets/header3.png')",
        "pastel": "url('./assets/pastel_white.png')",
        "nature": "url('./assets/abstract_nature.png')",
        "nature2": "url('./assets/abstract_nature2.png')",
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
