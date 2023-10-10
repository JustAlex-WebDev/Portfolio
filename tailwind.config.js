/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm308: "308px",
      sm368: "368px",
      sm465: "465px",
      sm500: "500px",
      sm600: "600px",
      sm: "640px",
      md: "768px",
      lg850: "850px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      animation: {
        iconsAnimation1: "iconsAnimation1 4s linear infinite",
        iconsAnimation2: "iconsAnimation2 4s linear infinite",
        iconsAnimation3: "iconsAnimation2 3.5s linear infinite",
        panImage: "panImage 5s linear infinite",
      },
      keyframes: {
        iconsAnimation1: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(50%)" },
          "50.0001%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0%)" },
        },
        iconsAnimation2: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-60%)" },
          "50.0001%": { transform: "translateY(-60%)" },
          "100%": { transform: "translateY(0%)" },
        },
        iconsAnimation3: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(40%)" },
          "50.0001%": { transform: "translateY(40%)" },
          "100%": { transform: "translateY(0%)" },
        },
        panImage: {
          "0%": { objectPosition: "left" },
          "50%": { objectPosition: "right" },
          "50.0001%": { objectPosition: "right" },
          "100%": { objectPosition: "left" },
        },
      },
    },
  },
  plugins: [],
};
