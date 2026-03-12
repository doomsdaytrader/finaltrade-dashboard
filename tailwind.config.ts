import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "white",
        foreground: "black",
        neon: {
          blue: "#00f0ff",
          green: "#00ff66",
          red: "#ff0055",
        }
      },
    },
  },
  plugins: [],
};
export default config;
