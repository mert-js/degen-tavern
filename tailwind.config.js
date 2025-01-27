/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Tavern: ["Tavern", "serif"],
        OpenSans: ["Open Sans", "serif"],
      },
      colors: {
        "bondi-blue": {
          50: "#effafc",
          100: "#d7f0f6",
          200: "#b4e2ed",
          300: "#81ccdf",
          400: "#46acca",
          500: "#2c95b5",
          600: "#267594",
          700: "#256079",
          800: "#265064",
          900: "#244455",
          950: "#132b39",
        },
      },
    },
  },
  plugins: [],
};
