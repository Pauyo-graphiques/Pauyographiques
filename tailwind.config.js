/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#111111", // couleur sombre pro
          light: "#1f1f1f",
          accent: "#e5e5e5"
        }
      },
      animation: {
        splashzoom: "splashzoom 2s ease-in-out forwards"
      },
      keyframes: {
        splashzoom: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
}
