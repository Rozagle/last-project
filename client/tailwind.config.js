
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6391FF",
        secondary: "#00f6ff",
      },
    },
    screens: {
      xxs: "300px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      xsm:"780px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
    boxShadow: {
      "3xl": "0px 10px 50px 0px rgba(0,0,0,0.15)",
    },
  },
  plugins: []
};
