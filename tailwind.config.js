/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-opensans)"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        blue: "#023278",
        darkBlue: "#000442",
        orange: "#DE7301",
        orange2: "#ED8548",
        cyan: "#7BD4FF",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
