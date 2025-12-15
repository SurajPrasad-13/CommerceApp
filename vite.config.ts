import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(), // ✅ Tailwind Vite plugin here
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"], // ✅ only babel plugins here
      },
    }),
  ],
});
