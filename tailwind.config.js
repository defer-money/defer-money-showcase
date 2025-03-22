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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        bounce: 'bounce 2s infinite',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'], // Use Inter as the default sans-serif font
    },
  },
  plugins: [],
}