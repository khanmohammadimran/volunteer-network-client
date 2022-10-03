/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "Montserrat"
      },
      backgroundImage: {
        'banner': "url('/src/images/banner.png')"
      }
    },
  },
  plugins: [require("daisyui")],
};
