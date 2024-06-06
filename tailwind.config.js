/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{html,js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        'blue-950': '#1E3A8A',
        'blue-900': '#1D4ED8',
      },
    },
  },
  plugins: [],
}
