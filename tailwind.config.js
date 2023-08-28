/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "#FAFAFA",
        black: "#1a1a1a",
        lightGreen: "#25D366",
        darkGreen: "#075E54",
        lightGold: "#efa81f",
        darkGold: "#CCAC00",
        lightGray: "#F9F9F9",
      },
      fontFamily: {
        titles: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        navBarHome: "url('/src/assets/home-image.jpg')",
        blog: "url('/src/assets/blog.jpg')",
        blogSmall: "url('/src/assets/blog-1x1.jpg')",
      },
      gridTemplateColumns: {
        18: "repeat(18, 1fr)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
