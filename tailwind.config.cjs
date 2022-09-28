/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:theme=>({
        'dark-blue':'var(--dark-blue)' ,
        'dark-blue-testimonials':'var(--dark-blue-testimonials)' ,
        'dark-blue-footer':'var(--dark-blue-footer)' ,
        'cyan':'var(--cyan)' ,
        'blue':'var(--blue)' ,
      }),
      backgroundImage:theme=>({
        'desktop':"url('./src/assets/bg-curvy-desktop.svg')",
        'mobile':"url('./src/assets/bg-curvy-mobile.svg')",
        'quotes':"url('./src/assets/bg-quotes.png')",
      }),
      textColor: theme => ({
        'cyan':'var(--cyan)' ,
        'light-red-error':'var(--light-red-error)' ,
      }),
    },
  },
  plugins: [],
}
