/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{tsx,ts,jsx,jsx}",
   
  ],
  theme: {
    'colors':{
      'primary-red':"#B9090B",
      'mid-gray':'rgb(45,45,45)',
      'smoke-white':'#E5E5E5',
      'primary-black':'#141414'
    },
    extend: {},
  },
  plugins: [],
}
