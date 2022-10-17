/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mont: "Montserrat"
      },
      backgroundImage: {
        'banner': "url('/src/images/banner.png')",
        'donate': "url('/src/images/help.jpeg')",
        'africa-help': "url('/src/images/africa-help.jpg)",
        'gift-edu': "url('./src/images/gift-edu.jpg)"
      }
    },
  },
  plugins: [require("daisyui")],
};
