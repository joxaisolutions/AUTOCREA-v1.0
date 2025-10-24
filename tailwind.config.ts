import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A90E2",
          50: "#EBF4FF",
          100: "#D7E9FF",
          200: "#B0D3FF",
          300: "#88BDFF",
          400: "#61A7FF",
          500: "#4A90E2",
          600: "#3B73B5",
          700: "#2C5688",
          800: "#1D395B",
          900: "#0E1C2E",
        },
        secondary: {
          DEFAULT: "#9B59B6",
          50: "#F5EDFA",
          100: "#EBDBF5",
          200: "#D7B7EB",
          300: "#C393E1",
          400: "#AF6FD7",
          500: "#9B59B6",
          600: "#7C4792",
          700: "#5D356E",
          800: "#3E2349",
          900: "#1F1225",
        },
        accent: {
          DEFAULT: "#00D9FF",
          50: "#E5F9FF",
          100: "#CCF3FF",
          200: "#99E7FF",
          300: "#66DBFF",
          400: "#33CFFF",
          500: "#00D9FF",
          600: "#00AECC",
          700: "#008299",
          800: "#005766",
          900: "#002B33",
        },
        background: {
          DEFAULT: "#0A0E27",
          light: "#1a1f3a",
        },
        surface: "#1a1f3a",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #4A90E2 0%, #9B59B6 100%)",
        "gradient-accent": "linear-gradient(135deg, #00D9FF 0%, #4A90E2 100%)",
        "gradient-bg": "linear-gradient(180deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)",
      },
      borderColor: {
        DEFAULT: "rgba(74, 144, 226, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
