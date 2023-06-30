/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    fontFamily: {
      SFproLight: ["SFproLight", "light"],
      SFproMedium: ["SFproMedium", "medium"],
      SFproRegular: ["SFproRegular", "regular"],
      SFproSemibold: ["SFproSemibold", "semibold"],
      SFproBold: ["SFproBold", "bold"],
      SFproItalic:["SFproItalic","italic"]
    },
    extend: {},
  },
  plugins: [],
};

// "./src/**/*.{html,js}";