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
        lightGold: "#ffa700",
        darkGold: "#CCAC00",
        lightGray: "#ffa700",
      },
      fontFamily: {
        titles: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        navBarHome: "url('/src/assets/home-image.jpg')",
        navBarAbout: "url('/src/assets/about-image.jpg')",
        navBarContact: "url('/src/assets/contact-image.jpg')",
        navBarGiveaway: "url('/src/assets/giveaway-image.jpg')",
        navBarLogIn: "url('/src/assets/login-image.jpg')",
        navBarSales: "url('/src/assets/sales-image.png')",
        blog: "url('/src/assets/blog.jpg')",
        blogSmall: "url('/src/assets/blog-1x1.jpg')",
        navBarGiveawayBuy: "url('/src/assets/comprar-fichas.jpg')",
      },
      gridTemplateColumns: {
        18: "repeat(18, 1fr)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
