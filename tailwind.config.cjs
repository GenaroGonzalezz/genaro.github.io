/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: "./styles/tailwind.config.js",
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./index.html",
    "./src/**/*.{js,jsx,html,tsx, ts}",
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/grid1.jpg')",
        // "hero-pattern": "url('/src/assets/herobg.png')",

      },
    },
  },

  plugins: ["tailwindcss , autoprefixer"],
};
