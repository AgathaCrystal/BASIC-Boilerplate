/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/pages/*.html",
    "./src/components/*.html",
    "./src/sections/*.html",
    "./src/sections/*.html",
    "./src/**/*.{js,ts,jsx,tsx,scss}",
    "./src/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // 'primary': '#3878d4',
        'primary': '#6e258d',
        'primary-dark': '#6e258d',
        'secondary': '#84597d',
      },
      aspectRatio: {
        '4/3': '5 / 4',
      },
    },
  },
  plugins: [],
}