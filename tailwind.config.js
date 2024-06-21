/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        textprimary: '#ff3333',
        bgprimary: '#f1f5f9',
        dark: '#0f172a',
        secondary: '#334155'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

