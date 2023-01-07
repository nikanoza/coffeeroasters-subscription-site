/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "menu-back":
          "linear-gradient(to bottom, #FEFCF7 35%, rgba(254, 252, 247, 0.504981) 65%)",
        "text-gradient":
          "linear-gradient(180deg, rgba(254, 252, 247, 0.0001) 0%, #FEFCF7 100%);",
      },
      colors: {
        darkBlue: "#333D4B",
        light: "#FEFCF7",
        hulk: "#0E8784",
        gray: "#83888F",
        cream: "#FDD6BA",
        footerBg: "#2C343E",
      },
    },
  },
  plugins: [],
};
