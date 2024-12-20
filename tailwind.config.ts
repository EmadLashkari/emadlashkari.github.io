import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["var(--josefin)"],
        londrina: ["var(--landrina)"],
      },
    },
    colors: {
      white: "#FFFFFF",
      orange: "#D99058",
      rose: "#FE28A2",
      blue: "#1C39BB",
      pink: "#F77FBE",
      green: "#2A9D8F",
      red: "#CC3333",
      darkSmoke: "#264653",
    },
  },
  plugins: [],
};
export default config;
