/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        header: '360px',
        rate: '400px'
      },
      fontSize: {
        h1: '2.6rem'
      },
      screens: {
        xs: '475px'
      },
      colors: {
        main: '#080A1A',
        subMain: '#F20000',
        dry: '#0BOF29',
        star: '#FFB000',
        text: '#COCOCO',
        border: '#465563',
        dryGray: '#E0D5D5',
      },
    },
  },
  plugins:[], 
  // plugins:[require("@tailwindcss/line-clamp")], 
  
};

