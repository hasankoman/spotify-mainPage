/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: "repeat(3,minmax(270px, 1fr))",
      },
    },
  },
  plugins: [],
};
