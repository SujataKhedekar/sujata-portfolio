/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  // Project accent colors are applied via dynamic class names (text-${color}),
  // so Tailwind's scanner can't see them — list them explicitly.
  safelist: ["text-green", "text-red", "text-orange", "text-coral"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        foreground: "#D7E2EA",
        sky: "#8ECAE6",
        bluegreen: "#219EBC",
        deepspace: "#023047",
        amber: "#FFB703",
        orange: "#FB8500",
        red: "#EA5252",
        green: "#5B7E3C",
        cream: "#FBF4EA",
        plum: "#3B2A35",
        coral: "#FF6B5E",
        peach: "#F4D9C6",
      },
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
