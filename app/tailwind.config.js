/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#62CDFF",
      },
      fontFamily: {
        barlow: ["var(--font-barlow)"],
      },
      screens: {
        tablet: "768px",
        tabletxl: "1024px",
        laptop: "1200px",
      },
    },
  },
  plugins: [],
};
