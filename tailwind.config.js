/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#2DCAB1",
        skyblue: "#4A94CC",
        graydark: "#343847",
        grayCustom: "#535659",
        black: "#101322",
        violet: "#4D3060",
        opaqueskyblue: "#49657E",
      },
    },
  },
  plugins: [],
};
