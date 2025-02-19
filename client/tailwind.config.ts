import type { Config } from "tailwindcss";

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#00030D",
        textColor: "#FFFFFF",
        textColorBlack: "#000000",
        foreground: "#010A26",
        primary: "#4F26A6",
        secondary: "#463973",
      },
    },
  },
  plugins: [],
} satisfies Config;
