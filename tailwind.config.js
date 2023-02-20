/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "background-color": "#1B2838",
          color: "white",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
