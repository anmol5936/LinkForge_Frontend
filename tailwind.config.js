/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('https://res.cloudinary.com/dzxgf75bh/image/upload/v1714550298/pbix5dqad43qbj5apzer.jpg')",
      },

    },
  },
  plugins: [],
}