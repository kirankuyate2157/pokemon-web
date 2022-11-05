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
        yt: {
          50: "#fff7dd",
          100: "#fcecb3",
          200: "#f8e485",
          300: "#f6de56",
          400: "#f3c829",
          500: "#d9a111",
          600: "#a97209",
          700: "#794904",
          800: "#482700",
          900: "#1a0b00",
        },
      },
    },
  },
  plugins: [],
};
