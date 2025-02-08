/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome': "url('/assets/bg-welcome.png')",
      },
      colors:{
        'dark-custom-blue': '#050020'
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Use Inter as the default sans-serif font
    },
  },
  plugins: [],
}

