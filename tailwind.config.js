/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '219px',
      },
    },
    extend: {
      colors: {
      'primary': '#ffffff',
      'secondary': '#003C82',
      },
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero-bg.png')",
      },
    },
  },
  plugins: [],
};