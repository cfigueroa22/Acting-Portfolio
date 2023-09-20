/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      t: "640px",
      l: "1024px",
      d: "1280px",
    },
    colors: {
      lightBlack: "#191A19",
      white: "#FFFFE8",
      pink: "#E3ACF9",
      lightPink: "#FFE5F1",
      lightGray: "#D8D9DA",
      gray: "#7D7C7C",
    },
    extend: {},
  },
  plugins: [],
};
