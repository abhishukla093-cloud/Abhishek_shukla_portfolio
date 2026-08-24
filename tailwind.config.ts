import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07101d",
        panel: "#0d1727",
        line: "#21304a",
        accent: "#8fa8ff"
      }
    }
  },
  plugins: []
};
export default config;
