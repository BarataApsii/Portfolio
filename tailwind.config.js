/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue,css}', // All files in the src folder and subfolders
    './public/**/*.html', // All HTML files in the public folder and subfolders
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    // You can extend the theme here if needed
  },
  plugins: [],
}
