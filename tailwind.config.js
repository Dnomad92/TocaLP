/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
        center: true,
    },
    extend: {
      colors: {
        yellow: {
          300: '#ffcc00'
        },
        purple: {
          950: '#660287',
        }
      }
    },
  },
  plugins: [],
}

