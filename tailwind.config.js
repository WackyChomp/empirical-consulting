/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#ebf4f8",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#0a2855",      /* dark blue color 800 */
        "primary-100": "#d1e0f6",   /* from #1964d4 */
        "primary-300": "#75a2e5",   /* from #1964d4 */
        "primary-500": "#1964d4",   /* from #1964d4 */
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/NAME_RIGHT_HERE.png')",
        abstractwaves: "url('./assets/NAME_RIGHT_HERE.png')",
        sparkles: "url('./assets/NAME_RIGHT_HERE.png')",
        circles: "url('./assets/NAME_RIGHT_HERE.png')",
      },
    },
    screens: {                  //media query
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};