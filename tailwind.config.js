/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "node_modules/flowbite-react/"],

  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "425px" },
        lg: { min: "1024px", max: "2560px" },
      },
      backgroundImage: {
        mainBg: "url('../public/backgroundImages/mainBg.png')",
        vector: "url('../public/backgroundImages/Vector.png')",
        vectorWhite: "url('../public/backgroundImages/VectorWhite.png')",
        servicesBg: "url('../public/backgroundImages/servicesBg.png')",
        retailImg: "url('../public/backgroundImages/point1.png')",
        offcImg: "url('../public/backgroundImages/point1.png')",
        fBImg: "url('../public/backgroundImages/point1.png')",
        pattern: "url('../public/backgroundImages/Pattern.svg')",
        trendy: "url('../public/backgroundImages/trendy.jpg')",
        whiteCircle: "url('../public/backgroundImages/whiteCircle.png')",
        mobCircle: "url('../public/backgroundImages/mobCircle.png')",
        triangle: "url('../public/backgroundImages/triangle.png')",
      },
      colors: {
        pantone1: "#1D1D1B",
        palm: "#503696",
        gray: "#F6F6F6",
        black: "#1D1D1B",
      },
      fontFamily: {
        Marcellus: ["Marcellus", "serif"],
        Mulish: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
