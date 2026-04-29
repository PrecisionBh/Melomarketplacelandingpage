export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        primary: "#d97732",
        border: "#e5e7eb",
        card: "#ffffff",
        accent: "#f3f4f6",
        secondary: "#f5f5f5",
        "muted-foreground": "#6b7280",
      },
      fontFamily: {
        heading: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
}