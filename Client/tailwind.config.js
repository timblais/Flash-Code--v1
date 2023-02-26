/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'landing': "url('../public/landing-splash.jpg')",
    },
    fontFamily: {
      'cutiveMono': ['Cutive Mono', 'monospace'],
    },
    extend: {
        animation: {
            bounce200: 'bounc 1s infinite 200ms',
            bounce400: 'bounc 1s infinite 400ms',
        },
        height: {
          '1/20': '5%',
          '7.5%': '7.5%',
          '9/10': '90%',
          '95%': '95%',
        }
    },
  },
  plugins: [],
}
