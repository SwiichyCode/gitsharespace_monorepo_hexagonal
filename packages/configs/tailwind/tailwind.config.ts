module.exports = {
  content: ["./src/**/*.{astro,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
        tertiary: "#0000ff",
      },
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
