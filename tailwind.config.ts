import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Keep this only if you have a src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F4B400",
        secondary: "#FFF5D7",
        secondaryLight:" #FFF9E6",
        text: {
          white: "#F8F8F8",
          black: "#0F0F0F",
          lightGrey: "#6B6B6B",
          darkGrey: "#D9D9D9",
        },
        multi: {
          lightGreen: "#B8FF95",
          orange: "#FFC99A",
          pink: "#FFADCD",
          skyBlue: "#AEFCFF",
          yellow: "#FEE079",
          violet: "#C9C6FF",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        crimson: ["Crimson Pro", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;



