/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#742731',       // Deep Maroon
        accent: '#f0c27b',        // Warm Sand
        beige: '#ffe8d6',         // Pale Background
        dark: '#2f2f2f',          // Charcoal
        light: '#f9f4f0',         // Off-white
        secondary: '#a26769',     // Rose Clay
        neutral: '#eae2d6',       // Light Sand
        'primary-dark': '#4b1e25' // Darker Maroon
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
