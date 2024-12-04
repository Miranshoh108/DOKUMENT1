/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        a1818: "#181818",
        a33a: "#399a3a",
        bleck: "#000",
        fb: "#f6f7fb",
      },
      fontFamily: {
        sans: ["Inter "],
      },
    },
  },
  plugins: [],
};
