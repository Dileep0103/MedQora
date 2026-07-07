/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#14B8A6",
        background: "#F8FAFC",
        surface: "#FFFFFF",

        text: {
          primary: "#1E293B",
          secondary: "#64748B",
        },

        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        admin: "#475569",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },

      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
