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
      mobile:{max: '480'},
      tablet: {max: '768px'},
      laptop: {max: '1024px'},
      desktop: {max: '1200px'},
      
      
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
