/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
      },
      colors: {
        color: {
          primary: "#164875", // Biru Tua 
          accent: "#EAF6FA",  // Biru Muda 
          accent2: "#0B63E5",  // Biru Muda 
          secondary: "#FFB703", // Kuning
          bright: "#ffffff",    // Putih
          dark: "#273B4A", //Biru Gelap
        },
      }      
    },
  },
  plugins: [],
};
