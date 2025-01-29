/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite', // Define the marquee animation
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)', // Start from the right
          },
          '100%': {
            transform: 'translateX(-100%)', // End at the left
          },
        },
      },
    },
  },
  plugins: [],
};
