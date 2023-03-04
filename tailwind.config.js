/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        'custom_primary': '#1597E4',
        'placeholder_color': '#7A7A7A'
      }
    }
  },
  plugins: [],
}
