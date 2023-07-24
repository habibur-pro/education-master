/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {
          "primary": "#ff1949",
          "secondary": "#f6d860",
          "accent": "#eff7ff",
          "neutral": "#3d4451",
          "base": "#eff7ff",
        },
      },
      "dark",
      "cupcake",
    ],
  },





}

