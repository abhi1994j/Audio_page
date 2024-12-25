/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        'custom-shadow':'5px 100px 10px rgba(0, 0, 0, 0.1)',
      },
      // fontFamily: {
      //   'poppins': ['Poppins', 'sans-serif'],
      // },
      maxWidth:{
        '60px':'60px',
      },
      textColor:{
        'yellow1':'#e9a200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}