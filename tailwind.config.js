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
        panImage2: "panImage2 10s linear infinite",
        scaleImage: "scaleImage 10s linear infinite",
      },
      keyframes: {
        panImage: {
          "0%": { objectPosition: "top" },
          "50%": { objectPosition: "bottom" },
          "50.0001%": { objectPosition: "bottom" },
          "100%": { objectPosition: "top" },
        },
        panImage2: {
          "0%": { objectPosition: "left" },
          "50%": { objectPosition: "right" },
          "50.0001%": { objectPosition: "right" },
          "100%": { objectPosition: "left" },
        },
        scaleImage: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
          "50.0001%": { transform: "scale(1.25)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
