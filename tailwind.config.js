/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C853',
        'primary-dark': '#1B5E20',
        dark: '#0D0D0D',
        'dark-light': '#1A1A1A',
        'dark-card': '#1E1E1E',
      },
    },
  },
  plugins: [],
}