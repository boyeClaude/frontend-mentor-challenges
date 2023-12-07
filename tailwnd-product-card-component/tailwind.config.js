/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./style.css"],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        darkCyan_1: "hsl(158, 54%, 24%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
    },
  },
  plugins: [],
};
