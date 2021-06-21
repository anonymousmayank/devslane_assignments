module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          50:'#F1F8F5',
          100:'#D4E9E2',
          500:'#008248'
        },
        secondry:'#1E3932',
        golden:'#cba258',
        accent:'#f3f1e7'
      },
      height:{
        '2xl':'36rem',
        '3xl':'40rem'
      },
      inset:{
        '25':'6.625rem',
        '68':'17rem'
      },
      backgroundImage: theme => ({
        'star': "url('/images/star.png')",
        'star-mobile':"url('/images/mobile-star.webp')"
       }),
       backgroundPosition: {
        '1/2':'50%',
       },
       boxShadow: {
         t:'0px -3px 6px -3px rgb(0 0 0 / 25%)',
         '2xl':'0 0 20px rgb(0 0 0 / 25%)'
       },
       borderWidth: {
         '10':'10px'
       },
       transitionProperty: {
        'border': 'border-width, margin',
       }
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      margin: ['hover'],
      
    },
  },
  plugins: [],
}
