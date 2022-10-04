/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm":"40px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1288px",
      "2xl":"1536px"
    },
    extend: {
      // backgroundImage:{
      //   'clinic-image':'url("./assets/images/doctor.webp")'
      // }
    },
  },
  plugins: [],
};
