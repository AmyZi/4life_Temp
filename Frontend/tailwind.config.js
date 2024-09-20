/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutralBlue": "#4C6E91",
        "neutralDGrey": "#4B4B4B",
        "brandPrimary": "#26A69A",
        // "brandPrimary": "#4CAF4F"
        "neutralBlue": "#4C6E91",
        "gray900": "#18191F",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

