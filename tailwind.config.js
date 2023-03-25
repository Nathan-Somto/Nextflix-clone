/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{tsx,ts,jsx,jsx}",
   
  ],
  theme: {
    'colors':{
      'primary-red':"#B9090B",
      'mid-gray':'#6D6D6E',
      'smoke-white':'#E5E5E5',
      'primary-black':'#141414'
    },
    extend: {},
  },
  plugins: [],
}
