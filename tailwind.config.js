// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leetcode: {
          orange: '#FFA116',
          green: '#58B947',
        },
      },
    },
  },
  plugins: [],
}
