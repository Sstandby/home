/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "home-blue": { 400: "#17214A", 500: "#1D2645", 600: "#090A11" },
        "icon-inactive": "#363F54",
        "icon-active": "#8D91A0",
      },
    },
  },
  plugins: [],
}
