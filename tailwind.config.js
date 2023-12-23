/** @type {import('tailwindcss').Config} */
module.exports = {
  rules: [
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      height: {'64px':'64px','350px':'350px'},
      width:{'485px':'485px','380px':'380px','10%':'10%'},
      colors: {
        'lgreen':"rgba(30,213,169,1)",
        'primary':'rgba(3,37,65,1)',
        'lightBlue': 'rgba(1,180,228,1)'
      },
      backgroundColor: {
        'primary':'rgba(3,37,65,1)',
        'pri2nd': 'linear-gradient(to right,rgba(3,37,65,.75) 0%,rgba(3,37,65,.75) 100%)',
        'lgreen': "rgba(30,213,169)"
      },
   
      maxWidth: {
        '1300':'1300px',
      },
      
      fontFamily: {
        'sans': ['"Source Sans Pro",Arial, sans-serif'],
      },
      boxShadow: {
        'option': '0 2px 8px rgba(0,0,0,0.1)'
      }
      
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

