/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff004f",
        primaryHover: "#ff3b70",
        darkBg: "#000000",
        cardBg: "#0d0d0d",
        cardBorder: "rgba(255, 0, 79, 0.15)",
        cardBorderHover: "rgba(255, 0, 79, 0.4)",
        textSilver: "#ababab",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 15px rgba(255, 0, 79, 0.5)",
        neonHover: "0 0 25px rgba(255, 0, 79, 0.8)",
        cardNeon: "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
