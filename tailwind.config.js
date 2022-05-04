const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },

    fontSize: {
      sm: ['60px', '60px'],
      md: ['50px', '55px'],
      desc: ['20px','22px'],
      title: ['18px', '20px'],
      psize: ['15px', '20px'],
      tsize: ['54px', '60px'],
      dsize: ['16px', '27px'],
      smsize: ['13px', '20px'],
    },
    
    extend: {
      colors:{
        'main-c': '#35B8BE',
        'text-c': '#28224B',
        'desc-c': '#546285',
      },

      fontFamily: {
        'inter': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}