/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "blue": {
          bg: "#0F1437",
          bgDark: "#080D51",
          border: "#194EEF",
          lightLine:"#7BE5E1",
        }
      }
    },
  },
  plugins: [],
}

