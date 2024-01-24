/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./style.css"],
  theme: {
    extend: {
      colors: {
        veryDarkBlueMain_BG: "hsl(217, 54%, 11%)",
        veryDarkBlueCard_BG: "hsl(216, 50%, 16%)",
        veryDarkBlueLine: "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
      },

      spacing: {
        0.5: "0.031rem",
      },

      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
