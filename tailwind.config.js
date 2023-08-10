/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "#FAFAFA",
        black: "#000000",
        lightGreen: "#25D366",
        darkGreen: "#075E54",
        lightGold: "#FFD700",
        darkGold: "#CCAC00",
        lightGray: "#F9F9F9",
      },
      fontFamily: {
        titles: ["Old Standard TT", "serif"],
        subTitles: ["Playfair Display", "serif"],
        navBarTexts: ["Gothic A1", "sans-serif"],
      },
      backgroundImage: {
        navBar: "url('/src/assets/navBarImage.jpg')",
      },
      gridTemplateColumns: {
        18: "repeat(18, 1fr)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
