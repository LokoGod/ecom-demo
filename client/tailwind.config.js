/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        navbar: '#F0F0F0',
        secondary: '#F39C12',
        
      },

      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        Sarina:["Sarina"],
        Oswald:["Oswald"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      },
    },
  },
  plugins: [],
}