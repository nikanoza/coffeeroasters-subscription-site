/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "menu-back":
          "linear-gradient(180deg, rgba(254, 252, 247, 0.504981) 0%, #FEFCF7 55.94%);",
      },
      colors: {
        darkBlue: "#333D4B",
        light: "#FEFCF7",
        hulk: "#0E8784",
      },
    },
  },
  plugins: [],
};
