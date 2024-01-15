/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        header: "url('./src/assets/bg.jpg')"
       }, 
       
      fontFamily: {
       playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}