/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ THIS is the key fix
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
