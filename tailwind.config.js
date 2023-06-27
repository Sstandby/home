/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "home-blue": { 400: "#313B56", 500: "#172044" },
      },
    },
  },
  plugins: [],
};
