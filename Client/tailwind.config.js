/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            bounce200: 'bounc 1s infinite 200ms',
            bounce400: 'bounc 1s infinite 400ms',
        }
    },
  },
  plugins: [],
}
