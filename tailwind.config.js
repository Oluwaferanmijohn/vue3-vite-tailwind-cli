/** @type {import('tailwindcss').Config} */
module.exports = { 
   plugins: [
  require('flowbite/plugin')
],

  content: ["./node_modules/flowbite/**/*.js", "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      colors: {
        "primary-color": "",
      },
      fontFamily: {
        Raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
