/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#75838F",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accent: "#AB8BFF",
        blue: {
          100: "#428CC3",
          200: "#DEE5FB",
          400: "#57A6E0",
          600: "#2732A5",
        },
        grey: {
          400: "#75838F",
        },
        red: {
          200: "#FF6961",
        },
        orange: {
          400: "#ED7E1C",
        },
      },
    },
  },
  plugins: [],
};
