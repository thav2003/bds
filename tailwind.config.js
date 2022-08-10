/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
  ],
  theme: {
    screens:{
      xs:'375px',
      sm:'600px',
      md:'992px',
      lg:'1200px',
      xl:'1536px',
      mobible:'320px',
      tablet: '481px',
      laptop: '769px',
      desktop: '1025px',
      
      
    },
    fontFamily:{
      sans:['Arial','sans-serif'],
      serif:['Garamond','serif'],
    },
    extend:{
      colors:{
        blue:{
          500:'#1a73e8',
        }
      },
      spacing:{
        128:'32rem'
      },

       
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
    require('tw-elements/dist/plugin')
  ],
}
