/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegura que Tailwind escanee todos los archivos de React
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

