/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #192a56 0%, #4a69bd 100%)',
        'gradient-darkPrimary': 'linear-gradient(to right, #1a1826, #1e1f2d, #232733, #292e3a, #2f3640)',
      },
      colors: {
        lightDark: "#1A1826",
        blueNight: "#353b48",
        electroMagnetic: '#2f3640',


        primary: "#192a56",
        secondary: "#4a69bd",
        livid: "#6a89cc",

        'light-gray': "#D3D3D3",
        'silver': "#C0C0C0",


        error: "#D30F0F",
        "error-hover": "#A90000",
        "error-hover-light": "#F83F2A",

        warning: "#FFCA36",
        "warning-hover": "#F8B112",

        success: "#006B60",
        "success-light": "#12B76A",

        diamond: "#1e3799",
        platinum: "#01a3a4",
        bronze: "#AD8A56",
      },
      fontFamily: {
        // primary: ["Noto Sans", "sans-serif"],
        // secondary: ["Alkatra", "cursive"],
      },
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xll: "1440px",

      "2xl": "1650px",
      "3xl": "1920px",
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
