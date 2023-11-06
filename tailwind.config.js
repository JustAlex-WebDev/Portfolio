/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm350: "350px",
      sm500: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl1100: "1100px",
      xl: "1280px",
      xxl: "1500px",
    },
    extend: {
      animation: {
        panImage: "panImage 20s linear infinite",
        scaleImage: "scaleImage 10s linear infinite",
        colorImage1: "colorImage 3s linear infinite 0.3s",
        colorImage2: "colorImage 3s linear infinite 0.5s",
        colorImage3: "colorImage 3s linear infinite 0.7s",
        colorImage4: "colorImage 3s linear infinite 0.9s",
        colorImage5: "colorImage 3s linear infinite 1.2s",
        colorImage6: "colorImage 3s linear infinite 1.5s",
      },
      keyframes: {
        panImage: {
          "0%": { objectPosition: "top" },
          "50%": { objectPosition: "bottom" },
          "50.0001%": { objectPosition: "bottom" },
          "100%": { objectPosition: "top" },
        },
        scaleImage: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
          "50.0001%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
        colorImage: {
          "0%": { color: "black" },
          "50%": { color: "rgb(234 88 12)" },
          "50.0001%": { color: "rgb(234 88 12)" },
          "100%": { color: "black" },
        },
      },
    },
  },
  plugins: [],
};
