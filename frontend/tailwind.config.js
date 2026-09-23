/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#F5F2EB",
        inverted: "#31302F",
        primary: "#4A1525",
        tertiary: "#C48B5E",
        offwhite: "#FBF9F5",
        headline: "#1F1E1D",
        body: "#6B6661",
        delete: "#FF0000",
        white: "#FFFFFF"
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
        code: ['"Space Mono"', "monospace"],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
      },
    },
  },
  plugins: [],
};
