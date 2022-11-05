/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        reds: {
          50: "#ffe6f5",
          100: "#f5beda",
          200: "#ea95c1",
          300: "#e06ca7",
          400: "#d6438e",
          500: "#bc2975",
          600: "#931e5b",
          700: "#6b1441",
          800: "#420a28",
          900: "#1c010f",
        },
      },
    },
  },
  plugins: [],
};
