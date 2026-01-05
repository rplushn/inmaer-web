import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // INMAER Brand Colors - Fuente de la Verdad
        "inmaer-cream": "#F7F7F7", // Color de Fondo Premium - Tono beige suave confirmado
        "inmaer-dark": "#0A0A0A",   // Texto principal - Color oscuro premium
      },
    },
  },
  plugins: [],
};

export default config;
