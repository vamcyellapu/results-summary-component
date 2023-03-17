/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily:{
      sans:['Hanken Grotesk','sans-serif']
    },
    extend: {
      colors:{
        lightRed:'hsl(0, 100%, 67%)',
        orangeYellow:'hsl(39, 100%, 56%)',
        greenTeal:'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',
        paleBlue:'hsl(221, 100%, 96%)',
        lightLavender:'hsl(241, 100%, 89%)',
        darkGrayBlue:'hsl(224, 30%, 27%)',
        lightSlateBlue:'hsl(252, 100%, 67%)',
        lightRoyalBlue:'hsl(241, 81%, 54%)',
        violetBlue:'hsla(256, 72%, 46%, 1)',
        persianBlue: 'hsla(241, 72%, 46%, 0)',

      },
      boxShadow:{
        'blue':'0 30px 60px -15px hsla(234, 85%, 45%,0.2)'
      }
      
    },
  },
  plugins: [],
}
