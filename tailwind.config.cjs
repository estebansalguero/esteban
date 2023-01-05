module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        esteban_blue: "#0F172A",
        esteban_blue_light: "#5d6e96",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
