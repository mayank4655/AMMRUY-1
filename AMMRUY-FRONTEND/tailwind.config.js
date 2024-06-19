/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': 'rgba(119, 119, 119, 0.2)',
        'green-gradient': 'rgba(5, 237, 153, 1)',
        'dark-green-gradient': 'rgba(2, 148, 148, 1)'
      },
    },
    gridTemplateColumns: {
      'auto-fit-100': 'repeat(auto-fit, minmax(350px, 1fr))',
    },
  },
  plugins: [],
}

