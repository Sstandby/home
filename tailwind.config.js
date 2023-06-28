/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "home-blue": {
          300: "#19224d",
          400: "#1F2C67",
          500: "#1D2645",
          600: "#0C0E18",
        },
        "icon-inactive": "#363F54",
        "icon-active": "#8D91A0",
      },
    },
  },
  plugins: [],
};
