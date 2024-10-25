/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      rubik: ["var(--font-rubik)"],
      "rubik-bold": ["var(--font-rubik-bold)"],
    },
    extend: {
      colors: {
        fireBlack: "rgb(52, 49, 49)",
        fireRed: "rgb(160, 71, 71)",
        fireOrange: "rgb(216, 162, 94)",
        fireYellow: "rgb(238, 223, 122)",
      },
      backgroundImage: {
        "lemn-logo": "url('/logo.webp')",
        "fireplace-landscape": "url('/fireplace-landscape.webp')",
        "fireplace-portrait": "url('/fireplace-portrait.webp')",
        "wave": "url('/wave.svg')",
      },
    },
  },
  plugins: [],
};
