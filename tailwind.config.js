/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#616161",
        background: "#fafafa",
        primary: "#dbdbdb",
      },
      red: {
        primary: "#ed4956",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
